(this.webpackJsonpproject_forevents=this.webpackJsonpproject_forevents||[]).push([[0],{47:function(e,t,a){e.exports=a(73)},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),c=a.n(i),l=a(25),s=a.n(l),o=a(38),u=a(18),m=a(106),p=a(101),d=a(107),v=function(e){var t=e.onSubmit,a=Object(n.useState)(""),i=Object(u.a)(a,2),c=i[0],l=i[1];return r.a.createElement(p.a,{elevation:6,style:{padding:"25px"}},r.a.createElement(d.a,{fullWidth:!0,label:"Search...",value:c,onChange:function(e){return l(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&t(c)}}))},E=a(105),f=function(e){var t=e.video;if(!t)return r.a.createElement("div",null,"Loading...");var a="https://www.youtube.com/embed/".concat(t.id.videoId);return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{elevation:6,style:{height:"70%"}},r.a.createElement("iframe",{frameBorder:"0",height:"100%",width:"100%",title:"Video Player",src:a})),r.a.createElement(p.a,{elevation:6,style:{padding:"15px"}},r.a.createElement(E.a,{variant:"h4"},t.snippet.title," - ",t.snippet.channelTitle),r.a.createElement(E.a,{variant:"subtitle1"},t.snippet.channelTitle),r.a.createElement(E.a,{variant:"subtitle2"},t.snippet.description)))},h=function(e){var t=e.video,a=e.onVideoSelect;return r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(p.a,{style:{display:"flex",alignItems:"center",cursor:"pointer"},onClick:function(){return a(t)}},r.a.createElement("img",{style:{marginRight:"20px"},alt:"thumbnail",src:t.snippet.thumbnails.medium.url}),r.a.createElement(E.a,{variant:"subtitle1"},r.a.createElement("b",null,t.snippet.title))))},b=function(e){var t=e.videos,a=e.onVideoSelect,n=t.map((function(e){return r.a.createElement(h,{onVideoSelect:a,key:e.id.videoId,video:e})}));return r.a.createElement(m.a,{container:!0,spacing:10},n)},y=a(43),g=a.n(y).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",maxResult:5,key:"AIzaSyD9usn3SsZ6loZrlw619om0AGx0mALOGSY"}}),S=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(null),l=Object(u.a)(c,2),p=l[0],d=l[1];return r.a.createElement(m.a,{style:{justifyContent:"center"},container:!0,spacing:10},r.a.createElement(m.a,{item:!0,xs:11},r.a.createElement(m.a,{container:!0,spacing:10},r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(v,{onSubmit:function(e){return E.apply(this,arguments)}})),r.a.createElement(m.a,{item:!0,xs:8},r.a.createElement(f,{video:p})),r.a.createElement(m.a,{item:!0,xs:4},r.a.createElement(b,{videos:a,onVideoSelect:d})))));function E(){return(E=Object(o.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("search",{params:{part:"snippet",maxResults:5,key:"AIzaSyD9usn3SsZ6loZrlw619om0AGx0mALOGSY",q:t}});case 2:a=e.sent,n=a.data.items,i(n),d(n[0]);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}};c.a.render(r.a.createElement(S,null),document.querySelector("#root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.ebce9326.chunk.js.map