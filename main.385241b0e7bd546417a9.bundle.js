(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{137:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);const ErrorBoundary=class ErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(props){super(props),this.state={error:void 0,errorInfo:void 0}}componentDidCatch(error,errorInfo){console.error(`ErrorBoundary, error: ${error}, info: ${errorInfo}`),this.setState({error:error,errorInfo:errorInfo}),this.props.onError&&this.props.onError(error,errorInfo)}render(){const{slackChannel:slackChannel}=this.props,{error:error,errorInfo:errorInfo}=this.state;return errorInfo?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Error,{error:error,errorInfo:errorInfo,slackChannel:slackChannel}):this.props.children}};__webpack_exports__.a=ErrorBoundary;const Error=({slackChannel:slackChannel})=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,"Something went wrong here."," ",slackChannel&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,"Please contact ",slackChannel," for help."))},143:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return BottomLink_BottomLink}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),makeStyles=__webpack_require__(671),Divider=__webpack_require__(687),Link=__webpack_require__(688),ListItem=__webpack_require__(701),ListItemText=__webpack_require__(689),ListItemIcon=__webpack_require__(690),ArrowForward=__webpack_require__(309),ArrowForward_default=__webpack_require__.n(ArrowForward),grey=__webpack_require__(308),grey_default=__webpack_require__.n(grey),Box=__webpack_require__(698);const useStyles=Object(makeStyles.a)(theme=>({root:{maxWidth:"fit-content",padding:theme.spacing(2,2,2,2.5)},boxTitle:{margin:0,color:grey_default.a[900]}}));var BottomLink_BottomLink=({link:link,title:title,onClick:onClick})=>{const classes=useStyles();return react_default.a.createElement("div",null,react_default.a.createElement(Divider.a,null),react_default.a.createElement(Link.a,{href:link,onClick:onClick},react_default.a.createElement(ListItem.a,{className:classes.root},react_default.a.createElement(ListItemText.a,null,react_default.a.createElement(Box.a,{className:classes.boxTitle,fontWeight:"fontWeightBold",m:1},title)),react_default.a.createElement(ListItemIcon.a,null,react_default.a.createElement(ArrowForward_default.a,null)))))}},319:function(module,exports,__webpack_require__){__webpack_require__(320),__webpack_require__(466),module.exports=__webpack_require__(467)},384:function(module,exports){},467:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(304);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(657),__webpack_require__(663)],module)}.call(this,__webpack_require__(468)(module))},65:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return AlphaLabel})),__webpack_require__.d(__webpack_exports__,"b",(function(){return BetaLabel}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_material_ui_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(671);const useStyles=Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.a)({alpha:{color:"#d00150",fontFamily:"serif",fontWeight:"normal",fontStyle:"italic"},beta:{color:"#4d65cc",fontFamily:"serif",fontWeight:"normal",fontStyle:"italic"}}),AlphaLabel=props=>{const classes=useStyles(props),{isShorthand:isShorthand}=props;return isShorthand?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:classes.alpha,style:{fontSize:"120%"}},"α"):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:classes.alpha},"Alpha")},BetaLabel=props=>{const classes=useStyles(props),{isShorthand:isShorthand}=props;return isShorthand?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:classes.beta,style:{fontSize:"120%"}},"β"):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:classes.beta},"Beta")}},657:function(module,exports,__webpack_require__){var map={"./InfoCard/InfoCard.stories.tsx":658,"./TabbedCard/TabbedCard.stories.tsx":666};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=657},658:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Subhead",(function(){return Subhead})),__webpack_require__.d(__webpack_exports__,"LinkInFooter",(function(){return LinkInFooter}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(72),_material_ui_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(314);const cardContentStyle={height:200,width:500},linkInfo={title:"Go to XYZ Location",link:"#"};__webpack_exports__.default={title:"Information Card",component:___WEBPACK_IMPORTED_MODULE_1__.a};const Wrapper=({children:children})=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.a,{container:!0,spacing:4},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.a,{item:!0},children)),Default=()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_1__.a,{title:"Information Card"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:cardContentStyle}))),Subhead=()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_1__.a,{title:"Information Card",subheader:"Subhead"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:cardContentStyle}))),LinkInFooter=()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_1__.a,{title:"Information Card",deepLink:linkInfo},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:cardContentStyle})))},663:function(module,exports,__webpack_require__){var map={"./HorizontalScrollGrid.stories.tsx":670,"./Lifecycle/LifecycleAlpha.stories.tsx":664,"./Lifecycle/LifecycleBeta.stories.tsx":665,"./Progress/Progress.stories.tsx":667,"./ProgressCard.stories.tsx":668,"./WarningPanel/WarningPanel.stories.tsx":669};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=663},664:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Shorthand",(function(){return Shorthand}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_Lifecycle__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(65);__webpack_exports__.default={title:"Alpha Lifecycle",component:_Lifecycle__WEBPACK_IMPORTED_MODULE_1__.a};const Default=()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,"This feature is in ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Lifecycle__WEBPACK_IMPORTED_MODULE_1__.a,null)),Shorthand=()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,"This feature is in ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Lifecycle__WEBPACK_IMPORTED_MODULE_1__.a,{isShorthand:!0}))},665:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Shorthand",(function(){return Shorthand}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_Lifecycle__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(65);__webpack_exports__.default={title:"Beta Lifecycle",component:_Lifecycle__WEBPACK_IMPORTED_MODULE_1__.b};const Default=()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,"This feature is in ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Lifecycle__WEBPACK_IMPORTED_MODULE_1__.b,null)),Shorthand=()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,"This feature is in ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Lifecycle__WEBPACK_IMPORTED_MODULE_1__.b,{isShorthand:!0}))},666:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"WithFooterLink",(function(){return WithFooterLink})),__webpack_require__.d(__webpack_exports__,"WithControlledTabValue",(function(){return WithControlledTabValue}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),makeStyles=__webpack_require__(671),withStyles=__webpack_require__(6),CardHeader=__webpack_require__(691),Card=__webpack_require__(702),Tabs=__webpack_require__(699),Divider=__webpack_require__(687),CardContent=__webpack_require__(693),Tab=__webpack_require__(694),BottomLink=__webpack_require__(143),ErrorBoundary=__webpack_require__(137),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const useTabsStyles=Object(makeStyles.a)(theme=>({root:{padding:theme.spacing(0,2,0,2.5),minHeight:theme.spacing(3)},indicator:{backgroundColor:theme.palette.info.main,height:theme.spacing(.3)}})),BoldHeader=Object(withStyles.a)(theme=>({root:{padding:theme.spacing(2,2,2,2.5),display:"inline-block"},title:{fontWeight:700},subheader:{paddingTop:theme.spacing(1)}}))(CardHeader.a),TabbedCard=({slackChannel:slackChannel="#backstage",children:children,title:title,deepLink:deepLink,value:value,onChange:onChange})=>{const tabsClasses=useTabsStyles(),[selectedIndex,selectIndex]=Object(react.useState)(0),handleChange=onChange||((_ev,newSelectedIndex)=>selectIndex(newSelectedIndex));let selectedTabContent;return value?react_default.a.Children.map(children,child=>{(null==child?void 0:child.props.value)===value&&(selectedTabContent=null==child?void 0:child.props.children)}):react_default.a.Children.map(children,(child,index)=>{index===selectedIndex&&(selectedTabContent=null==child?void 0:child.props.children)}),react_default.a.createElement(Card.a,null,react_default.a.createElement(ErrorBoundary.a,{slackChannel:slackChannel},title&&react_default.a.createElement(BoldHeader,{title:title}),react_default.a.createElement(Tabs.a,{classes:tabsClasses,value:value||selectedIndex,onChange:handleChange},children),react_default.a.createElement(Divider.a,null),react_default.a.createElement(CardContent.a,null,selectedTabContent),deepLink&&react_default.a.createElement(BottomLink.a,Object.assign({},deepLink))))},useCardTabStyles=Object(makeStyles.a)(theme=>({root:{minWidth:theme.spacing(6),minHeight:theme.spacing(3),margin:theme.spacing(0,2,0,0),padding:theme.spacing(.5,0,.5,0),textTransform:"none"},selected:{fontWeight:"bold"}})),CardTab=_a=>{var{children:children}=_a,props=__rest(_a,["children"]);const classes=useCardTabStyles();return react_default.a.createElement(Tab.a,Object.assign({disableRipple:!0,classes:classes},props))};__webpack_exports__.default={title:"Tabbed Card",component:TabbedCard};const Default=()=>react_default.a.createElement(TabbedCard,{title:"Default Example Header"},react_default.a.createElement(CardTab,{label:"Option 1"},"some content 1"),react_default.a.createElement(CardTab,{label:"Option 2"},"some content 2"),react_default.a.createElement(CardTab,{label:"Option 3"},"some content 3"),react_default.a.createElement(CardTab,{label:"Option 4"},"some content 4")),linkInfo={title:"Go to XYZ Location",link:"#"},WithFooterLink=()=>react_default.a.createElement(TabbedCard,{title:"Footer Link Example Header",deepLink:linkInfo},react_default.a.createElement(CardTab,{label:"Option 1"},"some content 1"),react_default.a.createElement(CardTab,{label:"Option 2"},"some content 2"),react_default.a.createElement(CardTab,{label:"Option 3"},"some content 3"),react_default.a.createElement(CardTab,{label:"Option 4"},"some content 4")),WithControlledTabValue=()=>{const[selectedTab,setSelectedTab]=Object(react.useState)("one");return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement("span",null,"Selected tab is ",selectedTab),react_default.a.createElement(TabbedCard,{value:selectedTab,onChange:(_ev,newSelectedTab)=>setSelectedTab(newSelectedTab),title:"Controlled Value Example"},react_default.a.createElement(CardTab,{value:"one",label:"Option 1"},"some content 1"),react_default.a.createElement(CardTab,{value:"two",label:"Option 2"},"some content 2"),react_default.a.createElement(CardTab,{value:"three",label:"Option 3"},"some content 3"),react_default.a.createElement(CardTab,{value:"four",label:"Option 4"},"some content 4")))}},667:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"progress",(function(){return progress}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),LinearProgress=__webpack_require__(696);var Progress_Progress=props=>{const[isVisible,setIsVisible]=Object(react.useState)(!1);return Object(react.useEffect)(()=>{const handle=setTimeout(()=>setIsVisible(!0),250);return()=>clearTimeout(handle)},[]),isVisible?react_default.a.createElement(LinearProgress.a,Object.assign({},props,{"data-testid":"progress"})):react_default.a.createElement("div",{style:{display:"none"},"data-testid":"progress"})};__webpack_exports__.default={title:"Progress",component:Progress_Progress};const progress=()=>react_default.a.createElement(Progress_Progress,null)},668:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Subhead",(function(){return Subhead})),__webpack_require__.d(__webpack_exports__,"LinkInFooter",(function(){return LinkInFooter}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),makeStyles=__webpack_require__(671),InfoCard=__webpack_require__(72),useTheme=__webpack_require__(142),es=__webpack_require__(313);const useStyles=Object(makeStyles.a)(theme=>({root:{position:"relative",lineHeight:0},overlay:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -60%)",fontSize:45,fontWeight:"bold",color:theme.palette.textSubtle},circle:{width:"80%",transform:"translate(10%, 0)"},colorUnknown:{}})),defaultProps={fractional:!0,inverse:!1,unit:"%",max:100};function getProgressColor(palette,value,inverse,max){if(isNaN(value))return"#ddd";const actualMax=max||defaultProps.max,actualValue=inverse?actualMax-value:value;return actualValue<actualMax/3?palette.status.error:actualValue<actualMax*(2/3)?palette.status.warning:palette.status.ok}var components_CircleProgress=props=>{const classes=useStyles(props),theme=Object(useTheme.a)(),{value:value,fractional:fractional,inverse:inverse,unit:unit,max:max}=Object.assign(Object.assign({},defaultProps),props),asPercentage=fractional?Math.round(value*max):value,asActual=100!==max?Math.round(value):asPercentage;return react_default.a.createElement("div",{className:classes.root},react_default.a.createElement(es.a,{strokeLinecap:"butt",percent:asPercentage,strokeWidth:12,trailWidth:12,strokeColor:getProgressColor(theme.palette,asActual,inverse,max),className:classes.circle}),react_default.a.createElement("div",{className:classes.overlay},isNaN(value)?"N/A":`${asActual}${unit}`))};const ProgressCard_useStyles=Object(makeStyles.a)({root:{height:"100%",width:250}});var components_ProgressCard=props=>{const classes=ProgressCard_useStyles(props),{title:title,subheader:subheader,progress:progress,deepLink:deepLink,variant:variant}=props;return react_default.a.createElement("div",{className:classes.root},react_default.a.createElement(InfoCard.a,{title:title,subheader:subheader,deepLink:deepLink,variant:variant},react_default.a.createElement(components_CircleProgress,{value:progress})))},Grid=__webpack_require__(314);const linkInfo={title:"Go to XYZ Location",link:"#"};__webpack_exports__.default={title:"Progress Card",component:components_ProgressCard};const Default=()=>react_default.a.createElement(Grid.a,{container:!0,spacing:2},react_default.a.createElement(Grid.a,{item:!0},react_default.a.createElement(components_ProgressCard,{title:"Progress",progress:.3})),react_default.a.createElement(Grid.a,{item:!0},react_default.a.createElement(components_ProgressCard,{title:"Progress",progress:.57})),react_default.a.createElement(Grid.a,{item:!0},react_default.a.createElement(components_ProgressCard,{title:"Progress",progress:.89}))),Subhead=()=>react_default.a.createElement(Grid.a,{container:!0,spacing:2},react_default.a.createElement(Grid.a,{item:!0},react_default.a.createElement(components_ProgressCard,{title:"Progress",subheader:"With a subheader",progress:.3})),react_default.a.createElement(Grid.a,{item:!0},react_default.a.createElement(components_ProgressCard,{title:"Progress",subheader:"With a subheader",progress:.57})),react_default.a.createElement(Grid.a,{item:!0},react_default.a.createElement(components_ProgressCard,{title:"Progress",subheader:"With a subheader",progress:.89}))),LinkInFooter=()=>react_default.a.createElement(Grid.a,{container:!0,spacing:2},react_default.a.createElement(Grid.a,{item:!0},react_default.a.createElement(components_ProgressCard,{title:"Progress",deepLink:linkInfo,progress:.3})),react_default.a.createElement(Grid.a,{item:!0},react_default.a.createElement(components_ProgressCard,{title:"Progress",deepLink:linkInfo,progress:.57})),react_default.a.createElement(Grid.a,{item:!0},react_default.a.createElement(components_ProgressCard,{title:"Progress",deepLink:linkInfo,progress:.89})))},669:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Children",(function(){return Children}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),prop_types=__webpack_require__(4),prop_types_default=__webpack_require__.n(prop_types),withStyles=__webpack_require__(6),Typography=__webpack_require__(45),ErrorOutline=__webpack_require__(312),ErrorOutline_default=__webpack_require__.n(ErrorOutline);const ErrorOutlineStyled=Object(withStyles.a)(theme=>({root:{marginRight:theme.spacing(1),fill:theme.palette.warningText}}))(ErrorOutline_default.a);class WarningPanel_WarningPanel extends react.Component{render(){const{classes:classes,title:title,message:message,children:children}=this.props;return react_default.a.createElement("div",{className:classes.message},react_default.a.createElement("div",{className:classes.header},react_default.a.createElement(ErrorOutlineStyled,null),react_default.a.createElement(Typography.a,{className:classes.headerText,variant:"subtitle1"},title)),message&&react_default.a.createElement(Typography.a,{className:classes.messageText},message),children)}}!function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(WarningPanel_WarningPanel,"propTypes",{message:prop_types_default.a.node.isRequired});var components_WarningPanel_WarningPanel=Object(withStyles.a)(theme=>({message:{display:"flex",flexDirection:"column",padding:theme.spacing(1.5),backgroundColor:theme.palette.warningBackground,color:theme.palette.warningText,verticalAlign:"middle"},header:{display:"flex",flexDirection:"row",marginBottom:theme.spacing(1)},headerText:{color:theme.palette.warningText},messageText:{color:theme.palette.warningText}}))(WarningPanel_WarningPanel),Link=__webpack_require__(688),Button=__webpack_require__(697);__webpack_exports__.default={title:"Warning Panel",component:components_WarningPanel_WarningPanel};const Default=()=>react_default.a.createElement(components_WarningPanel_WarningPanel,{title:"Example Warning Title",message:react_default.a.createElement(react_default.a.Fragment,null,"This example entity is missing something. If this is unexpected, please make sure you have set up everything correctly by following"," ",react_default.a.createElement(Link.a,{href:"http://example.com"},"this guide"),".")}),Children=()=>react_default.a.createElement(components_WarningPanel_WarningPanel,{title:"Example Warning Title"},react_default.a.createElement(Button.a,{variant:"outlined",color:"primary"},"Supports custom children - for example this button"))},670:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),classnames=__webpack_require__(108),classnames_default=__webpack_require__.n(classnames),ChevronLeft=__webpack_require__(310),ChevronLeft_default=__webpack_require__.n(ChevronLeft),ChevronRight=__webpack_require__(311),ChevronRight_default=__webpack_require__.n(ChevronRight),makeStyles=__webpack_require__(671),Grid=__webpack_require__(314),IconButton=__webpack_require__(695),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const fadeGradient="\n  hsl(0, 0%, 98%) 0%,\n  hsla(0, 0%, 98%, 0.987) 8.1%,\n  hsla(0, 0%, 98%, 0.951) 15.5%,\n  hsla(0, 0%, 98%, 0.896) 22.5%,\n  hsla(0, 0%, 98%, 0.825) 29%,\n  hsla(0, 0%, 98%, 0.741) 35.3%,\n  hsla(0, 0%, 98%, 0.648) 41.2%,\n  hsla(0, 0%, 98%, 0.55) 47.1%,\n  hsla(0, 0%, 98%, 0.45) 52.9%,\n  hsla(0, 0%, 98%, 0.352) 58.8%,\n  hsla(0, 0%, 98%, 0.259) 64.7%,\n  hsla(0, 0%, 98%, 0.175) 71%,\n  hsla(0, 0%, 98%, 0.104) 77.5%,\n  hsla(0, 0%, 98%, 0.049) 84.5%,\n  hsla(0, 0%, 98%, 0.013) 91.9%,\n  hsla(0, 0%, 98%, 0) 100%\n",useStyles=Object(makeStyles.a)(theme=>({root:{position:"relative",display:"flex",flexFlow:"row nowrap",alignItems:"center"},container:{overflow:"auto",scrollbarWidth:0,"&::-webkit-scrollbar":{display:"none"}},fade:{position:"absolute",width:100,height:"calc(100% + 10px)",transition:"opacity 300ms",pointerEvents:"none"},fadeLeft:{left:-10,background:`linear-gradient(90deg, ${fadeGradient})`},fadeRight:{right:-10,background:`linear-gradient(270deg, ${fadeGradient})`},fadeHidden:{opacity:0},button:{position:"absolute"},buttonLeft:{left:-theme.spacing(2)},buttonRight:{right:-theme.spacing(2)}}));var components_HorizontalScrollGrid=props=>{const{scrollStep:scrollStep=100,scrollSpeed:scrollSpeed=50,minScrollDistance:minScrollDistance=5,children:children}=props,otherProps=__rest(props,["scrollStep","scrollSpeed","minScrollDistance","children"]),classes=useStyles(props),ref=react_default.a.useRef(),[scrollLeft,scrollRight]=function useScrollDistance(ref){const[[scrollLeft,scrollRight],setScroll]=react_default.a.useState([0,0]);return react_default.a.useLayoutEffect(()=>{const el=ref.current;if(!el)return void setScroll([0,0]);const handleUpdate=()=>{const left=el.scrollLeft,right=el.scrollWidth-el.offsetWidth-el.scrollLeft;setScroll([left,right])};return handleUpdate(),el.addEventListener("scroll",handleUpdate),window.addEventListener("resize",handleUpdate),()=>{el.removeEventListener("scroll",handleUpdate),window.removeEventListener("resize",handleUpdate)}},[ref]),[scrollLeft,scrollRight]}(ref),setScrollTarget=function useSmoothScroll(ref,speed,minDistance){const[scrollTarget,setScrollTarget]=react_default.a.useState(0);return react_default.a.useLayoutEffect(()=>{if(0===scrollTarget)return;const startTime=performance.now(),id=requestAnimationFrame(frameTime=>{if(!ref.current)return;const frameDuration=frameTime-startTime,scrollDistance=Math.abs(scrollTarget)*frameDuration/speed,scrollAmount=Math.max(minDistance,scrollDistance)*Math.sign(scrollTarget);ref.current.scrollBy({left:scrollAmount});const newScrollTarget=scrollTarget-scrollAmount;Math.sign(scrollTarget)!==Math.sign(newScrollTarget)?setScrollTarget(0):setScrollTarget(newScrollTarget)});return()=>cancelAnimationFrame(id)},[ref,scrollTarget,speed,minDistance]),setScrollTarget}(ref,scrollSpeed,minScrollDistance),handleScrollClick=forwards=>{ref.current&&setScrollTarget(forwards?scrollStep:-scrollStep)};return react_default.a.createElement("div",Object.assign({},otherProps,{className:classes.root}),react_default.a.createElement(Grid.a,{container:!0,direction:"row",wrap:"nowrap",className:classes.container,ref:ref},children),react_default.a.createElement("div",{className:classnames_default()(classes.fade,classes.fadeLeft,{[classes.fadeHidden]:0===scrollLeft})}),react_default.a.createElement("div",{className:classnames_default()(classes.fade,classes.fadeRight,{[classes.fadeHidden]:0===scrollRight})}),scrollLeft>0&&react_default.a.createElement(IconButton.a,{title:"Scroll Left",onClick:()=>handleScrollClick(!1),className:classnames_default()(classes.button,classes.buttonLeft,{})},react_default.a.createElement(ChevronLeft_default.a,null)),scrollRight>0&&react_default.a.createElement(IconButton.a,{title:"Scroll Right",onClick:()=>handleScrollClick(!0),className:classnames_default()(classes.button,classes.buttonRight,{})},react_default.a.createElement(ChevronRight_default.a,null)))};const cardContentStyle={height:0,padding:150,margin:20},containerStyle={width:800,height:400,margin:20},opacityArray=[.2,.3,.4,.5,.6,.7,.8,.9,1];__webpack_exports__.default={title:"HorizontalScrollGrid",component:components_HorizontalScrollGrid};const Default=()=>react_default.a.createElement("div",{style:containerStyle},react_default.a.createElement(components_HorizontalScrollGrid,null,opacityArray.map(element=>{const style={backgroundColor:`rgba(0, 185, 151, ${element})`};return react_default.a.createElement("div",{style:Object.assign(Object.assign({},style),cardContentStyle),key:element})})))},72:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return InfoCard_InfoCard}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),makeStyles=__webpack_require__(671),withStyles=__webpack_require__(6),CardHeader=__webpack_require__(691),CardActions=__webpack_require__(692),Card=__webpack_require__(702),Divider=__webpack_require__(687),CardContent=__webpack_require__(693),ErrorBoundary=__webpack_require__(137),BottomLink=__webpack_require__(143);const useStyles=Object(makeStyles.a)(theme=>({header:{padding:theme.spacing(2,2,2,2.5)}})),BoldHeader=Object(withStyles.a)(theme=>({title:{fontWeight:700},subheader:{paddingTop:theme.spacing(1)}}))(CardHeader.a),CardActionsTopRight=Object(withStyles.a)(theme=>({root:{display:"inline-block",padding:theme.spacing(8,8,0,0),float:"right"}}))(CardActions.a),VARIANT_STYLES={card:{flex:{display:"flex",flexDirection:"column"},widget:{height:430},fullHeight:{height:"100%"},height100:{display:"flex",flexDirection:"column",height:"calc(100% - 10px)",marginBottom:"10px"},contentheader:{height:"calc(100% - 40px)"},contentheadertabs:{height:"calc(100% - 97px)"},noShrink:{flexShrink:0},minheight300:{minHeight:300,overflow:"initial"}},cardContent:{widget:{overflowY:"auto",height:332,width:"100%"},fullHeight:{height:"calc(100% - 50px)"},height100:{height:"calc(100% - 50px)"},contentRow:{display:"flex",flexDirection:"row"}}};var InfoCard_InfoCard=({title:title,subheader:subheader,divider:divider,deepLink:deepLink,slackChannel:slackChannel="#backstage",variant:variant,children:children,headerStyle:headerStyle,headerProps:headerProps,actionsClassName:actionsClassName,actions:actions,cardClassName:cardClassName,actionsTopRight:actionsTopRight})=>{const classes=useStyles();let calculatedStyle={},calculatedCardStyle={};if(variant){variant.split(/[\s]+/g).forEach(name=>{calculatedStyle=Object.assign(Object.assign({},calculatedStyle),VARIANT_STYLES.card[name]),calculatedCardStyle=Object.assign(Object.assign({},calculatedCardStyle),VARIANT_STYLES.cardContent[name])})}return react_default.a.createElement(Card.a,{style:calculatedStyle},react_default.a.createElement(ErrorBoundary.a,{slackChannel:slackChannel},title&&react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(BoldHeader,Object.assign({className:classes.header,title:title,subheader:subheader,style:Object.assign({display:"inline-block"},headerStyle)},headerProps)),react_default.a.createElement(Divider.a,null)),actionsTopRight&&react_default.a.createElement(CardActionsTopRight,null,actionsTopRight),divider&&react_default.a.createElement(Divider.a,null),react_default.a.createElement(CardContent.a,{className:cardClassName,style:calculatedCardStyle},children),actions&&react_default.a.createElement(CardActions.a,{className:actionsClassName},actions),deepLink&&react_default.a.createElement(BottomLink.a,Object.assign({},deepLink))))}}},[[319,1,2]]]);
//# sourceMappingURL=main.385241b0e7bd546417a9.bundle.js.map