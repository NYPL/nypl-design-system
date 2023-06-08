import{j as t,a as l,F as a}from"./jsx-runtime-09ad29cb.js";import{M as s,b as i}from"./index-5d3bb37f.js";import{u as r}from"./index-a14fc4fc.js";import"./index-f2bd0723.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-359c5387.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-86fba1ca.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-22f77b05.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-944fe3e7.js";import"./index-0a26bc51.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-b629ee11.js";function o(n){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",p:"p",h3:"h3"},r(),n.components);return l(a,{children:[t(s,{title:"Hooks/useFilterBar"}),`
`,t(e.h1,{id:"usefilterbar",children:"useFilterBar"}),`
`,l(e.table,{children:[t(e.thead,{children:l(e.tr,{children:[t(e.th,{children:"Hook Version"}),t(e.th,{children:"DS Version"})]})}),l(e.tbody,{children:[l(e.tr,{children:[t(e.td,{children:"Added"}),t(e.td,{children:t(e.code,{children:"1.4.0"})})]}),l(e.tr,{children:[t(e.td,{children:"Latest"}),t(e.td,{children:t(e.code,{children:"1.4.0"})})]})]})]}),`
`,t(e.h2,{id:"usage",children:"Usage"}),`
`,t(e.p,{children:"Usage of useFilterBar"}),`
`,t(i,{code:`
const {
  onChange,
  onMixedStateChange,
  onClear,
  onClearAll,
  setSelectedItems,
  selectedItems,
  onOpen,
  onClose,
  onToggle,
  isModalOpen,
} = useFilterBar();
`,language:"jsx"}),`
`,t(e.h2,{id:"usefilterbar-hook-implementation",children:"useFilterBar Hook implementation"}),`
`,l(e.p,{children:["The data structure used to render two ",t(e.code,{children:"MultiSelect"})," components in all following examples:"]}),`
`,t(i,{code:`
const multiSelectItems = [
  {
    id: "colors",
    name: "Colors",
    items: [
      { id: "red", name: "Red" },
      { id: "blue", name: "Blue" },
      { id: "yellow", name: "Yellow" },
    ],
  },
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
];
`,language:"jsx"}),`
`,t(e.h3,{id:"implementation-with-no-global-buttons-or-modal",children:"Implementation with no global buttons or modal"}),`
`,t(i,{code:`
import React from "react";
import {
  FilterBar,
  MultiSelectGroup,
  MultiSelect,
  useFilterBar,
} from "@nypl/design-system-react-components";
// ...
export default function FilterBarWithHookExample() {
  // Without this hook, you'd have to add handlers for onChange, onMixedStateChange and onClear,
  // and also manage the selectedItems state yourself.
  const { onChange, onMixedStateChange, onClear, onClearAll, selectedItems } =
    useFilterBar();
  return (
    <FilterBar
      id="filterbar"
      headingText="FilterBar"
      layout="row"
      selectedItems={selectedItems}
      onClear={onClearAll}
    >
      <MultiSelectGroup
        id="multiselect-group"
        key="multiselect-group-key"
        labelText="MultiSelect Group"
      >
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
              onMixedStateChange={(e) => {
                onMixedStateChange(
                  e.target.id,
                  multiSelect.id,
                  multiSelect.items
                );
              }}
              onClear={() => {
                onClear(multiSelect.id);
              }}
              onApply={() => {}}
            />
          ))}
      </MultiSelectGroup>
    </FilterBar>
  );
}
`,language:"jsx"}),`
`,t(e.h3,{id:"implementation-with-clear-filters-and-apply-filters-buttons",children:"Implementation with Clear Filters and Apply Filters buttons"}),`
`,t(i,{code:`
import React from "react";
import {
  FilterBar,
  MultiSelectGroup,
  MultiSelect,
  useFilterBar,
} from "@nypl/design-system-react-components";
// ...
export default function FilterBarWithHookExample() {
  // Without this hook, the consuming app will have to provide handlers for onChange, onMixedStateChange, onClear and onClearAll,
  // and also manage the selectedItems state.
  const { onChange, onMixedStateChange, onClear, onClearAll, selectedItems } =
    useFilterBar();
  return (
    <FilterBar
      id="filterbar"
      headingText="FilterBar"
      layout="row"
      selectedItems={selectedItems}
      showClearAll
      onClear={onClearAll}
      showSubmitAll
      // onSubmit has to be provided by the consuming app
      onSubmit={() => {}}
    >
      <MultiSelectGroup
        id="multiselect-group"
        key="multiselect-group-key"
        labelText="MultiSelect Group"
      >
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
              onMixedStateChange={(e) => {
                onMixedStateChange(
                  e.target.id,
                  multiSelect.id,
                  multiSelect.items
                );
              }}
              onClear={() => {
                onClear(multiSelect.id);
              }}
              onApply={() => {}}
            />
          ))}
      </MultiSelectGroup>
    </FilterBar>
  );
}
`,language:"jsx"}),`
`,t(e.h3,{id:"implementation-using-setselecteditems-for-a-initial-selection-of-filters",children:"Implementation using setSelectedItems for a initial selection of filters"}),`
`,l(e.p,{children:["The required data structure to set the ",t(e.code,{children:"selectedItems"})," object:"]}),`
`,t(i,{code:`
// The selectedItems structure for one MultiSelect
const initialFilter = {
  colors: {
    items: ["red"],
  },
};
`,language:"jsx"}),`
`,t(i,{code:`
// The selectedItems structure for setting state on multiple filters
const initialFilters = {
  colors: {
    items: ["red"],
  },
  pets: {
    items: ["corgy", "german-sheperd"],
  },
};
`,language:"jsx"}),`
`,t(e.p,{children:"Implementation:"}),`
`,t(i,{code:`
import React from "react";
import {
  FilterBar,
  MultiSelectGroup,
  MultiSelect,
  useFilterBar,
} from "@nypl/design-system-react-components";
// ...
export default function FilterBarWithHookExample() {
  const { onChange, onClear, onClearAll, setSelectedItems, selectedItems } =
    useFilterBar();
  const initialFilters = {
    colors: {
      items: ["red"],
    },
    pets: {
      items: ["corgy", "german-sheperd"],
    },
  };
  //Set the initial state of selectedItems
  React.useEffect(() => {
    setSelectedItems(initialSelectedItems);
  }, []);
  // ...
  return (
    <FilterBar
      id="filterbar"
      headingText="FilterBar"
      layout="row"
      selectedItems={selectedItems}
      showClearAll
      onClear={onClearAll}
      showSubmitAll
      onSubmit={() => {}}
    >
      <MultiSelectGroup
        id="multiselect-group"
        key="multiselect-group-key"
        labelText="MultiSelect Group"
      >
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
              onMixedStateChange={(e) => {
                onMixedStateChange(
                  e.target.id,
                  multiSelect.id,
                  multiSelect.items
                );
              }}
              onClear={() => {
                onClear(multiSelect.id);
              }}
              onApply={() => {}}
            />
          ))}
      </MultiSelectGroup>
    </FilterBar>
  );
}
`,language:"jsx"})]})}function A(n={}){const{wrapper:e}=Object.assign({},r(),n.components);return e?t(e,Object.assign({},n,{children:t(o,n)})):o(n)}export{A as default};
//# sourceMappingURL=useFilterBar-af5eb063.js.map
