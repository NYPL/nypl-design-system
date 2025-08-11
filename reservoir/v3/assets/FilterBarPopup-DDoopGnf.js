import {
  u as d,
  j as e,
  M as a,
  L as l,
  bv as h,
  C as o,
  bw as p,
  S as t,
} from "./iframe-D93LbwGv.js";
import { C as u } from "./ComponentChangelogTable-Ck_3mwrR.js";
import {
  F as i,
  W as r,
  a as x,
  M as j,
  T as m,
} from "./FilterBarPopup.stories-BFE0pfE9.js";
import "./useMultiSelect-amaASZqv.js";
const g = [
  {
    date: "2024-08-29",
    version: "3.3.0",
    type: "New Feature",
    affects: ["Accessibility", "Documentation", "Functionality", "Styles"],
    notes: ["Adds FilterBarPopup component."],
  },
];
function c(s) {
  const n = {
    a: "a",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...d(),
    ...s.components,
  };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(a, { of: i }),
      `
`,
      e.jsx(n.h1, { id: "filterbarpopup", children: "FilterBarPopup" }),
      `
`,
      e.jsxs(n.table, {
        children: [
          e.jsx(n.thead, {
            children: e.jsxs(n.tr, {
              children: [
                e.jsx(n.th, { children: "Component Version" }),
                e.jsx(n.th, { children: "DS Version" }),
              ],
            }),
          }),
          e.jsxs(n.tbody, {
            children: [
              e.jsxs(n.tr, {
                children: [
                  e.jsx(n.td, { children: "Added" }),
                  e.jsx(n.td, {
                    children: e.jsx(n.code, { children: "3.3.0" }),
                  }),
                ],
              }),
              e.jsxs(n.tr, {
                children: [
                  e.jsx(n.td, { children: "Latest" }),
                  e.jsx(n.td, {
                    children: e.jsx(n.code, { children: "3.3.0" }),
                  }),
                ],
              }),
            ],
          }),
        ],
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
              e.jsx(l, {
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
          e.jsxs(n.li, {
            children: [
              `
`,
              e.jsx(l, {
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
          e.jsxs(n.li, {
            children: [
              `
`,
              e.jsx(l, {
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
          e.jsxs(n.li, {
            children: [
              `
`,
              e.jsx(l, {
                href: "#filterbarpopup-heading",
                target: "_self",
                children: "FilterBarPopup Heading",
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
              e.jsx(l, {
                href: "#controlling-state-using-selecteditems-onclear-and-onsubmit-props",
                target: "_self",
                children:
                  "Controlling State Using selectedItems, onClear, and onSubmit Props",
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
              e.jsx(l, {
                href: "#totalresults-example",
                target: "_self",
                children: "totalResults example",
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
              e.jsx(l, {
                href: "#usefilterbarpopup-hook",
                target: "_self",
                children: "useFilterBarPopup hook",
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
              e.jsx(l, {
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
      e.jsx(n.h2, { id: "overview", children: "Overview" }),
      `
`,
      e.jsx(h, { of: i }),
      `
`,
      e.jsxs(n.p, {
        children: [
          e.jsx(n.code, { children: "FilterBarPopup" }),
          ` is a wrapper component for filter components and individual form
input components. The DS considers the following components as filter components:
`,
          e.jsx(n.code, { children: "CheckboxGroup" }),
          ", ",
          e.jsx(n.code, { children: "MultiSelectGroup" }),
          ",",
          e.jsx(n.code, { children: "RadioGroup" }),
          ", ",
          e.jsx(n.code, { children: "Checkbox" }),
          ", ",
          e.jsx(n.code, { children: "DatePicker" }),
          `,
`,
          e.jsx(n.code, { children: "MultiSelect" }),
          ", ",
          e.jsx(n.code, { children: "Radio" }),
          ", ",
          e.jsx(n.code, { children: "Select" }),
          ", ",
          e.jsx(n.code, { children: "Slider" }),
          ", ",
          e.jsx(n.code, { children: "TextInput" }),
          ", and ",
          e.jsx(n.code, { children: "Toggle" }),
          ".",
        ],
      }),
      `
`,
      e.jsx(n.p, {
        children:
          "The wrapped components/component groups will always be displayed in a column layout.",
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "It is recommended to use real-time filtering in conjunction with the ",
          e.jsx(n.code, { children: "totalResults" }),
          `
prop to update the `,
          e.jsx(n.code, { children: "Show X results" }),
          ` button with X being the total number of results
associated to the results list.`,
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "If the consuming app is not using the above, then ",
          e.jsx(n.code, { children: "FilterBarPopup" }),
          ` will render the
`,
          e.jsx(n.code, { children: "Show results" }),
          " button and can render an ",
          e.jsx(n.em, { children: "optional" }),
          " ",
          e.jsx(n.code, { children: "Clear all filters" }),
          `
button which is controlled by the `,
          e.jsx(n.code, { children: "onClear" }),
          " prop. The ",
          e.jsx(n.code, { children: "Show results" }),
          ` button will
call the `,
          e.jsx(n.code, { children: "onSubmit" }),
          " function if passed and close the modal.",
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "Related component: ",
          e.jsx(n.a, {
            href: "../?path=/docs/components-form-elements-FilterBarInline--docs",
            children: "FilterBarInline",
          }),
        ],
      }),
      `
`,
      e.jsx(n.h2, { id: "component-props", children: "Component Props" }),
      `
`,
      e.jsx(o, { of: r }),
      `
`,
      e.jsx(p, { of: r }),
      `
`,
      e.jsx(n.h2, { id: "accessibility", children: "Accessibility" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "FilterBarPopup" }),
          ` component is a wrapper component for components with filter
functionality. The accessibility of `,
          e.jsx(n.code, { children: "FilterBarPopup" }),
          ` depends on the passed child
components accessibility. See the accessibility details of valid FilterBarPopup child
components:`,
        ],
      }),
      `
`,
      e.jsxs(n.ul, {
        children: [
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.a, {
              href: "../?path=/docs/components-form-elements-checkboxgroup--docs#accessibility",
              children: "CheckboxGroup",
            }),
          }),
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.a, {
              href: "../?path=/docs/components-form-elements-multiselectgroup--docs#accessibility",
              children: "MultiSelectGroup",
            }),
          }),
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.a, {
              href: "../?path=/docs/components-form-elements-radiogroup--docs#accessibility",
              children: "RadioGroup",
            }),
          }),
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.a, {
              href: "../?path=/docs/components-form-elements-checkbox--docs#accessibility",
              children: "Checkbox",
            }),
          }),
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.a, {
              href: "../?path=/docs/components-form-elements-datepicker--docs#accessibility",
              children: "DatePicker",
            }),
          }),
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.a, {
              href: "../?path=/docs/components-form-elements-multiselect--docs#accessibility",
              children: "MultiSelect",
            }),
          }),
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.a, {
              href: "../?path=/docs/components-form-elements-radio--docs#accessibility",
              children: "Radio",
            }),
          }),
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.a, {
              href: "../?path=/docs/components-form-elements-select--docs#accessibility",
              children: "Select",
            }),
          }),
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.a, {
              href: "../?path=/docs/components-form-elements-slider--docs#accessibility",
              children: "Slider",
            }),
          }),
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.a, {
              href: "../?path=/docs/components-form-elements-textinput--docs#accessibility",
              children: "TextInput",
            }),
          }),
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.a, {
              href: "../?path=/docs/components-form-elements-toggle--docs#accessibility",
              children: "Toggle",
            }),
          }),
          `
`,
        ],
      }),
      `
`,
      e.jsx(n.h2, {
        id: "filterbarpopup-heading",
        children: "FilterBarPopup Heading",
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "FilterBarPopup" }),
          ` component will always render a heading using the default
"Filters" label value. The default label value can be overridden using the
`,
          e.jsx(n.code, { children: "heading" }),
          " prop. By default, when a string is passed to the ",
          e.jsx(n.code, { children: "heading" }),
          ` prop, the
`,
          e.jsx(n.code, { children: "FilterBarPopup" }),
          " component will render an ",
          e.jsx(n.code, { children: "h2" }),
          " element sized as an ",
          e.jsx(n.code, { children: "heading5" }),
          `
heading. If this causes accessibility issues in your app, you can set a
custom heading by passing in a DS `,
          e.jsx(n.code, { children: "Heading" }),
          " component.",
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "In the following examples, the ",
          e.jsx(n.code, { children: "FilterBarPopup" }),
          " component will render custom ",
          e.jsx(n.code, { children: "h3" }),
          `
and `,
          e.jsx(n.code, { children: "h5" }),
          ` elements. Note that no matter what heading level is set, the size will
always be set to `,
          e.jsx(n.code, { children: "heading5" }),
          " internally by the ",
          e.jsx(n.code, { children: "FilterBarPopup" }),
          " component.",
        ],
      }),
      `
`,
      e.jsx(t, {
        code: `
const customH3 = <Heading level="h3">Custom H3 Heading</Heading>;
const customH5 = <Heading level="h5">Custom H5 Heading</Heading>;
<FilterBarPopup heading={customH3} {...props} />
<FilterBarPopup heading={customH5} {...props} />
`,
        language: "tsx",
      }),
      `
`,
      e.jsx(o, { of: x }),
      `
`,
      e.jsx(n.h2, { id: "passing-children", children: "Passing Children" }),
      `
`,
      e.jsx(o, { of: j }),
      `
`,
      e.jsxs(n.p, {
        children: [
          `In order to control the styling and props passed to children form elements,
the `,
          e.jsx(n.code, { children: "FilterBarPopup" }),
          " component accepts ",
          e.jsx(n.code, { children: "CheckboxGroup" }),
          ", ",
          e.jsx(n.code, { children: "MultiSelectGroup" }),
          `,
`,
          e.jsx(n.code, { children: "RadioGroup" }),
          ", ",
          e.jsx(n.code, { children: "Checkbox" }),
          ", ",
          e.jsx(n.code, { children: "DatePicker" }),
          ", ",
          e.jsx(n.code, { children: "MultiSelect" }),
          ", ",
          e.jsx(n.code, { children: "Radio" }),
          ", ",
          e.jsx(n.code, { children: "Select" }),
          `,
`,
          e.jsx(n.code, { children: "Slider" }),
          ", ",
          e.jsx(n.code, { children: "TextInput" }),
          ", and ",
          e.jsx(n.code, { children: "Toggle" }),
          " children through its ",
          e.jsx(n.code, { children: "renderChildren" }),
          ` render
prop function.`,
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          `This callback prop function returns an object argument with three properties:
`,
          e.jsx(n.code, { children: "isBlockElement" }),
          ", ",
          e.jsx(n.code, { children: "layout" }),
          ", and ",
          e.jsx(n.code, { children: "width" }),
          ".",
        ],
      }),
      `
`,
      e.jsxs(n.ul, {
        children: [
          `
`,
          e.jsxs(n.li, {
            children: [
              "The ",
              e.jsx(n.code, { children: "isBlockElement" }),
              " argument value should be passed to the ",
              e.jsx(n.code, { children: "isBlockElement" }),
              `
prop of `,
              e.jsx(n.code, { children: "MultiSelect" }),
              " children.",
            ],
          }),
          `
`,
          e.jsxs(n.li, {
            children: [
              "The ",
              e.jsx(n.code, { children: "layout" }),
              " argument value should be passed to the ",
              e.jsx(n.code, { children: "layout" }),
              ` prop of
`,
              e.jsx(n.code, { children: "CheckboxGroup" }),
              ", ",
              e.jsx(n.code, { children: "MultiSelectGroup" }),
              ", and ",
              e.jsx(n.code, { children: "RadioGroup" }),
              " children.",
            ],
          }),
          `
`,
          e.jsxs(n.li, {
            children: [
              "The ",
              e.jsx(n.code, { children: "width" }),
              " argument value should be passed to the ",
              e.jsx(n.code, { children: "multiSelectWidth" }),
              ` prop of
`,
              e.jsx(n.code, { children: "MultiSelectGroup" }),
              " children and the ",
              e.jsx(n.code, { children: "width" }),
              " prop of ",
              e.jsx(n.code, { children: "MultiSelect" }),
              " children.",
            ],
          }),
          `
`,
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "Here is an example of the shape of ",
          e.jsx(n.code, { children: "FilterBarPopup" }),
          ":",
        ],
      }),
      `
`,
      e.jsx(t, {
        code: `
<FilterBarPopup
id="..."
heading="..."
renderChildren={({ isBlockElement, layout, width }) => {
  return (...)
}}
/>
`,
        language: "jsx",
      }),
      `
`,
      e.jsx(n.h2, {
        id: "controlling-state-using-selecteditems-onclear-and-onsubmit-props",
        children:
          "Controlling State Using selectedItems, onClear, and onSubmit Props",
      }),
      `
`,
      e.jsx(n.h3, { id: "selecteditems", children: "selectedItems" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "FilterBarPopup" }),
          ` component does not store its state internally. It expects
a `,
          e.jsx(n.code, { children: "selectedItems" }),
          ` prop whose value is an array of selected values of the filter
children.`,
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          `To control each of the child form elements, you must pass the appropriate
`,
          e.jsx(n.code, { children: "onChange" }),
          " and ",
          e.jsx(n.code, { children: "value" }),
          ` props to them. Find documentation on how to do this on each
individual component page.`,
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          e.jsx(n.code, { children: "useMultiSelect" }),
          ` is an optional but recommended hook for cases where managing
the state of the component in the consuming app is less of a concern and general
ease of use is prefered. Find the full documentation under
`,
          e.jsx(n.a, {
            href: "../?path=/docs/hooks-usemultiselect--docs",
            children: "useMultiSelect",
          }),
        ],
      }),
      `
`,
      e.jsx(t, {
        code: `
const { onChange, onMixedStateChange, selectedItems, onClear, onClearAll } = useMultiSelect();
const [selectedCheckbox, setSelectedCheckbox] = useState([]);
const [textValue, setTextValue] = useState("");
const [selectedFilterItems, setSelectedFilterItems] = useState([
selectedItems,
selectedCheckbox,
textValue,
]);
useEffect(() => {
setSelectedFilterItems([selectedItems, selectedCheckbox, textValue]);
}, [selectedItems, selectedCheckbox, textValue]);
`,
        language: "jsx",
      }),
      `
`,
      e.jsx(n.h3, { id: "onclear", children: "onClear" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "Clear all filters" }),
          " button will only be visible when the ",
          e.jsx(n.code, { children: "onClear" }),
          " prop is passed.",
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "onClear" }),
          " handler will be called when the ",
          e.jsx(n.code, { children: "Clear all filters" }),
          " button is clicked.",
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "It is expected that the ",
          e.jsx(n.code, { children: "onClear" }),
          ` handler will clear all of the current values from the
child form elements and restore the associated search results list to an unfiltered
state. Consuming apps are responsible for handling the logic and subsequent UI
updates expected when the `,
          e.jsx(n.code, { children: "onClear" }),
          " handler is called.",
        ],
      }),
      `
`,
      e.jsx(t, {
        code: `
const onClearFilterBar = () => {
onClearAll();
setSelectedCheckbox([]);
setTextValue("");
};`,
        language: "jsx",
      }),
      `
`,
      e.jsx(n.h3, { id: "onsubmit", children: "onSubmit" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "onSubmit" }),
          " handler will be called when the ",
          e.jsx(n.code, { children: "Show results" }),
          " button is clicked.",
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "It is expected that the ",
          e.jsx(n.code, { children: "onSubmit" }),
          ` handler will read the current values from the
child form elements (the filters) and update the associated search results list
based on those values. Consuming apps are responsible for handling the logic
and subsequent UI updates expected when the `,
          e.jsx(n.code, { children: "onSubmit" }),
          " handler is called.",
        ],
      }),
      `
`,
      e.jsx(n.p, {
        children: `To have better readability of the code it is recommended to separate nested render
prop functions:`,
      }),
      `
`,
      e.jsx(t, {
        code: `
// function for renderMultiSelect prop of MultiSelectGroup 
const renderMultiSelect = ({ isBlockElement, multiSelectWidth }) => {
return (
  shortMultiSelectItems &&
  shortMultiSelectItems.map((multiSelect) => (
    <MultiSelect
      buttonText={multiSelect.name}
      key={multiSelect.id}
      id={multiSelect.id}
      items={multiSelect.items}
      selectedItems={selectedItems}
      isBlockElement={isBlockElement}
      onChange={(e) => onChange(e.target.id, multiSelect.id)}
      onMixedStateChange={(e) => {
        return onMixedStateChange(e.target.id, multiSelect.id, multiSelect.items);
      }}
      onClear={() => onClear(multiSelect.id)}
      width={multiSelectWidth}
    />
  )) 
); 
};`,
        language: "jsx",
      }),
      `
`,
      e.jsx(t, {
        code: `
// function for renderChildren prop of FilterBar 
const renderFilterComponents = ({ layout, width }) => {
return (
  <>
    <MultiSelectGroup
      id="multiselect-group"
      labelText="MultiSelect Group"
      layout={layout}
      multiSelectWidth={width}
      renderMultiSelect={renderMultiSelect}
    />
    <CheckboxGroup
      id="checkbox-example"
      labelText="Checkbox Group"
      name="checkboxExample"
      layout={layout}
      value={selectedCheckbox}
      onChange={(e) => {
        setSelectedCheckbox(e);
      }}
    >
      <Checkbox id="checkbox-1" value="1" labelText="Checkbox 1" />
      <Checkbox id="checkbox-2" value="2" labelText="Checkbox 2" />
    </CheckboxGroup>
    <TextInput
      id="textinput-example"
      isClearable
      isClearableCallback={() => setTextValue("")}
      labelText="What is your favorite color?"
      onChange={(e) => setTextValue(e.target.value)}
      placeholder="i.e. blue, green, etc."
      value={textValue}
    />
  </>
); 
};
`,
        language: "jsx",
      }),
      `
`,
      e.jsx(t, {
        code: `
return (
<FilterBarPopup
  id={args.id}
  heading={args.heading}
  onClear={onClearFilterBar}
  onSubmit={() => console.log(selectedFilterItems)}
  selectedItems={selectedFilterItems}
  renderChildren={renderFilterComponents}
/>
); `,
        language: "jsx",
      }),
      `
`,
      e.jsx(n.h2, {
        id: "totalresults-example",
        children: "totalResults example",
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "totalResults" }),
          ` prop should be used if the consuming app is utilizing real-time
filtering. If the `,
          e.jsx(n.code, { children: "totalResults" }),
          ` prop is passed, its value will be used as part of
the label text for the `,
          e.jsx(n.code, { children: "Show results" }),
          ` button (ex. "Show 72 results" where 72 is the
value of the totalResults prop). This value should be updated as filter options are
selected or changed.`,
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The example below is not fully functioning and is meant to show how the ",
          e.jsx(n.code, { children: "totalResults" }),
          `
prop is shown to users in the `,
          e.jsx(n.code, { children: "Show results" }),
          " button.",
        ],
      }),
      `
`,
      e.jsx(o, { of: m }),
      `
`,
      e.jsx(t, {
        code: `
const [selectedCheckbox, setSelectedCheckbox] = useState([]);
const [textValue, setTextValue] = useState("");
const [totalResults, setTotalResults] = useState(100);
const [selectedFilterItems, setSelectedFilterItems] = useState([
selectedCheckbox,
textValue,
]);

const updateTotalResults = () => {
// function to update totalResults value on filter change
};

...

<FilterBarPopup
id="..."
heading="..."
onClear={...}
renderChildren={({ isBlockElement, layout, width }) => {
  return (...)
}}
totalResults={totalResults}
/>
`,
        language: "jsx",
      }),
      `
`,
      e.jsx(n.h2, {
        id: "usefilterbarpopup-hook",
        children: "useFilterBarPopup hook",
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "useFilterBarPopup" }),
          " hook provides programmatic control for the ",
          e.jsx(n.code, { children: "FilterBarPopup" }),
          ` component
and allows consuming apps to open the modal overlay using a custom button or methods other than
a standard button click. Instead of importing the `,
          e.jsx(n.code, { children: "FilterBarPopup" }),
          ` component directly, use
the `,
          e.jsx(n.code, { children: "useFilterBarPopup" }),
          " hook to get the ",
          e.jsx(n.code, { children: "FilterBarPopup" }),
          " component and helper functions.",
        ],
      }),
      `
`,
      e.jsx(t, {
        code: `
import { useFilterBarPopup } from "@nypl/design-system-react-components";
`,
        language: "jsx",
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "This hook will return an object with the ",
          e.jsx(n.code, { children: "FilterBarPopup" }),
          " component, a boolean value, and two functions.",
        ],
      }),
      `
`,
      e.jsx(t, {
        code: `
const { FilterBarPopup, isOpen, onClose, onOpen } = useFilterBarPopup();
`,
        language: "jsx",
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "FilterBarPopup" }),
          " component is the same as the one imported directly, the ",
          e.jsx(n.code, { children: "isOpen" }),
          " value, and ",
          e.jsx(n.code, { children: "onClose" }),
          `
and `,
          e.jsx(n.code, { children: "onOpen" }),
          ` functions are exposed and available to the consuming application. The only function that will
be used directly is the `,
          e.jsx(n.code, { children: "onOpen" }),
          " function. Pass ",
          e.jsx(n.code, { children: "isOpen" }),
          " and ",
          e.jsx(n.code, { children: "onClose" }),
          " to the ",
          e.jsx(n.code, { children: "FilterBarPopup" }),
          ".",
        ],
      }),
      `
`,
      e.jsx(t, {
        code: `
const { onOpen, isOpen, onClose, FilterBarPopup } = useFilterBarPopup();
// ...
<FilterBarPopup
isOpen={isOpen}
onClose={onClose}
onOpen={onOpen}
{...otherProps}
/>
`,
        language: "jsx",
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "onOpen" }),
          " function can be used to programmatically open the ",
          e.jsx(n.code, { children: "FilterBarPopup" }),
          ` component through another
element or behavior in the consuming app. See the example below that uses a custom `,
          e.jsx(n.code, { children: "Button" }),
          " to open the ",
          e.jsx(n.code, { children: "Modal" }),
          `.
The existing button that is rendered by the `,
          e.jsx(n.code, { children: "FilterBarPopup" }),
          " component will still work as expected.",
        ],
      }),
      `
`,
      e.jsx(t, {
        code: `
import { useFilterBarPopup } from "@nypl/design-system-react-components";
// ...
const MyComponent = () => {
const { onOpen, isOpen, onClose, FilterBarPopup } = useFilterBarPopup();
// ...
return (
  <>
    <Button id="open-filter-bar-popup" onClick={onOpen}>
      Manually Open FilterBarPopup
    </Button>
    <FilterBarPopup
      isOpen={isOpen}
      onClose={onClose}
      onOpen={onOpen}
      {...otherProps}
    />
  </>
);
}; `,
        language: "jsx",
      }),
      `
`,
      e.jsx(n.h2, { id: "changelog", children: "Changelog" }),
      `
`,
      e.jsx(u, { changelogData: g }),
    ],
  });
}
function y(s = {}) {
  const { wrapper: n } = { ...d(), ...s.components };
  return n ? e.jsx(n, { ...s, children: e.jsx(c, { ...s }) }) : c(s);
}
export { y as default };
