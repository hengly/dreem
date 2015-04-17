/*
 The MIT License (MIT)

 Copyright ( c ) 2014-2015 Teem2 LLC

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

Instantiates dr classes from package JSON.
*/
define(function(require, exports){
  var maker = exports,
    domRunner = require('./domRunner.js'),
    dreemParser = require('./dreemParser.js');

  // Pull in the dr core
  require('$ROOT/rem/dr/dist/dr.js');

  /** Built in tags that dont resolve to class files or that resolve to 
      class files defined in the core. */
  maker.builtin = {
    // Classes
    node:true,
    view:true,
    baselayout:true,
    button:true,
    animator:true,
    
    // Class Definition
    class:true,
    mixin:true,
    
    // Special child tags for a Class or Class instance
    method:true,
    attribute:true,
    handler:true,
    state:true,
    setter:true
  };

  maker.makeFromPackage = function(pkg) {
    // Compile methods
    try {
      // Transform this["super"]( into this.callSuper( since .dre files
      // use super not callSuper.
      pkg.methods = pkg.methods.split('this["super"](').join('this.callSuper(').split('this.super(').join('this.callSuper(');
      
      new Function('methods', pkg.methods)(pkg.compiledMethods = []);
      delete pkg.methods;
    } catch(e) {
      domRunner.showErrors(new dreemParser.Error('Exception in evaluating methods ' + e.message));
      return;
    }
    
    // Prefill compiled classes with classes defined in core
    pkg.compiledClasses = {
      node:dr.Node,
      view:dr.View,
      baselayout:dr.BaseLayout,
      button:dr.Button,
      animator:dr.Animator
    };
    
    // Make pkg available to dr since child processing is initiated from there.
    dr.maker = maker;
    dr.pkg = pkg;
    
    // Start processing from the root downward
    maker.walkDreemJSXML(pkg.root.child[0], null, pkg);
    
    dr.notifyReady();
  };

  maker.walkDreemJSXML = function(node, parentInstance, pkg) {
    var compiledMethods = pkg.compiledMethods,
      tagName = node.tag,
      children = node.child;
    
    var klass;
    if (tagName.startsWith('$')) {
      if (tagName === '$comment') {
        // Ignore comments
        return;
      } else if (tagName === '$text') {
        console.log('Body Text: ', node.value);
        return;
      } else {
        console.log("Unexpected tag: ", tagName);
        return;
      }
    } else {
      klass = maker.lookupClass(tagName, pkg);
    }
    
    // Instantiate
    var attrs = node.attr || {},
      mixins = [],
      instanceMixin = {},
      instanceChildrenJson,
      instanceHandlers,
      instanceAttrs, instanceAttrValues;
    
    // Get Mixins
    var mixinNames = attrs.with;
    delete attrs.with;
    if (mixinNames) {
      mixinNames.split(/,\s*/).forEach(
        function(mixinName) {
          mixins.push(maker.lookupClass(mixinName, pkg));
        }
      );
    }
    
    var i, len, childNode, childAttrs;
    if (children) {
      i = 0;
      len = children.length;
      for (; len > i;) {
        childNode = children[i++];
        childAttrs = childNode.attr;
        switch (childNode.tag) {
          case 'setter':
            var methodId = childNode.method_id;
            if (methodId != null) {
              var compiledMethod = compiledMethods[methodId];
              if (compiledMethod) {
                instanceMixin[dr.AccessorSupport.generateSetterName(childAttrs.name)] = compiledMethod;
              } else {
                throw new Error('Cannot find method id' + methodId);
              }
            }
            break;
          case 'method':
            var methodId = childNode.method_id;
            if (methodId != null) {
              var compiledMethod = compiledMethods[methodId];
              if (compiledMethod) {
                instanceMixin[childAttrs.name] = compiledMethod;
              } else {
                throw new Error('Cannot find method id' + methodId);
              }
            }
            break;
          case 'handler':
            if (!instanceHandlers) instanceHandlers = [];
            if (childAttrs.method) {
              instanceHandlers.push({name:childAttrs.method, event:childAttrs.event, reference:childAttrs.reference});
            } else {
              var methodId = childNode.method_id;
              if (methodId != null) {
                var compiledMethod = compiledMethods[methodId];
                if (compiledMethod) {
                  var methodName = '__handler_' + methodId;
                  instanceMixin[methodName] = compiledMethod;
                  instanceHandlers.push({name:methodName, event:childAttrs.event, reference:childAttrs.reference});
                } else {
                  throw new Error('Cannot find method id' + methodId);
                }
              }
            }
            break;
          case 'attribute':
            if (!instanceAttrs) {
              instanceAttrs = {};
              instanceAttrValues = {};
            }
            instanceAttrs[childAttrs.name] = childAttrs.type || 'string'; // Default type is string
            instanceAttrValues[childAttrs.name] = childAttrs.value;
            break;
          case 'state':
            console.log('DR STATE', childNode);
            // FIXME: add state to instance definition
            break;
          default:
            if (!instanceChildrenJson) instanceChildrenJson = [];
            instanceChildrenJson.push(childNode);
        }
      }
    }
    
    // Build default attributes
    var combinedAttrs = {};
    len = mixins.length;
    if (len > 0) {
      i = 0;
      for (; len > i;) {
        dr.extend(combinedAttrs, mixins[i++].defaultAttrValues);
      }
    }
    if (instanceAttrValues) dr.extend(combinedAttrs, instanceAttrValues);
    dr.extend(combinedAttrs, attrs);
    
    // Setup __makeChildren method if instanceChildrenJson exist
    if (instanceChildrenJson) {
      instanceMixin.__makeChildren = new Function('this.callSuper(); dr.makeChildren(this, ' + JSON.stringify(instanceChildrenJson) + ');');
    }
    
    // Setup __registerHandlers method if klassHandlers exist
    if (instanceHandlers) {
      instanceMixin.__registerHandlers = new Function('this.callSuper(); dr.registerHandlers(this, ' + JSON.stringify(instanceHandlers) + ');');
    }
    
    // Build setters for attributes
    if (instanceAttrs) {
      var setterName;
      for (var attrName in instanceAttrs) {
        setterName = dr.AccessorSupport.generateSetterName(attrName);
        if (!instanceMixin[setterName]) { // Don't clobber an explicit setter
          instanceMixin[setterName] = new Function(
            "value", "this.setActual('" + attrName + "', value, '" + instanceAttrs[attrName] + "');"
          );
        }
      }
    }
    
    mixins.push(instanceMixin);
    if (!parentInstance) mixins.push(dr.SizeToViewport); // Root View case
    
    new klass(parentInstance, combinedAttrs, mixins);
  };
  
  maker.lookupClass = function(tagName, pkg) {
    // First look for a compiled class
    var classTable = pkg.compiledClasses;
    if (tagName in classTable) return classTable[tagName];
    
    // Ignore built in tags
    if (tagName in maker.builtin) return null;
    
    // Try to build a class
    var klassjsxml = pkg.classes[tagName];
    if (!klassjsxml) throw new Error('Cannot find class ' + tagName);
    delete pkg.classes[tagName];
    
    var isMixin = klassjsxml.tag === 'mixin',
      klassAttrs = klassjsxml.attr || {};
    
    // Determine base class
    var baseclass, extendsAttr;
    if (!isMixin) {
      extendsAttr = klassAttrs.extends;
      delete klassAttrs.extends;
      if (extendsAttr) {
        baseclass = maker.lookupClass(extendsAttr, pkg);
      } else {
        baseclass = classTable.view;
      }
    }

    // Get Mixins
    var mixins, mixinNames = klassAttrs.with;
    delete klassAttrs.with;
    if (mixinNames) {
      mixins = [];
      mixinNames.split(/,\s*/).forEach(
        function(mixinName) {
          mixins.push(maker.lookupClass(mixinName, pkg));
        }
      );
    }
    
    // Process Children
    var compiledMethods = pkg.compiledMethods,
      children = klassjsxml.child,
      klassBody = {},
      klassChildrenJson,
      klassHandlers,
      klassDeclaredAttrs, klassDeclaredAttrValues,
      i, len, childNode, childAttrs;
    if (children) {
      i = 0;
      len = children.length;
      for (; len > i;) {
        childNode = children[i++];
        childAttrs = childNode.attr;
        switch (childNode.tag) {
          case 'setter':
            var methodId = childNode.method_id;
            if (methodId != null) {
              var compiledMethod = compiledMethods[methodId];
              if (compiledMethod) {
                klassBody[dr.AccessorSupport.generateSetterName(childAttrs.name)] = compiledMethod;
              } else {
                throw new Error('Cannot find method id' + methodId);
              }
            }
            break;
          case 'method':
            var methodId = childNode.method_id;
            if (methodId != null) {
              var compiledMethod = compiledMethods[methodId];
              if (compiledMethod) {
                klassBody[childAttrs.name] = compiledMethod;
              } else {
                throw new Error('Cannot find method id' + methodId);
              }
            }
            break;
          case 'handler':
            if (!klassHandlers) klassHandlers = [];
            if (childAttrs.method) {
              klassHandlers.push({name:childAttrs.method, event:childAttrs.event, reference:childAttrs.reference});
            } else {
              var methodId = childNode.method_id;
              if (methodId != null) {
                var compiledMethod = compiledMethods[methodId];
                if (compiledMethod) {
                  var methodName = '__handler_' + methodId;
                  klassBody[methodName] = compiledMethod;
                  klassHandlers.push({name:methodName, event:childAttrs.event, reference:childAttrs.reference});
                } else {
                  throw new Error('Cannot find method id' + methodId);
                }
              }
            }
            break;
          case 'attribute':
            if (!klassDeclaredAttrs) {
              klassDeclaredAttrs = {};
              klassDeclaredAttrValues = {};
            }
            klassDeclaredAttrs[childAttrs.name] = childAttrs.type || 'string'; // Default type is string
            klassDeclaredAttrValues[childAttrs.name] = childAttrs.value;
            break;
          case 'state':
            console.log('DR STATE', childNode);
            // FIXME: add state to class definition
            break;
          default:
            if (!klassChildrenJson) klassChildrenJson = [];
            klassChildrenJson.push(childNode);
        }
      }
    }
    
    // Setup __makeChildren method if klassChildrenJson exist
    if (klassChildrenJson) {
      klassBody.__makeChildren = new Function('this.callSuper(); dr.makeChildren(this, ' + JSON.stringify(klassChildrenJson) + ');');
    }
    
    // Setup __registerHandlers method if klassHandlers exist
    if (klassHandlers) {
      klassBody.__registerHandlers = new Function('this.callSuper(); dr.registerHandlers(this, ' + JSON.stringify(klassHandlers) + ');');
    }
    
    // Build setters for attributes
    if (klassDeclaredAttrs) {
      var setterName;
      for (var attrName in klassDeclaredAttrs) {
        setterName = dr.AccessorSupport.generateSetterName(attrName);
        if (!klassBody[setterName]) { // Don't clobber an explicit setter
          klassBody[setterName] = new Function(
            "value", "this.setActual('" + attrName + "', value, '" + klassDeclaredAttrs[attrName] + "');"
          );
        }
      }
    }
    
    // Instantiate the Class or Mixin
    if (mixins) klassBody.include = mixins;
    var Klass = dr[tagName] = isMixin ? new JS.Module(tagName, klassBody) : new JS.Class(tagName, baseclass, klassBody);
    
    // Build default class attributes
    var defaultAttrValues = {};
    if (baseclass && baseclass.defaultAttrValues) dr.extend(defaultAttrValues, baseclass.defaultAttrValues);
    if (mixins) {
      len = mixins.length;
      if (len > 0) {
        i = 0;
        for (; len > i;) {
          dr.extend(defaultAttrValues, mixins[i++].defaultAttrValues);
        }
      }
    }
    if (klassDeclaredAttrValues) dr.extend(defaultAttrValues, klassDeclaredAttrValues);
    dr.extend(defaultAttrValues, klassAttrs);
    delete defaultAttrValues.name; // Instances only
    delete defaultAttrValues.id; // Instances only
    Klass.defaultAttrValues = defaultAttrValues;
    
    // Store and return class
    return classTable[tagName] = Klass;
  }
})

/*
TODO:
  - Handle body text
  - Do we need to register constraints for runtime view instantiation?
  
  - Add in notify cascade method notify: function(key, value,    cascade=true, matchFunction(node));
  
  - Percent x,y,w,h
    - SizeToViewport needs to be rewritten to support % values
  - auto w,h
  - align x,y
  
  - z-order
  - borders
  - padding
  - transforms
  - scroll
  - clip
  - rounded corners
  
  - layouts
  
  - Setter return values and default behavior
  
  - States
*/