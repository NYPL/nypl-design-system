import{j as n,a as t,F as h}from"./jsx-runtime-09ad29cb.js";import{M as p,D as u,C as r,A as m,b as l}from"./index-5d3bb37f.js";import{F as c,W as d,L as f,U as g,C as b}from"./FilterBar.stories-43c281a5.js";import{L as i}from"./Link-0ed02cf7.js";import{u as s}from"./index-a14fc4fc.js";import"./index-f2bd0723.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-359c5387.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-86fba1ca.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-22f77b05.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-944fe3e7.js";import"./index-0a26bc51.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-b629ee11.js";import"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import"./chakra-ui-layout.esm-b2fa9d31.js";import"./chunk-OPEUWD42-a3b45fd8.js";import"./index-6148c31a.js";import"./FilterBar-491de042.js";import"./Button-a3ea41e0.js";import"./Icon-6616a4b9.js";import"./chakra-ui-hooks.esm-02e82f78.js";import"./chakra-ui-visually-hidden.esm-1c1b3639.js";import"./ButtonGroup-3ea9dbd7.js";import"./useNYPLBreakpoints-91c0faa1.js";import"./Heading-2ec2ea62.js";import"./MultiSelect-e1506487.js";import"./chakra-ui-focus-lock.esm-eb172e6c.js";import"./index-fb519959.js";import"./defineProperty-f749b14d.js";import"./index-58d3fd43.js";import"./Checkbox-ac4cd2b8.js";import"./ComponentWrapper-82a15cf7.js";import"./Text-eabcdc0a.js";import"./utils-acca7d12.js";import"./chakra-ui-checkbox.esm-6eb4bb1a.js";import"./chakra-ui-form-control.esm-c23b95fa.js";import"./MultiSelectGroup-da51fa55.js";import"./Fieldset-8799f492.js";import"./chakra-ui-modal.esm-af0e92e4.js";import"./chakra-ui-portal.esm-c70f6466.js";import"./chakra-ui-transition.esm-402cd1c1.js";import"./useMultiSelect-de2913cb.js";function a(o){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",a:"a",strong:"strong",h3:"h3"},s(),o.components);return t(h,{children:[n(p,{of:c}),`
`,n(e.h1,{id:"filterbar",children:"FilterBar"}),`
`,t(e.table,{children:[n(e.thead,{children:t(e.tr,{children:[n(e.th,{children:"Component Version"}),n(e.th,{children:"DS Version"})]})}),t(e.tbody,{children:[t(e.tr,{children:[n(e.td,{children:"Added"}),n(e.td,{children:n(e.code,{children:"1.4.0"})})]}),t(e.tr,{children:[n(e.td,{children:"Latest"}),n(e.td,{children:n(e.code,{children:"1.5.0"})})]})]})]}),`
`,n(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:[`
`,n(i,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,t(e.li,{children:[`
`,n(i,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,t(e.li,{children:[`
`,n(i,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,t(e.li,{children:[`
`,n(i,{href:"#layout-patterns",target:"_self",children:"Layout Patterns"}),`
`]}),`
`,t(e.li,{children:[`
`,n(i,{href:"#ui-containers",target:"_self",children:"UI Containers"}),`
`]}),`
`,t(e.li,{children:[`
`,n(i,{href:"#usefilterbar-hook",target:"_self",children:"useFilterBar hook"}),`
`]}),`
`]}),`
`,n(e.h2,{id:"overview",children:"Overview"}),`
`,n(u,{of:c}),`
`,n(e.h2,{id:"component-props",children:"Component Props"}),`
`,n(r,{of:d}),`
`,n(m,{of:d}),`
`,n(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,t(e.p,{children:["The ",n(e.code,{children:"FilterBar"}),` component is a wrapper component for components with filter
functionality. The accessibility of `,n(e.code,{children:"FilterBar"}),` depends on the passed child
components accessibility. See the accessibility details of valid FilterBar child
components:`]}),`
`,t(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"../?path=/docs/components-form-elements-multiselect--docs#accessibility",children:"MultiSelect"})}),`
`,n(e.li,{children:n(e.a,{href:"../?path=/docs/components-form-elements-multiselectgroup--docs#accessibility",children:"MultiSelectGroup"})}),`
`]}),`
`,n(e.h2,{id:"layout-patterns",children:"Layout Patterns"}),`
`,t(e.p,{children:["The display of the ",n(e.code,{children:"FilterBar"})," child components can be set to a ",n(e.code,{children:'"row"'}),` or a
`,n(e.code,{children:'"column"'})," layout. On screen width under 600px width the ",n(e.code,{children:"layout"}),` is
automatically set to `,n(e.code,{children:'"column"'}),"."]}),`
`,t(e.p,{children:[n(e.strong,{children:"Note:"})," when ",n(e.code,{children:'layout = "column"'}),` is passed, the MultiSelect components will have
`,n(e.code,{children:"isBlockElement"})," set to ",n(e.code,{children:"true"})," by default and the child components ",n(e.code,{children:"width"}),`
will be set to `,n(e.code,{children:'"full"'}),". However, the child components ",n(e.code,{children:"width"}),` can be
controlled by the `,n(e.code,{children:"filterWidth"})," prop and set to either ",n(e.code,{children:'"full"'})," or ",n(e.code,{children:'"default"'}),`.
The passed in width will take precedence over the default behavior.`]}),`
`,t(e.p,{children:[n(e.strong,{children:"Note:"}),` It's suggested that the global Apply and Clear buttons be used with
`,n(e.code,{children:"listbox"})," MultiSelect variants. MultiSelect ",n(e.code,{children:"dialog"}),` variants render an Apply
and a Clear button within each MultiSelect component.`]}),`
`,n(r,{of:f}),`
`,n(e.h2,{id:"ui-containers",children:"UI Containers"}),`
`,t(e.p,{children:["The ",n(e.code,{children:"FilterBar"}),` component will often be rendered within a UI container with
`,n(e.code,{children:"background-color"})," and ",n(e.code,{children:"padding"}),` styles applied. This treatment can easily be
accomplished using the `,n(e.code,{children:"Box"})," component with inline styles."]}),`
`,n(e.p,{children:`If a consuming app supports dark mode, styles for both light and dark mode will
be required for the UI container element.`}),`
`,t(e.p,{children:[n(e.strong,{children:"Note:"}),` Future DS updates may provide a standalone component to implement a
UI container similar to what is used in these example.`]}),`
`,n(e.h3,{id:"row-layout",children:"Row Layout"}),`
`,n(r,{of:g}),`
`,n(l,{code:`
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
`,language:"jsx"}),`
`,n(l,{code:`
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
; `,language:"jsx"}),`
`,n(e.h3,{id:"column-layout",children:"Column Layout"}),`
`,n(r,{of:b}),`
`,n(l,{code:`
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
`,language:"jsx"}),`
`,n(l,{code:`
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
`,language:"jsx"}),`
`,n(e.h2,{id:"usefilterbar-hook",children:"useFilterBar hook"}),`
`,t(e.p,{children:["Find the full documentation under ",n(e.a,{href:"../?path=/docs/hooks-usefilterbar--docs",children:"useFilterBar"}),"."]}),`
`,t(e.p,{children:[n(e.code,{children:"useFilterBar"}),` is an optional hook for cases where managing the state of the
component in the consuming app is less of a concern and general ease of use is
prefered.`]}),`
`,t(e.p,{children:[`The hook returns an object containing all the props and state needed to handle
the selectedItems. That includes the functions `,n(e.code,{children:"onChange"}),", ",n(e.code,{children:"onMixedStateChange"}),`,
`,n(e.code,{children:"onClear"}),", ",n(e.code,{children:"onClearAll"}),` for handling any changes to the selection of items,
a `,n(e.code,{children:"setSelectedItems"}),` function to control or manipulate the (initial) state of
`,n(e.code,{children:"selectedItems"}),", and a ",n(e.code,{children:"selectedItems"}),` object to house the current state of the
selections. Additionally it returns an `,n(e.code,{children:"onToggle"})," function or ",n(e.code,{children:"onClose"}),"/",n(e.code,{children:"onOpen"}),`
to control the `,n(e.code,{children:"isModalOpen"})," state, and the boolean value ",n(e.code,{children:"isModalOpen"}),` for a
`,n(e.code,{children:"Filter"})," modal overlay."]})]})}function ue(o={}){const{wrapper:e}=Object.assign({},s(),o.components);return e?n(e,Object.assign({},o,{children:n(a,o)})):a(o)}export{ue as default};
//# sourceMappingURL=FilterBar-c0baa8e9.js.map
