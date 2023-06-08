import{j as e,a as t,F as s}from"./jsx-runtime-09ad29cb.js";import{M as l}from"./index-42243e0e.js";import{L as o}from"./Link-0ed02cf7.js";import{u as a}from"./index-a14fc4fc.js";import"./index-f2bd0723.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-b32021bd.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-86fba1ca.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-22f77b05.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-944fe3e7.js";import"./index-0a26bc51.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-b629ee11.js";import"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import"./chakra-ui-layout.esm-b2fa9d31.js";import"./Icon-6616a4b9.js";function r(i){const n=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",p:"p",a:"a"},a(),i.components);return t(s,{children:[e(l,{title:"Accessibility Guide/Links"}),`
`,e(n.h1,{id:"links",children:"Links"}),`
`,e(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,t(n.ul,{children:[`
`,t(n.li,{children:[`
`,e(o,{href:"#general-information",target:"_self",children:"General Information"}),`
`]}),`
`,t(n.li,{children:[`
`,e(o,{href:"#nypl-patterns",target:"_self",children:"NYPL Patterns"}),`
`]}),`
`,t(n.li,{children:[`
`,e(o,{href:"#resources",target:"_self",children:"Resources"}),`
`]}),`
`]}),`
`,e(n.h2,{id:"general-information",children:"General Information"}),`
`,e(n.p,{children:`There is no explicit rule in the accessibility space that dictates using
underlines to indicate a link. However, because the underline is long-standing
default treatment of links by browsers, along with a change in color, it is
arguably the most recognizable indicator of a link's presence on a page. In
cases where it is not visually desirable to use an underline, such as when a
large number of links within body text may negatively impact readability or
scanability, then other design choices can be used.`}),`
`,e(n.p,{children:`From an accessibility standpoint, the most important thing is the ability to
identify links and distinguish them from non-interactive content. This can be
done in ways other than using an underline.`}),`
`,e(n.p,{children:`Color can be used, though it cannot be the ONLY method of distinguishing a link
within a block of non-linked text. This comes from WCAG Success Criterion 1.4.1
Use of Color, which states "Color is not used as the only visual means of
conveying information, indicating an action, prompting a response, or
distinguishing a visual element." (Level A)`}),`
`,e(n.p,{children:`As an example, if you have a link within a block of non-linked text, then you
could rely on contrast between the color of the link text and the color of the
non-linked text (this should be 3:1 - use the Contrast Triangle tool to check
your combinations), and add additional cues such as bolding, increasing the font
size, using a different font, etc. This can also be combined with additional
indicators that appear when tabbing or hovering over a link. However, note that
on touch-screen devices there is no such equivalent mechanism to trigger that
additional visual cue, so the default state should be distinct enough to be
relied on alone.`}),`
`,e(n.p,{children:`For links that occur outside the context of a block of non-linked text, then
again, other visual cues that serve as a call to action can be used, such as a
border, increased font size, bolding, change of background, adjacent icons to
indicate an action, etc. Links in a main navigation area, or in a common list
format are generally considered to be fine without an underline.`}),`
`,e(n.h2,{id:"nypl-patterns",children:"NYPL Patterns"}),`
`,e(n.p,{children:"TBD"}),`
`,e(n.h2,{id:"resources",children:"Resources"}),`
`,t(n.ul,{children:[`
`,e(n.li,{children:e(n.a,{href:"https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"WCAG Success Criterion 1.4.1 Use of Color"})}),`
`,e(n.li,{children:e(n.a,{href:"https://webaim.org/techniques/hypertext/",target:"_blank",rel:"nofollow noopener noreferrer",children:"WebAIM: Links and Hypertext"})}),`
`]})]})}function I(i={}){const{wrapper:n}=Object.assign({},a(),i.components);return n?e(n,Object.assign({},i,{children:e(r,i)})):r(i)}export{I as default};
//# sourceMappingURL=Links-6c7e28a6.js.map
