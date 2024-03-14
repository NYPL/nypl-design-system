import{j as o,a as r,F as s}from"./jsx-runtime-fdf4db99.js";import{M as a,D as p,b as t,C as d,A as u}from"./index-445595fc.js";import{F as l,W as c,a as F}from"./Form.stories-2549f363.js";import{L as i}from"./Link-24c1437a.js";import{u as h}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-da8f5748.js";import"../sb-preview/runtime.js";import"./index-42773b54.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-2a967270.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-33c8ee8e.js";import"./index-314a82e0.js";import"./index-11d98b33.js";import"./index-356e4a49.js";import"./index-8f383b84.js";import"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import"./chakra-ui-layout.esm-e0dbb94e.js";import"./index-6148c31a.js";import"./Button-948e9be8.js";import"./Icon-4eeffe51.js";import"./chakra-ui-hooks.esm-539e7d47.js";import"./tiny-invariant-dd7d57d2.js";import"./chakra-ui-visually-hidden.esm-a796d0b5.js";import"./ButtonGroup-c2c033a6.js";import"./useNYPLBreakpoints-2881f83d.js";import"./Checkbox-6e7b1e16.js";import"./ComponentWrapper-aa2910be.js";import"./useDSHeading-94e72700.js";import"./Heading-7eebc756.js";import"./Text-d88b2f7a.js";import"./HelperErrorText-55c57f50.js";import"./chakra-ui-checkbox.esm-772830ca.js";import"./chakra-ui-form-control.esm-5c4917b4.js";import"./index-13103a50.js";import"./CheckboxGroup-6c26da72.js";import"./Fieldset-46002ef9.js";import"./spacing-06362f80.js";import"./DatePicker-542b5b5a.js";import"./defineProperty-84a138b7.js";import"./popper-f3391c26.js";import"./Form-b79b3734.js";import"./SimpleGrid-bd04b221.js";import"./TextInput-70995d87.js";import"./Label-d380cca8.js";import"./HorizontalRule-3ade1aff.js";import"./Radio-8cdc7037.js";import"./RadioGroup-8ef77e28.js";import"./Select-2c2d1d20.js";function m(n){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",a:"a",strong:"strong"},h(),n.components);return r(s,{children:[o(a,{of:l}),`
`,o(e.h1,{id:"form",children:"Form"}),`
`,r(e.table,{children:[o(e.thead,{children:r(e.tr,{children:[o(e.th,{children:"Component Version"}),o(e.th,{children:"DS Version"})]})}),r(e.tbody,{children:[r(e.tr,{children:[o(e.td,{children:"Added"}),o(e.td,{children:o(e.code,{children:"0.23.2"})})]}),r(e.tr,{children:[o(e.td,{children:"Latest"}),o(e.td,{children:o(e.code,{children:"1.0.6"})})]})]})]}),`
`,o(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,r(e.ul,{children:[`
`,r(e.li,{children:[`
`,o(i,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,r(e.li,{children:[`
`,o(i,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,r(e.li,{children:[`
`,o(i,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,r(e.li,{children:[`
`,o(i,{href:"#spacing-variants",target:"_self",children:"Spacing Variants"}),`
`]}),`
`,r(e.li,{children:[`
`,o(i,{href:"#example-code",target:"_self",children:"Example Code"}),`
`]}),`
`]}),`
`,o(e.h2,{id:"overview",children:"Overview"}),`
`,o(p,{of:l}),`
`,r(e.p,{children:["The ",o(e.code,{children:"Form"})," component renders a standard ",o(e.code,{children:"<form>"}),` element and should be used to
handle layout and spacing for child input fields. `,o(e.code,{children:"FormRow"})," and ",o(e.code,{children:"FormField"}),`
components should be used to build the `,o(e.code,{children:"<form>"}),` structure and to arrange input
fields as needed.`]}),`
`,o(t,{code:`
<Form id="form-id">
  <FormRow>
    <FormField>{/* ... */}</FormField>
  </FormRow>
  <FormRow>
    <FormField>{/* ... */}</FormField>
  </FormRow>
</Form>
`,language:"tsx"}),`
`,r(e.p,{children:[o(e.code,{children:"FormField"}),` should be used as a parent for all input components from the
Reservoir Design System (DS) (`,o(e.code,{children:"Button"}),", ",o(e.code,{children:"Select"}),", ",o(e.code,{children:"TextInput"}),", etc.)."]}),`
`,r(e.p,{children:[o(e.code,{children:"FormRow"})," should be used as a parent of multiple ",o(e.code,{children:"FormField"}),` components when you
need to render multiple input components in a horizontal row.`]}),`
`,o(e.h2,{id:"component-props",children:"Component Props"}),`
`,o(d,{of:c}),`
`,o(u,{of:c}),`
`,o(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,r(e.p,{children:["The ",o(e.code,{children:"Form"})," component renders a standard ",o(e.code,{children:"<form>"}),` element and should be used to
wrap all form elements. A `,o(e.code,{children:"Form"})," should have a ",o(e.code,{children:"Button"})," component with a ",o(e.code,{children:"type"}),`
of `,o(e.code,{children:"submit"})," to submit the form to a server through the ",o(e.code,{children:"Form"}),"'s ",o(e.code,{children:"action"})," prop."]}),`
`,o(e.p,{children:"Resources:"}),`
`,r(e.ul,{children:[`
`,o(e.li,{children:o(e.a,{href:"https://webaim.org/techniques/forms/",target:"_blank",rel:"nofollow noopener noreferrer",children:"WebAIM Creating Accessible Forms"})}),`
`,o(e.li,{children:o(e.a,{href:"https://www.deque.com/blog/anatomy-of-accessible-forms-best-practices/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Deque The Anatomy of Accessible Forms: Best Practices"})}),`
`]}),`
`,o(e.h2,{id:"spacing-variants",children:"Spacing Variants"}),`
`,r(e.p,{children:["By default, the ",o(e.code,{children:"Form"}),` component will handle the NYPL spacing around form input
elements. The default spacing value is large `,o(e.code,{children:"grid.l"}),`, which corresponds to the
CSS variable `,o(e.code,{children:"--nypl-space-l"})," (2rem / 32px)."]}),`
`,r(e.p,{children:[o(e.strong,{children:"IMPORTANT:"}),` The default spacing should not be overwritten without a very good
reason.`]}),`
`,r(e.p,{children:["Below are examples of the spacing values available to use in the ",o(e.code,{children:"gap"}),` prop of
the `,o(e.code,{children:"Form"})," component: ",o(e.code,{children:'"grid.xxs"'}),", ",o(e.code,{children:'"grid.xs"'}),", ",o(e.code,{children:'"grid.s"'}),", ",o(e.code,{children:'"grid.m"'}),`,
`,o(e.code,{children:'"grid.l"'}),", ",o(e.code,{children:'"grid.xl"'}),", ",o(e.code,{children:'"grid.xxl"'}),"."]}),`
`,o(d,{of:F}),`
`,o(e.h2,{id:"example-code",children:"Example Code"}),`
`,o(t,{code:`
<Form action="/end/point" method="get" gap="grid.l" id="example-form">
  <FormField>
    <TextInput
      labelText="Username"
      helperText="Make sure to complete this field."
      isRequired
    />
  </FormField>
  <FormField>
    <TextInput
      labelText="Password"
      helperText="Make sure to complete this field."
      isRequired
    />
  </FormField>
  <FormRow>
    <FormField>
      <TextInput
        labelText="Phone Field"
        helperText="This one is up to you."
        type="tel"
      />
    </FormField>
    <FormField>
      <TextInput
        labelText="URL Field"
        helperText="This one is up to you."
        type="url"
      />
    </FormField>
    <FormField>
      <TextInput
        labelText="Age"
        helperText="This one is up to you."
        type="number"
      />
    </FormField>
  </FormRow>
  <FormField>
    <Button>Submit</Button>
  </FormField>
</Form>
`,language:"tsx"})]})}function ue(n={}){const{wrapper:e}=Object.assign({},h(),n.components);return e?o(e,Object.assign({},n,{children:o(m,n)})):m(n)}export{ue as default};
//# sourceMappingURL=Form-760bb6ff.js.map
