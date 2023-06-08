import{j as n,a as i,F as c}from"./jsx-runtime-09ad29cb.js";import{M as h,D as s,C as t,A as p,b as m}from"./index-5d3bb37f.js";import{I as g,W as l,F as f,S as b,A as u,T as w,H as y,L as v}from"./Image.stories-08c6ac6e.js";import{L as r}from"./Link-0ed02cf7.js";import{u as d}from"./index-a14fc4fc.js";import"./index-f2bd0723.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-359c5387.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-86fba1ca.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-22f77b05.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-944fe3e7.js";import"./index-0a26bc51.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-b629ee11.js";import"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import"./chakra-ui-layout.esm-b2fa9d31.js";import"./index-6148c31a.js";import"./Heading-2ec2ea62.js";import"./Image-3405777f.js";import"./chakra-ui-hooks.esm-02e82f78.js";import"./SimpleGrid-e54e0b68.js";import"./Text-eabcdc0a.js";import"./Icon-6616a4b9.js";function a(o){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",a:"a",em:"em"},d(),o.components);return i(c,{children:[n(h,{of:g}),`
`,n(e.h1,{id:"image",children:"Image"}),`
`,i(e.table,{children:[n(e.thead,{children:i(e.tr,{children:[n(e.th,{children:"Component Version"}),n(e.th,{children:"DS Version"})]})}),i(e.tbody,{children:[i(e.tr,{children:[n(e.td,{children:"Added"}),n(e.td,{children:n(e.code,{children:"0.0.6"})})]}),i(e.tr,{children:[n(e.td,{children:"Latest"}),n(e.td,{children:n(e.code,{children:"1.5.0"})})]})]})]}),`
`,n(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[`
`,n(r,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,i(e.li,{children:[`
`,n(r,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,i(e.li,{children:[`
`,n(r,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,i(e.li,{children:[`
`,n(r,{href:"#credit-and-caption",target:"_self",children:"Credit and Caption"}),`
`]}),`
`,i(e.li,{children:[`
`,n(r,{href:"#sizes",target:"_self",children:"Sizes"}),`
`]}),`
`,i(e.li,{children:[`
`,n(r,{href:"#aspect-ratios",target:"_self",children:"Aspect Ratios"}),`
`]}),`
`,i(e.li,{children:[`
`,n(r,{href:"#types",target:"_self",children:"Types"}),`
`]}),`
`,i(e.li,{children:[`
`,n(r,{href:"#html-attributes",target:"_self",children:"HTML Attributes"}),`
`]}),`
`,i(e.li,{children:[`
`,n(r,{href:"#lazy-loading",target:"_self",children:"Lazy Loading"}),`
`]}),`
`]}),`
`,n(e.h2,{id:"overview",children:"Overview"}),`
`,n(s,{of:l}),`
`,i(e.p,{children:["If you want a simple HTML ",n(e.code,{children:"img"}),` element then don't pass in values for the
`,n(e.code,{children:"aspectRatio"})," or ",n(e.code,{children:"size"})," props."]}),`
`,n(e.h2,{id:"component-props",children:"Component Props"}),`
`,n(t,{of:l}),`
`,n(p,{of:l}),`
`,n(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,i(e.p,{children:["All images must have an ",n(e.code,{children:"alt"})," attribute, even if it's empty. The ",n(e.code,{children:"alt"}),` prop should
be used to concisely describe the image. If the image is decorative, then the
`,n(e.code,{children:"alt"})," prop should be an empty string ",n(e.code,{children:'""'}),"."]}),`
`,n(e.p,{children:"Resources:"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"https://www.w3.org/WAI/tutorials/images/",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C WAI Images Tutorial"})}),`
`,n(e.li,{children:n(e.a,{href:"https://webaim.org/techniques/images/",target:"_blank",rel:"nofollow noopener noreferrer",children:"WebAIM Accessible Images"})}),`
`,n(e.li,{children:n(e.a,{href:"https://usability.yale.edu/web-accessibility/articles/images",target:"_blank",rel:"nofollow noopener noreferrer",children:"Yale Usability & Web Accessibility"})}),`
`]}),`
`,n(e.h2,{id:"credit-and-caption",children:"Credit and Caption"}),`
`,i(e.p,{children:["By passing in ",n(e.code,{children:"credit"})," or ",n(e.code,{children:"caption"}),", the ",n(e.code,{children:"Image"}),` component will
render an HTML `,n(e.code,{children:"figure"})," element and render an ",n(e.code,{children:"img"}),` element inside with the
proper props. If no `,n(e.code,{children:"credit"})," or ",n(e.code,{children:"caption"}),` prop values are passed,
then an `,n(e.code,{children:"img"})," element will be rendered with or without wrapper style divs."]}),`
`,n(t,{of:f}),`
`,n(e.h2,{id:"sizes",children:"Sizes"}),`
`,i(e.p,{children:["Use the ",n(e.code,{children:"size"})," prop to set the desired size with the ",n(e.code,{children:"ImageSizes"})," enum."]}),`
`,n(t,{of:b}),`
`,n(e.h2,{id:"aspect-ratios",children:"Aspect Ratios"}),`
`,i(e.p,{children:["Use the ",n(e.code,{children:"aspectRatio"}),` prop to set the desired aspect ratio. Note: the
following example has `,n(e.code,{children:"size"})," set to ",n(e.code,{children:"ImageSizes.Small"}),"."]}),`
`,i(e.p,{children:["For a better viewing experience, the ",n(e.code,{children:"Image"}),` components below have been wrapped
in an element with a fixed width value.`]}),`
`,n(t,{of:u}),`
`,n(e.h2,{id:"types",children:"Types"}),`
`,i(e.p,{children:["Use the ",n(e.code,{children:"imageType"}),` prop to get an image variant. Note that to get a perfect
circle, the `,n(e.code,{children:"aspectRatio"})," prop ",n(e.em,{children:"must"})," be set to ",n(e.code,{children:'"square"'}),"."]}),`
`,i(e.p,{children:["For a better viewing experience, the ",n(e.code,{children:"Image"}),` components below have been wrapped
in an element with a fixed width value.`]}),`
`,n(t,{of:w}),`
`,n(e.h2,{id:"html-attributes",children:"HTML Attributes"}),`
`,i(e.p,{children:["The ",n(e.code,{children:"Image"}),` component accepts HTML image attributes. If needed, you can pass
functions such as `,n(e.code,{children:"onLoad"})," and ",n(e.code,{children:"onError"})," or attributes such as ",n(e.code,{children:"srcset"}),"."]}),`
`,i(e.p,{children:[`For both examples below, open the browser's console to see the log messages. In
the first example below, when the image is finished loading, the `,n(e.code,{children:"onLoad"}),`
function callback is called. The image's dimensions are logged. In the second
example, there is an (intentional) error with the image's URL. This will trigger
the `,n(e.code,{children:"onError"})," function callback."]}),`
`,n(t,{of:y}),`
`,n(e.h2,{id:"lazy-loading",children:"Lazy Loading"}),`
`,i(e.p,{children:["The ",n(e.code,{children:"Image"}),` component handles lazy loading images through two npm packages:
`,n(e.a,{href:"https://github.com/thebuilder/react-intersection-observer",target:"_blank",rel:"nofollow noopener noreferrer",children:n(e.code,{children:"react-intersection-observer"})}),`
and `,n(e.a,{href:"https://www.npmjs.com/package/@charlietango/use-native-lazy-loading",target:"_blank",rel:"nofollow noopener noreferrer",children:n(e.code,{children:"@charlietango/use-native-lazy-loading"})}),`.
The first package handles using the `,n(e.code,{children:"IntersectionObserver"}),` API in React and the
second package checks if the `,n(e.code,{children:"img"}),"'s native ",n(e.code,{children:'loading="lazy"'}),` attribute is
supported by the browser.`]}),`
`,i(e.p,{children:[`Lazy loading is disabled by default. In order to use the lazy loading feature,
pass the `,n(e.code,{children:"isLazy"})," prop or set it to ",n(e.code,{children:"true"}),"."]}),`
`,n(m,{code:`
<Image alt="Alt text" isLazy src="https://placeimg.com/540/420/animals" />
`,language:"jsx"}),`
`,i(e.p,{children:["The ",n(e.code,{children:"Image"}),`'s implementation of lazy loading is based on the recipe provided by
`,n(e.code,{children:"react-intersection-observer"}),`. Once the image's wrapper is in view, we load the
image by rendering it through the native `,n(e.code,{children:'loading="lazy"'}),` attribute or through
the `,n(e.code,{children:"IntersectionObserver"})," API."]}),`
`,n(e.p,{children:`In the following example, open the "Network" tab in your browser's console and
as you scroll down to view the next set of 10 images, you'll see that they get
loaded as the images come into the window's view.`}),`
`,n(e.p,{children:"Resources:"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"https://web.dev/browser-level-image-lazy-loading/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Browser-level image lazy-loading for the web"})}),`
`]}),`
`,n(t,{of:v})]})}function K(o={}){const{wrapper:e}=Object.assign({},d(),o.components);return e?n(e,Object.assign({},o,{children:n(a,o)})):a(o)}export{K as default};
//# sourceMappingURL=Image-89f5e6c0.js.map
