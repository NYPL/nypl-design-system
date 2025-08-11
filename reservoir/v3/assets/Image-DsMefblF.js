import{u as c,j as e,M as d,L as s,bv as h,C as t,bw as p,B as a,S as r}from"./iframe-D93LbwGv.js";import{C as x}from"./ComponentChangelogTable-Ck_3mwrR.js";import{I as j,W as o,F as g,S as m,a as f,A as b,T as u,H as w,b as y,L as v}from"./Image.stories-D4J0RP4e.js";import"./storybookUtils-BmTl87w5.js";const I=[{date:"2025-03-20",version:"3.5.5",type:"Update",affects:["Styles","Functionality"],notes:["Adds 'fourByOne' and 'twoByThree' aspect ratios."]},{date:"2025-01-16",version:"3.5.2",type:"Bug Fix",affects:["Functionality"],notes:["Fixes an infinite loop when no fallbackSrc value is provided."]},{date:"2024-09-05",version:"3.3.1",type:"Bug Fix",affects:["Accessibility"],notes:["Fixes an issue where the `id` prop was being duplicated in the aspect ratio's wrapper div."]},{date:"2024-08-29",version:"3.3.0",type:"Update",affects:["Accessibility"],notes:["Defaults the `alt` attribute to an empty string if no value is passed."]},{date:"2024-04-25",version:"3.1.1",type:"Update",affects:["Functionality"],notes:["Adds `fallbackSrc` and `onError` props."]},{date:"2024-03-14",version:"3.0.0",type:"Update",affects:["Styles"],notes:["Chakra 2.8 update."]},{date:"2023-12-07",version:"2.1.3",type:"Update",affects:["Documentation","Functionality","Styles"],notes:["Adds `sizeBasedOn` prop to the `Logo` component."]}];function l(i){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...c(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:j}),`
`,e.jsx(n.h1,{id:"image",children:"Image"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Component Version"}),e.jsx(n.th,{children:"DS Version"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Added"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"0.0.6"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Latest"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"3.5.5"})})]})]})]}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#credit-and-caption",target:"_self",children:"Credit and Caption"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#sizes",target:"_self",children:"Sizes"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#aspect-ratios",target:"_self",children:"Aspect Ratios"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#types",target:"_self",children:"Types"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#html-attributes",target:"_self",children:"HTML Attributes"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#fallback-image",target:"_self",children:"Fallback Image"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#lazy-loading",target:"_self",children:"Lazy Loading"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#changelog",target:"_self",children:"Changelog"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(h,{of:o}),`
`,e.jsxs(n.p,{children:["If you want a simple HTML ",e.jsx(n.code,{children:"img"}),` element then don't pass in values for the
`,e.jsx(n.code,{children:"aspectRatio"})," or ",e.jsx(n.code,{children:"size"})," props."]}),`
`,e.jsx(n.h2,{id:"component-props",children:"Component Props"}),`
`,e.jsx(t,{of:o}),`
`,e.jsx(p,{of:o}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"alt"}),` prop should be used to concisely describe the image. If the image is purely decorative,
the `,e.jsx(n.code,{children:"alt"}),` attribute should still be present, but can be set to an empty string. In this scenario,
an `,e.jsx(n.code,{children:"alt"}),` prop does not need to be passed. The component will set the attribute to an empty string
`,e.jsx(n.code,{children:'""'})," by default."]}),`
`,e.jsx(n.p,{children:"Resources:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.w3.org/WAI/tutorials/images/",rel:"nofollow",children:"W3C WAI Images Tutorial"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://webaim.org/techniques/images/",rel:"nofollow",children:"WebAIM Accessible Images"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://usability.yale.edu/web-accessibility/articles/images",rel:"nofollow",children:"Yale Usability & Web Accessibility"})}),`
`]}),`
`,e.jsx(n.h2,{id:"credit-and-caption",children:"Credit and Caption"}),`
`,e.jsxs(n.p,{children:["By passing in ",e.jsx(n.code,{children:"credit"})," or ",e.jsx(n.code,{children:"caption"}),", the ",e.jsx(n.code,{children:"Image"}),` component will
render an HTML `,e.jsx(n.code,{children:"figure"})," element and render an ",e.jsx(n.code,{children:"img"}),` element inside with the
proper props. If no `,e.jsx(n.code,{children:"credit"})," or ",e.jsx(n.code,{children:"caption"}),` prop values are passed,
then an `,e.jsx(n.code,{children:"img"})," element will be rendered with or without wrapper style divs."]}),`
`,e.jsx(t,{of:g}),`
`,e.jsx(n.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"size"})," prop to set the desired size with the ",e.jsx(n.code,{children:"ImageSizes"})," enum."]}),`
`,e.jsxs(n.p,{children:["In addition, the ",e.jsx(n.code,{children:"sizeBasedOn"}),` prop can be passed to determine whether the size
of the `,e.jsx(n.code,{children:"Image"})," is updated based on either the ",e.jsx(n.code,{children:'"height"'})," or ",e.jsx(n.code,{children:'"width"'}),`. By default,
the `,e.jsx(n.code,{children:"sizeBasedOn"})," prop is set to ",e.jsx(n.code,{children:'"width"'}),"."]}),`
`,e.jsx(n.h3,{id:"size-based-on-width",children:"Size Based On Width"}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(n.h3,{id:"size-based-on-height",children:"Size Based On Height"}),`
`,e.jsx(t,{of:f}),`
`,e.jsx(n.h2,{id:"aspect-ratios",children:"Aspect Ratios"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"aspectRatio"}),` prop to set the desired aspect ratio. Note: the
following example has `,e.jsx(n.code,{children:"size"})," set to ",e.jsx(n.code,{children:"ImageSizes.Small"}),"."]}),`
`,e.jsxs(n.p,{children:["For a better viewing experience, the ",e.jsx(n.code,{children:"Image"}),` components below have been wrapped
in an element with a fixed width value.`]}),`
`,e.jsx(t,{of:b}),`
`,e.jsx(n.h2,{id:"types",children:"Types"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"imageType"}),` prop to get an image variant. Note that to get a perfect
circle, the `,e.jsx(n.code,{children:"aspectRatio"})," prop ",e.jsx(n.em,{children:"must"})," be set to ",e.jsx(n.code,{children:'"square"'}),"."]}),`
`,e.jsxs(n.p,{children:["For a better viewing experience, the ",e.jsx(n.code,{children:"Image"}),` components below have been wrapped
in an element with a fixed width value.`]}),`
`,e.jsx(t,{of:u}),`
`,e.jsx(n.h2,{id:"html-attributes",children:"HTML Attributes"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Image"}),` component accepts HTML image attributes. If needed, you can pass
functions such as `,e.jsx(n.code,{children:"onLoad"})," and ",e.jsx(n.code,{children:"onError"})," or attributes such as ",e.jsx(n.code,{children:"srcset"}),"."]}),`
`,e.jsxs(n.p,{children:[`For both examples below, open the browser's console to see the log messages. In
the first example below, when the image is finished loading, the `,e.jsx(n.code,{children:"onLoad"}),`
function callback is called. The image's dimensions are logged. In the second
example, there is an (intentional) error with the image's URL. This will trigger
the `,e.jsx(n.code,{children:"onError"})," function callback."]}),`
`,e.jsx(t,{of:w}),`
`,e.jsx(n.h2,{id:"fallback-image",children:"Fallback Image"}),`
`,e.jsxs(n.p,{children:[`Sometimes images don't load due to network issues or the image URL is incorrect.
Set a fallback image source through the `,e.jsx(n.code,{children:"fallbackSrc"}),` prop. Internally, the
`,e.jsx(n.code,{children:"Image"})," component will call the ",e.jsx(n.code,{children:"img"})," element's ",e.jsx(n.code,{children:"onerror"}),` attribute with a
callback function to load the `,e.jsx(n.code,{children:"fallbackSrc"}),` image. Additionally, a warning will
be logged to the console when the error occurs and the fallback image is loaded.`]}),`
`,e.jsxs(n.p,{children:["If an ",e.jsx(n.em,{children:"additional"}),` action needs to be performed when the fallback image is
loaded, pass a callback function to the `,e.jsx(n.code,{children:"onError"})," prop."]}),`
`,e.jsx(a,{content:e.jsxs(e.Fragment,{children:[e.jsx(n.strong,{children:"IMPORTANT:"})," if no `fallbackSrc` prop is passed, the `Image` component will not call the `onerror` image attribute."]}),type:"warning"}),`
`,e.jsx(r,{code:`
<Image
alt="Alt text"
fallbackSrc="https://loremflickr.com/540/420/cat"
onError={(event) => console.log("Fallback image loaded"); }
src="https://placekitten.com/540/420"
/>
`,language:"jsx"}),`
`,e.jsx(a,{content:e.jsxs(e.Fragment,{children:[e.jsx(n.strong,{children:"IMPORTANT:"})," If a custom image component, such as the Next.js `Image` component, is passed to the `component` prop, then the `fallbackSrc` and `onError` props won't work. It is expected that the custom image component that is passed in implements the `onError` attribute."]}),type:"warning"}),`
`,e.jsx(r,{code:`
import { Image } from "@nypl/design-system-react-components";
import Image as NextImage from "next/image";

// ...

<Image
component={{
  <NextImage
    src="https://placekitten.com/540/420"
    onError={(event) => {
      // Implement your own fallback event
      event.target.src =  "https://loremflickr.com/540/420/cat"
    }}
  />
}} 
/>
`,language:"jsx"}),`
`,e.jsx(t,{of:y}),`
`,e.jsx(n.p,{children:"Resources:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#image_loading_errors",rel:"nofollow",children:"MDN Image loading errors"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/error_event",rel:"nofollow",children:"MDN HTMLElement: error event"})}),`
`]}),`
`,e.jsx(n.h2,{id:"lazy-loading",children:"Lazy Loading"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Image"}),` component handles lazy loading images through two npm packages:
`,e.jsx(n.a,{href:"https://github.com/thebuilder/react-intersection-observer",rel:"nofollow",children:e.jsx(n.code,{children:"react-intersection-observer"})}),`
and `,e.jsx(n.a,{href:"https://www.npmjs.com/package/@charlietango/use-native-lazy-loading",rel:"nofollow",children:e.jsx(n.code,{children:"@charlietango/use-native-lazy-loading"})}),`.
The first package handles using the `,e.jsx(n.code,{children:"IntersectionObserver"}),` API in React and the
second package checks if the `,e.jsx(n.code,{children:"img"}),"'s native ",e.jsx(n.code,{children:'loading="lazy"'}),` attribute is
supported by the browser.`]}),`
`,e.jsxs(n.p,{children:[`Lazy loading is disabled by default. In order to use the lazy loading feature,
pass the `,e.jsx(n.code,{children:"isLazy"})," prop or set it to ",e.jsx(n.code,{children:"true"}),"."]}),`
`,e.jsx(r,{code:`
<Image alt="Alt text" isLazy src="https://loremflickr.com/540/420/new+york+public+library" />
`,language:"jsx"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Image"}),`'s implementation of lazy loading is based on the recipe provided by
`,e.jsx(n.code,{children:"react-intersection-observer"}),`. Once the image's wrapper is in view, we load the
image by rendering it through the native `,e.jsx(n.code,{children:'loading="lazy"'}),` attribute or through
the `,e.jsx(n.code,{children:"IntersectionObserver"})," API."]}),`
`,e.jsx(n.p,{children:`In the following example, open the "Network" tab in your browser's console and
as you scroll down to view the next set of 10 images, you'll see that they get
loaded as the images come into the window's view.`}),`
`,e.jsx(n.p,{children:"Resources:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://web.dev/browser-level-image-lazy-loading/",rel:"nofollow",children:"Browser-level image lazy-loading for the web"})}),`
`]}),`
`,e.jsx(t,{of:v}),`
`,e.jsx(n.h2,{id:"changelog",children:"Changelog"}),`
`,e.jsx(x,{changelogData:I})]})}function L(i={}){const{wrapper:n}={...c(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(l,{...i})}):l(i)}export{L as default};
