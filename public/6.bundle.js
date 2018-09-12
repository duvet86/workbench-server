(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./src/workbench/Workbench.tsx":function(e,t,a){"use strict";a.r(t);var n,r=a("./node_modules/react/index.js"),o=a.n(r),l=a("./node_modules/@material-ui/core/styles/index.js"),s=a("./node_modules/react-router-dom/es/Link.js"),i=a("./node_modules/@material-ui/core/Paper/index.js"),c=a.n(i),d=a("./node_modules/@material-ui/core/Toolbar/index.js"),m=a.n(d),u=a("./node_modules/@material-ui/core/Button/index.js"),p=a.n(u),h=a("./node_modules/@material-ui/icons/RestorePage.js"),g=a.n(h),b=a("./node_modules/@material-ui/icons/Save.js"),C=a.n(b),E=a("./node_modules/@material-ui/icons/Share.js"),y=a.n(E),v=a("./node_modules/@material-ui/icons/Undo.js"),S=a.n(v),I=a("./node_modules/@material-ui/icons/Redo.js"),f=a.n(I),w=a("./node_modules/@material-ui/icons/OpenWith.js"),x=a.n(w),j=a("./node_modules/@material-ui/icons/ArrowDownward.js"),O=a.n(j);!function(e){e.NOTSPECIFIED="NotSpecified",e.TEXTVALUE="TextValue",e.BOOLVALUE="BoolValue",e.INTERVALVALUE="Interval",e.INTVALUE="IntValue",e.DOUBLEVALUE="DoubleValue",e.TEXTVALUEWITHLABEL="TextValueWithLabel",e.TEXTVALUEWITHMASK="TextValueWithMask",e.TEXTVALUEWITHORDER="TextValueWithOrder",e.SELECT="Select",e.TEXTINPUTLIST="TextInputList",e.MULTISELECT="MultiSelect"}(n||(n={}));const k=[{id:0,label:"New",IconComponent:g.a},{id:1,label:"Save",IconComponent:C.a},{id:2,label:"Save As",IconComponent:C.a},{id:3,label:"Share",IconComponent:y.a},{id:4,label:"Undo",IconComponent:S.a},{id:5,label:"Redo",IconComponent:f.a},{id:6,label:"Layout",IconComponent:x.a},{id:7,label:"Export Graph",IconComponent:O.a}],T=({className:e,children:t})=>o.a.createElement(s.a,{className:e,to:"/workbench/new"},t);var N=Object(l.withStyles)(({spacing:e})=>Object(l.createStyles)({root:{position:"absolute",right:0,marginRight:10,marginTop:10,zIndex:1},toolBar:{minHeight:0},leftIcon:{fill:"#bdbdbd",marginRight:e.unit}}))(({classes:e})=>o.a.createElement(c.a,{className:e.root},o.a.createElement(m.a,{className:e.toolBar,disableGutters:!0},k.map(({id:t,label:a,IconComponent:n})=>o.a.createElement(p.a,{key:t,size:"small",component:T},o.a.createElement(n,{className:e.leftIcon}),a))))),L=a("./node_modules/react-redux/es/index.js"),R=a("./node_modules/reselect/lib/index.js"),D=a("./src/sidebar/operators/operatorsData.ts");const A=Object(R.createSelector)(e=>e.configSwitchReducer.elementType,e=>e!==D.b.NONE);var _=a("./node_modules/@material-ui/core/Grid/index.js"),P=a.n(_),V=a("./node_modules/@material-ui/core/Drawer/index.js"),M=a.n(V);const Q=Object(R.createSelector)(e=>e.queryConfigReducer.dataServices,e=>e.map(({ItemId:e,Label:t})=>({value:e,label:t})).sort((e,t)=>e.label<t.label?-1:e.label>t.label?1:0)),U=e=>e.queryConfigReducer.elementId,W=e=>e.sessionReducer.queries,q=Object(R.createSelector)(U,W,e=>e.queryConfigReducer.availableColumns,(e,t,a)=>a.filter(a=>!t[e].Columns.map(e=>e.ColumnName).includes(a.ColumnName))),F=Object(R.createSelector)(U,W,(e,t)=>t[e]),B=Object(R.createSelector)(U,W,(e,t)=>t[e].Columns),z=Object(R.createSelector)(U,W,(e,t)=>{const a=t[e];return a.Columns.length>0?[!0,!0,!0,!1]:a.TargetDataViewId?[!0,!1]:[!1]}),G=Object(R.createSelector)(U,W,(e,t)=>t[e].Constraints.map(e=>(function(e){const t=Object.assign({label:e.ColumnName,displayValue:""},e);switch(e.DataType){case n.INTERVALVALUE:t.displayValue=e.Values&&{intervalType:e.Values[0][0],intervalString:e.Values[0][1],intervalLabel:e.Values[0][2]};break;case n.TEXTVALUE:case n.TEXTVALUEWITHLABEL:case n.TEXTVALUEWITHMASK:case n.TEXTVALUEWITHORDER:case n.BOOLVALUE:case n.INTVALUE:case n.DOUBLEVALUE:t.displayValue=e.Values?e.Values[0][0]:"";break;default:t.displayValue=""}return t})(e)));var H=a("./src/common/loading/index.ts"),X=a("./node_modules/@material-ui/core/Card/index.js"),Y=a.n(X),K=a("./node_modules/@material-ui/core/CardHeader/index.js"),$=a.n(K),J=a("./node_modules/@material-ui/core/Avatar/index.js"),Z=a.n(J),ee=a("./node_modules/@material-ui/icons/InfoOutlined.js"),te=a.n(ee),ae=({currentStep:e})=>{let t="",a="";switch(e){case 0:t="Query source",a="Select from the drop down the source of your query.\n        It can be a data source or an existing query.\n        Once you are done go to the next step clicking on the next button.";break;case 1:t="Query columns",a="Each source presents a list of available columns.\n        You can search for a particular column using the search input.\n        Click on a column on the available list to move it to the selected list.\n        To remove a column from the selected list click on it again.";break;case 2:t="Query Constraints",a="Narrow down your data with constraints.\n        Constraints are part of the query you are creating and are not visible outside of it.";break;default:return null}return o.a.createElement(P.a,{item:!0,xs:12},o.a.createElement(Y.a,null,o.a.createElement($.a,{avatar:o.a.createElement(Z.a,null,o.a.createElement(te.a,null)),title:t,subheader:a})))},ne=a("./src/workbench/query/actions.ts"),re=a("./node_modules/@material-ui/core/Typography/index.js"),oe=a.n(re),le=a("./node_modules/@material-ui/core/Stepper/index.js"),se=a.n(le),ie=a("./node_modules/@material-ui/core/Step/index.js"),ce=a.n(ie),de=a("./node_modules/@material-ui/core/StepButton/index.js"),me=a.n(de),ue=Object(l.withStyles)(({spacing:e})=>Object(l.createStyles)({gridTitle:{position:"fixed",width:"99%",backgroundColor:"white",zIndex:2,borderBottom:"1px solid #eee"},titleContainer:{display:"flex",alignItems:"center",marginBottom:2*e.unit},title:{marginRight:2*e.unit},stepper:{padding:0,width:"100%"},stepTitle:{marginTop:85}}))(({classes:e,title:t,stepLabels:a,currentStep:n,completedSteps:l,dispatchGoToStep:s})=>o.a.createElement(r.Fragment,null,o.a.createElement(P.a,{item:!0,xs:12,className:e.gridTitle},o.a.createElement("div",{className:e.titleContainer},o.a.createElement(oe.a,{variant:"title",className:e.title},t)),o.a.createElement(se.a,{classes:{root:e.stepper},nonLinear:!0,activeStep:n},a.map((e,t)=>o.a.createElement(ce.a,{key:e},o.a.createElement(me.a,{onClick:(e=>()=>s(e))(t),disabled:null==l[t],completed:l[t]},e))))),o.a.createElement(P.a,{item:!0,xs:12,className:e.stepTitle},o.a.createElement(oe.a,{variant:"headline"},`Step ${n+1}: ${a[n]}`))));const pe=["Source","Columns","Constraints","Summary"];var he=Object(L.connect)(null,e=>({dispatchGoToStep:t=>e(Object(ne.j)(t))}))(class extends r.Component{render(){const{currentStep:e,completedSteps:t,dispatchGoToStep:a}=this.props;return o.a.createElement(ue,{title:"Configure Query",stepLabels:pe,currentStep:e,completedSteps:t,dispatchGoToStep:a})}}),ge=a("./src/workbench/actions.ts"),be=a("./node_modules/react-virtualized/dist/es/index.js"),Ce=a("./node_modules/@material-ui/core/FormControl/index.js"),Ee=a.n(Ce),ye=a("./node_modules/@material-ui/core/Input/index.js"),ve=a.n(ye),Se=a("./node_modules/@material-ui/core/Menu/index.js"),Ie=a.n(Se),fe=a("./node_modules/@material-ui/core/InputLabel/index.js"),we=a.n(fe),xe=a("./node_modules/@material-ui/core/FormHelperText/index.js"),je=a.n(xe),Oe=a("./node_modules/@material-ui/core/InputAdornment/index.js"),ke=a.n(Oe),Te=a("./node_modules/@material-ui/core/IconButton/index.js"),Ne=a.n(Te),Le=a("./node_modules/@material-ui/core/MenuItem/index.js"),Re=a.n(Le),De=a("./node_modules/@material-ui/core/ListItemIcon/index.js"),Ae=a.n(De),_e=Object(l.withStyles)(({spacing:{unit:e}})=>Object(l.createStyles)({menuItem:{padding:"0 0 0 10px"},labelContainer:{padding:2*e}}))(({classes:e,style:t,OptionsIcon:a,option:n,handleClick:r})=>o.a.createElement(Re.a,{component:"div",style:t,className:e.menuItem,onClick:r},a&&o.a.createElement(Ae.a,null,o.a.createElement(a,null)),o.a.createElement("div",{className:e.labelContainer},n.label))),Pe=Object(l.withStyles)(({spacing:{unit:e}})=>Object(l.createStyles)({labelContainer:{padding:2*e}}))(({classes:e})=>o.a.createElement(oe.a,{color:"textSecondary",className:e.labelContainer},"No items found")),Ve=a("./node_modules/@material-ui/icons/Clear.js"),Me=a.n(Ve);const Qe=()=>o.a.createElement(Pe,null);var Ue=({containerRef:e,inputLabel:t,helperText:a,label:n,options:r,handleInputClick:l,handleInputChange:s,noClear:i,handleClickClearSelected:c,handleMouseDownPassword:d,anchorEl:m,handleClose:u,handleOptionClick:p,OptionsIcon:h})=>o.a.createElement("div",{ref:e},o.a.createElement(Ee.a,{fullWidth:!0},t&&o.a.createElement(we.a,{htmlFor:"select-input"},t),o.a.createElement(ve.a,{fullWidth:!0,value:n,onClick:l,onChange:s,endAdornment:!i&&o.a.createElement(ke.a,{position:"end"},o.a.createElement(Ne.a,{"aria-label":"Clear Selected",onClick:c,onMouseDown:d},o.a.createElement(Me.a,null)))}),o.a.createElement(Ie.a,{disableAutoFocus:!0,disableAutoFocusItem:!0,disableRestoreFocus:!0,MenuListProps:{component:"div",disablePadding:!0},getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},anchorEl:m,open:!!m,onClose:u},e.current&&o.a.createElement(be.b,{width:e.current.offsetWidth,height:0===r.length?45:Math.min(40*r.length,300),rowCount:r.length,rowHeight:40,rowRenderer:((e,t,a)=>({index:n,key:r,style:l})=>{const s=e[n],i=t(s);return o.a.createElement(_e,{key:r,style:l,option:s,handleClick:i,OptionsIcon:a})})(r,p,h),noRowsRenderer:Qe})),a&&o.a.createElement(je.a,null,a)));class We extends o.a.Component{constructor(e){super(e),this.containerRef=o.a.createRef(),this.handleMouseDownPassword=(e=>{e.preventDefault()}),this.handleClickClearSelected=(()=>{this.setState({options:[...this.props.options],label:"",anchorEl:void 0})}),this.handleInputClick=(e=>{this.setState({options:[...this.props.options],anchorEl:e.currentTarget})}),this.handleInputChange=(e=>{this.setState({options:this.props.options.filter(({label:t})=>t.toUpperCase().includes(e.target.value.toUpperCase())),label:e.target.value})}),this.handleOptionClick=(e=>t=>{this.setState({label:e.label,anchorEl:void 0}),this.props.handleChange(e)}),this.handleClose=(()=>{this.setState({anchorEl:void 0})});const t=this.props.options.find(({value:t})=>t===e.value);this.state={anchorEl:void 0,label:t&&t.label||"",options:[...this.props.options]}}render(){const{OptionsIcon:e,inputLabel:t,helperText:a,noClear:n}=this.props,{anchorEl:r,label:l,options:s}=this.state;return o.a.createElement(Ue,{label:l,containerRef:this.containerRef,anchorEl:r,options:s,handleOptionClick:this.handleOptionClick,handleInputClick:this.handleInputClick,handleInputChange:this.handleInputChange,handleClickClearSelected:this.handleClickClearSelected,handleMouseDownPassword:this.handleMouseDownPassword,handleClose:this.handleClose,OptionsIcon:e,inputLabel:t,helperText:a,noClear:n})}}var qe=a("./node_modules/@material-ui/icons/Storage.js"),Fe=a.n(qe);const Be=Object(l.createStyles)({iconColour:{fill:"#003b86"}}),ze=Object(l.withStyles)(Be)(({classes:e})=>o.a.createElement(Fe.a,{className:e.iconColour}));var Ge=({targetDataViewId:e,dataServices:t,handleChangeDataService:a})=>o.a.createElement(We,{OptionsIcon:ze,inputLabel:"Click here to select a source...",value:e,options:t,handleChange:a}),He=Object(L.connect)(e=>({dataServices:Q(e)}),e=>({dispatchDataServicesRequest:()=>e(Object(ne.f)()),dispatchUpdateDataService:(t,a)=>e(Object(ge.q)(t,a))}))(class extends r.Component{constructor(){super(...arguments),this.handleChangeDataService=(e=>{const{elementId:t,dispatchUpdateDataService:a}=this.props;a(t,e.value)})}componentDidMount(){this.props.dispatchDataServicesRequest()}render(){const{targetDataViewId:e,dataServices:t}=this.props;return o.a.createElement(Ge,{targetDataViewId:e,dataServices:t,handleChangeDataService:this.handleChangeDataService})}}),Xe=a("./node_modules/@material-ui/core/List/index.js"),Ye=a.n(Xe),Ke=a("./node_modules/@material-ui/core/ListItem/index.js"),$e=a.n(Ke),Je=a("./node_modules/@material-ui/core/ListItemText/index.js"),Ze=a.n(Je),et=a("./node_modules/@material-ui/icons/SettingsApplications.js"),tt=a.n(et);const at=Object(l.createStyles)({iconColour:{fill:"#003b86"},listItem:{paddingLeft:15},listItemText:{display:"flex"},listItemTextPrimary:{flexBasis:"35%"}});var nt=Object(l.withStyles)(at)(({classes:e,style:t,option:a,handleClick:n})=>o.a.createElement($e.a,{divider:!0,style:t,onClick:n,disableGutters:!0,dense:!0,button:!0,className:e.listItem,ContainerComponent:"div"},o.a.createElement(Ae.a,null,o.a.createElement(tt.a,{className:e.iconColour})),o.a.createElement(Ze.a,{classes:{primary:e.listItemTextPrimary},className:e.listItemText,primary:a.label})));const rt=Object(l.createStyles)({list:{height:"100%"},paper:{padding:10}}),ot=()=>o.a.createElement(Pe,null);var lt=Object(l.withStyles)(rt)(({classes:e,label:t,totItems:a,searchableItems:n,searchString:r,handleItemClick:l,handleChange:s,handleClickClearIcon:i})=>o.a.createElement(c.a,{className:e.paper},o.a.createElement(oe.a,{variant:"subheading"},`${t} (${a})`),o.a.createElement(Ye.a,{className:e.list,component:"div",disablePadding:!0},o.a.createElement(Ee.a,{fullWidth:!0},o.a.createElement(we.a,null,"Search"),o.a.createElement(ve.a,{value:r,onChange:s,disabled:0===n.length,endAdornment:o.a.createElement(ke.a,{position:"end"},o.a.createElement(Ne.a,{"aria-label":"Clear",onClick:i,onMouseDown:i},r?o.a.createElement(Me.a,null):null))})),o.a.createElement(be.a,{disableHeight:!0},({width:e})=>o.a.createElement(be.b,{width:e,height:245,rowCount:n.length,rowHeight:41,rowRenderer:((e,t)=>({index:a,key:n,style:r})=>{const l=e[a],s=t(l);return o.a.createElement(nt,{key:n,style:r,option:l,handleClick:s})})(n,l),noRowsRenderer:ot})))));const st=e=>e.searchString,it=(e,t)=>t.items;class ct extends r.Component{constructor(){super(...arguments),this.state={searchString:""},this.filterList=Object(R.createSelector)(st,it,(e,t)=>t.filter(t=>t.label.includes(e))),this.handleClickClearIcon=(()=>{this.setState({searchString:""})}),this.handleChange=(e=>{this.setState({searchString:e.target.value})})}render(){const{label:e,handleItemClick:t}=this.props,{searchString:a}=this.state,n=this.filterList(this.state,this.props);return o.a.createElement(lt,{label:e,totItems:n.length,searchableItems:n,searchString:a,handleItemClick:t,handleChange:this.handleChange,handleClickClearIcon:this.handleClickClearIcon})}}var dt=a("./node_modules/@material-ui/icons/KeyboardArrowLeft.js"),mt=a.n(dt),ut=a("./node_modules/@material-ui/icons/KeyboardArrowRight.js"),pt=a.n(ut),ht=Object(l.withStyles)(({spacing:{unit:e}})=>Object(l.createStyles)({listContainer:{position:"relative"},button:{position:"absolute",right:2*e,top:2*e}}))(({classes:e,availableColumns:t,selectedColumns:a,handleAddQueryColumn:n,handleRemoveQueryColumn:r})=>o.a.createElement(P.a,{container:!0,spacing:16},o.a.createElement(P.a,{item:!0,xs:6,className:e.listContainer},t.length>0&&o.a.createElement(p.a,{variant:"outlined",color:"secondary",className:e.button},"Add All Columns",o.a.createElement(pt.a,null)),o.a.createElement(ct,{label:"Available Columns",items:t,handleItemClick:n})),o.a.createElement(P.a,{item:!0,xs:6,className:e.listContainer},a.length>0&&o.a.createElement(p.a,{variant:"outlined",className:e.button},o.a.createElement(mt.a,null),"Remove All Columns"),o.a.createElement(ct,{label:"Selected Columns",items:a,handleItemClick:r}))));const gt=e=>e.availableColumns,bt=e=>e.selectedColumns;var Ct=Object(L.connect)(e=>({availableColumns:q(e),selectedColumns:B(e)}),e=>({dispatchAddQueryColumn:(t,a)=>e(Object(ge.h)(t,a)),dispatchRemoveQueryColumn:(t,a)=>e(Object(ge.l)(t,a))}))(class extends r.Component{constructor(){super(...arguments),this.availableColumnOptions=Object(R.createSelector)(gt,e=>e.map(e=>({label:e.Label,value:e.ColumnName}))),this.selectedColumnOptions=Object(R.createSelector)(bt,e=>e.map(e=>({label:e.Label,value:e.ColumnName}))),this.handleAddQueryColumn=(({value:e,label:t})=>a=>{const{elementId:n,dispatchAddQueryColumn:r}=this.props;r(n,{ColumnName:e,Label:t,Aggregation:"None"})}),this.handleRemoveQueryColumn=(({value:e})=>t=>{const{elementId:a,dispatchRemoveQueryColumn:n}=this.props;n(a,e)})}render(){return o.a.createElement(ht,{availableColumns:this.availableColumnOptions(this.props),selectedColumns:this.selectedColumnOptions(this.props),handleAddQueryColumn:this.handleAddQueryColumn,handleRemoveQueryColumn:this.handleRemoveQueryColumn})}}),Et=Object(L.connect)(e=>({queryConstraints:G(e),filterCapabilities:e.queryConfigReducer.filterCapabilities}),e=>({dispatchFilterCapabilitiesRequest:()=>e(Object(ne.h)()),dispatchAddQueryConstraint:(t,a,n)=>e(Object(ge.i)(t,a,n)),dispatchUpdateQueryConstraintType:(t,a,n)=>e(Object(ge.p)(t,a,n)),dispatchRemoveQueryConstraint:(t,a)=>e(Object(ge.m)(t,a))}))(class extends r.Component{constructor(){super(...arguments),this.handledUpdateQueryConstraintType=(e=>t=>{const{elementId:a,dispatchUpdateQueryConstraintType:n}=this.props;n(a,e,t.target.value)}),this.handledRemoveQueryConstraint=(e=>()=>{const{elementId:t,dispatchRemoveQueryConstraint:a}=this.props;a(t,e)})}componentDidMount(){this.props.dispatchFilterCapabilitiesRequest()}render(){const{queryConstraints:e,filterCapabilities:t}=this.props;return o.a.createElement("div",null,"ConstraintSelector")}}),yt=Object(l.withStyles)(({spacing:{unit:e}})=>Object(l.createStyles)({actionButtons:{display:"flex",justifyContent:"flex-end",position:"fixed",bottom:6*e,right:0},button:{margin:e}}))(({classes:e,currentStep:t,completedSteps:a,dispatchCloseConfig:n,dispatchGoToStep:r})=>{const l=e=>()=>r(e);return o.a.createElement(P.a,{item:!0,xs:12,className:e.actionButtons},o.a.createElement(p.a,{onClick:n,variant:"raised",className:e.button},"Close"),o.a.createElement(p.a,{disabled:0===t,onClick:l(t-1),variant:"raised",color:"secondary",className:e.button},"Back"),o.a.createElement(p.a,{disabled:!a[t],onClick:l(t+1),variant:"raised",color:"secondary",className:e.button},"Next"))}),vt=Object(L.connect)(null,e=>({dispatchGoToStep:t=>e(Object(ne.j)(t)),dispatchCloseQueryConfig:()=>e(Object(ne.e)())}))(class extends r.Component{render(){const{currentStep:e,completedSteps:t,dispatchCloseQueryConfig:a,dispatchGoToStep:n}=this.props;return o.a.createElement(yt,{currentStep:e,completedSteps:t,dispatchCloseConfig:a,dispatchGoToStep:n})}}),St=({isLoading:e,selectedQuery:t,currentStep:a,completedSteps:n})=>o.a.createElement(H.a,{isLoading:e},o.a.createElement(he,{currentStep:a,completedSteps:n}),o.a.createElement(ae,{currentStep:a}),o.a.createElement(P.a,{item:!0,xs:12},function(e,t){if(null==t.TargetDataViewId)throw new Error("TargetDataViewId cannot be null.");switch(e){case 0:return o.a.createElement(He,{elementId:t.ElementId,targetDataViewId:t.TargetDataViewId});case 1:return o.a.createElement(Ct,{elementId:t.ElementId});case 2:return o.a.createElement(Et,{elementId:t.ElementId});default:return"Unknown step"}}(a,t)),o.a.createElement(vt,{currentStep:a,completedSteps:n})),It=Object(L.connect)(e=>({isLoading:e.queryConfigReducer.isLoading,selectedQuery:F(e),currentStep:e.queryConfigReducer.currentStep,completedSteps:z(e)}))(class extends r.Component{render(){const{isLoading:e,selectedQuery:t,currentStep:a,completedSteps:n}=this.props;return o.a.createElement(St,{isLoading:e,selectedQuery:t,currentStep:a,completedSteps:n})}}),ft=Object(l.withStyles)(({spacing:e})=>Object(l.createStyles)({paper:{width:"85%",marginTop:48},form:{position:"relative",height:"100%",padding:2*e.unit,overflow:"auto",marginBottom:48}}))(({classes:e,elementType:t,isDrawerOpen:a})=>o.a.createElement(M.a,{classes:{paper:e.paper},anchor:"right",open:a},a&&o.a.createElement("form",{className:e.form,noValidate:!0,autoComplete:"off"},o.a.createElement(P.a,{container:!0,spacing:16,alignContent:"stretch"},(e=>{switch(t){case D.b.QUERY:return o.a.createElement(It,null);case D.b.FILTER:return"TODO";default:return null}})())))),wt=Object(L.connect)(e=>({elementType:e.configSwitchReducer.elementType,isDrawerOpen:A(e)}))(class extends r.Component{render(){return o.a.createElement(ft,Object.assign({},this.props))}}),xt=(a("./node_modules/storm-react-diagrams/dist/style.min.css"),a("./node_modules/storm-react-diagrams/dist/main.js"));class jt extends xt.PortModel{constructor(e="from"){super(e,"workbench"),this.position=e}serialize(){return Object.assign(super.serialize(),{position:this.position})}deSerialize(e,t){super.deSerialize(e,t),this.position=e.position}link(e){const t=this.createLinkModel();return t.setSourcePort(this),t.setTargetPort(e),t}createLinkModel(){return new xt.DefaultLinkModel}}var Ot=a("./node_modules/@material-ui/core/Divider/index.js"),kt=a.n(Ot);const Tt=e=>{e.stopPropagation()};var Nt=Object(l.withStyles)(({palette:{background:{paper:e}}})=>Object(l.createStyles)({container:{display:"flex",alignItems:"center",justifyContent:"center"},operatorContainer:{display:"flex",flexFlow:"column",alignItems:"center",borderRadius:5,border:"1px solid #7b582d",padding:"0px 5px 0px 5px",width:165,backgroundColor:e},titleContainer:{width:"100%",display:"flex",alignItems:"center",marginBottom:5},avatar:{marginRight:10,width:25,height:25},list:{overflow:"auto",maxHeight:150,padding:0,width:150},listItem:{padding:0},itemIcon:{width:10,height:10,marginRight:5},primary:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},topPort:{position:"relative",top:-9,backgroundColor:"#ccc",zIndex:-1},bottomPort:{position:"relative",top:9,backgroundColor:"#ccc",borderRadius:15,zIndex:-1}}))(({classes:e,node:t})=>{const{Label:a,Columns:n}=t.getQueryInfo(),{backgroundColor:r,IconComponent:l}=D.c.QUERY;return o.a.createElement("div",{className:e.container},o.a.createElement("div",{className:e.operatorContainer},o.a.createElement("div",{className:e.topPort},o.a.createElement(xt.PortWidget,{name:"to",node:t})),o.a.createElement("div",{className:e.titleContainer},o.a.createElement(Z.a,{className:e.avatar,style:{backgroundColor:r}},o.a.createElement(l)),o.a.createElement(oe.a,{variant:"subheading",noWrap:!0},a)),o.a.createElement("div",null,o.a.createElement(oe.a,{variant:"body2",noWrap:!0},"Columns"),o.a.createElement(kt.a,null),o.a.createElement(Ye.a,{className:e.list,onWheel:Tt},n.map(({Label:t,ColumnName:a})=>o.a.createElement($e.a,{key:a,className:e.listItem,dense:!0},o.a.createElement(Ae.a,{className:e.itemIcon},o.a.createElement(tt.a,null)),o.a.createElement(Ze.a,{className:e.listItem,classes:{primary:e.primary},primary:t}))))),o.a.createElement("div",{className:e.bottomPort},o.a.createElement(xt.PortWidget,{name:"from",node:t}))))});var Lt=Object(l.withStyles)(({palette:{background:{paper:e}}})=>Object(l.createStyles)({container:{display:"flex",flexFlow:"column",alignItems:"center",justifyContent:"center",borderRadius:"0px 0px 80px 80px",border:"1px solid #2c5367",width:155,height:85,backgroundColor:e},body:{display:"flex",maxWidth:130,marginBottom:5},avatar:{width:25,height:25,marginRight:3},label:{marginTop:10},filterType:{textAlign:"center"},topPort:{position:"relative",top:-11,backgroundColor:"#ccc",zIndex:-1},bottomPort:{position:"relative",top:11,backgroundColor:"#ccc",borderRadius:15,zIndex:-1}}))(({classes:e,node:t})=>{const{Label:a,FilterType:n}=t.getFilterInfo(),{backgroundColor:r,IconComponent:l}=D.c.FILTER;return o.a.createElement("div",{className:e.container},o.a.createElement("div",{className:e.topPort},o.a.createElement(xt.PortWidget,{name:"to",node:t})),o.a.createElement("div",{className:e.body},o.a.createElement(Z.a,{className:e.avatar,style:{backgroundColor:r}},o.a.createElement(l)),o.a.createElement(oe.a,{variant:"subheading",noWrap:!0},a)),o.a.createElement(oe.a,{className:e.filterType,variant:"body2",noWrap:!0},n),o.a.createElement("div",{className:e.bottomPort},o.a.createElement(xt.PortWidget,{name:"from",node:t})))});const Rt=Object(l.createStyles)({canvasContainer:{height:"100%",width:"100%"},canvas:{height:"100%",width:"100%"}});var Dt=Object(l.withStyles)(Rt)(({classes:e,diagramEngine:t,handleDragOver:a,handleDrop:n})=>o.a.createElement("div",{className:e.canvasContainer,onDrop:n,onDragOver:a},o.a.createElement(xt.DiagramWidget,{className:e.canvas,diagramEngine:t,maxNumberPointsPerLink:0,allowLooseLinks:!1}))),At=Object(L.connect)(e=>(function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&(a[n[r]]=e[n[r]])}return a})(e.sessionReducer,[]),e=>({dispatchSessionRequest:t=>{e(Object(ge.n)(t))},dispatchAddQuery:(t,a,n)=>e(Object(ge.g)(t,a,n))}))(class extends r.Component{constructor(e){super(e),this.handleDragOver=(e=>{e.preventDefault()}),this.handleDrop=(e=>{const{graph:t,dispatchAddQuery:a}=this.props;if(null==t)throw new Error("Graph cannot be null.");const n=e.dataTransfer.getData("ELEMENT"),r=this.diagramEngine.getRelativeMousePoint(e);switch(n){case D.b.QUERY:a(t.NextElementId,r.x,r.y)}}),this.diagramEngine=new xt.DiagramEngine,this.diagramEngine.installDefaultFactories(),this.diagramEngine.registerPortFactory(new class extends xt.AbstractPortFactory{constructor(e){super("workbench"),this.portModel=e}getNewInstance(e){return this.portModel}}(new jt)),this.diagramEngine.registerNodeFactory(new class extends xt.AbstractNodeFactory{constructor(){super("query")}generateReactWidget(e,t){return o.a.createElement(Nt,{node:t})}getNewInstance(){return new xt.NodeModel}}),this.diagramEngine.registerNodeFactory(new class extends xt.AbstractNodeFactory{constructor(){super("filter")}generateReactWidget(e,t){return o.a.createElement(Lt,{node:t})}getNewInstance(){return new xt.NodeModel}}),this.activeModel=new xt.DiagramModel,this.diagramEngine.setDiagramModel(this.activeModel)}componentDidMount(){const{match:e}=this.props,t="new"===e.params.id?void 0:e.params.id;this.props.dispatchSessionRequest(t)}componentDidUpdate(e){const t=this.props.session;if(null==t)return;const a=e.session;if(null==a||t.SessionId!==a.SessionId){const e=Object.keys(this.props.queries).map(e=>new class extends xt.NodeModel{constructor(e){super("query",e.ElementId.toString()),this.addPort(new jt("from")),this.addPort(new jt("to")),this.setPosition(e.LayoutX,e.LayoutY),this.queryInfo=e}getQueryInfo(){return this.queryInfo}}(this.props.queries[e])),t=Object.keys(this.props.filters).map(e=>new class extends xt.NodeModel{constructor(e){super("filter",e.ElementId.toString()),this.addPort(new jt("from")),this.addPort(new jt("to")),this.setPosition(e.LayoutX,e.LayoutY),this.filterInfo=e}getFilterInfo(){return this.filterInfo}}(this.props.filters[e]));this.activeModel.addAll(...e),this.activeModel.addAll(...t);const a=[];for(const e of Object.keys(this.props.connections)){const t=this.props.connections[e],n=this.activeModel.getNode(t.FromElementId.toString()),r=this.activeModel.getNode(t.ToElementId.toString());if(null==n||null==r)return;const o=n.getPort("from"),l=r.getPort("to"),s=o.link(l);a.push(s)}this.activeModel.addAll(...a)}}render(){const{isLoading:e}=this.props;return o.a.createElement(H.c,{isLoading:e},o.a.createElement(Dt,{diagramEngine:this.diagramEngine,handleDragOver:this.handleDragOver,handleDrop:this.handleDrop}))}});const _t=Object(l.createStyles)({workbench:{height:"100%",width:"100%",border:"3px solid #ccc",backgroundColor:"#ccc"},canvasContainer:{borderRadius:5,height:"100%",width:"100%",backgroundColor:"#3c3c3c",backgroundImage:"linear-gradient(\n      0deg,\n      transparent 24%,\n      rgba(255, 255, 255, 0.05) 25%,\n      rgba(255, 255, 255, 0.05) 26%,\n      transparent 27%,\n      transparent 74%,\n      rgba(255, 255, 255, 0.05) 75%,\n      rgba(255, 255, 255, 0.05) 76%,\n      transparent 77%,\n      transparent\n    ),\n    linear-gradient(\n      90deg,\n      transparent 24%,\n      rgba(255, 255, 255, 0.05) 25%,\n      rgba(255, 255, 255, 0.05) 26%,\n      transparent 27%,\n      transparent 74%,\n      rgba(255, 255, 255, 0.05) 75%,\n      rgba(255, 255, 255, 0.05) 76%,\n      transparent 77%,\n      transparent\n    )",backgroundSize:"50px 50px"}});t.default=Object(l.withStyles)(_t)(({classes:e,match:t})=>o.a.createElement("div",{className:e.workbench},o.a.createElement(N,null),o.a.createElement(wt,null),o.a.createElement("div",{className:e.canvasContainer},o.a.createElement(At,{match:t}))))}}]);
//# sourceMappingURL=6.bundle.js.map