(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./node_modules/@material-ui/icons/Visibility.js":function(e,t,a){"use strict";var n=a("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("./node_modules/react/index.js")),s=(0,n(a("./node_modules/@material-ui/icons/utils/createSvgIcon.js")).default)(o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),o.default.createElement("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"})),"Visibility");t.default=s},"./node_modules/@material-ui/icons/VisibilityOff.js":function(e,t,a){"use strict";var n=a("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("./node_modules/react/index.js")),s=(0,n(a("./node_modules/@material-ui/icons/utils/createSvgIcon.js")).default)(o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{fill:"none",d:"M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z"}),o.default.createElement("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"})),"VisibilityOff");t.default=s},"./src/login/LoginContainer.tsx":function(e,t,a){"use strict";a.r(t);var n=a("./node_modules/react/index.js"),o=a.n(n),s=a("./node_modules/react-redux/es/index.js"),r=a("./src/login/actions.ts"),i=a("./src/common/loading/index.ts"),l=a("./src/login/logo.svg"),d=a.n(l),c=a("./node_modules/@material-ui/core/styles/index.js"),m=a("./node_modules/@material-ui/core/Button/index.js"),u=a.n(m),p=a("./node_modules/@material-ui/core/FormControl/index.js"),h=a.n(p),g=a("./node_modules/@material-ui/core/Grid/index.js"),f=a.n(g),w=a("./node_modules/@material-ui/core/IconButton/index.js"),b=a.n(w),j=a("./node_modules/@material-ui/core/Input/index.js"),v=a.n(j),y=a("./node_modules/@material-ui/core/InputAdornment/index.js"),E=a.n(y),x=a("./node_modules/@material-ui/core/InputLabel/index.js"),_=a.n(x),C=a("./node_modules/@material-ui/core/Paper/index.js"),O=a.n(C),P=a("./node_modules/@material-ui/core/Typography/index.js"),M=a.n(P),L=a("./node_modules/@material-ui/icons/Visibility.js"),S=a.n(L),z=a("./node_modules/@material-ui/icons/VisibilityOff.js"),H=a.n(z);var k=Object(c.withStyles)(({spacing:{unit:e}})=>Object(c.createStyles)({"@keyframes appLogoSpin":{from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}},container:{height:"70%"},paper:{padding:3*e},form:{marginTop:3*e},passwordControl:{marginRight:e,marginBottom:3*e},logoContainer:{textAlign:"center"},appLogo:{animation:"appLogoSpin infinite 20s linear",height:"50px"},errorMessage:{marginTop:10,color:"red"}}))(class extends n.Component{constructor(){super(...arguments),this.state={username:"",password:"",showPassword:!1},this.handleChange=(e=>t=>{this.setState({[e]:t.target.value})}),this.handleMouseDownPassword=(e=>{e.preventDefault()}),this.handleClickShowPasssword=(()=>{this.setState({showPassword:!this.state.showPassword})}),this.submitHandler=(e=>{e.preventDefault();const{username:t,password:a}=this.state;this.props.submitHandler(t,a)})}render(){const{classes:e,error:t}=this.props;return o.a.createElement(f.a,{container:!0,alignItems:"center",justify:"center",className:e.container,spacing:0},o.a.createElement(f.a,{item:!0,md:3,xs:11},o.a.createElement(O.a,{className:e.paper},o.a.createElement("div",{className:e.logoContainer},o.a.createElement("img",{src:d.a,className:e.appLogo,alt:"logo"})),o.a.createElement(M.a,{component:"p",align:"center"},"Reactive"),o.a.createElement(M.a,{variant:"headline",component:"h3",align:"center"},"Connected Mine Analitycs"),o.a.createElement("form",{className:e.form,noValidate:!0,onSubmit:this.submitHandler},o.a.createElement(h.a,{fullWidth:!0},o.a.createElement(_.a,{htmlFor:"username"},"User Name"),o.a.createElement(v.a,{id:"username",onChange:this.handleChange("username"),autoComplete:"username"})),o.a.createElement(h.a,{className:e.passwordControl,fullWidth:!0},o.a.createElement(_.a,{htmlFor:"password"},"Password"),o.a.createElement(v.a,{id:"password",type:this.state.showPassword?"text":"password",onChange:this.handleChange("password"),autoComplete:"current-password",endAdornment:o.a.createElement(E.a,{position:"end"},o.a.createElement(b.a,{onClick:this.handleClickShowPasssword,onMouseDown:this.handleMouseDownPassword},this.state.showPassword?o.a.createElement(H.a,null):o.a.createElement(S.a,null)))})),o.a.createElement(u.a,{type:"submit",variant:"raised",color:"secondary",fullWidth:!0},"Login")),t&&o.a.createElement(M.a,{className:e.errorMessage,variant:"subheading"},"Invalid Username or Password"))))}}),D=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&(a[n[o]]=e[n[o]])}return a};t.default=Object(s.connect)(({loginReducer:{isLoading:e,error:t}})=>({isLoading:e,error:t}),e=>({submitHandler:(t,a)=>{e(Object(r.c)(t,a))}}))(class extends n.Component{componentDidMount(){document.body.style.backgroundColor="#eee"}componentWillUnmount(){document.body.style.backgroundColor=null}render(){const e=this.props,{isLoading:t}=e,a=D(e,["isLoading"]);return o.a.createElement(i.c,{isLoading:t},o.a.createElement(k,Object.assign({},a)))}})},"./src/login/logo.svg":function(e,t,a){e.exports=a.p+"ee7cd8ed2dcec943251eb2763684fc6f.svg"}}]);