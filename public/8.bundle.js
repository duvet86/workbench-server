(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./src/pagebuilder/PagebuilderContainer.tsx":function(e,a,t){"use strict";t.r(a);var n=t("./node_modules/react/index.js"),o=t.n(n),l=t("./node_modules/@material-ui/core/styles/index.js"),s=t("./node_modules/@material-ui/core/Grid/index.js"),c=t.n(s),i=t("./node_modules/@material-ui/core/BottomNavigation/index.js"),r=t.n(i),d=t("./node_modules/@material-ui/core/BottomNavigationAction/index.js"),m=t.n(d),u=t("./src/common/icons.ts");var h=Object(l.withStyles)(e=>Object(l.createStyles)({bottomNavContainer:{position:"fixed",bottom:0},bodyContainer:{padding:25},actionRoot:{"&$selected":{color:e.palette.secondary.main}},selected:{}}))(({classes:e,handleChange:a,value:t})=>o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{container:!0,className:e.bodyContainer},o.a.createElement(c.a,{item:!0,xs:12},0===t&&"Pagebuilder Placeholder",1===t&&"Dataview Placeholder")),o.a.createElement("div",{className:e.bottomNavContainer},o.a.createElement(r.a,{value:t,onChange:a,showLabels:!0},o.a.createElement(m.a,{classes:{root:e.actionRoot,selected:e.selected},label:"Dataview",icon:o.a.createElement(u.a,null)}),o.a.createElement(m.a,{classes:{root:e.actionRoot,selected:e.selected},label:"Workbench",icon:o.a.createElement(u.b,null)})))));t.d(a,"default",function(){return b});class b extends n.Component{constructor(){super(...arguments),this.state={value:0},this.handleChange=((e,a)=>{this.setState({value:a})})}render(){const{value:e}=this.state;return o.a.createElement(h,{value:e,handleChange:this.handleChange})}}}}]);
//# sourceMappingURL=8.bundle.js.map