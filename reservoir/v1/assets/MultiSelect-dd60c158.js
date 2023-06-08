import{j as t,a as i,F as p}from"./jsx-runtime-09ad29cb.js";import{M as u,D as f,C as r,A as s,b as l}from"./index-42243e0e.js";import{M as c,L as a,D as d}from"./MultiSelect.stories-5c925d92.js";import{L as n}from"./Link-0ed02cf7.js";import{u as m}from"./index-a14fc4fc.js";import"./index-f2bd0723.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-b32021bd.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-86fba1ca.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-22f77b05.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-944fe3e7.js";import"./index-0a26bc51.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-b629ee11.js";import"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import"./chakra-ui-layout.esm-b2fa9d31.js";import"./chunk-OPEUWD42-a3b45fd8.js";import"./index-6148c31a.js";import"./MultiSelect-e1506487.js";import"./chakra-ui-focus-lock.esm-eb172e6c.js";import"./index-fb519959.js";import"./defineProperty-f749b14d.js";import"./index-58d3fd43.js";import"./Checkbox-ac4cd2b8.js";import"./ComponentWrapper-82a15cf7.js";import"./Heading-2ec2ea62.js";import"./Text-eabcdc0a.js";import"./utils-acca7d12.js";import"./chakra-ui-checkbox.esm-6eb4bb1a.js";import"./chakra-ui-hooks.esm-02e82f78.js";import"./chakra-ui-form-control.esm-c23b95fa.js";import"./chakra-ui-visually-hidden.esm-1c1b3639.js";import"./Icon-6616a4b9.js";import"./Button-a3ea41e0.js";import"./ButtonGroup-3ea9dbd7.js";import"./useNYPLBreakpoints-91c0faa1.js";import"./useMultiSelect-de2913cb.js";function h(o){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",h3:"h3",a:"a",em:"em"},m(),o.components);return i(p,{children:[t(u,{of:c}),`
`,t(e.h1,{id:"multiselect",children:"MultiSelect"}),`
`,i(e.table,{children:[t(e.thead,{children:i(e.tr,{children:[t(e.th,{children:"Component Version"}),t(e.th,{children:"DS Version"})]})}),i(e.tbody,{children:[i(e.tr,{children:[t(e.td,{children:"Added"}),t(e.td,{children:t(e.code,{children:"1.4.0"})})]}),i(e.tr,{children:[t(e.td,{children:"Latest"}),t(e.td,{children:t(e.code,{children:"1.5.0"})})]})]})]}),`
`,t(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[`
`,t(n,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,i(e.li,{children:[`
`,t(n,{href:"#component-props-multiselect-listbox",target:"_self",children:"Component Props for MultiSelect Listbox"}),`
`]}),`
`,i(e.li,{children:[`
`,t(n,{href:"#component-props-multiselect-dialog",target:"_self",children:"Component Props for MultiSelect Dialog"}),`
`]}),`
`,i(e.li,{children:[`
`,t(n,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,i(e.li,{children:[`
`,t(n,{href:"#using-the-items-prop",target:"_self",children:"Using the items prop"}),`
`]}),`
`,i(e.li,{children:[`
`,t(n,{href:"#controlling-state-using-selecteditems-and-onchange-prop",target:"_self",children:"Controlling state using selectedItems and onChange prop"}),`
`]}),`
`,i(e.li,{children:[`
`,t(n,{href:"#multiselect-nextjs-routing-implementation",target:"_self",children:"MultiSelect NextJS routing implementation"}),`
`]}),`
`,i(e.li,{children:[`
`,t(n,{href:"#usemultiselect-hook",target:"_self",children:"useMultiSelect hook"}),`
`]}),`
`]}),`
`,t(e.h2,{id:"overview",children:"Overview"}),`
`,t(f,{of:c}),`
`,t(e.h2,{id:"component-props-for-multiselect-listbox",children:"Component Props for MultiSelect Listbox"}),`
`,i(e.p,{children:["The ",t(e.code,{children:"MultiSelect"})," listbox renders a non-hierarchical list of items to select from."]}),`
`,t(r,{of:a}),`
`,t(s,{of:a}),`
`,t(e.h2,{id:"component-props-for-multiselect-dialog",children:"Component Props for MultiSelect Dialog"}),`
`,i(e.p,{children:["The ",t(e.code,{children:"MultiSelect"}),` dialog allows for an optional set of child checkboxes to be
passed, which makes the “parent” checkbox function as a check/uncheck all toggle.
If all of the children checkboxes are checked, the parent `,t(e.code,{children:"isChecked"}),` prop will
be true. If only some of the child checkboxes are checked, the parent checkbox
will have a `,t(e.code,{children:"isIndeterminate"}),` prop set to true, implying that it is not checked
or unchecked.`]}),`
`,t(r,{of:d}),`
`,t(s,{of:d}),`
`,t(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,t(e.h3,{id:"listbox",children:"ListBox"}),`
`,i(e.p,{children:["The ",t(e.code,{children:"MultiSelect"})," ",t(e.code,{children:"listbox"})," leverages ",t(e.code,{children:"downshift.js"}),` to assist with
accessibility compliance. By using Downshift's `,t(e.code,{children:"useSelect"}),` hook and prop getters
`,t(e.code,{children:"getToggleButtonProps"}),", ",t(e.code,{children:"getMenuProps"}),", ",t(e.code,{children:"getItemProps"}),` we are able to create a W3
WAI-ARIA compliant listbox that behaves like a select element. Up and down arrow
keys are used for navigating through the `,t(e.code,{children:"MultiSelect"})," options."]}),`
`,t(e.h3,{id:"dialog",children:"Dialog"}),`
`,i(e.p,{children:["The ",t(e.code,{children:"MultiSelect"})," ",t(e.code,{children:"dialog"})," looks similar to the ",t(e.code,{children:"MultiSelect"})," ",t(e.code,{children:"listbox"}),`, but because
of its “clear” and “apply” buttons, it has some key functionality differences,
and accessibility must be handled differently. When the `,t(e.code,{children:"MultiSelect"}),` is open,
focus is trapped inside the dropdown menu, and the tab key is used to move through
the checkboxes and buttons inside the dialog modal. The focus trap is performed
through Chakra's `,t(e.code,{children:"@chakra-ui/focus-lock"})," package which uses the ",t(e.code,{children:"react-focus-lock"}),`
package under the hood.`]}),`
`,i(e.p,{children:["NOTE: The ",t(e.code,{children:"react-focus-lock"}),` package renders two "focus guard" elements and one
has a `,t(e.code,{children:"tabindex"})," set to ",t(e.code,{children:"1"}),`, in order to perform the focus trap behavior. The
Storybook accessibility checker `,t(e.a,{href:"https://dequeuniversity.com/rules/axe/4.4/tabindex?application=axeAPI",target:"_blank",rel:"nofollow noopener noreferrer",children:"complains"}),`
about this whenever the "dialog" type is opened.`]}),`
`,i(e.p,{children:[`While this is an accessibility issue, we explicitly want the focus trap behavior
within the `,t(e.code,{children:"MultiSelect"}),`. Once the component is closed, the issue goes away. For
the moment, we will continue to use Chakra's implementation of the `,t(e.code,{children:"react-focus-lock"}),`
package.`]}),`
`,t(e.h3,{id:"selected-items-count-button",children:"Selected Items Count Button"}),`
`,i(e.p,{children:["When items are selected in a ",t(e.code,{children:"MultiSelect"}),`, a button with the count of the selected
items will display above the main `,t(e.code,{children:"MultiSelect"}),` button. This count button is
rendered `,t(e.em,{children:"after"}),` the main button but visualy displays above the main button. This
is performed to prevent the accessibility issue where nested interactive control
elements are not properly accessible by screen readers.`]}),`
`,t(e.p,{children:"Resources:"}),`
`,i(e.ul,{children:[`
`,t(e.li,{children:t(e.a,{href:"https://www.downshift-js.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"downshift.js documentation"})}),`
`,t(e.li,{children:t(e.a,{href:"../?path=/docs/components-form-elements-checkbox--docs#accessibility",children:"Reservoir Checkbox Component"})}),`
`,t(e.li,{children:t(e.a,{href:"https://www.w3.org/TR/2017/WD-wai-aria-practices-1.1-20170628/examples/listbox/listbox.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C WAI Listbox Example"})}),`
`,t(e.li,{children:t(e.a,{href:"https://www.w3.org/WAI/GL/wiki/Using_ARIA_role%3Ddialog_to_implement_a_modal_dialog_box",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C WAI on using ARIA role=dialog"})}),`
`,t(e.li,{children:t(e.a,{href:"https://www.npmjs.com/package/@chakra-ui/focus-lock",target:"_blank",rel:"nofollow noopener noreferrer",children:"Chakra focus-lock npm"})}),`
`,t(e.li,{children:t(e.a,{href:"https://www.npmjs.com/package/react-focus-lock",target:"_blank",rel:"nofollow noopener noreferrer",children:"react-focus-lock npm"})}),`
`,t(e.li,{children:t(e.a,{href:"https://dequeuniversity.com/rules/axe/4.4/nested-interactive",target:"_blank",rel:"nofollow noopener noreferrer",children:"Deque University - Nested interactive controls are not announced by screen readers"})}),`
`]}),`
`,t(e.h2,{id:"using-the-items-prop",children:"Using the items prop"}),`
`,t(e.p,{children:`The options rendered in the MultiSelect are passed into the component's items prop.
The expected data structure is an array of objects, in the following format:`}),`
`,t(l,{code:`
<MultiSelect
  id="subject"
  labelText="Subject Specialities"
  type="listbox"
  items={[
    {
      id: "art",
      name: "Art",
    },
    {
      id: "architecture",
      name: "Architecture",
    },
    {
      id: "art_history",
      name: "Art History",
    },
  ]}
/>
`,language:"jsx"}),`
`,i(e.p,{children:["If you are using ",t(e.code,{children:"type = 'dialog'"}),`, you can also add a second level of child
items, in the following format:`]}),`
`,t(l,{code:`
<MultiSelect
  id="subject"
  labelText="Subject Specialities"
  type="dialog"
  items={[
    {
      id: "art",
      name: "Art",
    },
    {
      id: "parent_option",
      name: "Parent option",
      children: [
        {
          id: "child_1",
          name: "Child 1",
        },
        {
          id: "child_2",
          name: "Child 2",
        },
      ],
    },
  ]}
/>
`,language:"jsx"}),`
`,t(e.h2,{id:"controlling-state-using-selecteditems-and-onchange-prop",children:"Controlling state using selectedItems and onChange prop"}),`
`,i(e.p,{children:[`The MultiSelect does not store its state internally. It expects a selectedItems
prop whose value follows a certain data structure that is "normalized". This is
used for calculating the selected item count. The value is an object with a key
of the MultiSelect's id value set to an object with an "items" key. The "items"
value is an array of the selected items. Below is an exaple of the expected
state shape of `,t(e.code,{children:"selectedItems"}),":"]}),`
`,t(l,{code:`
{
  "subjects": {
    "items": ["art", "architecture"]
  }
}
`,language:"json"}),`
`,t(e.h2,{id:"multiselect-nextjs-routing-implementation",children:"MultiSelect NextJS routing implementation"}),`
`,t(e.p,{children:`This is helpful for when several MultiSelect components are rendered inside a
FilterBar component, you can use the MultiSelect id to get items for a specific
slice of the state.`}),`
`,t(l,{code:`
// The selectedItems structure with multiple MultiSelect components
{
  subjects: {
    items:["art", "architecture"]
    },
    locations: {
      items: ["sasb"]
    }
  }
// Getting the selectedItems for a specific MultiSelect
const subjectsSelectedItemssOnly = selectedItems["subjects"].items;
const locationsSelectedItemssOnly = selectedItems["locations"].items;
`,language:"jsx"}),`
`,t(e.p,{children:`It's also helpful if a consuming app is pushing state into the browser's url.
This example uses NextJS's router push method to add query parameters to url.`}),`
`,t(l,{code:`
const multiSelectId = "subjects";
// This wouldn't be a const in real world code, but for display purposes here
// to show the state object more clearly.
const mockStateObject = {
  subjects: {
    items: ["art", "architecture"],
  },
  locations: {
    items: ["sasb"],
  },
};
// ...
// Will push ?subjects=art,architecture into browser url.
router.push({
  query: {
    [multiSelectId]: selectedItems[multiSelectId].items.join(" "),
  },
});
`,language:"jsx"}),`
`,i(e.p,{children:["This is an example with a handleChange function to manage the ",t(e.code,{children:"selectedItems"}),`
state, without mutating it.`]}),`
`,t(l,{code:`
import React, { useState } from "react";
import { MultiSelect } from "@nypl/design-system-react-components";
// ...
function MultiSelectControlledExample() {
  const [selectedItems, setSelectedItems] = useState({});
  function handleChange(itemId: string, multiSelectId: string) {
    let itemIds;
    // Check if the id already exists in the state
    if (selectedItems[multiSelectId] !== undefined) {
      let itemIdExists =
        selectedItems[multiSelectId].items.indexOf(itemId) > -1;
      // Make a copy of the existing array.
      itemIds = selectedItems[multiSelectId].items.slice();
      // If itemId exists, remove it from the array.
      if (itemIdExists) {
        itemIds = itemIds.filter((id) => id != itemId);
      } else {
        // Add it to the array, but modify the copy, not the original.
        itemIds.push(itemId);
      }
    } else {
      itemIds = [];
      itemIds.push(itemId);
    }
    setSelectedItems({
      ...selectedItems,
      [multiSelectId]: {
        items: itemIds,
      },
    });
  }
  return (
    <MultiSelect
      id="subjects"
      labelText="Subjects"
      items={items}
      type="listbox"
      selectedItems={selectedItems}
      onChange={(selectedItem) => {
        handleChange(selectedItem.id, "subjects");
      }}
    />
  );
}
export default MultiSelectControlledExample;
`,language:"jsx"}),`
`,t(e.h2,{id:"usemultiselect-hook",children:"useMultiSelect hook"}),`
`,i(e.p,{children:[t(e.code,{children:"useMultiSelect"}),` is an optional hook provided by the component, for
cases where managing the state of the component in the consuming app is less
of a concern and general ease of use is prefered.`]}),`
`,i(e.p,{children:[`The hook returns an object containing all the props and state needed to handle
the selectedItems. That includes the functions `,t(e.code,{children:"onChange"}),", ",t(e.code,{children:"onClear"}),`,
`,t(e.code,{children:"onMixedStateChange"}),` for handling any changes to the selection of items and the
current state of the selection: `,t(e.code,{children:"selectedItems"}),"."]}),`
`,i(e.p,{children:["Find the full documentation under ",t(e.a,{href:"../?path=/docs/hooks-usemultiselect--docs",children:"useMultiSelect"}),"."]})]})}function le(o={}){const{wrapper:e}=Object.assign({},m(),o.components);return e?t(e,Object.assign({},o,{children:t(h,o)})):h(o)}export{le as default};
//# sourceMappingURL=MultiSelect-dd60c158.js.map
