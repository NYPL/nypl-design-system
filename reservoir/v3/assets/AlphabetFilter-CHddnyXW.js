import{u as c,j as e,M as d,L as s,bv as h,C as i,bw as p,S as r}from"./iframe-D93LbwGv.js";import{A as l,W as o,a as x,S as u,b as j,U as g}from"./AlphabetFilter.stories-CbBDudoL.js";import{C as m}from"./ComponentChangelogTable-Ck_3mwrR.js";import"./storybookUtils-BmTl87w5.js";const b=[{date:"2025-02-13",version:"3.5.4",type:"Update",affects:["Styles"],notes:["Removed bold font weight."]},{date:"2024-03-14",version:"3.0.0",type:"Update",affects:["Styles"],notes:["Chakra 2.8 update."]},{date:"2023-12-07",version:"2.1.3",type:"Update",affects:["Accessibility","Documentation"],notes:["Updated the `headingText` prop to allow JSX to render custom heading elements for accessible heading hierarchy."]}];function a(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...c(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:l}),`
`,e.jsx(t.h1,{id:"alphabetfilter",children:"AlphabetFilter"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Component Version"}),e.jsx(t.th,{children:"DS Version"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Added"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"1.2.0"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Latest"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"3.5.4"})})]})]})]}),`
`,e.jsx(t.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[`
`,e.jsx(s,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(s,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(s,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(s,{href:"#with-custom-heading",target:"_self",children:"With Custom Heading"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(s,{href:"#examples",target:"_self",children:"Examples"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(s,{href:"#changelog",target:"_self",children:"Changelog"}),`
`]}),`
`]}),`
`,e.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(h,{of:l}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"AlphabetFilter"}),` component renders a list of letter buttons, a pound sign
button, and show all (reset) button that can be used to select one alphabetical
filter. Displaying updated results based on the user's selection is the
responsibility of the consuming app.`]}),`
`,e.jsx(t.h3,{id:"consuming-app-responsibilities",children:"Consuming App Responsibilities"}),`
`,e.jsxs(t.p,{children:["When the ",e.jsx(t.code,{children:"onClick"}),` handler is executed, it will be up to the consuming app to
execute filtering updates in real-time on the client-side or to perform a full
page refresh.`]}),`
`,e.jsxs(t.p,{children:["If the ",e.jsx(t.code,{children:"filterValue"})," passed to ",e.jsx(t.code,{children:"onClick"})," is ",e.jsx(t.code,{children:"showAll"}),` (meaning the Show All
button was clicked), all filtering should be removed from the list of items the
component is addressing and the full list of items should be displayed.`]}),`
`,e.jsx(t.h2,{id:"component-props",children:"Component Props"}),`
`,e.jsx(i,{of:o}),`
`,e.jsx(p,{of:o}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"AlphabetFilter"})," component renders as an HTML ",e.jsx(t.code,{children:"<nav>"}),` element with a
WAI-ARIA role of `,e.jsx(t.code,{children:'role="navigation"'}),`. Each letter button has an attribute of
`,e.jsx(t.code,{children:'aria-label="Page {#}"'}),", where ",e.jsx(t.code,{children:"{#}"}),` is equal to a button's letter value. The
`,e.jsx(t.code,{children:"Show All"})," button has ",e.jsx(t.code,{children:'aria-label="Show All"'}),` applied. When a letter button is
set to a current state (when a button is clicked or `,e.jsx(t.code,{children:"currentLetter"}),` is
programmatically set), `,e.jsx(t.code,{children:'aria-current="page"'}),` is applied to the button and
removed from all other letter buttons.`]}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"AlphabetFilter"}),` component is accessible via keyboard. The color contrast
between foreground color and background color is 4.5:1. If text size is 200%,
the button scales with text so there is no overlap.`]}),`
`,e.jsxs(t.p,{children:["Only one ",e.jsx(t.code,{children:"AlphabetFilter"}),` component should be rendered on a page. This is
because only one HTML `,e.jsx(t.code,{children:"<nav>"})," element with an ",e.jsx(t.code,{children:"aria-label"}),` attribute value of
`,e.jsx(t.code,{children:'"Filter by letter"'})," should be rendered on a page. The DS ",e.jsx(t.code,{children:"AlphabetFilter"}),`
component renders this HTML landmark, so only one component must be rendered on
a page.`]}),`
`,e.jsx(t.p,{children:"Resources:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current",rel:"nofollow",children:"MDN aria-current"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav#exampless",rel:"nofollow",children:"MDN nav"})}),`
`]}),`
`,e.jsx(t.h3,{id:"consuming-app-accessibility",children:"Consuming App Accessibility"}),`
`,e.jsxs(t.p,{children:[`If filter results are refreshed on the client-side without a full page refresh,
the updated filter results must be the child of an element that has the
`,e.jsx(t.code,{children:"role=”alert”"}),` attribute applied or as a child of a Live Region container with
the `,e.jsx(t.code,{children:'aria-live="polite"'})," attribute applied."]}),`
`,e.jsx(t.h2,{id:"with-custom-heading",children:"With Custom Heading"}),`
`,e.jsxs(t.p,{children:["By default, the ",e.jsx(t.code,{children:"AlphabetFilter"})," will render an ",e.jsx(t.code,{children:"h2"}),` element when a string is
passed to the `,e.jsx(t.code,{children:"headingText"}),` component. If this is an accessibility issue, it's
possible to pass in a custom heading element.`]}),`
`,e.jsxs(t.p,{children:["In the following example, an ",e.jsx(t.code,{children:"h4"})," is rendered through the DS ",e.jsx(t.code,{children:"Heading"})," component."]}),`
`,e.jsx(r,{code:`

const customH4 = <Heading level="h4">Custom H4 Heading</Heading>;

<AlphabetFilter headingText={customH4} {...props} />
`,language:"tsx"}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.h3,{id:"alphabetfilter-with-activeletters-set",children:"AlphabetFilter with activeLetters set"}),`
`,e.jsxs(t.p,{children:["Pass an array of letters to the ",e.jsx(t.code,{children:"activeLetters"}),` prop to narrow filter options.
Values not passed through the prop will always be disabled.`]}),`
`,e.jsxs(t.p,{children:[`A use case for this is when the consuming app does not have results values
passed to `,e.jsx(t.code,{children:"activeLetters"})," to limit filter options available to the user."]}),`
`,e.jsxs(t.p,{children:["Ex. ",e.jsx(t.code,{children:'"#", "a", "c", "d", "e", "h", "l", "m", "n", "p", "r", "s"]'})]}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(t.h3,{id:"set-letter-selection-programmatically",children:"Set letter selection programmatically"}),`
`,e.jsxs(t.p,{children:["Use the ",e.jsx(t.code,{children:"currentLetter"}),` prop to pass a single letter value to set the selected
letter page when the component first renders, or to programmatically set the
current letter.`]}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(t.h3,{id:"dynamically-update-currentletter-using-onclick",children:"Dynamically update currentLetter using onClick"}),`
`,e.jsxs(t.p,{children:["You can pass and extract the value through the ",e.jsx(t.code,{children:"currentLetter"})," and ",e.jsx(t.code,{children:"onClick"}),`
props. `,e.jsx(t.code,{children:"onClick"})," is called with the corresponding ",e.jsx(t.code,{children:"Button"}),` value every time one
of the 28 buttons is clicked.`]}),`
`,e.jsx(t.p,{children:`Try it out: open up the browser's console to see new values being logged on each
change.`}),`
`,e.jsx(r,{code:`
export function CurrentLetterExample() {
const [currentLetter, setCurrentLetter] = React.useState();
const onClick = (letter: string) => {
  console.log(letter);
  setCurrentLetter(letter);
};
return <AlphabetFilter currentLetter={currentLetter} onClick={onClick} />;
}
`,language:"tsx"}),`
`,e.jsx(i,{of:g}),`
`,e.jsx(t.h2,{id:"changelog",children:"Changelog"}),`
`,e.jsx(m,{changelogData:b})]})}function C(n={}){const{wrapper:t}={...c(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a(n)}export{C as default};
