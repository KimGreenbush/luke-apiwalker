(this["webpackJsonpluke-apiwalker"]=this["webpackJsonpluke-apiwalker"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),s=n(16),r=n.n(s),a=(n(23),n(4)),l=(n(24),n(17)),j=n.n(l),o=n(1),h=function(e){var t=e.thing,n=e.id,c={listStyle:"none",fontSize:"large"},s=Object(i.useState)({}),r=Object(a.a)(s,2),l=r[0],h=r[1],d=Object(i.useState)({}),u=Object(a.a)(d,2),b=u[0],O=u[1];return Object(i.useEffect)((function(){j.a.get("https://swapi.dev/api/".concat(t,"/").concat(n)).then((function(e){return h(e.data)})).catch((function(e){return O({message:"These are not the droids you're looking for.",img:""})}))}),[t,n]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:l.name}),"people"===t?Object(o.jsxs)("ul",{style:c,children:[Object(o.jsxs)("li",{children:["Hair Color:: ",l.hair_color]}),Object(o.jsxs)("li",{children:["Eye Color:: ",l.eye_color]}),Object(o.jsxs)("li",{children:["Skin Color:: ",l.skin_color]}),Object(o.jsxs)("li",{children:["Height:: ",l.height,"cm"]})]}):b.message,"planets"===t?Object(o.jsxs)("ul",{style:c,children:[Object(o.jsxs)("li",{children:["Terrain:: ",l.terrain]}),Object(o.jsxs)("li",{children:["Climate:: ",l.climate]}),Object(o.jsxs)("li",{children:["Diameter:: ",l.diameter,"km"]}),Object(o.jsxs)("li",{children:["Gravity:: ",l.gravity]})]}):b.message,"starships"===t?Object(o.jsxs)("ul",{style:c,children:[Object(o.jsxs)("li",{children:["Manufacturer:: ",l.manufacturer]}),Object(o.jsxs)("li",{children:["Model:: ",l.model]}),Object(o.jsxs)("li",{children:["Hyperdrive Rating:: ",l.hyperdrive_rating]}),Object(o.jsxs)("li",{children:["Passenger Capacity:: ",l.passengers]})]}):b.message]})},d=function(e){var t=e.id,n=e.setId,i=e.thing,c=e.setThing,s=e.updateSearch;return Object(o.jsxs)("form",{onSubmit:s,children:[Object(o.jsx)("label",{htmlFor:"thing",children:"Search for: "}),Object(o.jsxs)("select",{name:"thing",id:"thing",value:i,onChange:function(e){return c(e.target.value)},children:[Object(o.jsx)("option",{value:"",disabled:!0,children:"Please select an option"}),Object(o.jsx)("option",{value:"people",children:"People"}),Object(o.jsx)("option",{value:"planets",children:"Planets"}),Object(o.jsx)("option",{value:"starships",children:"Starships"})]})," | ",Object(o.jsx)("label",{htmlFor:"id",children:"ID: "}),Object(o.jsx)("input",{style:{width:"50px"},type:"text",name:"id",id:"id",value:t,onChange:function(e){return n(e.target.value)}}),Object(o.jsx)("button",{children:"Search"})]})},u=n(6);var b=function(){var e=Object(i.useState)(""),t=Object(a.a)(e,2),n=t[0],c=t[1],s=Object(i.useState)(""),r=Object(a.a)(s,2),l=r[0],j=r[1];return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(d,{id:n,setId:c,thing:l,setThing:j,updateSearch:function(e){e.preventDefault(),Object(u.b)("/".concat(l,"/").concat(n)),c("")}}),Object(o.jsx)(u.a,{children:Object(o.jsx)(h,{path:"/:thing/:id"})})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),i(e),c(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root")),O()}},[[50,1,2]]]);
//# sourceMappingURL=main.a1a0ca0a.chunk.js.map