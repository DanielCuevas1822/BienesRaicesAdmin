(this.webpackJsonpbienes_raices_admin=this.webpackJsonpbienes_raices_admin||[]).push([[0],{35:function(e,a,t){},36:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),o=t(17),r=t.n(o),s=(t(29),t(5)),i=t(2),l=t(19),d=t(6),j=t(3),m=t(14),b="NEW_BLOG",p="UPDATE_BLOG",u="DELETE_BLOG",h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case b:return[].concat(Object(m.a)(e),[a.payload]);case p:return e.map((function(e){return e.id===a.payload.id?Object(j.a)(Object(j.a)({},e),{},{nombre_nota:a.payload.nombre_nota,descri_corta:a.payload.descri_corta,descri_larga:a.payload.descri_larga,imagen_nota:a.payload.imagen_nota,creador:a.payload.creador,fecha_nota:a.payload.fecha_nota}):e}));case u:return e.filter((function(e){return e.id!==a.payload}));default:return e}},O="NEW_PROPIEDADES",f="UPDATE_PROPIEDADES",x="DELETE_PROPIEDADES",g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case O:return[].concat(Object(m.a)(e),[a.payload]);case f:return e.map((function(e){return e.id===a.payload.id?Object(j.a)(Object(j.a)({},e),{},{nombre_propiedad:a.payload.nombre_propiedad,desc_corta:a.payload.desc_corta,desc_larga:a.payload.desc_larga,imagen:a.payload.imagen,precio_propiedad:a.payload.precio_propiedad,numero_banos:a.payload.numero_banos,numero_estaci:a.payload.numero_estaci,numero_recama:a.payload.numero_recama}):e}));case x:return e.filter((function(e){return e.id!==a.payload}));default:return e}},v="NEW_TESTIMONIALES",_="UPDATE_TESTIMONIALES",N="DELETE_TESTIMONIALES",y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case v:return[].concat(Object(m.a)(e),[a.payload]);case _:return e.map((function(e){return e.id===a.payload.id?Object(j.a)(Object(j.a)({},e),{},{nombre_testimonial:a.payload.nombre_testimonial,testimonio:a.payload.testimonio}):e}));case N:return e.filter((function(e){return e.id!==a.payload}));default:return e}},w=Object(l.a)({blog:h,propiedades:g,testimoniales:y}),S=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),C=(t(35),t(8)),E=t.p+"static/media/logo.69874b27.svg",k=(t(36),t(0)),T=function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],c=a[1],o=Object(n.useState)(!1),r=Object(s.a)(o,2),i=r[0],l=r[1],d=Object(n.useState)(!1),j=Object(s.a)(d,2),m=j[0],b=j[1],p=Object(n.useState)(!1),u=Object(s.a)(p,2),h=u[0],O=u[1],f=function(){c(!t),l(!1),b(!1)},x=function(){l(!i),c(!1),b(!1)},g=function(){b(!m),c(!1),l(!1)};return Object(k.jsx)("header",{children:Object(k.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(k.jsxs)("div",{className:"mynav",children:[Object(k.jsx)(C.b,{className:"navbar-brand",to:"/",children:Object(k.jsx)("img",{src:E,alt:"logo"})}),Object(k.jsx)("button",{className:"navbar-toggler ".concat(h?"collapsed":""),type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":h,"aria-label":"Toggle navigation",onClick:function(){O(!h)},children:Object(k.jsx)("span",{className:"navbar-toggler-icon"})})]}),Object(k.jsx)("div",{className:"collapse navbar-collapse ".concat(h?"show":""),id:"navbarNav",children:Object(k.jsxs)("ul",{className:"navbar-nav",children:[Object(k.jsxs)("li",{className:"nav-item dropdown ".concat(t?"show":""),children:[Object(k.jsx)("button",{className:"nav-link dropdown-toggle",onClick:f,children:"Propiedades"}),Object(k.jsxs)("div",{className:"dropdown-menu  ".concat(t?"show":""),children:[Object(k.jsx)(C.b,{className:"dropdown-item",to:"/propiedades/",onClick:f,children:"Todas las propiedades"}),Object(k.jsx)("div",{className:"dropdown-divider"}),Object(k.jsx)(C.b,{className:"dropdown-item",to:"/propiedades/nueva_propiedad/",onClick:f,children:"Nueva propiedad"})]})]}),Object(k.jsxs)("li",{className:"nav-item dropdown ".concat(i?"show":""),children:[Object(k.jsx)("button",{className:"nav-link dropdown-toggle",onClick:x,children:"Blog"}),Object(k.jsxs)("div",{className:"dropdown-menu  ".concat(i?"show":""),children:[Object(k.jsx)(C.b,{className:"dropdown-item",to:"/blog",onClick:x,children:"Entradas del Blog"}),Object(k.jsx)("div",{className:"dropdown-divider"}),Object(k.jsx)(C.b,{className:"dropdown-item",to:"/blog/nueva_entrada_blog/",onClick:x,children:"Nueva entrada de blog"})]})]}),Object(k.jsxs)("li",{className:"nav-item dropdown ".concat(m?"show":""),children:[Object(k.jsx)("button",{className:"nav-link dropdown-toggle",onClick:g,children:"Testimoniales"}),Object(k.jsxs)("div",{className:"dropdown-menu  ".concat(m?"show":""),children:[Object(k.jsx)(C.b,{className:"dropdown-item",to:"/testimoniales",onClick:g,children:"Lista de Testimoniales"}),Object(k.jsx)("div",{className:"dropdown-divider"}),Object(k.jsx)(C.b,{className:"dropdown-item",to:"/testimoniales/nuevo_testimonial/",onClick:g,children:"Nueva Testimonial"})]})]})]})})]})})},F=function(){return Object(k.jsx)("p",{children:"Cargando ..."})},P=t(7),D=(t(42),function(e){var a=Object(n.useState)({email:"lolitastest@gmail.com",password:"lolas1234",returnSecureToken:!0}),t=Object(s.a)(a,2),c=t[0],o=t[1],r=function(e){o(Object(j.a)(Object(j.a)({},c),{},Object(P.a)({},e.target.name,e.target.value)))};return Object(k.jsx)("div",{className:"container",children:Object(k.jsx)("div",{className:"row",children:Object(k.jsx)("div",{className:"login col d-flex justify-content-center align-items-center",children:Object(k.jsxs)("form",{children:[Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"exampleInputEmail1",children:"Email"}),Object(k.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1",placeholder:"ejemplo@mail.com",name:"email",value:c.email,onChange:r})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"exampleInputPassword1",children:"Contrase\xf1a"}),Object(k.jsx)("input",{type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Contrase\xf1a",name:"password",value:c.password,onChange:r})]}),Object(k.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(a){a.preventDefault(),fetch("".concat("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword","?key=").concat("AIzaSyA4ngBMim0nBTvBwGwoIvrX4TS-j4sN9fA"),{method:"POST",body:JSON.stringify(c),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(a){localStorage.setItem("userinfo",JSON.stringify(a)),e.handleAccess()})).catch((function(e){console.warn("Something went wrong.",e)}))},children:"Enviar"})]})})})})}),I=(t(43),function(){return Object(k.jsx)("main",{children:Object(k.jsx)("div",{className:"container",children:Object(k.jsx)("div",{className:"row",children:Object(k.jsx)("div",{className:"home col d-flex justify-content-center align-items-center",children:Object(k.jsx)("h1",{children:"Bienvenido al administrador"})})})})})}),L={delete_propiedades_action:function(e){return{type:x,payload:e}}},A=Object(d.b)((function(e){return{propiedades:e.propiedades}}),L)((function(e){var a=Object(i.f)(),t=e.propiedades,n=e.delete_propiedades_action;return Object(k.jsx)("main",{children:Object(k.jsx)("div",{className:"container",children:Object(k.jsxs)("div",{className:"row",children:[Object(k.jsx)("div",{className:"col-12 text-center",children:Object(k.jsx)("h1",{children:"Lista de Propiedades"})}),Object(k.jsx)("div",{className:"col-12 d-flex list",children:t.map((function(e){return Object(k.jsxs)("div",{className:"card",children:[Object(k.jsx)("img",{className:"card-img-top",src:e.imagen,alt:"Card"}),Object(k.jsxs)("div",{className:"card-body",children:[Object(k.jsx)("h5",{className:"card-title",children:e.nombre_propiedad}),Object(k.jsx)("p",{className:"card-text",children:e.desc_corta}),Object(k.jsxs)("div",{className:"card-actions",children:[Object(k.jsx)(C.b,{className:"btn btn-primary",to:"/propiedades/edit/".concat(e.id),children:"Editar"}),Object(k.jsx)("button",{onClick:function(){return function(e){var t=JSON.parse(localStorage.getItem("userinfo"));t?fetch("https://bienesraices-4eea1-default-rtdb.firebaseio.com/propiedades/".concat(e,".json?auth=").concat(t.idToken),{method:"DELETE"}).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(a){n(e)})).catch((function(e){console.warn("Something went wrong.",e),a.push("/notaccess")})):a.push("/notaccess")}(e.id)},className:"btn btn-danger",children:"Eliminar"})]})]})]},e.id)}))})]})})})})),J={delete_blog_action:function(e){return{type:u,payload:e}}},B=Object(d.b)((function(e){return{blog:e.blog}}),J)((function(e){var a=Object(i.f)(),t=e.blog,n=e.delete_blog_action;return Object(k.jsx)("main",{children:Object(k.jsx)("div",{className:"container",children:Object(k.jsxs)("div",{className:"row",children:[Object(k.jsx)("div",{className:"col-12 text-center",children:Object(k.jsx)("h1",{children:"Blog"})}),Object(k.jsx)("div",{className:"col-12 d-flex list",children:t.map((function(e){return Object(k.jsxs)("div",{className:"card",children:[Object(k.jsx)("img",{className:"card-img-top",src:e.imagen_nota,alt:"Card"}),Object(k.jsxs)("div",{className:"card-body",children:[Object(k.jsx)("h5",{className:"card-title",children:e.nombre_nota}),Object(k.jsx)("p",{className:"card-text",children:e.descri_corta}),Object(k.jsxs)("div",{className:"card-actions",children:[Object(k.jsx)(C.b,{className:"btn btn-primary",to:"/blog/edit/".concat(e.id),children:"Editar"}),Object(k.jsx)("button",{className:"btn btn-danger",onClick:function(){return function(e){var t=JSON.parse(localStorage.getItem("userinfo"));t?fetch("https://bienesraices-4eea1-default-rtdb.firebaseio.com/blog/".concat(e,".json?auth=").concat(t.idToken),{method:"DELETE"}).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(a){n(e)})).catch((function(e){console.warn("Something went wrong.",e),a.push("/notaccess")})):a.push("/notaccess")}(e.id)},children:"Eliminar"})]})]})]},e.id)}))})]})})})})),G={delete_testimoniales_action:function(e){return{type:N,payload:e}}},U=Object(d.b)((function(e){return{testimoniales:e.testimoniales}}),G)((function(e){var a=Object(i.f)(),t=e.testimoniales,n=e.delete_testimoniales_action;return Object(k.jsx)("main",{children:Object(k.jsx)("div",{className:"container",children:Object(k.jsxs)("div",{className:"row",children:[Object(k.jsx)("div",{className:"col-12 text-center",children:Object(k.jsx)("h1",{children:"Testimoniales"})}),Object(k.jsx)("div",{className:"col-12 d-flex list",children:t.map((function(e){return Object(k.jsx)("div",{className:"card",children:Object(k.jsxs)("div",{className:"card-body",children:[Object(k.jsx)("h5",{className:"card-title",children:e.nombre_testimonial}),Object(k.jsx)("p",{className:"card-text",children:e.testimonio}),Object(k.jsxs)("div",{className:"card-actions",children:[Object(k.jsx)(C.b,{className:"btn btn-primary",to:"/testimoniales/edit/".concat(e.id),children:"Editar"}),Object(k.jsx)("button",{className:"btn btn-danger",onClick:function(){return function(e){var t=JSON.parse(localStorage.getItem("userinfo"));t?fetch("https://bienesraices-4eea1-default-rtdb.firebaseio.com/testimoniales/".concat(e,".json?auth=").concat(t.idToken),{method:"DELETE"}).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(a){n(e)})).catch((function(e){console.warn("Something went wrong.",e),a.push("/notaccess")})):a.push("/notaccess")}(e.id)},children:"Eliminar"})]})]})},e.id)}))})]})})})})),R=function(e){var a=Object(i.f)();return Object(k.jsx)("div",{className:"container",children:Object(k.jsx)("div",{className:"row",children:Object(k.jsxs)("div",{className:"col",children:[Object(k.jsx)("h1",{children:"You are not access :c"}),Object(k.jsx)("button",{onClick:function(){e.handleAccess(),localStorage.removeItem("userinfo"),a.push("/")},children:"Iniciar Sesi\xf3n"})]})})})},M={update_propiedades_action:function(e){return{type:f,payload:e}}},X=Object(d.b)((function(e){return{propiedades:e.propiedades}}),M)((function(e){var a=e.update_propiedades_action,t=Object(i.g)().id,c=Object(i.f)(),o=Object(n.useState)(""),r=Object(s.a)(o,2),l=r[0],d=r[1];Object(n.useEffect)((function(){d(e.propiedades.filter((function(e){return e.id===t}))[0])}),[e.propiedades,t]);var m=function(e){d(Object(j.a)(Object(j.a)({},l),{},Object(P.a)({},e.target.name,e.target.value)))};return Object(k.jsx)("main",{children:l?Object(k.jsx)("div",{className:"container",children:Object(k.jsx)("div",{className:"row",children:Object(k.jsx)("div",{className:"col-12 list",children:Object(k.jsxs)("form",{children:[Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"nombre_propiedad",children:"Nombre de la propiedad:"}),Object(k.jsx)("input",{type:"text",className:"form-control",id:"nombre_propiedad",name:"nombre_propiedad",value:l.nombre_propiedad,onChange:m})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"descripcion_corta_propiedad",children:"Descripci\xf3n corta de la propiedad:"}),Object(k.jsx)("textarea",{className:"form-control",id:"descripcion_corta_propiedad",rows:"2",name:"desc_corta",value:l.desc_corta,onChange:m})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"descripcion_larga_propiedad",children:"Descripci\xf3n larga de la propiedad:"}),Object(k.jsx)("textarea",{className:"form-control",id:"descripcion_larga_propiedad",rows:"10",name:"desc_larga",value:l.desc_larga,onChange:m})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"imagen_propiedad",children:"URL de la imagen de la propiedad:"}),Object(k.jsx)("input",{type:"text",className:"form-control",id:"imagen_propiedad",name:"imagen",value:l.imagen,onChange:m})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"pricio_propiedad",children:"Precio de la propiedad:"}),Object(k.jsx)("input",{type:"number",className:"form-control",id:"pricio_propiedad",name:"precio_propiedad",value:l.precio_propiedad,onChange:m})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"banos_propiedad",children:"N\xfamero de ba\xf1os:"}),Object(k.jsx)("input",{type:"number",className:"form-control",id:"banos_propiedad",name:"numero_banos",value:l.numero_banos,onChange:m})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"estacinamientos_propiedad",children:"N\xfamero de estacinamientos:"}),Object(k.jsx)("input",{type:"number",className:"form-control",id:"estacinamientos_propiedad",name:"numero_estaci",value:l.numero_estaci,onChange:m})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"recamaras_propiedad",children:"N\xfamero de recamaras:"}),Object(k.jsx)("input",{type:"number",className:"form-control",id:"recamaras_propiedad",name:"numero_recama",value:l.numero_recama,onChange:m})]}),Object(k.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(e){e.preventDefault();var t=JSON.parse(localStorage.getItem("userinfo"));t?fetch("https://bienesraices-4eea1-default-rtdb.firebaseio.com/propiedades/".concat(l.id,".json?auth=").concat(t.idToken),{method:"PATCH",body:JSON.stringify(l)}).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(e){a(e),c.push("/propiedades")})).catch((function(e){console.warn("Something went wrong.",e),c.push("/notaccess")})):c.push("/notaccess")},children:"Guardar"})]})})})}):Object(k.jsx)("p",{children:"Cargando .."})})})),W={new_propiedades_action:function(e){return{type:O,payload:e}}},H=Object(d.b)(null,W)((function(e){var a=Object(i.f)(),t=e.new_propiedades_action,c=Object(n.useState)({imagen_propiedad:["https://firebasestorage.googleapis.com/v0/b/bienesraices-4eea1.appspot.com/o/slider%2Fdestacada2.jpg?alt=media&token=4238f00b-f319-44b8-9c4c-38d99a0fe5c7","https://firebasestorage.googleapis.com/v0/b/bienesraices-4eea1.appspot.com/o/slider%2Fdestacada.jpg?alt=media&token=0ded4b53-15e2-4201-800f-adeb68159940","https://firebasestorage.googleapis.com/v0/b/bienesraices-4eea1.appspot.com/o/slider%2Fdestacada3.jpg?alt=media&token=db56b5f7-cdb1-4ab5-bb39-e3b38a7d0c4b"],nombre_propiedad:"",desc_corta:"",desc_larga:"",imagen:"",precio_propiedad:"",numero_banos:"",numero_estaci:"",numero_recama:""}),o=Object(s.a)(c,2),r=o[0],l=o[1],d=function(e){l(Object(j.a)(Object(j.a)({},r),{},Object(P.a)({},e.target.name,e.target.value)))};return Object(k.jsx)("main",{children:Object(k.jsx)("div",{className:"container",children:Object(k.jsx)("div",{className:"row",children:Object(k.jsx)("div",{className:"col-12 list",children:Object(k.jsxs)("form",{children:[Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"nombre_propiedad",children:"Nombre de la propiedad:"}),Object(k.jsx)("input",{type:"text",className:"form-control",id:"nombre_propiedad",name:"nombre_propiedad",value:r.nombre_propiedad,onChange:d})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"descripcion_corta_propiedad",children:"Descripci\xf3n corta de la propiedad:"}),Object(k.jsx)("textarea",{className:"form-control",id:"descripcion_corta_propiedad",rows:"2",name:"desc_corta",value:r.desc_corta,onChange:d})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"descripcion_larga_propiedad",children:"Descripci\xf3n larga de la propiedad:"}),Object(k.jsx)("textarea",{className:"form-control",id:"descripcion_larga_propiedad",rows:"10",name:"desc_larga",value:r.desc_larga,onChange:d})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"imagen_propiedad",children:"URL de la imagen de la propiedad:"}),Object(k.jsx)("input",{type:"text",className:"form-control",id:"imagen_propiedad",name:"imagen",value:r.imagen,onChange:d})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"pricio_propiedad",children:"Precio de la propiedad:"}),Object(k.jsx)("input",{type:"number",className:"form-control",id:"pricio_propiedad",name:"precio_propiedad",value:r.precio_propiedad,onChange:d})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"banos_propiedad",children:"N\xfamero de ba\xf1os:"}),Object(k.jsx)("input",{type:"number",className:"form-control",id:"banos_propiedad",name:"numero_banos",value:r.numero_banos,onChange:d})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"estacinamientos_propiedad",children:"N\xfamero de estacinamientos:"}),Object(k.jsx)("input",{type:"number",className:"form-control",id:"estacinamientos_propiedad",name:"numero_estaci",value:r.numero_estaci,onChange:d})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"recamaras_propiedad",children:"N\xfamero de recamaras:"}),Object(k.jsx)("input",{type:"number",className:"form-control",id:"recamaras_propiedad",name:"numero_recama",value:r.numero_recama,onChange:d})]}),Object(k.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(e){e.preventDefault();var n=JSON.parse(localStorage.getItem("userinfo"));n?fetch("https://bienesraices-4eea1-default-rtdb.firebaseio.com/propiedades.json?auth=".concat(n.idToken),{method:"POST",body:JSON.stringify(r)}).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(e){var n=Object(j.a)(Object(j.a)({},r),{},{id:e.name});t(n),a.push("/propiedades")})).catch((function(e){console.warn("Something went wrong.",e),a.push("/notaccess")})):a.push("/notaccess")},children:"Guardar"})]})})})})})})),V={new_blog_action:function(e){return{type:b,payload:e}}},z=Object(d.b)(null,V)((function(e){var a=Object(i.f)(),t=e.new_blog_action,c=Object(n.useState)({creador:"",descri_corta:"",descri_larga:"",fecha_nota:"",imagen_nota:"",nombre_nota:""}),o=Object(s.a)(c,2),r=o[0],l=o[1],d=function(e){l(Object(j.a)(Object(j.a)({},r),{},Object(P.a)({},e.target.name,e.target.value)))};return Object(k.jsx)("main",{children:Object(k.jsx)("div",{className:"container",children:Object(k.jsx)("div",{className:"row",children:Object(k.jsx)("div",{className:"col-12 list",children:Object(k.jsxs)("form",{children:[Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"nombre_nota",children:"Nombre nota:"}),Object(k.jsx)("input",{type:"text",className:"form-control",id:"nombre_nota",name:"nombre_nota",value:r.nombre_nota,onChange:d})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"descripcion_corta_nota",children:"Descripci\xf3n corta de la nota:"}),Object(k.jsx)("textarea",{className:"form-control",id:"descripcion_corta_nota",rows:"2",name:"descri_corta",value:r.descri_corta,onChange:d})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"descripcion_larga_nota",children:"Descripci\xf3n larga de la nota:"}),Object(k.jsx)("textarea",{className:"form-control",id:"descripcion_larga_nota",rows:"10",name:"descri_larga",value:r.descri_larga,onChange:d})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"imagen_nota",children:"URL de la imagen de la nota:"}),Object(k.jsx)("input",{type:"text",className:"form-control",id:"imagen_nota",name:"imagen_nota",value:r.imagen_nota,onChange:d})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"creador",children:"Creador de la nota:"}),Object(k.jsx)("input",{type:"text",className:"form-control",id:"creador",name:"creador",value:r.creador,onChange:d})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"fecha_nota",children:"Fecha de publicaci\xf3n:"}),Object(k.jsx)("input",{type:"date",className:"form-control",name:"fecha_nota",id:"fecha_nota",value:r.fecha_nota,onChange:d})]}),Object(k.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(e){e.preventDefault();var n=JSON.parse(localStorage.getItem("userinfo"));n?fetch("https://bienesraices-4eea1-default-rtdb.firebaseio.com/blog.json?auth=".concat(n.idToken),{method:"POST",body:JSON.stringify(r)}).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(e){var n=Object(j.a)(Object(j.a)({},r),{},{id:e.name});t(n),a.push("/blog")})).catch((function(e){console.warn("Something went wrong.",e),a.push("/notaccess")})):a.push("/notaccess")},children:"Guardar"})]})})})})})})),Y={new_testimoniales_action:function(e){return{type:v,payload:e}}},q=Object(d.b)(null,Y)((function(e){var a=Object(i.f)(),t=e.new_testimoniales_action,c=Object(n.useState)({nombre_testimonial:"Daniel Cuevas",testimonio:"Super"}),o=Object(s.a)(c,2),r=o[0],l=o[1],d=function(e){l(Object(j.a)(Object(j.a)({},r),{},Object(P.a)({},e.target.name,e.target.value)))};return Object(k.jsx)("main",{children:Object(k.jsx)("div",{className:"container",children:Object(k.jsx)("div",{className:"row",children:Object(k.jsx)("div",{className:"col-12 list",children:Object(k.jsxs)("form",{children:[Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"nombre_testimonial",children:"Nombre:"}),Object(k.jsx)("input",{type:"text",className:"form-control",id:"nombre_testimonial",name:"nombre_testimonial",value:r.nombre_testimonial,onChange:d})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"testimonio",children:"Testimonio:"}),Object(k.jsx)("textarea",{className:"form-control",id:"testimonio",rows:"10",name:"testimonio",value:r.testimonio,onChange:d})]}),Object(k.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(e){e.preventDefault();var n=JSON.parse(localStorage.getItem("userinfo"));n?fetch("https://bienesraices-4eea1-default-rtdb.firebaseio.com/testimoniales.json?auth=".concat(n.idToken),{method:"POST",body:JSON.stringify(r)}).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(e){var n=Object(j.a)(Object(j.a)({},r),{},{id:e.name});t(n),a.push("/testimoniales")})).catch((function(e){console.warn("Something went wrong.",e),a.push("/notaccess")})):a.push("/notaccess")},children:"Guardar"})]})})})})})})),K={update_blog_action:function(e){return{type:p,payload:e}}},Q=Object(d.b)((function(e){return{blog:e.blog}}),K)((function(e){var a=e.update_blog_action,t=Object(i.g)().id,c=Object(i.f)(),o=Object(n.useState)(""),r=Object(s.a)(o,2),l=r[0],d=r[1];Object(n.useEffect)((function(){d(e.blog.filter((function(e){return e.id===t}))[0])}),[e.blog,t]);var m=function(e){d(Object(j.a)(Object(j.a)({},l),{},Object(P.a)({},e.target.name,e.target.value)))};return Object(k.jsx)("main",{children:l?Object(k.jsx)("div",{className:"container",children:Object(k.jsx)("div",{className:"row",children:Object(k.jsx)("div",{className:"col-12 list",children:Object(k.jsxs)("form",{children:[Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"nombre_nota",children:"Nombre nota:"}),Object(k.jsx)("input",{type:"text",className:"form-control",id:"nombre_nota",name:"nombre_nota",value:l.nombre_nota,onChange:m})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"descripcion_corta_nota",children:"Descripci\xf3n corta de la nota:"}),Object(k.jsx)("textarea",{className:"form-control",id:"descripcion_corta_nota",rows:"2",name:"descri_corta",value:l.descri_corta,onChange:m})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"descripcion_larga_nota",children:"Descripci\xf3n larga de la nota:"}),Object(k.jsx)("textarea",{className:"form-control",id:"descripcion_larga_nota",rows:"10",name:"descri_larga",value:l.descri_larga,onChange:m})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"imagen_nota",children:"URL de la imagen de la nota:"}),Object(k.jsx)("input",{type:"text",className:"form-control",id:"imagen_nota",name:"imagen_nota",value:l.imagen_nota,onChange:m})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"creador",children:"Creador de la nota:"}),Object(k.jsx)("input",{type:"text",className:"form-control",id:"creador",name:"creador",value:l.creador,onChange:m})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"fecha_nota",children:"Fecha de publicaci\xf3n:"}),Object(k.jsx)("input",{type:"date",className:"form-control",name:"fecha_nota",id:"fecha_nota",value:l.fecha_nota,onChange:m})]}),Object(k.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(e){e.preventDefault();var t=JSON.parse(localStorage.getItem("userinfo"));t?fetch("https://bienesraices-4eea1-default-rtdb.firebaseio.com/blog/".concat(l.id,".json?auth=").concat(t.idToken),{method:"PATCH",body:JSON.stringify(l)}).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(e){a(e),c.push("/blog")})).catch((function(e){console.warn("Something went wrong.",e),c.push("/notaccess")})):c.push("/notaccess")},children:"Guardar"})]})})})}):Object(k.jsx)("p",{children:"Cargando .."})})})),Z={update_testimoniales_action:function(e){return{type:_,payload:e}}},$=Object(d.b)((function(e){return{testimoniales:e.testimoniales}}),Z)((function(e){var a=e.update_testimoniales_action,t=Object(i.g)().id,c=Object(i.f)(),o=Object(n.useState)(""),r=Object(s.a)(o,2),l=r[0],d=r[1];Object(n.useEffect)((function(){d(e.testimoniales.filter((function(e){return e.id===t}))[0])}),[e.testimoniales,t]);var m=function(e){d(Object(j.a)(Object(j.a)({},l),{},Object(P.a)({},e.target.name,e.target.value)))};return Object(k.jsx)("main",{children:l?Object(k.jsx)("div",{className:"container",children:Object(k.jsx)("div",{className:"row",children:Object(k.jsx)("div",{className:"col-12 list",children:Object(k.jsxs)("form",{children:[Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"nombre_testimonial",children:"Nombre:"}),Object(k.jsx)("input",{type:"text",className:"form-control",id:"nombre_testimonial",name:"nombre_testimonial",value:l.nombre_testimonial,onChange:m})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"testimonio",children:"Testimonio:"}),Object(k.jsx)("textarea",{className:"form-control",id:"testimonio",rows:"10",name:"testimonio",value:l.testimonio,onChange:m})]}),Object(k.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(e){e.preventDefault();var t=JSON.parse(localStorage.getItem("userinfo"));t?fetch("https://bienesraices-4eea1-default-rtdb.firebaseio.com/testimoniales/".concat(l.id,".json?auth=").concat(t.idToken),{method:"PATCH",body:JSON.stringify(l)}).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(e){a(e),c.push("/testimoniales")})).catch((function(e){console.warn("Something went wrong.",e),c.push("/notaccess")})):c.push("/notaccess")},children:"Guardar"})]})})})}):Object(k.jsx)("p",{children:"Cargando .."})})}));var ee=function(){var e=Object(n.useState)(!0),a=Object(s.a)(e,2),t=a[0],o=a[1],r=Object(n.useState)(!1),m=Object(s.a)(r,2),b=m[0],p=m[1],u=function(){var e=Object(n.useState)({}),a=Object(s.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){Promise.all([fetch("https://bienesraices-4eea1-default-rtdb.firebaseio.com/propiedades.json").then((function(e){return e.json()})).then((function(e){var a=[];for(var t in e){var n={id:t};if(e.hasOwnProperty(t)){var c=e[t],o=Object(j.a)(Object(j.a)({},c),n);a.push(o)}}return{propiedades:a}})).catch((function(e){console.log(e)})),fetch("https://bienesraices-4eea1-default-rtdb.firebaseio.com/blog.json").then((function(e){return e.json()})).then((function(e){var a=[];for(var t in e){var n={id:t};if(e.hasOwnProperty(t)){var c=e[t],o=Object(j.a)(Object(j.a)({},n),c);a.push(o)}}return{blog:a}})).catch((function(e){console.log(e)})),fetch("https://bienesraices-4eea1-default-rtdb.firebaseio.com/testimoniales.json").then((function(e){return e.json()})).then((function(e){var a=[];for(var t in e){var n={id:t};if(e.hasOwnProperty(t)){var c=e[t],o=Object(j.a)(Object(j.a)({},n),c);a.push(o)}}return{testimoniales:a}})).catch((function(e){console.log(e)}))]).then((function(e){var a={};e.map((function(e){return a=Object(j.a)(Object(j.a)({},a),e),null})),c(a)}))}),[]),t}(),h=Object(l.b)(w,u,S);Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userinfo"));o(!1),p(!!e)}),[b]);var O=function(){p(!b)};return Object(k.jsx)(d.a,{store:h,children:Object(k.jsx)("div",{className:"App",children:t?Object(k.jsx)(F,{}):Object(k.jsx)(c.a.Fragment,{children:b?Object(k.jsxs)(c.a.Fragment,{children:[Object(k.jsx)(T,{}),Object(k.jsxs)(i.c,{children:[Object(k.jsx)(i.a,{exact:!0,path:"/",children:Object(k.jsx)(I,{})}),Object(k.jsx)(i.a,{exact:!0,path:"/propiedades",children:Object(k.jsx)(A,{})}),Object(k.jsx)(i.a,{exact:!0,path:"/propiedades/edit/:id",children:Object(k.jsx)(X,{})}),Object(k.jsx)(i.a,{exact:!0,path:"/propiedades/nueva_propiedad/",children:Object(k.jsx)(H,{})}),Object(k.jsx)(i.a,{exact:!0,path:"/blog",children:Object(k.jsx)(B,{})}),Object(k.jsx)(i.a,{exact:!0,path:"/blog/nueva_entrada_blog/",children:Object(k.jsx)(z,{})}),Object(k.jsx)(i.a,{exact:!0,path:"/blog/edit/:id",children:Object(k.jsx)(Q,{})}),Object(k.jsx)(i.a,{exact:!0,path:"/testimoniales",children:Object(k.jsx)(U,{})}),Object(k.jsx)(i.a,{exact:!0,path:"/testimoniales/nuevo_testimonial/",children:Object(k.jsx)(q,{})}),Object(k.jsx)(i.a,{exact:!0,path:"/testimoniales/edit/:id",children:Object(k.jsx)($,{})}),Object(k.jsx)(i.a,{exact:!0,path:"/notaccess",children:Object(k.jsx)(R,{handleAccess:O})})]})]}):Object(k.jsx)(D,{handleAccess:O})})})})},ae=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,45)).then((function(a){var t=a.getCLS,n=a.getFID,c=a.getFCP,o=a.getLCP,r=a.getTTFB;t(e),n(e),c(e),o(e),r(e)}))};r.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(C.a,{children:Object(k.jsx)(ee,{})})}),document.getElementById("root")),ae()}},[[44,1,2]]]);
//# sourceMappingURL=main.e74c244e.chunk.js.map