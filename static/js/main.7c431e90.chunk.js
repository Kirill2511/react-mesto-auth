(this["webpackJsonpreact-mesto-auth"]=this["webpackJsonpreact-mesto-auth"]||[]).push([[0],{31:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),c=n.n(s),i=n(20),o=n.n(i),r=n(7),l=(n(31),n(24)),u=n(2),p=n(3),d=n.p+"static/media/logo.c2821b38.svg";var j=function(e){var t=e.loggingIn,n=e.userEmail,s=e.onSignOut;return Object(a.jsxs)("header",{className:"header",children:[Object(a.jsx)("img",{alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \xabMesto Russia\xbb",className:"header__logo",src:d}),Object(a.jsxs)("div",{className:"header__section",children:[t&&Object(a.jsxs)(p.b,{exact:!0,path:"/",children:[Object(a.jsx)("p",{className:"header__email",children:n}),Object(a.jsx)(r.b,{to:"/signin",className:"header__button-logout",onClick:s,children:"\u0412\u044b\u0439\u0442\u0438"})]}),Object(a.jsx)(p.b,{path:"/singin",children:Object(a.jsx)(r.b,{to:"/signup",className:"header__link",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(a.jsx)(p.b,{path:"/signup",children:Object(a.jsx)(r.b,{to:"/signin",className:"header__link",children:"\u0412\u0445\u043e\u0434"})})]})]})},h=n.p+"static/media/avatar.bbe7c5b6.jpg",b=c.a.createContext();var m=function(e){var t=c.a.useContext(b),n=e.card.owner._id===t._id,s="element__delete ".concat(n?"":"element__delete_invisible"),i=e.card.likes.some((function(e){return e._id===t._id})),o="element__heart ".concat(i?"element__heart_active":"");return Object(a.jsxs)("li",{className:"element",children:[Object(a.jsx)("button",{"aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",className:s,name:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",type:"submit",onClick:function(){e.onCardDelete(e.card)}}),Object(a.jsx)("img",{src:e.card.link,alt:e.card.name,className:"element__image",onClick:function(){e.onCardClick(e.card)}}),Object(a.jsxs)("div",{className:"element__container",children:[Object(a.jsx)("h2",{className:"element__title",children:e.card.name}),Object(a.jsxs)("div",{className:"element__container_like",children:[Object(a.jsx)("button",{"aria-label":"\u041b\u0430\u0439\u043a",className:o,name:"\u041b\u0430\u0439\u043a",type:"submit",onClick:function(){e.onCardLike(e.card)}}),Object(a.jsx)("p",{className:"card__count-likes",children:e.card.likes.length})]})]})]})};var _=function(e){var t=c.a.useContext(b);return Object(a.jsxs)("main",{className:"content",children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsx)("button",{className:"button profile__edit-avatar",type:"button",onClick:e.onEditAvatar,children:Object(a.jsx)("img",{alt:"\u0436\u0430\u043a-\u0438\u0432",className:"profile__avatar",srcSet:t.avatar,src:h})}),Object(a.jsxs)("div",{className:"profile__info",children:[Object(a.jsxs)("div",{className:"profile__wrapper",children:[Object(a.jsx)("h1",{className:"profile__title",children:t.name}),Object(a.jsx)("button",{"aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",className:"profile__edit-button",type:"button",onClick:e.onEditProfile})]}),Object(a.jsx)("p",{className:"profile__subtitle",children:t.about})]}),Object(a.jsx)("button",{"aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",className:"profile__add-button",type:"button",onClick:e.onAddPlace})]}),Object(a.jsx)("section",{className:"elements",children:Object(a.jsx)("ul",{className:"elements__container",children:e.cards.map((function(t){return Object(a.jsx)(m,{card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})})]})};var f=function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})};var O=function(e){var t=e.card,n=e.onClose;return Object(a.jsx)("div",{className:"popup popup_card-image ".concat(t&&"popup_opened"),children:Object(a.jsxs)("div",{className:"popup__gallery",children:[Object(a.jsx)("img",{src:t&&t.link,alt:t&&t.name,className:"popup__image"}),Object(a.jsx)("h2",{className:"popup__card-about",children:t&&t.name}),Object(a.jsx)("button",{"aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",className:"popup__close-icon",type:"button",onClick:n})]})})},g=n(22),x=n(23),v=new(function(){function e(t){Object(g.a)(this,e),this.url=t.url,this.headers=t.headers}return Object(x.a)(e,[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this.url,"/cards"),{headers:this.headers}).then((function(t){return e._getResponseData(t)}))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this.url,"/users/me"),{method:"GET",headers:this.headers}).then((function(t){return e._getResponseData(t)}))}},{key:"postNewCard",value:function(e){var t=this;return fetch("".concat(this.url,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify(e)}).then((function(e){return t._getResponseData(e)}))}},{key:"setUserInfo",value:function(e){var t=this;return fetch("".concat(this.url,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return t._getResponseData(e)}))}},{key:"setUserAvatar",value:function(e){var t=this;return fetch("".concat(this.url,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return t._getResponseData(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this.url,"/cards/").concat(e),{method:"DELETE",headers:this.headers}).then((function(e){return t._getResponseData(e)}))}},{key:"likeCard",value:function(e){var t=this;return fetch("".concat(this.url,"/cards/likes/").concat(e),{method:"PUT",headers:this.headers}).then((function(e){return t._getResponseData(e)}))}},{key:"dislikeCard",value:function(e){var t=this;return fetch("".concat(this.url,"/cards/likes/").concat(e),{method:"DELETE",headers:this.headers}).then((function(e){return t._getResponseData(e)}))}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-16",headers:{authorization:"4a48037a-5d1b-4b03-8646-b4d3a5383564","Content-Type":"application/json"}});var N=function(e){return Object(a.jsx)("div",{className:"popup popup__".concat(e.name," ").concat(e.isOpen?"popup_opened":""),children:Object(a.jsxs)("div",{className:"popup__container",children:[Object(a.jsx)("button",{"aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",className:"popup__close-icon popup__close",type:"button",onClick:e.onClose}),Object(a.jsx)("h2",{className:"popup__title",children:e.title}),Object(a.jsx)("form",{className:"popup__fields popup__form-avatar",name:"".concat(e.name),onSubmit:e.onSubmit,action:"#",noValidate:!0,children:e.children})]})})};var C=function(e){return Object(a.jsx)("button",{type:"submit",className:"popup__button",children:e.onClick?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":e.button})};var k=function(e){var t=c.a.useRef("");return Object(a.jsxs)(N,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:e.isOpen,onClose:e.isClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})},children:[Object(a.jsxs)("label",{className:"popup__label",children:[Object(a.jsx)("input",{className:"popup__item popup__input_avatar-link",ref:t,id:"link-avatar",name:"avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,type:"url"}),Object(a.jsx)("span",{className:"popup__input-error",id:"link-avatar-error"})]}),Object(a.jsx)(C,{button:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onClick:e.isLoading})]})};var y=function(e){var t=c.a.useState(""),n=Object(u.a)(t,2),s=n[0],i=n[1],o=c.a.useState(""),r=Object(u.a)(o,2),l=r[0],p=r[1],d=c.a.useContext(b);return c.a.useEffect((function(){i(d.name),p(d.about)}),[d]),Object(a.jsxs)(N,{name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:e.isOpen,onClose:e.isClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:s,about:l})},children:[Object(a.jsxs)("label",{className:"popup__label",children:[Object(a.jsx)("input",{value:s||"",onChange:function(e){i(e.target.value)},className:"popup__item popup__name",id:"name-input",maxLength:"40",minLength:"2",name:"name",placeholder:"\u0418\u043c\u044f",required:!0,type:"text"}),Object(a.jsx)("span",{className:"popup__input-error",id:"name-input-error"})]}),Object(a.jsxs)("label",{className:"popup__label",children:[Object(a.jsx)("input",{value:l||"",onChange:function(e){p(e.target.value)},className:"popup__item popup__about",id:"activity-input",maxLength:"200",minLength:"2",name:"about",placeholder:"\u041e\u0431\u043e \u043c\u043d\u0435",required:!0,type:"text"}),Object(a.jsx)("span",{className:"popup__input-error",id:"activity-input-error"}),";"]}),Object(a.jsx)(C,{button:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onClick:e.isLoading})]})};var S=function(e){return Object(a.jsx)(N,{name:"delete",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",isOpen:e.isOpen,onClose:e.isClose,onSubmit:function(t){t.preventDefault(),e.onDelete()},children:Object(a.jsx)("button",{"aria-label":"\u0414\u0430",className:"popup__button popup__button_card-delete",name:"submit",type:"submit",children:e.isLoading?"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435...":"\u0414\u0430"})})};var w=function(e){var t=c.a.useState(""),n=Object(u.a)(t,2),s=n[0],i=n[1],o=c.a.useState(""),r=Object(u.a)(o,2),l=r[0],p=r[1];return Object(a.jsxs)(N,{name:"add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:e.isOpen,onClose:e.isClose,onSubmit:function(t){t.preventDefault(),e.postNewCard({name:s,link:l})},children:[Object(a.jsxs)("label",{className:"popup__label",children:[Object(a.jsx)("input",{value:s||"",onChange:function(e){i(e.target.value)},id:"title-input",className:"popup__item popup__input-name",type:"text",name:"title",required:!0,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"1",maxLength:"30",autoComplete:"off"}),Object(a.jsx)("span",{className:"popup__input-error",id:"place-input-error"})]}),Object(a.jsxs)("label",{className:"popup__label",children:[Object(a.jsx)("input",{value:l||"",onChange:function(e){p(e.target.value)},className:"popup__item popup__input-url",id:"link-input",type:"url",name:"url",required:!0,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",autoComplete:"off"}),Object(a.jsx)("span",{className:"popup__input-error",id:"link-input-error"})]}),Object(a.jsx)(C,{button:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",onClick:e.isLoading})]})},E=n(11),L=n(9);var D=function(e){var t=e.onLogin,n=c.a.useState({email:"",password:""}),s=Object(u.a)(n,2),i=s[0],o=s[1],l=function(e){var t=e.target,n=t.name,a=t.value;o(Object(L.a)(Object(L.a)({},i),{},Object(E.a)({},n,a)))};return Object(a.jsx)("section",{className:"auth",children:Object(a.jsxs)("div",{className:"auth-container",children:[Object(a.jsx)("h3",{className:"auth__title",children:"\u0412\u0445\u043e\u0434"}),Object(a.jsxs)("form",{className:"auth__form",onSubmit:function(e){e.preventDefault();var n=i.email,a=i.password;t(n,a)},children:[Object(a.jsx)("input",{onChange:l,className:"auth__input",id:"email",name:"email",placeholder:"Email",autoComplete:"off",value:i.email}),Object(a.jsx)("input",{onChange:l,className:"auth__input",id:"password",name:"password",placeholder:"Password",type:"password",value:i.password}),Object(a.jsx)("button",{className:"auth__button-submit",type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"}),Object(a.jsx)("div",{className:"auth__container-register",children:Object(a.jsxs)("p",{className:"auth__register",children:["\u0415\u0449\u0435 \u043d\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",Object(a.jsx)(r.b,{to:"/signup",className:"auth__link",children:"\xa0\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})})]})]})})};var P=function(e){var t=e.onRegister,n=c.a.useState({email:"",password:""}),s=Object(u.a)(n,2),i=s[0],o=s[1],l=function(e){var t=e.target,n=t.name,a=t.value;o(Object(L.a)(Object(L.a)({},i),{},Object(E.a)({},n,a)))};return Object(a.jsx)("section",{className:"auth",children:Object(a.jsxs)("div",{className:"auth__container",children:[Object(a.jsx)("h3",{className:"auth__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(a.jsxs)("form",{className:"auth__form",onSubmit:function(e){e.preventDefault();var n=i.email,a=i.password;t(n,a)},children:[Object(a.jsx)("input",{onChange:l,className:"auth__input",id:"email",name:"email",placeholder:"Email",autoComplete:"off",value:i.email}),Object(a.jsx)("input",{className:"auth__input",onChange:l,id:"password",name:"password",placeholder:"Password",type:"password",value:i.password}),Object(a.jsx)("button",{className:"auth__button-submit",type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(a.jsx)("div",{className:"auth__container-register",children:Object(a.jsxs)("p",{className:"auth__register",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",Object(a.jsx)(r.b,{to:"/signin",className:"auth__link",children:"\xa0\u0412\u043e\u0439\u0442\u0438"})]})})]})]})})};var I=function(e){var t=e.onClose,n=e.isOpen,s=e.image,c=e.message;return Object(a.jsx)("section",{className:"popup popup__tooltip ".concat(n&&"popup_opened"),children:Object(a.jsxs)("div",{className:"popup__container",children:[Object(a.jsx)("img",{className:"popup__tooltip",src:s,alt:"\u0421\u0442\u0430\u0442\u0443\u0441"}),Object(a.jsx)("h2",{className:"popup__tooltip-message",children:c}),Object(a.jsx)("button",{"aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",className:"popup__close-icon",type:"button",onClick:t})]})})},T="https://auth.nomoreparties.co",A=function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))},R=n(25),U=function(e){var t=e.loggingIn,n=Object(R.a)(e,["loggingIn"]);return Object(a.jsx)(p.b,{children:function(){return!0===t?Object(a.jsx)(p.b,Object(L.a)({},n)):Object(a.jsx)(p.a,{to:"/signin"})}})},J=n.p+"static/media/authSuccess.1b6082f8.svg",q=n.p+"static/media/authError.df8eddf6.svg";var F=function(){var e=c.a.useState(!1),t=Object(u.a)(e,2),n=t[0],s=t[1],i=c.a.useState(!1),o=Object(u.a)(i,2),r=o[0],d=o[1],h=c.a.useState(!1),m=Object(u.a)(h,2),g=m[0],x=m[1],N=c.a.useState(!1),C=Object(u.a)(N,2),E=C[0],L=C[1],R=c.a.useState(null),F=Object(u.a)(R,2),B=F[0],M=F[1],z=c.a.useState(!1),G=Object(u.a)(z,2),H=G[0],V=G[1],K=c.a.useState(null),Q=Object(u.a)(K,2),W=Q[0],X=Q[1],Y=c.a.useState(!1),Z=Object(u.a)(Y,2),$=Z[0],ee=Z[1],te=c.a.useState({}),ne=Object(u.a)(te,2),ae=ne[0],se=ne[1],ce=c.a.useState([]),ie=Object(u.a)(ce,2),oe=ie[0],re=ie[1],le=c.a.useState(!1),ue=Object(u.a)(le,2),pe=ue[0],de=ue[1],je=c.a.useState(""),he=Object(u.a)(je,2),be=he[0],me=he[1],_e=c.a.useState(!1),fe=Object(u.a)(_e,2),Oe=fe[0],ge=fe[1],xe=c.a.useState(""),ve=Object(u.a)(xe,2),Ne=ve[0],Ce=ve[1],ke=c.a.useState(""),ye=Object(u.a)(ke,2),Se=ye[0],we=ye[1],Ee=Object(p.g)();function Le(){d(!1),x(!1),L(!1),ee(!1),V(!1),X(null),M(null),ge(!1)}function De(e){"Escape"===e.key&&Le()}function Pe(e){e.target.classList.contains("popup")&&Le()}return c.a.useEffect((function(){var e=localStorage.getItem("token");e&&function(e){return fetch("".concat(T,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(A)}(e).then((function(e){e.data.email&&(me(e.data.email),de(!0),Ee.push("/"))})).catch((function(e){400===e&&console.log("\u0422\u043e\u043a\u0435\u043d \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u0438\u043b\u0438 \u043d\u0435 \u0432\u0435\u0440\u0435\u043d"),401===e&&console.log("\u0422\u043e\u043a\u0435\u043d \u043d\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u0435\u043d")}))})),c.a.useEffect((function(){return document.addEventListener("keydown",De),document.addEventListener("click",Pe),function(){document.removeEventListener("keydown",De),document.removeEventListener("click",Pe)}})),c.a.useEffect((function(){Promise.all([v.getInitialCards(),v.getUserInfo()]).then((function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1];se(a),re(n)})).catch((function(e){return console.log(e)}))}),[]),Object(a.jsx)(b.Provider,{value:ae,children:Object(a.jsxs)("div",{className:"page",children:[Object(a.jsx)(j,{loggingIn:pe,userEmail:be,onSignOut:function(){localStorage.removeItem("token"),de(!1),me(""),Ee.push("/singin")}}),Object(a.jsxs)(p.d,{children:[Object(a.jsx)(U,{exact:!0,path:"/",loggingIn:pe,children:Object(a.jsx)(_,{cards:oe,onEditAvatar:function(){x(!0)},onEditProfile:function(){d(!0)},onAddPlace:function(){L(!0)},onCardClick:function(e){ee(!0),X(e)},onCardLike:function(e){e.likes.some((function(e){return e._id===ae._id}))?v.dislikeCard(e._id).then((function(t){var n=oe.map((function(n){return n._id===e._id?t:n}));re(n)})).catch((function(e){console.log(e)})):v.likeCard(e._id).then((function(t){var n=oe.map((function(n){return n._id===e._id?t:n}));re(n)})).catch((function(e){console.log(e)}))},onCardDelete:function(e){V(!0),M(e)}})}),Object(a.jsx)(p.b,{path:"/singin",children:Object(a.jsx)(D,{onLogin:function(e,t){(function(e,t){return fetch("".concat(T,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(A)})(e,t).then((function(t){t.token&&(localStorage.setItem("token",t.token),de(!0),me(e),Ee.push("/"))})).catch((function(e){ge(!0),Ce(q),we("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."),"\u041e\u0448\u0438\u0431\u043a\u0430: 400"===e?console.log("\u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439"):"\u041e\u0448\u0438\u0431\u043a\u0430: 401"===e&&console.log("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 \u0434\u0430\u043d\u043d\u044b\u043c email \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d")}))}})}),Object(a.jsx)(p.b,{path:"/signup",children:Object(a.jsx)(P,{onRegister:function(e,t){(function(e,t){return fetch("".concat(T,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(A)})(e,t).then((function(e){e.data.email&&(ge(!0),Ce(J),de(!0),we("\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"),Ee.push("/signin"))})).catch((function(e){ge(!0),Ce(q),we("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a!  \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."),"\u041e\u0448\u0438\u0431\u043a\u0430: 400"===e&&console.log("\u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u044b \u0434\u0430\u043d\u043d\u044b\u0435")}))}})}),Object(a.jsx)(p.b,{children:pe?Object(a.jsx)(p.a,{to:"/"}):Object(a.jsx)(p.a,{to:"/singin"})})]}),pe&&Object(a.jsx)(f,{}),Object(a.jsx)(k,{isOpen:g,isClose:Le,onUpdateAvatar:function(e){s(!0),v.setUserAvatar(e).then((function(e){se(e),Le()})).catch((function(e){console.log(e)})).finally((function(){s(!1)}))},isLoading:n}),Object(a.jsx)(y,{isOpen:r,isClose:Le,onUpdateUser:function(e){s(!0),v.setUserInfo(e).then((function(e){se(e),Le()})).catch((function(e){console.log(e)})).finally((function(){s(!1)}))},isLoading:n}),Object(a.jsx)(w,{isOpen:E,isClose:Le,postNewCard:function(e){s(!0),v.postNewCard(e).then((function(e){return re([e].concat(Object(l.a)(oe)))})).catch((function(e){return console.log(e)})).finally((function(){s(!1),Le()}))},isLoading:n}),Object(a.jsx)(S,{isOpen:H,isClose:Le,onDelete:function(){s(!0),v.deleteCard(B._id).then((function(){var e=oe.filter((function(e){return e._id!==B._id}));re(e),Le()})).catch((function(e){console.log(e)})).finally((function(){s(!1)}))},card:B,isLoading:n}),Object(a.jsx)(O,{isOpen:$,onClose:Le,card:W}),Object(a.jsx)(I,{isOpen:Oe,onClose:Le,image:Ne,message:Se,loggingIn:pe})]})})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(r.a,{children:Object(a.jsx)(F,{})})}),document.getElementById("root")),B()}},[[37,1,2]]]);
//# sourceMappingURL=main.7c431e90.chunk.js.map