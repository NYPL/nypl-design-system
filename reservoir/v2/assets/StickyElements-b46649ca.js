import{j as n,a as t,F as a}from"./jsx-runtime-fdf4db99.js";import{M as c,b as s}from"./index-445595fc.js";import{L as i}from"./Link-24c1437a.js";import{u as l}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-da8f5748.js";import"../sb-preview/runtime.js";import"./index-42773b54.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-2a967270.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-33c8ee8e.js";import"./index-314a82e0.js";import"./index-11d98b33.js";import"./index-356e4a49.js";import"./index-8f383b84.js";import"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import"./chakra-ui-layout.esm-e0dbb94e.js";import"./Icon-4eeffe51.js";function r(o){const e=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",p:"p",code:"code",em:"em",a:"a",ol:"ol"},l(),o.components);return t(a,{children:[n(c,{title:"Accessibility Guide/Sticky Elements"}),`
`,n(e.h1,{id:"sticky-elements",children:"Sticky Elements"}),`
`,n(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:[`
`,n(i,{href:"#general-information",target:"_self",children:"General Information"}),`
`]}),`
`,t(e.li,{children:[`
`,n(i,{href:"#NYPL-patterns",target:"_self",children:"NYPL Patterns"}),`
`]}),`
`,t(e.li,{children:[`
`,n(i,{href:"#general-issues",target:"_self",children:"General Issues"}),`
`]}),`
`,t(e.li,{children:[`
`,n(i,{href:"#implementation",target:"_self",children:"Implementation"}),`
`]}),`
`,t(e.li,{children:[`
`,n(i,{href:"#resources",target:"_self",children:"Resources"}),`
`]}),`
`]}),`
`,n(e.h2,{id:"general-information",children:"General Information"}),`
`,t(e.p,{children:["Sticky elements (",n(e.code,{children:"position: sticky"}),") switch between relative and fixed position. They move with the viewport as the user scrolls, so they are visible until they hit a given breakpoint."]}),`
`,n(e.p,{children:`Avoid sticky elements in general. The most common use case, a sticky header, is only useful when users will be repeatedly accessing the menu and scrolling through multiple pages.
This is why you often see them used on e-commerce sites. If users don't need immediate navigation and will generally stay on one or two pages, a sticky header is unnecessary.`}),`
`,n(e.p,{children:`Additionally, sticky headers can obscure other elements on the page. For large menus that will cover parts of the page, consider an accordion or just making it fixed. This keeps the header in place
at the top of the screen, so users will only need to cover part of the screen when they return to the header.`}),`
`,n(e.h2,{id:"nypl-patterns",children:"NYPL Patterns"}),`
`,n(e.p,{children:`Sticky elements should be used only for critical information that needs to remain visible, or to allow a continuous process for the user. For the new Digital Collections site, we chose to accept the shortcomings of the sticky header
to maintain parity with the experience and feel of the old site.`}),`
`,n(e.h2,{id:"general-issues",children:"General Issues"}),`
`,n(e.p,{children:"When using a sticky element on a page, consider the following UX issues:"}),`
`,t(e.ul,{children:[`
`,n(e.li,{children:"How much space is it taking up?"}),`
`,n(e.li,{children:"Is it difficult to access when tabbing forward and backwards?"}),`
`,n(e.li,{children:"Does it break when users zoom in on mobile devices?"}),`
`,n(e.li,{children:"Is it hiding focused elements?"}),`
`]}),`
`,t(e.p,{children:["The solution presented below only addresses the ",n(e.em,{children:"last"}),` of these concerns: preventing a sticky
header from hiding focused elements.`]}),`
`,n(e.h2,{id:"implementation",children:"Implementation"}),`
`,t(e.p,{children:[`Sighted keyboard users tab through a page to display more content and to access buttons and links.
To return to the top of the page, keyboard users tab backwards. If the header on a page uses `,n(e.code,{children:"position: sticky"}),`,
tabbing backwards moves the focused element underneath the header, so the user can no longer see where the focus is.
A similar issue arises with users tabbing forwards against a sticky footer.`]}),`
`,t(e.p,{children:["The apparent solution would be using ",n(e.code,{children:"scroll-margin-top"}),` to snap-scroll the viewport to wherever the focused
element is, but that's not supported on several major browsers.`]}),`
`,n(e.p,{children:`Instead, this approach uses a combination of CSS, HTML, and Typescript to check whether a focused element needs a sticky margin by
dynamically calculating boundary interactions, then applies that margin (pushing page up) accordingly. This React hook is called by a
focus event on any page element or a ResizeObserver event on the sticky element.`}),`
`,t(e.p,{children:["This approach was first implemented with the Digital Collections header, using a ",n(e.a,{href:"https://github.com/NYPL/digital-collections/blob/main/src/hooks/useScrolled.ts",target:"_blank",rel:"nofollow noopener noreferrer",children:"custom hook"})," on the header."]}),`
`,n(e.p,{children:"This code can be modified to apply to any sticky element, alongside"}),`
`,t(e.ol,{children:[`
`,t(e.li,{children:["HTML data attributes on the sticky element, ex. ",n(e.code,{children:"<header data-sticky-header> ... </header>"})]}),`
`,t(e.li,{children:["CSS: ",n(e.code,{children:"position: sticky"})," on the sticky element"]}),`
`]}),`
`,t(e.p,{children:["The hook first defines the ",n(e.code,{children:"sticky"})," object:"]}),`
`,n(s,{code:`
let sticky: {
  header?: HTMLElement | null;
  // Could have 'footer' as well here, for example.
  offset?: number;
} = {};
`}),`
`,t(e.p,{children:[n(e.code,{children:"applyStickyMargin()"}),` contains most of the logic, namely calculating boundary interactions
between the sticky object and the focused object, then applying that margin accordingly:`]}),`
`,n(s,{code:`
const applyStickyMargin = (sticky) => {
  // Specifying which element on the page is focused, if none then defaulting to body.
  const focused = (document.activeElement || document.body) as HTMLElement;
  let applicable = focused !== document.body;
  if (applicable && sticky.header) {
    applicable = !sticky.header.contains(focused);
  }
  // Calculating difference between the edge of the header and the focused element.
  if (applicable) {
    const edge = {
      header: sticky.header ? sticky.header.getBoundingClientRect().bottom + sticky.offset : 0,
    };
    const diff = sticky.header ? focused.getBoundingClientRect().top - edge.header : 0;
  // Then scrolls window by that difference (plus a little padding).
    if (diff < 0) {
      window.scrollBy(0, diff - 10);
    }
  }
};
`,language:"tsx"}),`
`,t(e.p,{children:["For the complete code and more information, check out the ",n(e.a,{href:"https://github.com/NYPL/digital-collections/blob/main/src/hooks/useScrolled.ts",target:"_blank",rel:"nofollow noopener noreferrer",children:"hook"})," and its behavior on the ",n(e.a,{href:"https://github.com/NYPL/digital-collections",target:"_blank",rel:"nofollow noopener noreferrer",children:"Digital Collections site"}),"."]}),`
`,n(e.h2,{id:"resources",children:"Resources"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:[`
`,n(i,{href:"https://www.tpgi.com/prevent-focused-elements-from-being-obscured-by-sticky-headers/",children:"TPGi: Prevent focused elements from being obscured by sticky headers"}),`
`,"(This article is the source of the above approach, and this guide is pretty much an abridged summary of this article. Additionally, the code given here is Javascript and includes more sticky elements like a footer.)"]}),`
`,t(e.li,{children:[`
`,n(i,{href:"https://www.smashingmagazine.com/2023/05/sticky-menus-ux-guidelines/",children:" Designing Sticky Menus: UX Guidelines"}),`
`]}),`
`,t(e.li,{children:[`
`,n(i,{href:"https://technology.blog.gov.uk/2018/05/21/sticky-elements-functionality-and-accessibility-testing/",children:"Sticky elements: functionality and accessibility testing"}),`
`]}),`
`,t(e.li,{children:[`
`,n(i,{href:"https://design.gs.com/patterns/sticky-elements",children:"Sticky Elements"}),`
`]}),`
`]})]})}function _(o={}){const{wrapper:e}=Object.assign({},l(),o.components);return e?n(e,Object.assign({},o,{children:n(r,o)})):r(o)}export{_ as default};
//# sourceMappingURL=StickyElements-b46649ca.js.map
