(this.webpackJsonphellow=this.webpackJsonphellow||[]).push([[0],{225:function(e,t){},249:function(e,t){},251:function(e,t){},328:function(e,t){},330:function(e,t){},362:function(e,t){},367:function(e,t){},369:function(e,t){},376:function(e,t){},389:function(e,t){},412:function(e,t){},485:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"text","type":"string"},{"indexed":false,"internalType":"uint256","name":"date","type":"uint256"}],"name":"Registration","type":"event"},{"inputs":[{"internalType":"string","name":"ip","type":"string"}],"name":"getVisits","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"ip","type":"string"}],"name":"register","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]')},486:function(e,t,r){"use strict";r.r(t);var n=r(5),c=r(8),s=r(11),a=r(10),b=r(15),i=r.n(b),j=r(202),o=r.n(j),l=r(19),u=r.n(l),h=r(53),x=r(1),O=r(77),d=function(e){Object(s.a)(r,e);var t=Object(a.a)(r);function r(){var e;return Object(n.a)(this,r),(e=t.call(this)).state={latestBlock:{},length:Number,count:0},e}return Object(c.a)(r,[{key:"getLatestBlock",value:function(){var e=Object(h.a)(u.a.mark((function e(){var t,r,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=new O(new O.providers.HttpProvider("https://mainnet.infura.io/v3/4fdbae7ae3e94fb9a3033c623fc4e7f0")),e.next=4,t.eth.getBlock("latest");case 4:r=e.sent,n=r.transactions.length,1,this.setState({latestBlock:r,length:n,count:1}),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;0===this.state.count&&this.getLatestBlock();var t=this.state.latestBlock,r=this.state.length;return Object(x.jsx)("section",{id:"ethereumDataMin",children:Object(x.jsxs)("div",{className:"ethereumDataMin",children:[Object(x.jsx)("a",{href:"https://etherscan.io/blocks",target:"_blank",rel:"noreferrer",children:Object(x.jsx)("button",{children:"ethereum data"})}),Object(x.jsx)("br",{}),Object(x.jsxs)("h2",{children:["Blocknumber",Object(x.jsx)("br",{}),Object(x.jsx)("span",{children:t.number})]}),Object(x.jsx)("br",{}),Object(x.jsxs)("h2",{children:["Puzzle Solver",Object(x.jsx)("br",{}),Object(x.jsx)("span",{children:t.miner})]}),Object(x.jsx)("br",{}),Object(x.jsxs)("h2",{children:["Transactions",Object(x.jsx)("br",{}),Object(x.jsx)("span",{children:r})]}),Object(x.jsx)("br",{}),Object(x.jsxs)("h2",{children:["Size in Bytes",Object(x.jsx)("br",{}),Object(x.jsx)("span",{children:t.size})]}),Object(x.jsx)("button",{onClick:function(){return e.getLatestBlock()},children:"update block"}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsxs)("h3",{children:["To verify the above visualized data take a look at the ethereum blockchain explorer.",Object(x.jsx)("br",{}),"A tool to read data from the ethereum blockchain via the browser.",Object(x.jsx)("br",{}),"(button on top)"]}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("hr",{})]})})}}]),r}(b.Component),p=r(54),f=function(e){Object(s.a)(r,e);var t=Object(a.a)(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(c.a)(r,[{key:"render",value:function(){return Object(x.jsxs)("section",{id:"contact",children:[Object(x.jsxs)("div",{className:"contact",children:[Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("a",{href:"https://wa.me/message/AAIDX7NDPAJ3J1",target:"_blank",rel:"noreferrer",children:Object(x.jsx)(p.e,{})}),Object(x.jsx)("a",{href:"https://twitter.com/iem_wll",target:"_blank",rel:"noreferrer",children:Object(x.jsx)(p.d,{})}),Object(x.jsx)("a",{href:"https://github.com/iemwill",target:"_blank",rel:"noreferrer",children:Object(x.jsx)(p.a,{})}),Object(x.jsx)("a",{href:"https://t.me/whatuup",target:"_blank",rel:"noreferrer",children:Object(x.jsx)(p.c,{})}),Object(x.jsx)("a",{href:"https://linkedin.com/in/w-ll",target:"_blank",rel:"noreferrer",children:Object(x.jsx)(p.b,{})}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{})]}),Object(x.jsxs)("div",{id:"c0n74c7",children:[Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("a",{id:"bitcoin",href:"bitcoin:bc1qmupy24nxjr822smvq8a2x33vd5tc6dth56p897",children:"bc1qmupy24nxjr822smvq8a2x33vd5tc6dth56p897"}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("a",{id:"ethereum",href:"ethereum:0x7Cbd7A31cF11643b985DaE722bc996A69eDdC5AF",children:"0x7Cbd7A31cF11643b985DaE722bc996A69eDdC5AF"}),Object(x.jsx)("br",{}),Object(x.jsx)("hr",{}),"We have not implemented any cookies nor collecting any data, except your ip-address. Thank you for visiting this Application !"]})]})}}]),r}(b.Component),m=r(204),v=r(77),g=r.n(v),y=r(485),k=function(e){Object(s.a)(r,e);var t=Object(a.a)(r);function r(){var e;return Object(n.a)(this,r),(e=t.call(this)).state={count:0,ip:"Your ip address could not be set. Maybe your privacy settings, well done :)"},e}return Object(c.a)(r,[{key:"register",value:function(){var e=Object(h.a)(u.a.mark((function e(t){var r,n,c,s,a,b,i,j,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="0xacabD7DE5ef1b5E8941F44F37a818C65E1469820",n=new g.a(new g.a.providers.HttpProvider("https://ropsten.infura.io/v3/4fdbae7ae3e94fb9a3033c623fc4e7f0")),c="0xaa2c7cca2774a114ae7bffa24832948d77b916cd",s=new n.eth.Contract(y,c),a=s.methods.register(t).encodeABI(),e.next=8,n.eth.getTransactionCount(r);case 8:return b=e.sent,i={nonce:n.utils.toHex(b),to:c,from:r,chainId:3,value:n.utils.toHex(n.utils.toWei("0","ether")),gasLimit:n.utils.toHex(21e4),gasPrice:n.utils.toHex(n.utils.toWei("2","gwei")),data:a},e.next=12,n.eth.accounts.signTransaction(i,"0x679ec86ebc8cbdff318d252578c980ef287d09470f3128ac24b0d23d95d9ab4f");case 12:return j=e.sent,e.next=15,n.eth.sendSignedTransaction(j.rawTransaction);case 15:o=e.sent,console.log("TX: ",o),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),console.log("FAIL: ",e.t0);case 22:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(m.a)().then((function(t){e.setState({count:1,ip:t}),e.register(t)})).catch((function(t){console.log("IP :",t),e.register("HiddenIP")})),Object(x.jsx)("section",{id:"opener",children:Object(x.jsxs)("div",{className:"opener",children:[Object(x.jsxs)("h3",{children:[this.state.ip,Object(x.jsx)("br",{}),"Your visit was registered at the Ethereum Blockchain ",Object(x.jsx)("a",{href:"https://ropsten.etherscan.io/address/0xaa2c7cca2774a114ae7bffa24832948d77b916cd",target:"_blank",rel:"noreferrer",children:"Ropsten."})]}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsxs)("h1",{children:["Bitcoin is here to free the people. from corruption, fraud, backdoor agreements, ec. ",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"Bitcoin enables open democracy mixed with technocracy. ",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),'Ethereum can be seen as Bitcoin\'s twin and a "playground" for more unsecure procedures, not just because it is turing complete. ',Object(x.jsx)("br",{}),Object(x.jsx)("br",{})]}),Object(x.jsxs)("h2",{children:["- for(ever){young} - ",Object(x.jsx)("br",{}),Object(x.jsx)("br",{})]}),Object(x.jsxs)("h1",{children:[Object(x.jsx)("br",{}),Object(x.jsx)("br",{})," ! Power To The People ! ",Object(x.jsx)("br",{}),Object(x.jsx)("hr",{})]})]})})}}]),r}(b.Component),w=function(e){Object(s.a)(r,e);var t=Object(a.a)(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(c.a)(r,[{key:"render",value:function(){return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(k,{}),Object(x.jsx)(d,{}),Object(x.jsx)(f,{})]})}}]),r}(b.Component);o.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(w,{})}),document.getElementById("Application"))}},[[486,1,2]]]);
//# sourceMappingURL=main.0c1f7979.chunk.js.map