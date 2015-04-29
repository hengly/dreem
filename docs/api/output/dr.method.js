Ext.data.JsonP.dr_method({"tagname":"class","name":"dr.method","autodetected":{},"files":[{"filename":"dreem.js","href":"dreem.html#dr-method"}],"members":[{"name":"args","tagname":"attribute","owner":"dr.method","id":"attribute-args","meta":{}},{"name":"name","tagname":"attribute","owner":"dr.method","id":"attribute-name","meta":{"required":true}},{"name":"type","tagname":"attribute","owner":"dr.method","id":"attribute-type","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-dr.method","short_doc":"Declares a member function in a node, view, class or other class instance. ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/dreem.html#dr-method' target='_blank'>dreem.js</a></div></pre><div class='doc-contents'><p>Declares a member function in a node, view, class or other class instance. Methods can only be created with the &lt;method>&lt;/method> tag syntax.</p>\n\n<p>If a method overrides an existing method, any existing (super) method(s) will be called first automatically.</p>\n\n<p>Let's define a method called changeColor in a view that sets the background color to pink.</p>\n\n<pre class='inline-example '><code>&lt;view id=\"square\" width=\"100\" height=\"100\"&gt;\n  &lt;method name=\"changeColor\"&gt;\n    this.setAttribute('bgcolor', 'pink');\n  &lt;/method&gt;\n&lt;/view&gt;\n\n&lt;handler event=\"oninit\"&gt;\n  square.changeColor();\n&lt;/handler&gt;\n</code></pre>\n\n<p>Here we define the changeColor method in a class called square. We create an instance of the class and call the method on the intance.</p>\n\n<pre class='inline-example '><code>&lt;class name=\"square\" width=\"100\" height=\"100\"&gt;\n  &lt;method name=\"changeColor\"&gt;\n    this.setAttribute('bgcolor', 'pink');\n  &lt;/method&gt;\n&lt;/class&gt;\n\n&lt;square id=\"square1\"&gt;&lt;/square&gt;\n\n&lt;handler event=\"oninit\"&gt;\n  square1.changeColor();\n&lt;/handler&gt;\n</code></pre>\n\n<p>Now we'll subclass the square class with a bluesquare class, and override the changeColor method to color the square blue. We also add an inner square who's color is set in the changeColor method of the square superclass. Notice that the color of this square is set when the method is called on the subclass.</p>\n\n<pre class='inline-example '><code>&lt;class name=\"square\" width=\"100\" height=\"100\"&gt;\n  &lt;view name=\"inner\" width=\"25\" height=\"25\"&gt;&lt;/view&gt;\n  &lt;method name=\"changeColor\"&gt;\n    this.inner.setAttribute('bgcolor', 'green');\n    this.setAttribute('bgcolor', 'pink');\n  &lt;/method&gt;\n&lt;/class&gt;\n\n&lt;class name=\"bluesquare\" extends=\"square\"&gt;\n  &lt;method name=\"changeColor\"&gt;\n    this.setAttribute('bgcolor', 'blue');\n  &lt;/method&gt;\n&lt;/class&gt;\n\n&lt;spacedlayout&gt;&lt;/spacedlayout&gt;\n\n&lt;square id=\"square1\"&gt;&lt;/square&gt;\n&lt;bluesquare id=\"square2\"&gt;&lt;/bluesquare&gt;\n\n&lt;handler event=\"oninit\"&gt;\n  square1.changeColor();\n  square2.changeColor();\n&lt;/handler&gt;\n</code></pre>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-attribute'>Attributes</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Required attributes</h3><div id='attribute-name' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.method'>dr.method</span><br/><a href='source/dreem.html#dr-method-attribute-name' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.method-attribute-name' class='name expandable'>name</a> : String<span class=\"signature\"><span class='required' >required</span></span></div><div class='description'><div class='short'><p>The name of the method.</p>\n</div><div class='long'><p>The name of the method.</p>\n</div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Optional attributes</h3><div id='attribute-args' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.method'>dr.method</span><br/><a href='source/dreem.html#dr-method-attribute-args' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.method-attribute-args' class='name expandable'>args</a> : String[]<span class=\"signature\"></span></div><div class='description'><div class='short'><p>A comma separated list of method arguments.</p>\n</div><div class='long'><p>A comma separated list of method arguments.</p>\n</div></div></div><div id='attribute-type' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.method'>dr.method</span><br/><a href='source/dreem.html#dr-method-attribute-type' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.method-attribute-type' class='name expandable'>type</a> : \"js\"/\"coffee\"<span class=\"signature\"></span></div><div class='description'><div class='short'>The compiler to use for this method. ...</div><div class='long'><p>The compiler to use for this method. Inherits from the immediate class if unspecified.</p>\n</div></div></div></div></div></div></div>","meta":{}});