import { ArgTypes, Canvas, Description, Meta, Source } from "@storybook/blocks";

import * as MultiSelectStories from "./MultiSelect.stories";
import Link from "../Link/Link";

<Meta of={MultiSelectStories} />

# MultiSelect

| Component Version | DS Version |
| ----------------- | ---------- |
| Added             | `1.4.0`    |
| Latest            | `2.0.0`    |

## Table of Contents

- {<Link href="#overview" target="_self">Overview</Link>}
- {<Link href="#component-props-multiselect-listbox" target="_self">Component Props for MultiSelect Listbox</Link>}
- {<Link href="#component-props-multiselect-dialog" target="_self">Component Props for MultiSelect Dialog</Link>}
- {<Link href="#accessibility" target="_self">Accessibility</Link>}
- {<Link href="#using-the-items-prop" target="_self">Using the items prop</Link>}
- {<Link href="#controlling-state-using-selecteditems-and-onchange-prop" target="_self">Controlling state using selectedItems and onChange prop</Link>}
- {<Link href="#multiselect-nextjs-routing-implementation" target="_self">MultiSelect NextJS routing implementation</Link>}
- {<Link href="#usemultiselect-hook" target="_self">useMultiSelect hook</Link>}

## Overview

<Description of={MultiSelectStories} />

## Component Props for MultiSelect Listbox

The `MultiSelect` listbox renders a non-hierarchical list of items to select from.

<Canvas of={MultiSelectStories.ListboxControls} />

<ArgTypes of={MultiSelectStories.ListboxControls} />

## Component Props for MultiSelect Dialog

The `MultiSelect` dialog allows for an optional set of child checkboxes to be
passed, which makes the “parent” checkbox function as a check/uncheck all toggle.
If all of the children checkboxes are checked, the parent `isChecked` prop will
be true. If only some of the child checkboxes are checked, the parent checkbox
will have a `isIndeterminate` prop set to true, implying that it is not checked
or unchecked.

<Canvas of={MultiSelectStories.DialogControls} />

<ArgTypes of={MultiSelectStories.DialogControls} />

## Accessibility

### ListBox

The `MultiSelect` `listbox` leverages `downshift.js` to assist with
accessibility compliance. By using Downshift's `useSelect` hook and prop getters
`getToggleButtonProps`, `getMenuProps`, `getItemProps` we are able to create a W3
WAI-ARIA compliant listbox that behaves like a select element. Up and down arrow
keys are used for navigating through the `MultiSelect` options.

### Dialog

The `MultiSelect` `dialog` looks similar to the `MultiSelect` `listbox`, but because
of its “clear” and “apply” buttons, it has some key functionality differences,
and accessibility must be handled differently. When the `MultiSelect` is open,
focus is trapped inside the dropdown menu, and the tab key is used to move through
the checkboxes and buttons inside the dialog modal. The focus trap is performed
through Chakra's `@chakra-ui/focus-lock` package which uses the `react-focus-lock`
package under the hood.

NOTE: The `react-focus-lock` package renders two "focus guard" elements and one
has a `tabindex` set to `1`, in order to perform the focus trap behavior. The
Storybook accessibility checker [complains](https://dequeuniversity.com/rules/axe/4.4/tabindex?application=axeAPI)
about this whenever the "dialog" type is opened.

While this is an accessibility issue, we explicitly want the focus trap behavior
within the `MultiSelect`. Once the component is closed, the issue goes away. For
the moment, we will continue to use Chakra's implementation of the `react-focus-lock`
package.

### Selected Items Count Button

When items are selected in a `MultiSelect`, a button with the count of the selected
items will display above the main `MultiSelect` button. This count button is
rendered _after_ the main button but visualy displays above the main button. This
is performed to prevent the accessibility issue where nested interactive control
elements are not properly accessible by screen readers.

Resources:

- [downshift.js documentation](https://www.downshift-js.com/)
- [Reservoir Checkbox Component](../?path=/docs/components-form-elements-checkbox--docs#accessibility)
- [W3C WAI Listbox Example](https://www.w3.org/TR/2017/WD-wai-aria-practices-1.1-20170628/examples/listbox/listbox.html)
- [W3C WAI on using ARIA role=dialog](https://www.w3.org/WAI/GL/wiki/Using_ARIA_role%3Ddialog_to_implement_a_modal_dialog_box)
- [Chakra focus-lock npm](https://www.npmjs.com/package/@chakra-ui/focus-lock)
- [react-focus-lock npm](https://www.npmjs.com/package/react-focus-lock)
- [Deque University - Nested interactive controls are not announced by screen readers](https://dequeuniversity.com/rules/axe/4.4/nested-interactive)

## Using the items prop

The options rendered in the MultiSelect are passed into the component's items prop.
The expected data structure is an array of objects, in the following format:

<Source
  code={`
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
`}
  language="jsx"
/>

If you are using `type = 'dialog'`, you can also add a second level of child
items, in the following format:

<Source
  code={`
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
`}
  language="jsx"
/>

## Controlling state using selectedItems and onChange prop

The MultiSelect does not store its state internally. It expects a selectedItems
prop whose value follows a certain data structure that is "normalized". This is
used for calculating the selected item count. The value is an object with a key
of the MultiSelect's id value set to an object with an "items" key. The "items"
value is an array of the selected items. Below is an exaple of the expected
state shape of `selectedItems`:

<Source
  code={`
{
  "subjects": {
    "items": ["art", "architecture"]
  }
}
`}
  language="json"
/>

## MultiSelect NextJS routing implementation

This is helpful for when several MultiSelect components are rendered inside a
FilterBar component, you can use the MultiSelect id to get items for a specific
slice of the state.

<Source
  code={`
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
`}
  language="jsx"
/>

It's also helpful if a consuming app is pushing state into the browser's url.
This example uses NextJS's router push method to add query parameters to url.

<Source
  code={`
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
`}
  language="jsx"
/>

This is an example with a handleChange function to manage the `selectedItems`
state, without mutating it.

<Source
  code={`
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
`}
  language="jsx"
/>

## useMultiSelect hook

`useMultiSelect` is an optional hook provided by the component, for
cases where managing the state of the component in the consuming app is less
of a concern and general ease of use is prefered.

The hook returns an object containing all the props and state needed to handle
the selectedItems. That includes the functions `onChange`, `onClear`,
`onMixedStateChange` for handling any changes to the selection of items and the
current state of the selection: `selectedItems`.

Find the full documentation under [useMultiSelect](../?path=/docs/hooks-usemultiselect--docs).
