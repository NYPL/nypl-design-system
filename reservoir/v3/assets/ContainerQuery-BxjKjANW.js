import {
  u as o,
  j as e,
  M as a,
  L as i,
  S as t,
  B as l,
} from "./iframe-D93LbwGv.js";
function r(s) {
  const n = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...o(),
    ...s.components,
  };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(a, { title: "Development Guide/Container Query Guide" }),
      `
`,
      e.jsx(n.h1, {
        id: "container-query-guide",
        children: "Container Query Guide",
      }),
      `
`,
      e.jsx(n.h2, { id: "table-of-contents", children: "Table of Contents" }),
      `
`,
      e.jsxs(n.ul, {
        children: [
          `
`,
          e.jsxs(n.li, {
            children: [
              `
`,
              e.jsx(i, {
                href: "#general-information",
                target: "_self",
                children: "General Information",
              }),
              `
`,
            ],
          }),
          `
`,
          e.jsxs(n.li, {
            children: [
              `
`,
              e.jsx(i, {
                href: "#updating-a-component-to-use-container-queries",
                target: "_self",
                children: "Updating a component to use container queries",
              }),
              `
`,
            ],
          }),
          `
`,
          e.jsxs(n.li, {
            children: [
              `
`,
              e.jsx(i, {
                href: "#full-component-example",
                target: "_self",
                children: "Full component example",
              }),
              `
`,
            ],
          }),
          `
`,
        ],
      }),
      `
`,
      e.jsx(n.h2, {
        id: "general-information",
        children: "General Information",
      }),
      `
`,
      e.jsx(n.p, {
        children: `This guide will walk you through updating a component in Reservoir to replace
media queries with container queries.`,
      }),
      `
`,
      e.jsx(n.p, {
        children: `Container queries allow you to apply styles to an element based on the size of
its container, rather than the size of the viewport. This is useful for creating
responsive designs that adapt to the size of individual components.`,
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "setContainerStyles" }),
          ` function helps you generate container query styles based
on the provided breakpoint and styles. This function is useful for applying
responsive styles within a container.`,
        ],
      }),
      `
`,
      e.jsx(n.h3, { id: "resources", children: "Resources" }),
      `
`,
      e.jsxs(n.ul, {
        children: [
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.a, {
              href: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries",
              rel: "nofollow",
              children: "MDN container queries",
            }),
          }),
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.a, {
              href: "https://css-tricks.com/css-container-queries/",
              rel: "nofollow",
              children: "CSS Tricks container queries",
            }),
          }),
          `
`,
        ],
      }),
      `
`,
      e.jsx(n.h2, {
        id: "updating-a-component-to-use-container-queries",
        children: "Updating a component to use container queries",
      }),
      `
`,
      e.jsx(n.h3, {
        id: "defining-the-container",
        children: "Defining the container",
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "To define an element as the container add the style prop ",
          e.jsx(n.code, { children: "container-type: inline-size" }),
          `
to the top-most parent.`,
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "If the component is using ",
          e.jsx(n.code, { children: "ComponentWrapper" }),
          `, add the following prop to the
definition:`,
        ],
      }),
      `
`,
      e.jsx(t, {
        code: `
sx={{ containerType: "inline-size" }}
`,
      }),
      `
`,
      e.jsx(l, {
        content: e.jsxs(e.Fragment, {
          children: [
            e.jsx(n.strong, { children: "NOTE:" }),
            " A container cannot change its own styles, so if the top-most element has responsive styles applied, you will need to wrap it with a ",
            e.jsx(n.code, { children: "Box" }),
            " to define the container.",
          ],
        }),
        type: "warning",
      }),
      `
`,
      e.jsx(n.h3, {
        id: "defining-child-elements",
        children: "Defining child elements",
      }),
      `
`,
      e.jsx(n.p, {
        children: `To minimize CSS selectors, we recommend to specify child elements with data-*
attributes to style them.`,
      }),
      `
`,
      e.jsx(n.h3, {
        id: "convert-media-query-styles-to-container-query-styles",
        children: "Convert media query styles to container query styles",
      }),
      `
`,
      e.jsx(n.p, {
        children: `Here is a snippet of a component's styles which includes use of Chakra's object syntax
which applies media queries based on breakpoints:`,
      }),
      `
`,
      e.jsx(t, {
        code: `
{
wrapper: {
  flexDirection: imageAtEnd
    ? { base: "column-reverse", md: "row-reverse" }
    : { base: "column", md: "row" },
  paddingLeft: full ? { base: null, md: "s" } : null,
  paddingRight: full ? { base: null, md: "s" } : null,
},
imgWrapper: {
  height: { base: "320px", md: "auto" },
  width: { base: "100%", md: wrapperWidth },
},
};
`,
      }),
      `
`,
      e.jsx(n.p, {
        children: `To update the above to use container queries each object property would need to be
broken out into individual container queries:`,
      }),
      `
`,
      e.jsx(t, {
        code: `
{
"@container (min-width: 0px)": {
  "[data-wrapper]": {
    flexDirection: imageAtEnd ? "column-reverse" : "column",
  },
  "[data-imagewrapper]": {
    height: "320px",
    width: "100%",
  },
},
"@container (min-width: 600px)": {
  "[data-wrapper]": {
    flexDirection: imageAtEnd ? "row-reverse" : "row",
    paddingLeft: full ? "s" : null,
    paddingRight: full ? "s" : null,
  },
  "[data-imagewrapper]": {
    height: "auto",
    width: wrapperWidth,
  },
},
}
`,
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "Instead of using hard-coded breakpoint values, the ",
          e.jsx(n.code, { children: "setContainerStyles" }),
          ` function can
be used to generate the container query code with existing breakpoints in the system:`,
        ],
      }),
      `
`,
      e.jsx(t, {
        code: `
...setContainerStyles({
breakpoint: "base",
styles: {
  "[data-wrapper]": {
    flexDirection: imageAtEnd ? "column-reverse" : "column",
  },
  "[data-imagewrapper]": {
    height: "320px",
    width: "100%",
  },
},
}),
`,
      }),
      `
`,
      e.jsx(n.h3, {
        id: "setcontainerstyles-function",
        children: "setContainerStyles function",
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "setContainerStyles" }),
          ` function provides a way to generate container
query styles based on breakpoints and styles. Use this function in the component's
theme file to apply the appropriate container query styles.`,
        ],
      }),
      `
`,
      e.jsx(n.h4, { id: "function-signature", children: "Function Signature" }),
      `
`,
      e.jsx(t, {
        code: `
setContainerStyles(props: {
breakpoint: "base" | keyof typeof breakpoints;
styles: { [selector: string]: { [property: string]: string | number | null } };
}): { [key: string]: { [selector: string]: { [property: string]: string | number | null } } }
`,
      }),
      `
`,
      e.jsx(n.h4, { id: "parameters", children: "Parameters" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          e.jsx(n.code, { children: "props.breakpoint" }),
          `: The breakpoint at which the container query should apply. It
can be "base" or a key from the breakpoints object.`,
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          e.jsx(n.code, { children: "props.styles" }),
          `: An object containing the styles to apply within the container query.
The keys are CSS selectors, and the values are objects representing CSS properties
and their values.`,
        ],
      }),
      `
`,
      e.jsx(n.h4, { id: "returns", children: "Returns" }),
      `
`,
      e.jsx(n.p, {
        children: "An object containing the container query styles.",
      }),
      `
`,
      e.jsx(n.h4, { id: "example", children: "Example" }),
      `
`,
      e.jsx(t, {
        code: `
import { setContainerStyles } from "../utils/setContainerStyles";
const styles = setContainerStyles({
  breakpoint: "md",
  styles: {
      "[data-body]": {
      flexBasis: "100%",
      },
  },
});
// Result:
// {
//   "@container (min-width: 37.5em)": {
//     "[data-body]": {
//       flexBasis: "100%",
//     },
//   },
// }
`,
      }),
      `
`,
      e.jsx(n.h2, {
        id: "full-component-example",
        children: "Full component example",
      }),
      `
`,
      e.jsx(n.p, {
        children: `This is an example of an updated component with data attributes added to
be targeted in the container query styles:`,
      }),
      `
`,
      e.jsx(t, {
        code: `
<Box
  __css={styles.base}
  ref={ref}
  {...rest}
>
  <Box __css={styles.wrapper} data-wrapper>
      <Box
          __css={{
          ...styles.imgWrapper,
          }}
          data-imagewrapper
      >
          <Image
            alt={imageProps.alt}
            src={imageProps.src ? imageProps.src : undefined}
          />
      </Box>
      <Box __css={styles.text} data-text>
          {textContent}
      </Box>
  </Box>
</Box>
`,
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "setContainerStyles" }),
          ` function is used to generate container query styles for
the `,
          e.jsx(n.code, { children: "sm" }),
          " and ",
          e.jsx(n.code, { children: "md" }),
          ` breakpoints. The resulting styles are then spread into the
`,
          e.jsx(n.code, { children: "componentStyles" }),
          " object.",
        ],
      }),
      `
`,
      e.jsx(t, {
        code: `
const componentStyles = {
base: {
  bgColor: "ui.bg.default",
  ...setContainerStyles({
    breakpoint: "sm",
    styles: {
      "[data-body]": {
        flexBasis: "100%",
      },
    },
  }),
  ...setContainerStyles({
    breakpoint: "md",
    styles: {
      "[data-imagewrapper]": {
        flexFlow: "row",
      },
      "[data-actions]": {
        flexShrink: "0",
        marginStart: "m",
        marginTop: "0",
        maxWidth: "180px",
      },
      "[data-body]": {
        display: "block",
        flexFlow: "row nowrap",
        width: "auto",
      },
    },
  }),
},
};
`,
      }),
    ],
  });
}
function c(s = {}) {
  const { wrapper: n } = { ...o(), ...s.components };
  return n ? e.jsx(n, { ...s, children: e.jsx(r, { ...s }) }) : r(s);
}
export { c as default };
