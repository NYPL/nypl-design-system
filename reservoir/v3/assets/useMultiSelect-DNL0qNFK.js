import{u as l,j as e,M as o,S as s}from"./iframe-CFLVJZOZ.js";function c(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Hooks/useMultiSelect"}),`
`,e.jsx(t.h1,{id:"usemultiselect",children:"useMultiSelect"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Hook Version"}),e.jsx(t.th,{children:"DS Version"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Added"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"1.4.0"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Latest"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"3.0.0"})})]})]})]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"useMultiSelect"}),` provides all functions needed to handle the selectedItems. This
hook can be used for cases where managing the state of the component in the
consuming app is less of a concern and general ease of use is preferred.`]}),`
`,e.jsxs(t.p,{children:["The two main functions are ",e.jsx(t.code,{children:"onChange"})," and ",e.jsx(t.code,{children:"onMixedStateChange"}),` used for handling
the selectedItems object and `,e.jsx(t.code,{children:"disabled"}),` state of items are not included in the
selectedItems. The function `,e.jsx(t.code,{children:"onClear"}),` can be used to clear the selectedItems of
a specific `,e.jsx(t.code,{children:"MultiSelect"}),` component connected to the hook. The hook also provides
the `,e.jsx(t.code,{children:"selectedItems"}),` object containing the currently checked/selected items and a
`,e.jsx(t.code,{children:"setSelectedItems"})," function to set or manipulate the state of ",e.jsx(t.code,{children:"selectedItems"}),`.
If using `,e.jsx(t.code,{children:"setSelectedItems"}),`, check that the correct data structure is passed
into `,e.jsx(t.code,{children:"setSelectedItems"}),"."]}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(t.p,{children:["For a full implementation example with a ",e.jsx(t.code,{children:"MultiSelect"}),` component, view the
`,e.jsx(t.a,{href:"https://github.com/NYPL/nypl-design-system/blob/development/src/components/MultiSelect/MultiSelect.tsx",rel:"nofollow",children:`MultiSelect
component`}),"."]}),`
`,e.jsx(s,{code:`
const {
onChange,
onMixedStateChange,
onClear,
selectedItems,
setSelectedItems,
} = useMultiSelect();
`,language:"jsx"}),`
`,e.jsx(t.h2,{id:"usemultiselect-hook-implementation-in-a-multiselect",children:"useMultiSelect Hook implementation in a MultiSelect"}),`
`,e.jsxs(t.p,{children:["The MultiSelect component can display nested items. When the ",e.jsx(t.code,{children:"useMultiSelect"}),`
hook is used within MultiSelect, additional to the selectedItems and the
`,e.jsx(t.code,{children:"onChange"})," and ",e.jsx(t.code,{children:"onClear"})," functions, you will need a ",e.jsx(t.code,{children:"onMixedStateChange"}),`
function. It is also provided by the hook and handles the state change of parent
items.`]}),`
`,e.jsx(s,{code:`
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
  />
);
}
`,language:"jsx"}),`
`,e.jsx(t.h2,{id:"setselecteditems",children:"setSelectedItems"}),`
`,e.jsx(t.p,{children:`The data structure to pass the setSelectedItems function in order to set a
inital state:`}),`
`,e.jsx(s,{code:`
// The selectedItems structur for one MultiSelect
const initialSelectedItems = {
colors: {
  items: ["red"],
},
};
`,language:"jsx"}),`
`,e.jsx(s,{code:`
// The selectedItems structur for setting state of multiple MultiSelects
const initialSelectedItems = {
colors: {
  items: ["red"],
},
pets: {
  items: ["corgy", "german-sheperd"],
},
};
`,language:"jsx"})]})}function i(n={}){const{wrapper:t}={...l(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(c,{...n})}):c(n)}export{i as default};
