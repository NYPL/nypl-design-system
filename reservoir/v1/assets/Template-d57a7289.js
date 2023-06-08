import{j as o,a as u,F as D}from"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import{r as N,R as h}from"./index-f2bd0723.js";import{S as A}from"./SkipNavigation-9bb818ff.js";import{f as k,i as d,B as s}from"./chakra-ui-layout.esm-b2fa9d31.js";const x=k(N.forwardRef((e,t)=>{const r=d("Template",{});return o(s,{ref:t,__css:r,...e,children:e.children})})),_=e=>{const t=d("TemplateBreakout",{});return o(s,{__css:t,children:e.children})},b=({children:e,renderHeaderElement:t=!0})=>{const r=d("TemplateBreakout",{});let i=o(s,{__css:r,children:e});return t&&(h.Children.map(e,a=>{var l;((a==null?void 0:a.type)==="header"||((l=a==null?void 0:a.props)==null?void 0:l.mdxType)==="header")&&console.warn("NYPL Reservoir TemplateHeader: An HTML `header` element was passed in. Set `renderHeaderElement` to `false` to avoid nested HTML `header` elements.")}),i=o(s,{as:"header",__css:r,children:e})),i},C=e=>{const t=d("TemplateBreakout",{});return o(s,{__css:t,children:e.children})},g=e=>{const{children:t,id:r="mainContent",sidebar:i="none"}=e,a=d("TemplateContent",{variant:i}),l=h.Children.map(t,n=>{var m,c;let p=n;return(n&&(n==null?void 0:n.type)===f||n!=null&&n.props&&((m=n.props)==null?void 0:m.mdxType)==="TemplateContentPrimary"||(n==null?void 0:n.type)===T||n!=null&&n.props&&((c=n.props)==null?void 0:c.mdxType)==="TemplateContentSidebar")&&(p=h.cloneElement(n,{sidebar:i})),p});return o(s,{as:"main",id:r,__css:a,children:l})},H=e=>{const t=d("TemplateContentTopBottom",{});return o(s,{__css:t,children:e.children})},E=e=>{const t=d("TemplateContentTopBottom",{});return o(s,{__css:t,children:e.children})},f=e=>{const{sidebar:t}=e,r=d("TemplateContentPrimary",{variant:t});return o(s,{__css:r,children:e.children})},T=e=>{const{sidebar:t}=e,r=d("TemplateContentSidebar",{variant:t});return o(s,{__css:r,children:e.children})},S=({children:e,renderFooterElement:t=!0})=>{const r=d("TemplateBreakout",{});let i=o(s,{__css:r,children:e});return t&&(h.Children.map(e,a=>{var l;((a==null?void 0:a.type)==="footer"||((l=a==null?void 0:a.props)==null?void 0:l.mdxType)==="footer")&&console.warn("NYPL Reservoir TemplateFooter: An HTML `footer` element was passed in. Set `renderFooterElement` to `false` to avoid nested HTML `footer` elements.")}),i=o(s,{as:"footer",__css:r,children:e})),i},M=k(N.forwardRef((e,t)=>{const{aboveHeader:r,breakout:i,contentId:a="mainContent",contentBottom:l,contentPrimary:n,contentSidebar:p,contentTop:m,footer:c,header:w,sidebar:y="none",renderFooterElement:I=!0,renderHeaderElement:P=!0,renderSkipNavigation:L=!1,...q}=e,B=r&&o(_,{children:r}),F=m&&o(H,{children:m}),V=n&&o(f,{children:n}),R=l&&o(E,{children:l}),v=p&&o(T,{children:p});return u(D,{children:[L?o(A,{}):null,u(x,{ref:t,...q,children:[u(C,{children:[B,(w||i)&&u(b,{renderHeaderElement:P,children:[w,i]})]}),u(g,{id:a,sidebar:y,children:[F,y==="left"&&v,V,y==="right"&&v,R]}),c&&o(S,{renderFooterElement:I,children:c})]})]})}));try{M.displayName="TemplateAppContainer",M.__docgenInfo={description:'This single component can be used instead of all the individual template\ncomponents. Instead of importing and rendering the needed "template"\ncomponents, each section is passed as a prop to the section where it should\nbe rendered. For example, if you want to render content in the\n`TemplateContentPrimary` section, then pass it as a prop to `contentPrimary`.',displayName:"TemplateAppContainer",props:{footer:{defaultValue:null,description:"DOM that will be rendered in the `TemplateFooter` component section.",name:"footer",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},header:{defaultValue:null,description:"DOM that will be rendered in the `TemplateHeader` component section.",name:"header",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},renderSkipNavigation:{defaultValue:null,description:"Render the `SkipNavigation` component or not. False by default.",name:"renderSkipNavigation",required:!1,type:{name:"boolean"}},aboveHeader:{defaultValue:null,description:"DOM that will be rendered before the rest of the components in\n`TemplateAppContainer` and immediately before the `TemplateHeader` component.",name:"aboveHeader",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},breakout:{defaultValue:null,description:"DOM that will be rendered in the `TemplateBreakout` component section.",name:"breakout",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},contentBottom:{defaultValue:null,description:"DOM that will be rendered in the `TemplateContentBottom` component section.",name:"contentBottom",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},contentId:{defaultValue:null,description:'ID used for the `main` HTML element. Defaults to "mainContent". Useful\nanchor for the application skip navigation.',name:"contentId",required:!1,type:{name:"string"}},contentPrimary:{defaultValue:null,description:"DOM that will be rendered in the `TemplateContentPrimary` component section.",name:"contentPrimary",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},contentSidebar:{defaultValue:null,description:"DOM that will be rendered in the `TemplateContentSidebar` component section.",name:"contentSidebar",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},contentTop:{defaultValue:null,description:"DOM that will be rendered in the `TemplateContentTop` component section.",name:"contentTop",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},renderFooterElement:{defaultValue:{value:"true"},description:"Flag to render an HTML footer element. True by default.",name:"renderFooterElement",required:!1,type:{name:"boolean"}},renderHeaderElement:{defaultValue:{value:"true"},description:"Flag to render an HTML header element. True by default.",name:"renderHeaderElement",required:!1,type:{name:"boolean"}},sidebar:{defaultValue:null,description:"Renders the `TemplateContentSidebar` component either on the left or\nright side of the `TemplateContentPrimary` component.",name:"sidebar",required:!1,type:{name:'"left" | "right" | "none"'}}}}}catch{}try{_.displayName="TemplateAboveHeader",_.__docgenInfo={description:'This optional component renders its children from edge-to-edge and should\nbe used for alerts or notifications that are typically site-wide. This must\nbe rendered immediately before the `TemplateHeader` component. This is meant\nfor components that render an `aside` HTML element or HTML element with the\n`role="complementary"` attribute. These elements should *not* be rendered\nin the `header` HTML section since that\'s an accessibility violation.',displayName:"TemplateAboveHeader",props:{}}}catch{}try{C.displayName="TemplateBreakout",C.__docgenInfo={description:"This component should be used inside the `Template` component to contain both\nthe `TemplateAboveHeader` and `TemplateHeader` components. This is meant to\nrender its children from edge to edge and is most useful for the headers,\n`Breadcrumbs`, and `Hero` components or other banner-like components.",displayName:"TemplateBreakout",props:{}}}catch{}try{g.displayName="TemplateContent",g.__docgenInfo={description:'This component is most useful to render content on the page. This renders an\nHTML `<main>` element with an id of "mainContent". The "mainContent" id should\nbe used as the consuming application\'s skip navigation link. The `TemplateContent`\ncomponent also takes a `sidebar` prop with optional "left" or "right" values.\nThis will set the correct *styling* needed for the `TemplateContentPrimary`\nand `TemplateContentSidebar` components. Note that `TemplateContentPrimary`\nand `TemplateContentSidebar` must be ordered correctly as children elements\nfor the appropriate styles to take effect.',displayName:"TemplateContent",props:{id:{defaultValue:null,description:'ID used for the `main` HTML element. Defaults to "mainContent". Useful\nanchor for the application skip navigation.',name:"id",required:!1,type:{name:"string"}},sidebar:{defaultValue:null,description:"Renders the `TemplateContentSidebar` component either on the left or\nright side of the `TemplateContentPrimary` component.",name:"sidebar",required:!1,type:{name:'"left" | "right" | "none"'}}}}}catch{}try{E.displayName="TemplateContentBottom",E.__docgenInfo={description:"This optional component must be used inside the `TemplateContent` component\nand after the `TemplateContentPrimary` or `TemplateContentSidebar` component.\nThis renders content in the main width of the container and should always\nrender below the primary component and the sidebar component (if any).",displayName:"TemplateContentBottom",props:{}}}catch{}try{f.displayName="TemplateContentPrimary",f.__docgenInfo={description:'This component is used to render content in a column when there must be a\nsidebar component on either its left or right side. It must go inside the\n`TemplateContent` component. An optional `sidebar` prop value of "left" or\n"right" can be passed to render the correct CSS styles. If the `sidebar`\nprop is used in the `TemplateContent` component, there is no need to pass\nthe `sidebar` prop to this component -- `TemplateContent` will handle it.',displayName:"TemplateContentPrimary",props:{id:{defaultValue:null,description:'ID used for the `main` HTML element. Defaults to "mainContent". Useful\nanchor for the application skip navigation.',name:"id",required:!1,type:{name:"string"}},sidebar:{defaultValue:null,description:"Renders the `TemplateContentSidebar` component either on the left or\nright side of the `TemplateContentPrimary` component.",name:"sidebar",required:!1,type:{name:'"left" | "right" | "none"'}}}}}catch{}try{T.displayName="TemplateContentSidebar",T.__docgenInfo={description:'This component is used to render content in a sidebar column. It must go\ninside the `TemplateContent` component and must be paired with the\n`TemplateContentPrimary` component. If this is a left sidebar, it needs to be\nrendered before the `TemplateContentPrimary` component. If this is a right\nsidebar, it needs to be rendered after the `TemplateContentPrimary` component.\nAn optional `sidebar` prop value of "left" or "right" can be passed to render\nthe correct CSS styles. If the `sidebar` prop is used in the `TemplateContent`\ncomponent, there is no need to pass the `sidebar` prop to this component --\n`TemplateContent` will handle it.',displayName:"TemplateContentSidebar",props:{id:{defaultValue:null,description:'ID used for the `main` HTML element. Defaults to "mainContent". Useful\nanchor for the application skip navigation.',name:"id",required:!1,type:{name:"string"}},sidebar:{defaultValue:null,description:"Renders the `TemplateContentSidebar` component either on the left or\nright side of the `TemplateContentPrimary` component.",name:"sidebar",required:!1,type:{name:'"left" | "right" | "none"'}}}}}catch{}try{H.displayName="TemplateContentTop",H.__docgenInfo={description:"This optional component must be used inside the `TemplateContent` component.\nThis renders content in the main width of the container and will always render\nabove the primary component and the sidebar component (if any).",displayName:"TemplateContentTop",props:{}}}catch{}try{S.displayName="TemplateFooter",S.__docgenInfo={description:"This optional component should be the last child of the `Template`\ncomponent. This is rendered as an HTML `<footer>` element and spans the full\nwidth of the page. If an HTML `<footer>` element is already passed in a\ncustom component, set `renderFooterElement` to `false`.",displayName:"TemplateFooter",props:{renderFooterElement:{defaultValue:{value:"true"},description:"Flag to render an HTML footer element. True by default.",name:"renderFooterElement",required:!1,type:{name:"boolean"}}}}}catch{}try{b.displayName="TemplateHeader",b.__docgenInfo={description:"This optional component should be the first child of the `Template`\ncomponent. This is rendered as an HTML `<header>` element. If an HTML\n`<header>` element is already passed in a custom component as the children,\nset `renderFooterElement` to `false`. Otherwise, the parent wrapper will\nrender an HTML `<header>` element.",displayName:"TemplateHeader",props:{renderHeaderElement:{defaultValue:{value:"true"},description:"Flag to render an HTML header element. True by default.",name:"renderHeaderElement",required:!1,type:{name:"boolean"}}}}}catch{}export{M as T,x as a,C as b,_ as c,b as d,g as e,H as f,f as g,T as h,E as i,S as j};
//# sourceMappingURL=Template-d57a7289.js.map
