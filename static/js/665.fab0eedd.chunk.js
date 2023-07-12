"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[665],{6665:function(n,e,t){t.r(e),t.d(e,{default:function(){return R}});var r,o,a,i,s=t(7762),l=t(9439),d=t(5334),c=t(8174),p=t(168),x=t(5867),u=x.ZP.div(r||(r=(0,p.Z)(["\n  position: relative;\n  max-width: 100%;\n  height: 50px;\n  margin-bottom: 50px;\n  &:last-child {\n  margin-bottom: 0;\n"]))),f=x.ZP.input(o||(o=(0,p.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  border: 2px solid #000;\n  outline: none;\n  background: none;\n  padding: 10px;\n  border-radius: 10px;\n  font-size: 1.2em;\n  box-sizing: border-box;\n  &:focus ~ span {\n    transform: translateX(-13px) translateY(-35px);\n    font-size: 1em;\n  }\n  &:not(:placeholder-shown) ~ span {\n    color: #e60576;\n    transform: translateX(-13px) translateY(-35px);\n    font-size: 1em;\n  }\n  &:valid ~ span {\n    color: #e60576;\n    transform: translateX(-13px) translateY(-35px);\n    font-size: 1em;\n  }\n"]))),m=x.ZP.span(a||(a=(0,p.Z)(["\n  position: absolute;\n  top: 14px;\n  left: 20px;\n  font-size: 1em;\n  transition: 0.6s;\n  font-family: sans-serif;\n"]))),h=x.ZP.button(i||(i=(0,p.Z)(["\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  left: 0;\n  border: 2px solid #000;\n  outline: none;\n  background: none;\n  padding: 10px;\n  border-radius: 10px;\n  font-size: 1.2em;\n  width: 40%;\n  background: #2a3166;\n  color: #fff;\n  border: #fff;\n  &:hover {\n    background: #e60576;\n    box-shadow: 0px 0px 48px 0px rgba(0, 0, 0, 0.31) inset;\n  }\n"]))),b=t(184);var g,j,Z,v=function(n){var e=n.contacts,t=(0,d.Tn)(),r=(0,l.Z)(t,1)[0];return(0,b.jsxs)("form",{onSubmit:function(n){var t=n.target,o=t.name.value,a=t.number.value;n.preventDefault();var i,l=(0,s.Z)(e);try{for(l.s();!(i=l.n()).done;){var d=i.value;if(d.name===o)return c.Am.warn("".concat(o," is already in your contacts with the phone number ").concat(d.number));if(d.number===a)return c.Am.warn("".concat(a," is already in your contacts with the name ").concat(d.name))}}catch(p){l.e(p)}finally{l.f()}r({name:o,number:a}),t.reset()},children:[(0,b.jsx)(u,{children:(0,b.jsxs)("label",{children:[(0,b.jsx)(f,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:" "}),(0,b.jsx)(m,{children:"Name"})]})}),(0,b.jsx)(u,{children:(0,b.jsxs)("label",{children:[(0,b.jsx)(f,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:" "}),(0,b.jsx)(m,{children:"Number"})]})}),(0,b.jsx)(u,{children:(0,b.jsx)(h,{type:"submit",children:"Add contact"})})]})},w=t(5048),y=t(7373),z=x.ZP.div(g||(g=(0,p.Z)(["\n  position: relative;\n  max-width: 100%;\n  height: 50px;\n  margin-bottom: 50px;\n"]))),k=x.ZP.input(j||(j=(0,p.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  border: 2px solid #000;\n  outline: none;\n  background: none;\n  padding: 10px;\n  border-radius: 10px;\n  font-size: 1.2em;\n  box-sizing: border-box;\n  &:focus ~ span {\n    color: #e60576;\n    transform: translateX(-13px) translateY(-35px);\n    font-size: 1em;\n  }\n  &:not(:placeholder-shown) ~ span {\n    color: #e60576;\n    transform: translateX(-13px) translateY(-35px);\n    font-size: 1em;\n  }\n"]))),P=x.ZP.span(Z||(Z=(0,p.Z)(["\n  position: absolute;\n  top: 14px;\n  left: 20px;\n  font-size: 1em;\n  transition: 0.6s;\n  font-family: sans-serif;\n"])));var C,A,Y,X=function(){var n=(0,w.v9)((function(n){return n.filter})),e=(0,w.I0)();return(0,b.jsx)(z,{children:(0,b.jsxs)("label",{children:[(0,b.jsx)(k,{onChange:function(n){e((0,y.xO)(n.target.value))},type:"text",value:n,name:"filter",placeholder:" "}),(0,b.jsx)(P,{children:"Find contacts by name"})]})})},_=t(2791),F=t(8185),N=x.ZP.li(C||(C=(0,p.Z)(["\n  display: flex;\n  &::before {\n    content: '\u2666';\n    color: #e60576;\n    font-weight: bold;\n    display: inline-block;\n    width: 1em;\n  }\n"]))),L=x.ZP.button(A||(A=(0,p.Z)(["\n  cursor: pointer;\n  border: 2px solid #fff;\n  outline: none;\n  padding: 8px;\n  border-radius: 10px;\n  font-size: 1em;\n  width: 30%;\n  background: #2a3166;\n  color: #fff;\n  display: flex;\n  justify-content: space-evenly;\n  &:hover {\n    background: #e60576;\n    box-shadow: 0px 0px 48px 0px rgba(0, 0, 0, 0.31) inset;\n  }\n"]))),S=x.ZP.div(Y||(Y=(0,p.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n"])));var q,D=function(n){var e=n.contacts,t=(0,w.v9)((function(n){return n.filter})).toLowerCase().trim(),r=(0,_.useMemo)((function(){return e.filter((function(n){return n.name.toLowerCase().includes(t)})).sort((function(n,e){return n.name.localeCompare(e.name)}))}),[t,e]),o=(0,d.Nt)(),a=(0,l.Z)(o,1)[0];return(0,b.jsx)("ul",{children:r.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,b.jsxs)(S,{children:[(0,b.jsx)(N,{children:(0,b.jsxs)("a",{href:"tel:".concat(r),children:[t," ",(0,b.jsx)("br",{}),r]})},e),(0,b.jsxs)(L,{onClick:function(){return a(e)},children:["Delete ",(0,b.jsx)(F._y7,{})]},"btn"+e)]},"el"+e)}))})},M=x.ZP.p(q||(q=(0,p.Z)(["\n  text-align: center;\n  font-size: 1em;\n  font-family: sans-serif;\n"])));var T,B,E,I,J=function(){return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(M,{children:"There is no contacts to show \ud83d\ude14"})})},O=function(n){return 0===n.length},$=t(8983),G=x.ZP.div(T||(T=(0,p.Z)(["\n  max-width: 400px;\n  margin: 0 auto 25px auto;\n  position: relative;\n  padding: 50px 25px;\n  background: #fff;\n  border-radius: 10px;\n  box-shadow: 0px 12px 22px 3px rgba(0, 0, 0, 0.36);\n"]))),H=x.ZP.h1(B||(B=(0,p.Z)(["\n  font-size: 2em;\n\n  padding: 10px;\n  color: #000;\n  letter-spacing: 5px;\n  margin-bottom: 40px;\n  font-weight: bold;\n  padding-left: 10px;\n"]))),K=x.ZP.h2(E||(E=(0,p.Z)(["\n  font-size: 1.5em;\n\n  padding: 10px;\n  color: #000;\n  letter-spacing: 5px;\n  margin-top: 60px;\n  margin-bottom: 40px;\n  font-weight: bold;\n  padding-left: 10px;\n"]))),Q=x.ZP.div(I||(I=(0,p.Z)(["\n  margin: 10px 0 0 100px;\n"]))),R=function(){var n,e=(0,d.wY)(),t=e.data,r=e.isLoading,o=e.isSuccess,a=e.isError,i=e.error;return r?n=(0,b.jsx)(Q,{children:(0,b.jsx)($.Z,{})}):o&&!O(t)?n=(0,b.jsx)(D,{contacts:t}):o&&O(t)?n=(0,b.jsx)(J,{}):a&&(n=(0,b.jsx)("div",{children:i.toString()})),(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(G,{children:[(0,b.jsx)(H,{children:"Phonebook"}),(0,b.jsx)(v,{contacts:t}),(0,b.jsx)(K,{children:"Contacts"}),(0,b.jsx)(X,{}),n]})})}}}]);
//# sourceMappingURL=665.fab0eedd.chunk.js.map