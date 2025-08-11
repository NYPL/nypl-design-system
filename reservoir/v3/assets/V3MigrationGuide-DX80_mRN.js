import{u as r,j as e,M as d,L as o,S as i}from"./iframe-D93LbwGv.js";function t(s){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Development Guide/v3 Migration Guide"}),`
`,e.jsx(n.h1,{id:"reservoir-v3-migration-guide",children:"Reservoir v3 Migration Guide"}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(o,{href:"#general-updates-requirements",children:"General Updates & Requirements"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(o,{href:"#upgrade-path",children:"Upgrade Path"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(o,{href:"#breaking-changes",children:"Breaking Changes"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(o,{href:"#additional-testing-needs",children:"Additional Testing Needs"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"general-updates--requirements",children:"General Updates & Requirements"}),`
`,e.jsx(n.p,{children:"The Design System (DS) v3 release includes the following main updates:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Node 18+"}),`
`,e.jsx(n.li,{children:"React 18"}),`
`]}),`
`,e.jsx(n.p,{children:`With these updates, the DS will offer better support for apps that are using the
latest version of React. We strongly encourage this upgrade to take advantage of
the latest features and improvements for React, Next.js, and other modern web
development tools.`}),`
`,e.jsx(n.p,{children:"Related to these updates, it is important to consider the following:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The Chakra UI 1.8 version is not supported by React 18."}),`
`,e.jsx(n.li,{children:`Node 16 support ended in September, 2023 so while AWS and Vercel still
support it, they urgently recommend upgrading to a higher version.`}),`
`]}),`
`,e.jsx(n.h2,{id:"upgrade-path",children:"Upgrade Path"}),`
`,e.jsxs(n.p,{children:[`Not everything in this migration guide is applicable to all consuming
applications. For example, even though the `,e.jsx(n.code,{children:"Menu"}),` component is a new addition,
that does not mean that an application has to immediately adopt and use it.
The ideal approach is to go through the "Breaking Changes” and “Additional
Testing Needs” sections and update accordingly.`]}),`
`,e.jsx(n.h3,{id:"npm-package-update",children:"npm Package Update"}),`
`,e.jsxs(n.p,{children:[`The recommended approach to upgrade to v3 is to update the
`,e.jsx(n.code,{children:"@nypl/design-system-react-components"})," package in the ",e.jsx(n.code,{children:"package.json"})," file."]}),`
`,e.jsx(i,{code:`
// Update the package.json file
"dependencies": {
"@nypl/design-system-react-components": "3.0.0",
}
`,language:"json"}),`
`,e.jsx(n.p,{children:"Alternatively, you can run the following command in the terminal:"}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"npm install @nypl/design-system-react-components@3.0.0"})}),`
`,e.jsxs(n.p,{children:[`We recommended being explict with the version number to avoid any unexpected
changes in the future that the caret (`,e.jsx(n.code,{children:"^"}),") might introduce."]}),`
`,e.jsx(n.h3,{id:"main-additions-and-upgrades",children:"Main Additions and Upgrades"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"Menu"})," (new) and ",e.jsx(n.code,{children:"MultiSelect"})," (v2) components are included in this release."]}),`
`,e.jsxs(n.li,{children:[`Chakra 1.8 does not support React 18, so Chakra has been updated to version
2.8. `,e.jsxs(n.strong,{children:[`IMPORTANT: If you manually and separately install Chakra in your app,
make sure to also upgrade it in the `,e.jsx(n.code,{children:"package.json"})," file."]})]}),`
`]}),`
`,e.jsxs(n.p,{children:["General updates can be found in the ",e.jsx(n.a,{href:"https://github.com/NYPL/nypl-design-system/blob/development/CHANGELOG.md",rel:"nofollow",children:"Changelog"}),`,
but the main points to note are:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"StatusBadge"})," has a new ",e.jsx(n.code,{children:"type"})," prop."]}),`
`,e.jsxs(n.li,{children:["There are better responsive styles for the ",e.jsx(n.code,{children:"Heading"})," and ",e.jsx(n.code,{children:"Text"})," components."]}),`
`,e.jsxs(n.li,{children:[`The following Chakra 2.8 helpers are now exported through the DS:
`,e.jsx(n.code,{children:"cookieStorageManagerSSR"}),", ",e.jsx(n.code,{children:"FocusLock"}),", ",e.jsx(n.code,{children:"useStyleConfig"}),", and ",e.jsx(n.code,{children:"useMultiStyleConfig"}),"."]}),`
`]}),`
`,e.jsx(n.h3,{id:"major-visual-changes",children:"Major Visual Changes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"StatusBadge"})," has updated UI variants."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Tabs"}),` adds horizontal scrolling for desktop viewports and improves
horizontal scrolling for mobile viewports.`]}),`
`]}),`
`,e.jsx(n.h2,{id:"breaking-changes",children:"Breaking Changes"}),`
`,e.jsx(n.h3,{id:"design-system",children:"Design System"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"NewsletterSignup"})," and ",e.jsx(n.code,{children:"SocialMediaLinks"}),` components have been removed.
They will be added back in a later version.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"SimpleGrid"})," gap values have been updated to include ",e.jsx(n.code,{children:'"grid"'}),` in the prop
value name. For example, `,e.jsx(n.code,{children:"gap=”grid.xs”"}),"."]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"Link"}),` component now supports app framework's routing link components. For
example, `,e.jsx(n.code,{children:"Link"})," component from Next.js can be used through the ",e.jsx(n.code,{children:"as"}),` prop. The
previous pattern where the framework's `,e.jsx(n.code,{children:"Link"}),` component was used as a parent
component is no longer supported.`]}),`
`]}),`
`,e.jsx(i,{code:`
// Assuming that Next.js 13+ is being used

