import{j as e,a as i,F as h}from"./jsx-runtime-09ad29cb.js";import{M as u,b as m}from"./index-5d3bb37f.js";import{B as r}from"./Button-a3ea41e0.js";import{B as o}from"./ButtonGroup-3ea9dbd7.js";import{I as d}from"./Icon-6616a4b9.js";import{L as t}from"./Link-0ed02cf7.js";import{u as s}from"./index-a14fc4fc.js";import{B as a}from"./chakra-ui-layout.esm-b2fa9d31.js";import"./index-f2bd0723.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-359c5387.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-86fba1ca.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-22f77b05.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-944fe3e7.js";import"./index-0a26bc51.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-b629ee11.js";import"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import"./chakra-ui-hooks.esm-02e82f78.js";import"./chakra-ui-visually-hidden.esm-1c1b3639.js";import"./useNYPLBreakpoints-91c0faa1.js";function c(l){const n=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",p:"p",a:"a",code:"code",h3:"h3",strong:"strong",em:"em"},s(),l.components);return i(h,{children:[e(u,{title:"Style Guide/Buttons"}),`
`,e(n.h1,{id:"buttons",children:"Buttons"}),`
`,e(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,i(n.ul,{children:[`
`,i(n.li,{children:[`
`,e(t,{href:"#general-information",target:"_self",children:"General Information"}),`
`]}),`
`,i(n.li,{children:[`
`,e(t,{href:"#guidelines",target:"_self",children:"Guidelines"}),`
`]}),`
`,i(n.li,{children:[`
`,e(t,{href:"#button-groups",target:"_self",children:"Button Groups"}),`
`]}),`
`,i(n.li,{children:[`
`,e(t,{href:"#button-types",target:"_self",children:"Button Types"}),`
`]}),`
`,i(n.li,{children:[`
`,e(t,{href:"#button-sizes",target:"_self",children:"Button Sizes"}),`
`]}),`
`,i(n.li,{children:[`
`,e(t,{href:"#patterns",target:"_self",children:"Patterns"}),`
`]}),`
`,i(n.li,{children:[`
`,e(t,{href:"#figma-reference",target:"_self",children:"Figma Reference"}),`
`]}),`
`]}),`
`,e(n.h2,{id:"general-information",children:"General Information"}),`
`,i(n.p,{children:["Use the ",e(n.a,{href:"../?path=/story/components-form-elements-button--with-controls",children:"Button"}),`
component to render form buttons.`]}),`
`,e(m,{code:`
import { Button } from "@nypl/design-system-react-components";
// ...
<Button id="btn">Button Text</Button>; `,language:"jsx"}),`
`,e(n.h2,{id:"guidelines",children:"Guidelines"}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:"Button text is optional."}),`
`,e(n.li,{children:"Button text should be title case."}),`
`,e(n.li,{children:"Button icon is optional."}),`
`,e(n.li,{children:"Buttons may have an icon on either the left or the right."}),`
`,e(n.li,{children:"Buttons by default are blue. However, Donation callout buttons are red."}),`
`,e(n.li,{children:`Buttons used for Back to Top actions have a Secondary button style with an
arrow icon pointing up.`}),`
`,i(n.li,{children:["When buttons are used in a group, they should be wrapped in a ",e(n.code,{children:"ButtonGroup"}),"."]}),`
`,i(n.li,{children:[`When buttons are used in a group where the user can move forward or backward,
the `,e(n.code,{children:"Primary"})," button is on the right and the ",e(n.code,{children:"Secondary"}),` button on the left
(i.e. cancel = secondary, submit = primary).`]}),`
`]}),`
`,e(n.h2,{id:"button-groups",children:"Button Groups"}),`
`,i(n.p,{children:["When ",e(n.code,{children:"Button"})," components are displayed in a group, use the ",e(n.code,{children:"ButtonGroup"}),`
component to handle the spacing and layout. The `,e(n.code,{children:"ButtonGroup"}),` component will use
`,e(n.code,{children:"--nypl-space-xs"})," (0.5rem) for spacing in horizontal group layouts."]}),`
`,i(n.p,{children:["Standalone ",e(n.code,{children:"Button"})," components and the ",e(n.code,{children:"ButtonGroup"}),` component should use
`,e(n.code,{children:"--nypl-space-l"}),` (2rem) for spacing between all other UI elements. This spacing
can be achieved by using the `,e(n.code,{children:"Form"})," component to wrap the ",e(n.code,{children:"Button"}),"s."]}),`
`,e(a,{border:"1px",borderColor:"ui.border.default",borderRadius:"5px",mb:"m",p:"s",pb:"0",children:i(o,{mb:"16px",children:[e(r,{id:"basic",children:"Button Text"}),i(r,{id:"btn-search",children:[e(d,{name:"search",size:"small",align:"left"}),"Button Text"]}),e(r,{id:"only-icon",children:e(d,{name:"close",size:"medium"})}),e(r,{buttonType:"callout",id:"donate",children:"Donate"}),i(r,{buttonType:"secondary",id:"btn-back-to-top",children:["Back to Top",e(d,{name:"arrow",size:"small",align:"right",iconRotation:"rotate180"})]})]})}),`
`,e(n.h2,{id:"button-types",children:"Button Types"}),`
`,i(n.p,{children:["The ",e(n.code,{children:"buttonType"}),` prop should be used to render various forms of the button
component.`]}),`
`,e(a,{border:"1px",borderColor:"ui.border.default",borderRadius:"5px",mb:"m",p:"s",pb:"0",children:i(o,{alignItems:"center",mb:"16px",children:[e(r,{buttonType:"primary",id:"primary",children:"Primary"}),e(r,{buttonType:"secondary",id:"secondary",children:"Secondary"}),e(r,{buttonType:"text",id:"text",children:"Text"}),e(r,{buttonType:"callout",id:"callout",children:"Callout"}),e(r,{buttonType:"noBrand",id:"noBrand",children:"NoBrand"}),e(r,{buttonType:"pill",id:"pill",children:"Pill"}),e(r,{buttonType:"link",id:"link",children:"Link (deprecated)"})]})}),`
`,e(n.h3,{id:"primary",children:"Primary"}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:"used for actions that move the user forward"}),`
`,e(n.li,{children:"Visual Treatment: rectangular, filled"}),`
`]}),`
`,e(n.h3,{id:"secondary",children:"Secondary"}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:"used for actions that move the user back, such as a form cancel button"}),`
`,i(n.li,{children:["often paired with a ",e(n.code,{children:"Primary"})," button"]}),`
`,e(n.li,{children:"Visual Treatment: rectangular, outlined"}),`
`]}),`
`,e(n.h3,{id:"text",children:"Text"}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:"used for equally weighted actions"}),`
`,e(n.li,{children:"Visual Treatment: plain text only without an underline"}),`
`]}),`
`,e(n.h3,{id:"callout",children:"Callout"}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:"used for call to actions such as donation buttons"}),`
`,e(n.li,{children:"Visual Treatment: rectangular, NYPL red background"}),`
`]}),`
`,e(n.h3,{id:"nobrand",children:"NoBrand"}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:"used in cases where there is no brand color"}),`
`,e(n.li,{children:"Visual Treatment: rectangular, filled with a black background"}),`
`]}),`
`,e(n.h3,{id:"pill",children:"Pill"}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:"used for equally weighted actions"}),`
`,e(n.li,{children:"should only be used for buttons that are displayed in a set (i.e. never use for a singleton button)"}),`
`,e(n.li,{children:"Visual Treatment: rounded, outlined"}),`
`]}),`
`,e(n.h3,{id:"link-deprecated",children:"Link (deprecated)"}),`
`,i(n.p,{children:["The ",e(n.code,{children:"link"}),` variant has been deprecated for accessibility reasons. From a visual
standpoint, an underlined link has the expected functionality of navigating to
a new page within the current site. If we are true to semantic coding, buttons
will not be used for this same type of navigational functionality and styling
a button to mimic the look of a standard link could cause unnecessary confusion.`]}),`
`,e(n.h2,{id:"button-sizes",children:"Button Sizes"}),`
`,i(n.p,{children:["The ",e(n.code,{children:"size"}),` prop should be used to render various sizes of the button component:
`,e(n.code,{children:'"small"'}),", ",e(n.code,{children:'"medium"'})," (default) and ",e(n.code,{children:'"large"'}),"."]}),`
`,e(n.h3,{id:"small",children:"Small"}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:"This is a reduced button size."}),`
`,e(n.li,{children:`This size can be used when space is limited or when the action is of lesser
significance.`}),`
`,i(n.li,{children:[e(n.strong,{children:"IMPORTANT:"})," Even though the ",e(n.code,{children:'"small"'}),` size is available, it is recommended
to use the `,e(n.code,{children:'"medium"'})," or ",e(n.code,{children:'"large"'})," sizes."]}),`
`]}),`
`,e(a,{border:"1px",borderColor:"ui.border.default",borderRadius:"5px",mb:"m",p:"s",pb:"0",children:i(o,{alignItems:"center",mb:"16px",children:[e(r,{buttonType:"primary",id:"small-primary",size:"small",children:"Primary"}),e(r,{buttonType:"secondary",id:"small-secondary",size:"small",children:"Secondary"}),e(r,{buttonType:"text",id:"small-text",size:"small",children:"Text"}),e(r,{buttonType:"callout",id:"small-callout",size:"small",children:"Callout"}),e(r,{buttonType:"noBrand",id:"small-nobrand",size:"small",children:"NoBrand"}),e(r,{buttonType:"pill",id:"small-pill",size:"small",children:"Pill"}),e(r,{buttonType:"link",id:"small-link",size:"small",children:"Link (deprecated)"})]})}),`
`,e(n.h3,{id:"medium",children:"Medium"}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:"This is the default button size."}),`
`,e(n.li,{children:`This button size should be used unless there is a very compelling reason to
use one of the other sizes.`}),`
`]}),`
`,e(a,{border:"1px",borderColor:"ui.border.default",borderRadius:"5px",mb:"m",p:"s",pb:"0",children:i(o,{alignItems:"center",mb:"16px",children:[e(r,{buttonType:"primary",id:"medium-primary",size:"medium",children:"Primary"}),e(r,{buttonType:"secondary",id:"medium-secondary",size:"medium",children:"Secondary"}),e(r,{buttonType:"text",id:"medium-text",size:"medium",children:"Text"}),e(r,{buttonType:"callout",id:"medium-callout",size:"medium",children:"Callout"}),e(r,{buttonType:"noBrand",id:"medium-nobrand",size:"medium",children:"NoBrand"}),e(r,{buttonType:"pill",id:"medium-pill",size:"medium",children:"Pill"}),e(r,{buttonType:"link",id:"medium-link",size:"medium",children:"Link (deprecated)"})]})}),`
`,e(n.h3,{id:"large",children:"Large"}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:"This is an enlarged button size."}),`
`,e(n.li,{children:"This size can be used to bring prominence to a button that needs to have a major impact."}),`
`,i(n.li,{children:[e(n.strong,{children:"IMPORTANT:"})," Use the ",e(n.code,{children:'"large"'})," size sparingly. Layouts should generally have only one ",e(n.code,{children:'"large"'})," button."]}),`
`]}),`
`,e(a,{border:"1px",borderColor:"ui.border.default",borderRadius:"5px",mb:"m",p:"s",pb:"0",children:i(o,{alignItems:"center",mb:"16px",children:[e(r,{buttonType:"primary",id:"large-primary",size:"large",children:"Primary"}),e(r,{buttonType:"secondary",id:"large-secondary",size:"large",children:"Secondary"}),e(r,{buttonType:"text",id:"large-text",size:"large",children:"Text"}),e(r,{buttonType:"callout",id:"large-callout",size:"large",children:"Callout"}),e(r,{buttonType:"noBrand",id:"large-nobrand",size:"large",children:"NoBrand"}),e(r,{buttonType:"pill",id:"large-pill",size:"large",children:"Pill"}),e(r,{buttonType:"link",id:"large-link",size:"large",children:"Link (deprecated)"})]})}),`
`,e(n.h2,{id:"patterns",children:"Patterns"}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:"Buttons are blue by default."}),`
`,i(n.li,{children:[`Buttons that are intended as a call out (i.e. Donation buttons) should be set
as `,e(n.code,{children:'"callout"'}),"."]}),`
`,i(n.li,{children:['The "Back to Top" button must be set as ',e(n.code,{children:'"secondary"'}),` and must include an up
arrow icon.`]}),`
`,i(n.li,{children:["Previous and Next buttons should be set as ",e(n.code,{children:'"secondary"'}),` and be wrapped in a
`,e(n.code,{children:"ButtonGroup"}),"."]}),`
`,i(n.li,{children:["Only use the ",e(n.code,{children:'"noBrand"'})," style where there is no brand color. ",e(n.em,{children:`This should be
rarely used.`})]}),`
`]}),`
`,e(a,{border:"1px",borderColor:"ui.border.default",borderRadius:"5px",mb:"m",p:"s",pb:"0",children:i(o,{children:[e(r,{buttonType:"callout",id:"callout2",mb:"16px",children:"Donate to this library"}),i(r,{buttonType:"secondary",id:"secondary2",children:["Back to Top",e(d,{align:"right",iconRotation:"rotate180",name:"arrow",size:"small"})]}),i(r,{buttonType:"secondary",id:"previous",children:[e(d,{align:"left",iconRotation:"rotate90",name:"arrow",size:"small"}),"Previous"]}),i(r,{buttonType:"secondary",id:"next",children:["Next",e(d,{align:"right",iconRotation:"rotate270",name:"arrow",size:"small"})]})]})}),`
`,e(n.h2,{id:"figma-reference",children:"Figma Reference"}),`
`,e(n.p,{children:"For more styling information, please refer to the Figma Main file."}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:e(n.a,{href:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=11477%3A2298",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=11477%3A2298"})}),`
`]})]})}function V(l={}){const{wrapper:n}=Object.assign({},s(),l.components);return n?e(n,Object.assign({},l,{children:e(c,l)})):c(l)}export{V as default};
//# sourceMappingURL=Buttons-b5161834.js.map
