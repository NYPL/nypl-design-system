import{j as n,a as i,F as c}from"./jsx-runtime-fdf4db99.js";import{M as h,D as s,C as r,A as p,b as m}from"./index-445595fc.js";import{C as g}from"./ComponentChangelogTable-310bbbfd.js";import{I as f,W as d,F as b,S as u,a as w,A as y,T as v,H as z,L as I}from"./Image.stories-73ec852e.js";import{L as t}from"./Link-24c1437a.js";import{u as l}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-da8f5748.js";import"../sb-preview/runtime.js";import"./index-42773b54.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-2a967270.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-33c8ee8e.js";import"./index-314a82e0.js";import"./index-11d98b33.js";import"./index-356e4a49.js";import"./index-8f383b84.js";import"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import"./chakra-ui-layout.esm-e0dbb94e.js";import"./List-582282a6.js";import"./useDSHeading-94e72700.js";import"./Heading-7eebc756.js";import"./Text-d88b2f7a.js";import"./Table-64c6aa77.js";import"./index-6148c31a.js";import"./Image-ed70f474.js";import"./HelperErrorText-55c57f50.js";import"./chakra-ui-hooks.esm-539e7d47.js";import"./tiny-invariant-dd7d57d2.js";import"./SimpleGrid-bd04b221.js";import"./types-ee6958f5.js";import"./Icon-4eeffe51.js";const L=[{date:"2023-12-07",version:"2.1.3",type:"Update",affects:["Documentation","Functionality","Styles"],notes:["Adds `sizeBasedOn` prop to the `Logo` component."]}];function a(o){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",a:"a",h3:"h3",em:"em"},l(),o.components);return i(c,{children:[n(h,{of:f}),`
`,n(e.h1,{id:"image",children:"Image"}),`
`,i(e.table,{children:[n(e.thead,{children:i(e.tr,{children:[n(e.th,{children:"Component Version"}),n(e.th,{children:"DS Version"})]})}),i(e.tbody,{children:[i(e.tr,{children:[n(e.td,{children:"Added"}),n(e.td,{children:n(e.code,{children:"0.0.6"})})]}),i(e.tr,{children:[n(e.td,{children:"Latest"}),n(e.td,{children:n(e.code,{children:"2.1.3"})})]})]})]}),`
`,n(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[`
`,n(t,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,i(e.li,{children:[`
`,n(t,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,i(e.li,{children:[`
`,n(t,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,i(e.li,{children:[`
`,n(t,{href:"#credit-and-caption",target:"_self",children:"Credit and Caption"}),`
`]}),`
`,i(e.li,{children:[`
`,n(t,{href:"#sizes",target:"_self",children:"Sizes"}),`
`]}),`
`,i(e.li,{children:[`
`,n(t,{href:"#aspect-ratios",target:"_self",children:"Aspect Ratios"}),`
`]}),`
`,i(e.li,{children:[`
`,n(t,{href:"#types",target:"_self",children:"Types"}),`
`]}),`
`,i(e.li,{children:[`
`,n(t,{href:"#html-attributes",target:"_self",children:"HTML Attributes"}),`
`]}),`
`,i(e.li,{children:[`
`,n(t,{href:"#lazy-loading",target:"_self",children:"Lazy Loading"}),`
`]}),`
`,i(e.li,{children:[`
`,n(t,{href:"#changelog",target:"_self",children:"Changelog"}),`
`]}),`
`]}),`
`,n(e.h2,{id:"overview",children:"Overview"}),`
`,n(s,{of:d}),`
`,i(e.p,{children:["If you want a simple HTML ",n(e.code,{children:"img"}),` element then don't pass in values for the
`,n(e.code,{children:"aspectRatio"})," or ",n(e.code,{children:"size"})," props."]}),`
`,n(e.h2,{id:"component-props",children:"Component Props"}),`
`,n(r,{of:d}),`
`,n(p,{of:d}),`
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
`,n(r,{of:b}),`
`,n(e.h2,{id:"sizes",children:"Sizes"}),`
`,i(e.p,{children:["Use the ",n(e.code,{children:"size"})," prop to set the desired size with the ",n(e.code,{children:"ImageSizes"})," enum."]}),`
`,i(e.p,{children:["In addition, the ",n(e.code,{children:"sizeBasedOn"}),` prop can be passed to determine whether the size
of the `,n(e.code,{children:"Image"})," is updated based on either the ",n(e.code,{children:'"height"'})," or ",n(e.code,{children:'"width"'}),`. By default,
the `,n(e.code,{children:"sizeBasedOn"})," prop is set to ",n(e.code,{children:'"width"'}),"."]}),`
`,n(e.h3,{id:"size-based-on-width",children:"Size Based On Width"}),`
`,n(r,{of:u}),`
`,n(e.h3,{id:"size-based-on-height",children:"Size Based On Height"}),`
`,n(r,{of:w}),`
`,n(e.h2,{id:"aspect-ratios",children:"Aspect Ratios"}),`
`,i(e.p,{children:["Use the ",n(e.code,{children:"aspectRatio"}),` prop to set the desired aspect ratio. Note: the
following example has `,n(e.code,{children:"size"})," set to ",n(e.code,{children:"ImageSizes.Small"}),"."]}),`
`,i(e.p,{children:["For a better viewing experience, the ",n(e.code,{children:"Image"}),` components below have been wrapped
in an element with a fixed width value.`]}),`
`,n(r,{of:y}),`
`,n(e.h2,{id:"types",children:"Types"}),`
`,i(e.p,{children:["Use the ",n(e.code,{children:"imageType"}),` prop to get an image variant. Note that to get a perfect
circle, the `,n(e.code,{children:"aspectRatio"})," prop ",n(e.em,{children:"must"})," be set to ",n(e.code,{children:'"square"'}),"."]}),`
`,i(e.p,{children:["For a better viewing experience, the ",n(e.code,{children:"Image"}),` components below have been wrapped
in an element with a fixed width value.`]}),`
`,n(r,{of:v}),`
`,n(e.h2,{id:"html-attributes",children:"HTML Attributes"}),`
`,i(e.p,{children:["The ",n(e.code,{children:"Image"}),` component accepts HTML image attributes. If needed, you can pass
functions such as `,n(e.code,{children:"onLoad"})," and ",n(e.code,{children:"onError"})," or attributes such as ",n(e.code,{children:"srcset"}),"."]}),`
`,i(e.p,{children:[`For both examples below, open the browser's console to see the log messages. In
the first example below, when the image is finished loading, the `,n(e.code,{children:"onLoad"}),`
function callback is called. The image's dimensions are logged. In the second
example, there is an (intentional) error with the image's URL. This will trigger
the `,n(e.code,{children:"onError"})," function callback."]}),`
`,n(r,{of:z}),`
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
<Image alt="Alt text" isLazy src="https://placekitten.com/540/420" />
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
`,n(r,{of:I}),`
`,n(e.h2,{id:"changelog",children:"Changelog"}),`
`,n(g,{changelogData:L})]})}function oe(o={}){const{wrapper:e}=Object.assign({},l(),o.components);return e?n(e,Object.assign({},o,{children:n(a,o)})):a(o)}export{oe as default};
//# sourceMappingURL=Image-ca502809.js.map