// Do This
import Link as NextLink from "next/link";
import { Link } from "@nypl/design-system-react-components";

<Link href="/about" as={NextLink}>
About
</Link>

// Don't Do This
import Link from "next/link";
import { Link as DSLink } from "@nypl/design-system-react-components";

<Link href="/about" passHref>
<DSLink>About</DSLink>
</Link>
`,language:"jsx"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"TagSet"})," ",e.jsx(n.code,{children:'"filter"'}),` variant has been updated to improve filtering logic in
consuming apps.`,`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Only for the ",e.jsx(n.code,{children:'"filter"'})," variant, the ",e.jsx(n.code,{children:"tagSetData"}),` prop now
expects an array of objects with the following required properties:
`,e.jsx(n.code,{children:"{ label: string, id: string }"}),`. Any additional property can now also be
added to the object.`]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"onClick"}),` function now returns the entire data object of the clicked
tag instead of the tag's "label".`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"chakra-ui",children:"Chakra UI"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["It is recommended to use ",e.jsx(n.code,{children:"cookieStorageManagerSSR"}),` instead of
`,e.jsx(n.code,{children:"cookieStorageManager"}),` for color mode server-side rendering (SSR). The returned
value should still used in the `,e.jsx(n.code,{children:"DSProvider"}),"'s ",e.jsx(n.code,{children:"colorModeManager"})," prop."]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"FocusLock"}),` component was previously imported from the separate Chakra
`,e.jsx(n.code,{children:"@chakra-ui/focus-lock"})," package. In Chakra v2+, ",e.jsx(n.code,{children:"FocusLock"}),` can now be
imported from the main npm Chakra package. This is now included as an export
from the DS.`]}),`
`]}),`
`,e.jsx(i,{code:`
  import { FocusLock } from "@nypl/design-system-react-components";
`,language:"jsx"}),`
`,e.jsx(n.h2,{id:"additional-testing-needs",children:"Additional Testing Needs"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`Due to some JS features and how we test, consuming apps need to add the
following to their Jest setup file (typically `,e.jsx(n.code,{children:"jest.config.js"}),`). They are
needed for the following components and hooks: `,e.jsx(n.code,{children:"Tabs"}),", ",e.jsx(n.code,{children:"Slider"}),`, and
`,e.jsx(n.code,{children:"useNYPLBreakpoints"}),". ",e.jsx(n.em,{children:`We are actively working on updates so that consuming
apps do not have to include these test helpers in future releases.`})]}),`
`]}),`
`,e.jsx(i,{code:`
// Related to the useNYPLBreakpoints hook which is used in: ButtonGroup,
// FeedbackBox, Modal, MultiSelectGroup, and NewsletterSignup.
import { MatchMedia } from "@nypl/design-system-react-components";

new MatchMedia();
`,language:"jsx"}),`
`,e.jsx(i,{code:`
// The scrollIntoView function is necessary for the Tabs component.
window.HTMLElement.prototype.scrollIntoView = jest.fn()
`,language:"jsx"}),`
`,e.jsx(i,{code:`
// Related to the Slider component
class ResizeObserver {
observe() {}
unobserve() {}
disconnect() {
}

window.ResizeObserver = ResizeObserver;
`,language:"jsx"})]})}function l(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{l as default};
