import{j as t,a as n,F as s}from"./jsx-runtime-09ad29cb.js";import{M as a,D as p,C as r,A as m}from"./index-42243e0e.js";import{M as l,C as c,L as u}from"./MultiSelectGroup.stories-92ec7607.js";import{L as o}from"./Link-0ed02cf7.js";import{u as h}from"./index-a14fc4fc.js";import"./index-f2bd0723.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-b32021bd.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-86fba1ca.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-22f77b05.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-944fe3e7.js";import"./index-0a26bc51.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-b629ee11.js";import"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import"./chakra-ui-layout.esm-b2fa9d31.js";import"./chunk-OPEUWD42-a3b45fd8.js";import"./index-6148c31a.js";import"./MultiSelect-e1506487.js";import"./chakra-ui-focus-lock.esm-eb172e6c.js";import"./index-fb519959.js";import"./defineProperty-f749b14d.js";import"./index-58d3fd43.js";import"./Checkbox-ac4cd2b8.js";import"./ComponentWrapper-82a15cf7.js";import"./Heading-2ec2ea62.js";import"./Text-eabcdc0a.js";import"./utils-acca7d12.js";import"./chakra-ui-checkbox.esm-6eb4bb1a.js";import"./chakra-ui-hooks.esm-02e82f78.js";import"./chakra-ui-form-control.esm-c23b95fa.js";import"./chakra-ui-visually-hidden.esm-1c1b3639.js";import"./Icon-6616a4b9.js";import"./Button-a3ea41e0.js";import"./ButtonGroup-3ea9dbd7.js";import"./useNYPLBreakpoints-91c0faa1.js";import"./MultiSelectGroup-da51fa55.js";import"./Fieldset-8799f492.js";import"./useMultiSelect-de2913cb.js";import"./types-5ca2ba04.js";function d(i){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",a:"a"},h(),i.components);return n(s,{children:[t(a,{of:l}),`
`,t(e.h1,{id:"multiselectgroup",children:"MultiSelectGroup"}),`
`,n(e.table,{children:[t(e.thead,{children:n(e.tr,{children:[t(e.th,{children:"Component Version"}),t(e.th,{children:"DS Version"})]})}),n(e.tbody,{children:[n(e.tr,{children:[t(e.td,{children:"Added"}),t(e.td,{children:t(e.code,{children:"1.4.0"})})]}),n(e.tr,{children:[t(e.td,{children:"Latest"}),t(e.td,{children:t(e.code,{children:"1.5.0"})})]})]})]}),`
`,t(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,t(o,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,n(e.li,{children:[`
`,t(o,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,n(e.li,{children:[`
`,t(o,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,n(e.li,{children:[`
`,t(o,{href:"#layout-patterns",target:"_self",children:"Layout Patterns"}),`
`]}),`
`]}),`
`,t(e.h2,{id:"overview",children:"Overview"}),`
`,t(p,{of:l}),`
`,t(e.h2,{id:"component-props",children:"Component Props"}),`
`,t(r,{of:c}),`
`,t(m,{of:c}),`
`,t(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n(e.p,{children:["The ",t(e.code,{children:"MultiSelectGroup"})," renders a group of ",t(e.code,{children:"MultiSelect"}),` components that are wrapped
in a `,t(e.code,{children:"<fieldset>"})," element. The ",t(e.code,{children:"<fieldset>"})," element renders a ",t(e.code,{children:"<legend>"}),` element
that can be visually hidden through the `,t(e.code,{children:"showLabel"})," prop. If the ",t(e.code,{children:"<legend>"}),` is
hidden an `,t(e.code,{children:"aria-label"})," attribute with ",t(e.code,{children:"labelText"})," value will be rendered instead."]}),`
`,n(e.p,{children:["For accessibility information on the ",t(e.code,{children:"MultiSelect"}),` component, see the
`,t(e.a,{href:"../?path=/docs/components-form-elements-multiselect--docs#accessibility",children:"MultiSelect Accessibility"})," documentation."]}),`
`,t(e.h2,{id:"layout-patterns",children:"Layout Patterns"}),`
`,n(e.p,{children:["The width of the MultiSelect components can be passed through the ",t(e.code,{children:"multiSelectWidth"}),`
prop, with values of `,t(e.code,{children:'"default"'}),", ",t(e.code,{children:'"fitContent"'}),", and ",t(e.code,{children:'"full"'}),`.
On screen width under 600px width the `,t(e.code,{children:"layout"}),` is automatically set to "column"
and the `,t(e.code,{children:"multiSelectWidth"}),' to "full". Note: when ',t(e.code,{children:'layout = "column"'}),` is passed,
the MultiSelect components will have `,t(e.code,{children:"isBlockElement"})," set to ",t(e.code,{children:"true"})," by default."]}),`
`,t(r,{of:u}),`
`,t(e.h2,{id:"usemultiselect-hook",children:"useMultiSelect hook"}),`
`,n(e.p,{children:[t(e.code,{children:"useMultiSelect"}),` is an optional hook for
cases where managing the state of the component in the consuming app is less
of a concern and general ease of use is prefered.`]}),`
`,n(e.p,{children:[`The hook returns an object containing all the props and state needed to handle
the selectedItems. That includes the functions `,t(e.code,{children:"onChange"}),", ",t(e.code,{children:"onClear"}),", ",t(e.code,{children:"onClearAll"}),`,
`,t(e.code,{children:"onMixedStateChange"}),` for handling any changes to the selection of items and the
current state of the selection: `,t(e.code,{children:"selectedItems"}),`. Additionally it returns
`,t(e.code,{children:"setSelectedItems"})," for setting an initial state of ",t(e.code,{children:"selectedItems"}),` or manipulate
the `,t(e.code,{children:"selectedItems"})," if needed."]}),`
`,n(e.p,{children:[`Due to it's data structure and functions setup, it is capable to handle a group
of `,t(e.code,{children:"MultiSelect"}),` components. Find the full documentation under
`,t(e.a,{href:"../?path=/docs/hooks-usemultiselect--docs",children:"useMultiSelect"}),"."]})]})}function ce(i={}){const{wrapper:e}=Object.assign({},h(),i.components);return e?t(e,Object.assign({},i,{children:t(d,i)})):d(i)}export{ce as default};
//# sourceMappingURL=MultiSelectGroup-aa27f061.js.map
