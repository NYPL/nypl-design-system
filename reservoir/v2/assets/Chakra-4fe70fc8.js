import{j as n,a as t,F as s}from"./jsx-runtime-fdf4db99.js";import{M as c,b as o}from"./index-445595fc.js";import{B as d}from"./Button-948e9be8.js";import{L as r}from"./Link-24c1437a.js";import{T as h}from"./Text-d88b2f7a.js";import{u as l}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-da8f5748.js";import"../sb-preview/runtime.js";import"./index-42773b54.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-2a967270.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-33c8ee8e.js";import"./index-314a82e0.js";import"./index-11d98b33.js";import"./index-356e4a49.js";import"./index-8f383b84.js";import"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import"./chakra-ui-layout.esm-e0dbb94e.js";import"./Icon-4eeffe51.js";import"./chakra-ui-hooks.esm-539e7d47.js";import"./tiny-invariant-dd7d57d2.js";import"./chakra-ui-visually-hidden.esm-a796d0b5.js";function a(i){const e=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",p:"p",em:"em",a:"a",code:"code",h3:"h3",h4:"h4",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ol:"ol"},l(),i.components);return t(s,{children:[n(c,{title:"Chakra UI"}),`
`,n(e.h1,{id:"chakra-ui",children:"Chakra UI"}),`
`,n(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:[`
`,n(r,{href:"#why-chakra-ui",target:"_self",children:"Why Chakra UI?"}),`
`]}),`
`,t(e.li,{children:[`
`,n(r,{href:"#dsprovider",target:"_self",children:"DSProvider"}),`
`]}),`
`,t(e.li,{children:[`
`,n(r,{href:"#components",target:"_self",children:"Components"}),`
`]}),`
`,t(e.li,{children:[`
`,n(r,{href:"#styling",target:"_self",children:"Styling"}),`
`]}),`
`,t(e.li,{children:[`
`,n(r,{href:"#style-props",target:"_self",children:"Style Props"}),`
`]}),`
`,t(e.li,{children:[`
`,n(r,{href:"#hooks",target:"_self",children:"Hooks"}),`
`]}),`
`,t(e.li,{children:[`
`,n(r,{href:"#testing",target:"_self",children:"Testing"}),`
`]}),`
`]}),`
`,n(e.h2,{id:"why-chakra-ui",children:"Why Chakra UI"}),`
`,n(e.p,{children:`The Reservoir Design System (DS) project was influenced by other design systems but
ultimately we decided to initially build DS components from scratch rather than
use another design system as its foundation. To better help all the projects at
NYPL and to better scale with all the components we have built and still need to
build, we decided to integrate Chakra UI into the DS.`}),`
`,n(e.p,{children:`Chakra UI is an open source component library that is opinionated and uses design
and development patterns that various projects at NYPL use. Since the DS
will be the foundation for all NYPL projects moving forward, using Chakra will
help us align all projects so similar patterns are used throughout various teams
and projects.`}),`
`,n(e.p,{children:`Chakra follows WAI-ARIA and WCAG 2.1 standards and guidelines which aligns with
the standards that NYPL follows for its own components and applications.`}),`
`,t(e.p,{children:[`With design and development consistency, the ability to customize components
`,n(e.em,{children:"if necessary"}),`, and accessibility standards in place, developers at NYPL using
the Design System will be able to build out applications faster.`]}),`
`,t(e.p,{children:["We recommend to read Chakra's own ",n(e.a,{href:"https://chakra-ui.com/docs/getting-started",target:"_blank",rel:"nofollow noopener noreferrer",children:"documentation"}),`
to get up to speed on it. This file will provide information on how it is used
in the DS but we rely on Chakra's documentation.`]}),`
`,t(e.p,{children:[`If you need help updating to a newer version of the DS, check out
our `,n(e.a,{href:"https://github.com/NYPL/nypl-design-system/blob/development/CHAKRA_MIGRATION_GUIDE.md",target:"_blank",rel:"nofollow noopener noreferrer",children:"Chakra Migration Guide"}),"."]}),`
`,n(e.h2,{id:"dsprovider",children:"DSProvider"}),`
`,n(e.p,{children:`In order to use DS components in a consuming application, there is a necessary
step that must be done for component styles to properly render. Consuming
applications need to wrap all the DS components with a simple provider
component. Fortunately, this only needs to be done once at the top level of the
consuming application.`}),`
`,t(e.p,{children:[`Once the following is completed, DS components that internally use Chakra UI
will render styles properly. Internally, the `,n(e.code,{children:"DSProvider"}),` is built on top of
Chakra's `,n(e.code,{children:"ChakraProvider"}),` component with NYPL's custom theme as input. This sets
up the style context to propogate through all the children nodes in the DOM tree.`]}),`
`,n(o,{code:`
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
`,n(e.h2,{id:"components",children:"Components"}),`
`,t(e.p,{children:[`Although Chakra is integrated into the DS repo, we are still working to compose
DS components with Chakra components or patterns. For example, both the DS and
Chakra have a `,n(e.code,{children:"Button"})," component so we will use Chakra's ",n(e.code,{children:"Button"}),` component to
compose the DS `,n(e.code,{children:"Button"})," component. However, the DS has a ",n(e.code,{children:"Hero"}),` component that
is not already built by Chakra. In this case, the DS `,n(e.code,{children:"Hero"}),` component will
internally use `,n(e.code,{children:"Chakra"})," components such as ",n(e.code,{children:"Box"}),"."]}),`
`,n(e.h3,{id:"components-composed-with-chakra",children:"Components Composed with Chakra"}),`
`,n(e.p,{children:`While we can directly use Chakra components that align with DS components, we
want to compose DS components using the Chakra component as a base instead. This
pattern allows the Design System to have control over props and standard styles.`}),`
`,t(e.p,{children:[`These components composed from Chakra, therefore, do not have all styled props
available. For example, whereas `,n(e.code,{children:"m"})," (",n(e.code,{children:"margin"}),"), ",n(e.code,{children:"me"})," (",n(e.code,{children:"marginEnd"}),`), and similar
props can be used in Chakra components, those props are not available for DS
components that internally are composed with Chakra components.`]}),`
`,t(e.p,{children:["Components built from Chakra rename the component with the ",n(e.code,{children:"Chakra"})," name prefix."]}),`
`,n(o,{code:`
import { Tabs as ChakraTabs, useStyleConfig } from "@chakra-ui/react";
`,language:"tsx"}),`
`,t(e.p,{children:["In this example, the ",n(e.code,{children:"ChakraTabs"}),` component is returned with NYPL specific
functionality, styles, and other requirements.`]}),`
`,n(o,{code:`
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
`,n(e.h4,{id:"patterns",children:"Patterns"}),`
`,n(e.p,{children:`We are writing CSS style object rules into Javascript objects that work with
Chakra's theme. Instead of creating a variant for a component with a class name,
now different props or internal logic are used to get the appropriate variant.
Internally, the right variant will be mapped to a Chakra theme variant that will
provide all the necessary styles.`}),`
`,t(e.p,{children:["For the ",n(e.code,{children:"Button"}),` component, for example, we would convert a SCSS class rule such
as `,n(e.code,{children:".button-outline"})," to a Javascript object (more on this in the ",n(r,{href:"#anatomy-of-a-component-styling-object",target:"_self",children:`Anatomy of a
Component Styling Object`})," section)."]}),`
`,n(e.h3,{id:"components-re-exported-from-chakra",children:"Components re-exported from Chakra"}),`
`,t(e.p,{children:[`Some components are directly exported from Chakra. These components can be found
in the `,n(e.code,{children:"/src/index.ts"})," file. Note that not ",n(e.em,{children:"all"}),` Chakra components are re-exported
because we want to limit what developers should use in consuming applications.
They include:`]}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:[n(e.code,{children:"Box"}),", ",n(e.code,{children:"Center"}),", ",n(e.code,{children:"Circle"}),", ",n(e.code,{children:"Grid"}),", ",n(e.code,{children:"GridItem"}),", ",n(e.code,{children:"HStack"}),", ",n(e.code,{children:"Square"}),", ",n(e.code,{children:"Stack"}),", ",n(e.code,{children:"VStack"})]}),`
`]}),`
`,n(e.p,{children:`Note: These components are harder to have snapshot tests for because, internally,
these components autogenerate ids and class names on every new render. We can't
override them so snapshot tests will fail.`}),`
`,n(e.p,{children:`Update: Newer Chakra UI versions have mostly fixed this issue. Still, since
Chakra components have already been tested, we don't necessarily want or need
to test them ourselves.`}),`
`,n(e.h2,{id:"styling",children:"Styling"}),`
`,t(e.p,{children:["The NYPL DS' theme file can be found at ",n(e.code,{children:"src/theme/index.ts"}),`. This creates a new
theme that extends Chakra's theme and is set in the `,n(e.code,{children:"DSProvider"}),` component. Note
that the example below is the general structure of the `,n(e.code,{children:"theme"}),` object but the DS
`,n(e.code,{children:"theme"}),` object has values already set so it may look different. You would generally
only work and add new object values in the `,n(e.code,{children:"components"}),` obejct key for new
components and their theme or variants.`]}),`
`,t(e.p,{children:[n(e.em,{children:"Note"}),`: There are some SCSS files used to style third party plugins and to
generate SCSS mixins.`]}),`
`,n(o,{code:`
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
`,n(e.h3,{id:"anatomy-of-a-component-styling-object",children:"Anatomy of a Component Styling Object"}),`
`,t(e.p,{children:["For in-depth information, read Chakra's ",n(e.a,{href:"https://chakra-ui.com/docs/theming/component-style",target:"_blank",rel:"nofollow noopener noreferrer",children:"Component Style documentation"}),"."]}),`
`,t(e.p,{children:["Component theme files can be found in the ",n(e.code,{children:"src/theme/components/"}),` directory.
Here is an example using the `,n(e.code,{children:"Button"})," component."]}),`
`,n(o,{code:`
// The basic structure for all component style objects.
const Button = {
  baseStyle: {},
  sizes: {},
  variants: {},
  defaultProps: {},
};
`,language:"js"}),`
`,t(e.p,{children:[`A current variant class rule can be converted to a Javascript object and go in
the `,n(e.code,{children:"variants"})," object as in the following example."]}),`
`,n(o,{code:`
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
`,n(o,{code:`
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
`,n(e.p,{children:"Now this variant can be rendered:"}),`
`,n(o,{code:`
<Button buttonType="secondary" id="secondary">
  Press me
