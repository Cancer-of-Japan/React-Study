(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),o=n(7),a=n.n(o),s=(n(14),n(9)),i=n(5),l=n(2),d=(n.p,n(15),n(0)),u=function(e){var t=e.color,n=e.text,c=e.onClick;return Object(d.jsx)("button",{onClick:c,style:{backgroundColor:t},className:"btn",children:n})};u.defaultProps={color:"steelblue"};var j=u,b=function(e){var t=e.title,n=e.onAdd,c=e.showAdd;return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("h1",{style:h,children:t}),Object(d.jsx)(j,{color:c?"red":"green",text:c?"Close":"Add",onClick:n})]})};b.defaultProps={title:"Task tracker"};var h={color:"red",backgroundColor:"black"},O=b,m=n(8),x=function(e){var t=e.task,n=e.onDelete,c=e.onToggle;return Object(d.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return c(t.id)},children:[Object(d.jsxs)("h3",{children:[t.text,Object(d.jsx)(m.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(d.jsx)("p",{children:t.day})]})},f=function(e){var t=e.tasks,n=e.onDelete,c=e.onToggle;return Object(d.jsx)(d.Fragment,{children:t.map((function(e){return Object(d.jsx)(x,{task:e,onDelete:n,onToggle:c},e.id)}))})},p=function(e){var t=e.onAdd,n=Object(c.useState)(""),r=Object(l.a)(n,2),o=r[0],a=r[1],s=Object(c.useState)(""),i=Object(l.a)(s,2),u=i[0],j=i[1],b=Object(c.useState)(!1),h=Object(l.a)(b,2),O=h[0],m=h[1];return Object(d.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),o?(t({text:o,day:u,reminder:O}),a(""),j(""),m(!1)):alert("Please add a task!")},children:[Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{children:"Task"}),Object(d.jsx)("input",{type:"text",placeholder:"Add Task",value:o,onChange:function(e){return a(e.target.value)}})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{children:"Day & Time"}),Object(d.jsx)("input",{type:"text",placeholder:"Add Day & Time",value:u,onChange:function(e){return j(e.target.value)}})]}),Object(d.jsxs)("div",{className:"form-control form-control-check",children:[Object(d.jsx)("label",{children:"Set Reminder"}),Object(d.jsx)("input",{type:"checkbox",checked:O,value:O,onChange:function(e){return m(e.currentTarget.checked)}})]}),Object(d.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-block"})]})},g=function(){var e=Object(c.useState)(!0),t=Object(l.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)([{id:1,text:"Doctors appointment",day:"Feb 5th at 2:30pm",reminder:!0},{id:2,text:"Meeting ar school",day:"Feb 6th at 1:30pm",reminder:!0},{id:3,text:"Food shopping",day:"Feb 5th at 2:30pm",reminder:!1}]),a=Object(l.a)(o,2),u=a[0],j=a[1];return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(O,{onAdd:function(){return r(!n)},showAdd:n}),n&&Object(d.jsx)(p,{onAdd:function(e){var t=Math.floor(1e4*Math.random())+1,n=Object(i.a)({id:t},e);j([].concat(Object(s.a)(u),[n]))}}),u.length>0?Object(d.jsx)(f,{tasks:u,onDelete:function(e){j(u.filter((function(t){return t.id!==e})))},onToggle:function(e){j(u.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{reminder:!t.reminder}):t})))}}):"No Tasks to Show"]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),o(e),a(e)}))};a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),k()}},[[17,1,2]]]);
//# sourceMappingURL=main.a0583422.chunk.js.map