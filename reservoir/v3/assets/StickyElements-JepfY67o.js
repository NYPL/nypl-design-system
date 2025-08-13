import{u as l,j as e,M as r,L as t,S as i}from"./iframe-CFLVJZOZ.js";function o(s){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Accessibility Guide/Sticky Elements"}),`
`,e.jsx(n.h1,{id:"sticky-elements",children:"Sticky Elements"}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#general-information",target:"_self",children:"General Information"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#NYPL-patterns",target:"_self",children:"NYPL Patterns"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#general-issues",target:"_self",children:"General Issues"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#implementation",target:"_self",children:"Implementation"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#resources",target:"_self",children:"Resources"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"general-information",children:"General Information"}),`
`,e.jsxs(n.p,{children:["Sticky elements (",e.jsx(n.code,{children:"position: sticky"}),") switch between relative and fixed position. They move with the viewport as the user scrolls, so they are visible until they hit a given breakpoint."]}),`
`,e.jsx(n.p,{children:`Avoid sticky elements in general. The most common use case, a sticky header, is only useful when users will be repeatedly accessing the menu and scrolling through multiple pages.
This is why you often see them used on e-commerce sites. If users don't need immediate navigation and will generally stay on one or two pages, a sticky header is unnecessary.`}),`
`,e.jsx(n.p,{children:`Additionally, sticky headers can obscure other elements on the page. For large menus that will cover parts of the page, consider an accordion or just making it fixed. This keeps the header in place
at the top of the screen, so users will only need to cover part of the screen when they return to the header.`}),`
`,e.jsx(n.h2,{id:"nypl-patterns",children:"NYPL Patterns"}),`
`,e.jsx(n.p,{children:`Sticky elements should be used only for critical information that needs to remain visible, or to allow a continuous process for the user. For the new Digital Collections site, we chose to accept the shortcomings of the sticky header
to maintain parity with the experience and feel of the old site.`}),`
`,e.jsx(n.h2,{id:"general-issues",children:"General Issues"}),`
`,e.jsx(n.p,{children:"When using a sticky element on a page, consider the following UX issues:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"How much space is it taking up?"}),`
`,e.jsx(n.li,{children:"Is it difficult to access when tabbing forward and backwards?"}),`
`,e.jsx(n.li,{children:"Does it break when users zoom in on mobile devices?"}),`
`,e.jsx(n.li,{children:"Is it hiding focused elements?"}),`
`]}),`
`,e.jsxs(n.p,{children:["The solution presented below only addresses the ",e.jsx(n.em,{children:"last"}),` of these concerns: preventing a sticky
header from hiding focused elements.`]}),`
`,e.jsx(n.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsxs(n.p,{children:[`Sighted keyboard users tab through a page to display more content and to access buttons and links.
To return to the top of the page, keyboard users tab backwards. If the header on a page uses `,e.jsx(n.code,{children:"position: sticky"}),`,
tabbing backwards moves the focused element underneath the header, so the user can no longer see where the focus is.
A similar issue arises with users tabbing forwards against a sticky footer.`]}),`
`,e.jsxs(n.p,{children:["The apparent solution would be using ",e.jsx(n.code,{children:"scroll-margin-top"}),` to snap-scroll the viewport to wherever the focused
element is, but that's not supported on several major browsers.`]}),`
`,e.jsx(n.p,{children:`Instead, this approach uses a combination of CSS, HTML, and Typescript to check whether a focused element needs a sticky margin by
dynamically calculating boundary interactions, then applies that margin (pushing page up) accordingly. This React hook is called by a
focus event on any page element or a ResizeObserver event on the sticky element.`}),`
`,e.jsxs(n.p,{children:["This approach was first implemented with the Digital Collections header, using a ",e.jsx(n.a,{href:"https://github.com/NYPL/digital-collections/blob/main/src/hooks/useScrolled.ts",rel:"nofollow",children:"custom hook"})," on the header."]}),`
`,e.jsx(n.p,{children:"This code can be modified to apply to any sticky element, alongside"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["HTML data attributes on the sticky element, ex. ",e.jsx(n.code,{children:"<header data-sticky-header> ... </header>"})]}),`
`,e.jsxs(n.li,{children:["CSS: ",e.jsx(n.code,{children:"position: sticky"})," on the sticky element"]}),`
`]}),`
`,e.jsxs(n.p,{children:["The hook first defines the ",e.jsx(n.code,{children:"sticky"})," object:"]}),`
`,e.jsx(i,{code:`
let sticky: {
header?: HTMLElement | null;
// Could have 'footer' as well here, for example.
offset?: number;
} = {};
`}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"applyStickyMargin()"}),` contains most of the logic, namely calculating boundary interactions
between the sticky object and the focused object, then applying that margin accordingly:`]}),`
`,e.jsx(i,{code:`
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
`,e.jsxs(n.p,{children:["For the complete code and more information, check out the ",e.jsx(n.a,{href:"https://github.com/NYPL/digital-collections/blob/main/src/hooks/useScrolled.ts",rel:"nofollow",children:"hook"})," and its behavior on the ",e.jsx(n.a,{href:"https://github.com/NYPL/digital-collections",rel:"nofollow",children:"Digital Collections site"}),"."]}),`
`,e.jsx(n.h2,{id:"resources",children:"Resources"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.tpgi.com/prevent-focused-elements-from-being-obscured-by-sticky-headers/",rel:"nofollow",children:"TPGi: Prevent focused elements from being obscured by sticky headers"}),`
(This article is the source of the above approach, and this guide is pretty much an abridged summary of this article. Additionally, the code given here is Javascript and includes more sticky elements like a footer.)`]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.smashingmagazine.com/2023/05/sticky-menus-ux-guidelines/",rel:"nofollow",children:"Designing Sticky Menus: UX Guidelines"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://technology.blog.gov.uk/2018/05/21/sticky-elements-functionality-and-accessibility-testing/",rel:"nofollow",children:"Sticky elements: functionality and accessibility testing"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://design.gs.com/patterns/sticky-elements",rel:"nofollow",children:"Sticky Elements"})}),`
`]})]})}function a(s={}){const{wrapper:n}={...l(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{a as default};