</Button>
`,language:"jsx"}),`
`,n(e.h3,{id:"breakpoints",children:"Breakpoints"}),`
`,n(e.p,{children:"There are currently five (5) breakpoint values used in the DS:"}),`
`,t(e.table,{children:[n(e.thead,{children:t(e.tr,{children:[n(e.th,{children:"Key Name"}),n(e.th,{children:"EM/PX value"})]})}),t(e.tbody,{children:[t(e.tr,{children:[n(e.td,{children:"sm"}),n(e.td,{children:"20em/320px"})]}),t(e.tr,{children:[n(e.td,{children:"md"}),n(e.td,{children:"38em/600px"})]}),t(e.tr,{children:[n(e.td,{children:"lg"}),n(e.td,{children:"60em/960px"})]}),t(e.tr,{children:[n(e.td,{children:"xl"}),n(e.td,{children:"80em/1280px"})]}),t(e.tr,{children:[n(e.td,{children:"2xl"}),n(e.td,{children:"96em/1536px"})]})]})]}),`
`,t(e.p,{children:[`There are two ways to set breakpoint values for a style rule: the array method
and the object method. We prefer the object method and recommend to use the
object method since it is easier to read and readily know what values take
effect at defined breakpoint values. Note that the Chakra `,n(e.code,{children:'"base"'}),` key value is
the same as `,n(e.code,{children:'"sm"'}),"."]}),`
`,n(e.h4,{id:"object-method",children:"Object Method"}),`
`,t(e.p,{children:[`We recommend and follow this pattern in the DS. As an example, let's say we want
to increase the width of the `,n(e.code,{children:"Button"}),` component as the device width increases.
We start at value "100px" and increase by "50px" at every breakpoint. In the
`,n(e.code,{children:"button.ts"})," style file, we can define it as in the example below:"]}),`
`,n(o,{code:`
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
`,t(e.p,{children:[`You do not have to define every breakpoint. If you only want to change the width
of the `,n(e.code,{children:"Button"})," at the ",n(e.code,{children:"lg"})," breakpoint, it can be defined as:"]}),`
`,n(o,{code:`
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
`,n(e.h4,{id:"array-method",children:"Array Method"}),`
`,t(e.p,{children:[`We do not recommend this pattern because it is harder to read and implicit on
breakpoint values. Following the same example as the one above, the width of the
`,n(e.code,{children:"Button"})," component can be updated wiht all five values in an array:"]}),`
`,n(o,{code:`
// button.ts
const Button = {
  baseStyle: {
    width: ["100px", "150px", "200px", "250px", "300px"],
  },
  // ...
};
`,language:"js"}),`
`,n(e.h3,{id:"colors",children:"Colors"}),`
`,t(e.p,{children:["All available colors can be found in ",n(e.code,{children:"src/theme/foundations/colors.ts"}),`. Chakra
autogenerates the `,n(e.code,{children:"colors"}),` object into CSS variables. We will rely on these
variables rather than creating our own.`]}),`
`,n(o,{code:`
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
`,n(e.p,{children:"In the shorten object example above, the following will be generated by Chakra:"}),`
`,t(e.table,{children:[n(e.thead,{children:t(e.tr,{children:[n(e.th,{children:"Theme object value"}),n(e.th,{children:"CSS variable"})]})}),t(e.tbody,{children:[t(e.tr,{children:[n(e.td,{children:n(e.code,{children:"colors.ui.focus"})}),n(e.td,{children:n(e.code,{children:"--nypl-colors-ui-focus"})})]}),t(e.tr,{children:[n(e.td,{children:n(e.code,{children:"colors.ui.link.primary"})}),n(e.td,{children:n(e.code,{children:"--nypl-colors-ui-link-primary"})})]}),t(e.tr,{children:[n(e.td,{children:n(e.code,{children:"colors.ui.link.secondary"})}),n(e.td,{children:n(e.code,{children:"--nypl-colors-ui-link-secondary"})})]}),t(e.tr,{children:[n(e.td,{children:n(e.code,{children:'colors.section["whats-on"].primary'})}),n(e.td,{children:n(e.code,{children:"--nypl-colors-section-whats-on-primary"})})]}),t(e.tr,{children:[n(e.td,{children:n(e.code,{children:'colors.section["whats-on"].secondary'})}),n(e.td,{children:n(e.code,{children:"--nypl-colors-section-whats-on-secondary"})})]})]})]}),`
`,t(e.p,{children:[`Note: while each Chakra color has number range values from 50 to 900 (such as
`,n(e.code,{children:"red.400"}),", ",n(e.code,{children:"blue.600"}),`, etc) and each one is based on the color coming from
DS' Figma documentation, we recommend NOT to use them.`]}),`
`,n(e.h3,{id:"spacing",children:"Spacing"}),`
`,t(e.p,{children:["All the spacing values can be found in the ",n(e.code,{children:"src/theme/foundations/spacing.ts"}),`
file. While Chakra provides many values, only use the eight DS defined values.`]}),`
`,t(e.table,{children:[n(e.thead,{children:t(e.tr,{children:[n(e.th,{children:"NYPL name Value"}),n(e.th,{children:"Chakra Value"}),n(e.th,{children:"DS Variable"})]})}),t(e.tbody,{children:[t(e.tr,{children:[n(e.td,{children:"xxs"}),n(e.td,{children:"1"}),n(e.td,{children:"--nypl-space-xxs"})]}),t(e.tr,{children:[n(e.td,{children:"xs"}),n(e.td,{children:"2"}),n(e.td,{children:"--nypl-space-xs"})]}),t(e.tr,{children:[n(e.td,{children:"s"}),n(e.td,{children:"4"}),n(e.td,{children:"--nypl-space-s"})]}),t(e.tr,{children:[n(e.td,{children:"m"}),n(e.td,{children:"6"}),n(e.td,{children:"--nypl-space-m"})]}),t(e.tr,{children:[n(e.td,{children:"l"}),n(e.td,{children:"8"}),n(e.td,{children:"--nypl-space-l"})]}),t(e.tr,{children:[n(e.td,{children:"xl"}),n(e.td,{children:"12"}),n(e.td,{children:"--nypl-space-xl"})]}),t(e.tr,{children:[n(e.td,{children:"xxl"}),n(e.td,{children:"16"}),n(e.td,{children:"--nypl-space-xxl"})]}),t(e.tr,{children:[n(e.td,{children:"xxxl"}),n(e.td,{children:"24"}),n(e.td,{children:"--nypl-space-xxxl"})]})]})]}),`
`,t(e.p,{children:["For example, to make all ",n(e.code,{children:"button"}),"s have a ",n(e.code,{children:"padding: 8px 16px"})," value:"]}),`
`,n(o,{code:`
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
`,n(e.h3,{id:"typography",children:"Typography"}),`
`,t(e.p,{children:["All typography values can be found in the ",n(e.code,{children:"src/theme/foundations/typography.ts"}),`
file. These values declare the font family, font sizes, and font weights to use
for all text.`]}),`
`,n(e.h2,{id:"style-props",children:"Style Props"}),`
`,n(e.p,{children:`NYPL Reservoir components are built around the Chakra UI library. While Reservoir
components may use the corresponding Chakra UI component, that is not always the
case. Every Reservoir component, however, does make use of the Chakra UI
"style props" pattern. This means that it is possible to pass in CSS rules to a
component, including the shorthand versions. These style props will target the
wrapper element of the component; this means if you want to target a specific
element or component in a Reservoir component, you won't be able to with style
props.`}),`
`,n(h,{isBold:!0,children:"While this is available to use, it is not recommended. If you see a need to override styles, please reach out to the NYPL Reservoir team for assistance."}),`
`,t(e.p,{children:["In the following example, the ",n(e.code,{children:"Button"})," component has been passed ",n(e.code,{children:"p"})," and ",n(e.code,{children:"maxW"}),`
props which are shorthand for "padding" and "max-width", respectively.`]}),`
`,n(o,{code:`
<Button id="styled-button" p="s" maxH="none" maxW="200px">
  Button
