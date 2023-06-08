import{j as t,a as l,F as d}from"./jsx-runtime-09ad29cb.js";import{M as s,b as n}from"./index-5d3bb37f.js";import{u as c}from"./index-a14fc4fc.js";import"./index-f2bd0723.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-359c5387.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-86fba1ca.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-22f77b05.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-944fe3e7.js";import"./index-0a26bc51.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-b629ee11.js";function o(i){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",p:"p",a:"a",h2:"h2"},c(),i.components);return l(d,{children:[t(s,{title:"Hooks/useMultiSelect"}),`
`,t(e.h1,{id:"usemultiselect",children:"useMultiSelect"}),`
`,l(e.table,{children:[t(e.thead,{children:l(e.tr,{children:[t(e.th,{children:"Hook Version"}),t(e.th,{children:"DS Version"})]})}),l(e.tbody,{children:[l(e.tr,{children:[t(e.td,{children:"Added"}),t(e.td,{children:t(e.code,{children:"1.4.0"})})]}),l(e.tr,{children:[t(e.td,{children:"Latest"}),t(e.td,{children:t(e.code,{children:"1.4.0"})})]})]})]}),`
`,l(e.p,{children:["This custom hook, inspired by ",t(e.a,{href:"https://www.downshift-js.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"downshift.js"}),`,
exposes functions used for MultiSelect components. `,t(e.code,{children:"useMultiSelect"}),` provides all functions needed to handle the selectedItems. This hook can be used for
cases where managing the state of the component in the consuming app is less of a concern and general ease of use is prefered.`]}),`
`,l(e.p,{children:["The two main functions are ",t(e.code,{children:"onChange"})," and ",t(e.code,{children:"onMixedStateChange"})," used for handling the selectedItems object. The functions ",t(e.code,{children:"onClear"})," and ",t(e.code,{children:"onClearAll"}),`
can be used to clear the selectedItems of a specific `,t(e.code,{children:"MultiSelect"})," component or all ",t(e.code,{children:"MultiSelect"}),"s/ a ",t(e.code,{children:"MultiSelectGroup"}),` connected to the hook.
The hook also provides the `,t(e.code,{children:"selectedItems"})," object containing the currently checked/selected items and a ",t(e.code,{children:"setSelectedItems"}),`
function to set or manipulate the state of `,t(e.code,{children:"selectedItems"}),". If using ",t(e.code,{children:"setSelectedItems"}),", check that the correct data structure is passed into ",t(e.code,{children:"setSelectedItems"}),"."]}),`
`,t(e.h2,{id:"usage",children:"Usage"}),`
`,l(e.p,{children:["For a full implementation example with a single ",t(e.code,{children:"MultiSelect"})," component, view the ",t(e.a,{href:"https://github.com/NYPL/nypl-design-system/blob/development/src/components/MultiSelect/MultiSelectListbox.tsx",target:"_blank",rel:"nofollow noopener noreferrer",children:"MultiSelectListbox component"})," or ",t(e.a,{href:"https://github.com/NYPL/nypl-design-system/blob/development/src/components/MultiSelect/MultiSelectDialog.tsx",target:"_blank",rel:"nofollow noopener noreferrer",children:"MultiSelectDialog component"}),`.
For an implementation with a `,t(e.code,{children:"MultiSelectGroup"}),", view ",t(e.a,{href:"https://github.com/NYPL/nypl-design-system/blob/development/src/components/MultiSelectGroup/MultiSelectGroup.tsx",target:"_blank",rel:"nofollow noopener noreferrer",children:"MultiSelectGroup component"}),"."]}),`
`,t(n,{code:`
const {
  onChange,
  onMixedStateChange,
  onClear,
  onClearAll,
  selectedItems,
  setSelectedItems,
} = useMultiSelect();
`,language:"jsx"}),`
`,t(e.h2,{id:"usemultiselect-hook-implementation-in-a-listbox-multiselect",children:"useMultiSelect Hook implementation in a listbox MultiSelect"}),`
`,l(e.p,{children:["The ",t(e.code,{children:"listbox"}),` variant can only display non hierarchical items.
When the `,t(e.code,{children:"useMultiSelect"})," hook is used within a ",t(e.code,{children:"listbox"})," MultiSelect, you will only need the ",t(e.code,{children:"onChange"})," and ",t(e.code,{children:"onClear"})," functions and the selectedItems state."]}),`
`,t(n,{code:`
import React from "react";
import {
  MultiSelect,
  useMultiSelect,
} from "@nypl/design-system-react-components";
// ...
export default function MultiSelectWithHookExample() {
  const multiSelectId = "multi-select-1";
  // Without this hook, you'd have to add handlers for onChange and onClear,
  // and also manage the selectedItems state yourself.
  const { onChange, onClear, selectedItems } = useMultiSelect();
  return (
    <MultiSelect
      id={multiSelectId}
      type="listbox"
      items={items}
      selectedItems={selectedItems}
      onChange={(selectedItem) => onChange(selectedItem.id, multiSelectId)}
      onClear={() => {
        onClear(multiSelectId);
      }}
    />
  );
}
`,language:"jsx"}),`
`,t(e.h2,{id:"usemultiselect-hook-implementation-in-a-dialog-multiselect",children:"useMultiSelect Hook implementation in a dialog MultiSelect"}),`
`,l(e.p,{children:["The ",t(e.code,{children:"dialog"}),`variant can display nested items.
When the `,t(e.code,{children:"useMultiSelect"})," hook is used within a ",t(e.code,{children:"dialog"})," MultiSelect, additional to the selectedItems and the ",t(e.code,{children:"onChange"})," and ",t(e.code,{children:"onClear"}),` functions, you will need
a `,t(e.code,{children:"onMixedStateChange"})," function. It is also provided by the hook and handles the state change of parent items."]}),`
`,t(n,{code:`
import React from "react";
import {
  MultiSelect,
  useMultiSelect,
} from "@nypl/design-system-react-components";
// ...
export default function MultiSelectWithHookExample() {
  const multiSelectId = "multi-select-1";
  // Without this hook, you'd have to add handlers for onChange, onMixedStateChange and onClear,
  // and also manage the selectedItems state yourself.
  const { onChange, onMixedStateChange, onClear, selectedItems } =
    useMultiSelect();
  return (
    <MultiSelect
      id={multiSelectId}
      items={items}
      selectedItems={selectedItems}
      onChange={(e) => onChange(e.target.id, multiSelectId)}
      onMixedStateChange={(e) =>
        onMixedStateChange(e.target.id, multiSelectId, items)
      }
      onClear={() => {
        onClear(multiSelectId);
      }}
      type="dialog"
    />
  );
}
`,language:"jsx"}),`
`,t(e.h2,{id:"usemultiselect-hook-implementation-in-a-multiselectgroup",children:"useMultiSelect Hook implementation in a MultiSelectGroup"}),`
`,l(e.p,{children:["The data structure used to render two ",t(e.code,{children:"MultiSelect"})," components in the following ",t(e.code,{children:"MultiSelectGroup"})," example:"]}),`
`,t(n,{code:`
const multiSelectItems = [
  {
    id: "pets",
    name: "Pets",
    items: [
      { id: "cat", name: "Cat" },
      {
        id: "dog",
        name: "Dog",
        children: [
          { id: "corgy", name: "Corgy" },
          { id: "german-sheperd", name: "German Sheperd" },
          { id: "afghan-hound", name: "Afghan Hound" },
        ],
      },
      { id: "rat", name: "Rat" },
    ],
  },
  {
    id: "tools",
    name: "Tools",
    items: [
      { id: "hammer", name: "Hammer" },
      {
        id: "screwdriver",
        name: "Screwdriver",
        children: [
          { id: "slottet", name: "Slotted Screwdriver" },
          { id: "phillips", name: "Phillips Screwdriver" },
          { id: "allen", name: "Allen Screwdriver" },
        ],
      },
      { id: "whisk", name: "Whisk" },
    ],
  },
];
`,language:"jsx"}),`
`,l(e.p,{children:["The implemntation of the ",t(e.code,{children:"useMultiSelect"})," hook together with the ",t(e.code,{children:"MultiSelectGroup"})," component."]}),`
`,t(n,{code:`
import React from "react";
import {
  MultiSelect,
  MultiSelectGroup,
  useMultiSelect,
} from "@nypl/design-system-react-components";
// ...
export default function MultiSelectGroupWithHookExample() {
  const { onChange, onMixedStateChange, onClear, selectedItems } =
    useMultiSelect();
  return (
    <MultiSelectGroup id="multiselect-group" labelText="MultiSelect Group">
      {multiSelectItems &&
        multiSelectItems.map((multiSelect) => (
          <MultiSelect
            key={multiSelect.id}
            id={multiSelect.id}
            labelText={multiSelect.name}
            type="dialog"
            items={multiSelect.items}
            selectedItems={selectedItems}
            onChange={(e) => {
              onChange(e.target.id, multiSelect.id);
            }}
            onMixedStateChange={(e) =>
              onMixedStateChange(e.target.id, multiSelect.id, multiSelect.items)
            }
            onClear={() => {
              onClear(multiSelect.id);
            }}
            onApply={() => {}}
          />
        ))}
    </MultiSelectGroup>
  );
}
`,language:"jsx"}),`
`,t(e.h2,{id:"setselecteditems",children:"setSelectedItems"}),`
`,t(e.p,{children:"The data structure to pass the setSelectedItems function in order to set a inital state:"}),`
`,t(n,{code:`
// The selectedItems structur for one MultiSelect
const initialSelectedItems = {
  colors: {
    items: ["red"],
  },
};
`,language:"jsx"}),`
`,t(n,{code:`
// The selectedItems structur for setting state of multiple MultiSelects
const initialSelectedItems = {
  colors: {
    items: ["red"],
  },
  pets: {
    items: ["corgy", "german-sheperd"],
  },
};
`,language:"jsx"}),`
`,t(n,{code:`
import React from "react";
import {
  MultiSelect,
  MultiSelectGroup,
  useMultiSelect,
} from "@nypl/design-system-react-components";
// ...
export default function MultiSelectGroupWithHookExample() {
  const { onChange, onMixedStateChange, onClear, selectedItems, setSelectedItems } =
    useMultiSelect();
  React.useEffect(() => {
    setSelectedItems(initialSelectedItems)
  }, [])
  // ...
  return (
    <MultiSelectGroup id="multiselect-group" labelText="MultiSelect Group">
      {multiSelectItems &&
        multiSelectItems.map((multiSelect) => (
          <MultiSelect
            key={multiSelect.id}
            id={multiSelect.id}
            labelText={multiSelect.name}
            type="dialog"
            items={multiSelect.items}
            selectedItems={selectedItems}
            onChange={(e) => {
              onChange(e.target.id, multiSelect.id);
            }}
            onMixedStateChange={(e) =>
              onMixedStateChange(e.target.id, multiSelect.id, multiSelect.items)
            }
            onClear={() => {
              onClear(multiSelect.id);
            }}
            onApply={() => {}}
          />
        ))}
    </MultiSelectGroup>
  );
}
`,language:"jsx"})]})}function j(i={}){const{wrapper:e}=Object.assign({},c(),i.components);return e?t(e,Object.assign({},i,{children:t(o,i)})):o(i)}export{j as default};
//# sourceMappingURL=useMultiSelect-3769b124.js.map
