import{u as d,j as e,M as c,L as t,bv as h,C as o,bw as a}from"./iframe-CFLVJZOZ.js";import{C as p}from"./ComponentChangelogTable-DvY0SxTs.js";import{T as i,W as l,O as x,a as j,b as m,I as f,D as u,c as g,P as b,d as y}from"./Tooltip.stories-BrOhYEEo.js";import"./storybookUtils-BmTl87w5.js";const T=[{date:"2025-04-24",version:"3.6.1",type:"Update",affects:["Styles"],notes:["Updates text color to `ui.typography.inverse.heading` on light mode."]},{date:"2024-09-05",version:"3.3.1",type:"Update",affects:["Styles","Functionality"],notes:["Adds `placement` and `offset` props."]},{date:"2024-03-14",version:"3.0.0",type:"Update",affects:["Styles"],notes:["Chakra 2.8 update."]}];function r(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:i}),`
`,e.jsx(n.h1,{id:"tooltip",children:"Tooltip"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Component Version"}),e.jsx(n.th,{children:"DS Version"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Added"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"1.1.0"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Latest"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"3.6.1"})})]})]})]}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#best-practices",target:"_self",children:"Best Practices"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#examples",target:"_self",children:"Examples"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#changelog",target:"_self",children:"Changelog"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(h,{of:i}),`
`,e.jsx(n.p,{children:`A brief, informative message that appears when a user hovers or focuses on an
element.`}),`
`,e.jsx(n.h2,{id:"component-props",children:"Component Props"}),`
`,e.jsx(o,{of:l}),`
`,e.jsx(a,{of:l}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["The DS ",e.jsx(n.code,{children:"Tooltip"}),` component is implemented with Chakra UI and Chakra handles the
appropriate aria-describedby attribute for the element that the tooltip is associated with.`]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Tooltip"}),` component is accessible via keyboard. The color contrast between
foreground color and background color is 4.5:1. If text size is 200%, the
button scales with text so there is no overlap.`]}),`
`,e.jsx(n.p,{children:`If a tooltip is associated with a form control (text, radio, checkbox, etc),
the text for the tooltip should be included in the form control label.`}),`
`,e.jsx(n.p,{children:"Resources:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/",rel:"nofollow",children:"W3C WAI ARIA Tooltip"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tooltip_role",rel:"nofollow",children:"MDN ARIA: tooltip role"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://chakra-ui.com/docs/components/overlay/tooltip",rel:"nofollow",children:"Chakra UI Tooltip"})}),`
`]}),`
`,e.jsx(n.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsx(n.p,{children:`Tooltips are often misunderstood and therefore not used correctly. To implement
a tooltip correctly, start by following the recommendations below.`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Only interactive elements should trigger tooltips."}),` (ex. form fields, links,
etc.)`]}),`
`,e.jsx(n.li,{children:`Tooltips should directly describe the UI control that triggers them. (i.e. do
not create a control purely to trigger a tooltip that describes something
else)`}),`
`,e.jsx(n.li,{children:`Do not put essential information in tooltips. (i.e. always assume tooltip text
may never be read)`}),`
`,e.jsx(n.li,{children:"Write concise tooltip text."}),`
`,e.jsx(n.li,{children:"Avoid rich text formatting and images."}),`
`,e.jsx(n.li,{children:"Do not add interactive content. (no links or buttons)"}),`
`]}),`
`,e.jsx(n.p,{children:"Resources:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://sarahmhigley.com/writing/tooltips-in-wcag-21",rel:"nofollow",children:"Tooltips in the time of WCAG 2.1"})}),`
`]}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"tooltips-on-form-options",children:"Tooltips on form options"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["For correctly positioning, use the ",e.jsx(n.code,{children:"shouldWrapChildren"}),` prop when adding a
tooltip to the `,e.jsx(n.code,{children:"Checkbox"}),", ",e.jsx(n.code,{children:"Radio"}),", and ",e.jsx(n.code,{children:"Toggle"})," components."]}),`
`,e.jsxs(n.li,{children:["The underlying ",e.jsx(n.code,{children:"ref"})," of the ",e.jsx(n.code,{children:"Checkbox"}),", ",e.jsx(n.code,{children:"Radio"}),", and ",e.jsx(n.code,{children:"Toggle"}),` components point
to a visually hidden input element.`]}),`
`,e.jsxs(n.li,{children:["Using ",e.jsx(n.code,{children:"shouldWrapChildren"}),` ensures that the size of the visually hidden element is
in sync with the rendered visual control.`]}),`
`]}),`
`,e.jsx(o,{of:x}),`
`,e.jsx(n.h3,{id:"tooltip-on-image-component",children:"Tooltip on Image component"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Do not use the ",e.jsx(n.code,{children:"shouldWrapChildren"})," prop when adding a tooltip to an ",e.jsx(n.code,{children:"Image"}),`
component using the `,e.jsx(n.code,{children:"aspectRatio"})," prop."]}),`
`,e.jsxs(n.li,{children:["This combination of props will cause the ",e.jsx(n.code,{children:"Image"})," component's ",e.jsx(n.code,{children:"size"}),` prop to
not function properly.`]}),`
`]}),`
`,e.jsx(o,{of:j}),`
`,e.jsx(n.h3,{id:"tooltip-on-linked-icon",children:"Tooltip on Linked Icon"}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(n.h3,{id:"icon-and-image-content",children:"Icon and Image Content"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"It is not recommended to use icons and images in tooltip content."}),`
`]}),`
`,e.jsx(o,{of:f}),`
`,e.jsx(n.h3,{id:"disabling-tooltip",children:"Disabling Tooltip"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["A tooltip can be disabled by passing the ",e.jsx(n.code,{children:"isDisabled"})," prop."]}),`
`]}),`
`,e.jsx(o,{of:u}),`
`,e.jsx(n.h3,{id:"disabled-buttons",children:"Disabled Buttons"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["By default, the ",e.jsx(n.code,{children:"Tooltip"})," is not shown for a disabled ",e.jsx(n.code,{children:"Button"}),"."]}),`
`,e.jsxs(n.li,{children:["To show the ",e.jsx(n.code,{children:"Tooltip"})," on a disabled ",e.jsx(n.code,{children:"Button"}),", pass the ",e.jsx(n.code,{children:"shouldWrapChildren"})," prop."]}),`
`]}),`
`,e.jsx(o,{of:g}),`
`,e.jsx(n.h3,{id:"placement",children:"Placement"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"placement"}),` prop can be used to adjust the tooltip's location relative to
its children: `,e.jsx(n.code,{children:'"top"'}),", ",e.jsx(n.code,{children:'"bottom"'}),", ",e.jsx(n.code,{children:'"left"'}),", or ",e.jsx(n.code,{children:'"right"'}),"."]}),`
`,e.jsxs(n.li,{children:["It is recommended to use the default ",e.jsx(n.code,{children:'"top"'})," placement."]}),`
`]}),`
`,e.jsx(o,{of:b}),`
`,e.jsx(n.h3,{id:"offset",children:"Offset"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"offset"}),` prop sets the XY coordinate position of the tooltip in relation
to its reference element.`]}),`
`,e.jsxs(n.li,{children:["The values of the ",e.jsx(n.code,{children:"offset"}),` prop are static pixel values, so make sure to check
where the tooltip displays on all breakpoints.`]}),`
`,e.jsxs(n.li,{children:["It is ",e.jsx(n.strong,{children:"not"})," recommended to set custom ",e.jsx(n.code,{children:"offset"}),` values unless there are
extenuating circumstances.`]}),`
`]}),`
`,e.jsx(o,{of:y}),`
`,e.jsx(n.h2,{id:"changelog",children:"Changelog"}),`
`,e.jsx(p,{changelogData:T})]})}function A(s={}){const{wrapper:n}={...d(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{A as default};
