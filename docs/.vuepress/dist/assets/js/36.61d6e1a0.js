(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{570:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("其实这些说明，我在代码注释里都有详细说明，但还是想单独提出来啰嗦下~")]),t._v(" "),a("h2",{attrs:{id:"组件库引入的路径问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件库引入的路径问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 组件库引入的路径问题")]),t._v(" "),a("p",[t._v("在编写组件库时，我们一般都会默认配置一些路径alias。但是打包后就会出现找不到对应文件的错误。这个时候就需要在"),a("code",[t._v("docs/.vuepress/components/config.js")]),t._v("里进行修改。")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 很多时候，我们引入自己的组件库，路径是不对的，")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这时就需要引入path，并在后面的chainWebpack进行配置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("dir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../../'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vuepress里修改webpack配置，使用的是chainWebpack进行链式调用")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 具体使用可以参考我这个例子和 https://github.com/neutrinojs/webpack-chain/tree/v5")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("chainWebpack")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" isServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alias\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("h2",{attrs:{id:"关于侧边栏的说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于侧边栏的说明","aria-hidden":"true"}},[t._v("#")]),t._v(" 关于侧边栏的说明")]),t._v(" "),a("p",[t._v("由于为了演示，这里就加上了版本1.0和2.0。如果不需要，可以删掉这两个文件夹，将里面的文件放在外面。依然是在"),a("code",[t._v("docs/.vuepress/components/config.js")]),t._v("里进行修改即可。")]),t._v(" "),a("h2",{attrs:{id:"vssue配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vssue配置","aria-hidden":"true"}},[t._v("#")]),t._v(" vssue配置")]),t._v(" "),a("p",[t._v("vssue这个是一个利用github issue的评论插件 具体配置见https://vssue.js.org/zh/ 所以是需要你自己进行"),a("code",[t._v("docs/.vuepress/components/config.js")]),t._v("配置。这里演示页面的评论是会加到我自己的项目issue里。")]),t._v(" "),a("h2",{attrs:{id:"参数api-表格"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数api-表格","aria-hidden":"true"}},[t._v("#")]),t._v(" 参数api 表格")]),t._v(" "),a("p",[t._v("因为自带的markdown表格，样式比较单调，主要是不能自适应，调整表格宽度，当说明较少时，表格是撑不满一整行的。所以就用el-table改进了下。当然为了保证书写的简便性，写法也是基本和markdown的写法一样。")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//表头为字符串，写法和md一样，中间以`|`间隔就行")]),t._v("\ntableHead"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("`参数 | 说明 | 类型 | 可选值 | 默认值`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//表格数据为数组，其中每一项为字符串，代表每一行要展示的数据，写法也和md一样，中间以`|`间隔就行")]),t._v("\ntableBody"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("`size | 尺寸 | String | medium / small / mini | —`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("`type |\t类型 | string |\tprimary / success / warning / danger / info / text | —`")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])]),t._v(" "),a("h2",{attrs:{id:"star组件说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#star组件说明","aria-hidden":"true"}},[t._v("#")]),t._v(" star组件说明")]),t._v(" "),a("p",[t._v("那个看起来很炫的star组件，是由"),a("code",[t._v("https://codepen.io/sanzang/pen/LKvNPd")]),t._v(" 代码修改而来。这里表示感谢！~")])])},[],!1,null,null,null);s.default=e.exports}}]);