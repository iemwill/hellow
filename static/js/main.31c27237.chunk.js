(this.webpackJsonphellow=this.webpackJsonphellow||[]).push([[0],{230:function(e,t){},233:function(e,t){},236:function(e,t){},240:function(e,t){},267:function(e,t){},269:function(e,t){},279:function(e,t){},281:function(e,t){},291:function(e,t){},293:function(e,t){},410:function(e,t){},412:function(e,t){},419:function(e,t){},420:function(e,t){},514:function(e,t,n){"use strict";n.r(t);var i=n(34),s=n(5),r=n(6),c=n(10),a=n(9),o=n(16),b=n.n(o),u=n(14),p=n.n(u),j=n(207),l=n.n(j),d=n(208),h=n(43),x=n.n(h),f=n(79);function O(){return(O=Object(i.a)(b.a.mark((function e(t,n,i){var s,r,c,a,o,u,p,j,l,d;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s="0x77754bdda8a6391f340bb2ffe2da6a58a30b7228",r=new x.a(new x.a.providers.HttpProvider("https://ropsten.infura.io/v3/64a56ad8cf2b48be9020b6097e6c68a1")),c="0xd2cf9f677f361f23c576825978338c4a21291646",a=new r.eth.Contract(f,c),o=a.methods.webAppAction(t.slice(0,7),r.utils.toHex(n),r.utils.toHex(i)).encodeABI(),e.next=8,r.eth.getTransactionCount(s);case 8:return u=e.sent,e.next=11,r.eth.net.getId();case 11:return p=e.sent,j={nonce:r.utils.toHex(u),to:c,from:s,chainId:p,value:r.utils.toHex(r.utils.toWei("0","ether")),gasLimit:r.utils.toHex(1e5),data:o,maxPriorityFeePerGas:r.utils.toHex(r.utils.toWei("1","Gwei")),type:2},e.next=15,r.eth.accounts.signTransaction(j,"0xf7cc4541c58b217e2e5b3cca4aa407e007a3cfd95e227e4d1b77f39a5bc3dbcf");case 15:return l=e.sent,e.next=18,r.eth.sendSignedTransaction(l.rawTransaction);case 18:d=e.sent,console.log("TX: ",d),e.next=25;break;case 22:e.prev=22,e.t0=e.catch(0),console.log("Add Action failed: ",e.t0);case 25:case"end":return e.stop()}}),e,null,[[0,22]])})))).apply(this,arguments)}var y=function(e,t,n){return O.apply(this,arguments)},m=n(0),v=n(43),g=function(e){Object(c.a)(n,e);var t=Object(a.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={latestBlock:{},length:Number,count:0},e}return Object(r.a)(n,[{key:"getLatestBlock",value:function(){var e=Object(i.a)(b.a.mark((function e(){var t,n,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=new v(new v.providers.HttpProvider("https://mainnet.infura.io/v3/64a56ad8cf2b48be9020b6097e6c68a1")),e.next=4,t.eth.getBlock("latest");case 4:n=e.sent,i=n.transactions.length,1,console.log(n),this.setState({latestBlock:n,length:i,count:1}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("FAILED TO LOAD BLOCK: ",e.t0);case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"_addWebAppAction",value:function(e){2==this.props.count?(this.getLatestBlock(),y("HiddenIP",e,this.props.sessionID)):(this.getLatestBlock(),y(this.props.ip,e,this.props.sessionID))}},{key:"render",value:function(){var e=this;0==this.state.count&&this.getLatestBlock();var t=this.state.latestBlock,n=this.state.length;return Object(m.jsx)("section",{id:"ethereumDataMin",children:Object(m.jsxs)("div",{className:"ethereumDataMin",children:[Object(m.jsx)("a",{href:"https://etherscan.io/blocks",target:"_blank",rel:"noreferrer",onClick:function(){return e._addWebAppAction(2)},children:Object(m.jsx)("button",{children:"ethereum data"})}),Object(m.jsx)("br",{}),Object(m.jsxs)("h2",{children:["Blocknumber",Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:t.number})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("h2",{children:["Puzzle Solver",Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:t.miner})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("h2",{children:["Transactions",Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:n})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("h2",{children:["Size in Bytes",Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:t.size})]}),Object(m.jsx)("button",{onClick:function(){return e._addWebAppAction(3)},children:"update block"}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsxs)("h3",{children:["To verify the above visualized data take a look at the ethereum blockchain explorer.",Object(m.jsx)("br",{}),"A tool to read data from the ethereum blockchain via the browser.",Object(m.jsx)("br",{}),"(button on top)"]}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("hr",{})]})})}}]),n}(u.Component),k=g,A=n(56),T=function(e){Object(c.a)(n,e);var t=Object(a.a)(n);function n(){return Object(s.a)(this,n),t.call(this)}return Object(r.a)(n,[{key:"_addWebAppAction",value:function(e){2==this.props.count?y("HiddenIP",e,this.props.sessionID):y(this.props.ip,e,this.props.sessionID)}},{key:"render",value:function(){var e=this;return Object(m.jsxs)("section",{id:"contact",children:[Object(m.jsxs)("div",{className:"contact",children:[Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("a",{href:"https://wa.me/message/AAIDX7NDPAJ3J1",target:"_blank",rel:"noreferrer",onClick:function(){return e._addWebAppAction(4)},children:Object(m.jsx)(A.e,{})}),Object(m.jsx)("a",{href:"https://twitter.com/iem_wll",target:"_blank",rel:"noreferrer",onClick:function(){return e._addWebAppAction(5)},children:Object(m.jsx)(A.d,{})}),Object(m.jsx)("a",{href:"https://github.com/iemwill",target:"_blank",rel:"noreferrer",onClick:function(){return e._addWebAppAction(6)},children:Object(m.jsx)(A.a,{})}),Object(m.jsx)("a",{href:"https://t.me/whatuup",target:"_blank",rel:"noreferrer",onClick:function(){return e._addWebAppAction(7)},children:Object(m.jsx)(A.c,{})}),Object(m.jsx)("a",{href:"https://linkedin.com/in/w-ll",target:"_blank",rel:"noreferrer",onClick:function(){return e._addWebAppAction(8)},children:Object(m.jsx)(A.b,{})}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{})]}),Object(m.jsxs)("div",{id:"c0n74c7",children:[Object(m.jsx)("a",{id:"bitcoin",href:"mailto:hello@laubenheimer.eu",onClick:function(){return e._addWebAppAction(9)},children:"Inspirator"}),Object(m.jsx)("a",{href:"mailto:hello@laubenheimer.eu",onClick:function(){return e._addWebAppAction(9)},children:" & "}),Object(m.jsx)("a",{id:"ethereum",href:"mailto:hello@laubenheimer.eu",onClick:function(){return e._addWebAppAction(9)},children:"Consultent"}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("a",{id:"bank",href:"bank:DE75100100100959924103",onClick:function(){return e._addWebAppAction(12)},children:"DE75100100100959924103"}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("a",{id:"bitcoin",href:"bitcoin:bc1qmupy24nxjr822smvq8a2x33vd5tc6dth56p897",onClick:function(){return e._addWebAppAction(10)},children:"bc1qmupy24nxjr822smvq8a2x33vd5tc6dth56p897"}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("a",{id:"ethereum",href:"ethereum:0xc3577e1BF219c041306dDa4689a1D1Fb531329A0",onClick:function(){return e._addWebAppAction(11)},children:"0xc3577e1BF219c041306dDa4689a1D1Fb531329A0"}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("hr",{}),Object(m.jsx)("br",{}),"Testnet-Token: ",Object(m.jsx)("a",{href:"https://ropsten.etherscan.io/address/0x2f6041024c4846A817CaB429e83c6cDCeC22F653",target:"_blank",rel:"noreferrer",onClick:function(){return e._addWebAppAction(13)},children:"0x2f6041024c4846A817CaB429e83c6cDCeC22F653"})," on Ropsten",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"NFT-Register: ",Object(m.jsx)("a",{href:"https://ropsten.etherscan.io/address/0x1CE8ac1E22DAf01406F2AdBaB87CF94516d068Eb",target:"_blank",rel:"noreferrer",onClick:function(){return e._addWebAppAction(14)},children:"0x1CE8ac1E22DAf01406F2AdBaB87CF94516d068Eb"})," on Ropsten",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("hr",{}),Object(m.jsx)("br",{}),"We collect innovative and open source, as well as the code to these lines here, every click action and anonymized ip-address.",Object(m.jsx)("br",{}),'To see how and where the data is collected click the "Ropsten"-link on top.',Object(m.jsx)("br",{}),"Thank you for visiting this Application !"]})]})}}]),n}(u.Component),w=function(e){Object(c.a)(n,e);var t=Object(a.a)(n);function n(){return Object(s.a)(this,n),t.call(this)}return Object(r.a)(n,[{key:"_addWebAppAction",value:function(e){2==this.props.count?y("HiddenIP",e,this.props.sessionID):y(this.props.ip,e,this.props.sessionID)}},{key:"render",value:function(){var e=this;return Object(m.jsx)("section",{id:"opener",children:Object(m.jsxs)("div",{className:"opener",children:[Object(m.jsxs)("h3",{children:[this.props.ip,Object(m.jsx)("br",{}),"Your visit could've been registered at the Ethereum Blockchain",Object(m.jsx)("a",{href:"https://ropsten.etherscan.io/address/0xd2cf9f677f361f23c576825978338c4a21291646",target:"_blank",rel:"noreferrer",onClick:function(){return e._addWebAppAction(1)},children:" Ropsten."})]}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsxs)("h1",{children:["Bitcoin is here to free the people. from corruption, fraud, backdoor agreements, ec. ",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"Bitcoin enables open democracy mixed with technocracy. ",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),'Ethereum can be seen as Bitcoin\'s twin and a "playground" for more unsecure procedures, not just because it is turing complete. ',Object(m.jsx)("br",{}),Object(m.jsx)("br",{})]}),Object(m.jsxs)("h2",{children:["- for(ever){young} - ",Object(m.jsx)("br",{}),Object(m.jsx)("br",{})]}),Object(m.jsxs)("h1",{children:[Object(m.jsx)("br",{}),Object(m.jsx)("br",{})," ! Power To The People ! ",Object(m.jsx)("br",{}),Object(m.jsx)("hr",{})]})]})})}}]),n}(u.Component),C=function(e){Object(c.a)(n,e);var t=Object(a.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={count:0,ip:"Your ip address could not be set. Maybe your privacy settings or browser.",sessionID:0},e}return Object(r.a)(n,[{key:"initSession",value:function(){var e=Object(i.a)(b.a.mark((function e(t){var n,i,s,r,c,a,o,u,p,j;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!=this.state.count){e.next=29;break}return e.prev=1,n="0x77754bdda8a6391f340bb2ffe2da6a58a30b7228",i=new x.a(new x.a.providers.HttpProvider("https://ropsten.infura.io/v3/64a56ad8cf2b48be9020b6097e6c68a1")),s="0xd2cf9f677f361f23c576825978338c4a21291646",r=new i.eth.Contract(f,s),c=r.methods.initSession(t.slice(0,7)).encodeABI(),e.next=9,i.eth.getTransactionCount(n);case 9:return a=e.sent,e.next=12,i.eth.net.getId();case 12:return o=e.sent,u={nonce:i.utils.toHex(a),to:s,from:n,chainId:o,value:i.utils.toHex(i.utils.toWei("0","ether")),gasLimit:i.utils.toHex(21e4),data:c,maxPriorityFeePerGas:i.utils.toHex(i.utils.toWei("2","gwei")),type:2},e.next=16,i.eth.accounts.signTransaction(u,"0xf7cc4541c58b217e2e5b3cca4aa407e007a3cfd95e227e4d1b77f39a5bc3dbcf");case 16:return p=e.sent,e.next=19,i.eth.sendSignedTransaction(p.rawTransaction);case 19:j=e.sent,console.log("TX: ",j),console.log("Data: ",j.logs[0].data),console.log("SessionID: ",i.eth.abi.decodeParameters(["string","uint256"],j.logs[0].data)[1]),this.setState({sessionID:i.eth.abi.decodeParameters(["string","uint256"],j.logs[0].data)[1]}),e.next=29;break;case 26:e.prev=26,e.t0=e.catch(1),console.log("Initialization failed: ",e.t0);case 29:case"end":return e.stop()}}),e,this,[[1,26]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return 0==this.state.count&&Object(d.a)().then((function(t){e.initSession(t);e.setState({count:1,ip:t})})).catch((function(t){if(2!=e.state.count){e.initSession("HiddenIP");e.setState({count:2}),console.log("IP-error :",t)}})),Object(m.jsx)("section",{id:"App",children:Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(w,{ip:this.state.ip,count:this.state.count,sessionID:this.state.sessionID}),Object(m.jsx)(k,{ip:this.state.ip,count:this.state.count,sessionID:this.state.sessionID}),Object(m.jsx)(T,{ip:this.state.ip,count:this.state.count,sessionID:this.state.sessionID})]})})}}]),n}(u.Component);l.a.render(Object(m.jsx)(p.a.StrictMode,{children:Object(m.jsx)(C,{})}),document.getElementById("Application"))},79:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"description","type":"string"}],"name":"Activity","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"description","type":"string"},{"indexed":false,"internalType":"uint256","name":"ID","type":"uint256"}],"name":"Activity","type":"event"},{"inputs":[],"name":"emptyTocket","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"ip","type":"string"}],"name":"getRegisteredVisitsFrom","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"ID","type":"uint256"}],"name":"getSession","outputs":[{"components":[{"internalType":"string","name":"ip","type":"string"},{"internalType":"uint256","name":"timestampStart","type":"uint256"},{"internalType":"uint256","name":"timestampLastAction","type":"uint256"},{"internalType":"uint256[]","name":"actions","type":"uint256[]"}],"internalType":"struct Cookies.Session","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getVisitorCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"ip","type":"string"}],"name":"initSession","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"sessions","outputs":[{"internalType":"string","name":"ip","type":"string"},{"internalType":"uint256","name":"timestampStart","type":"uint256"},{"internalType":"uint256","name":"timestampLastAction","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"visitors","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"ip","type":"string"},{"internalType":"uint256","name":"buttonID","type":"uint256"},{"internalType":"uint256","name":"sessionID","type":"uint256"}],"name":"webAppAction","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]')}},[[514,1,2]]]);
//# sourceMappingURL=main.31c27237.chunk.js.map