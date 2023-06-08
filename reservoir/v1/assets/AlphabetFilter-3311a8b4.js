import{j as t,a as n,F as d}from"./jsx-runtime-09ad29cb.js";import{M as h,D as p,C as i,A as u,b as m}from"./index-5d3bb37f.js";import{A as o,W as c,S as b,a as f,U as g}from"./AlphabetFilter.stories-031a8c8f.js";import{L as l}from"./Link-0ed02cf7.js";import{u as s}from"./index-a14fc4fc.js";import"./index-f2bd0723.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-359c5387.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-86fba1ca.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-22f77b05.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-944fe3e7.js";import"./index-0a26bc51.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-b629ee11.js";import"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import"./chakra-ui-layout.esm-b2fa9d31.js";import"./index-6148c31a.js";import"./AlphabetFilter-d50cdd04.js";import"./Button-a3ea41e0.js";import"./Icon-6616a4b9.js";import"./chakra-ui-hooks.esm-02e82f78.js";import"./chakra-ui-visually-hidden.esm-1c1b3639.js";import"./ComponentWrapper-82a15cf7.js";import"./Heading-2ec2ea62.js";import"./Text-eabcdc0a.js";function a(r){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",h3:"h3",a:"a"},s(),r.components);return n(d,{children:[t(h,{of:o}),`
`,t(e.h1,{id:"alphabetfilter",children:"AlphabetFilter"}),`
`,n(e.table,{children:[t(e.thead,{children:n(e.tr,{children:[t(e.th,{children:"Component Version"}),t(e.th,{children:"DS Version"})]})}),n(e.tbody,{children:[n(e.tr,{children:[t(e.td,{children:"Added"}),t(e.td,{children:t(e.code,{children:"1.2.0"})})]}),n(e.tr,{children:[t(e.td,{children:"Latest"}),t(e.td,{children:t(e.code,{children:"1.5.0"})})]})]})]}),`
`,t(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,t(l,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,n(e.li,{children:[`
`,t(l,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,n(e.li,{children:[`
`,t(l,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,n(e.li,{children:[`
`,t(l,{href:"#examples",target:"_self",children:"Examples"}),`
`]}),`
`]}),`
`,t(e.h2,{id:"overview",children:"Overview"}),`
`,t(p,{of:o}),`
`,n(e.p,{children:["The ",t(e.code,{children:"AlphabetFilter"}),` component renders a list of letter buttons, a pound sign
button, and show all (reset) button that can be used to select one alphabetical
filter. Displaying updated results based on the user's selection is the
responsibility of the consuming app.`]}),`
`,t(e.h3,{id:"consuming-app-responsibilities",children:"Consuming App Responsibilities"}),`
`,n(e.p,{children:["When the ",t(e.code,{children:"onClick"}),` handler is executed, it will be up to the consuming app to
execute filtering updates in real-time on the client-side or to perform a full
page refresh.`]}),`
`,n(e.p,{children:["If the ",t(e.code,{children:"filterValue"})," passed to ",t(e.code,{children:"onClick"})," is ",t(e.code,{children:"showAll"}),` (meaning the Show All
button was clicked), all filtering should be removed from the list of items the
component is addressing and the full list of items should be displayed.`]}),`
`,t(e.h2,{id:"component-props",children:"Component Props"}),`
`,t(i,{of:c}),`
`,t(u,{of:c}),`
`,t(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n(e.p,{children:["The ",t(e.code,{children:"AlphabetFilter"})," component renders as an HTML ",t(e.code,{children:"<nav>"}),` element with a
WAI-ARIA role of `,t(e.code,{children:'role="navigation"'}),`. Each letter button has an attribute of
`,t(e.code,{children:'aria-label="Page {#}"'}),", where ",t(e.code,{children:"{#}"}),` is equal to a button's letter value. The
`,t(e.code,{children:"Show All"})," button has ",t(e.code,{children:'aria-label="Show All"'}),` applied. When a letter button is
set to a current state (when a button is clicked or `,t(e.code,{children:"currentLetter"}),` is
programmatically set), `,t(e.code,{children:'aria-current="page"'}),` is applied to the button and
removed from all other letter buttons.`]}),`
`,n(e.p,{children:["The ",t(e.code,{children:"AlphabetFilter"}),` component is accessible via keyboard. The color contrast
between foreground color and background color is 4.5:1. If text size is 200%,
the button scales with text so there is no overlap.`]}),`
`,n(e.p,{children:["Only one ",t(e.code,{children:"AlphabetFilter"}),` component should be rendered on a page. This is
because only one HTML `,t(e.code,{children:"<nav>"})," element with an ",t(e.code,{children:"aria-label"}),` attribute value of
`,t(e.code,{children:'"Filter by letter"'})," should be rendered on a page. The DS ",t(e.code,{children:"AlphabetFilter"}),`
component renders this HTML landmark, so only one component must be rendered on
a page.`]}),`
`,t(e.p,{children:"Resources:"}),`
`,n(e.ul,{children:[`
`,t(e.li,{children:t(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current",target:"_blank",rel:"nofollow noopener noreferrer",children:"MDN aria-current"})}),`
`,t(e.li,{children:t(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav#exampless",target:"_blank",rel:"nofollow noopener noreferrer",children:"MDN nav"})}),`
`]}),`
`,t(e.h3,{id:"consuming-app-accessibility",children:"Consuming App Accessibility"}),`
`,n(e.p,{children:[`If filter results are refreshed on the client-side without a full page refresh,
the updated filter results must be the child of an element that has the
`,t(e.code,{children:"role=”alert”"}),` attribute applied or as a child of a Live Region container with
the `,t(e.code,{children:'aria-live="polite"'})," attribute applied."]}),`
`,t(e.h2,{id:"examples",children:"Examples"}),`
`,t(e.h3,{id:"alphabetfilter-with-activeletters-set",children:"AlphabetFilter with activeLetters set"}),`
`,n(e.p,{children:["Pass an array of letters to the ",t(e.code,{children:"activeLetters"}),` prop to narrow filter options.
Values not passed through the prop will always be disabled.`]}),`
`,n(e.p,{children:[`A use case for this is when the consuming app does not have results values
passed to `,t(e.code,{children:"activeLetters"})," to limit filter options available to the user."]}),`
`,n(e.p,{children:["Ex. ",t(e.code,{children:'"#", "a", "c", "d", "e", "h", "l", "m", "n", "p", "r", "s"]'})]}),`
`,t(i,{of:b}),`
`,t(e.h3,{id:"set-letter-selection-programmatically",children:"Set letter selection programmatically"}),`
`,n(e.p,{children:["Use the ",t(e.code,{children:"currentLetter"}),` prop to pass a single letter value to set the selected
letter page when the component first renders, or to programmatically set the
current letter.`]}),`
`,t(i,{of:f}),`
`,t(e.h3,{id:"dynamically-update-currentletter-using-onclick",children:"Dynamically update currentLetter using onClick"}),`
`,n(e.p,{children:["You can pass and extract the value through the ",t(e.code,{children:"currentLetter"})," and ",t(e.code,{children:"onClick"}),`
props. `,t(e.code,{children:"onClick"})," is called with the corresponding ",t(e.code,{children:"Button"}),` value every time one
of the 28 buttons is clicked.`]}),`
`,t(e.p,{children:`Try it out: open up the browser's console to see new values being logged on each
change.`}),`
`,t(m,{code:`
  export function CurrentLetterExample() {
  const [currentLetter, setCurrentLetter] = React.useState();
  const onClick = (letter: string) => {
    console.log(letter);
    setCurrentLetter(letter);
  };
  return <AlphabetFilter currentLetter={currentLetter} onClick={onClick} />;
}
`,language:"tsx"}),`
`,t(i,{of:g})]})}function J(r={}){const{wrapper:e}=Object.assign({},s(),r.components);return e?t(e,Object.assign({},r,{children:t(a,r)})):a(r)}export{J as default};
//# sourceMappingURL=AlphabetFilter-3311a8b4.js.map
