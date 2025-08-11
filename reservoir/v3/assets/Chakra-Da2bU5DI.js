import{u as i,j as e,M as a,L as s,S as t,m as l,o as d}from"./iframe-D93LbwGv.js";function r(o){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Chakra UI"}),`
`,e.jsx(n.h1,{id:"chakra-ui",children:"Chakra UI"}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#why-chakra-ui",target:"_self",children:"Why Chakra UI?"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#dsprovider",target:"_self",children:"DSProvider"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#components",target:"_self",children:"Components"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#styling",target:"_self",children:"Styling"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#style-props",target:"_self",children:"Style Props"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#hooks",target:"_self",children:"Hooks"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#testing",target:"_self",children:"Testing"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"why-chakra-ui",children:"Why Chakra UI"}),`
`,e.jsx(n.p,{children:`The Reservoir Design System (DS) project was influenced by other design systems but
ultimately we decided to initially build DS components from scratch rather than
use another design system as its foundation. To better help all the projects at
NYPL and to better scale with all the components we have built and still need to
build, we decided to integrate Chakra UI into the DS.`}),`
`,e.jsx(n.p,{children:`Chakra UI is an open source component library that is opinionated and uses design
and development patterns that various projects at NYPL use. Since the DS
will be the foundation for all NYPL projects moving forward, using Chakra will
help us align all projects so similar patterns are used throughout various teams
and projects.`}),`
`,e.jsx(n.p,{children:`Chakra follows WAI-ARIA and WCAG 2.1 standards and guidelines which aligns with
the standards that NYPL follows for its own components and applications.`}),`
`,e.jsxs(n.p,{children:[`With design and development consistency, the ability to customize components
`,e.jsx(n.em,{children:"if necessary"}),`, and accessibility standards in place, developers at NYPL using
the Design System will be able to build out applications faster.`]}),`
`,e.jsxs(n.p,{children:["We recommend to read Chakra's own ",e.jsx(n.a,{href:"https://chakra-ui.com/docs/getting-started",rel:"nofollow",children:"documentation"}),`
to get up to speed on it. This file will provide information on how it is used
in the DS but we rely on Chakra's documentation.`]}),`
`,e.jsxs(n.p,{children:[`If you need help updating to a newer version of the DS, check out
our `,e.jsx(n.a,{href:"https://github.com/NYPL/nypl-design-system/blob/development/CHAKRA_MIGRATION_GUIDE.md",rel:"nofollow",children:"Chakra Migration Guide"}),"."]}),`
`,e.jsx(n.h2,{id:"dsprovider",children:"DSProvider"}),`
`,e.jsx(n.p,{children:`In order to use DS components in a consuming application, there is a necessary
step that must be done for component styles to properly render. Consuming
applications need to wrap all the DS components with a simple provider
component. Fortunately, this only needs to be done once at the top level of the
consuming application.`}),`
`,e.jsxs(n.p,{children:[`Once the following is completed, DS components that internally use Chakra UI
will render styles properly. Internally, the `,e.jsx(n.code,{children:"DSProvider"}),` is built on top of
Chakra's `,e.jsx(n.code,{children:"ChakraProvider"}),` component with NYPL's custom theme as input. This sets
up the style context to propogate through all the children nodes in the DOM tree.`]}),`
`,e.jsx(t,{code:`
// Your main application file
import { DSProvider } from "@nypl/design-system-react-components";
// ...
const Application = (props) => {
// ...
return (
  <header>...</header>
  <DSProvider>
    <div className="my-app">
      // ...
      {children}
    </div>
  </DSProvider>
  <footer>...</footer>
);
};
`,language:"tsx"}),`
`,e.jsx(n.h2,{id:"components",children:"Components"}),`
`,e.jsxs(n.p,{children:[`Although Chakra is integrated into the DS repo, we are still working to compose
DS components with Chakra components or patterns. For example, both the DS and
Chakra have a `,e.jsx(n.code,{children:"Button"})," component so we will use Chakra's ",e.jsx(n.code,{children:"Button"}),` component to
compose the DS `,e.jsx(n.code,{children:"Button"})," component. However, the DS has a ",e.jsx(n.code,{children:"Hero"}),` component that
is not already built by Chakra. In this case, the DS `,e.jsx(n.code,{children:"Hero"}),` component will
internally use `,e.jsx(n.code,{children:"Chakra"})," components such as ",e.jsx(n.code,{children:"Box"}),"."]}),`
`,e.jsx(n.h3,{id:"components-composed-with-chakra",children:"Components Composed with Chakra"}),`
`,e.jsx(n.p,{children:`While we can directly use Chakra components that align with DS components, we
want to compose DS components using the Chakra component as a base instead. This
pattern allows the Design System to have control over props and standard styles.`}),`
`,e.jsxs(n.p,{children:[`These components composed from Chakra, therefore, do not have all styled props
available. For example, whereas `,e.jsx(n.code,{children:"m"})," (",e.jsx(n.code,{children:"margin"}),"), ",e.jsx(n.code,{children:"me"})," (",e.jsx(n.code,{children:"marginEnd"}),`), and similar
props can be used in Chakra components, those props are not available for DS
components that internally are composed with Chakra components.`]}),`
`,e.jsxs(n.p,{children:["Components built from Chakra rename the component with the ",e.jsx(n.code,{children:"Chakra"})," name prefix."]}),`
`,e.jsx(t,{code:`
import { Tabs as ChakraTabs, useStyleConfig } from "@chakra-ui/react";
`,language:"tsx"}),`
`,e.jsxs(n.p,{children:["In this example, the ",e.jsx(n.code,{children:"ChakraTabs"}),` component is returned with NYPL specific
functionality, styles, and other requirements.`]}),`
`,e.jsx(t,{code:`
function Tabs(props) {
// ...
const styles = useStyleConfig("Tabs", { variant: props.tabsType });
return (
  <ChakraTabs
    id={id}
    __css={styles}
    // ... other props
  >
    {children}
  </ChakraTabs>
}
`,language:"tsx"}),`
`,e.jsx(n.h4,{id:"patterns",children:"Patterns"}),`
`,e.jsx(n.p,{children:`We are writing CSS style object rules into Javascript objects that work with
Chakra's theme. Instead of creating a variant for a component with a class name,
now different props or internal logic are used to get the appropriate variant.
Internally, the right variant will be mapped to a Chakra theme variant that will
provide all the necessary styles.`}),`
`,e.jsxs(n.p,{children:["For the ",e.jsx(n.code,{children:"Button"}),` component, for example, we would convert a SCSS class rule such
as `,e.jsx(n.code,{children:".button-outline"})," to a Javascript object (more on this in the ",e.jsx(s,{href:"#anatomy-of-a-component-styling-object",target:"_self",children:`Anatomy of a
Component Styling Object`})," section)."]}),`
`,e.jsx(n.h3,{id:"components-re-exported-from-chakra",children:"Components re-exported from Chakra"}),`
`,e.jsxs(n.p,{children:[`Some components are directly exported from Chakra. These components can be found
in the `,e.jsx(n.code,{children:"/src/index.ts"})," file. Note that not ",e.jsx(n.em,{children:"all"}),` Chakra components are re-exported
because we want to limit what developers should use in consuming applications.
They include:`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Box"}),", ",e.jsx(n.code,{children:"Center"}),", ",e.jsx(n.code,{children:"Circle"}),", ",e.jsx(n.code,{children:"Grid"}),", ",e.jsx(n.code,{children:"GridItem"}),", ",e.jsx(n.code,{children:"HStack"}),", ",e.jsx(n.code,{children:"Square"}),", ",e.jsx(n.code,{children:"Stack"}),", ",e.jsx(n.code,{children:"VStack"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note"}),`: These components are harder to have snapshot tests for because, internally,
these components autogenerate ids and class names on every new render. We can't
override them so snapshot tests will fail.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Update"}),`: Newer Chakra UI versions have mostly fixed this issue. Still, since
Chakra components have already been tested, we don't necessarily want or need
to test them ourselves.`]}),`
`,e.jsx(n.h2,{id:"styling",children:"Styling"}),`
`,e.jsxs(n.p,{children:["The NYPL DS' theme file can be found at ",e.jsx(n.code,{children:"src/theme/index.ts"}),`. This creates a new
theme that extends Chakra's theme and is set in the `,e.jsx(n.code,{children:"DSProvider"}),` component. Note
that the example below is the general structure of the `,e.jsx(n.code,{children:"theme"}),` object but the DS
`,e.jsx(n.code,{children:"theme"}),` object has values already set so it may look different. You would generally
only work and add new object values in the `,e.jsx(n.code,{children:"components"}),` obejct key for new
components and their theme or variants.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Note"}),`: There are some SCSS files used to style third party plugins and to
generate SCSS mixins.`]}),`
`,e.jsx(t,{code:`
const theme = extendTheme({
styles: { ... },
breakpoints: { ... },
colors: { ... },
typography: { ... },
space: { ... },
components: {
  Button,
  // ...
},
});
`,language:"jsx"}),`
`,e.jsx(n.h3,{id:"anatomy-of-a-component-styling-object",children:"Anatomy of a Component Styling Object"}),`
`,e.jsxs(n.p,{children:["For in-depth information, read Chakra's ",e.jsx(n.a,{href:"https://chakra-ui.com/docs/theming/component-style",rel:"nofollow",children:"Component Style documentation"}),"."]}),`
`,e.jsxs(n.p,{children:["Component theme files can be found in the ",e.jsx(n.code,{children:"src/theme/components/"}),` directory.
Here is an example using the `,e.jsx(n.code,{children:"Button"})," component."]}),`
`,e.jsx(t,{code:`
// The basic structure for all component style objects.
const Button = {
baseStyle: {},
sizes: {},
variants: {},
defaultProps: {},
};
`,language:"js"}),`
`,e.jsxs(n.p,{children:[`A current variant class rule can be converted to a Javascript object and go in
the `,e.jsx(n.code,{children:"variants"})," object as in the following example."]}),`
`,e.jsx(t,{code:`
// Button.scss
// This is the "Secondary" variant.
.button--outline {
@include button-base;
background-color: var(--nypl-colors-ui-white);
border: 1px solid var(--nypl-colors-ui-gray-light-cool);
color: inherit;
&:hover {
  background-color: var(--nypl-colors-ui-gray-xx-light-cool);
}
}
`,language:"css"}),`
`,e.jsx(t,{code:`
// button.ts
const Button = {
baseStyle: { ... },
sizes: { ... },
variants: {
  secondary: {
    bg: "ui.white",
    border: "1px solid",
    borderColor: "ui.gray.light-cool",
    color: "inherit",
    _hover: {
      bg: "ui.gray.xx-light-cool",
    },
  },
  // ... other variants,
},
defaultProps: { ... },
};
`,language:"js"}),`
`,e.jsx(n.p,{children:"Now this variant can be rendered:"}),`
`,e.jsx(t,{code:`
<Button buttonType="secondary" id="secondary">
Press me
</Button>
`,language:"jsx"}),`
`,e.jsx(n.h3,{id:"breakpoints",children:"Breakpoints"}),`
`,e.jsx(n.p,{children:"There are currently five (5) breakpoint values used in the DS:"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Key Name"}),e.jsx(n.th,{children:"EM/PX value"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"sm"}),e.jsx(n.td,{children:"20em/320px"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"md"}),e.jsx(n.td,{children:"38em/600px"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"lg"}),e.jsx(n.td,{children:"60em/960px"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"xl"}),e.jsx(n.td,{children:"80em/1280px"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"2xl"}),e.jsx(n.td,{children:"96em/1536px"})]})]})]}),`
`,e.jsxs(n.p,{children:[`There are two ways to set breakpoint values for a style rule: the array method
and the object method. We prefer the object method and recommend to use the
object method since it is easier to read and readily know what values take
effect at defined breakpoint values. Note that the Chakra `,e.jsx(n.code,{children:'"base"'}),` key value is
the same as `,e.jsx(n.code,{children:'"sm"'}),"."]}),`
`,e.jsx(n.h4,{id:"object-method",children:"Object Method"}),`
`,e.jsxs(n.p,{children:[`We recommend and follow this pattern in the DS. As an example, let's say we want
to increase the width of the `,e.jsx(n.code,{children:"Button"}),` component as the device width increases.
We start at value "100px" and increase by "50px" at every breakpoint. In the
`,e.jsx(n.code,{children:"button.ts"})," style file, we can define it as in the example below:"]}),`
`,e.jsx(t,{code:`
// button.ts
const Button = {
baseStyle: {
  width: {
    base: "100px",
    md: "150px",
    lg: "200px",
    xl: "250px",
    "2xl": "300px",
  },
},
// ...
};
`,language:"js"}),`
`,e.jsxs(n.p,{children:[`You do not have to define every breakpoint. If you only want to change the width
of the `,e.jsx(n.code,{children:"Button"})," at the ",e.jsx(n.code,{children:"lg"})," breakpoint, it can be defined as:"]}),`
`,e.jsx(t,{code:`
// button.ts
const Button = {
baseStyle: {
  width: {
    base: "100px",
    lg: "200px",
  },
},
// ...
};
`,language:"js"}),`
`,e.jsx(n.h4,{id:"array-method",children:"Array Method"}),`
`,e.jsxs(n.p,{children:[`We do not recommend this pattern because it is harder to read and implicit on
breakpoint values. Following the same example as the one above, the width of the
`,e.jsx(n.code,{children:"Button"})," component can be updated wiht all five values in an array:"]}),`
`,e.jsx(t,{code:`
// button.ts
const Button = {
baseStyle: {
  width: ["100px", "150px", "200px", "250px", "300px"],
},
// ...
};
`,language:"js"}),`
`,e.jsx(n.h3,{id:"colors",children:"Colors"}),`
`,e.jsxs(n.p,{children:["All available colors can be found in ",e.jsx(n.code,{children:"src/theme/foundations/colors.ts"}),`. Chakra
autogenerates the `,e.jsx(n.code,{children:"colors"}),` object into CSS variables. We will rely on these
variables rather than creating our own.`]}),`
`,e.jsx(t,{code:`
const colors: Colors = {
// ui fills
ui: {
  // State and link utilities
  focus: "#4181F1",
  link: {
    primary: "#0576D3",
    secondary: "#004B98",
  },
  // ...
},
section: {
  /** What's On is used for Exhibitions & Events. */
  "whats-on": {
    primary: "#242424",
    secondary: "#000000",
  },
},
// ...
};
`,language:"js"}),`
`,e.jsx(n.p,{children:"In the shorten object example above, the following will be generated by Chakra:"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Theme object value"}),e.jsx(n.th,{children:"CSS variable"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"colors.ui.focus"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"--nypl-colors-ui-focus"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"colors.ui.link.primary"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"--nypl-colors-ui-link-primary"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"colors.ui.link.secondary"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"--nypl-colors-ui-link-secondary"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:'colors.section["whats-on"].primary'})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"--nypl-colors-section-whats-on-primary"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:'colors.section["whats-on"].secondary'})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"--nypl-colors-section-whats-on-secondary"})})]})]})]}),`
`,e.jsxs(n.p,{children:[`Note: while each Chakra color has number range values from 50 to 900 (such as
`,e.jsx(n.code,{children:"red.400"}),", ",e.jsx(n.code,{children:"blue.600"}),`, etc) and each one is based on the color coming from
DS' Figma documentation, we recommend NOT to use them.`]}),`
`,e.jsx(n.h3,{id:"spacing",children:"Spacing"}),`
`,e.jsxs(n.p,{children:["All the spacing values can be found in the ",e.jsx(n.code,{children:"src/theme/foundations/spacing.ts"}),`
file. While Chakra provides many values, only use the eight DS defined values.`]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"NYPL name Value"}),e.jsx(n.th,{children:"Chakra Value"}),e.jsx(n.th,{children:"DS Variable"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"xxs"}),e.jsx(n.td,{children:"1"}),e.jsx(n.td,{children:"--nypl-space-xxs"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"xs"}),e.jsx(n.td,{children:"2"}),e.jsx(n.td,{children:"--nypl-space-xs"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"s"}),e.jsx(n.td,{children:"4"}),e.jsx(n.td,{children:"--nypl-space-s"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"m"}),e.jsx(n.td,{children:"6"}),e.jsx(n.td,{children:"--nypl-space-m"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"l"}),e.jsx(n.td,{children:"8"}),e.jsx(n.td,{children:"--nypl-space-l"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"xl"}),e.jsx(n.td,{children:"12"}),e.jsx(n.td,{children:"--nypl-space-xl"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"xxl"}),e.jsx(n.td,{children:"16"}),e.jsx(n.td,{children:"--nypl-space-xxl"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"xxxl"}),e.jsx(n.td,{children:"24"}),e.jsx(n.td,{children:"--nypl-space-xxxl"})]})]})]}),`
`,e.jsxs(n.p,{children:["For example, to make all ",e.jsx(n.code,{children:"button"}),"s have a ",e.jsx(n.code,{children:"padding: 8px 16px"})," value:"]}),`
`,e.jsx(t,{code:`
// src/theme/components/button.ts
const Button = {
baseStyle: {
  py: "xs", // var(--nypl-space-xs) which results in a value of 8px or 0.5rem.
  px: "s", // var(--nypl-space-s) which results in a value of 16px or 1rem.
  // ... other styles
},
sizes: { ... },
variants: { ... },
defaultProps: { ... },
};
`,language:"js"}),`
`,e.jsx(n.h3,{id:"typography",children:"Typography"}),`
`,e.jsxs(n.p,{children:["All typography values can be found in the ",e.jsx(n.code,{children:"src/theme/foundations/typography.ts"}),`
file. These values declare the font family, font sizes, and font weights to use
for all text.`]}),`
`,e.jsx(n.h2,{id:"style-props",children:"Style Props"}),`
`,e.jsx(n.p,{children:`NYPL Reservoir components are built around the Chakra UI library. While Reservoir
components may use the corresponding Chakra UI component, that is not always the
case. Every Reservoir component, however, does make use of the Chakra UI
"style props" pattern. This means that it is possible to pass in CSS rules to a
component, including the shorthand versions. These style props will target the
wrapper element of the component; this means if you want to target a specific
element or component in a Reservoir component, you won't be able to with style
props.`}),`
`,e.jsx(l,{isBold:!0,children:"While this is available to use, it is not recommended. If you see a need to override styles, please reach out to the NYPL Reservoir team for assistance."}),`
`,e.jsxs(n.p,{children:["In the following example, the ",e.jsx(n.code,{children:"Button"})," component has been passed ",e.jsx(n.code,{children:"p"})," and ",e.jsx(n.code,{children:"maxW"}),`
props which are shorthand for "padding" and "max-width", respectively.`]}),`
`,e.jsx(t,{code:`
<Button id="styled-button" p="s" maxH="none" maxW="200px">
Button
</Button>
`,language:"jsx"}),`
`,e.jsx(d,{id:"styled-button",p:"s",maxH:"none",maxW:"200px",children:"Button"}),`
`,e.jsxs(n.p,{children:[`Find more information and a full list of all the available props, check the Chakra
UI `,e.jsx(n.a,{href:"https://chakra-ui.com/docs/styled-system/features/style-props",rel:"nofollow",children:"Style Props page"}),"."]}),`
`,e.jsx(n.h2,{id:"hooks",children:"Hooks"}),`
`,e.jsxs(n.p,{children:[`The following hooks are available to use and can be imported from
`,e.jsx(n.code,{children:"@nypl/design-system-react-components"}),"."]}),`
`,e.jsx(n.h3,{id:"usenypltheme",children:"useNYPLTheme"}),`
`,e.jsxs(n.p,{children:[`If your application does not use CSS or SCSS files and you want to write
CSS-in-JS styles in your React components, the `,e.jsx(n.code,{children:"useNYPLTheme"}),` hook will provide
you with NYPL-specific style values. This hook depends on the `,e.jsx(n.code,{children:"DSProvider"}),`
component and if the function is used outside of this wrapper component, then
the theme object will be empty.`]}),`
`,e.jsxs(n.p,{children:["After importing and rendering the ",e.jsx(n.code,{children:"DSProvider"}),` wrapper component, as explained
in the `,e.jsx(s,{href:"#dsprovider",target:"_self",children:"DSProvider"}),` section, your
children components can use this hook function.`]}),`
`,e.jsx(t,{code:`
import { useNYPLTheme } from "@nypl/design-system-react-components";
// ...
const theme = useNYPLTheme();
`,language:"jsx"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"theme"}),` variable will be a JS object with style values discussed in the
sections above. This will allow you to use NYPL-specific styles in your
components through CSS-in-JS.`]}),`
`,e.jsx(t,{code:`
// theme:
{
breakpoints: { ... },
colors: {
  brand: { ... },
  section: { ... },
  transparent: { ... },
  ui: { ... },
},
fontSizes: { ... },
fontWeights: { ... },
fonts: { ... },
radii: { ... },
space: { ... },
}
`,language:"js"}),`
`,e.jsx(n.h4,{id:"usage",children:"Usage"}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"Note: more patterns will be added."})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"NYPL DS Components"}),`
`]}),`
`,e.jsxs(n.p,{children:["All DS components ",e.jsx(n.em,{children:"should"}),` be used with their current styles. If a DS component
needs an updated style, first contact the Design System and UX teams about this
update. If you really `,e.jsx(n.em,{children:"need"}),` to update a style and there is no available
variant, then you can add styles directly as style prop.`]}),`
`,e.jsxs(n.p,{children:["For example, if the ",e.jsx(n.code,{children:"Heading"}),` component should render the text in NYPL's green
color used for "success primary" and add a bold font weight, then you can do
the following:`]}),`
`,e.jsx(t,{code:`
const theme = useNYPLTheme();
// ...
return (
<div>
  <Heading
    level={2}
    color={theme.colors.ui.success.primary}
    fontWeight={theme.fontWeights.bold}
  >
    Get a Digital Library Card Today in a Few Easy Steps
  </Heading>

  {/* Other components */}

</div>
);
`,language:"jsx"}),`
`,e.jsxs(n.p,{children:["Of course, you can destructure the ",e.jsx(n.code,{children:"theme"}),` object to only get the object keys
you need for your component (this is a general example). Log the object to the
console to see all the available styles.`]}),`
`,e.jsxs(n.ol,{start:"2",children:[`
`,e.jsx(n.li,{children:"HTML Components"}),`
`]}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"style"})," attribute in HTML components to add inline styles."]}),`
`,e.jsx(t,{code:`
<p style={{ color: theme.colors.ui.success.primary }}>
If you are 13 or older and live, work, attend school, or pay property taxes in
New York State, you can get a free digital library card right now using this
online form. Visitors to New York State can also use this form to apply for a
temporary card.
</p>
`,language:"jsx"}),`
`,e.jsx(n.h2,{id:"testing",children:"Testing"}),`
`,e.jsxs(n.p,{children:[`Do not re-test Chakra components that are re-exported since they are already
tested in the `,e.jsx(n.code,{children:"@chakra-ui/react"}),` package. We expect all new components composed
with Chakra components to have tests for functionality and styling, including
snapshot tests.`]})]})}function h(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{h as default};
