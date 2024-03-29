import { ArgTypes, Canvas, Description, Meta, Source } from "@storybook/blocks";

import * as FilterBarStories from "./FilterBar.stories";
import Link from "../Link/Link";

<Meta of={FilterBarStories} />

# FilterBar

| Component Version | DS Version |
| ----------------- | ---------- |
| Added             | `1.4.0`    |
| Latest            | `1.5.0`    |

## Table of Contents

- {<Link href="#overview" target="_self">Overview</Link>}
- {<Link href="#component-props" target="_self">Component Props</Link>}
- {<Link href="#accessibility" target="_self">Accessibility</Link>}
- {<Link href="#layout-patterns" target="_self">Layout Patterns</Link>}
- {<Link href="#ui-containers" target="_self">UI Containers</Link>}
- {<Link href="#usefilterbar-hook" target="_self">useFilterBar hook</Link>}

## Overview

<Description of={FilterBarStories} />

## Component Props

<Canvas of={FilterBarStories.WithControls} />

<ArgTypes of={FilterBarStories.WithControls} />

## Accessibility

The `FilterBar` component is a wrapper component for components with filter
functionality. The accessibility of `FilterBar` depends on the passed child
components accessibility. See the accessibility details of valid FilterBar child
components:

- [MultiSelect](../?path=/docs/components-form-elements-multiselect--docs#accessibility)
- [MultiSelectGroup](../?path=/docs/components-form-elements-multiselectgroup--docs#accessibility)

## Layout Patterns

The display of the `FilterBar` child components can be set to a `"row"` or a
`"column"` layout. On screen width under 600px width the `layout` is
automatically set to `"column"`.

**Note:** when `layout = "column"` is passed, the MultiSelect components will have
`isBlockElement` set to `true` by default and the child components `width`
will be set to `"full"`. However, the child components `width` can be
controlled by the `filterWidth` prop and set to either `"full"` or `"default"`.
The passed in width will take precedence over the default behavior.

**Note:** It's suggested that the global Apply and Clear buttons be used with
`listbox` MultiSelect variants. MultiSelect `dialog` variants render an Apply
and a Clear button within each MultiSelect component.

<Canvas of={FilterBarStories.LayoutPatterns} />

## UI Containers

The `FilterBar` component will often be rendered within a UI container with
`background-color` and `padding` styles applied. This treatment can easily be
accomplished using the `Box` component with inline styles.

If a consuming app supports dark mode, styles for both light and dark mode will
be required for the UI container element.

**Note:** Future DS updates may provide a standalone component to implement a
UI container similar to what is used in these example.

### Row Layout

<Canvas of={FilterBarStories.UIContainers} />

<Source
  code={`
/* LIGHT MODE ONLY */
// Add container for row layout
<Box bg="ui.bg.default" p="inset.wide">
  <FilterBar
    layout="row"
    // ...
  >
    // MultiSelect and MultiSelectGroup components...
  </FilterBar>
</Box>
`}
  language="jsx"
/>

<Source
  code={`
/* DARK MODE SUPPORT */
// Import useColorModeValue hook
import { useColorModeValue } from "@nypl/design-system-react-components";
// ...
// Use hook to set values for light and dark mode
const containerBgColor = useColorModeValue(
  "ui.bg.default",
  "dark.ui.bg.default"
);
// ...
// Add container for row layout
<Box bg={containerBgColor} p="inset.wide">
  <FilterBar
    layout="row"
    // ...
  >
    // MultiSelect and MultiSelectGroup components...
  </FilterBar>
</Box>
; `}
  language="jsx"
/>

### Column Layout

<Canvas of={FilterBarStories.ColumnLayout} />

<Source
  code={`
/* LIGHT MODE ONLY */
// Add container for column layout
<Box bg="ui.bg.default" p="inset.default">
  <FilterBar
    layout="column"
    // ...
  >
    // MultiSelect and MultiSelectGroup components...
  </FilterBar>
</Box>
`}
  language="jsx"
/>

<Source
  code={`
/* DARK MODE SUPPORT */
// ...
// Import useColorModeValue hook
import { useColorModeValue } from "@nypl/design-system-react-components";
// ...
// Use hook to set values for light and dark mode
const containerBgColor = useColorModeValue(
  "ui.bg.default",
  "dark.ui.bg.default"
);
// ...
// Add container for column layout
<Box bg={containerBgColor} p="inset.default">
  <FilterBar
    layout="column"
    // ...
  >
    // MultiSelect and MultiSelectGroup components...
  </FilterBar>
</Box>;
`}
  language="jsx"
/>

## useFilterBar hook

Find the full documentation under [useFilterBar](../?path=/docs/hooks-usefilterbar--docs).

`useFilterBar` is an optional hook for cases where managing the state of the
component in the consuming app is less of a concern and general ease of use is
prefered.

The hook returns an object containing all the props and state needed to handle
the selectedItems. That includes the functions `onChange`, `onMixedStateChange`,
`onClear`, `onClearAll` for handling any changes to the selection of items,
a `setSelectedItems` function to control or manipulate the (initial) state of
`selectedItems`, and a `selectedItems` object to house the current state of the
selections. Additionally it returns an `onToggle` function or `onClose`/`onOpen`
to control the `isModalOpen` state, and the boolean value `isModalOpen` for a
`Filter` modal overlay.
