var fs = require('fs');

var timeout = 200;
var path = "/smoke/";
var exitCode = 0;

var system = require('system');
var args = system.args;
if (args[1]) {
  timeout = parseInt(args[1]);
}

var list = fs.list("." + path);
var files = [];
for(var i = 0; i < list.length; i++){
  var file = list[i]
  if (file.indexOf('.html') > 0) {
    files.unshift(file);
  }
}

var didCallOnInitialized = false;

var runTest = function (file, callback) {
  var out = []
  var tId;
  var checkerIntervalId;
  var processOutput = function() {
    var expectedarry = page.evaluateJavaScript(function () {
      var retarry = [];
      $('expectedoutput').contents().filter(function(){
        return this.nodeType == 8;
      }).each(function(i, e){
          retarry.push($.trim(e.nodeValue))
        });

      return retarry;
    });

    var gotoutput = out.join("\n")
    var expectedoutput = expectedarry.join("\n")
    if (gotoutput !== expectedoutput) {
      console.log('ERROR: unexpected output expected::::');
      console.log(expectedoutput)
      console.log('but got::::::::::::::::::::::::::::::');
      console.log(gotoutput)
      console.log("\n")
    }
    callback();
  }
  var updateTimer = function(ms) {
    if (checkerIntervalId) clearInterval(checkerIntervalId);
    if (ms == null) {
      var pageTimeout = page.evaluateJavaScript(function () {
        return $('testingtimer').contents()[0];
      });
      ms = pageTimeout == null ? timeout : Number(pageTimeout.nodeValue);
    }
    console.log('updateTimer', ms)
    if (tId) clearTimeout(tId);
    tId = setTimeout(processOutput, ms);
  }
  var page = require('webpage').create();
  page.onError = function(msg, trace) {
    var msgStack = ['ERROR: ' + msg];
    if (trace && trace.length) {
      msgStack.push('TRACE:');
      trace.forEach(function(t) {
        msgStack.push(' -> ' + (t.file || t.sourceURL) + ': ' + t.line + (t.function ? ' (in function ' + t.function +')' : ''));
      });
    }
    console.error(msgStack.join('\n'));
    updateTimer(0);
    exitCode = 1;
  };
  page.onInitialized = function () {
    didCallOnInitialized = true
    //console.log('page.onInitialized')
    // this is executed 'after the web page is created but before a URL is loaded.
    // The callback may be used to change global objects.' ... according to the docs
//    page.evaluate(function () {
//      if (window.DREEM_INITED) console.log('~~DONE~~');
//      window.addEventListener('dreeminit', function (e) { console.log('~~DONE~~') }, false);
//    });
    // add missing methods to phantom, specifically Function.bind(). See https://github.com/ariya/phantomjs/issues/10522
    page.injectJs('./lib/es5-shim.min.js');
  };
  page.onResourceError = function(resourceError) {
    console.log('RESOURCE ERROR: ' + resourceError.errorString + ', URL: ' + resourceError.url + ', File: ' + file);
    updateTimer(0);
  };
  page.onConsoleMessage = function(msg, lineNum, sourceId) {
    if (msg === '~~DONE~~') {
      updateTimer();
      return;
    }
    out.push(msg)
    console.log(msg)
  };

  didCallOnInitialized = false
  
  checkerIntervalId = setInterval(function() {
    console.log('checking DREEM_INITED, didCallOnInitialized is', didCallOnInitialized)
    page.evaluate(function () {
      console.log('checking DREEM_INITED', window.DREEM_INITED);
      if (window.DREEM_INITED) console.log('~~DONE~~');
    });
  }, 400);
  
  console.log('opening page')
  page.open('http://127.0.0.1:8080' + path + file + '?test');
  
//  setTimeout(function() {
//    console.log('checking didCallOnInitialized', didCallOnInitialized);
//    if (!didCallOnInitialized) {
//      console.log('======= oninitialized not called, checking dreeminited')
//      page.evaluate(function () {
//        if (window.DREEM_INITED) console.log('~~DONE~~');
//      });
//    }
//  }, 400);
}

var loadNext = function() {
  var file = files.pop();
  if (file) {
    console.log("RUNNING TEST: ", file)
    runTest(file, loadNext);
  } else {
    phantom.exit(exitCode);
  }
}

loadNext();
