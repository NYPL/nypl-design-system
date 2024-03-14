import{j as n,a as r,F as c}from"./jsx-runtime-fdf4db99.js";import{M as a,b as d}from"./index-445595fc.js";import{L as i}from"./Link-24c1437a.js";import{u as l}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-da8f5748.js";import"../sb-preview/runtime.js";import"./index-42773b54.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-2a967270.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-33c8ee8e.js";import"./index-314a82e0.js";import"./index-11d98b33.js";import"./index-356e4a49.js";import"./index-8f383b84.js";import"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import"./chakra-ui-layout.esm-e0dbb94e.js";import"./Icon-4eeffe51.js";function t(o){const e=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",p:"p",code:"code",a:"a"},l(),o.components);return r(c,{children:[n(a,{title:"Development Guide/Footer"}),`
`,n(e.h1,{id:"footer",children:"Footer"}),`
`,n(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,r(e.ul,{children:[`
`,r(e.li,{children:[`
`,n(i,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,r(e.li,{children:[`
`,n(i,{href:"#implementation",target:"_self",children:"Implementation"}),`
`]}),`
`,r(e.li,{children:[`
`,n(i,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`]}),`
`,n(e.h2,{id:"overview",children:"Overview"}),`
`,r(e.p,{children:["This ",n(e.code,{children:"Footer"}),` component renders the NYPL-branded footer elements such as
navigational NYPL.org links, social media links, copyright, and NYPL building
facade image. This component is expected to be rendered at the end of a webpage,
before the closing `,n(e.code,{children:"</body>"})," tag. This component lives on the NYPL ",n(e.code,{children:"Header"})," app."]}),`
`,r(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"https://ds-header.nypl.org/footer",target:"_blank",rel:"nofollow noopener noreferrer",children:"NYPL Footer Preview"})}),`
`,n(e.li,{children:n(e.a,{href:"https://github.com/NYPL/nypl-header-app",target:"_blank",rel:"nofollow noopener noreferrer",children:"NYPL Header App Github repo"})}),`
`]}),`
`,n(e.h2,{id:"implementation",children:"Implementation"}),`
`,r(e.p,{children:["The ",n(e.code,{children:"Footer"})," can be embedded on an NYPL app through the following code snippet:"]}),`
`,n(d,{code:`
<div id="nypl-footer"></div>
<script type="module" src="https://ds-header.nypl.org/footer.min.js?containerId=nypl-footer" async><\/script>
`,language:"html"}),`
`,n(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,r(e.p,{children:["The ",n(e.code,{children:"Footer"})," component renders as an HTML ",n(e.code,{children:"<footer>"}),` element with a WAI-ARIA role
of `,n(e.code,{children:'role="contentinfo"'}),`. This is the common practice for the footer landmark
region on a page to maximize its accessibility in browsers and assistive
technologies.`]}),`
`,r(e.p,{children:["Special consideration should be made regarding the placement of the ",n(e.code,{children:"Footer"}),`
component in the DOM. Rendering this component, or similar HTML landmark region
components, inside another landmark region causes accessibility issues. For
example, rendering the `,n(e.code,{children:"Footer"})," component inside an ",n(e.code,{children:"aside"}),` HTML element is
an error.`]}),`
`,n(e.p,{children:"Resources:"}),`
`,r(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"https://www.w3.org/WAI/tutorials/page-structure/example/",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C WAI Page Structure Code Example"})}),`
`,n(e.li,{children:n(e.a,{href:"https://www.w3.org/WAI/tutorials/page-structure/regions/",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C WAI Page Regions"})}),`
`]})]})}function N(o={}){const{wrapper:e}=Object.assign({},l(),o.components);return e?n(e,Object.assign({},o,{children:n(t,o)})):t(o)}export{N as default};
//# sourceMappingURL=Footer-ac62e871.js.map
