import{u as a,j as e,M as h,L as n,bv as u,C as s,S as i,bw as m,B as c}from"./iframe-D93LbwGv.js";import{C as x}from"./ComponentChangelogTable-Ck_3mwrR.js";import{M as o,w as d,v as p,n as j,d as f,a as b,s as g,i as S,b as y,c as w,e as M,f as k,I}from"./MultiSelect.stories-D3JZiCt6.js";import"./useMultiSelect-amaASZqv.js";const C=[{date:"2025-07-17",version:"3.6.4",type:"Bug Fix",affects:["Functionality"],notes:["Fixes the array of checkbox items to return with unique keys."]},{date:"2025-04-24",version:"3.6.1",type:"Bug Fix",affects:["Functionality"],notes:["Fixes the `itemCount` prop so that the value displays even when `0` is passed."]},{date:"2025-04-10",version:"3.6.0",type:"Update",affects:["Styles"],notes:["Fixes the search input field to the top of the panel so it remains visible on scroll.","Fixes the vertical alignment of the label for the `inline` variant."]},{date:"2024-12-05",version:"3.5.0",type:"Update",affects:["Documentation","Functionality"],notes:["Updates the `items` prop to include `itemCount` as a data property to render the item count for an option."]},{date:"2024-10-02",version:"3.4.0",type:"Update",affects:["Documentation"],notes:["Adds interaction tests for the Controls story."]},{date:"2024-08-29",version:"3.3.0",type:"New Feature",affects:["Accessibility"],notes:["Renders the `buttonText` prop as the `CheckboxGroup`'s legend for more meaningful context."]},{date:"2024-07-03",version:"3.1.7",type:"New Feature",affects:["Functionality"],notes:["Adds `closeOnBlur` prop which, when set to true, closes the component if it loses focus."]},{date:"2024-05-23",version:"3.1.4",type:"Bug Fix",affects:["Styles"],notes:["Fixes the z-index value in the small selected items button."]},{date:"2024-04-25",version:"3.1.1",type:"Update",affects:["Functionality"],notes:["Updated the placeholder value for the search field."]},{date:"2024-03-14",version:"3.0.0",type:"Update",affects:["Accessibility","Documentation","Functionality","Styles"],notes:["Chakra 2.8 update.","Refactors the `MultiSelect` component."]}];function r(l){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...a(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:o}),`
`,e.jsx(t.h1,{id:"multiselect",children:"MultiSelect"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Component Version"}),e.jsx(t.th,{children:"DS Version"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Added"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"1.4.0"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Latest"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"3.6.4"})})]})]})]}),`
`,e.jsx(t.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[`
`,e.jsx(n,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(n,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(n,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(n,{href:"#populating-the-list-items",target:"_self",children:"Populating the List Items"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(n,{href:"#visible-list-items",target:"_self",children:"Visible List Items"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(n,{href:"#nested-list-items",target:"_self",children:"Nested List Items"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(n,{href:"#disabled-list-items",target:"_self",children:"Disabled List Items"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(n,{href:"#search-input-field",target:"_self",children:"Search Input Field"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(n,{href:"#item-count",target:"_self",children:"Item Count"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(n,{href:"#block-element-or-float",target:"_self",children:"Block Element or Float"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(n,{href:"#width",target:"_self",children:"Width"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(n,{href:"#default-open-state",target:"_self",children:"Default Open State"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(n,{href:"#close-on-blur-state",target:"_self",children:"Close on Blur State"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(n,{href:"#multiselect-in-a-group",target:"_self",children:"MultiSelect in a Group"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(n,{href:"#controlling-state-using-selecteditems-and-onchange-prop",target:"_self",children:"Controlling state using selectedItems and onChange prop"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(n,{href:"#multiselect-nextjs-routing-implementation",target:"_self",children:"MultiSelect NextJS routing implementation"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(n,{href:"#usemultiselect-hook",target:"_self",children:"useMultiSelect hook"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(n,{href:"#changelog",target:"_self",children:"Changelog"}),`
`]}),`
`]}),`
`,e.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(u,{of:o}),`
`,e.jsx(t.h2,{id:"component-props",children:"Component Props"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"MultiSelect"})," renders a non-hierarchical list of items to select from."]}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(i,{code:`
<MultiSelect
buttonText="MultiSelect",
id="multi-select-id"
isBlockElement
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
  {
    id: 'design',
    name: 'Design'
  },
  {
    id: 'business',
    name: 'Business'
  },
  ...
]}
/>
`,language:"jsx"}),`
`,e.jsx(m,{of:d}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"MultiSelect"})," component is composed using the DS ",e.jsx(t.code,{children:"Accordion"})," and ",e.jsx(t.code,{children:"Checkbox"}),`
components and its accessibility compliance is derived from what is already
included in those components.`]}),`
`,e.jsx(t.p,{children:"Accordion:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Follows ",e.jsx(t.a,{href:"https://designsystem.digital.gov/components/accordion/",rel:"nofollow",children:"U.S. Web Design System (USWDS)"}),`
guidelines:`,`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Use the ",e.jsx(t.code,{children:"button"})," HTML element for screenreaders and keyboards."]}),`
`,e.jsxs(t.li,{children:["Use the ",e.jsx(t.code,{children:"aria-expanded"})," attribute to indicate whether the ",e.jsx(t.code,{children:"Accordion"}),` is
expanded (`,e.jsx(t.code,{children:"true"}),") or collapsed (",e.jsx(t.code,{children:"false"}),")."]}),`
`,e.jsxs(t.li,{children:["Use the ",e.jsx(t.code,{children:"aria-controls"})," attribute to associate the control with the panel."]}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:["The open and close icons are decorative (",e.jsx(t.code,{children:"aria-hidden"})," is ",e.jsx(t.code,{children:"true"}),")."]}),`
`,e.jsx(t.li,{children:"Visible focus goes around full button and full button is clickable."}),`
`,e.jsxs(t.li,{children:["Because the ",e.jsx(t.code,{children:"MultiSelect"})," utilizes the ",e.jsx(t.code,{children:"Accordion"}),`, the same functionality applies when
the user presses the 'esc' key and focus is on an open panel: that panel will close and
focus will return to the panel's button.`]}),`
`]}),`
`,e.jsx(t.p,{children:"Checkbox:"}),`
`,e.jsxs(t.p,{children:["The Checkbox component renders ",e.jsx(t.code,{children:"<label>"})," and ",e.jsx(t.code,{children:'<input type="checkbox" />'}),`
elements that are associated with each other; the label has a `,e.jsx(t.code,{children:"for"}),` attribute with
the value of the `,e.jsx(t.code,{children:"input"}),"'s ",e.jsx(t.code,{children:"id"}),` element. If there is helper or invalid text, the
`,e.jsx(t.code,{children:"<input>"})," element will have a ",e.jsx(t.code,{children:"aria-describedby"}),` attribute with the value of the
helper or invalid text.`]}),`
`,e.jsx(t.p,{children:"Resources:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"../?path=/docs/components-overlays-switchers-accordion--docs#accessibility",children:"Reservoir Accordion Component"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"../?path=/docs/components-form-elements-checkbox--docs#accessibility",children:"Reservoir Checkbox Component"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://dequeuniversity.com/rules/axe/4.4/nested-interactive",rel:"nofollow",children:"Deque University - Nested interactive controls are not announced by screen readers"})}),`
`]}),`
`,e.jsx(t.h2,{id:"populating-the-list-items",children:"Populating the List Items"}),`
`,e.jsxs(t.p,{children:["The options rendered in the ",e.jsx(t.code,{children:"MultiSelect"}),` component are passed into the
component's `,e.jsx(t.code,{children:"items"}),` prop. The expected data structure is an array of objects,
with each item having an `,e.jsx(t.code,{children:"id"})," and a ",e.jsx(t.code,{children:"name"}),`. You also have the option to include
a second level of child items. Both parent and child items can optionally use
the `,e.jsx(t.code,{children:"isDisabled"})," flag and include the ",e.jsx(t.code,{children:"itemCount"}),` prop to render their associated
count. The format is as follows:`]}),`
`,e.jsx(i,{code:`
<MultiSelect
buttonText="MultiSelect"
id="multi-select-id"
isBlockElement
items={[
  {
    id: "art",
    name: "Art",
    itemCount: 5
  },
  {
    id: "architecture",
    name: "Architecture",
    isDisabled: true,
    itemCount: 7
  },
  {
    id: 'design',
    name: 'Design',
    children: [
      {
        id: 'fashion',
        isDisabled: true,
        name: 'Fashion'
      },
      {
        id: 'ux',
        isDisabled: true,
        name: 'User Experience'
      },
      {
        id: 'architecture',
        isDisabled: false,
        name: 'Architecture'
      },
      {
        id: 'home',
        isDisabled: false,
        name: 'Home'
      },
    ],
  },
  ...
]}
/>
`,language:"jsx"}),`
`,e.jsx(t.h2,{id:"visible-list-items",children:"Visible List Items"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"defaultItemsVisible"}),` prop can be used to set the number of list items that
will be visible when the list is first opened. The default value is `,e.jsx(t.code,{children:"5"}),"."]}),`
`,e.jsx(t.p,{children:`When there are nested list items, only the parent items will be considered when
counting the items to display.`}),`
`,e.jsx(c,{content:e.jsxs(e.Fragment,{children:[e.jsx(t.strong,{children:"IMPORTANT:"})," This prop can only be used with"," ",e.jsx(t.code,{children:'listOverflow="expand"'}),"."]}),type:"informative"}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(i,{code:`
<MultiSelect
buttonText="MultiSelect"
defaultItemsVisible={8}
id="multi-select-id"
isBlockElement
listOverlow="expand"
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
  ...
]}
/>
`,language:"jsx"}),`
`,e.jsx(t.h2,{id:"nested-list-items",children:"Nested List Items"}),`
`,e.jsx(t.p,{children:`The MultiSelect component allows for an optional set of child checkboxes to be passed, providing a hierarchical structure.
The "parent" checkbox functions as a check/uncheck all toggle for its children.`}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["If all of the children checkboxes are checked, the parent's ",e.jsx(t.code,{children:"isChecked"})," prop will be set to true."]}),`
`,e.jsxs(t.li,{children:["If only some of the child checkboxes are checked, the parent checkbox will have an ",e.jsx(t.code,{children:"isIndeterminate"})," state."]}),`
`]}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(i,{code:`
<MultiSelect
buttonText="MultiSelect"
id="multi-select-id"
isBlockElement
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
  {
    id: 'design',
    name: 'Design',
    children: [
      {
        id: 'fashion',
        name: 'Fashion'
      },
      {
        id: 'ux',
        name: 'User Experience'
      },
      ...
    ],
  },
]}
/>
`,language:"jsx"}),`
`,e.jsx(t.h2,{id:"disabled-list-items",children:"Disabled List Items"}),`
`,e.jsxs(t.p,{children:[`Each checkbox — whether standalone, parent, or child — can be set in
a disabled state by using `,e.jsx(t.code,{children:"isDisabled"}),`. This provides flexibility in managing
the interaction and state of checkboxes within the `,e.jsx(t.code,{children:"MultiSelect"}),` component,
especially when certain options need to be disabled.`]}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Standalone Checkbox"})}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"isDisabled"}),` can be set directly for a standalone checkbox. When disabled, a
standalone checkbox will not be clickable and its state will not change.`]}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Parent Checkbox"})}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"isDisabled"})," cannot be set directly for a parent checkbox."]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:`If only some of the child checkboxes under a parent checkbox are disabled, the
parent checkbox will be enabled.`}),`
`,e.jsx(t.li,{children:`If all of the child checkboxes under a parent checkbox are disabled, the
parent checkbox will be disabled.`}),`
`]}),`
`,e.jsx(t.p,{children:`When disabled, a parent checkbox will not be clickable and its state will not
change.`}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Child Checkboxes"})}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"isDisabled"}),` can be set directly for a standalone checkbox. When disabled, a
child checkbox will not be clickable and its state will not change.`]}),`
`,e.jsx(t.h3,{id:"mixed-example",children:"Mixed Example"}),`
`,e.jsx(s,{of:f,ed:!0}),`
`,e.jsx(i,{code:`
<MultiSelect
buttonText="MultiSelect"
id="multi-select-id"
isBlockElement
items={[
  {
    id: "art",
    name: "Art",
  },
  {
    id: "architecture",
    name: "Architecture",
    isDisabled: true,
  },
  {
    id: 'design',
    name: 'Design',
    children: [
      {
        id: 'fashion',
        isDisabled: true,
        name: 'Fashion'
      },
      {
        id: 'ux',
        isDisabled: true,
        name: 'User Experience'
      },
      {
        id: 'architecture_design',
        isDisabled: false,
        name: 'Architecture'
      },
      {
        id: 'home',
        isDisabled: false,
        name: 'Home'
      },
      ...
    ],
  },
]}
/>
`,language:"jsx"}),`
`,e.jsx(t.h3,{id:"disabled-parent-checkbox",children:"Disabled Parent Checkbox"}),`
`,e.jsx(s,{of:b}),`
`,e.jsx(i,{code:`
<MultiSelect
buttonText="MultiSelect"
id="multi-select-id"
isBlockElement
items={[
  {
    id: "art",
    name: "Art",
  },
  {
    id: "architecture",
    name: "Architecture",
    isDisabled: true,
  },
  {
    id: 'design',
    name: 'Design',
    children: [
      {
        id: 'fashion',
        isDisabled: true,
        name: 'Fashion'
      },
      {
        id: 'ux',
        isDisabled: true,
        name: 'User Experience'
      },
      {
        id: 'architecture_design',
        isDisabled: true,
        name: 'Architecture'
      },
      {
        id: 'home',
        isDisabled: true,
        name: 'Home'
      },
      ...
    ],
  },
]}
/>
`,language:"jsx"}),`
`,e.jsx(t.h2,{id:"search-input-field",children:"Search Input Field"}),`
`,e.jsxs(t.p,{children:["When ",e.jsx(t.code,{children:"isSearchable"})," is set to ",e.jsx(t.code,{children:"true"}),`, a text input field will be enabled within
the component to allow users to search the available checkbox items.`]}),`
`,e.jsx(c,{content:e.jsxs(e.Fragment,{children:[e.jsx(t.strong,{children:"RECOMMENDATION:"})," When the number of list items is 20 or greater, enable the search functionality and use scroll for the overflow."]}),type:"recommendation"}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(i,{code:`
<MultiSelect
buttonText="MultiSelect"
id="multi-select-id"
isBlockElement
isSearchable
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
    id: 'design',
    name: 'Design',
    children: [
      {
        id: 'fashion',
        name: 'Fashion',
      },
      {
        id: 'ux',
        name: 'User Experience'
      },
      ...
    ],
  },
]}
/>
`,language:"jsx"}),`
`,e.jsx(t.h2,{id:"item-count",children:"Item Count"}),`
`,e.jsxs(t.p,{children:[`The recommended UX pattern for filtering is to include an item count associated
with each option in a `,e.jsx(t.code,{children:"MultiSelect"}),` component. The item counts can be rendered
by passing the `,e.jsx(t.code,{children:"itemCount"})," data property to the ",e.jsx(t.code,{children:"items"})," prop."]}),`
`,e.jsx(c,{content:e.jsxs(e.Fragment,{children:[e.jsx(t.strong,{children:"RECOMMENDATION:"})," When the ",e.jsx(t.code,{children:"itemCount"})," data property is set as 0, the ",e.jsx(t.code,{children:"isDisabled"})," data property should be used to disable the option."]}),type:"recommendation"}),`
`,e.jsx(s,{of:S}),`
`,e.jsx(i,{code:`
<MultiSelect
buttonText="MultiSelect"
id="multi-select-id"
isBlockElement
items={[
      {
        id: "art",
        name: "Art",
        itemCount: 7,
      },
      {
        id: "architecture",
        name: "Architecture",
        itemCount: 20,
      },
      {
        id: "creativity",
        name: "Creativity",
        isDisabled: true,
        itemCount: 0,
      },
      {
        id: "design",
        name: "Design",
        children: [
          {
            id: "bauhaus",
            name: "Bauhaus",
            isDisabled: true,
            itemCount: 0,
          },
          {
            id: "fashion",
            name: "Fashion",
            itemCount: 2,
          },
          ...
        ],
        itemCount: 11,
      },
      {
        id: "business",
        name: "Business",
        itemCount: 2,
      },
      ...
    ],
  },
]}
/>
`,language:"jsx"}),`
`,e.jsx(t.h2,{id:"block-element-or-float",children:"Block Element or Float"}),`
`,e.jsxs(t.p,{children:["Using the ",e.jsx(t.code,{children:"isBlockElement"})," prop, the ",e.jsx(t.code,{children:"MultiSelect"}),` component can be configured
for the list portion of the component act as a block element when it is opened
and closed or to float above adjacent UI elements (similar to a standard
`,e.jsx(t.code,{children:"<select>"})," input)."]}),`
`,e.jsxs(t.p,{children:["When ",e.jsx(t.code,{children:"isBlockElement"})," is ",e.jsx(t.code,{children:"true"}),`, the list will render as a block element and displace
subsequent UI elements, pushing them further down the page. This is the
recommended configuration for the component when it is used in a vertical filter
bar layout.`]}),`
`,e.jsxs(t.p,{children:["When ",e.jsx(t.code,{children:"isBlockElement"})," is ",e.jsx(t.code,{children:"false"}),` (default configuration), the list element will
`,e.jsx(t.em,{children:"float"}),` above other UI elements and not impact their placement nor the overall
page structure. This is the recommended configuration for the component when it
is used in a horizontal filter bar layout.`]}),`
`,e.jsx(s,{of:y}),`
`,e.jsx(i,{code:`
<MultiSelect
buttonText="MultiSelect"
id="multi-select-id"
isBlockElement
listOverlow="expand"
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
  ...
]}
/>
`,language:"jsx"}),`
`,e.jsx(t.h2,{id:"width",children:"Width"}),`
`,e.jsxs(t.p,{children:["The width of the ",e.jsx(t.code,{children:"MultiSelect"}),` component can be configured to handle the width in
two ways: `,e.jsx(t.code,{children:"fitContent"})," or ",e.jsx(t.code,{children:"full"}),"."]}),`
`,e.jsxs(t.p,{children:["When ",e.jsx(t.code,{children:"width"})," is set to ",e.jsx(t.code,{children:"fitContent"}),`, the button and list elements will expand
and contract independently of each other, depending on the width of the text
within each element, and adhere to the following rules:`]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"The button element has a minimum width of 175px"}),`
`,e.jsx(t.li,{children:"The list element has a minimum width of 200px and a maximum width of 300px"}),`
`]}),`
`,e.jsxs(t.p,{children:["When ",e.jsx(t.code,{children:"width"})," is set to ",e.jsx(t.code,{children:"full"}),`, the button and list elements will expand to fill
the full width of the component's parent element and the width of the two
elements will always be identical.`]}),`
`,e.jsx(c,{content:e.jsxs(e.Fragment,{children:[e.jsx(t.strong,{children:"IMPORTANT:"})," For a mobile viewport, the component will always render with ",e.jsx(t.code,{children:"width"})," set to ",e.jsx(t.code,{children:"full"}),"."]}),type:"informative"}),`
`,e.jsx(s,{of:w}),`
`,e.jsx(i,{code:`
<MultiSelect
buttonText="MultiSelect"
id="multi-select-id"
isBlockElement
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
  ...
]}
width="fitContent"
/>
`,language:"jsx"}),`
`,e.jsx(t.h2,{id:"default-open-state",children:"Default Open State"}),`
`,e.jsxs(t.p,{children:["When ",e.jsx(t.code,{children:"isDefaultOpen"})," is set to ",e.jsx(t.code,{children:"true"}),`, the component is displayed in the open
state by default.`]}),`
`,e.jsx(s,{of:M}),`
`,e.jsx(i,{code:`
<MultiSelect
buttonText="MultiSelect"
id="multi-select-id"
isBlockElement
isDefaultOpen
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
    id: 'design',
    name: 'Design',
    children: [
      {
        id: 'fashion',
        name: 'Fashion',
      },
      {
        id: 'ux',
        name: 'User Experience'
      },
      ...
    ],
  },
]}
/>
`,language:"jsx"}),`
`,e.jsx(t.h2,{id:"close-on-blur-state",children:"Close on Blur State"}),`
`,e.jsxs(t.p,{children:["When ",e.jsx(t.code,{children:"closeOnBlur"})," is set to ",e.jsx(t.code,{children:"true"}),", the ",e.jsx(t.code,{children:"MultiSelect"}),` accordion will close when
focus leaves the component (the user clicks outside or uses the keyboard to tab away).`]}),`
`,e.jsx(s,{of:k}),`
`,e.jsx(i,{code:`
<MultiSelect
buttonText="MultiSelect"
closeOnBlur
id="multi-select-id"
isBlockElement
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
    id: 'design',
    name: 'Design',
    children: [
      {
        id: 'fashion',
        name: 'Fashion',
      },
      {
        id: 'ux',
        name: 'User Experience'
      },
      ...
    ],
  },
]}
/>
`,language:"jsx"}),`
`,e.jsx(t.h2,{id:"multiselect-in-a-group",children:"MultiSelect in a Group"}),`
`,e.jsxs(t.p,{children:["When using the ",e.jsx(t.code,{children:"MultiSelect"}),` component in a group, it is recommended to use the
`,e.jsx(t.code,{children:"useMultiSelect"})," hook to manage the state of all the ",e.jsx(t.code,{children:"MultiSelect"})," components."]}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"useMultiSelect"})," hook provides an ",e.jsx(t.code,{children:"onClear"}),` function that should be used to
clear all the selected checkboxes in individual `,e.jsx(t.code,{children:"MultiSelect"}),` components. This
function should be passed to the `,e.jsx(t.code,{children:"onClear"}),` prop and is invoked through the
"clear" button in the `,e.jsx(t.code,{children:"MultiSelect"})," component."]}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"useMultiSelect"})," hook also provides an ",e.jsx(t.code,{children:"onClearAll"}),` function that can be
used to clear all the selected checkboxes across all `,e.jsx(t.code,{children:"MultiSelect"}),` components.
The `,e.jsx(t.code,{children:"MultiSelect"})," component does ",e.jsx(t.em,{children:"NOT"})," have an ",e.jsx(t.code,{children:"onClearAll"}),` prop. Instead, the
`,e.jsx(t.code,{children:"onClearAll"}),` function should be invoked in a separate button or action.
Alternatively, use the `,e.jsx(t.code,{children:"MultiSelectGroup"})," or ",e.jsx(t.code,{children:"FilterBar"}),` (name TBD) components
in future releases.`]}),`
`,e.jsx(c,{content:e.jsxs(e.Fragment,{children:[e.jsx(t.strong,{children:"IMPORTANT:"})," Make sure to give each"," ",e.jsx(t.code,{children:"MultiSelect"})," component a unique ",e.jsx(t.code,{children:"id"}),"."]}),type:"informative"}),`
`,e.jsx(s,{of:I}),`
`,e.jsx(i,{code:`
import { MultiSelect, useMultiSelect } from "@nypl/design-system-react-components";
// ...
function MultiSelectGroupExample() {
// Example with custom hook useMultiSelect.
const { onChange, onMixedStateChange, onClear, selectedItems } =
  useMultiSelect();
return (
  <HStack>
    <MultiSelect
      buttonText="MultiSelect"
      id="ms-group-1"
      items={items}
      selectedItems={selectedItems}
      width="fitContent"
      onChange={(e) => {
        onChange(e.target.id, "ms-group-1");
        setActionName("onChange");
      }}
      onMixedStateChange={(e) => {
        onMixedStateChange(e.target.id, "ms-group-1", items);
        setActionName("onMixedStateChange");
      }}
      onClear={() => {
        onClear("ms-group-1");
        setActionName("onClear");
      }}
    />
    <MultiSelect
      id="ms-group-2"
      // ...
    />
  </HStack>
);
}
`,language:"jsx"}),`
`,e.jsx(t.h2,{id:"controlling-state-using-selecteditems-and-onchange-props",children:"Controlling State Using selectedItems and onChange Props"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"MultiSelect"}),` component does not store its state internally. It expects a
`,e.jsx(t.code,{children:"selectedItems"}),` prop whose value follows a certain data structure that is
"normalized." This is used for calculating the selected item count. The value is
an object with a key of the `,e.jsx(t.code,{children:"MultiSelect"})," component's ",e.jsx(t.code,{children:"id"}),` value set to an
object with an "items" key. The "items" value is an array of the selected items.
Below is an exaple of the expected state shape of `,e.jsx(t.code,{children:"selectedItems"}),":"]}),`
`,e.jsx(i,{code:`
{
"subjects": {
  "items": ["art", "architecture"]
}
}
`,language:"json"}),`
`,e.jsx(t.h2,{id:"multiselect-nextjs-routing-implementation",children:"MultiSelect NextJS routing implementation"}),`
`,e.jsxs(t.p,{children:["This is helpful for when several ",e.jsx(t.code,{children:"MultiSelect"}),` components are rendered inside a
`,e.jsx(t.code,{children:"FilterBar"})," component. The ",e.jsx(t.code,{children:"MultiSelect"})," component's ",e.jsx(t.code,{children:"id"}),` can be used to get
items for a specific slice of the state.`]}),`
`,e.jsx(i,{code:`
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
`,e.jsx(t.p,{children:`It's also helpful if a consuming app is pushing state into the browser's url.
This example uses NextJS's router push method to add query parameters to url.`}),`
`,e.jsx(i,{code:`
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
`,e.jsxs(t.p,{children:["This is an example with a ",e.jsx(t.code,{children:"handleChange"})," function to manage the ",e.jsx(t.code,{children:"selectedItems"}),`
state, without mutating it.`]}),`
`,e.jsx(i,{code:`
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
    buttonText="MultiSelect"
    id="multi-select-id"
    items={items}
    selectedItems={selectedItems}
    onChange={(selectedItem) => {
      handleChange(selectedItem.id, "subjects");
    }}
  />
);
}
export default MultiSelectControlledExample;
`,language:"jsx"}),`
`,e.jsx(t.h2,{id:"usemultiselect-hook",children:"useMultiSelect hook"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"useMultiSelect"}),` is an optional hook provided by the component, for
cases where managing the state of the component in the consuming app is less
of a concern and general ease of use is prefered.`]}),`
`,e.jsxs(t.p,{children:[`The hook returns an object containing all the props and state needed to handle
the selectedItems. That includes the functions `,e.jsx(t.code,{children:"onChange"}),", ",e.jsx(t.code,{children:"onClear"}),`,
`,e.jsx(t.code,{children:"onClearAll"}),", ",e.jsx(t.code,{children:"onMixedStateChange"}),` for handling any changes to the selection of
items and the current state of the selection: `,e.jsx(t.code,{children:"selectedItems"}),"."]}),`
`,e.jsxs(t.p,{children:["Find the full documentation under ",e.jsx(t.a,{href:"../?path=/docs/hooks-usemultiselect--docs",children:"useMultiSelect"}),"."]}),`
`,e.jsx(t.h2,{id:"changelog",children:"Changelog"}),`
`,e.jsx(x,{changelogData:C})]})}function F(l={}){const{wrapper:t}={...a(),...l.components};return t?e.jsx(t,{...l,children:e.jsx(r,{...l})}):r(l)}export{F as default};
