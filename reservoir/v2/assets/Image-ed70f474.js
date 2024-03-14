import{j as g,a as k}from"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import{r as p}from"./index-0cbcd92a.js";import{H as A}from"./HelperErrorText-55c57f50.js";import{p as W}from"./chakra-ui-hooks.esm-539e7d47.js";import{a as M,u as E,B as v}from"./chakra-ui-layout.esm-e0dbb94e.js";var S=void 0;function F(){var e=p.useState(S),t=e[0],a=e[1];return p.useEffect(function(){S===void 0&&(S="loading"in HTMLImageElement.prototype),a(S)},[]),t}var z=new Map,_=new WeakMap,N=0,j=void 0;function H(e){return e?(_.has(e)||(N+=1,_.set(e,N.toString())),_.get(e)):"0"}function P(e){return Object.keys(e).sort().filter(function(t){return e[t]!==void 0}).map(function(t){return t+"_"+(t==="root"?H(e.root):e[t])}).toString()}function $(e){var t=P(e),a=z.get(t);if(!a){var n=new Map,o,s=new IntersectionObserver(function(d){d.forEach(function(i){var r,l=i.isIntersecting&&o.some(function(u){return i.intersectionRatio>=u});e.trackVisibility&&typeof i.isVisible>"u"&&(i.isVisible=l),(r=n.get(i.target))==null||r.forEach(function(u){u(l,i)})})},e);o=s.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),a={id:t,observer:s,elements:n},z.set(t,a)}return a}function Y(e,t,a,n){if(a===void 0&&(a={}),n===void 0&&(n=j),typeof window.IntersectionObserver>"u"&&n!==void 0){var o=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:typeof a.threshold=="number"?a.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),function(){}}var s=$(a),d=s.id,i=s.observer,r=s.elements,l=r.get(e)||[];return r.has(e)||r.set(e,l),l.push(t),i.observe(e),function(){l.splice(l.indexOf(t),1),l.length===0&&(r.delete(e),i.unobserve(e)),r.size===0&&(i.disconnect(),z.delete(d))}}function D(e){var t=e===void 0?{}:e,a=t.threshold,n=t.delay,o=t.trackVisibility,s=t.rootMargin,d=t.root,i=t.triggerOnce,r=t.skip,l=t.initialInView,u=t.fallbackInView,R=t.onChange,c=p.useRef(),y=p.useRef(),w=p.useState({inView:!!l}),h=w[0],V=w[1];y.current=R;var b=p.useCallback(function(I){c.current!==void 0&&(c.current(),c.current=void 0),!r&&I&&(c.current=Y(I,function(x,m){V({inView:x,entry:m}),y.current&&y.current(x,m),m.isIntersecting&&i&&c.current&&(c.current(),c.current=void 0)},{root:d,rootMargin:s,threshold:a,trackVisibility:o,delay:n},u))},[Array.isArray(a)?a.toString():a,d,s,i,r,o,u,n]);p.useEffect(function(){!c.current&&h.entry&&!i&&!r&&V({inView:!!l})});var f=[b,h.inView,h.entry];return f.ref=f[0],f.inView=f[1],f.entry=f[2],f}const Z=["fourByThree","oneByTwo","original","sixteenByNine","square","threeByFour","threeByTwo","twoByOne"],ee=["default","xxxsmall","xxsmall","xsmall","small","medium","large"],te=["default","circle"],G=M(e=>{const{additionalWrapperStyles:t={},className:a="",children:n,aspectRatio:o="original",size:s="default",sizeBasedOn:d="width",...i}=e,r=E("CustomImageWrapper",{ratio:o,size:s,sizeBasedOn:d});return g(v,{className:`the-wrap ${a}`,__css:{...r,...t},...i,children:g(v,{className:"the-crop",__css:r.crop,children:n})})}),L=M(p.forwardRef((e,t)=>{const{additionalFigureStyles:a={},additionalImageStyles:n={},additionalWrapperStyles:o={},alt:s,aspectRatio:d="original",caption:i,className:r="",component:l,credit:u,imageType:R="default",isLazy:c=!1,size:y="default",sizeBasedOn:w="width",src:h,...V}=e,b=F(),[f,I]=D({triggerOnce:!0,skip:b}),x=d!=="original",m=E("CustomImage",{variant:R,ratio:d,size:y,sizeBasedOn:w});let O=null,B,q,C=c?{}:{src:h};if(s&&s.length>300)throw new Error("NYPL Reservoir Image: Alt text must be less than 300 characters.");c&&(I||b)&&(B=f,C={src:h}),q=W(B,t),O=l||g(v,{as:"img",alt:s,loading:c?"lazy":void 0,...C,__css:{...m.img,...n},...V});const T=x?g(G,{additionalWrapperStyles:o,aspectRatio:d,className:r,size:y,sizeBasedOn:w,...i||u?{}:V,children:O}):O;return g(v,{ref:q,children:i||u?k(v,{as:"figure",__css:{...m.figure,...a},children:[T,k(v,{as:"figcaption",__css:m.figcaption,children:[i&&g(A,{ariaLive:"off",ariaAtomic:!1,text:i}),u&&g(A,{ariaLive:"off",ariaAtomic:!1,text:u})]})]}):T})}),{shouldForwardProp:()=>!0});try{L.displayName="Image",L.__docgenInfo={description:"",displayName:"Image",props:{caption:{defaultValue:null,description:"Adding will wrap the image in a <figure>",name:"caption",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"ClassName you can add in addition to 'image'",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"Optional value to control the size of the image",name:"size",required:!1,type:{name:'"small" | "medium" | "large" | "default" | "xsmall" | "xxsmall" | "xxxsmall"'}},aspectRatio:{defaultValue:null,description:'Optional value to control the aspect ratio of the card image; default\nvalue is `"original"`',name:"aspectRatio",required:!1,type:{name:'"fourByThree" | "oneByTwo" | "original" | "sixteenByNine" | "square" | "threeByFour" | "threeByTwo" | "twoByOne"'}},sizeBasedOn:{defaultValue:null,description:"Sets the image size based on the width or height. Width by default.",name:"sizeBasedOn",required:!1,type:{name:'"height" | "width"'}},additionalFigureStyles:{defaultValue:null,description:"Optionally pass in additional Chakra-based styles only for the figure.",name:"additionalFigureStyles",required:!1,type:{name:"{ [key: string]: any; }"}},additionalImageStyles:{defaultValue:null,description:"Optionally pass in additional Chakra-based styles only for the image.",name:"additionalImageStyles",required:!1,type:{name:"{ [key: string]: any; }"}},alt:{defaultValue:null,description:"Alternate text description of the image",name:"alt",required:!1,type:{name:"string"}},component:{defaultValue:null,description:"Custom image component",name:"component",required:!1,type:{name:"Element"}},credit:{defaultValue:null,description:"Adding will wrap the image in a <figure>",name:"credit",required:!1,type:{name:"string"}},imageType:{defaultValue:null,description:"Optional value for the image type",name:"imageType",required:!1,type:{name:'"circle" | "default"'}},isLazy:{defaultValue:null,description:"Flag to set the internal `Image` component to `isLazy` mode.",name:"isLazy",required:!1,type:{name:"boolean"}},src:{defaultValue:null,description:"The src attribute is required, and contains the path to the image you want to embed.",name:"src",required:!1,type:{name:"string"}},additionalWrapperStyles:{defaultValue:null,description:"Optionally pass in additional Chakra-based styles.",name:"additionalWrapperStyles",required:!1,type:{name:"{ [key: string]: any; }"}}}}}catch{}export{L as I,te as a,ee as b,Z as i};
//# sourceMappingURL=Image-ed70f474.js.map
