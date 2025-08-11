import{u as i,j as e,M as d,L as n,S as s}from"./iframe-D93LbwGv.js";function t(r){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Development Guide/Supporting Dark Mode"}),`
`,e.jsx(o.h1,{id:"supporting-dark-mode",children:"Supporting Dark Mode"}),`
`,e.jsx(o.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[`
`,e.jsx(n,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,e.jsxs(o.li,{children:[`
`,e.jsx(n,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,e.jsxs(o.li,{children:[`
`,e.jsx(n,{href:"#reservoir-default-configuration",target:"_self",children:"Reservoir Default Configuration"}),`
`]}),`
`,e.jsxs(o.li,{children:[`
`,e.jsx(n,{href:"#consuming-app-configuration",target:"_self",children:"Consuming App Configuration"}),`
`]}),`
`,e.jsxs(o.li,{children:[`
`,e.jsx(n,{href:"#hooks",target:"_self",children:"Hooks"}),`
`]}),`
`,e.jsxs(o.li,{children:[`
`,e.jsx(n,{href:"#using-custom-dark-mode-styles",target:"_self",children:"Using Custom Dark Mode Styles"}),`
`]}),`
`,e.jsxs(o.li,{children:[`
`,e.jsx(n,{href:"#color-mapping",target:"_self",children:"Color Mapping"}),`
`]}),`
`]}),`
`,e.jsx(o.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(o.p,{children:`Offering dark mode color styles on a website might be considered a hip feature
or a sign of the times, but it is also a way to improve accessibility. Dark
mode can be beneficial for all users, making text easier to read for longer
periods of time and reducing the likelihood of eye strain or fatigue, but it
can be especially beneficial for users with low vision and light sensitivity.`}),`
`,e.jsx(o.p,{children:`With these accessibility benefits in mind, NYPL is aiming to implement dark
mode on its websites over the coming months and years. To get this migration
started, the Reservoir Design System has added dark color mode support to all
components in the React Component Library. As NYPL projects adopt the Reservoir
Design System, and when portfolio groups are fully prepared and time allows,
engineers should utilize this documentation to configure React web apps to
enable and implement dark color mode styles.`}),`
`,e.jsx(o.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(o.p,{children:`All DS components support light and dark color mode and have gone through color
contrast accessibility review.`}),`
`,e.jsx(o.p,{children:"Resources:"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"https://webaim.org/resources/contrastchecker/",rel:"nofollow",children:"WebAIM Contrast Checker"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"https://www.w3.org/WAI/perspective-videos/contrast/",rel:"nofollow",children:"W3 WAI Colors with Good Contrast"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"https://www.a11yproject.com/posts/operating-system-and-browser-accessibility-display-modes/",rel:"nofollow",children:"The A11y Project - Operating System and Browser Accessibility Display Modes"})}),`
`]}),`
`,e.jsx(o.h2,{id:"reservoir-default-configuration",children:"Reservoir Default Configuration"}),`
`,e.jsx(o.p,{children:`By default, the Reservoir Design System (DS) is configured to ignore a user's
system color mode and to render the DS components using light color mode styles.
This means that users will see the light mode styles, regardless of their
system's settings.`}),`
`,e.jsxs(o.p,{children:["This configuration is controlled with the ",e.jsx(o.code,{children:"useSystemColorMode"}),` and
`,e.jsx(o.code,{children:"initialColorMode"}),` global attributes found in
`,e.jsx(o.a,{href:"https://github.com/NYPL/nypl-design-system/blob/b52c9a5fea6b5eed929119e9dd5ed155044e44c7/src/theme/index.ts#L161",rel:"nofollow",children:"src/theme/index.ts"}),`
(lines 161 - 166) in the Reservoir repo. They are set to `,e.jsx(o.code,{children:"false"})," and ",e.jsx(o.code,{children:'"light"'}),`
respectively.`]}),`
`,e.jsxs(o.p,{children:["If desired, the ",e.jsx(o.code,{children:"initialColorMode"}),` can be overridden by the consuming
application. To do this, please refer to the `,e.jsx(n,{href:"#consuming-app-configuration",target:"_self",children:`Consuming App
Configuration`})," section."]}),`
`,e.jsx(o.h2,{id:"consuming-app-configuration",children:"Consuming App Configuration"}),`
`,e.jsxs(o.p,{children:[`To enable and control the color mode styles of the Reservoir Design System (DS)
components and to control the color mode for the entire app, consuming
applications must add the `,e.jsx(o.code,{children:"ColorModeScript"}),` component, which helps keep track of
and set the current color mode.`]}),`
`,e.jsxs(o.p,{children:["For proper configuration, the ",e.jsx(o.code,{children:"initialColorMode"}),` prop must be passed to the
`,e.jsx(o.code,{children:"ColorModeScript"}),` component. With this prop, consuming apps can set the value for
the preferred color mode in the consuming app.`]}),`
`,e.jsx(o.p,{children:e.jsx(o.strong,{children:"Color Mode Options"})}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"initialColorMode"})," prop can be set to one of three values: ",e.jsx(o.code,{children:'"light"'}),", ",e.jsx(o.code,{children:'"dark"'}),`, or
`,e.jsx(o.code,{children:'"system"'}),"."]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:"light: DS components will initially render using light color mode styles."}),`
`,e.jsx(o.li,{children:"dark: DS components will initially render using dark color mode styles."}),`
`,e.jsxs(o.li,{children:[`system: DS components will initially render using color mode styles based on a
user's system, or OS, color settings. If the system color mode cannot be
resolved, `,e.jsx(o.code,{children:'"light"'})," will be used as the fallback value."]}),`
`]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"NOTE:"})," Although the ",e.jsx(o.code,{children:"initialColorMode"})," prop can be set to the ",e.jsx(o.code,{children:'"light"'}),` value,
which would mirror the default configuration from the DS and render the DS
components using the light mode color style, it is more likely that consuming
apps will use the `,e.jsx(o.code,{children:'"dark"'})," or ",e.jsx(o.code,{children:'"system"'}),` values in order to enable the dark mode
color styles.`]}),`
`,e.jsx(o.h3,{id:"required-setup",children:"Required Setup"}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"ColorModeScript"})," component with the ",e.jsx(o.code,{children:"initialColorMode"}),` prop should be added
to the top level of the consuming application, before all content. More often
than not, the `,e.jsx(o.code,{children:"ColorModeScript"}),` component will be added alongside the
`,e.jsx(o.code,{children:"DSProvider"})," component (",e.jsx(o.a,{href:"https://github.com/NYPL/nypl-design-system#using-the-design-system-in-your-product",rel:"nofollow",children:`see the
docs`}),")."]}),`
`,e.jsx(s,{code:`
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
`,e.jsx(o.h3,{id:"optional-configuration",children:"Optional Configuration"}),`
`,e.jsx(o.p,{children:e.jsx(o.strong,{children:"For SSR Frameworks (ex. Next.js)"})}),`
`,e.jsxs(o.p,{children:[`For Next.js (or another SSR framework) apps that are using a toggle to control
the color mode, it is recommended to also add the `,e.jsx(o.code,{children:"colorModeManager"}),` prop in the
`,e.jsx(o.code,{children:"DSProvider"})," component to aid with proper color rendering. When ",e.jsx(o.code,{children:"colorModeManager"}),`
is implemented, the app will load the `,e.jsx(o.code,{children:"initialColorMode"}),` before rendering the
components, avoiding the flashing that can happen if the color mode is set
during hydration.`]}),`
`,e.jsxs(o.p,{children:[`The example below provides all required code necessary to enable this
functionality. The `,e.jsx(o.code,{children:"cookieStorageManager"})," and ",e.jsx(o.code,{children:"localStorageManager"}),` functions can
be used to help to store the `,e.jsx(o.code,{children:"chakra-ui-color-mode"}),` value in the browser, but, by
default, the necessary variables will be stored in `,e.jsx(o.code,{children:"localStorage"}),` unless otherwise
specified. The `,e.jsx(o.code,{children:"getServerSideProps"}),` function runs before the page loads, ensuring
the cookie is never undefined.`]}),`
`,e.jsx(s,{code:`
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
`,e.jsx(o.h2,{id:"hooks",children:"Hooks"}),`
`,e.jsxs(o.p,{children:[`To manage color mode in your application, the Reservoir Design System (DS)
exposes Chakra's `,e.jsx(o.code,{children:"useColorMode"})," and ",e.jsx(o.code,{children:"useColorModeValue"})," hooks."]}),`
`,e.jsx(o.h3,{id:"usecolormode",children:"useColorMode"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"useColorMode"}),` gives you access to the current color mode, and a function to
toggle the color mode.`]}),`
`,e.jsx(s,{code:`
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
`,e.jsx(o.h3,{id:"usecolormodevalue",children:"useColorModeValue"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"useColorModeValue"}),` is a React hook used to change any value or style based on the
color mode. It takes two arguments: the value in light mode, and the value in
dark mode.`]}),`
`,e.jsx(s,{code:`
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
`,e.jsx(o.h3,{id:"react-syntax-reminder",children:"React Syntax Reminder"}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"useColorMode"})," and ",e.jsx(o.code,{children:"useColorModeValue"}),` hooks only work if called inside the
`,e.jsx(o.code,{children:"DSProvider"}),` wrapper. Additionally, like all hooks, they must be called from
within a React function component or a custom React Hook function.`]}),`
`,e.jsx(o.h2,{id:"using-custom-dark-mode-styles",children:"Using Custom Dark Mode Styles"}),`
`,e.jsx(o.p,{children:`If all NYPL consuming apps were composed using only Reservoir Design System (DS)
components, this section of the documentation would not be necessary - all
elements would support dark color mode styles out of the box and no further
configuration would be needed. Nevertheless, this generally will not be the
case. Therefore, in situations where custom components or custom UI elements
are necessary, dark mode styles will need to be added for these elements in the
consuming app in addition to the default "light mode" styles.`}),`
`,e.jsx(o.h3,{id:"setting-styles-with-javascript-recommended",children:"Setting Styles with Javascript (recommended)"}),`
`,e.jsxs(o.p,{children:[`As an organization, NYPL is trending away from using traditional CSS and CSS
preprocessors like SCSS in React applications. In their place, CSS-in-JS is
being used to leverage the style patterns and `,e.jsx(n,{href:"#design-tokens",target:"_self",children:"design tokens"}),`
available in the DS and Chakra UI.`]}),`
`,e.jsx(o.h4,{id:"benefits",children:"Benefits"}),`
`,e.jsxs(o.p,{children:[`Outside of simply consolidating code into one location, using CSS-in-JS opens
the door to many ease-of-use benefits when it comes to applying styles to UI
elements, such as `,e.jsx(n,{href:"#chakra-style-props",target:"_self",children:"Chakra style props"}),", ",e.jsx(n,{href:"#design-tokens",target:"_self",children:"design tokens"}),`,
and `,e.jsx(n,{href:"#responsive-styles",target:"_self",children:"responsive styles"}),"."]}),`
`,e.jsx(o.h5,{id:"chakra-style-props",children:"Chakra Style Props"}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.a,{href:"https://chakra-ui.com/docs/styled-system/style-props",rel:"nofollow",children:"style props"}),`
established by Charka have been exposed and made available through the DS. These
style props, along with a wide array of `,e.jsx(o.a,{href:"https://chakra-ui.com/docs/styled-system/style-props#pseudo",rel:"nofollow",children:`pseudo
selectors`}),`, provide
helpful and time-saving shorthand to style components. Examples include the `,e.jsx(o.code,{children:"bg"}),`
prop in place of the `,e.jsx(o.code,{children:"background"})," CSS attribute and the ",e.jsx(o.code,{children:"px"}),` prop to add both
the `,e.jsx(o.code,{children:"padding-left"})," and ",e.jsx(o.code,{children:"padding-right"})," CSS attributes to an element."]}),`
`,e.jsx(o.h5,{id:"design-tokens",children:"Design Tokens"}),`
`,e.jsxs(o.p,{children:[`Design tokens are available for many style attribute values, including, but not
limited to, colors, font sizes, and spacing. These semantically-named design
tokens allow you to logically apply styles without having to know the actual
style values. For example, in the code snippets found later in this section, the
color values `,e.jsx(o.code,{children:"ui.bg.default"})," and ",e.jsx(o.code,{children:"dark.ui.bg.default"}),` are color design tokens
and `,e.jsx(o.code,{children:"inset.default"}),` is a spacing design token. For a full reference chart
showing all available design tokens, refer to the `,e.jsx(o.a,{href:"../?path=/docs/development-guide-design-tokens--docs",children:`Design
Tokens`}),` page in Reservoir
Storybook.`]}),`
`,e.jsx(o.h5,{id:"responsive-styles",children:"Responsive Styles"}),`
`,e.jsxs(o.p,{children:["Instead of manually adding ",e.jsx(o.code,{children:"@media"}),` queries and nested styles, CSS-in-JS allows
you to access Chakra style patterns which provide object and array values to add
mobile-first `,e.jsx(o.a,{href:"https://chakra-ui.com/docs/styled-system/responsive-styles",rel:"nofollow",children:`responsive
styles`}),"."]}),`
`,e.jsx(o.h4,{id:"preparing-your-components",children:"Preparing Your Components"}),`
`,e.jsxs(o.p,{children:[`To use CSS-in-JS effectively, custom components and custom UI elements should be
composed using `,e.jsx(n,{href:"#using-ds-components",target:"_self",children:"DS components"})," or Chakra ",e.jsx(n,{href:"#using-structural-ui-components",target:"_self",children:"Structural UI components"}),"."]}),`
`,e.jsx(o.h5,{id:"using-ds-components",children:"Using DS Components"}),`
`,e.jsx(o.p,{children:`If a DS component can be used to take the place of a custom components or custom
UI elements, developers should aim to make the necessary changes to do so. Out
of the box, the DS components will not require any additional configuration for
dark color mode support.`}),`
`,e.jsx(o.h5,{id:"using-structural-ui-components",children:"Using Structural UI Components"}),`
`,e.jsxs(o.p,{children:[`If an app-specific component cannot be directly replaced with a DS component,
consuming apps should try to rebuild it using basic structural components
available in the DS. If using this approach, two of the most important
components to note are `,e.jsx(o.code,{children:"Box"})," (",e.jsx(o.a,{href:"../?path=/docs/components-chakra-exports-layout-box--docs",children:"see the docs"}),`),
the component on top of which many DS and all other Chakra UI components are
built, and
`,e.jsx(o.code,{children:"Stack"})," (",e.jsx(o.a,{href:"../?path=/docs/components-chakra-exports-layout-stack-hstack-vstack--docs",children:`see the
docs`}),`),
a layout component used to group elements together and apply a space between
them.`]}),`
`,e.jsx(o.h4,{id:"applying-styles",children:"Applying Styles"}),`
`,e.jsx(o.p,{children:`For app-specific components, dark mode styles should be applied using CSS-in-JS.
There are two methods to do this.`}),`
`,e.jsx(o.h5,{id:"method-1-recommended",children:"Method 1 (recommended)"}),`
`,e.jsxs(o.p,{children:["To add styles to DS and Chakra UI components, pass a style object to the ",e.jsx(o.code,{children:"sx"}),`
prop. Within the style object, use the `,e.jsx(o.code,{children:"_dark"}),` pseudo selector to add the styles
that should be used when dark mode is active.`]}),`
`,e.jsx(s,{code:`
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
`,e.jsx(o.h5,{id:"method-2",children:"Method 2"}),`
`,e.jsxs(o.p,{children:[`To add styles to app-specific components and native HTML elements, you may use
the `,e.jsx(o.code,{children:"useColorModeValue"})," hook (",e.jsx(n,{href:"#usecolormode",target:"_self",children:"see the docs"}),`)
to specify light and dark mode style values for specific style attributes.`]}),`
`,e.jsxs(o.p,{children:[`Please note that when passing style attributes to custom components or native
HTML elements, you must use the React `,e.jsx(o.code,{children:"style"})," prop rather than the Chakra ",e.jsx(o.code,{children:"sx"}),`
prop or the `,e.jsx(n,{href:"#chakra-style-props",target:"_self",children:"Chakra style props"}),`.
Additionally, javascript `,e.jsx(n,{href:"#design-tokens",target:"_self",children:"design tokens"}),`
cannot be used as they are not compatible with the React style prop, so CSS
design tokens or native CSS attribute values must be used.`]}),`
`,e.jsx(s,{code:`
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
`,e.jsx(s,{code:`
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
`,e.jsx(o.p,{children:`Below is an example using a custom component. Please note that consuming apps
are responsible for handling how styles are propagated and applied within custom
components.`}),`
`,e.jsx(s,{code:`
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
`,e.jsx(o.h3,{id:"css-and-css-precompilers",children:"CSS and CSS Precompilers"}),`
`,e.jsxs(o.p,{children:[`Applying dark mode styles using Javascript is the recommended method, but using
CSS or a CSS precompiler like SCSS is still an option for custom components,
custom UI elements and native HTML elements. For those elements, dark mode
styles can be added with the prefers-color-scheme media query and the Reservoir
CSS vars (`,e.jsx(o.a,{href:"../?path=/docs/style-guide-colors--docs",children:"Colors Storybook page"}),")."]}),`
`,e.jsxs(o.p,{children:[`The following example is only applicable if a consuming application is using
system color mode without a toggle. In this configuration, please note that the
order in which the styles are written into the stylesheet is important. The
default styles should be written first and the dark mode style in the
`,e.jsx(o.code,{children:"prefers-color-scheme"})," media query must be written after the default styles."]}),`
`,e.jsx(s,{code:`
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
`,e.jsxs(o.p,{children:["If the consuming application uses a toggle, you can use the ",e.jsx(o.code,{children:"useColorMode"}),` hook to
retrieve the current `,e.jsx(o.code,{children:"colorMode"})," and add ",e.jsx(o.code,{children:'"light"'})," or ",e.jsx(o.code,{children:'"dark"'}),` classes to applicable
components.`]}),`
`,e.jsx(s,{code:`
// Component file
const { colorMode } = useColorMode(); // returns "light" or "dark"
<div className={\`\${colorMode} container\`}>a container</div>;
`,language:"tsx"}),`
`,e.jsx(s,{code:`
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
`,e.jsx(o.h2,{id:"color-mapping",children:"Color Mapping"}),`
`,e.jsx(o.p,{children:`If mockups have not been specifically created to show the dark mode version of a
page design, then the colors used for the default view (light mode) can be
mapped to corresponding dark mode colors. Use the tables below to find the
necessary colors.`}),`
`,e.jsxs(o.p,{children:[`For reference, all Reservoir Design System dark mode colors can be found in the
Storybook documentation under `,e.jsx(o.a,{href:"../?path=/docs/style-guide-colors--docs",children:"Colors"}),`
and in the `,e.jsx(o.a,{href:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=61991%3A45315",rel:"nofollow",children:`Visual Design
Library`}),"."]}),`
`,e.jsx(o.h3,{id:"grayscale-colors",children:"Grayscale Colors"}),`
`,e.jsxs(o.p,{children:[`Grayscale colors (i.e. black, white and all grays in between) are utility colors
and in many cases they are used as the basis for the semantic colors. As
utility colors, the light/dark color map does not apply. If any application
level style values have been written using the grayscale color design tokens,
the values should be updated to use the applicable semantic color design tokens.
For more details, please refer to the `,e.jsx(n,{href:"#legacy-color-conversions",target:"_self",children:"Legacy Color Conversions"})," section."]}),`
`,e.jsx(o.h3,{id:"legacy-color-conversions",children:"Legacy Color Conversions"}),`
`,e.jsx(o.p,{children:`In older designs and consuming apps, grayscale colors may have been used in the
CSS styles of some application level UI elements, including color styles for
background, border, text and disabled states. Going forward, style attributes
color design token. Once styles have been updated to use proper semantic color
that use grayscale colors should be updated to use the corresponding semantic
design tokens, the color mapping for dark color mode will be apparent.`}),`
`,e.jsx(o.p,{children:"Use the following tables to update legacy color values."}),`
`,e.jsx(o.h4,{id:"background-colors",children:"Background Colors"}),`
`,e.jsxs(o.table,{children:[e.jsx(o.thead,{children:e.jsxs(o.tr,{children:[e.jsx(o.th,{children:"Legacy Grayscale Color"}),e.jsx(o.th,{children:"Current Semantic Color"})]})}),e.jsxs(o.tbody,{children:[e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"ui.gray.x-light-cool"}),e.jsx(o.td,{children:"ui.bg.default"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"ui.gray.light-cool"}),e.jsx(o.td,{children:"ui.bg.hover"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"ui.gray.medium"}),e.jsx(o.td,{children:"ui.bg.active"})]})]})]}),`
`,e.jsx(o.h4,{id:"border-colors",children:"Border Colors"}),`
`,e.jsxs(o.table,{children:[e.jsx(o.thead,{children:e.jsxs(o.tr,{children:[e.jsx(o.th,{children:"Legacy Grayscale Color"}),e.jsx(o.th,{children:"Current Semantic Color"})]})}),e.jsxs(o.tbody,{children:[e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"ui.gray.medium"}),e.jsx(o.td,{children:"ui.border.default"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"ui.gray.dark"}),e.jsx(o.td,{children:"ui.border.hover"})]})]})]}),`
`,e.jsx(o.h4,{id:"heading-colors",children:"Heading Colors"}),`
`,e.jsxs(o.table,{children:[e.jsx(o.thead,{children:e.jsxs(o.tr,{children:[e.jsx(o.th,{children:"Legacy Grayscale Color"}),e.jsx(o.th,{children:"Current Semantic Color"})]})}),e.jsxs(o.tbody,{children:[e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"ui.white"}),e.jsx(o.td,{children:"ui.typography.heading.inverse"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"ui.black"}),e.jsx(o.td,{children:"ui.typography.heading"})]})]})]}),`
`,e.jsx(o.h4,{id:"text-colors",children:"Text Colors"}),`
`,e.jsxs(o.table,{children:[e.jsx(o.thead,{children:e.jsxs(o.tr,{children:[e.jsx(o.th,{children:"Legacy Grayscale Color"}),e.jsx(o.th,{children:"Current Semantic Color"})]})}),e.jsxs(o.tbody,{children:[e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"ui.white"}),e.jsx(o.td,{children:"ui.typography.body.inverse"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"ui.black"}),e.jsx(o.td,{children:"ui.typography.body"})]})]})]}),`
`,e.jsx(o.h4,{id:"disabled-state-colors",children:"Disabled State Colors"}),`
`,e.jsxs(o.table,{children:[e.jsx(o.thead,{children:e.jsxs(o.tr,{children:[e.jsx(o.th,{children:"Legacy Grayscale Color"}),e.jsx(o.th,{children:"Current Semantic Color"})]})}),e.jsxs(o.tbody,{children:[e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"ui.gray.xx-light-cool"}),e.jsx(o.td,{children:"ui.disabled.secondary"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"ui.gray.light-cool"}),e.jsx(o.td,{children:"ui.disabled.primary"})]})]})]}),`
`,e.jsx(o.h3,{id:"lightdark-color-map",children:"Light/Dark Color Map"}),`
`,e.jsx(o.p,{children:`Each brand color, section color and semantic color design token in the light
color mode palette has a corresponding design token in the dark color mode
palette. Please refer to the table below.`}),`
`,e.jsxs(o.table,{children:[e.jsx(o.thead,{children:e.jsxs(o.tr,{children:[e.jsx(o.th,{children:"Light Color Palette"}),e.jsx(o.th,{children:"Dark Color Palette"})]})}),e.jsxs(o.tbody,{children:[e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"ui.disabled.primary"}),e.jsx(o.td,{children:"dark.ui.disabled.primary"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"ui.disabled.secondary"}),e.jsx(o.td,{children:"dark.ui.disabled.secondary"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"ui.error.primary"}),e.jsx(o.td,{children:"dark.ui.error.primary"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"ui.error.secondary"}),e.jsx(o.td,{children:"dark.ui.error.secondary"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"ui.focus"}),e.jsx(o.td,{children:"dark.ui.focus"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"ui.link.primary"}),e.jsx(o.td,{children:"dark.ui.link.primary"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"ui.link.secondary"}),e.jsx(o.td,{children:"dark.ui.link.secondary"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"ui.status.primary"}),e.jsx(o.td,{children:"dark.ui.status.primary"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"ui.status.secondary"}),e.jsx(o.td,{children:"dark.ui.status.secondary"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"ui.success.primary"}),e.jsx(o.td,{children:"dark.ui.success.primary"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"ui.success.secondary"}),e.jsx(o.td,{children:"dark.ui.success.secondary"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"ui.test"}),e.jsx(o.td,{children:"dark.ui.test"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"ui.warning.primary"}),e.jsx(o.td,{children:"dark.ui.warning.primary"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"ui.warning.secondary"}),e.jsx(o.td,{children:"dark.ui.warning.secondary"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"ui.bg.default"}),e.jsx(o.td,{children:"dark.ui.bg.default"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"ui.bg.hover"}),e.jsx(o.td,{children:"dark.ui.bg.hover"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"ui.bg.active"}),e.jsx(o.td,{children:"dark.ui.bg.active"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"ui.border.default"}),e.jsx(o.td,{children:"dark.ui.border.default"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"ui.border.hover"}),e.jsx(o.td,{children:"dark.ui.border.hover"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"ui.typography.body"}),e.jsx(o.td,{children:"dark.ui.typography.body"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"ui.typography.body.inverse"}),e.jsx(o.td,{children:"dark.ui.typography.body.inverse"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"ui.typography.heading"}),e.jsx(o.td,{children:"dark.ui.typography.heading"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"ui.typography.heading.inverse"}),e.jsx(o.td,{children:"dark.ui.typography.heading.inverse"})]})]})]})]})}function a(r={}){const{wrapper:o}={...i(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(t,{...r})}):t(r)}export{a as default};
