webpackJsonp([1],{"+6mM":function(t,e){},"1bCa":function(t,e){},E1t8:function(t,e){},F8V1:function(t,e,a){t.exports=a("W24z")},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i={name:"App",data:function(){return{password:"",keyboardShow:!1,show:!1}},methods:{openKeyboard:function(t){this.keyboardShow=t},onShowPay:function(){this.show=!0},emitPwd:function(t){this.password=t},inputEnd:function(t){var e=this;setTimeout(function(){123456==t?e.$refs.pays.$success().then(function(t){console.log("支付成功")}):e.$refs.pays.$fail("密码错误")},1e3)},inputEnd1:function(t){var e=this;setTimeout(function(){123456==t?e.$refs.vpays.$success().then(function(t){console.log("支付成功")}):e.$refs.vpays.$fail()},1e3)},close:function(){console.log("关闭")},forget:function(){console.log("触发forge事件")}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("h3",{staticClass:"index-title"},[t._v("支付密码框的vue插件")]),t._v(" "),a("h3",{staticClass:"index-title"},[t._v("这里的模拟密码为：123456")]),t._v(" "),a("div",{staticClass:"submit-btn",on:{click:t.onShowPay}},[t._v("点击显示支付弹窗")]),t._v(" "),a("rt-pay",{ref:"pays",attrs:{forgetPwdShow:!0},on:{close:t.close,forget:t.forget,"input-end":t.inputEnd},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}}),t._v(" "),a("div",{staticClass:"num-title"},[t._v("弹出数字键盘")]),t._v(" "),a("rt-pwd",{attrs:{password:t.password},on:{"open-keyboard":t.openKeyboard},scopedSlots:t._u([{key:"keyboard",fn:function(){return[a("rt-keyboard",{ref:"vpays",attrs:{characterShow:!1},on:{close:t.close,forget:t.forget,"emit-pwd":t.emitPwd,"input-end":t.inputEnd1},model:{value:t.keyboardShow,callback:function(e){t.keyboardShow=e},expression:"keyboardShow"}})]},proxy:!0}])})],1)},staticRenderFns:[]};var o=a("VU/8")(i,n,!1,function(t){a("S1ah")},null,null).exports,r=a("/ocq"),c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),a("br"),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var l=a("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},c,!1,function(t){a("RqNW")},"data-v-3b884edb",null).exports;s.a.use(r.a);var u=new r.a({routes:[{path:"/",name:"HelloWorld",component:l}]}),p=a("F8V1"),v=a.n(p);s.a.use(v.a),s.a.config.productionTip=!1,new s.a({el:"#app",router:u,components:{App:o},template:"<App/>"})},RqNW:function(t,e){},S1ah:function(t,e){},W24z:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={props:{password:{type:String},digit:{type:Number,default:6}},methods:{openKeyboard:function(){this.$emit("open-keyboard",!0)}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"password-content"},[a("div",{staticClass:"pass-box"},[a("ul",{staticClass:"pass-area",on:{click:t.openKeyboard}},t._l(t.digit,function(e,s){return a("li",{key:s,staticClass:"pass-item",class:{on:t.password.length>s}})}),0)]),t._v(" "),t._t("keyboard")],2)},staticRenderFns:[]};var n=a("VU/8")(s,i,!1,function(t){a("+6mM")},"data-v-9aad1cc2",null).exports,o=a("//Fk"),r=a.n(o),c={data:function(){return{password:"",payStatus:0,failTip:"支付密码错误",isShowFail:!1,keyboardList:[{num:1,character:"",style:!0},{num:2,character:"ABC"},{num:3,character:"DEF"},{num:4,character:"GHI"},{num:5,character:"JKL"},{num:6,character:"MNO"},{num:7,character:"PQRS"},{num:8,character:"TUV"},{num:9,character:"WXYZ"},{type:null},{num:0},{type:"delete"}]}},props:{characterShow:{type:Boolean,default:!0},digit:{type:Number,default:6},loadingText:{type:String,default:"正在支付"},finishedText:{type:String,default:"支付成功"},duration:{type:Number,default:500}},watch:{password:function(t,e){this.$emit("emit-pwd",t),t.length===this.digit&&(this.payStatus=1,this.$emit("input-end",this.password))}},methods:{onKeyboard:function(t){if(null!==t.type&&("number"==typeof t.num&&(this.password=(this.password+t.num).slice(0,this.digit)),"delete"===t.type)){if(0===this.password.length)return;this.password=this.password.slice(0,this.password.length-1)}},cancel:function(){1!==this.payStatus&&(this.password="",this.payStatus=0,this.$emit("change",!1),this.$emit("close"))},$success:function(){var t=this;return new r.a(function(e,a){t.payStatus=2,setTimeout(function(){t.cancel(),e()},t.duration)})},$fail:function(t){t&&"string"==typeof t&&(this.failTip=t),this.payStatus=0,this.isShowFail=!0},reInput:function(){this.password="",this.isShowFail=!1},forget:function(){this.$emit("forget")}}},l={mixins:[c],model:{prop:"keyboardShow",event:"change"},props:{keyboardShow:{type:Boolean,required:!0,default:!1}},methods:{close:function(){1!==this.payStatus&&(this.$emit("change",!1),this.$emit("close"))}}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.keyboardShow,expression:"keyboardShow"}],staticClass:"keyboard-content"},[s("div",{staticClass:"layer",on:{click:t.close,touchmove:function(t){t.preventDefault()}}}),t._v(" "),s("ul",{staticClass:"keyboard"},t._l(t.keyboardList,function(e,a){return s("li",{key:a,class:{none:null===e.type,zero:0===e.num,delete:"delete"===e.type},on:{click:function(a){return t.onKeyboard(e)}}},["number"==typeof e.num?s("p",{staticClass:"num"},[t._v(t._s(e.num))]):t._e(),t._v(" "),e.character&&t.characterShow?s("p",{staticClass:"character"},[t._v(t._s(e.character))]):t._e()])}),0),t._v(" "),0!==t.payStatus?s("div",{staticClass:"loading-wrap"},[s("div",{staticClass:"loading"},[1===t.payStatus?s("img",{staticClass:"loading-ico",attrs:{src:a("mVKE"),alt:""}}):t._e(),t._v(" "),2===t.payStatus?s("img",{staticClass:"success-ico",attrs:{src:a("pBp8"),alt:""}}):t._e(),t._v(" "),1===t.payStatus?s("p",[t._v(t._s(t.loadingText))]):t._e(),t._v(" "),2===t.payStatus?s("p",[t._v(t._s(t.finishedText))]):t._e()])]):t._e(),t._v(" "),t.isShowFail?s("div",{staticClass:"pay-fail"},[s("div",{staticClass:"pay-fail-lay"},[s("h3",{staticClass:"title"},[t._v(t._s(t.failTip))]),t._v(" "),s("div",{staticClass:"btns"},[s("div",{on:{click:t.reInput}},[t._v("重新输入")]),t._v(" "),s("div",{on:{click:t.forget}},[t._v("忘记密码")])])])]):t._e()])},staticRenderFns:[]};var p=a("VU/8")(l,u,!1,function(t){a("1bCa")},"data-v-45409fc3",null).exports,v={mixins:[c],model:{prop:"show",event:"change"},props:{show:{type:Boolean,required:!0,default:!1},forgetPwdShow:{type:Boolean,default:!1},title:{type:String,default:"请输入支付密码"}}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.show?s("div",{staticClass:"rt-pay"},[s("div",{staticClass:"layer",on:{click:t.cancel,touchmove:function(t){t.preventDefault()}}}),t._v(" "),s("div",{staticClass:"content"},[s("header",{staticClass:"pay-title"},[s("div",{staticClass:"ico-close",on:{click:t.cancel}}),t._v(" "),s("h3",[t._v(t._s(t.title))])]),t._v(" "),s("div",{staticClass:"pass-box"},[s("ul",{staticClass:"pass-area"},t._l(t.digit,function(e,a){return s("li",{key:a,staticClass:"pass-item",class:{on:t.password.length>a}})}),0)]),t._v(" "),t.forgetPwdShow?s("div",{staticClass:"forget-pass"},[s("div",{staticClass:"forget-pass-btn",on:{click:t.forget}},[t._v("忘记密码")])]):t._e(),t._v(" "),s("ul",{staticClass:"keyboard"},t._l(t.keyboardList,function(e,a){return s("li",{key:a,class:{"justify-start":e.style,none:null===e.type,zero:0===e.num,delete:"delete"===e.type},on:{click:function(a){return t.onKeyboard(e)}}},["number"==typeof e.num?s("p",{staticClass:"num"},[t._v(t._s(e.num))]):t._e(),t._v(" "),e.character&&t.characterShow?s("p",{staticClass:"character"},[t._v(t._s(e.character))]):t._e()])}),0),t._v(" "),0!==t.payStatus?s("div",{staticClass:"loading-wrap"},[s("div",{staticClass:"loading"},[1===t.payStatus?s("img",{staticClass:"loading-ico",attrs:{src:a("mVKE"),alt:""}}):t._e(),t._v(" "),2===t.payStatus?s("img",{staticClass:"success-ico",attrs:{src:a("pBp8"),alt:""}}):t._e(),t._v(" "),1===t.payStatus?s("p",[t._v(t._s(t.loadingText))]):t._e(),t._v(" "),2===t.payStatus?s("p",[t._v(t._s(t.finishedText))]):t._e()])]):t._e(),t._v(" "),t.isShowFail?s("div",{staticClass:"pay-fail"},[s("div",{staticClass:"pay-fail-lay"},[s("h3",{staticClass:"title"},[t._v(t._s(t.failTip))]),t._v(" "),s("div",{staticClass:"btns"},[s("div",{on:{click:t.reInput}},[t._v("重新输入")]),t._v(" "),s("div",{on:{click:t.forget}},[t._v("忘记密码")])])])]):t._e()])]):t._e()},staticRenderFns:[]};var h=a("VU/8")(v,d,!1,function(t){a("E1t8")},"data-v-235c0990",null).exports,f={install:function(t,e){t.component("rtPay",h),t.component("rtPwd",n),t.component("rtKeyboard",p)}};e.default=f},mVKE:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEcklEQVRYR7VXbWxTVRh+ntuuTAau9yZD0Q0d7R3REIwkoNFg/IHDxBh+QJaoMRo0ge12UReZP/CDYGKiaNDBLcyEGI0mAgbNQjCi/CExRiVRRD7s7RhgQsjA284OHa73vuZ23NGWbV3X7f7qOed9Ps5H3/ccosxPjZ9ZQjjLIaj3oS6RVhQcsjfoJ8ukAycD0HZZd7sO1inEgwLcR4yL6xfgOwJf2UPVB9DR8G8p/gkN1MYTCwPA6yJ8moRSiix/XIAUgK2p/uhWbGZ2POzYBkQY3pl8TRHpBFlTABa5IKRVRFhPIDKWiECOuUrg+YENkaNjjd9ooFuq1GxyH4nVeYAhiHz+n6K8Mtga7b+BaLMEtbrelS7lEUVkBchlxTGu4L20ob9c3F9owCOalzwAYFUuUOSKC2xKG00flLP8taa1NgDsAHFLEW6L3aa/kd9XYEAzrX0g1o5o45JAmtNG06/liPux4W19Yc4a7iG4onALudE2ou/6faMGtB1WCxTsyYkD58UNPJSOLTw3FfFRTJc1Sw1gT/52ikhWgGX+xEYM7D0R0i6FekHUC8QWN7i0YnHfRe58WL+BvGvUmMiPttF0v9fOGQjHk+0KpMv77QKr0216T0UzLwKHd525h072KMmgP+S4ysqBWORwzoAaT/QRvBPAPrtNb5lOcZ9LNRO7SK7PW4VvbaOpmZqZfACU772BYVdZlIlFEjNhQDOTDUK3l2DV6CpAIlTjiXcIbhTB8ZShL5kJcZ9Tiye+ALjGb7siL1IzrW9ANAvwVqpN3zSTBtR4YgPBnXnb8KVn4M/c6XeVx1KxyMGZNKDFLe/k/5Bn4DTVuJUlEBhyZt3+T/uCCzNpYKS4sfe6hmSoxS3xOuyh6tmTKZ+VGJzTZdWFgiioJdTiib8BzrWldi6MeYOVCEwGq5mJn/xiJcDv1MzESS9LuQw2plsbz06GpJKYGrPv1ipm31QEGcet2k7VtD4l8ZQjWDVg6IcqIZ8KlmEz8axCfgTBNtvQO6ZCUi5m9vbzt/kHnvjkYo02mLksgkyqLjofLXTKJSwn3ivTTlVVIBOr/8vD5WqBZlq7QaxzRVmTNiL7yyEsNza807o33ar/4uOuGUg2APIHiD67NboYZO6vOd2fN/tsaHj+oNF0qsCA11DNRCfJt13gpXSb/v50i19b6edsQ9+dz339SibiZcUjIJbT5VI7pp+YThNeHbjqVPcUZ9uCO+Hs7rPzq7PD3v7IsNy02D8olRrxrnsiyqlUe+R4MdcN1/KbzWQ0APmawBwHeKai3LD3REi9HNoirhxMx5qOjDWRMR8manfvAjrOIYCLBPIhAoHO1PrIQDkr4V10BPICBVsm2s7xn2ae+0uhDkJeBZgBsdVlcP9E6bo2fk5V5GoLiMcpPGzXRbtK5ZXSj9Pc4Uw+CcoTFDwsZB8Ex0jpg4wkLSGqAXmUwmGX+EwQ+nig7Q7vbVjyK20gn2LkCbbcpbsIYIMiUIRyRcifHSV4MbO+8XRJxaKA/wGTIco0FJq57QAAAABJRU5ErkJggg=="},pBp8:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAFPElEQVRoQ9Vaa4wTVRT+vnl0EUGMwRhEyfIIEAGZjQkJJISIkTc+Eo1iSADjyg93WyAG4y9Ro7KgW7ZoIvEHCBr9oQGDj/jDtwajknaRNcGIRFDAKI9VY+jM7BxzW7Z0u7udaTvTlf5r5tzvfN89586ce88lQvg1peyZEMwWYBaIWQSmlcKK4DyI7yDyLTT9G4r+VTrOP2p1z2oBJqXkqhHiPgx460iOrRLnAKC1p1v1t0FKNRgVC5jWLteYur2BZAuAUdU47R8dOSJgmzHMfO3gWjqVYAYWYCXlamj2RpCtBEZU4iSwrchxj3zWPWvu7NpEO8i4QAKspG1Rl/cAXh8EtFYbETniILagK8Hjfli+Aqxt2Qeo8RUAw/3AQn5+xhPe25kwPymHW1aA1WEnQCQJ+AoNmXwvXI8naO5MxHYOhj8oMStlryOQjIhYpbCr0vHY7oEGDSjg5pS7XBNvHwmtUk8R2TsQLk4nzI9K8fsJmJGUCbrmHCJxZURkqoIV4Jyjmzd1PcLTxQB9BYjQSjlfkphTlZfIB8mH6XjDokEFWCl7NYFBF0zk/II4EFmRTjS82WtaiMC0l2REzHWOgRgdBGfobOSErcdUKv2jOBQEWB3ZTSSfGDpiwT2LyJOZRMOmggBVmI2Eo756odQ2walUZ6kqW32Y2XhwLbtzEbgscr9EqwBrMvHYrl4BnxKYV918hDdq9jhi6rXEG50eLrh+uPk3Em/ZIaN6ss65ISwXckxvm0RsWWzkFuXTH/dgb5dXVoEIvB7THE1ru3sXxdvrpzfK54r85kUGdAJ/ZYEVbzg49be/R6F2N62ObBvJjf7m0ViUkn/wLRc/nw22ORORLUrAPpJ3RkOvPGot5BWyiLxDq8P+nsT0eguolXxeAA4rAadJXFdPAfPGE88vvZTzlaRNMU8R/E4rZV8g0FAvAYr81iUGDC2/YKsln4sAkGVTyg62YkJQGCb5QjHXlLLPV1JC3DohH/4vjgkefd+FW/51XZAdBXkA3bRS2RMEbwg6wSstDRvm6jnzr48L4vv9RcwZR2xbHk7a9FkDkF/VGqiojFC5+8JSA3Mb84WsnwhFPrnMgKnXnvOlkyzAZ2oNvAxgbdAIKDv1xWxf5i8iSvIX+e5QEahqF6ZEtC02MH/iwJGoA3n1FlpDKymN1J1jlUSg11YjcgVYsYjEuy6sMcSLd0STNn3WQI85/mI5nT1CcHK1Ip5ZoGPh5PwJzKHTkiuJYxHkfMlH7HAmEZuRFxDCdvK5hZdEKMxaP1K+k0k+nm41N+cF1JBGxY6eul3Hsqla9OSVU81sTLfwl6JNvb2LxCpf5T4GM8cQv3UL/vy3VqTBx4vg1UwitlpZFARMT8lEE85P0bkND9mBOelwnEf7CFB/mlLZzQAfC89V+EjFRyr9BExpk5HDr7DTACeG77p2RIH8kIk39Gkg9j/c3S5TDXEODkFDw09ht6eZszpb+GOx4YDH6zO3Z+/ThIXzRz/kujyntiTdanxQ6uuyaHAIZGUm3vD6QBP1v24xiUDtth7qTMT2DBZl395XU8q9R8RT34j6NjxETkG0+9PrzM/LpaivADVYdW0M3VGdyvl1yXfBHvHMeGY91W6x7C+QgBxCvnvTTGJLJVtQPwJ9n8tRT7Rmv9aq71uonFN11SBm2OsBtoYlRDW2qXGrFjN3R3bVoFRUvqfgNou67FHBnroYJ7clpNaebtH31+2yx0DRKVy3IaYAMlZdSaDIjSDHATgD4CQgJ0V4UignIHrGNfQDpR3HytItb/0fMARClZNYpJ0AAAAASUVORK5CYII="}},["NHnr"]);
//# sourceMappingURL=app.e491c766ad5761488263.js.map