import{u as a,j as e,M as c,L as s,S as h,a as r,n as l,o as i,I as o}from"./iframe-D93LbwGv.js";function d(t){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Style Guide/Buttons"}),`
`,e.jsx(n.h1,{id:"buttons",children:"Buttons"}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#general-information",target:"_self",children:"General Information"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#guidelines",target:"_self",children:"Guidelines"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#button-groups",target:"_self",children:"Button Groups"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#button-types",target:"_self",children:"Button Types"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#button-sizes",target:"_self",children:"Button Sizes"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#patterns",target:"_self",children:"Patterns"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#figma-reference",target:"_self",children:"Figma Reference"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"general-information",children:"General Information"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.a,{href:"../?path=/story/components-form-elements-button--with-controls",children:"Button"}),`
component to render form buttons.`]}),`
`,e.jsx(h,{code:`
import { Button } from "@nypl/design-system-react-components";
// ...
<Button id="btn">Button Text</Button>; `,language:"jsx"}),`
`,e.jsx(n.h2,{id:"guidelines",children:"Guidelines"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Button text is optional."}),`
`,e.jsx(n.li,{children:"Button text should be title case."}),`
`,e.jsx(n.li,{children:"Button icon is optional."}),`
`,e.jsx(n.li,{children:"Buttons may have an icon on either the left or the right."}),`
`,e.jsx(n.li,{children:"Buttons by default are blue. However, Donation callout buttons are red."}),`
`,e.jsx(n.li,{children:`Buttons used for Back to Top actions have a Secondary button style with an
arrow icon pointing up.`}),`
`,e.jsxs(n.li,{children:["When buttons are used in a group, they should be wrapped in a ",e.jsx(n.code,{children:"ButtonGroup"}),"."]}),`
`,e.jsxs(n.li,{children:[`When buttons are used in a group where the user can move forward or backward,
the `,e.jsx(n.code,{children:"Primary"})," button is on the right and the ",e.jsx(n.code,{children:"Secondary"}),` button on the left
(i.e. cancel = secondary, submit = primary).`]}),`
`]}),`
`,e.jsx(n.h2,{id:"button-groups",children:"Button Groups"}),`
`,e.jsxs(n.p,{children:["When ",e.jsx(n.code,{children:"Button"})," components are displayed in a group, use the ",e.jsx(n.code,{children:"ButtonGroup"}),`
component to handle the spacing and layout. The `,e.jsx(n.code,{children:"ButtonGroup"}),` component will use
`,e.jsx(n.code,{children:"--nypl-space-xs"})," (0.5rem) for spacing in horizontal group layouts."]}),`
`,e.jsxs(n.p,{children:["Standalone ",e.jsx(n.code,{children:"Button"})," components and the ",e.jsx(n.code,{children:"ButtonGroup"}),` component should use
`,e.jsx(n.code,{children:"--nypl-space-l"}),` (2rem) for spacing between all other UI elements. This spacing
can be achieved by using the `,e.jsx(n.code,{children:"Form"})," component to wrap the ",e.jsx(n.code,{children:"Button"}),"s."]}),`
`,e.jsx(r,{border:"1px",borderColor:"ui.border.default",borderRadius:"5px",mb:"m",p:"s",pb:"0",children:e.jsxs(l,{mb:"16px",children:[e.jsx(i,{id:"basic",children:"Button Text"}),e.jsxs(i,{id:"btn-search",children:[e.jsx(o,{name:"search",size:"small",align:"left"}),"Button Text"]}),e.jsx(i,{id:"only-icon",children:e.jsx(o,{name:"close",size:"medium"})}),e.jsx(i,{buttonType:"callout",id:"donate",children:"Donate"}),e.jsxs(i,{buttonType:"secondary",id:"btn-back-to-top",children:["Back to Top",e.jsx(o,{name:"arrow",size:"small",align:"right",iconRotation:"rotate180"})]})]})}),`
`,e.jsx(n.h2,{id:"button-types",children:"Button Types"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"buttonType"}),` prop should be used to render various forms of the button
component.`]}),`
`,e.jsx(r,{border:"1px",borderColor:"ui.border.default",borderRadius:"5px",mb:"m",p:"s",pb:"0",children:e.jsxs(l,{alignItems:"center",mb:"16px",children:[e.jsx(i,{buttonType:"primary",id:"primary",children:"Primary"}),e.jsx(i,{buttonType:"secondary",id:"secondary",children:"Secondary"}),e.jsx(i,{buttonType:"text",id:"text",children:"Text"}),e.jsx(i,{buttonType:"callout",id:"callout",children:"Callout"}),e.jsx(i,{buttonType:"noBrand",id:"noBrand",children:"NoBrand"}),e.jsx(i,{buttonType:"pill",id:"pill",children:"Pill"}),e.jsx(i,{buttonType:"link",id:"link",children:"Link (deprecated)"})]})}),`
`,e.jsx(n.h3,{id:"primary",children:"Primary"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"used for actions that move the user forward"}),`
`,e.jsx(n.li,{children:"Visual Treatment: rectangular, filled"}),`
`]}),`
`,e.jsx(n.h3,{id:"secondary",children:"Secondary"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"used for actions that move the user back, such as a form cancel button"}),`
`,e.jsxs(n.li,{children:["often paired with a ",e.jsx(n.code,{children:"Primary"})," button"]}),`
`,e.jsx(n.li,{children:"Visual Treatment: rectangular, outlined"}),`
`]}),`
`,e.jsx(n.h3,{id:"text",children:"Text"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"used for equally weighted actions"}),`
`,e.jsx(n.li,{children:"Visual Treatment: plain text only without an underline"}),`
`]}),`
`,e.jsx(n.h3,{id:"callout",children:"Callout"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"used for call to actions such as donation buttons"}),`
`,e.jsx(n.li,{children:"Visual Treatment: rectangular, NYPL red background"}),`
`]}),`
`,e.jsx(n.h3,{id:"nobrand",children:"NoBrand"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"used in cases where there is no brand color"}),`
`,e.jsx(n.li,{children:"Visual Treatment: rectangular, filled with a black background"}),`
`]}),`
`,e.jsx(n.h3,{id:"pill",children:"Pill"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"used for equally weighted actions"}),`
`,e.jsx(n.li,{children:"should only be used for buttons that are displayed in a set (i.e. never use for a singleton button)"}),`
`,e.jsx(n.li,{children:"Visual Treatment: rounded, outlined"}),`
`]}),`
`,e.jsx(n.h3,{id:"link-deprecated",children:"Link (deprecated)"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"link"}),` variant has been deprecated for accessibility reasons. From a visual
standpoint, an underlined link has the expected functionality of navigating to
a new page within the current site. If we are true to semantic coding, buttons
will not be used for this same type of navigational functionality and styling
a button to mimic the look of a standard link could cause unnecessary confusion.`]}),`
`,e.jsx(n.h2,{id:"button-sizes",children:"Button Sizes"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"size"}),` prop should be used to render various sizes of the button component:
`,e.jsx(n.code,{children:'"small"'}),", ",e.jsx(n.code,{children:'"medium"'})," (default) and ",e.jsx(n.code,{children:'"large"'}),"."]}),`
`,e.jsx(n.h3,{id:"small",children:"Small"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"This is a reduced button size."}),`
`,e.jsx(n.li,{children:`This size can be used when space is limited or when the action is of lesser
significance.`}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"IMPORTANT:"})," Even though the ",e.jsx(n.code,{children:'"small"'}),` size is available, it is recommended
to use the `,e.jsx(n.code,{children:'"medium"'})," or ",e.jsx(n.code,{children:'"large"'})," sizes."]}),`
`]}),`
`,e.jsx(r,{border:"1px",borderColor:"ui.border.default",borderRadius:"5px",mb:"m",p:"s",pb:"0",children:e.jsxs(l,{alignItems:"center",mb:"16px",children:[e.jsx(i,{buttonType:"primary",id:"small-primary",size:"small",children:"Primary"}),e.jsx(i,{buttonType:"secondary",id:"small-secondary",size:"small",children:"Secondary"}),e.jsx(i,{buttonType:"text",id:"small-text",size:"small",children:"Text"}),e.jsx(i,{buttonType:"callout",id:"small-callout",size:"small",children:"Callout"}),e.jsx(i,{buttonType:"noBrand",id:"small-nobrand",size:"small",children:"NoBrand"}),e.jsx(i,{buttonType:"pill",id:"small-pill",size:"small",children:"Pill"}),e.jsx(i,{buttonType:"link",id:"small-link",size:"small",children:"Link (deprecated)"})]})}),`
`,e.jsx(n.h3,{id:"medium",children:"Medium"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"This is the default button size."}),`
`,e.jsx(n.li,{children:`This button size should be used unless there is a very compelling reason to
use one of the other sizes.`}),`
`]}),`
`,e.jsx(r,{border:"1px",borderColor:"ui.border.default",borderRadius:"5px",mb:"m",p:"s",pb:"0",children:e.jsxs(l,{alignItems:"center",mb:"16px",children:[e.jsx(i,{buttonType:"primary",id:"medium-primary",size:"medium",children:"Primary"}),e.jsx(i,{buttonType:"secondary",id:"medium-secondary",size:"medium",children:"Secondary"}),e.jsx(i,{buttonType:"text",id:"medium-text",size:"medium",children:"Text"}),e.jsx(i,{buttonType:"callout",id:"medium-callout",size:"medium",children:"Callout"}),e.jsx(i,{buttonType:"noBrand",id:"medium-nobrand",size:"medium",children:"NoBrand"}),e.jsx(i,{buttonType:"pill",id:"medium-pill",size:"medium",children:"Pill"}),e.jsx(i,{buttonType:"link",id:"medium-link",size:"medium",children:"Link (deprecated)"})]})}),`
`,e.jsx(n.h3,{id:"large",children:"Large"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"This is an enlarged button size."}),`
`,e.jsx(n.li,{children:"This size can be used to bring prominence to a button that needs to have a major impact."}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"IMPORTANT:"})," Use the ",e.jsx(n.code,{children:'"large"'})," size sparingly. Layouts should generally have only one ",e.jsx(n.code,{children:'"large"'})," button."]}),`
`]}),`
`,e.jsx(r,{border:"1px",borderColor:"ui.border.default",borderRadius:"5px",mb:"m",p:"s",pb:"0",children:e.jsxs(l,{alignItems:"center",mb:"16px",children:[e.jsx(i,{buttonType:"primary",id:"large-primary",size:"large",children:"Primary"}),e.jsx(i,{buttonType:"secondary",id:"large-secondary",size:"large",children:"Secondary"}),e.jsx(i,{buttonType:"text",id:"large-text",size:"large",children:"Text"}),e.jsx(i,{buttonType:"callout",id:"large-callout",size:"large",children:"Callout"}),e.jsx(i,{buttonType:"noBrand",id:"large-nobrand",size:"large",children:"NoBrand"}),e.jsx(i,{buttonType:"pill",id:"large-pill",size:"large",children:"Pill"}),e.jsx(i,{buttonType:"link",id:"large-link",size:"large",children:"Link (deprecated)"})]})}),`
`,e.jsx(n.h2,{id:"patterns",children:"Patterns"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Buttons are blue by default."}),`
`,e.jsxs(n.li,{children:[`Buttons that are intended as a call out (i.e. Donation buttons) should be set
as `,e.jsx(n.code,{children:'"callout"'}),"."]}),`
`,e.jsxs(n.li,{children:['The "Back to Top" button must be set as ',e.jsx(n.code,{children:'"secondary"'}),` and must include an up
arrow icon.`]}),`
`,e.jsxs(n.li,{children:["Previous and Next buttons should be set as ",e.jsx(n.code,{children:'"secondary"'}),` and be wrapped in a
`,e.jsx(n.code,{children:"ButtonGroup"}),"."]}),`
`,e.jsxs(n.li,{children:["Only use the ",e.jsx(n.code,{children:'"noBrand"'})," style where there is no brand color. ",e.jsx(n.em,{children:`This should be
rarely used.`})]}),`
`]}),`
`,e.jsx(r,{border:"1px",borderColor:"ui.border.default",borderRadius:"5px",mb:"m",p:"s",pb:"0",children:e.jsxs(l,{children:[e.jsx(i,{buttonType:"callout",id:"callout2",mb:"16px",children:"Donate to this library"}),e.jsxs(i,{buttonType:"secondary",id:"secondary2",children:["Back to Top",e.jsx(o,{align:"right",iconRotation:"rotate180",name:"arrow",size:"small"})]}),e.jsxs(i,{buttonType:"secondary",id:"previous",children:[e.jsx(o,{align:"left",iconRotation:"rotate90",name:"arrow",size:"small"}),"Previous"]}),e.jsxs(i,{buttonType:"secondary",id:"next",children:["Next",e.jsx(o,{align:"right",iconRotation:"rotate270",name:"arrow",size:"small"})]})]})}),`
`,e.jsx(n.h2,{id:"figma-reference",children:"Figma Reference"}),`
`,e.jsx(n.p,{children:"For more styling information, please refer to the Figma Main file."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=11477%3A2298",rel:"nofollow",children:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=11477%3A2298"})}),`
`]})]})}function x(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(d,{...t})}):d(t)}export{x as default};
