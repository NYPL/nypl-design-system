import{j as n,a as i,F as a}from"./jsx-runtime-09ad29cb.js";import{M as s,b as f}from"./index-5d3bb37f.js";import{H as t}from"./Heading-2ec2ea62.js";import{L as l}from"./Link-0ed02cf7.js";import{L as g}from"./List-b2e63895.js";import{T as d}from"./Text-eabcdc0a.js";import{u as o}from"./index-a14fc4fc.js";import{B as r}from"./chakra-ui-layout.esm-b2fa9d31.js";import"./index-f2bd0723.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-359c5387.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-86fba1ca.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-22f77b05.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-944fe3e7.js";import"./index-0a26bc51.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-b629ee11.js";import"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import"./Icon-6616a4b9.js";function c(h){const e=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",p:"p",code:"code",a:"a",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",blockquote:"blockquote",br:"br"},o(),h.components);return i(a,{children:[n(s,{title:"Style Guide/Typography"}),`
`,n(e.h1,{id:"typography",children:"Typography"}),`
`,n(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[`
`,n(l,{href:"#general-information",target:"_self",children:"General Information"}),`
`]}),`
`,i(e.li,{children:[`
`,n(l,{href:"#heading-component",target:"_self",children:"Heading Component"}),`
`]}),`
`,i(e.li,{children:[`
`,n(l,{href:"#text-component",target:"_self",children:"Text Component"}),`
`]}),`
`,i(e.li,{children:[`
`,n(l,{href:"#font-family",target:"_self",children:"Font Family"}),`
`]}),`
`,i(e.li,{children:[`
`,n(l,{href:"#font-color",target:"_self",children:"Font Color"}),`
`]}),`
`,i(e.li,{children:[`
`,n(l,{href:"#font-weight",target:"_self",children:"Font Weight"}),`
`]}),`
`,i(e.li,{children:[`
`,n(l,{href:"#font-sizes",target:"_self",children:"Font Sizes"}),`
`]}),`
`,i(e.li,{children:[`
`,n(l,{href:"#text-case",target:"_self",children:"Text Case"}),`
`]}),`
`,i(e.li,{children:[`
`,n(l,{href:"#character-count",target:"_self",children:"Character Count"}),`
`]}),`
`,i(e.li,{children:[`
`,n(l,{href:"#figma-reference",target:"_self",children:"Figma Reference"}),`
`]}),`
`]}),`
`,n(e.h2,{id:"general-information",children:"General Information"}),`
`,n(e.p,{children:`Consuming applications should utilize the Reservoir Design System (DS) standard
text components as much as possible. In cases where that is not possible, the
DS exposes CSS variables to assist with formatting text elements.`}),`
`,i(e.p,{children:["The sizing of all text elements in the Design System is based on ",n(e.code,{children:"1rem"}),` being
equal to `,n(e.code,{children:"16px"}),"."]}),`
`,n(e.h2,{id:"heading-component",children:"Heading Component"}),`
`,i(e.p,{children:["Use the DS ",n(e.a,{href:"../?path=/docs/components-typography-styles-heading--docs",children:"Heading"}),`
component to render a standard HTML `,n(e.code,{children:"<h>"})," tag. The ",n(e.code,{children:"level"}),` prop can be used to
set the specific `,n(e.code,{children:"<h>"})," tag that you require."]}),`
`,i(r,{border:"1px",borderColor:"ui.border.default",borderRadius:"5px",mb:"m",p:"s",children:[n(t,{level:"one",children:"Heading Level 1"}),n(t,{level:"two",border:"none",children:"Heading Level 2"}),n(t,{level:"three",children:"Heading Level 3"}),n(t,{level:"four",children:"Heading Level 4"})]}),`
`,n(e.h3,{id:"heading-display-sizes",children:"Heading Display Sizes"}),`
`,i(e.p,{children:[`Each heading level has a default style and size, but those styles can be overridden
using the `,n(e.code,{children:"size"}),` prop. The display sizes are separate from semantic elements and
may be used to override the default size and styling of the semantic HTML heading
elements. For example, the `,n(e.code,{children:"h1"})," element has the ",n(e.code,{children:"Primary"}),` style applied by default,
but a new style can be applied through the `,n(e.code,{children:"size"})," prop. Any ",n(e.code,{children:"size"}),` style can be
applied to any `,n(e.code,{children:"Heading"})," element."]}),`
`,n(t,{level:"one",size:"primary",children:"Primary Heading"}),`
`,i(e.table,{children:[n(e.thead,{children:i(e.tr,{children:[n(e.th,{}),n(e.th,{align:"left",children:"JS Token"}),n(e.th,{align:"left",children:"CSS Token"}),n(e.th,{align:"left",children:"Value"})]})}),i(e.tbody,{children:[i(e.tr,{children:[n(e.td,{children:n(e.strong,{children:"Font Size"})}),n(e.td,{align:"left",children:n(e.code,{children:"heading.primary"})}),n(e.td,{align:"left",children:n(e.code,{children:"var(--nypl-fontSizes-heading-primary)"})}),n(e.td,{align:"left",children:n(e.code,{children:"2.25rem"})})]}),i(e.tr,{children:[n(e.td,{children:n(e.strong,{children:"Font Weight"})}),n(e.td,{align:"left",children:n(e.code,{children:"heading.primary"})}),n(e.td,{align:"left",children:n(e.code,{children:"var(--nypl-fontWeights-heading-primary)"})}),n(e.td,{align:"left",children:n(e.code,{children:"300"})})]}),i(e.tr,{children:[n(e.td,{children:n(e.strong,{children:"Line Height"})}),n(e.td,{align:"left",children:"--"}),n(e.td,{align:"left",children:"--"}),n(e.td,{align:"left",children:n(e.code,{children:"1.1"})})]})]})]}),`
`,n(t,{level:"one",size:"secondary",children:"Secondary Heading"}),`
`,i(e.table,{children:[n(e.thead,{children:i(e.tr,{children:[n(e.th,{}),n(e.th,{align:"left",children:"JS Token"}),n(e.th,{align:"left",children:"CSS Token"}),n(e.th,{align:"left",children:"Value"})]})}),i(e.tbody,{children:[i(e.tr,{children:[n(e.td,{children:n(e.strong,{children:"Font Size"})}),n(e.td,{align:"left",children:n(e.code,{children:"heading.secondary"})}),n(e.td,{align:"left",children:n(e.code,{children:"var(--nypl-fontSizes-heading-secondary)"})}),n(e.td,{align:"left",children:n(e.code,{children:"1.75rem"})})]}),i(e.tr,{children:[n(e.td,{children:n(e.strong,{children:"Font Weight"})}),n(e.td,{align:"left",children:n(e.code,{children:"heading.secondary"})}),n(e.td,{align:"left",children:n(e.code,{children:"var(--nypl-fontWeights-heading-secondary)"})}),n(e.td,{align:"left",children:n(e.code,{children:"500"})})]}),i(e.tr,{children:[n(e.td,{children:n(e.strong,{children:"Line Height"})}),n(e.td,{align:"left",children:"--"}),n(e.td,{align:"left",children:"--"}),n(e.td,{align:"left",children:n(e.code,{children:"1.25"})})]})]})]}),`
`,n(t,{level:"one",size:"tertiary",children:"Tertiary Heading"}),`
`,i(e.table,{children:[n(e.thead,{children:i(e.tr,{children:[n(e.th,{}),n(e.th,{align:"left",children:"JS Token"}),n(e.th,{align:"left",children:"CSS Token"}),n(e.th,{align:"left",children:"Value"})]})}),i(e.tbody,{children:[i(e.tr,{children:[n(e.td,{children:n(e.strong,{children:"Font Size"})}),n(e.td,{align:"left",children:n(e.code,{children:"heading.tertiary"})}),n(e.td,{align:"left",children:n(e.code,{children:"var(--nypl-fontSizes-heading-tertiary)"})}),n(e.td,{align:"left",children:n(e.code,{children:"1.375rem"})})]}),i(e.tr,{children:[n(e.td,{children:n(e.strong,{children:"Font Weight"})}),n(e.td,{align:"left",children:n(e.code,{children:"heading.tertiary"})}),n(e.td,{align:"left",children:n(e.code,{children:"var(--nypl-fontWeights-heading-tertiary)"})}),n(e.td,{align:"left",children:n(e.code,{children:"500"})})]}),i(e.tr,{children:[n(e.td,{children:n(e.strong,{children:"Line Height"})}),n(e.td,{align:"left",children:"--"}),n(e.td,{align:"left",children:"--"}),n(e.td,{align:"left",children:n(e.code,{children:"1.25"})})]})]})]}),`
`,n(t,{level:"one",size:"callout",children:"Callout Heading"}),`
`,i(e.table,{children:[n(e.thead,{children:i(e.tr,{children:[n(e.th,{}),n(e.th,{align:"left",children:"JS Token"}),n(e.th,{align:"left",children:"CSS Token"}),n(e.th,{align:"left",children:"Value"})]})}),i(e.tbody,{children:[i(e.tr,{children:[n(e.td,{children:n(e.strong,{children:"Font Size"})}),n(e.td,{align:"left",children:n(e.code,{children:"heading.callout"})}),n(e.td,{align:"left",children:n(e.code,{children:"var(--nypl-fontSizes-heading-callout)"})}),n(e.td,{align:"left",children:n(e.code,{children:"1.25rem"})})]}),i(e.tr,{children:[n(e.td,{children:n(e.strong,{children:"Font Weight"})}),n(e.td,{align:"left",children:n(e.code,{children:"heading.callout"})}),n(e.td,{align:"left",children:n(e.code,{children:"var(--nypl-fontWeights-heading-callout)"})}),n(e.td,{align:"left",children:n(e.code,{children:"500"})})]}),i(e.tr,{children:[n(e.td,{children:n(e.strong,{children:"Line Height"})}),n(e.td,{align:"left",children:"--"}),n(e.td,{align:"left",children:"--"}),n(e.td,{align:"left",children:n(e.code,{children:"1.25"})})]})]})]}),`
`,n(e.h2,{id:"text-component",children:"Text Component"}),`
`,i(e.p,{children:["Use the DS ",n(e.a,{href:"../?path=/docs/components-typography-styles-text--docs",children:"Text"}),`
component to render a standard HTML `,n(e.code,{children:"<p>"}),` tag. The Text component is generally
used for body copy, captions and secondary captions.`]}),`
`,n(r,{border:"1px",borderColor:"ui.border.default",borderRadius:"5px",mb:"m",p:"s",children:n(d,{children:"Curabitur blandit tempus porttitor. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."})}),`
`,n(e.h3,{id:"text-display-sizes",children:"Text Display Sizes"}),`
`,i(e.p,{children:["The ",n(e.code,{children:"size"})," prop can be used to render a specific style from the DS default text styles."]}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=10975%3A52",target:"_blank",rel:"nofollow noopener noreferrer",children:"Typography: Body Styles"})}),`
`,n(e.li,{children:n(e.a,{href:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=10975%3A100",target:"_blank",rel:"nofollow noopener noreferrer",children:"Typography: Other Styles"})}),`
`]}),`
`,n(d,{size:"default",children:"Default"}),`
`,i(e.table,{children:[n(e.thead,{children:i(e.tr,{children:[n(e.th,{}),n(e.th,{align:"left",children:"JS Token"}),n(e.th,{align:"left",children:"CSS Token"}),n(e.th,{align:"left",children:"Value"})]})}),i(e.tbody,{children:[i(e.tr,{children:[n(e.td,{children:n(e.strong,{children:"Font Size"})}),n(e.td,{align:"left",children:n(e.code,{children:"text.default"})}),n(e.td,{align:"left",children:n(e.code,{children:"var(--nypl-fontSizes-text-default)"})}),n(e.td,{align:"left",children:n(e.code,{children:"1rem"})})]}),i(e.tr,{children:[n(e.td,{children:n(e.strong,{children:"Font Weight"})}),n(e.td,{align:"left",children:n(e.code,{children:"text.default"})}),n(e.td,{align:"left",children:n(e.code,{children:"var(--nypl-fontWeights-text-default)"})}),n(e.td,{align:"left",children:n(e.code,{children:"300"})})]}),i(e.tr,{children:[n(e.td,{children:n(e.strong,{children:"Line Height"})}),n(e.td,{align:"left",children:"--"}),n(e.td,{align:"left",children:"--"}),n(e.td,{align:"left",children:n(e.code,{children:"1.5"})})]})]})]}),`
`,n(d,{size:"caption",children:"Caption"}),`
`,i(e.table,{children:[n(e.thead,{children:i(e.tr,{children:[n(e.th,{}),n(e.th,{align:"left",children:"JS Token"}),n(e.th,{align:"left",children:"CSS Token"}),n(e.th,{align:"left",children:"Value"})]})}),i(e.tbody,{children:[i(e.tr,{children:[n(e.td,{children:n(e.strong,{children:"Font Size"})}),n(e.td,{align:"left",children:n(e.code,{children:"text.caption"})}),n(e.td,{align:"left",children:n(e.code,{children:"var(--nypl-fontSizes-text-caption)"})}),n(e.td,{align:"left",children:n(e.code,{children:"0.875rem"})})]}),i(e.tr,{children:[n(e.td,{children:n(e.strong,{children:"Font Weight"})}),n(e.td,{align:"left",children:n(e.code,{children:"text.caption"})}),n(e.td,{align:"left",children:n(e.code,{children:"var(--nypl-fontWeights-text-caption)"})}),n(e.td,{align:"left",children:n(e.code,{children:"300"})})]}),i(e.tr,{children:[n(e.td,{children:n(e.strong,{children:"Line Height"})}),n(e.td,{align:"left",children:"--"}),n(e.td,{align:"left",children:"--"}),n(e.td,{align:"left",children:n(e.code,{children:"1.5"})})]})]})]}),`
`,n(d,{size:"tag",children:"Tag"}),`
`,i(e.table,{children:[n(e.thead,{children:i(e.tr,{children:[n(e.th,{}),n(e.th,{align:"left",children:"JS Token"}),n(e.th,{align:"left",children:"CSS Token"}),n(e.th,{align:"left",children:"Value"})]})}),i(e.tbody,{children:[i(e.tr,{children:[n(e.td,{children:n(e.strong,{children:"Font Size"})}),n(e.td,{align:"left",children:n(e.code,{children:"text.tag"})}),n(e.td,{align:"left",children:n(e.code,{children:"var(--nypl-fontSizes-text-tag)"})}),n(e.td,{align:"left",children:n(e.code,{children:"0.75rem"})})]}),i(e.tr,{children:[n(e.td,{children:n(e.strong,{children:"Font Weight"})}),n(e.td,{align:"left",children:n(e.code,{children:"text.tag"})}),n(e.td,{align:"left",children:n(e.code,{children:"var(--nypl-fontWeights-text-tag)"})}),n(e.td,{align:"left",children:n(e.code,{children:"400"})})]}),i(e.tr,{children:[n(e.td,{children:n(e.strong,{children:"Line Height"})}),n(e.td,{align:"left",children:"--"}),n(e.td,{align:"left",children:"--"}),n(e.td,{align:"left",children:n(e.code,{children:"1.5"})})]})]})]}),`
`,n(d,{size:"mini",children:"Mini"}),`
`,i(e.table,{children:[n(e.thead,{children:i(e.tr,{children:[n(e.th,{}),n(e.th,{align:"left",children:"JS Token"}),n(e.th,{align:"left",children:"CSS Token"}),n(e.th,{align:"left",children:"Value"})]})}),i(e.tbody,{children:[i(e.tr,{children:[n(e.td,{children:n(e.strong,{children:"Font Size"})}),n(e.td,{align:"left",children:n(e.code,{children:"text.mini"})}),n(e.td,{align:"left",children:n(e.code,{children:"var(--nypl-fontSizes-text-mini)"})}),n(e.td,{align:"left",children:n(e.code,{children:"0.625rem"})})]}),i(e.tr,{children:[n(e.td,{children:n(e.strong,{children:"Font Weight"})}),n(e.td,{align:"left",children:n(e.code,{children:"text.mini"})}),n(e.td,{align:"left",children:n(e.code,{children:"var(--nypl-fontWeights-text-mini)"})}),n(e.td,{align:"left",children:n(e.code,{children:"400"})})]}),i(e.tr,{children:[n(e.td,{children:n(e.strong,{children:"Line Height"})}),n(e.td,{align:"left",children:"--"}),n(e.td,{align:"left",children:"--"}),n(e.td,{align:"left",children:n(e.code,{children:"1.5"})})]})]})]}),`
`,n(e.h2,{id:"font-family",children:"Font Family"}),`
`,n(e.p,{children:`With website accessibility in mind, font choices for the DS were made with an
eye toward clarity and readability. Headings and body content use the
following font family assignment:`}),`
`,n(r,{border:"1px",borderColor:"ui.border.default",borderRadius:"5px",mb:"m",p:"s",children:n(d,{children:"system-ui, sans-serif"})}),`
`,n(e.p,{children:"The following CSS variables are available through the DS."}),`
`,n(f,{code:`
--nypl-fonts-heading: system-ui, sans-serif;
--nypl-fonts-body: system-ui, sans-serif;
`,language:"css"}),`
`,i(e.blockquote,{children:[`
`,i(e.p,{children:[n(e.strong,{children:"RECOMMENDATIONS"}),n(e.br,{}),`
`,`When making font selections for project based components outside the DS,
sans serif fonts display better on computers and mobile devices. Avoid
decorative or overly stylized fonts, as they are often difficult to read even
for users without visual impairments or reading Standard Text Default`]}),`
`]}),`
`,n(e.h2,{id:"font-color",children:"Font Color"}),`
`,n(e.p,{children:`All text within a project, unless specifically noted in mockups, should be
black on a white background.`}),`
`,i(r,{border:"1px",borderColor:"ui.border.default",borderRadius:"5px",mb:"m",p:"s",children:[n(t,{level:"three",children:"Default Heading Color"}),n(d,{children:"This paragraph shows the default body text color. Curabitur blandit tempus porttitor. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit."})]}),`
`,i(e.p,{children:[`In cases where specific colors must be applied to text elements, the DS
provides CSS variables for the full NYPL color palette. Refer to the
`,n(e.a,{href:"../?path=/docs/style-guide-colors--docs",children:"Colors"}),` section of the Style Guide
for details.`]}),`
`,n(e.h2,{id:"font-weight",children:"Font Weight"}),`
`,n(e.p,{children:"The DS uses four font weights to render text. The default font-weight is 300."}),`
`,i(r,{border:"1px",borderColor:"ui.border.default",borderRadius:"5px",mb:"m",p:"s",children:[n(e.p,{style:{fontSize:"var(--nypl-fontSizes-0)",fontWeight:"var(--nypl-fontWeights-light)",fontFamily:"var(--nypl-fonts-body)"},children:"Light / 300 (default)"}),n(e.p,{style:{fontSize:"var(--nypl-fontSizes-0)",fontWeight:"var(--nypl-fontWeights-regular)",fontFamily:"var(--nypl-fonts-body)"},children:"Regular / 400"}),n(e.p,{style:{fontSize:"var(--nypl-fontSizes-0)",fontWeight:"var(--nypl-fontWeights-medium)",fontFamily:"var(--nypl-fonts-body)"},children:"Medium / 500"}),n(e.p,{style:{fontSize:"var(--nypl-fontSizes-0)",fontWeight:"var(--nypl-fontWeights-bold)",fontFamily:"var(--nypl-fonts-body)"},children:"Bold / 700"})]}),`
`,n(e.p,{children:"The following design tokens are available through the DS."}),`
`,i(e.table,{children:[n(e.thead,{children:i(e.tr,{children:[n(e.th,{}),n(e.th,{children:"JS Token"}),n(e.th,{children:"CSS Token"}),n(e.th,{children:"Value"})]})}),i(e.tbody,{children:[i(e.tr,{children:[n(e.td,{children:n(e.strong,{children:"Light"})}),n(e.td,{children:n(e.code,{children:"light"})}),n(e.td,{children:n(e.code,{children:"var(--nypl-fontWeights-light)"})}),n(e.td,{children:n(e.code,{children:"300"})})]}),i(e.tr,{children:[n(e.td,{children:n(e.strong,{children:"Regular"})}),n(e.td,{children:n(e.code,{children:"regular"})}),n(e.td,{children:n(e.code,{children:"var(--nypl-fontWeights-regular)"})}),n(e.td,{children:n(e.code,{children:"400"})})]}),i(e.tr,{children:[n(e.td,{children:n(e.strong,{children:"Medium"})}),n(e.td,{children:n(e.code,{children:"medium"})}),n(e.td,{children:n(e.code,{children:"var(--nypl-fontWeights-medium)"})}),n(e.td,{children:n(e.code,{children:"500"})})]}),i(e.tr,{children:[n(e.td,{children:n(e.strong,{children:"Bold"})}),n(e.td,{children:n(e.code,{children:"bold"})}),n(e.td,{children:n(e.code,{children:"var(--nypl-fontWeights-bold)"})}),n(e.td,{children:n(e.code,{children:"700"})})]})]})]}),`
`,n(e.h2,{id:"font-sizes",children:"Font Sizes"}),`
`,n(e.p,{children:"Font sizing is based on a root font size of 16px (1rem = 16px)."}),`
`,i(r,{border:"1px",borderColor:"ui.border.default",borderRadius:"5px",mb:"m",p:"s",children:[n(e.p,{style:{fontSize:"var(--nypl-fontSizes--3)",fontWeight:"var(--nypl-fontWeights-light)"},children:"Font size -3"}),n(e.p,{style:{fontSize:"var(--nypl-fontSizes--2)",fontWeight:"var(--nypl-fontWeights-light)"},children:"Font size -2"}),n(e.p,{style:{fontSize:"var(--nypl-fontSizes--1)",fontWeight:"var(--nypl-fontWeights-light)"},children:"Font size -1"}),n(e.p,{style:{fontSize:"var(--nypl-fontSizes-0)",fontWeight:"var(--nypl-fontWeights-light)"},children:"Font size 0 (default)"}),n(e.p,{style:{fontSize:"var(--nypl-fontSizes-1)",fontWeight:"var(--nypl-fontWeights-light)"},children:"Font size 1"}),n(e.p,{style:{fontSize:"var(--nypl-fontSizes-2)",fontWeight:"var(--nypl-fontWeights-light)"},children:"Font size 2"}),n(e.p,{style:{fontSize:"var(--nypl-fontSizes-3)",fontWeight:"var(--nypl-fontWeights-light)"},children:"Font size 3"}),n(e.p,{style:{fontSize:"var(--nypl-fontSizes-4)",fontWeight:"var(--nypl-fontWeights-light)"},children:"Font size 4"})]}),`
`,n(e.p,{children:"The following font size design tokens are available through the DS."}),`
`,i(e.table,{children:[n(e.thead,{children:i(e.tr,{children:[n(e.th,{}),n(e.th,{children:"JS Token"}),n(e.th,{children:"CSS Token"}),n(e.th,{children:"Value"})]})}),i(e.tbody,{children:[i(e.tr,{children:[n(e.td,{children:n(e.strong,{children:"-3"})}),n(e.td,{children:n(e.code,{children:"-3"})}),n(e.td,{children:n(e.code,{children:"var(--nypl-fontSizes--3)"})}),n(e.td,{children:n(e.code,{children:"0.625rem"})})]}),i(e.tr,{children:[n(e.td,{children:n(e.strong,{children:"-2"})}),n(e.td,{children:n(e.code,{children:"-2"})}),n(e.td,{children:n(e.code,{children:"var(--nypl-fontSizes--2)"})}),n(e.td,{children:n(e.code,{children:"0.75rem"})})]}),i(e.tr,{children:[n(e.td,{children:n(e.strong,{children:"-1"})}),n(e.td,{children:n(e.code,{children:"-1"})}),n(e.td,{children:n(e.code,{children:"var(--nypl-fontSizes--1)"})}),n(e.td,{children:n(e.code,{children:"0.875rem"})})]}),i(e.tr,{children:[n(e.td,{children:n(e.strong,{children:"0"})}),n(e.td,{children:n(e.code,{children:"0"})}),n(e.td,{children:n(e.code,{children:"var(--nypl-fontSizes-0)"})}),n(e.td,{children:n(e.code,{children:"1rem"})})]}),i(e.tr,{children:[n(e.td,{children:n(e.strong,{children:"1"})}),n(e.td,{children:n(e.code,{children:"1"})}),n(e.td,{children:n(e.code,{children:"var(--nypl-fontSizes-1)"})}),n(e.td,{children:n(e.code,{children:"1.125rem"})})]}),i(e.tr,{children:[n(e.td,{children:n(e.strong,{children:"2"})}),n(e.td,{children:n(e.code,{children:"2"})}),n(e.td,{children:n(e.code,{children:"var(--nypl-fontSizes-2)"})}),n(e.td,{children:n(e.code,{children:"1.375rem"})})]}),i(e.tr,{children:[n(e.td,{children:n(e.strong,{children:"3"})}),n(e.td,{children:n(e.code,{children:"3"})}),n(e.td,{children:n(e.code,{children:"var(--nypl-fontSizes-3)"})}),n(e.td,{children:n(e.code,{children:"1.75rem"})})]}),i(e.tr,{children:[n(e.td,{children:n(e.strong,{children:"4"})}),n(e.td,{children:n(e.code,{children:"4"})}),n(e.td,{children:n(e.code,{children:"var(--nypl-fontSizes-4)"})}),n(e.td,{children:n(e.code,{children:"2.25rem"})})]})]})]}),`
`,n(e.h2,{id:"text-case",children:"Text Case"}),`
`,n(e.p,{children:`In general, the New York Public Library uses Title Case for titles. This means
only using capital letters for the principal words. Articles, conjunctions, and
prepositions do not get capital letters unless they start the title. For example:`}),`
`,n(r,{border:"1px",borderColor:"ui.border.default",borderRadius:"5px",mb:"m",p:"s",children:i(g,{type:"ul",children:[n(e.li,{children:"Snow White and the Seven Dwarfs"}),n(e.li,{children:"The Last of the Mohicans"}),n(e.li,{children:"Spooky Books for Kids: The Ultimate Creepy Guide"}),n(e.li,{children:"The Future Teen Stars of America Live on TikTok"}),n(e.li,{children:"How Jacqueline Woodson Captures Every Side of Brooklyn"})]})}),`
`,n(e.h2,{id:"character-count",children:"Character Count"}),`
`,n(e.h3,{id:"titles",children:"Titles"}),`
`,n(e.p,{children:"80 characters max, 60 characters recommended"}),`
`,n(r,{border:"1px",borderColor:"ui.border.default",borderRadius:"5px",mb:"m",p:"s",children:n(t,{level:"three",children:"This is a Long Title to Show What 58 Characters Looks Like"})}),`
`,n(e.h3,{id:"summaries",children:"Summaries"}),`
`,i(e.p,{children:["140 characters max",n("br",{}),`
Note: Online Exhibitions, with their longer, legacy summaries are an exception
to this.`]}),`
`,n(r,{border:"1px",borderColor:"ui.border.default",borderRadius:"5px",mb:"m",p:"s",children:n(d,{children:"This block of text shows what 140 chacters and spaces looks like. Integer posuere erat a ante venenatis dapibus posueret aliquet nullas non."})}),`
`,n(e.h3,{id:"page-intros",children:"Page Intros"}),`
`,n(e.p,{children:"No max character count, 200 characters recommended"}),`
`,n(r,{border:"1px",borderColor:"ui.border.default",borderRadius:"5px",mb:"m",p:"s",children:n(d,{children:"This block of text shows what 200 chacters and spaces looks like. Integer posuere erat a ante venenatis dapibus posueret aliquet nullas non. Aenean eu leo quam. Pellentesque ornare sem quam venenatis."})}),`
`,n(e.h2,{id:"figma-reference",children:"Figma Reference"}),`
`,n(e.p,{children:"For additional spacing information, please refer to the Figma Main file."}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=10975%3A0",target:"_blank",rel:"nofollow noopener noreferrer",children:"Typeface"})}),`
`,n(e.li,{children:n(e.a,{href:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=10975%3A16",target:"_blank",rel:"nofollow noopener noreferrer",children:"Heading Styles"})}),`
`,n(e.li,{children:n(e.a,{href:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=10975%3A52",target:"_blank",rel:"nofollow noopener noreferrer",children:"Text Styles (Part 1)"})}),`
`,n(e.li,{children:n(e.a,{href:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=10975%3A100",target:"_blank",rel:"nofollow noopener noreferrer",children:"Text Styles (Part 2)"})}),`
`]})]})}function N(h={}){const{wrapper:e}=Object.assign({},o(),h.components);return e?n(e,Object.assign({},h,{children:n(c,h)})):c(h)}export{N as default};
//# sourceMappingURL=Typography-07a99baa.js.map
