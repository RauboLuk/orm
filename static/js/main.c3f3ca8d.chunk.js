(this.webpackJsonporm=this.webpackJsonporm||[]).push([[0],{27:function(e,s,r){},28:function(e,s,r){},29:function(e,s,r){},37:function(e,s,r){"use strict";r.r(s);var a=r(0),t=r.n(a),i=r(20),n=r.n(i),c=(r(27),r(13)),o=r(3),l=(r(28),r.p+"static/media/logo.6ce24c58.svg"),d=(r(29),r(1)),j=function(){return Object(d.jsx)("header",{className:"Header",children:Object(d.jsx)("img",{src:l,className:"Header__logo",alt:"logo",width:"200px","data-testid":"logo"})})},m=r(5),b=r(9),p=r(15),u=r(11),O=Object(u.a)({email:Object(u.b)().email("Invalid email address"),password:Object(u.b)().nonempty("Password is required")}),h=function(){var e,s,r=Object(b.d)({resolver:Object(p.a)(O)}),a=r.register,t=r.formState.errors,i=r.handleSubmit;return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{className:"container__title",children:"Sign in"}),Object(d.jsxs)("form",{className:"form",onSubmit:i((function(e){console.log(e),alert("OK")})),children:[Object(d.jsxs)("div",{className:"form__input",children:[Object(d.jsx)("label",{htmlFor:"email",children:"E-mail address"}),Object(d.jsx)("input",Object(m.a)(Object(m.a)({type:"email",id:"email",placeholder:"Enter your email address..."},a("email")),{},{required:!0})),Object(d.jsx)("p",{className:"input__error",children:null===(e=t.email)||void 0===e?void 0:e.message})]}),Object(d.jsxs)("div",{className:"form__input",children:[Object(d.jsx)("label",{htmlFor:"password",children:"Password"}),Object(d.jsx)("input",Object(m.a)(Object(m.a)({type:"password",id:"password",placeholder:"Enter your password..."},a("password")),{},{required:!0})),Object(d.jsx)("p",{className:"input__error",children:null===(s=t.password)||void 0===s?void 0:s.message})]}),Object(d.jsx)("button",{className:"form__continue",type:"submit",children:"Continue"})]}),Object(d.jsxs)("p",{className:"container__footer",children:["Not out member yet?"," ",Object(d.jsx)(c.b,{className:"underline",to:"/signUp",children:"Click here to create new account"})]})]})},x=Object(u.a)({email:Object(u.b)().nonempty("Email is required").email("Invalid email address"),name:Object(u.b)().nonempty("Full name is required").regex(/\S+( +\S+)+/,"Missing last name"),password:Object(u.b)().nonempty("Password is required").min(8,"Password is too short"),passwordConfirmation:Object(u.b)().nonempty("Please confirm your password")}).refine((function(e){return e.password===e.passwordConfirmation}),{message:"Please confirm your password",path:["passwordConfirmation"]}),f=function(){var e,s,r,a,t=Object(b.d)({resolver:Object(p.a)(x)}),i=t.register,n=t.formState.errors,o=t.handleSubmit;return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{className:"container__title",children:"Sign up"}),Object(d.jsxs)("form",{className:"form",onSubmit:o((function(e){console.log(e),alert("OK")})),children:[Object(d.jsxs)("div",{className:"form__input",children:[Object(d.jsx)("label",{htmlFor:"email",children:"E-mail address"}),Object(d.jsx)("input",Object(m.a)(Object(m.a)({type:"email",id:"email",placeholder:"Enter your email address..."},i("email")),{},{required:!0})),Object(d.jsx)("p",{className:"input__error",children:null===(e=n.email)||void 0===e?void 0:e.message})]}),Object(d.jsxs)("div",{className:"form__input",children:[Object(d.jsx)("label",{htmlFor:"name",children:"Full name"}),Object(d.jsx)("input",Object(m.a)(Object(m.a)({type:"text",id:"name",placeholder:"Enter your full name..."},i("name")),{},{required:!0})),Object(d.jsx)("p",{className:"input__error",children:null===(s=n.name)||void 0===s?void 0:s.message})]}),Object(d.jsxs)("div",{className:"form__input",children:[Object(d.jsx)("label",{htmlFor:"password","data-testid":"passwordLabel",children:"Password"}),Object(d.jsx)("input",Object(m.a)(Object(m.a)({type:"password",id:"password",placeholder:"Enter your password..."},i("password")),{},{required:!0,"data-testid":"passwordInput"})),Object(d.jsx)("p",{className:"input__error",children:null===(r=n.password)||void 0===r?void 0:r.message})]}),Object(d.jsxs)("div",{className:"form__input",children:[Object(d.jsx)("label",{htmlFor:"password",children:"Confirm your password"}),Object(d.jsx)("input",Object(m.a)(Object(m.a)({type:"password",id:"passwordConfirmation",placeholder:"Confirm your password..."},i("passwordConfirmation")),{},{required:!0})),Object(d.jsx)("p",{className:"input__error",children:null===(a=n.passwordConfirmation)||void 0===a?void 0:a.message})]}),Object(d.jsx)("button",{className:"form__continue",type:"submit",children:"Continue"})]}),Object(d.jsxs)("p",{className:"container__footer",children:["Already using our app?"," ",Object(d.jsx)(c.b,{className:"underline",to:"/signIn",children:"Click here to sign in"})]})]})};var w=function(){return Object(d.jsx)(c.a,{children:Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(j,{}),Object(d.jsx)("main",{className:"content",children:Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{path:"/signUp",children:Object(d.jsx)(f,{})}),Object(d.jsx)(o.a,{path:"/",children:Object(d.jsx)(h,{})})]})})]})})};n.a.render(Object(d.jsx)(t.a.StrictMode,{children:Object(d.jsx)(w,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.c3f3ca8d.chunk.js.map