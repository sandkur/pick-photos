(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(42)},36:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(7),c=a.n(r),o=a(8),s=a(9),i=a(11),m=a(10),u=a(12),h=a(13),d=a.n(h),p=a(17),E=a(3),f=a(14),b="a9f020ade0a6ba6d2ba84ba91345fb4e73fa64ad1c0b6221233b55c6f12c3b29",g="https://cors-anywhere.herokuapp.com/",v=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={imgs:[],randomImgs:[],nullAlert:""},a.getPhotos=function(){var e=Object(p.a)(d.a.mark(function e(t){var n,l,r;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.keySearch.value,e.next=4,fetch("".concat(g,"https://api.unsplash.com/search/photos?per_page=20&query=").concat(n,"&client_id=").concat(b));case 4:return l=e.sent,e.next=7,l.json();case 7:r=e.sent,console.log(r.results),a.setState({imgs:r.results,nullAlert:n}),a.addForm.reset();case 11:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){fetch("https://api.unsplash.com/photos?per_page=30&client_id=".concat(b)).then(function(e){return e.json()}).then(function(t){return e.setState({randomImgs:t})})},1e3)}},{key:"render",value:function(){var e=this,t=this.state.imgs.map(function(t){return l.a.createElement("div",{key:t.id},l.a.createElement(E.c,{className:"mb-3"},l.a.createElement(E.f,{top:!0,src:t.urls.small}),l.a.createElement(E.d,null,l.a.createElement(E.i,null,null===t.description?"".concat(e.state.nullAlert):"".concat(t.description.substring(0,15),"...")),l.a.createElement(E.h,null," Photo by : ",t.user.name+" on unsplash"," "),l.a.createElement(E.m,{href:t.urls.full,target:"__blank"},l.a.createElement(f.a,{icon:"download"})," Download ..."))))}),a=this.state.randomImgs.map(function(e){return l.a.createElement("div",{key:e.id},l.a.createElement(E.c,{className:"mb-3"},l.a.createElement(E.f,{top:!0,src:e.urls.small}),l.a.createElement(E.d,null,l.a.createElement(E.i,null,null==e.description?"Photo of the Day":"".concat(e.description.substring(0,15),"...")),l.a.createElement(E.h,null," Photo by : ",e.user.name&&"".concat(e.user.name+" on unsplash")," "),l.a.createElement(E.m,{href:e.urls.full,target:"__blank"},l.a.createElement(f.a,{icon:"download"})," Download ..."))))}),n=l.a.createElement("div",{className:"bagAnimation"},l.a.createElement(E.n,null,l.a.createElement(E.j,{lg:"3",className:"mx-auto text-center"},l.a.createElement(E.c,null,l.a.createElement("h1",null," welcome "),l.a.createElement("div",{className:"loading"}," ")))));l.a.createElement(E.e,null,l.a.createElement(E.c,null,l.a.createElement(E.f,{top:!0,width:"100%",src:"https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180",alt:"Card image cap"})),l.a.createElement(E.c,{body:!0,inverse:!0,color:"primary"},l.a.createElement(E.i,null,"Special Title Treatment"),l.a.createElement(E.h,null,"With supporting text below as a natural lead-in to additional content."),l.a.createElement(E.b,{color:"secondary"},"Button")),l.a.createElement(E.c,null,l.a.createElement(E.f,{top:!0,width:"100%",src:"https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180",alt:"Card image cap"})),l.a.createElement(E.c,{body:!0,inverse:!0,color:"primary"},l.a.createElement(E.i,null,"Special Title Treatment"),l.a.createElement(E.h,null,"With supporting text below as a natural lead-in to additional content."),l.a.createElement(E.b,{color:"secondary"},"Button")),l.a.createElement(E.c,null,l.a.createElement(E.f,{top:!0,width:"100%",src:"https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180",alt:"Card image cap"}),l.a.createElement(E.d,null,l.a.createElement(E.i,null,"Card title"),l.a.createElement(E.g,null,"Card subtitle"),l.a.createElement(E.h,null,"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action."),l.a.createElement(E.b,null,"Button"))),l.a.createElement(E.c,{body:!0,inverse:!0,color:"primary"},l.a.createElement(E.i,null,"Special Title Treatment"),l.a.createElement(E.h,null,"With supporting text below as a natural lead-in to additional content."),l.a.createElement(E.b,{color:"secondary"},"Button")));return l.a.createElement("div",{id:"wrap"},0===this.state.randomImgs.length?n:l.a.createElement("div",null,l.a.createElement("section",{className:"pickphotos"},l.a.createElement(E.k,null,l.a.createElement(E.n,{className:"mb-3"},l.a.createElement(E.j,{lg:"8",className:"mx-auto"},l.a.createElement("div",{className:"headingTitle"},l.a.createElement("h1",null," ",l.a.createElement(f.a,{icon:"camera"})," PickPhotos ",l.a.createElement(E.a,{pill:!0},"from unsplash.com")," ")),l.a.createElement(E.c,null,l.a.createElement(E.d,null,l.a.createElement("form",{onSubmit:function(t){return e.getPhotos(t)},className:"form",ref:function(t){return e.addForm=t}},l.a.createElement(E.n,{form:!0},l.a.createElement(E.j,{md:"10"},l.a.createElement(E.l,null,l.a.createElement("input",{type:"teks",ref:function(t){return e.keySearch=t},className:"form-control",placeholder:"Search Free Photos..."}))),l.a.createElement(E.j,{md:"2"},l.a.createElement(E.l,null,l.a.createElement(E.b,{block:!0}," ",l.a.createElement(f.a,{icon:"search"})," "))))))))),l.a.createElement(E.n,{className:"mb-3"},l.a.createElement(E.j,{lg:"12",className:"mx-auto"},l.a.createElement(E.e,null,0===this.state.imgs.length?a:t))))),l.a.createElement("footer",{className:"footer"},l.a.createElement(E.k,{fluid:!0},l.a.createElement(E.n,null,l.a.createElement(E.j,{lg:"6",md:"6",sm:"6"},l.a.createElement(E.c,null,l.a.createElement(E.d,null,l.a.createElement("i",null," Copyright \xa9 "),l.a.createElement("a",{href:"https://portofolio-sandy.firebaseapp.com/",target:"__blank"}," sandy kurniawan ")))),l.a.createElement(E.j,{lg:"6",md:"6",sm:"6"},l.a.createElement(E.c,null,l.a.createElement(E.d,null,l.a.createElement("i",null," Powered: "),l.a.createElement("a",{href:"https://unsplash.com/",target:"__blank"}," unsplash.com ")))))))))}}]),t}(n.Component),y="a9f020ade0a6ba6d2ba84ba91345fb4e73fa64ad1c0b6221233b55c6f12c3b29",w=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={images:[],randomImages:[]},a.getPhotos=function(){var e=Object(p.a)(d.a.mark(function e(t){var n,l,r;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.keySearch.value,e.next=4,fetch("https://api.unsplash.com/search/photos?per_page=2&query=".concat(n,"&client_id=").concat(y));case 4:return l=e.sent,e.next=7,l.json();case 7:r=e.sent,console.log(r.results),setTimeout(function(){a.setState({images:r.results})},1e3);case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){fetch("https://api.unsplash.com/photos?per_page=2&client_id=".concat(y)).then(function(e){return e.json()}).then(function(t){return e.setState({randomImages:t})})},2e3)}},{key:"render",value:function(){var e=this,t=this.state.images.map(function(e){return l.a.createElement("div",{key:e.id},l.a.createElement("p",null," ",e.description," "))}),a=this.state.randomImages.map(function(e){return l.a.createElement("div",{key:e.id},l.a.createElement("p",null," ",e.id," "))});return l.a.createElement("div",null,0===this.state.randomImages.length?"loading":l.a.createElement("div",null,l.a.createElement("form",{onSubmit:function(t){return e.getPhotos(t)}},l.a.createElement("input",{type:"teks",ref:function(t){return e.keySearch=t}}),l.a.createElement("button",null," get ")),l.a.createElement("div",null,0===this.state.images.length?a:t)))}}]),t}(l.a.Component),k=a(44),j=a(46),x=a(45),O=a(15),_=a(16);O.b.add(_.d,_.b,_.c,_.a);var N=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(k.a,null,l.a.createElement(j.a,null,l.a.createElement(x.a,{path:"/",component:v,exact:!0}),l.a.createElement(x.a,{path:"/development",component:w})))}}]),t}(l.a.Component);a(36),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(40);c.a.render(l.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,2,1]]]);
//# sourceMappingURL=main.b6ae40d7.chunk.js.map