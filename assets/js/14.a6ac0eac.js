(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{273:function(t,a,s){"use strict";s.r(a);var n=s(38),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"formatting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#formatting","aria-hidden":"true"}},[t._v("#")]),t._v(" Formatting")]),t._v(" "),s("p",[t._v("Flarum uses the powerful "),s("a",{attrs:{href:"https://github.com/s9e/TextFormatter",target:"_blank",rel:"noopener noreferrer"}},[t._v("s9e TextFormatter"),s("OutboundLink")],1),t._v(" library to format posts from plain markup into HTML. You should become familiar with "),s("a",{attrs:{href:"https://s9etextformatter.readthedocs.io/Getting_started/How_it_works/",target:"_blank",rel:"noopener noreferrer"}},[t._v("how TextFormatter works"),s("OutboundLink")],1),t._v(" before you attempt to extend it.")]),t._v(" "),s("p",[t._v("In Flarum, post content is formatted with a minimal TextFormatter configuration by default. The bundled "),s("strong",[t._v("Markdown")]),t._v(" and "),s("strong",[t._v("BBCode")]),t._v(" extensions simply enable the respective plugins on this TextFormatter configuration.")]),t._v(" "),s("p",[t._v("You can configure the TextFormatter "),s("code",[t._v("Configurator")]),t._v(" instance in your extension using the "),s("code",[t._v("Formatter")]),t._v(" extender:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Flarum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Extend")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("s9e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("TextFormatter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Configurator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Extend"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Formatter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("configure")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Configurator "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$config")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$config")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("BBCodes")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addFromRepository")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'B'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("With a good understanding of TextFormatter, this will allow you to achieve anything from simple BBCode tag additions to more complex formatting tasks like Flarum's "),s("strong",[t._v("Mentions")]),t._v(" extension.")])])},[],!1,null,null,null);a.default=e.exports}}]);