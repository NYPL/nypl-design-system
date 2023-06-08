import{j as t,a as o,F as s}from"./jsx-runtime-09ad29cb.js";import{M as d,b as l}from"./index-5d3bb37f.js";import{u as i}from"./index-a14fc4fc.js";import"./index-f2bd0723.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-359c5387.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-86fba1ca.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-22f77b05.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-944fe3e7.js";import"./index-0a26bc51.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-b629ee11.js";function r(n){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",p:"p",a:"a",h2:"h2"},i(),n.components);return o(s,{children:[t(d,{title:"Hooks/useCarouselStyles"}),`
`,t(e.h1,{id:"usecarouselstyles",children:"useCarouselStyles"}),`
`,o(e.table,{children:[t(e.thead,{children:o(e.tr,{children:[t(e.th,{children:"Hook Version"}),t(e.th,{children:"DS Version"})]})}),o(e.tbody,{children:[o(e.tr,{children:[t(e.td,{children:"Added"}),t(e.td,{children:t(e.code,{children:"0.25.2"})})]}),o(e.tr,{children:[t(e.td,{children:"Latest"}),t(e.td,{children:t(e.code,{children:"0.25.2"})})]})]})]}),`
`,o(e.p,{children:["This custom hook, inspired by this ",t(e.a,{href:"https://codesandbox.io/s/fxjeo",target:"_blank",rel:"nofollow noopener noreferrer",children:"codesandbox example"}),`,
exposes functions used for carousel-like components that have sliding features.
The two main functions are `,t(e.code,{children:"prevSlide"})," and ",t(e.code,{children:"nextSlide"}),` used for buttons to
navigate between slides, and a `,t(e.code,{children:"carouselStyle"}),` style object for the main wrapper
element. If the carousel should programmatically slide to the first slide, use
the `,t(e.code,{children:"goToStart"})," function."]}),`
`,t(e.h2,{id:"usage",children:"Usage"}),`
`,o(e.p,{children:["For a full implementation example, view the ",o(e.a,{href:"https://github.com/NYPL/nypl-design-system/blob/development/src/components/Tabs/Tabs.tsx",target:"_blank",rel:"nofollow noopener noreferrer",children:[t(e.code,{children:"Tabs"})," component"]}),"."]}),`
`,t(l,{code:`
const { prevSlide, nextSlide, carouselStyle, goToStart } = useCarouselStyles(
  slidesCount,
  slideWidth
);
`,language:"jsx"})]})}function M(n={}){const{wrapper:e}=Object.assign({},i(),n.components);return e?t(e,Object.assign({},n,{children:t(r,n)})):r(n)}export{M as default};
//# sourceMappingURL=useCarouselStyles-f4157008.js.map
