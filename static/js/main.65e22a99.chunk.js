(this.webpackJsonpmenu_form=this.webpackJsonpmenu_form||[]).push([[0],{154:function(e,t,n){},193:function(e,t,n){},194:function(e,t,n){"use strict";n.r(t);n(0);var s=n(38),i=n.n(s),c=n(15),a=n(6),r=n(56),o=n.n(r),l=n(81),m=n(195),d=n(198),b=n(196),u=n(11),j=(n(29),n(2)),p=function(e){var t=e.input,n=e.label,s=e.type,i=e.min,c=e.max,a=e.step,r=e.meta,o=r.touched,l=r.error;return Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{className:"field_label",children:n}),Object(j.jsxs)("div",{children:[Object(j.jsx)("input",Object(u.a)(Object(u.a)({},t),{},{placeholder:n,type:s,min:i,max:c,step:a,className:"field_input"})),o&&l&&Object(j.jsx)("span",{className:"err_message",children:l})]})]})},h=function(){return Object(j.jsx)(b.a,{name:"name",type:"text",component:p,label:"Dish Name"})},f=function(e){var t=e.input,n=e.type,s=e.placeholder,i=e.min,c=e.max,a=e.step,r=e.meta,o=r.touched,l=r.error;return Object(j.jsxs)("div",{children:[Object(j.jsx)("input",Object(u.a)(Object(u.a)({},t),{},{placeholder:s,type:n,min:i,max:c,step:a,className:"field_input field_input_time"})),Object(j.jsx)("div",{className:"err_item",children:o&&l&&Object(j.jsx)("span",{className:"err_message",children:l})})]})},_=function(){return Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{className:"field_label",children:"Preparation Time"}),Object(j.jsxs)("div",{className:"field_time",children:[Object(j.jsx)(b.a,{name:"hours",type:"number",placeholder:"HH",component:f,min:"00",max:"24",step:"1"}),Object(j.jsx)(b.a,{name:"minutes",type:"number",placeholder:"MM",component:f,min:"00",max:"60",step:"1"}),Object(j.jsx)(b.a,{name:"seconds",type:"number",placeholder:"SS",component:f,min:"00",max:"60",step:"1"})]})]})},O=function(e){var t=e.input,n=e.label,s=e.placeholder,i=e.meta,c=i.touched,a=i.error,r=e.children;return Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{className:"field_label",children:n}),Object(j.jsx)("div",{children:Object(j.jsxs)("div",{children:[Object(j.jsx)("select",Object(u.a)(Object(u.a)({className:"field_input"},t),{},{placeholder:s,children:r})),c&&a&&Object(j.jsx)("span",{className:"err_message",children:a})]})})]})},x=function(){return Object(j.jsxs)(b.a,{name:"type",label:"Dish Type",component:O,placeholder:"Dish Type",children:[Object(j.jsx)("option",{}),Object(j.jsx)("option",{value:"pizza",children:"Pizza"}),Object(j.jsx)("option",{value:"soup",children:"Soup"}),Object(j.jsx)("option",{value:"sandwich",children:"Sandwich"})]})},y=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b.a,{name:"no_of_slices",component:p,label:"Number of slices",type:"number",min:1,step:1}),Object(j.jsx)(b.a,{name:"diameter",component:p,label:"Diameter",type:"number",min:"20",step:"5",placeholder:"20-60 cm"})]})},v=function(){return Object(j.jsx)(b.a,{name:"spiciness_scale",label:"Spiciness scale",component:p,type:"number",min:"0",step:"1"})},N=function(){return Object(j.jsx)(b.a,{name:"slices_of_bread",component:p,label:"Slices of bread",type:"number",min:"1",step:"1"})},g=(n(154),n(70),function(e){var t=e.hasTypeValue,n=e.handleSubmit,s=e.pristine,i=e.reset,c=e.submitting;return Object(j.jsxs)("form",{className:"menu_form",onSubmit:n,children:[Object(j.jsx)("h1",{children:"Menu Form"}),Object(j.jsxs)("div",{className:"form_container",children:[Object(j.jsxs)("div",{className:"form_item",children:[Object(j.jsx)("h2",{className:"form_item_title",children:"Primary information"}),Object(j.jsx)(h,{}),Object(j.jsx)(_,{}),Object(j.jsx)(x,{})]}),Object(j.jsxs)("div",{className:"form_item",children:[Object(j.jsx)("h2",{className:"form_item_title",children:"Additional information"}),t?"pizza"===t&&Object(j.jsx)(y,{})||"soup"===t&&Object(j.jsx)(v,{})||"sandwich"===t&&Object(j.jsx)(N,{}):Object(j.jsx)("h3",{children:"Please, choose the meal type"})]})]}),Object(j.jsxs)("div",{className:"btn_wrapper",children:[Object(j.jsx)("button",{className:"btn primary_btn",type:"submit",disabled:c,children:"Submit"}),Object(j.jsx)("button",{className:"btn secondary_btn",type:"button",disabled:s||c,onClick:i,children:"Clear Values"})]})]})});g=Object(m.a)({form:"menuForm",validate:function(e){var t={};return e.name||(t.name="Sorry, You have to name your dish"),e.hours&&e.minutes&&e.seconds||(t.hours="Sorry, You have to set preparation time"),e.type||(t.type="Sorry, dish type is required"),e.no_of_slices?+e.no_of_slices>10?t.no_of_slices="Dividing a pizza into 10 pieces is already difficult enough ":0===+e.no_of_slices&&(t.no_of_slices="0 is not a pizza!"):t.no_of_slices="It will be easier to eat after we divide the pizza",e.diameter?+e.diameter>60&&(t.diameter="We don't have such large plates and pizza boxes"):t.diameter="Don't be shy",+e.spiciness_scale>10&&(t.spiciness_scale="I strongly advise against such a choice"),e.slices_of_bread?+e.slices_of_bread>4?t.slices_of_bread="4 is such a beautiful number":0===+e.slices_of_bread&&(t.no_of_slices="0 is not a sandwich!"):t.slices_of_bread="Don't be shy",t}})(g);var S=Object(d.a)("menuForm"),w=g=Object(c.b)((function(e){return{hasTypeValue:S(e,"type")}}))(g),z=n(59),T=function(e){return e<10?"0"+e.toString():e.toString()},D=function(){var e=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"https://frosty-wood-6558.getsandbox.com:443/dishes",n={name:t.name,preparation_time:T(t.hours)+":"+T(t.hours)+":"+T(t.hours),type:t.type,no_of_slices:t.no_of_slices&&+t.no_of_slices,diameter:t.diameter&&+t.diameter,spiciness_scale:t.spiciness_scale&&+t.spiciness_scale,slices_of_bread:t.slices_of_bread&&+t.slices_of_bread},s={method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}},fetch("https://frosty-wood-6558.getsandbox.com:443/dishes",s).then((function(e){return e.json()})).then((function(e){return window.alert("Congratulations, You submitted:\n\n".concat(JSON.stringify(e,null,2)))})).catch((function(e){if(e.validationErrors)throw new z.a(e.validationErrors);console.log(e)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsx)("div",{className:"menu_container",children:Object(j.jsx)(w,{onSubmit:function(t){e(t)}})})};n(193);var F=function(){return Object(j.jsx)(D,{})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,199)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),s(e),i(e),c(e),a(e)}))},P=n(197),k=Object(a.b)({form:P.a}),I=Object(a.c)(k);i.a.render(Object(j.jsx)(c.a,{store:I,children:Object(j.jsx)(F,{})}),document.getElementById("root")),C()},29:function(e,t,n){},70:function(e,t,n){}},[[194,1,2]]]);
//# sourceMappingURL=main.65e22a99.chunk.js.map