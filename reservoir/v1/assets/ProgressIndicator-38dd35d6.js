import{j as T,a as P,F as W}from"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import{r as c}from"./index-f2bd0723.js";import{L as C}from"./Label-2b2058d3.js";import{X as S,f,p as j,u as E,M,N as B,Y as O,Z as Y,Q as H,B as V}from"./chakra-ui-layout.esm-b2fa9d31.js";function A(t,e){if(t==null)return{};var r={},a=Object.keys(t),n,i;for(i=0;i<a.length;i++)n=a[i],!(e.indexOf(n)>=0)&&(r[n]=t[n]);return r}function d(){return d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},d.apply(this,arguments)}var K=S({"0%":{strokeDasharray:"1, 400",strokeDashoffset:"0"},"50%":{strokeDasharray:"400, 400",strokeDashoffset:"-100"},"100%":{strokeDasharray:"400, 400",strokeDashoffset:"-260"}}),Q=S({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),U=S({"0%":{left:"-40%"},"100%":{left:"100%"}}),X=S({from:{backgroundPosition:"1rem 0"},to:{backgroundPosition:"0 0"}});function D(t){var e=t.value,r=e===void 0?0:e,a=t.min,n=t.max,i=t.valueText,l=t.getValueText,s=t.isIndeterminate,o=O(r,a,n),v=function(){if(r!=null)return Y(l)?l(r,o):i};return{bind:{"data-indeterminate":s?"":void 0,"aria-valuemax":n,"aria-valuemin":a,"aria-valuenow":s?void 0:r,"aria-valuetext":v(),role:"progressbar"},percent:o,value:r}}var Z=["size","isIndeterminate"],G=["size","max","min","valueText","getValueText","value","capIsRound","children","thickness","color","trackColor","isIndeterminate"],L=function(e){return c.createElement(f.circle,d({cx:50,cy:50,r:42,fill:"transparent"},e))},J=function(e){var r=e.size,a=e.isIndeterminate,n=A(e,Z);return c.createElement(f.svg,d({viewBox:"0 0 100 100",__css:{width:r,height:r,animation:a?Q+" 2s linear infinite":void 0}},n))},ee=function(e){var r,a=e.size,n=a===void 0?"48px":a,i=e.max,l=i===void 0?100:i,s=e.min,o=s===void 0?0:s,v=e.valueText,g=e.getValueText,m=e.value,u=e.capIsRound,h=e.children,x=e.thickness,b=x===void 0?"10px":x,w=e.color,y=w===void 0?"#0078d4":w,k=e.trackColor,$=k===void 0?"#edebe9":k,p=e.isIndeterminate,z=A(e,G),_=D({min:o,max:l,value:m,valueText:v,getValueText:g,isIndeterminate:p}),I=p?void 0:((r=_.percent)!=null?r:0)*2.64,q=H(I)?void 0:I+" "+(264-I),F=p?{css:{animation:K+" 1.5s linear infinite"}}:{strokeDashoffset:66,strokeDasharray:q,transitionProperty:"stroke-dasharray, stroke",transitionDuration:"0.6s",transitionTimingFunction:"ease"},N={display:"inline-block",position:"relative",verticalAlign:"middle",fontSize:n};return c.createElement(f.div,d({className:"chakra-progress"},_.bind,z,{__css:N}),c.createElement(J,{size:n,isIndeterminate:p},c.createElement(L,{stroke:$,strokeWidth:b,className:"chakra-progress__track"}),c.createElement(L,d({stroke:y,strokeWidth:b,className:"chakra-progress__indicator",strokeLinecap:u?"round":void 0,opacity:_.value===0&&!p?0:void 0},F))),h)},ae=f("div",{baseStyle:{fontSize:"0.24em",top:"50%",left:"50%",width:"100%",textAlign:"center",position:"absolute",transform:"translate(-50%, -50%)"}}),re=["min","max","value","isIndeterminate"],te=["value","min","max","hasStripe","isAnimated","children","borderRadius","isIndeterminate","aria-label","aria-labelledby"],ie=function(e){var r=e.min,a=e.max,n=e.value,i=e.isIndeterminate,l=A(e,re),s=D({value:n,min:r,max:a,isIndeterminate:i}),o=B(),v=d({height:"100%"},o.filledTrack);return c.createElement(f.div,d({style:d({width:s.percent+"%"},l.style)},s.bind,l,{__css:v}))},ne=function(e){var r,a=j(e),n=a.value,i=a.min,l=i===void 0?0:i,s=a.max,o=s===void 0?100:s,v=a.hasStripe,g=a.isAnimated,m=a.children,u=a.borderRadius,h=a.isIndeterminate,x=a["aria-label"],b=a["aria-labelledby"],w=A(a,te),y=E("Progress",e),k=u??((r=y.track)==null?void 0:r.borderRadius),$={animation:X+" 1s linear infinite"},p=!h&&v,z=p&&g,_=d({},z&&$,h&&{position:"absolute",willChange:"left",minWidth:"50%",animation:U+" 1s ease infinite normal none running"}),I=d({overflow:"hidden",position:"relative"},y.track);return c.createElement(f.div,d({borderRadius:k,__css:I},w),c.createElement(M,{value:y},c.createElement(ie,{"aria-label":x,"aria-labelledby":b,min:l,max:o,value:n,isIndeterminate:h,css:_,borderRadius:k}),m))};const ue=["default","small"],ce=["circular","linear"],R=f(c.forwardRef((t,e)=>{const{darkMode:r=!1,id:a,indicatorType:n="linear",isIndeterminate:i=!1,labelText:l,showLabel:s=!0,size:o="default",value:v=0,...g}=t,m=E("ProgressIndicator",{darkMode:r,size:o});let u=v;a||console.warn("NYPL Reservoir Progress Indicator: This component's required `id` prop was not passed."),(u<0||u>100)&&(console.warn("NYPL Reservoir ProgressIndicator: An invalid value was passed for the `value` prop, so 0 will be used. A valid value should be a number between 0 and 100."),u=0);const h={id:a,"aria-label":s?void 0:l,"aria-labelledby":s?`${a}-label`:void 0,isIndeterminate:i||void 0,value:i?void 0:u};return T(V,{ref:e,__css:m,...g,children:(b=>b==="circular"?(o==="small"&&(h["aria-label"]=l),P(V,{__css:m.circularContainer,children:[T(ee,{...h,sx:m.circular,children:s&&!i&&o!=="small"&&P(ae,{children:[u,"%"]})}),s&&o!=="small"&&T(C,{id:`${a}-label`,htmlFor:a,children:l})]})):P(W,{children:[s&&T(C,{id:`${a}-label`,htmlFor:a,children:l}),P(V,{__css:m.linearContainer,children:[T(ne,{...h,sx:m.linear}),s&&!i&&P(V,{__css:m.linearPercentage,children:[u,"%"]})]})]}))(n)})}));try{R.displayName="ProgressIndicator",R.__docgenInfo={description:`A component that displays a progress status for any task that takes a long
time to complete or consists of multiple steps. Examples include downloading,
uploading, or processing.`,displayName:"ProgressIndicator",props:{id:{defaultValue:null,description:"ID that other components can cross reference for accessibility purposes.",name:"id",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"The size of the linear or circular progress.",name:"size",required:!1,type:{name:'"small" | "default"'}},labelText:{defaultValue:null,description:"The text to display in an HTML `label` element.",name:"labelText",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"A number between 0 to 100 that defines the progress' value.",name:"value",required:!1,type:{name:"number"}},showLabel:{defaultValue:null,description:"Visually show or hide the label text. When set to `false`, then the label\ntext will be added to the parent component as its `aria-label` attribute.",name:"showLabel",required:!1,type:{name:"boolean"}},isIndeterminate:{defaultValue:null,description:"Whether the progress animation should display because the `value` prop is\nnot known. When this is set to `true`, the `value` prop will be ignored.",name:"isIndeterminate",required:!1,type:{name:"boolean"}},darkMode:{defaultValue:null,description:"The darkMode prop is deprecated and should no longer be used.",name:"darkMode",required:!1,type:{name:"boolean"}},indicatorType:{defaultValue:null,description:"Whether the `ProgressIndicator` should be linear or circular.",name:"indicatorType",required:!1,type:{name:'"linear" | "circular"'}}}}}catch{}export{R as P,ue as a,ce as p};
//# sourceMappingURL=ProgressIndicator-38dd35d6.js.map
