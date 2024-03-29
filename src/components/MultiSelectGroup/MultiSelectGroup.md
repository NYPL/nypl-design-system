import { ArgTypes, Canvas, Description, Meta } from "@storybook/blocks";

import * as MultiSelectGroupStories from "./MultiSelectGroup.stories";
import Link from "../Link/Link";

<Meta of={MultiSelectGroupStories} />

# MultiSelectGroup

| Component Version | DS Version |
| ----------------- | ---------- |
| Added             | `1.4.0`    |
| Latest            | `1.5.0`    |

## Table of Contents

- {<Link href="#overview" target="_self">Overview</Link>}
- {<Link href="#component-props" target="_self">Component Props</Link>}
- {<Link href="#accessibility" target="_self">Accessibility</Link>}
- {<Link href="#layout-patterns" target="_self">Layout Patterns</Link>}

## Overview

<Description of={MultiSelectGroupStories} />

## Component Props

<Canvas of={MultiSelectGroupStories.Controls} />

<ArgTypes of={MultiSelectGroupStories.Controls} />

## Accessibility

The `MultiSelectGroup` renders a group of `MultiSelect` components that are wrapped
in a `<fieldset>` element. The `<fieldset>` element renders a `<legend>` element
that can be visually hidden through the `showLabel` prop. If the `<legend>` is
hidden an `aria-label` attribute with `labelText` value will be rendered instead.

For accessibility information on the `MultiSelect` component, see the
[MultiSelect Accessibility](../?path=/docs/components-form-elements-multiselect--docs#accessibility) documentation.

## Layout Patterns

The width of the MultiSelect components can be passed through the `multiSelectWidth`
prop, with values of `"default"`, `"fitContent"`, and `"full"`.
On screen width under 600px width the `layout` is automatically set to "column"
and the `multiSelectWidth` to "full". Note: when `layout = "column"` is passed,
the MultiSelect components will have `isBlockElement` set to `true` by default.

<Canvas of={MultiSelectGroupStories.LayoutPatterns} />

## useMultiSelect hook

`useMultiSelect` is an optional hook for
cases where managing the state of the component in the consuming app is less
of a concern and general ease of use is prefered.

The hook returns an object containing all the props and state needed to handle
the selectedItems. That includes the functions `onChange`, `onClearAll`,
`onMixedStateChange` for handling any changes to the selection of items and the
current state of the selection: `selectedItems`. Additionally it returns
`setSelectedItems` for setting an initial state of `selectedItems` or manipulate
the `selectedItems` if needed.

Due to it's data structure and functions setup, it is capable to handle a group
of `MultiSelect` components. Find the full documentation under
[useMultiSelect](../?path=/docs/hooks-usemultiselect--docs).
