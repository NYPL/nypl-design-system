import{u as a,j as e,M as h,L as t,bv as u,C as o,bw as x,S as s,B as r,J as j}from"./iframe-CFLVJZOZ.js";import{S as l,W as c,a as b,O as m,U as p,b as g,C as v,H as f,P as y}from"./SubNav.stories-Bpt9zFLT.js";import{C as S}from"./ComponentChangelogTable-DvY0SxTs.js";const k=[{date:"2025-04-24",version:"3.6.1",type:"Update",affects:["Styles"],notes:["Added dark mode color styles."]},{date:"2024-12-05",version:"3.5.0",type:"New Feature",affects:["Documentation","Functionality"],notes:["Added the `SubNav` component."]}];function d(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...a(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:l}),`
`,e.jsx(n.h1,{id:"subnav",children:"SubNav"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Component Version"}),e.jsx(n.th,{children:"DS Version"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Added"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"3.5.0"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Latest"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"3.6.1"})})]})]})]}),`
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
`,e.jsx(t,{href:"#composing-the-subnav",target:"_self",children:"Composing the SubNav"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#selected-item",target:"_self",children:"Selected Item"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#outlined-item",target:"_self",children:"Outlined Item"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#using-icons",target:"_self",children:"Using Icons"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#custom-colors",target:"_self",children:"Custom Colors"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#horizontal-scrolling",target:"_self",children:"Horizontal Scrolling"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#placement",target:"_self",children:"Placement"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#changelog",target:"_self",children:"Changelog"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(u,{of:l}),`
`,e.jsx(n.h2,{id:"component-props",children:"Component Props"}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(x,{of:c}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["Only one ",e.jsx(n.code,{children:"SubNav"}),` component should be rendered on a page. This is because only
one HTML `,e.jsx(n.code,{children:"<nav>"})," element with an ",e.jsx(n.code,{children:"aria-label"}),` attribute value of
`,e.jsx(n.code,{children:'"Sub-navigation menu"'})," should be rendered on a page. The DS ",e.jsx(n.code,{children:"SubNav"}),` component
renders the `,e.jsx(n.code,{children:"<nav>"}),` HTML landmark, so only one component must be rendered on a
page.`]}),`
`,e.jsxs(n.p,{children:["Internally, buttons and links are organized in an unordered list (",e.jsx(n.code,{children:"<ul>"}),`)
element. If applicable, the current page link is denoted by an `,e.jsx(n.code,{children:"aria-current"}),`
attribute value of `,e.jsx(n.code,{children:'"page"'}),". Separate ",e.jsx(n.code,{children:"<ul>"}),` elements are used to contain the
buttons and links with the `,e.jsx(n.code,{children:"primaryActions"})," and ",e.jsx(n.code,{children:"secondaryActions"})," sections."]}),`
`,e.jsx(n.h2,{id:"composing-the-subnav",children:"Composing the SubNav"}),`
`,e.jsxs(n.p,{children:["The clickable action items that compose the ",e.jsx(n.code,{children:"SubNav"}),` component are populated by
`,e.jsx(n.code,{children:"SubNavButton"})," and ",e.jsx(n.code,{children:"SubNavLink"})," components to the ",e.jsx(n.code,{children:"primaryActions"}),` and
`,e.jsx(n.code,{children:"secondaryActions"})," props. The ",e.jsx(n.code,{children:"SubNavButton"})," and ",e.jsx(n.code,{children:"SubNavLink"}),` components mirror
the DS `,e.jsx(n.code,{children:"Button"})," and ",e.jsx(n.code,{children:"Link"}),` components, respectively, with the addition of the
`,e.jsx(n.code,{children:"isSelected"})," and ",e.jsx(n.code,{children:"isOutlined"})," props for formatting."]}),`
`,e.jsx(n.h3,{id:"subnavbutton",children:"SubNavButton"}),`
`,e.jsx(s,{code:`
<SubNavButton
buttonType="text"
id="subnav-button"
onClick={onClickHandler}
screenreaderOnlyText="for NYPL.org"
>
Button label
</SubNavButton>
`,language:"jsx"}),`
`,e.jsx(n.h3,{id:"subnavlink",children:"SubNavLink"}),`
`,e.jsx(s,{code:`
<SubNavLink
href="https://www.nypl.org"
id="subnav-link"
>
Link text
</SubNavLink>
`,language:"jsx"}),`
`,e.jsx(n.h3,{id:"full-example",children:"Full example"}),`
`,e.jsx(s,{code:`
import {
SubNav,
SubNavButton,
SubNavLink,
} from "@nypl/design-system-react-components";

<SubNav
id="subnav-example"
primaryActions={
  <>
    <SubNavButton
      buttonType="text"
      id="subnav-button"
      onClick={onClickHandler}
      screenreaderOnlyText="for NYPL.org"
    >
      Button label
    </SubNavButton>
  </>
}
secondaryActions={
  <>
    <SubNavLink href="https://www.nypl.org" id="subnav-link">
      Link text
    </SubNavLink>
  </>
}
/>
`,language:"jsx"}),`
`,e.jsx(n.h2,{id:"selected-item",children:"Selected Item"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"isSelected"}),` prop can be used to highlight an action item. The prop should
be passed directly to a child action item.`]}),`
`,e.jsx(n.p,{children:`This prop should be used to highlight the button or link that corresponds to the
current state of the page or the current page.`}),`
`,e.jsx(r,{content:e.jsxs(e.Fragment,{children:[e.jsx(n.strong,{children:"IMPORTANT:"}),' Only one action item should be marked as "selected" at any given time. Marking more than one action item as "selected" will cause accessibility problems.']}),type:"warning"}),`
`,e.jsx(s,{code:`
<SubNavLink
href="https://nypl.org/education/kids"
id="subnav-link-education-kids"
isSelected
>
Kids
</SubNavLink>
`,language:"jsx"}),`
`,e.jsx(o,{of:b}),`
`,e.jsx(n.h2,{id:"outlined-item",children:"Outlined Item"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"isOutlined"}),` prop can be used to apply a border to an action item. The prop
should be passed directly to a child action item.`]}),`
`,e.jsx(s,{code:`
<SubNavLink
href="#link1"
id="subnav-link-account"
isOutlined
screenreaderOnlyText="for NYPL.org"
>
My account
</SubNavLink>
`,language:"jsx"}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(n.h2,{id:"using-icons",children:"Using Icons"}),`
`,e.jsxs(n.p,{children:["Like the DS ",e.jsx(n.code,{children:"Button"})," and ",e.jsx(n.code,{children:"Link"})," components, the ",e.jsx(n.code,{children:"SubNavButton"})," and ",e.jsx(n.code,{children:"SubNavLink"}),`
components can be rendered with icons by passing a DS `,e.jsx(n.code,{children:"Icon"}),` component with the
button label or link text.`]}),`
`,e.jsx(r,{content:e.jsxs(e.Fragment,{children:[e.jsx(n.strong,{children:"RECOMMENDATION:"})," Use icons only where necessary and only when they have a strong association with the label."]}),type:"recommendation"}),`
`,e.jsx(n.h3,{id:"subnavbutton-1",children:"SubNavButton"}),`
`,e.jsx(s,{code:`
<SubNavButton
buttonType="text"
id="subnav-button-account"
onClick={onClickHandler}
screenreaderOnlyText="for NYPL.org"
>
<Icon
  name="actionIdentityFilled"
  size="medium"
/>
My account
</SubNavLink>
`,language:"jsx"}),`
`,e.jsx(n.h3,{id:"subnavlink-1",children:"SubNavLink"}),`
`,e.jsx(s,{code:`
<SubNavLink
href="#link1"
id="subnav-link-settings"
isOutlined
screenreaderOnlyText="of the NYPL website"
>
<Icon
  name="actionSettings"
  size="medium"
/>
Settings
</SubNavLink>
`,language:"jsx"}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(n.h3,{id:"mobile",children:"Mobile"}),`
`,e.jsx(n.p,{children:`When an icon is used in a link or button element, consider displaying only the
icon for the mobile viewport. If an icon-only version of a link or button
element is used, make sure to include appropriate ARIA or screen reader only
text.`}),`
`,e.jsx(s,{code:`
<SubNavLink
href="#link1"
id="subnav-link-settings"
isOutlined
screenreaderOnlyText="Settings for your account"
>
<Icon
  name="actionSettings"
  size="medium"
/>
</SubNavLink>
`,language:"jsx"}),`
`,e.jsx(o,{of:g}),`
`,e.jsx(n.h2,{id:"custom-colors",children:"Custom Colors"}),`
`,e.jsxs(n.p,{children:["The default color styles for the ",e.jsx(n.code,{children:"SubNav"}),` component are based on the standard NYPL
link colors, but the default color styles can be manually overridden using
`,e.jsx(n.code,{children:"actionBackgroundColor"})," and ",e.jsx(n.code,{children:"highlightColor"}),"."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"actionBackgroundColor"}),` prop is used to set the hover state background
color for the action items.`]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"highlightColor"}),` prop is used to set the color of the text, icons, and
borders for some instances of the action items.`]}),`
`]}),`
`,e.jsxs(n.p,{children:[`It is recommended that the values for the highlight and background colors are
from the same color family. For example, `,e.jsx(n.code,{children:"section.education.primary"}),` for the
highlight color and `,e.jsx(n.code,{children:"section.education.primary-05"})," for the background color."]}),`
`,e.jsx(r,{content:e.jsxs(e.Fragment,{children:[e.jsx(n.strong,{children:"IMPORTANT:"})," Both ",e.jsx(n.strong,{children:"actionBackgroundColor"})," ","and ",e.jsx(n.strong,{children:"highlightColor"})," must be set in order to override the default colors."]}),type:"warning"}),`
`,e.jsx(o,{of:v}),`
`,e.jsx(n.h2,{id:"horizontal-scrolling",children:"Horizontal Scrolling"}),`
`,e.jsx(n.p,{children:`Horizontal scrolling is used when the width of the primary actions is greater
than the space available. The secondary actions will never scroll.`}),`
`,e.jsx(r,{content:e.jsxs(e.Fragment,{children:[e.jsx(n.strong,{children:"RECOMMENDATION:"})," To reduce the need for horizontal scrolling...",e.jsxs(j,{my:"0",mt:"xs",paddingStart:"s",children:[e.jsx(n.li,{children:"limit the primary actions to five or fewer elements"}),e.jsx(n.li,{children:"limit the secondary actions to two or fewer elements"})]})]}),type:"recommendation"}),`
`,e.jsx(o,{of:f}),`
`,e.jsx(n.h2,{id:"placement",children:"Placement"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"SubNav"})," component is intended to sit below the global header and ",e.jsx(n.code,{children:"Hero"}),`
components and above the main content area.`]}),`
`,e.jsx(o,{of:y}),`
`,e.jsx(n.h2,{id:"changelog",children:"Changelog"}),`
`,e.jsx(S,{changelogData:k})]})}function T(i={}){const{wrapper:n}={...a(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(d,{...i})}):d(i)}export{T as default};
