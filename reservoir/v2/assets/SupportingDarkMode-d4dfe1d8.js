import{j as o,a as n,F as s}from"./jsx-runtime-fdf4db99.js";import{M as a,b as t}from"./index-445595fc.js";import{L as r}from"./Link-24c1437a.js";import{u as d}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-da8f5748.js";import"../sb-preview/runtime.js";import"./index-42773b54.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-2a967270.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-33c8ee8e.js";import"./index-314a82e0.js";import"./index-11d98b33.js";import"./index-356e4a49.js";import"./index-8f383b84.js";import"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import"./chakra-ui-layout.esm-e0dbb94e.js";import"./Icon-4eeffe51.js";function l(i){const e=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",p:"p",a:"a",code:"code",strong:"strong",h3:"h3",h4:"h4",h5:"h5",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},d(),i.components);return n(s,{children:[o(a,{title:"Development Guide/Supporting Dark Mode"}),`
`,o(e.h1,{id:"supporting-dark-mode",children:"Supporting Dark Mode"}),`
`,o(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,o(r,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,n(e.li,{children:[`
`,o(r,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,n(e.li,{children:[`
`,o(r,{href:"#reservoir-default-configuration",target:"_self",children:"Reservoir Default Configuration"}),`
`]}),`
`,n(e.li,{children:[`
`,o(r,{href:"#consuming-app-configuration",target:"_self",children:"Consuming App Configuration"}),`
`]}),`
`,n(e.li,{children:[`
`,o(r,{href:"#hooks",target:"_self",children:"Hooks"}),`
`]}),`
`,n(e.li,{children:[`
`,o(r,{href:"#using-custom-dark-mode-styles",target:"_self",children:"Using Custom Dark Mode Styles"}),`
`]}),`
`,n(e.li,{children:[`
`,o(r,{href:"#color-mapping",target:"_self",children:"Color Mapping"}),`
`]}),`
`]}),`
`,o(e.h2,{id:"overview",children:"Overview"}),`
`,o(e.p,{children:`Offering dark mode color styles on a website might be considered a hip feature
or a sign of the times, but it is also a way to improve accessibility. Dark
mode can be beneficial for all users, making text easier to read for longer
periods of time and reducing the likelihood of eye strain or fatigue, but it
can be especially beneficial for users with low vision and light sensitivity.`}),`
`,o(e.p,{children:`With these accessibility benefits in mind, NYPL is aiming to implement dark
mode on its websites over the coming months and years. To get this migration
started, the Reservoir Design System has added dark color mode support to all
components in the React Component Library. As NYPL projects adopt the Reservoir
Design System, and when portfolio groups are fully prepared and time allows,
engineers should utilize this documentation to configure React web apps to
enable and implement dark color mode styles.`}),`
`,o(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,o(e.p,{children:`All DS components support light and dark color mode and have gone through color
contrast accessibility review.`}),`
`,o(e.p,{children:"Resources:"}),`
`,n(e.ul,{children:[`
`,o(e.li,{children:o(e.a,{href:"https://webaim.org/resources/contrastchecker/",target:"_blank",rel:"nofollow noopener noreferrer",children:"WebAIM Contrast Checker"})}),`
`,o(e.li,{children:o(e.a,{href:"https://www.w3.org/WAI/perspective-videos/contrast/",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3 WAI Colors with Good Contrast"})}),`
`,o(e.li,{children:o(e.a,{href:"https://www.a11yproject.com/posts/operating-system-and-browser-accessibility-display-modes/",target:"_blank",rel:"nofollow noopener noreferrer",children:"The A11y Project - Operating System and Browser Accessibility Display Modes"})}),`
`]}),`
`,o(e.h2,{id:"reservoir-default-configuration",children:"Reservoir Default Configuration"}),`
`,o(e.p,{children:`By default, the Reservoir Design System (DS) is configured to ignore a user's
system color mode and to render the DS components using light color mode styles.
This means that users will see the light mode styles, regardless of their
system's settings.`}),`
`,n(e.p,{children:["This configuration is controlled with the ",o(e.code,{children:"useSystemColorMode"}),` and
`,o(e.code,{children:"initialColorMode"}),` global attributes found in
`,o(e.a,{href:"https://github.com/NYPL/nypl-design-system/blob/b52c9a5fea6b5eed929119e9dd5ed155044e44c7/src/theme/index.ts#L161",target:"_blank",rel:"nofollow noopener noreferrer",children:"src/theme/index.ts"}),`
(lines 161 - 166) in the Reservoir repo. They are set to `,o(e.code,{children:"false"})," and ",o(e.code,{children:'"light"'}),`
respectively.`]}),`
`,n(e.p,{children:["If desired, the ",o(e.code,{children:"initialColorMode"}),` can be overridden by the consuming
application. To do this, please refer to the `,o(r,{href:"#consuming-app-configuration",target:"_self",children:`Consuming App
Configuration`})," section."]}),`
`,o(e.h2,{id:"consuming-app-configuration",children:"Consuming App Configuration"}),`
`,n(e.p,{children:[`To enable and control the color mode styles of the Reservoir Design System (DS)
components and to control the color mode for the entire app, consuming
applications must add the `,o(e.code,{children:"ColorModeScript"}),` component, which helps keep track of
and set the current color mode.`]}),`
`,n(e.p,{children:["For proper configuration, the ",o(e.code,{children:"initialColorMode"}),` prop must be passed to the
`,o(e.code,{children:"ColorModeScript"}),` component. With this prop, consuming apps can set the value for
the preferred color mode in the consuming app.`]}),`
`,o(e.p,{children:o(e.strong,{children:"Color Mode Options"})}),`
`,n(e.p,{children:["The ",o(e.code,{children:"initialColorMode"})," prop can be set to one of three values: ",o(e.code,{children:'"light"'}),", ",o(e.code,{children:'"dark"'}),`, or
`,o(e.code,{children:'"system"'}),"."]}),`
`,n(e.ul,{children:[`
`,o(e.li,{children:"light: DS components will initially render using light color mode styles."}),`
`,o(e.li,{children:"dark: DS components will initially render using dark color mode styles."}),`
`,n(e.li,{children:[`system: DS components will initially render using color mode styles based on a
user's system, or OS, color settings. If the system color mode cannot be
resolved, `,o(e.code,{children:'"light"'})," will be used as the fallback value."]}),`
`]}),`
`,n(e.p,{children:[o(e.strong,{children:"NOTE:"})," Although the ",o(e.code,{children:"initialColorMode"})," prop can be set to the ",o(e.code,{children:'"light"'}),` value,
which would mirror the default configuration from the DS and render the DS
components using the light mode color style, it is more likely that consuming
apps will use the `,o(e.code,{children:'"dark"'})," or ",o(e.code,{children:'"system"'}),` values in order to enable the dark mode
color styles.`]}),`
`,o(e.h3,{id:"required-setup",children:"Required Setup"}),`
`,n(e.p,{children:["The ",o(e.code,{children:"ColorModeScript"})," component with the ",o(e.code,{children:"initialColorMode"}),` prop should be added
to the top level of the consuming application, before all content. More often
than not, the `,o(e.code,{children:"ColorModeScript"}),` component will be added alongside the
`,o(e.code,{children:"DSProvider"})," component (",o(e.a,{href:"https://github.com/NYPL/nypl-design-system#using-the-design-system-in-your-product",target:"_blank",rel:"nofollow noopener noreferrer",children:`see the
docs`}),")."]}),`
`,o(t,{code:`
import {
  ColorModeScript,
  DSProvider
} from "@nypl/design-system-react-components";
import * as ReactDOM from "react-dom/client";
import App from "./App";
// ...
const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <>
    <ColorModeScript initialColorMode={"light" | "dark" | "system"} />
    <DSProvider>
      <App />
    <DSProvider>
  </>,
);
`,language:"tsx"}),`
`,o(e.h3,{id:"optional-configuration",children:"Optional Configuration"}),`
`,o(e.p,{children:o(e.strong,{children:"For SSR Frameworks (ex. Next.js)"})}),`
`,n(e.p,{children:[`For Next.js (or another SSR framework) apps that are using a toggle to control
the color mode, it is recommended to also add the `,o(e.code,{children:"colorModeManager"}),` prop in the
`,o(e.code,{children:"DSProvider"})," component to aid with proper color rendering. When ",o(e.code,{children:"colorModeManager"}),`
is implemented, the app will load the `,o(e.code,{children:"initialColorMode"}),` before rendering the
components, avoiding the flashing that can happen if the color mode is set
during hydration.`]}),`
`,n(e.p,{children:[`The example below provides all required code necessary to enable this
functionality. The `,o(e.code,{children:"cookieStorageManager"})," and ",o(e.code,{children:"localStorageManager"}),` functions can
be used to help to store the `,o(e.code,{children:"chakra-ui-color-mode"}),` value in the browser, but, by
default, the necessary variables will be stored in `,o(e.code,{children:"localStorage"}),` unless otherwise
specified. The `,o(e.code,{children:"getServerSideProps"}),` function runs before the page loads, ensuring
the cookie is never undefined.`]}),`
`,o(t,{code:`
// pages/_app.tsx
import {
  cookieStorageManager,
  DSProvider,
  localStorageManager,
  useColorModeValue,
} from "@nypl/design-system-react-components";
import type { AppProps } from "next/app";
function MyApp({ Component, pageProps }: AppProps) {
  // Decides where the chakra-ui-color-mode value should be stored in the browser.
  const colorModeManager =
  typeof pageProps.cookies === "string"
  ? cookieStorageManager(pageProps.cookies)
  : localStorageManager;
  // ...
  return (
    <>
      <ColorModeScript initialColorMode="system" />
      <DSProvider colorModeManager={colorModeManager}>
        <Component {...pageProps} />
      </DSProvider>
    </>
  );
}
// ...
export function getServerSideProps({ req }: any) {
  return {
    props: {
      // First time users will not have any cookies and you may not return
      // undefined here, hence \`??\` is necessary.
      cookies: req.headers.cookie ?? "",
    },
  };
}
`,language:"tsx"}),`
`,o(e.h2,{id:"hooks",children:"Hooks"}),`
`,n(e.p,{children:[`To manage color mode in your application, the Reservoir Design System (DS)
exposes Chakra's `,o(e.code,{children:"useColorMode"})," and ",o(e.code,{children:"useColorModeValue"})," hooks."]}),`
`,o(e.h3,{id:"usecolormode",children:"useColorMode"}),`
`,n(e.p,{children:[o(e.code,{children:"useColorMode"}),` gives you access to the current color mode, and a function to
toggle the color mode.`]}),`
`,o(t,{code:`
import { Toggle, useColorMode } from "@nypl/design-system-react-components";
// ...
function Example() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Toggle
        id="color-mode-toggle"
        labelText="Toggle Color Mode"
        onChange={toggleColorMode}
      />
    </header>
  );
}
`,language:"tsx"}),`
`,o(e.h3,{id:"usecolormodevalue",children:"useColorModeValue"}),`
`,n(e.p,{children:[o(e.code,{children:"useColorModeValue"}),` is a React hook used to change any value or style based on the
color mode. It takes two arguments: the value in light mode, and the value in
dark mode.`]}),`
`,o(t,{code:`
import {
  Box,
  Button,
  useColorMode,
  useColorModeValue,
} from "@nypl/design-system-react-components";
// ...
function StyleColorMode() {
  const { toggleColorMode } = useColorMode();
  // if color mode is light, \`bg\` is set to "ui.bg.default"
  // if color mode is dark, \`bg\` is set to "dark.ui.bg.default"
  const bg = useColorModeValue("ui.bg.default", "dark.ui.bg.default");
  // if color mode is light, \`color\` is set to "ui.typography.heading"
  // if color mode is dark, \`color\` is set to "dark.ui.typography.heading"
  const color = useColorModeValue(
    "ui.typography.heading",
    "dark.ui.typography.heading"
  );
  return (
    <>
      <Box mb="s" bg={bg} color={color}>
        This box's style will change based on the color mode.
      </Box>
      <Button onClick={toggleColorMode}>Toggle Color Mode</Button>
    </>
  );
}
`,language:"tsx"}),`
`,o(e.h3,{id:"react-syntax-reminder",children:"React Syntax Reminder"}),`
`,n(e.p,{children:["The ",o(e.code,{children:"useColorMode"})," and ",o(e.code,{children:"useColorModeValue"}),` hooks only work if called inside the
`,o(e.code,{children:"DSProvider"}),` wrapper. Additionally, like all hooks, they must be called from
within a React function component or a custom React Hook function.`]}),`
`,o(e.h2,{id:"using-custom-dark-mode-styles",children:"Using Custom Dark Mode Styles"}),`
`,o(e.p,{children:`If all NYPL consuming apps were composed using only Reservoir Design System (DS)
components, this section of the documentation would not be necessary - all
elements would support dark color mode styles out of the box and no further
configuration would be needed. Nevertheless, this generally will not be the
case. Therefore, in situations where custom components or custom UI elements
are necessary, dark mode styles will need to be added for these elements in the
consuming app in addition to the default "light mode" styles.`}),`
`,o(e.h3,{id:"setting-styles-with-javascript-recommended",children:"Setting Styles with Javascript (recommended)"}),`
`,n(e.p,{children:[`As an organization, NYPL is trending away from using traditional CSS and CSS
preprocessors like SCSS in React applications. In their place, CSS-in-JS is
being used to leverage the style patterns and `,o(r,{href:"#design-tokens",target:"_self",children:"design tokens"}),`
available in the DS and Chakra UI.`]}),`
`,o(e.h4,{id:"benefits",children:"Benefits"}),`
`,n(e.p,{children:[`Outside of simply consolidating code into one location, using CSS-in-JS opens
the door to many ease-of-use benefits when it comes to applying styles to UI
elements, such as `,o(r,{href:"#chakra-style-props",target:"_self",children:"Chakra style props"}),", ",o(r,{href:"#design-tokens",target:"_self",children:"design tokens"}),`,
and `,o(r,{href:"#responsive-styles",target:"_self",children:"responsive styles"}),"."]}),`
`,o(e.h5,{id:"chakra-style-props",children:"Chakra Style Props"}),`
`,n(e.p,{children:["The ",o(e.a,{href:"https://chakra-ui.com/docs/styled-system/style-props",target:"_blank",rel:"nofollow noopener noreferrer",children:"style props"}),`
established by Charka have been exposed and made available through the DS. These
style props, along with a wide array of `,o(e.a,{href:"https://chakra-ui.com/docs/styled-system/style-props#pseudo",target:"_blank",rel:"nofollow noopener noreferrer",children:`pseudo
selectors`}),`, provide
helpful and time-saving shorthand to style components. Examples include the `,o(e.code,{children:"bg"}),`
prop in place of the `,o(e.code,{children:"background"})," CSS attribute and the ",o(e.code,{children:"px"}),` prop to add both
the `,o(e.code,{children:"padding-left"})," and ",o(e.code,{children:"padding-right"})," CSS attributes to an element."]}),`
`,o(e.h5,{id:"design-tokens",children:"Design Tokens"}),`
`,n(e.p,{children:[`Design tokens are available for many style attribute values, including, but not
limited to, colors, font sizes, and spacing. These semantically-named design
tokens allow you to logically apply styles without having to know the actual
style values. For example, in the code snippets found later in this section, the
color values `,o(e.code,{children:"ui.bg.default"})," and ",o(e.code,{children:"dark.ui.bg.default"}),` are color design tokens
and `,o(e.code,{children:"inset.default"}),` is a spacing design token. For a full reference chart
showing all available design tokens, refer to the `,o(e.a,{href:"../?path=/docs/development-guide-design-tokens--docs",children:`Design
Tokens`}),` page in Reservoir
Storybook.`]}),`
`,o(e.h5,{id:"responsive-styles",children:"Responsive Styles"}),`
`,n(e.p,{children:["Instead of manually adding ",o(e.code,{children:"@media"}),` queries and nested styles, CSS-in-JS allows
you to access Chakra style patterns which provide object and array values to add
mobile-first `,o(e.a,{href:"https://chakra-ui.com/docs/styled-system/responsive-styles",target:"_blank",rel:"nofollow noopener noreferrer",children:`responsive
styles`}),"."]}),`
`,o(e.h4,{id:"preparing-your-components",children:"Preparing Your Components"}),`
`,n(e.p,{children:[`To use CSS-in-JS effectively, custom components and custom UI elements should be
composed using `,o(r,{href:"#using-ds-components",target:"_self",children:"DS components"})," or Chakra ",o(r,{href:"#using-structural-ui-components",target:"_self",children:"Structural UI components"}),"."]}),`
`,o(e.h5,{id:"using-ds-components",children:"Using DS Components"}),`
`,o(e.p,{children:`If a DS component can be used to take the place of a custom components or custom
UI elements, developers should aim to make the necessary changes to do so. Out
of the box, the DS components will not require any additional configuration for
dark color mode support.`}),`
`,o(e.h5,{id:"using-structural-ui-components",children:"Using Structural UI Components"}),`
`,n(e.p,{children:[`If an app-specific component cannot be directly replaced with a DS component,
consuming apps should try to rebuild it using basic structural components
available in the DS. If using this approach, two of the most important
components to note are `,o(e.code,{children:"Box"})," (",o(e.a,{href:"../?path=/docs/components-chakra-exports-layout-box--docs",children:"see the docs"}),`),
the component on top of which many DS and all other Chakra UI components are
built, and
`,o(e.code,{children:"Stack"})," (",o(e.a,{href:"../?path=/docs/components-chakra-exports-layout-stack-hstack-vstack--docs",children:`see the
docs`}),`),
a layout component used to group elements together and apply a space between
them.`]}),`
`,o(e.h4,{id:"applying-styles",children:"Applying Styles"}),`
`,o(e.p,{children:`For app-specific components, dark mode styles should be applied using CSS-in-JS.
There are two methods to do this.`}),`
`,o(e.h5,{id:"method-1-recommended",children:"Method 1 (recommended)"}),`
`,n(e.p,{children:["To add styles to DS and Chakra UI components, pass a style object to the ",o(e.code,{children:"sx"}),`
prop. Within the style object, use the `,o(e.code,{children:"_dark"}),` pseudo selector to add the styles
that should be used when dark mode is active.`]}),`
`,o(t,{code:`
const customStyles = {
  bg: "ui.bg.default",
  color: "ui.typography.heading",
  fontWeight: "medium",
  p: "inset.default",
  _hover: {
    bg: "ui.bg.hover",
  },
  _dark: {
    bg: "dark.ui.bg.default",
    color: "dark.ui.typography.heading",
    _hover: {
      bg: "dark.ui.bg.hover",
    },
  },
};
// ...
<Box sx={customStyles}>Click Me</Button>
`,language:"tsx"}),`
`,o(e.h5,{id:"method-2",children:"Method 2"}),`
`,n(e.p,{children:[`To add styles to app-specific components and native HTML elements, you may use
the `,o(e.code,{children:"useColorModeValue"})," hook (",o(r,{href:"#usecolormode",target:"_self",children:"see the docs"}),`)
to specify light and dark mode style values for specific style attributes.`]}),`
`,n(e.p,{children:[`Please note that when passing style attributes to custom components or native
HTML elements, you must use the React `,o(e.code,{children:"style"})," prop rather than the Chakra ",o(e.code,{children:"sx"}),`
prop or the `,o(r,{href:"#chakra-style-props",target:"_self",children:"Chakra style props"}),`.
Additionally, javascript `,o(r,{href:"#design-tokens",target:"_self",children:"design tokens"}),`
cannot be used as they are not compatible with the React style prop, so CSS
design tokens or native CSS attribute values must be used.`]}),`
`,o(t,{code:`
import { useColorModeValue } from "@nypl/design-system-react-components";
// Style values assigned to variables using CSS design tokens
const bg = useColorModeValue(
  "var(--nypl-colors-ui-bg-default)",
  "var(--nypl-colors-dark-ui-bg-default)"
);
const color = useColorModeValue(
  "var(--nypl-colors-ui-typography-heading)",
  "var(--nypl-colors-dark-ui-typography-heading)"
);
const fontWeight = "var(--nypl-fontWeights-medium)";
const padding = "var(--nypl-space-inset-default)";
const stylesUsingVariables = {
  backgroundColor: bg,
  color: color,
  fontWeight: fontWeight,
  padding: padding,
};
// ...
<div style={stylesUsingVariables} />;
`,language:"tsx"}),`
`,o(t,{code:`
// Style values assigned directly using native CSS attribute values
const stylesDirectlyAssigned = {
  backgroundColor: useColorModeValue("#5F5F5F", "#252525"),
  color: useColorModeValue("#000000", "#E9E9E9"),
  fontWeight: 500,
  padding: "1rem",
};
// ...
<div style={stylesDirectlyAssigned} />;
`,language:"tsx"}),`
`,o(e.p,{children:`Below is an example using a custom component. Please note that consuming apps
are responsible for handling how styles are propagated and applied within custom
components.`}),`
`,o(t,{code:`
// Styles for a custom component
const stylesForCustomComponent = {
  backgroundColor: useColorModeValue("#F5F5F5", "#252525"),
  color: useColorModeValue("#000000", "#BDBDBD"),
  fontWeight: 500,
  padding: "1rem",
};
// ...
<CustomComponent style={stylesForCustomComponent} />;
`,language:"tsx"}),`
`,o(e.h3,{id:"css-and-css-precompilers",children:"CSS and CSS Precompilers"}),`
`,n(e.p,{children:[`Applying dark mode styles using Javascript is the recommended method, but using
CSS or a CSS precompiler like SCSS is still an option for custom components,
custom UI elements and native HTML elements. For those elements, dark mode
styles can be added with the prefers-color-scheme media query and the Reservoir
CSS vars (`,o(e.a,{href:"../?path=/docs/style-guide-colors--docs",children:"Colors Storybook page"}),")."]}),`
`,n(e.p,{children:[`The following example is only applicable if a consuming application is using
system color mode without a toggle. In this configuration, please note that the
order in which the styles are written into the stylesheet is important. The
default styles should be written first and the dark mode style in the
`,o(e.code,{children:"prefers-color-scheme"})," media query must be written after the default styles."]}),`
`,o(t,{code:`
// styles.scss
// DEFAULT STYLES (the shared and light mode color styles)
.container {
  background: var(--nypl-colors-ui-bg-default);
  border: 1px solid var(--nypl-colors-ui-border-default);
  color: var(--nypl-colors-ui-typography-body);
  padding: 1rem;
}
// DARK MODE STYLES (to override the light mode color styles)
@media (prefers-color-scheme: dark) {
  .container {
    background: var(--nypl-colors-dark-ui-bg-default);
    color: var(--nypl-colors-dark-ui-typography-body);
  }
}
`,language:"scss"}),`
`,n(e.p,{children:["If the consuming application uses a toggle, you can use the ",o(e.code,{children:"useColorMode"}),` hook to
retrieve the current `,o(e.code,{children:"colorMode"})," and add ",o(e.code,{children:'"light"'})," or ",o(e.code,{children:'"dark"'}),` classes to applicable
components.`]}),`
`,o(t,{code:`
// Component file
const { colorMode } = useColorMode(); // returns "light" or "dark"
<div className={\`\${colorMode} container\`}>a container</div>;
`,language:"tsx"}),`
`,o(t,{code:`
// styles.scss
.container {
  // shared styles
}
.dark.container {
  background: var(--nypl-colors-dark-ui-bg-default);
  color: var(--nypl-colors-dark-ui-typography-body);
}
.light.container {
  background: var(--nypl-colors-ui-bg-default);
  color: var(--nypl-colors-ui-typography-body);
}
`,language:"css"}),`
`,o(e.h2,{id:"color-mapping",children:"Color Mapping"}),`
`,o(e.p,{children:`If mockups have not been specifically created to show the dark mode version of a
page design, then the colors used for the default view (light mode) can be
mapped to corresponding dark mode colors. Use the tables below to find the
necessary colors.`}),`
`,n(e.p,{children:[`For reference, all Reservoir Design System dark mode colors can be found in the
Storybook documentation under `,o(e.a,{href:"../?path=/docs/style-guide-colors--docs",children:"Colors"}),`
and in the `,o(e.a,{href:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=61991%3A45315",target:"_blank",rel:"nofollow noopener noreferrer",children:`Visual Design
Library`}),"."]}),`
`,o(e.h3,{id:"grayscale-colors",children:"Grayscale Colors"}),`
`,n(e.p,{children:[`Grayscale colors (i.e. black, white and all grays in between) are utility colors
and in many cases they are used as the basis for the semantic colors. As
utility colors, the light/dark color map does not apply. If any application
level style values have been written using the grayscale color design tokens,
the values should be updated to use the applicable semantic color design tokens.
For more details, please refer to the `,o(r,{href:"#legacy-color-conversions",target:"_self",children:"Legacy Color Conversions"})," section."]}),`
`,o(e.h3,{id:"legacy-color-conversions",children:"Legacy Color Conversions"}),`
`,o(e.p,{children:`In older designs and consuming apps, grayscale colors may have been used in the
CSS styles of some application level UI elements, including color styles for
background, border, text and disabled states. Going forward, style attributes
color design token. Once styles have been updated to use proper semantic color
that use grayscale colors should be updated to use the corresponding semantic
design tokens, the color mapping for dark color mode will be apparent.`}),`
`,o(e.p,{children:"Use the following tables to update legacy color values."}),`
`,o(e.h4,{id:"background-colors",children:"Background Colors"}),`
`,n(e.table,{children:[o(e.thead,{children:n(e.tr,{children:[o(e.th,{children:"Legacy Grayscale Color"}),o(e.th,{children:"Current Semantic Color"})]})}),n(e.tbody,{children:[n(e.tr,{children:[o(e.td,{children:"ui.gray.x-light-cool"}),o(e.td,{children:"ui.bg.default"})]}),n(e.tr,{children:[o(e.td,{children:"ui.gray.light-cool"}),o(e.td,{children:"ui.bg.hover"})]}),n(e.tr,{children:[o(e.td,{children:"ui.gray.medium"}),o(e.td,{children:"ui.bg.active"})]})]})]}),`
`,o(e.h4,{id:"border-colors",children:"Border Colors"}),`
`,n(e.table,{children:[o(e.thead,{children:n(e.tr,{children:[o(e.th,{children:"Legacy Grayscale Color"}),o(e.th,{children:"Current Semantic Color"})]})}),n(e.tbody,{children:[n(e.tr,{children:[o(e.td,{children:"ui.gray.medium"}),o(e.td,{children:"ui.border.default"})]}),n(e.tr,{children:[o(e.td,{children:"ui.gray.dark"}),o(e.td,{children:"ui.border.hover"})]})]})]}),`
`,o(e.h4,{id:"heading-colors",children:"Heading Colors"}),`
`,n(e.table,{children:[o(e.thead,{children:n(e.tr,{children:[o(e.th,{children:"Legacy Grayscale Color"}),o(e.th,{children:"Current Semantic Color"})]})}),n(e.tbody,{children:[n(e.tr,{children:[o(e.td,{children:"ui.white"}),o(e.td,{children:"ui.typography.heading.inverse"})]}),n(e.tr,{children:[o(e.td,{children:"ui.black"}),o(e.td,{children:"ui.typography.heading"})]})]})]}),`
`,o(e.h4,{id:"text-colors",children:"Text Colors"}),`
`,n(e.table,{children:[o(e.thead,{children:n(e.tr,{children:[o(e.th,{children:"Legacy Grayscale Color"}),o(e.th,{children:"Current Semantic Color"})]})}),n(e.tbody,{children:[n(e.tr,{children:[o(e.td,{children:"ui.white"}),o(e.td,{children:"ui.typography.body.inverse"})]}),n(e.tr,{children:[o(e.td,{children:"ui.black"}),o(e.td,{children:"ui.typography.body"})]})]})]}),`
`,o(e.h4,{id:"disabled-state-colors",children:"Disabled State Colors"}),`
`,n(e.table,{children:[o(e.thead,{children:n(e.tr,{children:[o(e.th,{children:"Legacy Grayscale Color"}),o(e.th,{children:"Current Semantic Color"})]})}),n(e.tbody,{children:[n(e.tr,{children:[o(e.td,{children:"ui.gray.xx-light-cool"}),o(e.td,{children:"ui.disabled.secondary"})]}),n(e.tr,{children:[o(e.td,{children:"ui.gray.light-cool"}),o(e.td,{children:"ui.disabled.primary"})]})]})]}),`
`,o(e.h3,{id:"lightdark-color-map",children:"Light/Dark Color Map"}),`
`,o(e.p,{children:`Each brand color, section color and semantic color design token in the light
color mode palette has a corresponding design token in the dark color mode
palette. Please refer to the table below.`}),`
`,n(e.table,{children:[o(e.thead,{children:n(e.tr,{children:[o(e.th,{children:"Light Color Palette"}),o(e.th,{children:"Dark Color Palette"})]})}),n(e.tbody,{children:[n(e.tr,{children:[o(e.td,{children:"ui.disabled.primary"}),o(e.td,{children:"dark.ui.disabled.primary"})]}),n(e.tr,{children:[o(e.td,{children:"ui.disabled.secondary"}),o(e.td,{children:"dark.ui.disabled.secondary"})]}),n(e.tr,{children:[o(e.td,{children:"ui.error.primary"}),o(e.td,{children:"dark.ui.error.primary"})]}),n(e.tr,{children:[o(e.td,{children:"ui.error.secondary"}),o(e.td,{children:"dark.ui.error.secondary"})]}),n(e.tr,{children:[o(e.td,{children:"ui.focus"}),o(e.td,{children:"dark.ui.focus"})]}),n(e.tr,{children:[o(e.td,{children:"ui.link.primary"}),o(e.td,{children:"dark.ui.link.primary"})]}),n(e.tr,{children:[o(e.td,{children:"ui.link.secondary"}),o(e.td,{children:"dark.ui.link.secondary"})]}),n(e.tr,{children:[o(e.td,{children:"ui.status.primary"}),o(e.td,{children:"dark.ui.status.primary"})]}),n(e.tr,{children:[o(e.td,{children:"ui.status.secondary"}),o(e.td,{children:"dark.ui.status.secondary"})]}),n(e.tr,{children:[o(e.td,{children:"ui.success.primary"}),o(e.td,{children:"dark.ui.success.primary"})]}),n(e.tr,{children:[o(e.td,{children:"ui.success.secondary"}),o(e.td,{children:"dark.ui.success.secondary"})]}),n(e.tr,{children:[o(e.td,{children:"ui.test"}),o(e.td,{children:"dark.ui.test"})]}),n(e.tr,{children:[o(e.td,{children:"ui.warning.primary"}),o(e.td,{children:"dark.ui.warning.primary"})]}),n(e.tr,{children:[o(e.td,{children:"ui.warning.secondary"}),o(e.td,{children:"dark.ui.warning.secondary"})]}),n(e.tr,{children:[o(e.td,{children:"ui.bg.default"}),o(e.td,{children:"dark.ui.bg.default"})]}),n(e.tr,{children:[o(e.td,{children:"ui.bg.hover"}),o(e.td,{children:"dark.ui.bg.hover"})]}),n(e.tr,{children:[o(e.td,{children:"ui.bg.active"}),o(e.td,{children:"dark.ui.bg.active"})]}),n(e.tr,{children:[o(e.td,{children:"ui.border.default"}),o(e.td,{children:"dark.ui.border.default"})]}),n(e.tr,{children:[o(e.td,{children:"ui.border.hover"}),o(e.td,{children:"dark.ui.border.hover"})]}),n(e.tr,{children:[o(e.td,{children:"ui.typography.body"}),o(e.td,{children:"dark.ui.typography.body"})]}),n(e.tr,{children:[o(e.td,{children:"ui.typography.body.inverse"}),o(e.td,{children:"dark.ui.typography.body.inverse"})]}),n(e.tr,{children:[o(e.td,{children:"ui.typography.heading"}),o(e.td,{children:"dark.ui.typography.heading"})]}),n(e.tr,{children:[o(e.td,{children:"ui.typography.heading.inverse"}),o(e.td,{children:"dark.ui.typography.heading.inverse"})]})]})]})]})}function R(i={}){const{wrapper:e}=Object.assign({},d(),i.components);return e?o(e,Object.assign({},i,{children:o(l,i)})):l(i)}export{R as default};
//# sourceMappingURL=SupportingDarkMode-d4dfe1d8.js.map
