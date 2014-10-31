Ext.data.JsonP.dr_view({"tagname":"class","name":"dr.view","autodetected":{},"files":[{"filename":"layout.js","href":"layout.html#dr-view"}],"aside":[{"tagname":"aside","type":"guide","name":"constraints"}],"extends":"dr.node","members":[{"name":"bgcolor","tagname":"cfg","owner":"dr.view","id":"cfg-bgcolor","meta":{}},{"name":"clickable","tagname":"cfg","owner":"dr.view","id":"cfg-clickable","meta":{}},{"name":"clip","tagname":"cfg","owner":"dr.view","id":"cfg-clip","meta":{}},{"name":"height","tagname":"cfg","owner":"dr.view","id":"cfg-height","meta":{}},{"name":"id","tagname":"cfg","owner":"dr.node","id":"cfg-id","meta":{}},{"name":"name","tagname":"cfg","owner":"dr.node","id":"cfg-name","meta":{}},{"name":"scriptincludes","tagname":"cfg","owner":"dr.node","id":"cfg-scriptincludes","meta":{}},{"name":"scriptincludeserror","tagname":"cfg","owner":"dr.node","id":"cfg-scriptincludeserror","meta":{}},{"name":"visible","tagname":"cfg","owner":"dr.view","id":"cfg-visible","meta":{}},{"name":"width","tagname":"cfg","owner":"dr.view","id":"cfg-width","meta":{}},{"name":"x","tagname":"cfg","owner":"dr.view","id":"cfg-x","meta":{}},{"name":"y","tagname":"cfg","owner":"dr.view","id":"cfg-y","meta":{}},{"name":"ignorelayout","tagname":"property","owner":"dr.view","id":"property-ignorelayout","meta":{}},{"name":"inited","tagname":"property","owner":"dr.node","id":"property-inited","meta":{"readonly":true}},{"name":"layouts","tagname":"property","owner":"dr.view","id":"property-layouts","meta":{"readonly":true}},{"name":"subnodes","tagname":"property","owner":"dr.node","id":"property-subnodes","meta":{"readonly":true}},{"name":"subviews","tagname":"property","owner":"dr.view","id":"property-subviews","meta":{"readonly":true}},{"name":"animate","tagname":"method","owner":"dr.view","id":"method-animate","meta":{"chainable":true}},{"name":"destroy","tagname":"method","owner":"dr.node","id":"method-destroy","meta":{}},{"name":"sendEvent","tagname":"method","owner":"Eventable","id":"method-sendEvent","meta":{"chainable":true}},{"name":"setAttribute","tagname":"method","owner":"Eventable","id":"method-setAttribute","meta":{"chainable":true}},{"name":"setAttributes","tagname":"method","owner":"Eventable","id":"method-setAttributes","meta":{"chainable":true}},{"name":"onclick","tagname":"event","owner":"dr.view","id":"event-onclick","meta":{}},{"name":"ondestroy","tagname":"event","owner":"dr.node","id":"event-ondestroy","meta":{}},{"name":"oninit","tagname":"event","owner":"dr.node","id":"event-oninit","meta":{}},{"name":"onlayouts","tagname":"event","owner":"dr.view","id":"event-onlayouts","meta":{}},{"name":"onmousedown","tagname":"event","owner":"dr.view","id":"event-onmousedown","meta":{}},{"name":"onmouseout","tagname":"event","owner":"dr.view","id":"event-onmouseout","meta":{}},{"name":"onmouseover","tagname":"event","owner":"dr.view","id":"event-onmouseover","meta":{}},{"name":"onmouseup","tagname":"event","owner":"dr.view","id":"event-onmouseup","meta":{}},{"name":"onsubnodes","tagname":"event","owner":"dr.node","id":"event-onsubnodes","meta":{}},{"name":"onsubviews","tagname":"event","owner":"dr.view","id":"event-onsubviews","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-dr.view","short_doc":"The visual base class for everything in dreem. ...","component":false,"superclasses":["Module","Eventable","dr.node"],"subclasses":["dr.ace","dr.bitmap","dr.buttonbase","dr.dreem_iframe","dr.inputtext","dr.slider","dr.stats","dr.text"],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Module' rel='Module' class='docClass'>Module</a><div class='subclass '><a href='#!/api/Eventable' rel='Eventable' class='docClass'>Eventable</a><div class='subclass '><a href='#!/api/dr.node' rel='dr.node' class='docClass'>dr.node</a><div class='subclass '><strong>dr.view</strong></div></div></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/dr.ace' rel='dr.ace' class='docClass'>dr.ace</a></div><div class='dependency'><a href='#!/api/dr.bitmap' rel='dr.bitmap' class='docClass'>dr.bitmap</a></div><div class='dependency'><a href='#!/api/dr.buttonbase' rel='dr.buttonbase' class='docClass'>dr.buttonbase</a></div><div class='dependency'><a href='#!/api/dr.dreem_iframe' rel='dr.dreem_iframe' class='docClass'>dr.dreem_iframe</a></div><div class='dependency'><a href='#!/api/dr.inputtext' rel='dr.inputtext' class='docClass'>dr.inputtext</a></div><div class='dependency'><a href='#!/api/dr.slider' rel='dr.slider' class='docClass'>dr.slider</a></div><div class='dependency'><a href='#!/api/dr.stats' rel='dr.stats' class='docClass'>dr.stats</a></div><div class='dependency'><a href='#!/api/dr.text' rel='dr.text' class='docClass'>dr.text</a></div><h4>Files</h4><div class='dependency'><a href='source/layout.html#dr-view' target='_blank'>layout.js</a></div></pre><div class='doc-contents'>            <div class='aside guide'>\n              <h4>Guide</h4>\n              <p><a href='#!/guide/constraints'><img src='guides/constraints/icon.png' alt=''> Dynamic Attributes</a></p>\n            </div>\n<p>The visual base class for everything in dreem. Views extend <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a> to add the ability to set and animate visual attributes, and interact with the mouse.</p>\n\n<p>Views are positioned inside their parent according to their x and y coordinates.</p>\n\n<p>Views can contain methods, handlers, setters, constraints, attributes and other view, node or class instances.</p>\n\n<p>Views can be easily converted to reusable classes/tags by changing their outermost &lt;view> tags to &lt;class> and adding a name attribute.</p>\n\n<p>Views support a number of builtin attributes. Setting attributes that aren't listed explicitly will pass through to the underlying Sprite implementation.</p>\n\n<p>Views currently integrate with jQuery, so any changes made to their CSS via jQuery will automatically cause them to update.</p>\n\n<p>Note that dreem apps must be contained inside a top-level &lt;view>&lt;/view> tag.</p>\n\n<p>The following example shows a pink view that contains a smaller blue view offset 10 pixels from the top and 10 from the left.</p>\n\n<pre class='inline-example '><code>&lt;view width=\"200\" height=\"100\" bgcolor=\"lightpink\"&gt;\n\n  &lt;view width=\"50\" height=\"50\" x=\"10\" y=\"10\" bgcolor=\"lightblue\"&gt;&lt;/view&gt;\n\n&lt;/view&gt;\n</code></pre>\n\n<p>Here the blue view is wider than its parent pink view, and because the clip attribute of the parent is set to false it extends beyond the parents bounds.</p>\n\n<pre class='inline-example '><code>&lt;view width=\"200\" height=\"100\" bgcolor=\"lightpink\" clip=\"false\"&gt;\n\n  &lt;view width=\"250\" height=\"50\" x=\"10\" y=\"10\" bgcolor=\"lightblue\"&gt;&lt;/view&gt;\n\n&lt;/view&gt;\n</code></pre>\n\n<p>Now we set the clip attribute on the parent view to true, causing the overflowing child view to be clipped at its parent's boundary.</p>\n\n<pre class='inline-example '><code>&lt;view width=\"200\" height=\"100\" bgcolor=\"lightpink\" clip=\"true\"&gt;\n\n  &lt;view width=\"250\" height=\"50\" x=\"10\" y=\"10\" bgcolor=\"lightblue\"&gt;&lt;/view&gt;\n\n&lt;/view&gt;\n</code></pre>\n\n<p>Here we demonstrate how unsupported attributes are passed to the underlying sprite system. We make the child view semi-transparent by setting opacity. Although this is not in the list of supported attributes it is still applied.</p>\n\n<pre class='inline-example '><code>&lt;view width=\"200\" height=\"100\" bgcolor=\"lightpink\"&gt;\n\n  &lt;view width=\"250\" height=\"50\" x=\"10\" y=\"10\" bgcolor=\"lightblue\" opacity=\".5\"&gt;&lt;/view&gt;\n\n&lt;/view&gt;\n</code></pre>\n\n<p>It is convenient to <a href=\"#!/guide/constraints\">constrain</a> a view's size and position to attributes of its parent view. Here we'll position the inner view so that its inset by 10 pixels in its parent.</p>\n\n<pre class='inline-example '><code>&lt;view width=\"200\" height=\"100\" bgcolor=\"lightpink\"&gt;\n\n  &lt;view width=\"${this.parent.width-this.inset*2}\" height=\"${this.parent.height-this.inset*2}\" x=\"${this.inset}\" y=\"${this.inset}\" bgcolor=\"lightblue\"&gt;\n    &lt;attribute name=\"inset\" type=\"number\" value=\"10\"&gt;&lt;/attribute&gt;\n  &lt;/view&gt;\n\n&lt;/view&gt;\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-bgcolor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.view'>dr.view</span><br/><a href='source/layout.html#dr-view-cfg-bgcolor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.view-cfg-bgcolor' class='name expandable'>bgcolor</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Sets this view's background color</p>\n</div><div class='long'><p>Sets this view's background color</p>\n</div></div></div><div id='cfg-clickable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.view'>dr.view</span><br/><a href='source/layout.html#dr-view-cfg-clickable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.view-cfg-clickable' class='name expandable'>clickable</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>If true, this view recieves mouse events. ...</div><div class='long'><p>If true, this view recieves mouse events. Automatically set to true when an onclick/mouse* event is registered for this view.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-clip' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.view'>dr.view</span><br/><a href='source/layout.html#dr-view-cfg-clip' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.view-cfg-clip' class='name expandable'>clip</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>If true, this view clips to its bounds ...</div><div class='long'><p>If true, this view clips to its bounds</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-height' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.view'>dr.view</span><br/><a href='source/layout.html#dr-view-cfg-height' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.view-cfg-height' class='name expandable'>height</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>This view's height ...</div><div class='long'><p>This view's height</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='cfg-id' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-cfg-id' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-cfg-id' class='name expandable'>id</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Gives this node a global ID, which can be looked up in the global window object. ...</div><div class='long'><p>Gives this node a global ID, which can be looked up in the global window object.\nTake care to not override builtin globals, or override your own instances!</p>\n</div></div></div><div id='cfg-name' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-cfg-name' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-cfg-name' class='name expandable'>name</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Names this node in its parent scope so it can be referred to later.</p>\n</div><div class='long'><p>Names this node in its parent scope so it can be referred to later.</p>\n</div></div></div><div id='cfg-scriptincludes' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-cfg-scriptincludes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-cfg-scriptincludes' class='name expandable'>scriptincludes</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>A comma separated list of URLs to javascript includes required as dependencies. ...</div><div class='long'><p>A comma separated list of URLs to javascript includes required as dependencies. Useful if you need to ensure a third party library is available.</p>\n</div></div></div><div id='cfg-scriptincludeserror' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-cfg-scriptincludeserror' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-cfg-scriptincludeserror' class='name expandable'>scriptincludeserror</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>An error to show if scriptincludes fail to load</p>\n</div><div class='long'><p>An error to show if scriptincludes fail to load</p>\n</div></div></div><div id='cfg-visible' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.view'>dr.view</span><br/><a href='source/layout.html#dr-view-cfg-visible' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.view-cfg-visible' class='name expandable'>visible</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>If false, this view is invisible ...</div><div class='long'><p>If false, this view is invisible</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-width' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.view'>dr.view</span><br/><a href='source/layout.html#dr-view-cfg-width' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.view-cfg-width' class='name expandable'>width</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>This view's width ...</div><div class='long'><p>This view's width</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='cfg-x' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.view'>dr.view</span><br/><a href='source/layout.html#dr-view-cfg-x' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.view-cfg-x' class='name expandable'>x</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>This view's x position ...</div><div class='long'><p>This view's x position</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='cfg-y' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.view'>dr.view</span><br/><a href='source/layout.html#dr-view-cfg-y' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.view-cfg-y' class='name expandable'>y</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>This view's y position ...</div><div class='long'><p>This view's y position</p>\n<p>Defaults to: <code>0</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-ignorelayout' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.view'>dr.view</span><br/><a href='source/layout.html#dr-view-property-ignorelayout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.view-property-ignorelayout' class='name expandable'>ignorelayout</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'><p>If true, layouts should ignore this view</p>\n</div><div class='long'><p>If true, layouts should ignore this view</p>\n</div></div></div><div id='property-inited' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-property-inited' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-property-inited' class='name expandable'>inited</a> : Boolean<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'><p>True when this node and all its children are completely initialized</p>\n</div><div class='long'><p>True when this node and all its children are completely initialized</p>\n</div></div></div><div id='property-layouts' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.view'>dr.view</span><br/><a href='source/layout.html#dr-view-property-layouts' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.view-property-layouts' class='name expandable'>layouts</a> : <a href=\"#!/api/dr.layout\" rel=\"dr.layout\" class=\"docClass\">dr.layout</a>[]<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>An array of this views's layouts. ...</div><div class='long'><p>An array of this views's layouts. Only defined when needed.</p>\n</div></div></div><div id='property-subnodes' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-property-subnodes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-property-subnodes' class='name expandable'>subnodes</a> : <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a>[]<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>An array of this node's child nodes ...</div><div class='long'><p>An array of this node's child nodes</p>\n<p>Defaults to: <code>[]</code></p></div></div></div><div id='property-subviews' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.view'>dr.view</span><br/><a href='source/layout.html#dr-view-property-subviews' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.view-property-subviews' class='name expandable'>subviews</a> : <a href=\"#!/api/dr.view\" rel=\"dr.view\" class=\"docClass\">dr.view</a>[]<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'><p>An array of this views's child views</p>\n</div><div class='long'><p>An array of this views's child views</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-animate' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.view'>dr.view</span><br/><a href='source/layout.html#dr-view-method-animate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.view-method-animate' class='name expandable'>animate</a>( <span class='pre'>obj</span> ) : <a href=\"#!/api/dr.view\" rel=\"dr.view\" class=\"docClass\">dr.view</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Animates this view's attribute(s) ...</div><div class='long'><p>Animates this view's attribute(s)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : Object<div class='sub-desc'><p>A hash of attribute names and values to animate to</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/dr.view\" rel=\"dr.view\" class=\"docClass\">dr.view</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-destroy' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-method-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Destroys this node ...</div><div class='long'><p>Destroys this node</p>\n</div></div></div><div id='method-sendEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Eventable' rel='Eventable' class='defined-in docClass'>Eventable</a><br/><a href='source/layout.html#Eventable-method-sendEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Eventable-method-sendEvent' class='name expandable'>sendEvent</a>( <span class='pre'>name, value</span> ) : <a href=\"#!/api/Eventable\" rel=\"Eventable\" class=\"docClass\">Eventable</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Sends an event ...</div><div class='long'><p>Sends an event</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>the name of the event to send</p>\n</div></li><li><span class='pre'>value</span> : Object<div class='sub-desc'><p>the value to send with the event</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Eventable\" rel=\"Eventable\" class=\"docClass\">Eventable</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setAttribute' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Eventable' rel='Eventable' class='defined-in docClass'>Eventable</a><br/><a href='source/layout.html#Eventable-method-setAttribute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Eventable-method-setAttribute' class='name expandable'>setAttribute</a>( <span class='pre'>name, value</span> ) : <a href=\"#!/api/Eventable\" rel=\"Eventable\" class=\"docClass\">Eventable</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Sets an attribute, calls a setter if there is one, then sends an event with the new value ...</div><div class='long'><p>Sets an attribute, calls a setter if there is one, then sends an event with the new value</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>the name of the attribute to set</p>\n</div></li><li><span class='pre'>value</span> : Object<div class='sub-desc'><p>the value to set to</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Eventable\" rel=\"Eventable\" class=\"docClass\">Eventable</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setAttributes' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Eventable' rel='Eventable' class='defined-in docClass'>Eventable</a><br/><a href='source/layout.html#Eventable-method-setAttributes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Eventable-method-setAttributes' class='name expandable'>setAttributes</a>( <span class='pre'>attributes</span> ) : <a href=\"#!/api/Eventable\" rel=\"Eventable\" class=\"docClass\">Eventable</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Calls setAttribute for each name/value pair in the attributes object ...</div><div class='long'><p>Calls setAttribute for each name/value pair in the attributes object</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>attributes</span> : Object<div class='sub-desc'><p>An object of name/value pairs to be set</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Eventable\" rel=\"Eventable\" class=\"docClass\">Eventable</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-onclick' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.view'>dr.view</span><br/><a href='source/layout.html#dr-view-event-onclick' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.view-event-onclick' class='name expandable'>onclick</a>( <span class='pre'>view</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when this view is clicked ...</div><div class='long'><p>Fired when this view is clicked</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : <a href=\"#!/api/dr.view\" rel=\"dr.view\" class=\"docClass\">dr.view</a><div class='sub-desc'><p>The <a href=\"#!/api/dr.view\" rel=\"dr.view\" class=\"docClass\">dr.view</a> that fired the event</p>\n</div></li></ul></div></div></div><div id='event-ondestroy' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-event-ondestroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-event-ondestroy' class='name expandable'>ondestroy</a>( <span class='pre'>node</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when this node and all its children are about to be destroyed ...</div><div class='long'><p>Fired when this node and all its children are about to be destroyed</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a><div class='sub-desc'><p>The <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a> that fired the event</p>\n</div></li></ul></div></div></div><div id='event-oninit' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-event-oninit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-event-oninit' class='name expandable'>oninit</a>( <span class='pre'>node</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when this node and all its children are completely initialized ...</div><div class='long'><p>Fired when this node and all its children are completely initialized</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a><div class='sub-desc'><p>The <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a> that fired the event</p>\n</div></li></ul></div></div></div><div id='event-onlayouts' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.view'>dr.view</span><br/><a href='source/layout.html#dr-view-event-onlayouts' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.view-event-onlayouts' class='name expandable'>onlayouts</a>( <span class='pre'>view</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when this views's layouts array has changed ...</div><div class='long'><p>Fired when this views's layouts array has changed</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : <a href=\"#!/api/dr.layout\" rel=\"dr.layout\" class=\"docClass\">dr.layout</a><div class='sub-desc'><p>The <a href=\"#!/api/dr.layout\" rel=\"dr.layout\" class=\"docClass\">dr.layout</a> that fired the event</p>\n</div></li></ul></div></div></div><div id='event-onmousedown' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.view'>dr.view</span><br/><a href='source/layout.html#dr-view-event-onmousedown' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.view-event-onmousedown' class='name expandable'>onmousedown</a>( <span class='pre'>view</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when the mouse goes down on this view ...</div><div class='long'><p>Fired when the mouse goes down on this view</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : <a href=\"#!/api/dr.view\" rel=\"dr.view\" class=\"docClass\">dr.view</a><div class='sub-desc'><p>The <a href=\"#!/api/dr.view\" rel=\"dr.view\" class=\"docClass\">dr.view</a> that fired the event</p>\n</div></li></ul></div></div></div><div id='event-onmouseout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.view'>dr.view</span><br/><a href='source/layout.html#dr-view-event-onmouseout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.view-event-onmouseout' class='name expandable'>onmouseout</a>( <span class='pre'>view</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when the mouse moves off this view ...</div><div class='long'><p>Fired when the mouse moves off this view</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : <a href=\"#!/api/dr.view\" rel=\"dr.view\" class=\"docClass\">dr.view</a><div class='sub-desc'><p>The <a href=\"#!/api/dr.view\" rel=\"dr.view\" class=\"docClass\">dr.view</a> that fired the event</p>\n</div></li></ul></div></div></div><div id='event-onmouseover' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.view'>dr.view</span><br/><a href='source/layout.html#dr-view-event-onmouseover' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.view-event-onmouseover' class='name expandable'>onmouseover</a>( <span class='pre'>view</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when the mouse moves over this view ...</div><div class='long'><p>Fired when the mouse moves over this view</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : <a href=\"#!/api/dr.view\" rel=\"dr.view\" class=\"docClass\">dr.view</a><div class='sub-desc'><p>The <a href=\"#!/api/dr.view\" rel=\"dr.view\" class=\"docClass\">dr.view</a> that fired the event</p>\n</div></li></ul></div></div></div><div id='event-onmouseup' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.view'>dr.view</span><br/><a href='source/layout.html#dr-view-event-onmouseup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.view-event-onmouseup' class='name expandable'>onmouseup</a>( <span class='pre'>view</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when the mouse goes up on this view ...</div><div class='long'><p>Fired when the mouse goes up on this view</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : <a href=\"#!/api/dr.view\" rel=\"dr.view\" class=\"docClass\">dr.view</a><div class='sub-desc'><p>The <a href=\"#!/api/dr.view\" rel=\"dr.view\" class=\"docClass\">dr.view</a> that fired the event</p>\n</div></li></ul></div></div></div><div id='event-onsubnodes' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-event-onsubnodes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-event-onsubnodes' class='name expandable'>onsubnodes</a>( <span class='pre'>node</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when this node's subnodes array has changed ...</div><div class='long'><p>Fired when this node's subnodes array has changed</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a><div class='sub-desc'><p>The <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a> that fired the event</p>\n</div></li></ul></div></div></div><div id='event-onsubviews' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.view'>dr.view</span><br/><a href='source/layout.html#dr-view-event-onsubviews' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.view-event-onsubviews' class='name expandable'>onsubviews</a>( <span class='pre'>view</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when this views's subviews array has changed ...</div><div class='long'><p>Fired when this views's subviews array has changed</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : <a href=\"#!/api/dr.view\" rel=\"dr.view\" class=\"docClass\">dr.view</a><div class='sub-desc'><p>The <a href=\"#!/api/dr.view\" rel=\"dr.view\" class=\"docClass\">dr.view</a> that fired the event</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});