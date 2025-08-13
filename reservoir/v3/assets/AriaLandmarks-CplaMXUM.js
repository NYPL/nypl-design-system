import{u as t,j as e,M as a,L as s,B as d,C as o}from"./iframe-CFLVJZOZ.js";import{W as c}from"./SearchBar.stories-CkuteLTi.js";import"./storybookUtils-BmTl87w5.js";function r(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Accessibility Guide/ARIA Landmarks"}),`
`,e.jsx(n.h1,{id:"aria-landmarks",children:"ARIA Landmarks"}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#Landmarks-overview",target:"_self",children:"Landmarks overview"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#banner",target:"_self",children:"banner"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#complementary",target:"_self",children:"complementary"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#contentinfo",target:"_self",children:"contentinfo"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#form",target:"_self",children:"form"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#main",target:"_self",children:"main"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#navigation",target:"_self",children:"navigation"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#region",target:"_self",children:"region"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#search",target:"_self",children:"search"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#resources",target:"_self",children:"Resources"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"landmarks-overview",children:"Landmarks overview"}),`
`,e.jsx(n.p,{children:"Landmarks are a useful tool for people who use screen readers to orient themselves to important areas of a web page, and help quickly navigate to these areas within a website or application."}),`
`,e.jsx(n.p,{children:"ARIA’s eight landmark roles are specifically meant to describe page organization and structure, providing keyboard navigation to each larger section. Each of these roles has a corresponding native HTML element:"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Landmark role"}),e.jsx(n.th,{children:"HTML element"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"banner"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"<header>"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"complementary"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"<aside>"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"contentinfo"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"<footer>"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"form"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"<form>"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"main"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"<main>"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"navigation"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"<nav>"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"region"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"<section>"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"search"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"<search>"})})]})]})]}),`
`,e.jsxs(n.p,{children:["Landmarks can be indicated with ",e.jsx(n.code,{children:'role="landmark"'})," or by using the landmark's HTML element—both methods mean the same thing in the document."]}),`
`,e.jsxs(n.p,{children:["Some landmarks can be nested inside each other (see ",e.jsx(n.code,{children:"<header>"}),", for instance) or appear multiple times on a page (distinguished by a unique id or label), but it depends on the specific landmark."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Some Reservoir components already internally set a landmark role, but some landmarks must be set by the consuming app since they could wrap many components."})}),`
`,e.jsx(n.h3,{id:"banner",children:"banner"}),`
`,e.jsxs(n.p,{children:[`The banner landmark is an area that has global, rather than page-specific, information or actionable elements.
For example, a website's logo and primary navigation would be expected child elements of a `,e.jsx(n.code,{children:"banner"})," landmark. Generally, there is one banner per interface. If there's multiple, they should have unique labels."]}),`
`,e.jsxs(n.p,{children:["The Header is Reservoir's only component that falls under the banner category. Our ",e.jsx(n.code,{children:"Header"})," contains other landmarks: ",e.jsx(n.code,{children:"complementary"})," for temporary sitewide alerts, ",e.jsx(n.code,{children:"navigation"})," for the site navigation."]}),`
`,e.jsxs(n.p,{children:["Note: The DS ",e.jsx(n.code,{children:"Banner"})," is a ",e.jsx(n.code,{children:"complementary"})," landmark, despite its title matching ",e.jsx(n.code,{children:"banner"}),"."]}),`
`,e.jsx(n.h3,{id:"complementary",children:"complementary"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"complementary"}),' landmark indicates an area that contains additional information that "complements" the main content. Though complementary, the content it represents should also be understandable on its own.']}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Banner"})," and ",e.jsx(n.code,{children:"Notification"})," components are already designated as ",e.jsx(n.code,{children:"complementary"})," (they render as ",e.jsx(n.code,{children:"<aside>"})," elements). The ",e.jsx(n.code,{children:"StatusBadge"}),", ",e.jsx(n.code,{children:"Hero"}),", and ",e.jsx(n.code,{children:"FeaturedContent"})," components could all also be designated ",e.jsx(n.code,{children:"complementary"})," landmarks by the consuming apps, depending on context."]}),`
`,e.jsx(n.h3,{id:"contentinfo",children:"contentinfo"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"contentinfo"})," is another globally repeating landmark, like ",e.jsx(n.code,{children:"banner"}),", with information about the parent document. If ",e.jsx(n.code,{children:"banner"})," is usually the site's header, ",e.jsx(n.code,{children:"contentinfo"})," is usually the footer. Generally, there is one ",e.jsx(n.code,{children:"contentinfo"})," per interface. If there's multiple, they should have unique labels."]}),`
`,e.jsxs(n.p,{children:["The DS ",e.jsx(n.code,{children:"Footer"})," uses the ",e.jsx(n.code,{children:"contentinfo"})," role."]}),`
`,e.jsx(n.h3,{id:"form",children:"form"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"form"})," landmark identifies a region that contains a collection of elements that combine to create a form: usually ",e.jsx(n.code,{children:"button"}),", ",e.jsx(n.code,{children:"input"}),`,
`,e.jsx(n.code,{children:"select"}),", and ",e.jsx(n.code,{children:"textarea"}),"."]}),`
`,e.jsx(d,{content:e.jsxs(e.Fragment,{children:[e.jsx(n.strong,{children:"IMPORTANT:"})," Use the search landmark instead of the form landmark when the form is used for search functionality."]}),type:"warning"}),`
`,e.jsxs(n.p,{children:["Interfaces can have multiple ",e.jsx(n.code,{children:"form"})," regions, and each should be identified with a unique label."]}),`
`,e.jsxs(n.p,{children:["Elements under ",e.jsx(n.a,{href:"../?path=/docs/components-form-elements",children:"Form Elements"})," should be wrapped by the ",e.jsx(n.code,{children:"form"})," landmark."]}),`
`,e.jsx(n.h3,{id:"main",children:"main"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"main"})," landmark is meant to designate the primary content of a page. In most browsers, it's natively conveyed by use of the ",e.jsx(n.code,{children:"<main>"})," HTML element."]}),`
`,e.jsxs(n.p,{children:["There should only be a single ",e.jsx(n.code,{children:"main"})," landmark per interface. Since ",e.jsx(n.code,{children:"main"})," represents the primary content of a page, it is the most important destination for ",e.jsx(n.a,{href:"../?path=/docs/accessibility-guide-skip-navigation--docs",children:"skip links"}),", bypassing recurring elements like the header or navigation."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Template"})," ",e.jsx(n.a,{href:"../?path=/docs/components-page-layout-template--docs",children:"component"})," renders the ",e.jsx(n.code,{children:"main"})," landmark (and the ",e.jsx(n.code,{children:"header"})," and ",e.jsx(n.code,{children:"footer"}),")."]}),`
`,e.jsx(n.h3,{id:"navigation",children:"navigation"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"navigation"}),` landmark identifies groups (e.g. lists) of links that are intended to be used for website or page content navigation.
There can be multiple `,e.jsx(n.code,{children:"navigation"})," elements on a page, but if a ",e.jsx(n.code,{children:"navigation"})," landmark has the same set of links as another ",e.jsx(n.code,{children:"navigation"})," landmark on the page (think mobile versus desktop), use the same HTML ",e.jsx(n.code,{children:"label"})," attribute for both."]}),`
`,e.jsxs(n.p,{children:["All elements except ",e.jsx(n.code,{children:"Link"})," under ",e.jsx(n.a,{href:"../?path=/docs/components-navigation",children:"Navigation"})," already use ",e.jsx(n.code,{children:"nav"})," so consuming apps only need to define when ",e.jsx(n.code,{children:"Link"})," is being used as a ",e.jsx(n.code,{children:"navigation"})," element."]}),`
`,e.jsx(n.h3,{id:"region",children:"region"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"region"})," landmark is sort of a catch-all: a perceivable section containing content that is sufficiently important that users may want to be able to navigate to the section directly, and to have it listed in a summary of the page. ",e.jsx(n.code,{children:"Region"})," landmarks are usually nested inside ",e.jsx(n.code,{children:"main"}),"."]}),`
`,e.jsxs(n.p,{children:["Since ",e.jsx(n.code,{children:"region"})," is for content that doesn't fit under other landmarks, it has no default corresponding HTML element. A ",e.jsx(n.code,{children:"<section>"})," element can become a ",e.jsx(n.code,{children:"region"})," landmark if it is provided an accessible name (for instance, by giving it an ",e.jsx(n.code,{children:"aria-label"})," or ",e.jsx(n.code,{children:"aria-labelledby"})," attribute)."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"region"})," should always be applied by the consuming app, since it is specific to the content being presented."]}),`
`,e.jsxs(n.p,{children:["Note: There's not always a clear line between ",e.jsx(n.code,{children:"complementary"})," content and content that deserves its own ",e.jsx(n.code,{children:"region"}),", but a good rule of a thumb is that ",e.jsx(n.code,{children:"complementary"})," content should support or modify the main content of the page, while ",e.jsx(n.code,{children:"region"})," should represent its own separate information."]}),`
`,e.jsx(n.h3,{id:"search",children:"search"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"search"})," landmark contains the page's search and filter functionality, which will likely include form controls (such as an ",e.jsx(n.code,{children:'input type="search"'}),")."]}),`
`,e.jsxs(n.p,{children:["Inspect below to see ",e.jsx(n.code,{children:"<search>"})," in the DOM—notice that it wraps the ",e.jsx(n.code,{children:"h2"}),", all of the ",e.jsx(n.code,{children:"input"})," elements, and the ",e.jsx(n.code,{children:"button"}),", not just the searchbar:"]}),`
`,e.jsx(o,{of:c}),`
`,e.jsxs(n.p,{children:["Interfaces can have multiple ",e.jsx(n.code,{children:"search"})," regions, and each should be identified with a unique label."]}),`
`,e.jsx(n.h2,{id:"resources",children:"Resources"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/",rel:"nofollow",children:"WAI-ARIA landmark regions"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.scottohara.me/blog/2018/03/03/landmarks.html",rel:"nofollow",children:"Accessible landmarks"})}),`
`]})]})}function x(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{x as default};
