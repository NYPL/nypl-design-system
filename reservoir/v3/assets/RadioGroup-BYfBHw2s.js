import {
  u as d,
  j as e,
  M as c,
  L as n,
  bv as h,
  C as r,
  bw as p,
  S as s,
} from "./iframe-D93LbwGv.js";
import {
  R as a,
  C as l,
  L as u,
  B as x,
  J as m,
  a as j,
  U as f,
} from "./RadioGroup.stories-C-neOo0i.js";
import { C as g } from "./ComponentChangelogTable-Ck_3mwrR.js";
import "./storybookUtils-BmTl87w5.js";
const b = [
  {
    date: "2025-01-16",
    version: "3.5.2",
    type: "Update",
    affects: ["Accessibility"],
    notes: [
      "Removes the fieldset wrapper and replaces it with a div and simple span for the title. The main wrapper around the `Radio` componnents are already in an accessible 'radiogroup' role element.",
    ],
  },
  {
    date: "2024-09-19",
    version: "3.3.2",
    type: "Update",
    affects: ["Styles"],
    notes: ["Changes 'r' in '(required)' label from upper- to lowercase"],
  },
  {
    date: "2024-06-20",
    version: "3.1.6",
    type: "Update",
    affects: ["Styles"],
    notes: ["Adds interaction tests for the Controls story."],
  },
  {
    date: "2024-03-14",
    version: "3.0.0",
    type: "Update",
    affects: ["Styles"],
    notes: ["Chakra 2.8 update."],
  },
];
function i(t) {
  const o = {
    a: "a",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...d(),
    ...t.components,
  };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(c, { of: a }),
      `
`,
      e.jsx(o.h1, { id: "radiogroup", children: "RadioGroup" }),
      `
`,
      e.jsxs(o.table, {
        children: [
          e.jsx(o.thead, {
            children: e.jsxs(o.tr, {
              children: [
                e.jsx(o.th, { children: "Component Version" }),
                e.jsx(o.th, { children: "DS Version" }),
              ],
            }),
          }),
          e.jsxs(o.tbody, {
            children: [
              e.jsxs(o.tr, {
                children: [
                  e.jsx(o.td, { children: "Added" }),
                  e.jsx(o.td, {
                    children: e.jsx(o.code, { children: "0.25.0" }),
                  }),
                ],
              }),
              e.jsxs(o.tr, {
                children: [
                  e.jsx(o.td, { children: "Latest" }),
                  e.jsx(o.td, {
                    children: e.jsx(o.code, { children: "3.5.2" }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      `
`,
      e.jsx(o.h2, { id: "table-of-contents", children: "Table of Contents" }),
      `
`,
      e.jsxs(o.ul, {
        children: [
          `
`,
          e.jsxs(o.li, {
            children: [
              `
`,
              e.jsx(n, {
                href: "#overview",
                target: "_self",
                children: "Overview",
              }),
              `
`,
            ],
          }),
          `
`,
          e.jsxs(o.li, {
            children: [
              `
`,
              e.jsx(n, {
                href: "#component-props",
                target: "_self",
                children: "Component Props",
              }),
              `
`,
            ],
          }),
          `
`,
          e.jsxs(o.li, {
            children: [
              `
`,
              e.jsx(n, {
                href: "#accessibility",
                target: "_self",
                children: "Accessibility",
              }),
              `
`,
            ],
          }),
          `
`,
          e.jsxs(o.li, {
            children: [
              `
`,
              e.jsx(n, {
                href: "#layout-patterns",
                target: "_self",
                children: "Layout Patterns",
              }),
              `
`,
            ],
          }),
          `
`,
          e.jsxs(o.li, {
            children: [
              `
`,
              e.jsx(n, {
                href: "#browser-states",
                target: "_self",
                children: "Browser States",
              }),
              `
`,
            ],
          }),
          `
`,
          e.jsxs(o.li, {
            children: [
              `
`,
              e.jsx(n, {
                href: "#labels-using-jsx-elements",
                target: "_self",
                children: "Labels Using JSX Elements",
              }),
              `
`,
            ],
          }),
          `
`,
          e.jsxs(o.li, {
            children: [
              `
`,
              e.jsx(n, {
                href: "#getting-radio-input-values",
                target: "_self",
                children: "Getting Radio Input Values",
              }),
              `
`,
            ],
          }),
          `
`,
          e.jsxs(o.li, {
            children: [
              `
`,
              e.jsx(n, {
                href: "#changelog",
                target: "_self",
                children: "Changelog",
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
      e.jsx(o.h2, { id: "overview", children: "Overview" }),
      `
`,
      e.jsx(h, { of: a }),
      `
`,
      e.jsx(o.h2, { id: "component-props", children: "Component Props" }),
      `
`,
      e.jsx(r, { of: l }),
      `
`,
      e.jsx(p, { of: l }),
      `
`,
      e.jsx(o.h2, { id: "accessibility", children: "Accessibility" }),
      `
`,
      e.jsxs(o.p, {
        children: [
          "The ",
          e.jsx(o.code, { children: "RadioGroup" }),
          " renders a group of ",
          e.jsx(o.code, { children: "Radio" }),
          ` components along with a title that
can be visually hidden through the `,
          e.jsx(o.code, { children: "showLabel" }),
          " prop.",
        ],
      }),
      `
`,
      e.jsx(o.p, { children: "Resources:" }),
      `
`,
      e.jsxs(o.ul, {
        children: [
          `
`,
          e.jsx(o.li, {
            children: e.jsx(o.a, {
              href: "https://www.w3.org/TR/2016/WD-wai-aria-practices-1.1-20160317/examples/radio/radio.html",
              rel: "nofollow",
              children: "W3C ARIA radiogroup and radio example",
            }),
          }),
          `
`,
          e.jsx(o.li, {
            children: e.jsx(o.a, {
              href: "https://dequeuniversity.com/library/aria/radio-and-radio-group",
              rel: "nofollow",
              children: "Deque University Radio and Radio Group",
            }),
          }),
          `
`,
          e.jsx(o.li, {
            children: e.jsx(o.a, {
              href: "https://chakra-ui.com/docs/components/form/radio",
              rel: "nofollow",
              children: "Chakra UI Radio",
            }),
          }),
          `
`,
        ],
      }),
      `
`,
      e.jsx(o.h2, { id: "layout-patterns", children: "Layout Patterns" }),
      `
`,
      e.jsxs(o.p, {
        children: [
          "Use the ",
          e.jsx(o.code, { children: "layout" }),
          " prop to set the ",
          e.jsx(o.code, { children: "Radio" }),
          ` buttons to display in a column or in
a row.`,
        ],
      }),
      `
`,
      e.jsx(r, { of: u }),
      `
`,
      e.jsx(o.h2, { id: "browser-states", children: "Browser States" }),
      `
`,
      e.jsx(r, { of: x }),
      `
`,
      e.jsx(o.h2, {
        id: "labels-using-jsx-elements",
        children: "Labels Using JSX Elements",
      }),
      `
`,
      e.jsxs(o.p, {
        children: [
          "React elements can be passed to the ",
          e.jsx(o.code, { children: "labelText" }),
          " prop of the ",
          e.jsx(o.code, { children: "Radio" }),
          ` component.
This is useful if you need to pass information as part of the label. For example,
if a `,
          e.jsx(o.code, { children: "Radio" }),
          ` label needs to display how many items that option has, it can be
displayed with the help of the `,
          e.jsx(o.code, { children: "Flex" }),
          " and ",
          e.jsx(o.code, { children: "Spacer" }),
          " components.",
        ],
      }),
      `
`,
      e.jsxs(o.p, {
        children: [
          "Note: the width of ",
          e.jsx(o.code, { children: "RadioGroup" }),
          " is ",
          e.jsx(o.em, { children: "not" }),
          ` set to full width by default. In
order to make this work, pass in the `,
          e.jsx(o.code, { children: "isFullWidth" }),
          " prop.",
        ],
      }),
      `
`,
      e.jsx(r, { of: m }),
      `
`,
      e.jsx(o.h2, {
        id: "getting-radio-input-values",
        children: "Getting Radio Input Values",
      }),
      `
`,
      e.jsx(o.h3, {
        id: "controlled-component-using-name-and-onchange-props",
        children: "Controlled Component using `name` and `onChange` props",
      }),
      `
`,
      e.jsxs(o.p, {
        children: [
          `If your application uses controlled React components and the Reservoir Design
System (DS) `,
          e.jsx(o.code, { children: "RadioGroup" }),
          ` must be controlled, you can extract the data through the
`,
          e.jsx(o.code, { children: "name" }),
          " and ",
          e.jsx(o.code, { children: "onChange" }),
          " props. This will be called every time a new ",
          e.jsx(o.code, { children: "Radio" }),
          ` value
is selected. Open the browser's console to see the output.`,
        ],
      }),
      `
`,
      e.jsx(s, {
        code: `
function RadioGroupControlledExample() {
const onChange = (selected) => {
  // This will return the value selected as a string.
  console.log(\`Controlled example. Selected: \${selected}\`);
};
return (
  <RadioGroup
    defaultValue="3"
    id="controlled-example"
    labelText="Controlled RadioGroup"
    name="radioGroupExample"
    onChange={onChange}
  >
    <Radio id="2" labelText="Radio 2" value="2" />
    <Radio id="3" labelText="Radio 3" value="3" />
    <Radio id="4" labelText="Radio 4" value="4" />
  </RadioGroup>
);
}
`,
        language: "jsx",
      }),
      `
`,
      e.jsx(r, { of: j }),
      `
`,
      e.jsx(o.h3, {
        id: "uncontrolled-component-using-refs",
        children: "Uncontrolled Component using `ref`s",
      }),
      `
`,
      e.jsx(o.p, {
        children: e.jsxs(o.strong, {
          children: [
            "NOTE: this, along with Chakra's own ",
            e.jsx(o.code, { children: "RadioGroup" }),
            ` component, are not working
at this time and we recommend to use the controlled pattern above.`,
          ],
        }),
      }),
      `
`,
      e.jsxs(o.p, {
        children: [
          "If your application uses uncontrolled components, you can pass React ",
          e.jsx(o.code, { children: "ref" }),
          ` props
to the DS `,
          e.jsx(o.code, { children: "RadioGroup" }),
          " component to get the selected value from the DOM.",
        ],
      }),
      `
`,
      e.jsxs(o.p, {
        children: [
          "The following example is using the ",
          e.jsx(o.code, { children: "register" }),
          " React ",
          e.jsx(o.code, { children: "ref" }),
          ` from the
`,
          e.jsx(o.code, { children: "react-hook-form" }),
          " package.",
        ],
      }),
      `
`,
      e.jsx(s, {
        code: `
import { useFormContext, Controller } from "react-hook-form";
// ...
const { register, handleSubmit, control } = useFormContext();
// ...
const submitForm = (formData) => {
// This will return an object with all the DOM element values that were
// registered with a \`name\` attribute.
// {
//   radioExample: "3"
// }
console.log(formData);
// ...
};
<form
id="example-form"
onSubmit={handleSubmit(submitForm)}
method="post"
action="/some/api/endpoint"
>
<Controller
  as={
    <RadioGroup
      defaultValue="3"
      id="uncontrolled-example"
      labelText="RadioGroup Uncontrolled"
      name="radioGroupExample"
      ref={register()}
    >
      <Radio id="2" labelText="Radio 2" value="2" />
      <Radio id="3" labelText="Radio 3" value="3" />
      <Radio id="4" labelText="Radio 4" value="4" />
    </RadioGroup>
  }
  control={control}
  name="radioGroupExample"
/>
</form>
`,
        language: "jsx",
      }),
      `
`,
      e.jsxs(o.p, {
        children: [
          "The above is specific to ",
          e.jsx(o.code, { children: "react-hook-form" }),
          ` but a similar pattern can be used
with normal React `,
          e.jsx(o.code, { children: "ref" }),
          ` values. Open the browser's console to see the output
`,
          e.jsxs(o.strong, {
            children: [
              "although, at the moment, forwarding the ref to Chakra's own ",
              e.jsx(o.code, { children: "RadioGroup" }),
              `
component is not working.`,
            ],
          }),
        ],
      }),
      `
`,
      e.jsx(s, {
        code: `
export function RadioGroupUncontrolledExample() {
const radioGroupRef = React.createRef();
// Get the value through:
const onSubmit = (e) => {
  e.preventDefault();
  const radioGroupValue = radioGroupRef.current.value;
  console.log(\`Uncontrolled example. Selected: \${radioGroupValue}\`);
};
return (
  <Form id="form" onSubmit={onSubmit}>
    <SimpleGrid columns="1">
      <RadioGroup
        defaultValue="3"
        id="uncontrolled-example"
        labelText="Uncontrolled RadioGroup"
        name="radioGroupExample"
        ref={radioGroupRef}
      >
        <Radio id="2" labelText="Radio 2" value="2" />
        <Radio id="3" labelText="Radio 3" value="3" />
        <Radio id="4" labelText="Radio 4" value="4" />
      </RadioGroup>
      <ButtonGroup>
        <Button id="submit" type="submit">
          Submit
        </Button>
      </ButtonGroup>
    </SimpleGrid>
  </Form>
);
}
`,
        language: "jsx",
      }),
      `
`,
      e.jsx(r, { of: f }),
      `
`,
      e.jsx(o.h2, { id: "changelog", children: "Changelog" }),
      `
`,
      e.jsx(g, { changelogData: b }),
    ],
  });
}
function C(t = {}) {
  const { wrapper: o } = { ...d(), ...t.components };
  return o ? e.jsx(o, { ...t, children: e.jsx(i, { ...t }) }) : i(t);
}
export { C as default };
