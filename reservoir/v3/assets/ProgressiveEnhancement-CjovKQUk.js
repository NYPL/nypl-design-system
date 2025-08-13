import{u as t,j as e,M as o,L as r,S as s,y as c,bu as d,B as a}from"./iframe-CFLVJZOZ.js";const h=""+new URL("progressive-enhancement-D6OmyPF-.png",import.meta.url).href;function l(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Accessibility Guide/Progressive Enhancement"}),`
`,e.jsx(n.h1,{id:"progressive-enhancement",children:"Progressive Enhancement"}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(r,{href:"#general-information",target:"_self",children:"General Information"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(r,{href:"#nypl-and-ds-problem",target:"_self",children:"NYPL and DS Problem"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(r,{href:"#html-button-issue",target:"_self",children:"HTML Button Issue"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(r,{href:"#component-audit",target:"_self",children:"Component Audit"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(r,{href:"#general-recommendations",target:"_self",children:"General Recommendations"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(r,{href:"#resources",target:"_self",children:"Resources"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"general-information",children:"General Information"}),`
`,e.jsx(n.p,{children:`Progressive enhancement is a frontend development strategy and mindset that
emphasizes building a "basic", functional version of a website or component first,
and then adding more advanced features and enhancements. This approach ensures
that the core functionality is accessible to all users, regardless of their
device, browser capabilities, or connection quality, rather than focusing on the
few who intentionally disable JavaScript.`}),`
`,e.jsx(n.p,{children:`A key benefit of progressive enhancement is that it prioritizes a fast and
reliable first render of the page. By ensuring the base HTML delivers meaningful
content and functionality upfront, we can improve usability and equity for users
in bandwidth-constrained environments. Once the foundation is in place, we can
then provide additional enhancements for users with modern browsers and devices.`}),`
`,e.jsx(n.p,{children:`On the development side, this inclusive design philosophy focuses on knowing and
implementing web fundamentals, such as HTML and CSS, before heavily relying on
JavaScript. Client-side JavaScript for core functionality places the burden on
the user's device and browser to download, parse, and execute JavaScript code.`}),`
`,e.jsx(n.h2,{id:"nypl-and-ds-problem",children:"NYPL and DS Problem"}),`
`,e.jsx(n.p,{children:`When JavaScript is turned off in the browser, certain NYPL user interfaces and
features do not work. There are various reasons why this is, including how the
application is architected, how data is fetched, how data is rendered, and
whether the vendors we are using support it. Many issues, however, point back
to DS components.`}),`
`,e.jsx(n.h2,{id:"html-button-issue",children:"HTML Button Issue"}),`
`,e.jsxs(n.p,{children:["HTML ",e.jsx(n.code,{children:"<button>"}),"s can only work without JavaScript in the following contexts."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["When used inside a ",e.jsx(n.code,{children:"<form>"}),` element, if it has an attribute of type="submit",
the button will be clickable.`]}),`
`,e.jsxs(n.li,{children:["When used inside a ",e.jsx(n.code,{children:"<form>"}),` element, if it has an attribute of type="reset",
the button will be clickable and clear out input elements.`]}),`
`]}),`
`,e.jsxs(n.p,{children:["However, there are several DS components that use the ",e.jsx(n.code,{children:"Button"}),` component (and
therefore the `,e.jsx(n.code,{children:"<button>"}),` HTML element) outside of a form to open, close, or
perform other user actions. These components cannot fully function without
JavaScript.`]}),`
`,e.jsx(n.h2,{id:"component-audit",children:"Component Audit"}),`
`,e.jsx(n.p,{children:`As of v3.6.1, the DS contains 25 fully functional components, and 34 components
that need JavaScript to work.`}),`
`,e.jsx(n.p,{children:"The following (25) components are fully functional without JavaScript:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Breadcrumbs"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Card"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"FeaturedContent"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"FieldSet"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Footer"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Form"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"FormRow"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"FormField"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"HelperErrorText"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Hero"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"HorizontalRule"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Icon"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Image"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Label"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Link"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"List"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Logo"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"SimpleGrid"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"SkipNavigation"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"StatusBadge"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"StructuredContent"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"StyledList"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Table"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Template"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Text"})}),`
`]}),`
`,e.jsxs(n.p,{children:["The following (16) use the HTML ",e.jsx(n.code,{children:"<button>"}),` element and are not fully functional
without JavaScript:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Accordion"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"AlphabetFilter"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Banner"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Button"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"ButtonGroup"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Header"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Menu"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Modal"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"MultiSelect"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"MultiSelectGroup"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"NewsletterSignup"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Notification"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Pagination"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"SubNav"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Tabs"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"TagSet"})}),`
`]}),`
`,e.jsx(n.p,{children:"The following (15) components need a pattern update to work without JavaScript:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Checkbox"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"CheckboxGroup"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"FeedbackBox"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"FilterBarInline"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"FilterBarPopup"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"ProgressIndicator"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Radio"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"RadioGroup"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"SearchBar"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Select"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"SkeletonLoader"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Slider"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"TextInput"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Toggle"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Tooltip"})}),`
`]}),`
`,e.jsx(n.p,{children:"The following (2) can't be fixed due to browser limitations:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"AudioPlayer"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"VideoPlayer"})}),`
`]}),`
`,e.jsx(n.p,{children:"The following (1) depend on external libraries:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"DatePicker"})}),`
`]}),`
`,e.jsx(n.h2,{id:"general-recommendations",children:"General Recommendations"}),`
`,e.jsxs(n.p,{children:["Based on the ",e.jsx(n.a,{href:"https://github.com/NYPL/engineering-general/blob/main/standards/javscript.md",rel:"nofollow",children:"Engineering General JavaScript standard"}),`,
a no-JavaScript fallback is preferable but not required. Our recommendation is
to fix what we can. This audit gives us a better understanding of what components
currently do not work without JavasSript, and which ones we have the opportunity
to change (with time and resources).`]}),`
`,e.jsx(n.p,{children:`Various new pages and features being built for NYPL have JavaScript-heavy
requirements. We recommend and encourage teams to add a noscript fallback
message. This would be an HTML/CSS snippet (not React) that instructs patrons
to enable Javascript to use the site.`}),`
`,e.jsx(n.h2,{id:"noscript-fallback-example",children:"noscript Fallback Example"}),`
`,e.jsxs(n.p,{children:["We recommend placing the following ",e.jsx(n.code,{children:"noscript"}),` snippet at the top of the
`,e.jsx(n.code,{children:"<body>"})," tag in your HTML for the global message."]}),`
`,e.jsx(s,{language:"html",code:`
<noscript>
<aside className="noscript-banner">
  <h2>JavaScript is disabled.</h2>
  <div>Some features may not work as expected.</div>
</aside>
<style>
  .noscript-banner {
    background: #f9e08e;
    color: #2e2e2e;
    padding: 16px;
    text-align: center;
    font-size: 16px;
  }
</style>
</noscript>
`}),`
`,e.jsx(n.h3,{id:"nextjs-example",children:"Next.js Example"}),`
`,e.jsxs(n.p,{children:["If you are using the Pages Router, you can add the ",e.jsx(n.code,{children:"noscript"}),` tag in the
`,e.jsx(n.code,{children:"_document.js"})," file."]}),`
`,e.jsxs(n.p,{children:["If you are using the App Router, you can add the ",e.jsx(n.code,{children:"noscript"}),` tag in the
`,e.jsx(n.code,{children:"layout.js"})," file."]}),`
`,e.jsxs(n.p,{children:["This will ensure that the ",e.jsx(n.code,{children:"noscript"}),` tag is rendered on the server side for
both the Pages and App Router.`]}),`
`,e.jsx(c,{alt:"Example of banner for no JavaScript on Digital Collections",border:"1px solid var(--nypl-colors-ui-border-default)",src:h,...d}),`
`,e.jsx(a,{content:e.jsxs(e.Fragment,{children:[e.jsx(n.strong,{children:"IMPORTANT:"})," The above example needs to be modified to work appropriately in Next.js. See the"," ",e.jsx(n.a,{href:"https://nextjs.org/docs/app/getting-started/css",children:"Next.js documentation"})," ","for other approaches."]}),type:"informative"}),`
`,e.jsx(s,{language:"html",code:`
<style>
{
  ".noscript-banner {background: #f9e08e;color: #2e2e2e;padding: 16px;text-align: center;font-size: 16px;}"
}
</style>
`}),`
`,e.jsx(n.h2,{id:"resources",children:"Resources"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement",rel:"nofollow",children:"MDN Progressive Enhancement"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://piccalil.li/blog/its-about-time-i-tried-to-explain-what-progressive-enhancement-actually-is/",rel:"nofollow",children:"It's About Time I Tried to Explain What Progressive Enhancement Actually Is"})}),`
`]})]})}function j(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(l,{...i})}):l(i)}export{j as default};
