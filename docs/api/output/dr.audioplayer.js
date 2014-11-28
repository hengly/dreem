Ext.data.JsonP.dr_audioplayer({"tagname":"class","name":"dr.audioplayer","autodetected":{},"files":[{"filename":"classdocs.js","href":"classdocs.html#dr-audioplayer"}],"extends":"dr.node","members":[{"name":"duration","tagname":"attribute","owner":"dr.audioplayer","id":"attribute-duration","meta":{"readonly":true}},{"name":"fft","tagname":"attribute","owner":"dr.audioplayer","id":"attribute-fft","meta":{"readonly":true}},{"name":"fftsize","tagname":"attribute","owner":"dr.audioplayer","id":"attribute-fftsize","meta":{}},{"name":"fftsmoothing","tagname":"attribute","owner":"dr.audioplayer","id":"attribute-fftsmoothing","meta":{}},{"name":"id","tagname":"attribute","owner":"dr.node","id":"attribute-id","meta":{}},{"name":"inited","tagname":"attribute","owner":"dr.node","id":"attribute-inited","meta":{"readonly":true}},{"name":"loaded","tagname":"attribute","owner":"dr.audioplayer","id":"attribute-loaded","meta":{"readonly":true}},{"name":"loadprogress","tagname":"attribute","owner":"dr.audioplayer","id":"attribute-loadprogress","meta":{"readonly":true}},{"name":"loop","tagname":"attribute","owner":"dr.audioplayer","id":"attribute-loop","meta":{}},{"name":"name","tagname":"attribute","owner":"dr.node","id":"attribute-name","meta":{}},{"name":"paused","tagname":"attribute","owner":"dr.audioplayer","id":"attribute-paused","meta":{}},{"name":"playing","tagname":"attribute","owner":"dr.audioplayer","id":"attribute-playing","meta":{}},{"name":"scriptincludes","tagname":"attribute","owner":"dr.node","id":"attribute-scriptincludes","meta":{}},{"name":"scriptincludeserror","tagname":"attribute","owner":"dr.node","id":"attribute-scriptincludeserror","meta":{}},{"name":"subnodes","tagname":"attribute","owner":"dr.node","id":"attribute-subnodes","meta":{"readonly":true}},{"name":"time","tagname":"attribute","owner":"dr.audioplayer","id":"attribute-time","meta":{"readonly":true}},{"name":"url","tagname":"attribute","owner":"dr.audioplayer","id":"attribute-url","meta":{}},{"name":"destroy","tagname":"method","owner":"dr.node","id":"method-destroy","meta":{}},{"name":"doSubnodeAdded","tagname":"method","owner":"dr.node","id":"method-doSubnodeAdded","meta":{}},{"name":"doSubnodeRemoved","tagname":"method","owner":"dr.node","id":"method-doSubnodeRemoved","meta":{}},{"name":"sendEvent","tagname":"method","owner":"Eventable","id":"method-sendEvent","meta":{"chainable":true}},{"name":"setAttribute","tagname":"method","owner":"Eventable","id":"method-setAttribute","meta":{"chainable":true}},{"name":"setAttributes","tagname":"method","owner":"Eventable","id":"method-setAttributes","meta":{"chainable":true}},{"name":"ondestroy","tagname":"event","owner":"dr.node","id":"event-ondestroy","meta":{}},{"name":"oninit","tagname":"event","owner":"dr.node","id":"event-oninit","meta":{}},{"name":"onsubnodes","tagname":"event","owner":"dr.node","id":"event-onsubnodes","meta":{}},{"name":"subnodeAdded","tagname":"event","owner":"dr.node","id":"event-subnodeAdded","meta":{}},{"name":"subnodeRemoved","tagname":"event","owner":"dr.node","id":"event-subnodeRemoved","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-dr.audioplayer","short_doc":"audioplayer wraps the web audio APIs to provide a declarative interface to play audio. ...","component":false,"superclasses":["Module","Eventable","dr.node"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Module' rel='Module' class='docClass'>Module</a><div class='subclass '><a href='#!/api/Eventable' rel='Eventable' class='docClass'>Eventable</a><div class='subclass '><a href='#!/api/dr.node' rel='dr.node' class='docClass'>dr.node</a><div class='subclass '><strong>dr.audioplayer</strong></div></div></div></div><h4>Files</h4><div class='dependency'><a href='source/classdocs.html#dr-audioplayer' target='_blank'>classdocs.js</a></div></pre><div class='doc-contents'><p>audioplayer wraps the web audio APIs to provide a declarative interface to play audio.</p>\n\n<p>This example shows how to load and play an mp3 audio file from the server:</p>\n\n<pre class='inline-example '><code>&lt;audioplayer url=\"/music/YACHT_-_09_-_Im_In_Love_With_A_Ripper_Party_Mix_Instrumental.mp3\" playing=\"true\"&gt;&lt;/audioplayer&gt;\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-attribute'>Attributes</h3><div class='subsection'><div id='attribute-duration' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.audioplayer'>dr.audioplayer</span><br/><a href='source/classdocs.html#dr-audioplayer-attribute-duration' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.audioplayer-attribute-duration' class='name expandable'>duration</a> : Number<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'><p>The duration in seconds.</p>\n</div><div class='long'><p>The duration in seconds.</p>\n</div></div></div><div id='attribute-fft' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.audioplayer'>dr.audioplayer</span><br/><a href='source/classdocs.html#dr-audioplayer-attribute-fft' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.audioplayer-attribute-fft' class='name expandable'>fft</a> : Number[]<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'><p>An array of numbers representing the FFT analysis of the audio as it's playing.</p>\n</div><div class='long'><p>An array of numbers representing the FFT analysis of the audio as it's playing.</p>\n</div></div></div><div id='attribute-fftsize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.audioplayer'>dr.audioplayer</span><br/><a href='source/classdocs.html#dr-audioplayer-attribute-fftsize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.audioplayer-attribute-fftsize' class='name expandable'>fftsize</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>The number of fft frames to use when setting fft. ...</div><div class='long'><p>The number of fft frames to use when setting <a href=\"#!/api/dr.audioplayer-attribute-fft\" rel=\"dr.audioplayer-attribute-fft\" class=\"docClass\">fft</a>. Must be a non-zero power of two in the range 32 to 2048.</p>\n</div></div></div><div id='attribute-fftsmoothing' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.audioplayer'>dr.audioplayer</span><br/><a href='source/classdocs.html#dr-audioplayer-attribute-fftsmoothing' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.audioplayer-attribute-fftsmoothing' class='name expandable'>fftsmoothing</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>The amount of smoothing to apply to the FFT analysis. ...</div><div class='long'><p>The amount of smoothing to apply to the FFT analysis. A value from 0 -> 1 where 0 represents no time averaging with the last FFT analysis frame.</p>\n<p>Defaults to: <code>0.8</code></p></div></div></div><div id='attribute-id' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-attribute-id' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-attribute-id' class='name expandable'>id</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Gives this node a global ID, which can be looked up in the global window object. ...</div><div class='long'><p>Gives this node a global ID, which can be looked up in the global window object.\nTake care to not override builtin globals, or override your own instances!</p>\n</div></div></div><div id='attribute-inited' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-attribute-inited' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-attribute-inited' class='name expandable'>inited</a> : Boolean<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'><p>True when this node and all its children are completely initialized</p>\n</div><div class='long'><p>True when this node and all its children are completely initialized</p>\n</div></div></div><div id='attribute-loaded' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.audioplayer'>dr.audioplayer</span><br/><a href='source/classdocs.html#dr-audioplayer-attribute-loaded' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.audioplayer-attribute-loaded' class='name expandable'>loaded</a> : Boolean<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'><p>If true, the audio is done loading</p>\n</div><div class='long'><p>If true, the audio is done loading</p>\n</div></div></div><div id='attribute-loadprogress' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.audioplayer'>dr.audioplayer</span><br/><a href='source/classdocs.html#dr-audioplayer-attribute-loadprogress' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.audioplayer-attribute-loadprogress' class='name expandable'>loadprogress</a> : Number<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'><p>A Number between 0 and 1 representing load progress</p>\n</div><div class='long'><p>A Number between 0 and 1 representing load progress</p>\n</div></div></div><div id='attribute-loop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.audioplayer'>dr.audioplayer</span><br/><a href='source/classdocs.html#dr-audioplayer-attribute-loop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.audioplayer-attribute-loop' class='name expandable'>loop</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'><p>If true, the audio will play continuously.</p>\n</div><div class='long'><p>If true, the audio will play continuously.</p>\n</div></div></div><div id='attribute-name' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-attribute-name' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-attribute-name' class='name expandable'>name</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Names this node in its parent scope so it can be referred to later.</p>\n</div><div class='long'><p>Names this node in its parent scope so it can be referred to later.</p>\n</div></div></div><div id='attribute-paused' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.audioplayer'>dr.audioplayer</span><br/><a href='source/classdocs.html#dr-audioplayer-attribute-paused' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.audioplayer-attribute-paused' class='name expandable'>paused</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'><p>If true, the audio is paused.</p>\n</div><div class='long'><p>If true, the audio is paused.</p>\n</div></div></div><div id='attribute-playing' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.audioplayer'>dr.audioplayer</span><br/><a href='source/classdocs.html#dr-audioplayer-attribute-playing' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.audioplayer-attribute-playing' class='name expandable'>playing</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'><p>If true, the audio is playing.</p>\n</div><div class='long'><p>If true, the audio is playing.</p>\n</div></div></div><div id='attribute-scriptincludes' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-attribute-scriptincludes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-attribute-scriptincludes' class='name expandable'>scriptincludes</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>A comma separated list of URLs to javascript includes required as dependencies. ...</div><div class='long'><p>A comma separated list of URLs to javascript includes required as dependencies. Useful if you need to ensure a third party library is available.</p>\n</div></div></div><div id='attribute-scriptincludeserror' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-attribute-scriptincludeserror' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-attribute-scriptincludeserror' class='name expandable'>scriptincludeserror</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>An error to show if scriptincludes fail to load</p>\n</div><div class='long'><p>An error to show if scriptincludes fail to load</p>\n</div></div></div><div id='attribute-subnodes' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-attribute-subnodes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-attribute-subnodes' class='name expandable'>subnodes</a> : <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a>[]<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>An array of this node's child nodes ...</div><div class='long'><p>An array of this node's child nodes</p>\n<p>Defaults to: <code>[]</code></p></div></div></div><div id='attribute-time' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.audioplayer'>dr.audioplayer</span><br/><a href='source/classdocs.html#dr-audioplayer-attribute-time' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.audioplayer-attribute-time' class='name expandable'>time</a> : Number<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'><p>The number of seconds the file has played, with 0 being the start.</p>\n</div><div class='long'><p>The number of seconds the file has played, with 0 being the start.</p>\n</div></div></div><div id='attribute-url' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.audioplayer'>dr.audioplayer</span><br/><a href='source/classdocs.html#dr-audioplayer-attribute-url' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.audioplayer-attribute-url' class='name expandable'>url</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>The URL to an audio file to play</p>\n</div><div class='long'><p>The URL to an audio file to play</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-destroy' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-method-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Destroys this node ...</div><div class='long'><p>Destroys this node</p>\n</div></div></div><div id='method-doSubnodeAdded' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-method-doSubnodeAdded' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-method-doSubnodeAdded' class='name expandable'>doSubnodeAdded</a>( <span class='pre'>node</span> ) : void<span class=\"signature\"></span></div><div class='description'><div class='short'>Called when a subnode is added to this node. ...</div><div class='long'><p>Called when a subnode is added to this node. Provides a hook for\nsubclasses. No need for subclasses to call super. Do not call this\nmethod to add a subnode. Instead call setParent.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a><div class='sub-desc'><p>The subnode that was added.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-doSubnodeRemoved' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-method-doSubnodeRemoved' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-method-doSubnodeRemoved' class='name expandable'>doSubnodeRemoved</a>( <span class='pre'>node</span> ) : void<span class=\"signature\"></span></div><div class='description'><div class='short'>Called when a subnode is removed from this node. ...</div><div class='long'><p>Called when a subnode is removed from this node. Provides a hook for\nsubclasses. No need for subclasses to call super. Do not call this\nmethod to remove a subnode. Instead call _removeFromParent.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a><div class='sub-desc'><p>The subnode that was removed.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-sendEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Eventable' rel='Eventable' class='defined-in docClass'>Eventable</a><br/><a href='source/layout.html#Eventable-method-sendEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Eventable-method-sendEvent' class='name expandable'>sendEvent</a>( <span class='pre'>name, value</span> ) : <a href=\"#!/api/Eventable\" rel=\"Eventable\" class=\"docClass\">Eventable</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Sends an event ...</div><div class='long'><p>Sends an event</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>the name of the event to send</p>\n</div></li><li><span class='pre'>value</span> : Object<div class='sub-desc'><p>the value to send with the event</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Eventable\" rel=\"Eventable\" class=\"docClass\">Eventable</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setAttribute' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Eventable' rel='Eventable' class='defined-in docClass'>Eventable</a><br/><a href='source/layout.html#Eventable-method-setAttribute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Eventable-method-setAttribute' class='name expandable'>setAttribute</a>( <span class='pre'>name, value</span> ) : <a href=\"#!/api/Eventable\" rel=\"Eventable\" class=\"docClass\">Eventable</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Sets an attribute, calls a setter if there is one, then sends an event with the new value ...</div><div class='long'><p>Sets an attribute, calls a setter if there is one, then sends an event with the new value</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>the name of the attribute to set</p>\n</div></li><li><span class='pre'>value</span> : Object<div class='sub-desc'><p>the value to set to</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Eventable\" rel=\"Eventable\" class=\"docClass\">Eventable</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setAttributes' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Eventable' rel='Eventable' class='defined-in docClass'>Eventable</a><br/><a href='source/layout.html#Eventable-method-setAttributes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Eventable-method-setAttributes' class='name expandable'>setAttributes</a>( <span class='pre'>attributes</span> ) : <a href=\"#!/api/Eventable\" rel=\"Eventable\" class=\"docClass\">Eventable</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Calls setAttribute for each name/value pair in the attributes object ...</div><div class='long'><p>Calls setAttribute for each name/value pair in the attributes object</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>attributes</span> : Object<div class='sub-desc'><p>An object of name/value pairs to be set</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Eventable\" rel=\"Eventable\" class=\"docClass\">Eventable</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-ondestroy' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-event-ondestroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-event-ondestroy' class='name expandable'>ondestroy</a>( <span class='pre'>node</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when this node and all its children are about to be destroyed ...</div><div class='long'><p>Fired when this node and all its children are about to be destroyed</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a><div class='sub-desc'><p>The <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a> that fired the event</p>\n</div></li></ul></div></div></div><div id='event-oninit' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-event-oninit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-event-oninit' class='name expandable'>oninit</a>( <span class='pre'>node</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when this node and all its children are completely initialized ...</div><div class='long'><p>Fired when this node and all its children are completely initialized</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a><div class='sub-desc'><p>The <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a> that fired the event</p>\n</div></li></ul></div></div></div><div id='event-onsubnodes' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-event-onsubnodes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-event-onsubnodes' class='name expandable'>onsubnodes</a>( <span class='pre'>node</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when this node's subnodes array has changed ...</div><div class='long'><p>Fired when this node's subnodes array has changed</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a><div class='sub-desc'><p>The <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a> that fired the event</p>\n</div></li></ul></div></div></div><div id='event-subnodeAdded' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-event-subnodeAdded' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-event-subnodeAdded' class='name expandable'>subnodeAdded</a>( <span class='pre'>node</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when a subnode is added to this node. ...</div><div class='long'><p>Fired when a subnode is added to this node.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a><div class='sub-desc'><p>The <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a> that was added</p>\n</div></li></ul></div></div></div><div id='event-subnodeRemoved' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-event-subnodeRemoved' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-event-subnodeRemoved' class='name expandable'>subnodeRemoved</a>( <span class='pre'>node</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when a subnode is removed from this node. ...</div><div class='long'><p>Fired when a subnode is removed from this node.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a><div class='sub-desc'><p>The <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a> that was removed</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});