import{j as o,a as r,F as s}from"./jsx-runtime-09ad29cb.js";import{M as a,D as p,b as t,C as d,A as u}from"./index-42243e0e.js";import{F as l,W as c,a as F}from"./Form.stories-85be959b.js";import{L as i}from"./Link-0ed02cf7.js";import{u as h}from"./index-a14fc4fc.js";import"./index-f2bd0723.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-b32021bd.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-86fba1ca.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-22f77b05.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-944fe3e7.js";import"./index-0a26bc51.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-b629ee11.js";import"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import"./chakra-ui-layout.esm-b2fa9d31.js";import"./index-6148c31a.js";import"./Button-a3ea41e0.js";import"./Icon-6616a4b9.js";import"./chakra-ui-hooks.esm-02e82f78.js";import"./chakra-ui-visually-hidden.esm-1c1b3639.js";import"./ButtonGroup-3ea9dbd7.js";import"./useNYPLBreakpoints-91c0faa1.js";import"./Checkbox-ac4cd2b8.js";import"./ComponentWrapper-82a15cf7.js";import"./Heading-2ec2ea62.js";import"./Text-eabcdc0a.js";import"./utils-acca7d12.js";import"./chakra-ui-checkbox.esm-6eb4bb1a.js";import"./chakra-ui-form-control.esm-c23b95fa.js";import"./index-fb519959.js";import"./CheckboxGroup-ac2921c3.js";import"./Fieldset-8799f492.js";import"./spacing-06362f80.js";import"./DatePicker-2b0e263e.js";import"./defineProperty-f749b14d.js";import"./popper-f3391c26.js";import"./Form-7babaf24.js";import"./SimpleGrid-e54e0b68.js";import"./TextInput-3683470d.js";import"./Label-2b2058d3.js";import"./HorizontalRule-da9b0069.js";import"./Radio-c107ee3b.js";import"./RadioGroup-8ceb9bfa.js";import"./Select-43c64995.js";function m(n){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",a:"a",strong:"strong"},h(),n.components);return r(s,{children:[o(a,{of:l}),`
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
`,language:"tsx"})]})}function pe(n={}){const{wrapper:e}=Object.assign({},h(),n.components);return e?o(e,Object.assign({},n,{children:o(m,n)})):m(n)}export{pe as default};
//# sourceMappingURL=Form-bdaad716.js.map
