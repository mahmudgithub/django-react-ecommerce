(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{37:function(t,e,c){},61:function(t,e,c){"use strict";c.r(e);var n=c(0),r=c(1),a=c(29),s=c.n(a),i=(c(37),c(2)),o=c.n(i),l=c(5),d=c(3),j=c(4),u=c.n(j),b=c(6),h=c(7),O=c(30),p=c.n(O),x="",f=("token ".concat(""),{"X-CSRFToken":p.a.get("csrftoken")}),m=Object(r.createContext)(),v=function(t){var e=t.reducer,c=t.initialstate,a=t.children;return Object(n.jsx)(m.Provider,{value:Object(r.useReducer)(e,c),children:a})},g=function(){return Object(r.useContext)(m)},w=function(){var t,e=g(),c=Object(d.a)(e,2),r=c[0].cartproductf_uncomplit,a=c[1],s=0;null!==r?s=null===r||void 0===r||null===(t=r.cartproduct)||void 0===t?void 0:t.length:s=0;var i=window.localStorage.getItem("token"),j=Object(h.f)(),O=function(){var t=Object(l.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u()({method:"post",url:"".concat(x,"/api/updatecartproduct/"),headers:{Authorization:"token ".concat(i)},data:{id:e}}).then((function(t){a({type:"ADD_RELOADPAGE_DATA",reloadpage:t})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(l.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u()({method:"post",url:"".concat(x,"/api/editcartproduct/"),headers:{Authorization:"token ".concat(i)},data:{id:e}}).then((function(t){a({type:"ADD_RELOADPAGE_DATA",reloadpage:t})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(l.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u()({method:"post",url:"".concat(x,"/api/delatecartproduct/"),headers:{Authorization:"token ".concat(i)},data:{id:e}}).then((function(t){a({type:"ADD_RELOADPAGE_DATA",reloadpage:t})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(l.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u()({method:"post",url:"".concat(x,"/api/delatefullcart/"),headers:{Authorization:"token ".concat(i)},data:{id:e}}).then((function(t){a({type:"ADD_RELOADPAGE_DATA",reloadpage:t}),a({type:"ADD_CARTPRODUCT_UNCOMPLIT",cartproductf_uncomplit:null}),alert("Full Cart is Delated"),j.push("/")})).catch((function(t){console.log(t)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"container p-3",children:[0!==s?Object(n.jsxs)("table",{className:"table table-striped",children:[Object(n.jsxs)("thead",{children:[Object(n.jsx)("th",{children:"SN"}),Object(n.jsx)("th",{children:"Product"}),Object(n.jsx)("th",{children:"Rate"}),Object(n.jsx)("th",{children:"Quantity"}),Object(n.jsx)("th",{children:"Subtotal"}),Object(n.jsx)("th",{children:"Action"})]}),Object(n.jsx)("tbody",{children:null===r||void 0===r?void 0:r.cartproduct.map((function(t,e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e+1}),Object(n.jsx)("td",{children:t.product[0].title}),Object(n.jsx)("td",{children:t.price}),Object(n.jsx)("td",{children:t.quantity}),Object(n.jsx)("td",{children:t.subtotal}),Object(n.jsxs)("td",{children:[Object(n.jsx)("button",{onClick:function(){return p(t.id)},className:"btn btn-info",children:"-"}),Object(n.jsx)("button",{onClick:function(){return f(t.id)},className:"btn btn-danger mx-1",children:"X"}),Object(n.jsx)("button",{onClick:function(){return O(t.id)},className:"btn btn-success",children:"+"})]})]},e)}))}),Object(n.jsx)("tfoot",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{colSpan:"4",className:"text-right",children:"Total"}),Object(n.jsx)("th",{children:null===r||void 0===r?void 0:r.total}),Object(n.jsx)("th",{children:Object(n.jsx)(b.b,{to:"/order",className:"btn btn-success",children:"OrderNow"})})]})})]}):Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"Thare is no Card Go home and add some Product"})}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col",children:Object(n.jsx)(b.b,{to:"/oldorders",className:"btn btn-warning",children:"Old Orders"})}),0!==s&&Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"col",children:Object(n.jsx)(b.b,{onClick:function(){return m(r.id)},className:"btn btn-danger",children:"Delate Card"})})})]})]})},A=function(t){var e=t.item,c=g(),r=Object(d.a)(c,2),a=r[0].profile,s=r[1],i=Object(h.f)(),j=function(){var t=Object(l.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null===a){t.next=5;break}return t.next=3,u()({method:"post",url:"".concat(x,"/api/addtocart/"),headers:{Authorization:"token ".concat(window.localStorage.getItem("token"))},data:{id:e}}).then((function(t){s({type:"ADD_RELOADPAGE_DATA",reloadpage:t})}));case 3:t.next=6;break;case 5:i.push("/login");case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(n.jsxs)("div",{class:"card single_product",children:[Object(n.jsx)(b.b,{to:"/product/".concat(e.id),className:"product_image",children:Object(n.jsx)("img",{class:"card-img-top",src:e.image,alt:"Card image cap"})}),Object(n.jsxs)("div",{class:"card-body",children:[Object(n.jsx)("h5",{class:"card-title",children:e.title}),Object(n.jsxs)("p",{class:"card-text",children:[e.description.substring(0,50),"... ",Object(n.jsx)(b.b,{to:"/product/".concat(e.id),children:" Read more"})]}),Object(n.jsx)(b.b,{onClick:function(){return j(e.id)},class:"btn btn-primary",children:"Add to Cart"})]}),Object(n.jsx)("div",{className:"card-footer",children:Object(n.jsxs)("h5",{children:["Price: ",Object(n.jsxs)("del",{children:[e.marcket_price,"$"]})," ",e.selling_price,"$"]})})]})},k=function(){var t=Object(h.g)().id,e=Object(r.useState)(null),c=Object(d.a)(e,2),a=c[0],s=c[1];return Object(r.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u()({method:"get",url:"".concat(x,"/api/category/").concat(t,"/")}).then((function(t){s(t.data[0])}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("h1",{children:["Categori: ",null===a||void 0===a?void 0:a.title]}),Object(n.jsx)("h2",{children:"Categori Products"}),Object(n.jsx)("div",{className:"row",children:null!==a&&(null===a||void 0===a?void 0:a.category_product.map((function(t,e){return Object(n.jsx)("div",{className:"col-md-3",children:Object(n.jsx)(A,{item:t},e)})})))})]})},y=function(){var t=Object(r.useState)(null),e=Object(d.a)(t,2),c=e[0],a=e[1],s=Object(r.useState)(null),i=Object(d.a)(s,2),j=i[0],h=i[1];Object(r.useEffect)((function(){u()({method:"get",url:"".concat(x,"/api/product/")}).then((function(t){a(t.data)}))}),[]);var O=function(){var t=Object(l.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:u()({method:"get",url:null===c||void 0===c?void 0:c.next}).then((function(t){a(t.data)}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=Object(l.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:u()({method:"get",url:null===c||void 0===c?void 0:c.previous}).then((function(t){a(t.data)}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){(function(){var t=Object(l.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u()({method:"get",url:"".concat(x,"/api/category/")}).then((function(t){h(t.data)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(n.jsx)("div",{className:"container-fluid",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col-md-9",children:[Object(n.jsx)("div",{className:"row",children:null!==c?Object(n.jsx)(n.Fragment,{children:null===c||void 0===c?void 0:c.results.map((function(t,e){return Object(n.jsx)("div",{className:"col-md-4 my-3",children:Object(n.jsx)(A,{item:t})},e)}))}):Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("h1",{children:"Loding..."})})}),Object(n.jsxs)("div",{className:"homepage__pagination",children:[Object(n.jsx)("div",{className:"",children:null!==(null===c||void 0===c?void 0:c.previous)?Object(n.jsxs)("button",{onClick:p,class:"btn btn-lg btn-success",children:[Object(n.jsx)("i",{class:"fas fa-backward"})," Previous"]}):Object(n.jsxs)("button",{class:"btn btn-lg btn-success",disabled:!0,children:[" ",Object(n.jsx)("i",{class:"fas fa-backward"})," Previous"]})}),Object(n.jsx)("div",{className:"",children:null!==(null===c||void 0===c?void 0:c.next)?Object(n.jsxs)("button",{onClick:O,class:"btn btn-lg btn-danger",children:["Next ",Object(n.jsx)("i",{class:"fas fa-forward"})]}):Object(n.jsxs)("button",{class:"btn btn-lg btn-danger",disabled:!0,children:["Next ",Object(n.jsx)("i",{class:"fas fa-forward"})]})})]})]}),Object(n.jsxs)("div",{className:"col-md-4 mt-2",children:[Object(n.jsx)("h1",{children:"Categories"}),null===j||void 0===j?void 0:j.map((function(t,e){return Object(n.jsx)("div",{className:"p-2 m-2",children:Object(n.jsx)(b.b,{to:"/categori/".concat(t.id),className:"btn btn-success",children:t.title})},e)}))]})]})})},N=function(){var t=Object(r.useState)(""),e=Object(d.a)(t,2),c=e[0],a=e[1],s=Object(r.useState)(""),i=Object(d.a)(s,2),o=i[0],l=i[1];return Object(n.jsxs)("div",{className:"container my-5 p-5",children:[Object(n.jsx)("h1",{children:"Login"}),Object(n.jsxs)("div",{class:"form-group",children:[Object(n.jsx)("label",{children:"Username"}),Object(n.jsx)("input",{onChange:function(t){return a(t.target.value)},type:"text",class:"form-control",placeholder:"Username"})]}),Object(n.jsxs)("div",{class:"form-group",children:[Object(n.jsx)("label",{children:"Password"}),Object(n.jsx)("input",{onChange:function(t){return l(t.target.value)},type:"password",class:"form-control",placeholder:"Password"})]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("button",{onClick:function(){u()({url:"".concat(x,"/api/login/"),method:"post",headers:f,data:{username:c,password:o}}).then((function(t){window.localStorage.setItem("token",t.data.token),window.location.href="/"})).catch((function(t){alert("Username OR Password is invalid Try Agane !!")}))},className:"btn btn-success my-4",children:"Login"}),Object(n.jsx)(b.b,{to:"/register",children:"Register Now"})]})]})},D=function(){var t,e=g(),c=Object(d.a)(e,2),r=c[0],a=r.profile,s=r.cartproductf_uncomplit,i=c[1],o=0;null!==s?o=null===s||void 0===s||null===(t=s.cartproduct)||void 0===t?void 0:t.length:o=0;return Object(n.jsx)("nav",{class:"navbar navbar-expand-lg navbar-dark bg-dark navbar_class",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(b.b,{class:"navbar-brand",to:"/",children:"Home"}),Object(n.jsx)(b.b,{class:"navbar-brand",to:"/",children:"mahmud"}),Object(n.jsx)("ul",{class:"navbar-nav mr-auto",children:null!==a?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("li",{class:"nav-item",children:Object(n.jsxs)(b.b,{to:"/cart",class:"btn btn-dark",children:[Object(n.jsx)("i",{class:"fas fa-cart-plus"}),Object(n.jsxs)("span",{children:["(",o,")"]})]})}),Object(n.jsx)("li",{class:"nav-item",children:Object(n.jsx)(b.b,{to:"/profile",class:"nav-link active btn-dark",children:"Profile"})}),Object(n.jsx)("li",{class:"nav-item",children:Object(n.jsx)(b.b,{onClick:function(){window.localStorage.clear(),i({type:"ADD_PROFILE",profile:null}),window.location.href="/"},class:"nav-link active btn-dark",children:"Logout"})})]}):Object(n.jsx)("li",{class:"nav-item",children:Object(n.jsx)(b.b,{to:"/login",class:"nav-link  active btn-dark",children:"Login"})})})]})})},_=function(){var t=window.localStorage.getItem("token"),e=Object(r.useState)(null),c=Object(d.a)(e,2),a=c[0],s=c[1],i=Object(r.useState)(null),j=Object(d.a)(i,2),h=j[0],O=j[1];Object(r.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u()({method:"get",url:"".concat(x,"/api/orders/"),headers:{Authorization:"token ".concat(t)}}).then((function(t){s(t.data)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[h]);var p=function(){var e=Object(l.a)(o.a.mark((function e(c){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u()({method:"delete",url:"".concat(x,"/api/orders/").concat(c,"/"),headers:{Authorization:"token ".concat(t)}}).then((function(t){O(t.data)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h1",{children:"Orders History"}),Object(n.jsxs)("table",{className:"table",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"SN"}),Object(n.jsx)("th",{children:"Totla"}),Object(n.jsx)("th",{children:"Product"}),Object(n.jsx)("th",{children:"Order Status"}),Object(n.jsx)("th",{}),Object(n.jsx)("th",{})]})}),Object(n.jsx)("tbody",{children:0!==(null===a||void 0===a?void 0:a.length)?null===a||void 0===a?void 0:a.map((function(t,e){var c;return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e+1}),Object(n.jsxs)("td",{children:["TK. ",null===t||void 0===t?void 0:t.total]}),Object(n.jsx)("td",{children:null===t||void 0===t||null===(c=t.cartproduct)||void 0===c?void 0:c.length}),Object(n.jsx)("td",{children:null===t||void 0===t?void 0:t.order_status}),Object(n.jsx)("td",{children:Object(n.jsx)(b.b,{to:"/oldorders/".concat(t.id),className:"btn btn-success",children:"Details"})}),Object(n.jsx)("td",{children:Object(n.jsx)("p",{onClick:function(){return p(t.id)},className:"btn btn-danger",children:"Delate"})})]},e)})):Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"display-1",children:"No Old Order"}),Object(n.jsx)(b.b,{to:"/",className:"btn btn-info",children:"GO HOME"})]})})]})]})},C=function(){var t,e=window.localStorage.getItem("token"),c=Object(h.g)().id,a=Object(r.useState)(null),s=Object(d.a)(a,2),i=s[0],j=s[1];Object(r.useEffect)((function(){(function(){var t=Object(l.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u()({method:"get",url:"".concat(x,"/api/orders/").concat(c,"/"),headers:{Authorization:"token ".concat(e)}}).then((function(t){var e;console.log(null===t||void 0===t?void 0:t.data.data[0]),j(null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.data[0])}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);var b=null===i||void 0===i?void 0:i.cartproduct;return Object(n.jsxs)("div",{className:"container p-3",children:[Object(n.jsxs)("table",{className:"table table-bordered ",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Date"}),Object(n.jsx)("th",{children:"Total"}),Object(n.jsx)("th",{children:"Email"}),Object(n.jsx)("th",{children:"Mobile"}),Object(n.jsx)("th",{children:"discount"}),Object(n.jsx)("th",{children:"Products"})]})}),Object(n.jsx)("tbody",{children:Object(n.jsx)("tr",{children:null!=i&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("td",{children:i.date}),Object(n.jsx)("td",{children:i.total}),Object(n.jsx)("td",{children:i.email}),Object(n.jsx)("td",{children:i.mobile}),Object(n.jsx)("td",{children:i.discount}),Object(n.jsx)("td",{children:null===(t=i.cartproduct)||void 0===t?void 0:t.length})]})})})]}),Object(n.jsx)("h1",{children:"Product details"}),Object(n.jsxs)("table",{className:"table table-bordered ",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"SN"}),Object(n.jsx)("th",{children:"Product"}),Object(n.jsx)("th",{children:"Price"}),Object(n.jsx)("th",{children:"Quantity"}),Object(n.jsx)("th",{children:"Subtotal"})]})}),Object(n.jsx)("tbody",{children:null===b||void 0===b?void 0:b.map((function(t,e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e+1}),Object(n.jsx)("td",{children:t.product[0].title}),Object(n.jsx)("td",{children:t.price}),Object(n.jsx)("td",{children:t.quantity}),Object(n.jsx)("td",{children:t.subtotal})]},e)}))})]})]})},P=function(){var t=g(),e=Object(d.a)(t,2),c=e[0].cartproductf_uncomplit,a=e[1],s=Object(r.useState)(""),i=Object(d.a)(s,2),j=i[0],O=i[1],p=Object(r.useState)(""),f=Object(d.a)(p,2),m=f[0],v=f[1],w=Object(r.useState)(""),A=Object(d.a)(w,2),k=A[0],y=A[1],N=Object(h.f)(),D={cartId:null===c||void 0===c?void 0:c.id,address:j,mobile:m,email:k},_=window.localStorage.getItem("token"),C=function(){var t=Object(l.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:u()({method:"post",url:"".concat(x,"/api/orders/"),headers:{Authorization:"token ".concat(_)},data:D}).then((function(t){a({type:"ADD_RELOADPAGE_DATA",reloadpage:t}),a({type:"ADD_CARTPRODUCT_UNCOMPLIT",cartproductf_uncomplit:null}),N.push("/oldorders")}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-md-6 p-2",children:Object(n.jsxs)("table",{className:"table table-striped",children:[Object(n.jsxs)("thead",{children:[Object(n.jsx)("th",{children:"SN"}),Object(n.jsx)("th",{children:"Product"}),Object(n.jsx)("th",{children:"Rate"}),Object(n.jsx)("th",{children:"Quantity"}),Object(n.jsx)("th",{children:"Subtotal"})]}),Object(n.jsx)("tbody",{children:null===c||void 0===c?void 0:c.cartproduct.map((function(t,e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e+1}),Object(n.jsx)("td",{children:t.product[0].title}),Object(n.jsx)("td",{children:t.price}),Object(n.jsx)("td",{children:t.quantity}),Object(n.jsx)("td",{children:t.subtotal})]},e)}))}),Object(n.jsxs)("tfoot",{children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{colSpan:"4",className:"text-right",children:"Total"}),Object(n.jsx)("th",{children:null===c||void 0===c?void 0:c.total})]}),Object(n.jsx)(b.b,{to:"/cart/",className:"btn btn-outline-secondary",children:"Edit Cart"})]})]})}),Object(n.jsxs)("div",{className:"col-md-6",children:[Object(n.jsx)("h1",{children:"Order Now"}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Address"}),Object(n.jsx)("input",{onChange:function(t){return O(t.target.value)},type:"text",className:"form-control",placeholder:"Address"})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Mobile"}),Object(n.jsx)("input",{onChange:function(t){return v(t.target.value)},type:"text",className:"form-control",placeholder:"Mobile"})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Email"}),Object(n.jsx)("input",{onChange:function(t){return y(t.target.value)},type:"text",className:"form-control",placeholder:"Email"})]}),Object(n.jsx)("button",{className:"btn btn-info",onClick:C,children:"Order"})]})]})]})})},S=function(){var t,e,c=Object(h.g)().id,a=g(),s=Object(d.a)(a,2),i=s[0].profile,j=s[1],b=Object(h.f)(),O=Object(r.useState)(null),p=Object(d.a)(O,2),f=p[0],m=p[1],v=Object(r.useState)(null),w=Object(d.a)(v,2),k=w[0],y=w[1];Object(r.useEffect)((function(){(function(){var t=Object(l.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u()({method:"get",url:"".concat(x,"/api/product/").concat(c,"/")}).then((function(t){var e;m(null===t||void 0===t?void 0:t.data),N(null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.category.id)})).catch((function(t){console.log(t)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[c]);var N=function(){var t=Object(l.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u()({method:"get",url:"".concat(x,"/api/category/").concat(e,"/")}).then((function(t){y(null===t||void 0===t?void 0:t.data)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),D=function(){var t=Object(l.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null===i){t.next=5;break}return t.next=3,u()({method:"post",url:"".concat(x,"/api/addtocart/"),headers:{Authorization:"token ".concat(window.localStorage.getItem("token"))},data:{id:e}}).then((function(t){console.log(t),j({type:"ADD_RELOADPAGE_DATA",reloadpage:t})}));case 3:t.next=6;break;case 5:b.push("/login");case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"container",children:[null!==f&&Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("img",{className:"w-100",src:f.image,alt:""}),Object(n.jsxs)("div",{className:"col-md-7 p-2",children:[Object(n.jsx)("h1",{children:f.title}),Object(n.jsxs)("h2",{children:["Price: ",Object(n.jsxs)("del",{children:[f.marcket_price,"$"]})," ",f.selling_price,"$"]})]}),Object(n.jsx)("div",{className:"col-md-4 p-3",children:Object(n.jsx)("p",{onClick:function(){return D(f.id)},className:"btn btn-success",children:"Add to Cart"})}),Object(n.jsx)("p",{children:f.description})]})}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("h1",{children:"Related Products"}),null!==k&&(null===(t=k[0])||void 0===t||null===(e=t.category_product)||void 0===e?void 0:e.map((function(t,e){return Object(n.jsx)("div",{className:"col-md-3 mt-2",children:Object(n.jsx)(A,{item:t})},e)})))]})]})},E=function(){var t=g(),e=Object(d.a)(t,2),c=e[0].profile,a=e[1],s=Object(r.useState)(null),i=Object(d.a)(s,2),j=i[0],b=i[1],h=Object(r.useState)(null===c||void 0===c?void 0:c.prouser.first_name),O=Object(d.a)(h,2),p=O[0],f=O[1],m=Object(r.useState)(null===c||void 0===c?void 0:c.prouser.last_name),v=Object(d.a)(m,2),w=v[0],A=v[1],k=Object(r.useState)(null===c||void 0===c?void 0:c.prouser.email),y=Object(d.a)(k,2),N=y[0],D=y[1],_=function(){var t=Object(l.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(e=new FormData).append("image",j),t.next=4,u()({method:"post",url:"".concat(x,"/api/updateprofile/"),headers:{Authorization:"token ".concat(window.localStorage.getItem("token"))},data:e}).then((function(t){a({type:"ADD_RELOADPAGE_DATA",reloadpage:t.data}),alert(t.data.message)}));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),C=function(){var t=Object(l.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u()({method:"post",url:"".concat(x,"/api/updateuser/"),headers:{Authorization:"token ".concat(window.localStorage.getItem("token"))},data:{first_name:p,last_name:w,email:N}}).then((function(t){a({type:"ADD_RELOADPAGE_DATA",reloadpage:t.data}),alert(t.data.message)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{class:"content-section",children:[Object(n.jsxs)("div",{class:"media",children:[Object(n.jsx)("img",{class:"rounded-circle account-img",src:"".concat(x).concat(null===c||void 0===c?void 0:c.image)}),Object(n.jsxs)("div",{class:"media-body",children:[Object(n.jsx)("h2",{class:"account-heading",children:null===c||void 0===c?void 0:c.prouser.username}),Object(n.jsx)("small",{class:"form-text text-muted",children:"Username name is Fiexd"}),Object(n.jsx)("p",{class:"text-secondary",children:null===c||void 0===c?void 0:c.prouser.email}),Object(n.jsxs)("p",{children:[null===c||void 0===c?void 0:c.prouser.first_name," ",null===c||void 0===c?void 0:c.prouser.last_name]})]})]}),Object(n.jsxs)("form",{method:"POST",enctype:"multipart/form-data",children:[Object(n.jsxs)("fieldset",{class:"form-group",children:[Object(n.jsx)("legend",{class:"border-bottom mb-4",children:"Profile Info"}),Object(n.jsxs)("div",{class:"form-group",children:[Object(n.jsx)("label",{children:"Uplode Profile Picture"}),Object(n.jsxs)("div",{class:"row",children:[Object(n.jsx)("div",{class:"col",children:Object(n.jsx)("input",{onChange:function(t){return b(t.target.files[0])},type:"file",class:"form-control"})}),Object(n.jsx)("div",{class:"col",children:Object(n.jsx)("p",{onClick:_,className:"btn btn-info",children:"Upload"})})]})]}),Object(n.jsxs)("div",{class:"form-group",children:[Object(n.jsx)("label",{children:"First Name"}),Object(n.jsx)("input",{type:"text",class:"form-control",onChange:function(t){return f(t.target.value)},value:p})]}),Object(n.jsxs)("div",{class:"form-group",children:[Object(n.jsx)("label",{children:"Last Name"}),Object(n.jsx)("input",{type:"text",class:"form-control",onChange:function(t){return A(t.target.value)},value:w})]}),Object(n.jsxs)("div",{class:"form-group",children:[Object(n.jsx)("label",{children:"Email"}),Object(n.jsx)("input",{type:"email",class:"form-control",onChange:function(t){return D(t.target.value)},value:N})]})]}),Object(n.jsx)("div",{class:"form-group",children:Object(n.jsx)("p",{class:"btn btn-outline-info",onClick:C,children:"Update"})})]})]})})},T=function(){var t=Object(r.useState)(""),e=Object(d.a)(t,2),c=e[0],a=e[1],s=Object(r.useState)(""),i=Object(d.a)(s,2),j=i[0],O=i[1],p=Object(r.useState)(""),m=Object(d.a)(p,2),v=m[0],g=m[1],w=Object(h.f)(),A=function(){var t=Object(l.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(j===v){t.next=4;break}alert("Password not patch try agane !"),t.next=6;break;case 4:return t.next=6,u()({method:"post",url:"".concat(x,"/api/register/"),headers:f,data:{username:c,password:j}}).then((function(t){t.data.data&&w.push("/login"),alert(t.data.message)}));case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"container my-5 p-5",children:[Object(n.jsx)("h1",{children:"Register"}),Object(n.jsxs)("div",{class:"form-group",children:[Object(n.jsx)("label",{children:"Username"}),Object(n.jsx)("input",{onChange:function(t){return a(t.target.value)},type:"text",class:"form-control",placeholder:"Username"})]}),Object(n.jsxs)("div",{class:"form-group",children:[Object(n.jsx)("label",{children:"Password"}),Object(n.jsx)("input",{onChange:function(t){return O(t.target.value)},type:"password",class:"form-control",placeholder:"Password"})]}),Object(n.jsxs)("div",{class:"form-group",children:[Object(n.jsx)("label",{children:"Confirm Password"}),Object(n.jsx)("input",{onChange:function(t){return g(t.target.value)},type:"password",class:"form-control",placeholder:"Confirm Password"})]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("button",{onClick:A,className:"btn btn-success my-4",children:"Register"}),Object(n.jsx)(b.b,{to:"/login",children:"Login Now"})]})]})},R=function(){var t=g(),e=Object(d.a)(t,2),c=e[0],a=c.profile,s=c.reloadpage,i=e[1],j=window.localStorage.getItem("token");return Object(r.useEffect)((function(){null!==j&&function(){var t=Object(l.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u()({method:"get",url:"".concat(x,"/api/profile/"),headers:{Authorization:"token ".concat(j)}}).then((function(t){var e=t.data.data;i({type:"ADD_PROFILE",profile:e})})).catch((function(t){i({type:"ADD_PROFILE",profile:null})}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[s]),Object(r.useEffect)((function(){null!==a&&function(){var t=Object(l.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u()({method:"get",url:"".concat(x,"/api/cart/"),headers:{Authorization:"token ".concat(j)}}).then((function(t){var e=[];null===t||void 0===t||t.data.map((function(t){t.complit?(e.push(t),i({type:"ADD_CARTPRODUCT_COMPLIT",cartproduct_complit:e})):i({type:"ADD_CARTPRODUCT_UNCOMPLIT",cartproductf_uncomplit:t})}))}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[s]),Object(n.jsxs)(b.a,{children:[Object(n.jsx)(D,{}),Object(n.jsxs)(h.c,{children:[Object(n.jsx)(h.a,{exact:!0,path:"/",component:y}),Object(n.jsx)(h.a,{exact:!0,path:"/product/:id",component:S}),Object(n.jsx)(h.a,{exact:!0,path:"/categori/:id",component:k}),null!==a?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(h.a,{exact:!0,path:"/profile",component:E}),Object(n.jsx)(h.a,{exact:!0,path:"/cart",component:w}),Object(n.jsx)(h.a,{exact:!0,path:"/order",component:P}),Object(n.jsx)(h.a,{exact:!0,path:"/oldorders",component:_}),Object(n.jsx)(h.a,{exact:!0,path:"/oldorders/:id",component:C})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(h.a,{exact:!0,path:"/login",component:N}),Object(n.jsx)(h.a,{exact:!0,path:"/register",component:T})]}),Object(n.jsx)(h.a,{exact:!0,component:y})]})]})},L=c(13),I=function(t,e){switch(e.type){case"ADD_PROFILE":return Object(L.a)(Object(L.a)({},t),{},{profile:e.profile});case"ADD_CART":return Object(L.a)(Object(L.a)({},t),{},{carts:e.carts});case"ADD_CARTPRODUCT_COMPLIT":return Object(L.a)(Object(L.a)({},t),{},{cartproduct_complit:e.cartproduct_complit});case"ADD_CARTPRODUCT_UNCOMPLIT":return Object(L.a)(Object(L.a)({},t),{},{cartproductf_uncomplit:e.cartproductf_uncomplit});case"ADD_RELOADPAGE_DATA":return Object(L.a)(Object(L.a)({},t),{},{reloadpage:e.reloadpage});default:return t}};s.a.render(Object(n.jsx)(v,{initialstate:{profile:null,carts:null,cartproduct_complit:null,cartproductf_uncomplit:null,reloadpage:null},reducer:I,children:Object(n.jsx)(R,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.7f8055e1.chunk.js.map