</Button>
`,language:"jsx"}),`
`,n(d,{id:"styled-button",p:"s",maxH:"none",maxW:"200px",children:"Button"}),`
`,t(e.p,{children:[`Find more information and a full list of all the available props, check the Chakra
UI `,n(e.a,{href:"https://chakra-ui.com/docs/styled-system/features/style-props",target:"_blank",rel:"nofollow noopener noreferrer",children:"Style Props page"}),"."]}),`
`,n(e.h2,{id:"hooks",children:"Hooks"}),`
`,t(e.p,{children:[`The following hooks are available to use and can be imported from
`,n(e.code,{children:"@nypl/design-system-react-components"}),"."]}),`
`,n(e.h3,{id:"usenypltheme",children:"useNYPLTheme"}),`
`,t(e.p,{children:[`If your application does not use CSS or SCSS files and you want to write
CSS-in-JS styles in your React components, the `,n(e.code,{children:"useNYPLTheme"}),` hook will provide
you with NYPL-specific style values. This hook depends on the `,n(e.code,{children:"DSProvider"}),`
component and if the function is used outside of this wrapper component, then
the theme object will be empty.`]}),`
`,t(e.p,{children:["After importing and rendering the ",n(e.code,{children:"DSProvider"}),` wrapper component, as explained
in the `,n(r,{href:"#dsprovider",target:"_self",children:"DSProvider"}),` section, your
children components can use this hook function.`]}),`
`,n(o,{code:`
import { useNYPLTheme } from "@nypl/design-system-react-components";
// ...
const theme = useNYPLTheme();
`,language:"jsx"}),`
`,t(e.p,{children:["The ",n(e.code,{children:"theme"}),` variable will be a JS object with style values discussed in the
sections above. This will allow you to use NYPL-specific styles in your
components through CSS-in-JS.`]}),`
`,n(o,{code:`
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
`,n(e.h4,{id:"usage",children:"Usage"}),`
`,n(e.p,{children:n(e.em,{children:"Note: more patterns will be added."})}),`
`,t(e.ol,{children:[`
`,n(e.li,{children:"NYPL DS Components"}),`
`]}),`
`,t(e.p,{children:["All DS components ",n(e.em,{children:"should"}),` be used with their current styles. If a DS component
needs an updated style, first contact the Design System and UX teams about this
update. If you really `,n(e.em,{children:"need"}),` to update a style and there is no available
variant, then you can add styles directly as style prop.`]}),`
`,t(e.p,{children:["For example, if the ",n(e.code,{children:"Heading"}),` component should render the text in NYPL's green
color used for "success primary" and add a bold font weight, then you can do
the following:`]}),`
`,n(o,{code:`
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
`,t(e.p,{children:["Of course, you can destructure the ",n(e.code,{children:"theme"}),` object to only get the object keys
you need for your component (this is a general example). Log the object to the
console to see all the available styles.`]}),`
`,t(e.ol,{start:"2",children:[`
`,n(e.li,{children:"HTML Components"}),`
`]}),`
`,t(e.p,{children:["Use the ",n(e.code,{children:"style"})," attribute in HTML components to add inline styles."]}),`
`,n(o,{code:`
<p style={{ color: theme.colors.ui.success.primary }}>
  If you are 13 or older and live, work, attend school, or pay property taxes in
  New York State, you can get a free digital library card right now using this
  online form. Visitors to New York State can also use this form to apply for a
  temporary card.
</p>
`,language:"jsx"}),`
`,n(e.h2,{id:"testing",children:"Testing"}),`
`,t(e.p,{children:[`Do not re-test Chakra components that are re-exported since they are already
tested in the `,n(e.code,{children:"@chakra-ui/react"}),` package. We expect all new components composed
with Chakra components to have tests for functionality and styling, including
snapshot tests.`]})]})}function H(i={}){const{wrapper:e}=Object.assign({},l(),i.components);return e?n(e,Object.assign({},i,{children:n(a,i)})):a(i)}export{H as default};
//# sourceMappingURL=Chakra-4fe70fc8.js.map
