(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{106:function(e,t,n){},108:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(8),c=n.n(r),s=n(9),o=n(35),i=n(10),u=n(12),l=n.n(u),j=n(21),d=n(17),b=n.n(d),m="https://mern-calendar-mauricio.herokuapp.com/api",O=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(m,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})},p=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(m,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===n?fetch(a,{method:n,headers:{"x-token":r}}):fetch(a,{method:n,headers:{"Content-Type":"application/json","x-token":r},body:JSON.stringify(t)})},f="[ui] Open Modal",v="[ui] Close Modal",h="[event] Set active",x="[event] Add new",g="[event] Clear active event",y="[event] Event updated",w="[event] Event deleted",N="[event] Events loaded",E="[event] Logout event",k="[auth] Finish checking login state",S="[auth] Login",C="[auth] Logout",T=n(5),D=n(19),P=n.n(D),A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(T.a)(Object(T.a)({},e),{},{end:P()(e.end).toDate(),start:P()(e.start).toDate()})}))},I=function(e){return{type:x,payload:e}},_=function(){return{type:g}},L=function(e){return{type:y,payload:e}},R=function(){return{type:w}},G=function(e){return{type:N,payload:e}},J=function(){return function(e){localStorage.clear(),e({type:E}),e(z())}},M=function(e){return{type:S,payload:e}},V=function(){return{type:k}},z=function(){return{type:C}},F=n(14),H=n(25),U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(F.a)(t,2),r=n[0],c=n[1],s=function(){c(e)},o=function(e){var t=e.target;c(Object(T.a)(Object(T.a)({},r),{},Object(H.a)({},t.name,t.value)))};return[r,o,s]},X=(n(74),n(2)),q=function(){var e=Object(s.b)(),t=U({loginEmail:"mauricio@gmail.com",loginPassword:"123456"}),n=Object(F.a)(t,2),a=n[0],r=n[1],c=U({registerName:"Tiziano",registerEmail:"tiziano@gmail.com",registerPassword:"123456",registerPasswordRepeat:"123456"}),o=Object(F.a)(c,2),i=o[0],u=o[1],d=a.loginEmail,m=a.loginPassword,p=i.registerName,f=i.registerEmail,v=i.registerPassword,h=i.registerPasswordRepeat;return Object(X.jsx)("div",{className:"container login-container",children:Object(X.jsxs)("div",{className:"row",children:[Object(X.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(X.jsx)("h3",{children:"Log in"}),Object(X.jsxs)("form",{onSubmit:function(t){var n,a;t.preventDefault(),e((n=d,a=m,function(){var e=Object(j.a)(l.a.mark((function e(t){var r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O("auth",{email:n,password:a},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(c=e.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(M({uid:c.uid,name:c.name}))):b.a.fire("Error",c.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(X.jsx)("div",{className:"form-group",children:Object(X.jsx)("input",{type:"text",className:"form-control",placeholder:"Email",name:"loginEmail",value:d,onChange:r})}),Object(X.jsx)("div",{className:"form-group",children:Object(X.jsx)("input",{type:"password",className:"form-control",placeholder:"password",name:"loginPassword",value:m,onChange:r})}),Object(X.jsx)("div",{className:"form-group",children:Object(X.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(X.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(X.jsx)("h3",{children:"Sign in"}),Object(X.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),v!==h)return b.a.fire("Error","Password mismatch","error");var n,a,r;e((n=f,a=v,r=p,function(){var e=Object(j.a)(l.a.mark((function e(t){var c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O("auth/new",{name:r,email:n,password:a},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(s=e.sent).ok?(localStorage.setItem("token",s.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(M({uid:s.uid,name:s.name}))):b.a.fire("Error",s.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(X.jsx)("div",{className:"form-group",children:Object(X.jsx)("input",{type:"text",className:"form-control",placeholder:"Name",name:"registerName",value:p,onChange:u})}),Object(X.jsx)("div",{className:"form-group",children:Object(X.jsx)("input",{type:"email",className:"form-control",placeholder:"Email",name:"registerEmail",value:f,onChange:u})}),Object(X.jsx)("div",{className:"form-group",children:Object(X.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",name:"registerPassword",value:v,onChange:u})}),Object(X.jsx)("div",{className:"form-group",children:Object(X.jsx)("input",{type:"password",className:"form-control",placeholder:"Password again",name:"registerPasswordRepeat",value:h,onChange:u})}),Object(X.jsx)("div",{className:"form-group",children:Object(X.jsx)("input",{type:"submit",className:"btnSubmit",value:"Create account"})})]})]})]})})},B=function(){var e=Object(s.c)((function(e){return e.auth})).name,t=Object(s.b)();return Object(X.jsxs)("div",{className:"navbar  navbar-dark bg-dark mb-4",children:[Object(X.jsx)("span",{className:"navbar-brand",children:e}),Object(X.jsxs)("button",{onClick:function(){t(J())},className:"btn btn-outline-danger",children:[Object(X.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(X.jsx)("span",{children:" Salir"})]})]})},W=n(53),K=(n(76),function(e){var t=e.event,n=t.title,a=t.user;return Object(X.jsxs)("div",{children:[Object(X.jsx)("strong",{children:n}),Object(X.jsxs)("span",{children:[" - ",a.name]})]})}),Q=n(48),Y=n.n(Q),Z=n(49),$=n.n(Z),ee=function(){return{type:f}},te={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};Y.a.setAppElement("#root");var ne=P()().minutes(0).seconds(0).add(1,"hours"),ae=ne.clone().add(1,"hours"),re={tittle:"",notes:"",start:ne.toDate(),end:ae.toDate()},ce=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.ui})).modalOpen,n=Object(s.c)((function(e){return e.calendar})).activeEvent,r=Object(a.useState)(ne.toDate()),c=Object(F.a)(r,2),o=c[0],i=c[1],u=Object(a.useState)(ae.toDate()),d=Object(F.a)(u,2),m=d[0],O=d[1],f=Object(a.useState)(!0),h=Object(F.a)(f,2),x=h[0],g=h[1],y=Object(a.useState)(re),w=Object(F.a)(y,2),N=w[0],E=w[1],k=N.notes,S=N.title,C=N.start,D=N.end;Object(a.useEffect)((function(){E(n||re)}),[n,E]);var A=function(e){var t=e.target;E(Object(T.a)(Object(T.a)({},N),{},Object(H.a)({},t.name,t.value)))},R=function(){e({type:v}),e(_()),E(re)};return Object(X.jsxs)(Y.a,{isOpen:t,onRequestClose:R,style:te,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-background",children:[Object(X.jsx)("h1",{children:n?"Edit Event":"New Event"}),Object(X.jsx)("hr",{}),Object(X.jsxs)("form",{className:"container",onSubmit:function(t){t.preventDefault();var a,r=P()(C),c=P()(D);if(r.isSameOrAfter(c))return b.a.fire("Error","End date must be after Start date","error");S.trim().length<2&&g(!1),e(n?(a=N,function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p("events/".concat(a.id),a,"PUT");case 3:return n=e.sent,e.next=6,n.json();case 6:(r=e.sent).ok?t(L(a)):b.a.fire("Error",r.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(j.a)(l.a.mark((function t(n,a){var r,c,s,o,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth,c=r.uid,s=r.name,t.prev=1,t.next=4,p("events",e,"POST");case 4:o=t.sent,(i=o.json()).ok&&(e.id=i.event.id,e.user={_id:c,name:s},n(I(e))),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,n){return t.apply(this,arguments)}}()}(N)),g(!0),R()},children:[Object(X.jsxs)("div",{className:"form-group",children:[Object(X.jsx)("label",{children:"Start date"}),Object(X.jsx)($.a,{onChange:function(e){i(e),E(Object(T.a)(Object(T.a)({},N),{},{start:e}))},value:o||null,className:"form-control"})]}),Object(X.jsxs)("div",{className:"form-group",children:[Object(X.jsx)("label",{children:"End date"}),Object(X.jsx)($.a,{onChange:function(e){O(e),E(Object(T.a)(Object(T.a)({},N),{},{end:e}))},minDate:o,value:m||null,className:"form-control"})]}),Object(X.jsx)("hr",{}),Object(X.jsxs)("div",{className:"form-group",children:[Object(X.jsx)("label",{children:"Title and Notes"}),Object(X.jsx)("input",{type:"text",className:"form-control ".concat(!x&&"is-invalid"),placeholder:"Event title",name:"title",autoComplete:"off",value:S,onChange:A}),Object(X.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"A short description"})]}),Object(X.jsxs)("div",{className:"form-group",children:[Object(X.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notes",rows:"5",name:"notes",value:k,onChange:A}),Object(X.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Other information"})]}),Object(X.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(X.jsx)("i",{className:"far fa-save"}),Object(X.jsx)("span",{children:" Save"})]})]})]})},se=function(){var e=Object(s.b)();return Object(X.jsx)("button",{className:"btn btn-primary fab",onClick:function(){e(ee())},children:Object(X.jsx)("i",{className:"fas fa-plus"})})},oe=function(){var e=Object(s.b)();return Object(X.jsxs)("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(j.a)(l.a.mark((function e(t,n){var a,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().calendar.activeEvent.id,e.prev=1,e.next=4,p("events/".concat(a),{},"DELETE");case 4:return r=e.sent,e.next=7,r.json();case 7:(c=e.sent).ok?t(R()):b.a.fire("Error",c.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(X.jsx)("i",{className:"fas fa-trash"}),Object(X.jsx)("span",{children:" Delete Event"})]})},ie=Object(W.b)(P.a),ue=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.calendar})),n=t.events,r=t.activeEvent,c=Object(s.c)((function(e){return e.auth})).uid,o=Object(a.useState)(localStorage.getItem("lastView")||"month"),i=Object(F.a)(o,2),u=i[0],d=i[1];Object(a.useEffect)((function(){e(function(){var e=Object(j.a)(l.a.mark((function e(t){var n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p("events");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,r=A(a.events),t(G(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);return Object(X.jsxs)("div",{className:"calendar-screen",children:[Object(X.jsx)(B,{}),Object(X.jsx)(W.a,{localizer:ie,events:n,startAccessor:"start",endAccessor:"end",eventPropGetter:function(e,t,n,a){return{style:{backgroundColor:c===e.user._id?"#367CF7":"#465660",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},onDoubleClickEvent:function(t){e(ee())},onSelectEvent:function(t){e({type:h,payload:t})},onView:function(e){d(e),localStorage.setItem("lastView",e)},onSelectSlot:function(t){e(_())},selectable:!0,view:u,components:{event:K}}),Object(X.jsx)(se,{}),r&&Object(X.jsx)(oe,{}),Object(X.jsx)(ce,{})]})},le=n(38),je=function(e){var t=e.isAuthenticated,n=e.component,a=Object(le.a)(e,["isAuthenticated","component"]);return Object(X.jsx)(i.b,Object(T.a)(Object(T.a)({},a),{},{component:function(e){return t?Object(X.jsx)(n,Object(T.a)({},e)):Object(X.jsx)(i.a,{to:"/login"})}}))},de=function(e){var t=e.isAuthenticated,n=e.component,a=Object(le.a)(e,["isAuthenticated","component"]);return Object(X.jsx)(i.b,Object(T.a)(Object(T.a)({},a),{},{component:function(e){return t?Object(X.jsx)(i.a,{to:"/"}):Object(X.jsx)(n,Object(T.a)({},e))}}))},be=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.auth})),n=t.checking,r=t.uid;return Object(a.useEffect)((function(){e(function(){var e=Object(j.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("auth/renew");case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).ok?(localStorage.setItem("token",a.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(M({uid:a.uid,name:a.name}))):t(V());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),n?Object(X.jsx)("h5",{children:"Wait..."}):Object(X.jsx)(o.a,{children:Object(X.jsx)("div",{children:Object(X.jsxs)(i.d,{children:[Object(X.jsx)(de,{exact:!0,path:"/login",component:q,isAuthenticated:!!r}),Object(X.jsx)(je,{exact:!0,path:"/",component:ue,isAuthenticated:!!r}),Object(X.jsx)(i.a,{to:"/"})]})})})},me=n(22),Oe=n(64),pe={checking:!0},fe=n(54),ve={events:[],activeEvent:null},he={modalOpen:!1},xe=Object(me.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(T.a)(Object(T.a)({},e),{},{modalOpen:!0});case v:return Object(T.a)(Object(T.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(T.a)(Object(T.a)({},e),{},{activeEvent:t.payload});case x:return Object(T.a)(Object(T.a)({},e),{},{events:[].concat(Object(fe.a)(e.events),[t.payload])});case g:return Object(T.a)(Object(T.a)({},e),{},{activeEvent:null});case y:return Object(T.a)(Object(T.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case w:return Object(T.a)(Object(T.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case N:return Object(T.a)(Object(T.a)({},e),{},{events:Object(fe.a)(t.payload)});case E:return Object(T.a)({},ve);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(T.a)(Object(T.a)({},e),{},{checking:!1},t.payload);case k:return Object(T.a)(Object(T.a)({},e),{},{checking:!1});case C:return{checking:!1};default:return e}}}),ge="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||me.d,ye=Object(me.e)(xe,ge(Object(me.a)(Oe.a))),we=function(){return Object(X.jsx)(s.a,{store:ye,children:Object(X.jsx)(be,{})})};n(106);c.a.render(Object(X.jsx)(we,{}),document.getElementById("root"))},74:function(e,t,n){}},[[108,1,2]]]);
//# sourceMappingURL=main.083627e8.chunk.js.map