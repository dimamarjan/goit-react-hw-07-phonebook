(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{56:function(t,e,n){},59:function(t,e,n){"use strict";n.r(e);var a,c,r,i,s,u,o,l,b,j,d=n(0),f=n.n(d),O=n(14),p=n.n(O),m=n(6),x=n(8),h=n(7),g=n(13),v=n(10),w=n.n(v),C=n(16),y=n(17),k=n.n(y),S=Object(x.b)("contacts/getContactList",Object(C.a)(w.a.mark((function t(){var e;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.get("http://localhost:3001/contacts");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))),R=Object(x.b)("contacts/addContact",function(){var t=Object(C.a)(w.a.mark((function t(e){var n;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.post("http://localhost:3001/contacts",e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),E=Object(x.b)("contacts/delContact",function(){var t=Object(C.a)(w.a.mark((function t(e){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.delete("http://localhost:3001/contacts/".concat(e));case 2:return t.abrupt("return",e);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),z=Object(x.c)({name:"contacts",initialState:{items:[],status:null,err:null},extraReducers:(a={},Object(h.a)(a,S.fulfilled,(function(t,e){t.items=e.payload,t.status=null,t.err=null})),Object(h.a)(a,S.pending,(function(t,e){t.status="pending"})),Object(h.a)(a,S.rejected,(function(t,e){t.status=null,t.err="ERROR"})),Object(h.a)(a,R.fulfilled,(function(t,e){t.items=[].concat(Object(g.a)(t.items),[e.payload]),t.status=null,t.err=null})),Object(h.a)(a,R.pending,(function(t,e){t.status="pending"})),Object(h.a)(a,R.rejected,(function(t,e){t.status=null,t.err="ERROR"})),Object(h.a)(a,E.fulfilled,(function(t,e){t.items=t.items.filter((function(t){return t.id!==e.payload})),t.status=null,t.err=null})),Object(h.a)(a,E.pending,(function(t,e){t.status="pending"})),Object(h.a)(a,E.rejected,(function(t,e){t.status=null,t.err="ERROR"})),a)}).reducer,A=Object(x.c)({name:"filter",initialState:"",reducers:{filterUpdate:function(t,e){return e.payload}}}),D=A.actions.filterUpdate,L={contacts:z,filter:A.reducer},F=Object(x.a)({reducer:L,devTools:!1}),B=(n(56),n(9)),I=n(2),J=n(3),P=J.a.form(c||(c=Object(I.a)(["\ndisplay: block;\nwidth: 320px;\nborder: 2px solid black;\npadding: 10px;\n\nmargin-left: 5px;\n"]))),T=J.a.label(r||(r=Object(I.a)(["\ndisplay: flex;\nflex-direction: column;\nfont-size: 20px;\n"]))),Z=J.a.span(i||(i=Object(I.a)(["\nmargin-bottom: 5px;\n"]))),q=J.a.input(s||(s=Object(I.a)(["\nwidth: 150px;\nmargin-bottom: 20px;\n"]))),M=J.a.button(u||(u=Object(I.a)([""]))),N=n(1);function U(){var t=Object(m.b)(),e=Object(m.c)((function(t){return t.contacts.items})),n=Object(d.useState)(),a=Object(B.a)(n,2),c=a[0],r=a[1],i=function(t,e,n){var a=n.target,c={name:t.toLowerCase(),number:e};return a.elements.name.value="",a.elements.number.value="",c};return Object(d.useEffect)((function(){c&&t(R(c))}),[t,c]),Object(N.jsx)("div",{children:Object(N.jsxs)(P,{onSubmit:function(t){t.preventDefault();var n=t.target.elements.name.value,a=t.target.elements.number.value;if(0!==e.length){var c=e.map((function(t){return t.name})),s=e.map((function(t){return t.number}));if(c.includes(n.toLowerCase())||s.includes(a))return t.target.elements.name.value="",void(t.target.elements.number.value="");var u=i(n,a,t);r(u)}else{var o=i(n,a,t);r(o)}},children:[Object(N.jsxs)(T,{children:[Object(N.jsx)(Z,{children:"Name"}),Object(N.jsx)(q,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(N.jsxs)(T,{children:[Object(N.jsx)(Z,{children:"Number"}),Object(N.jsx)(q,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(N.jsx)(M,{children:"Add contact"})]})})}var $,G,H,K,Q=J.a.label(o||(o=Object(I.a)(["\ndisplay: flex;\nflex-direction: column;\nfont-size: 20px;\nmargin-left: 15px;\n"]))),V=J.a.span(l||(l=Object(I.a)(["\nmargin-bottom: 10px;\n"]))),W=J.a.span(b||(b=Object(I.a)(["\ntext-decoration: underline;\nfont-weight: 600;\n"]))),X=J.a.input(j||(j=Object(I.a)(["\nwidth: 150px;\n"])));function Y(){var t=Object(m.b)();return Object(N.jsx)("div",{children:Object(N.jsxs)(Q,{children:[Object(N.jsxs)(V,{children:["Find contacts by ",Object(N.jsx)(W,{children:"name"})," or ",Object(N.jsx)(W,{children:"number"})]}),Object(N.jsx)(X,{name:"filter",onChange:function(e){var n=e.target;t(D(n.value))}})]})})}var _,tt,et,nt=J.a.ul($||($=Object(I.a)(["\nmargin-left: 15px;\n"]))),at=(J.a.li(G||(G=Object(I.a)(["\ntext-transform: capitalize;\n:not(:last-child){\n    margin-bottom: 15px;\n}\n"]))),J.a.span(H||(H=Object(I.a)([""]))),J.a.button(K||(K=Object(I.a)(["\nmargin-left: 10px;\n"]))),J.a.li(_||(_=Object(I.a)(["\ntext-transform: capitalize;\n:not(:last-child){\n    margin-bottom: 15px;\n}\n"])))),ct=J.a.span(tt||(tt=Object(I.a)([""]))),rt=J.a.button(et||(et=Object(I.a)(["\nmargin-left: 10px;\n"])));function it(t){var e=t.data,n=t.onDelete,a=e.id,c=e.name,r=e.number;return Object(N.jsxs)(at,{children:[Object(N.jsxs)(ct,{children:[c,": ",r]}),Object(N.jsx)(rt,{id:a,onClick:n,children:"Delete"})]})}function st(){var t=Object(m.c)((function(t){return t.contacts.items})),e=Object(m.c)((function(t){return t.filter})),n=Object(m.b)(),a=Object(d.useState)([]),c=Object(B.a)(a,2),r=c[0],i=c[1],s=Object(d.useState)(),u=Object(B.a)(s,2),o=u[0],l=u[1],b=Object(d.useState)(!1),j=Object(B.a)(b,2),f=j[0],O=j[1],p=Object(d.useState)(!1),x=Object(B.a)(p,2),h=x[0],v=x[1],w=function(t){var e=t.target;n(E(e.id)),l(e.id)};return Object(d.useEffect)((function(){n(S())}),[n]),Object(d.useEffect)((function(){e?(toString(e)&&i(Object(g.a)(t.filter((function(t){return t.name.indexOf(e.toLowerCase())>-1})))),parseInt(e)&&i(Object(g.a)(t.filter((function(t){return t.number.indexOf(e)>-1}))))):i([])}),[e,t]),Object(d.useEffect)((function(){o&&(n(S()),l(""))}),[o,n]),Object(d.useEffect)((function(){0!==r.length?(v(!1),O(!0)):(O(!1),v(!0))}),[r.length]),Object(N.jsx)("div",{children:Object(N.jsxs)(nt,{children:[h&&t.map((function(t){return Object(N.jsx)(it,{data:t,onDelete:w},t.id)})),f&&r.map((function(t){return Object(N.jsx)(it,{data:t,onDelete:w},t.id)}))]})})}var ut=function(){return Object(N.jsxs)("div",{children:[Object(N.jsx)("h1",{children:"Phonebook"}),Object(N.jsx)(U,{}),Object(N.jsx)("h2",{children:"Contacts"}),Object(N.jsx)(Y,{}),Object(N.jsx)(st,{})]})},ot=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,60)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))};p.a.render(Object(N.jsx)(f.a.StrictMode,{children:Object(N.jsx)(m.a,{store:F,children:Object(N.jsx)(ut,{})})}),document.getElementById("root")),ot()}},[[59,1,2]]]);
//# sourceMappingURL=main.df84e022.chunk.js.map