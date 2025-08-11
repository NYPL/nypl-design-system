import{u as c,j as e,M as a,L as s,bv as h,S as r,C as i,bw as x}from"./iframe-D93LbwGv.js";import{C as m}from"./ComponentChangelogTable-Ck_3mwrR.js";import{F as t,W as d,a as p}from"./Form.stories-bm7lCZxb.js";const j=[{date:"2025-01-16",version:"3.5.2",type:"Update",affects:["Accessibility"],notes:["Updates the `Form` component to remove the `aria-label`. The previous value of `'form'` was redundant and not required."]},{date:"2024-03-14",version:"3.0.0",type:"Update",affects:["Documentation"],notes:["Updates the component's type definition to be more specific."]}];function l(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...c(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:t}),`
`,e.jsx(n.h1,{id:"form",children:"Form"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Component Version"}),e.jsx(n.th,{children:"DS Version"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Added"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"0.23.2"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Latest"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"3.5.2"})})]})]})]}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#spacing-variants",target:"_self",children:"Spacing Variants"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#example-code",target:"_self",children:"Example Code"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#changelog",target:"_self",children:"Changelog"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(h,{of:t}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Form"})," component renders a standard ",e.jsx(n.code,{children:"<form>"}),` element and should be used to
handle layout and spacing for child input fields. `,e.jsx(n.code,{children:"FormRow"})," and ",e.jsx(n.code,{children:"FormField"}),`
components should be used to build the `,e.jsx(n.code,{children:"<form>"}),` structure and to arrange input
fields as needed.`]}),`
`,e.jsx(r,{code:`
<Form id="form-id">
<FormRow>
  <FormField>{/* ... */}</FormField>
</FormRow>
<FormRow>
  <FormField>{/* ... */}</FormField>
</FormRow>
</Form>
`,language:"tsx"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"FormField"}),` should be used as a parent for all input components from the
Reservoir Design System (DS) (`,e.jsx(n.code,{children:"Button"}),", ",e.jsx(n.code,{children:"Select"}),", ",e.jsx(n.code,{children:"TextInput"}),", etc.)."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"FormRow"})," should be used as a parent of multiple ",e.jsx(n.code,{children:"FormField"}),` components when you
need to render multiple input components in a horizontal row.`]}),`
`,e.jsx(n.h2,{id:"component-props",children:"Component Props"}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(x,{of:d}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Form"})," component renders a standard ",e.jsx(n.code,{children:"<form>"}),` element and should be used to
wrap all form elements. A `,e.jsx(n.code,{children:"Form"})," should have a ",e.jsx(n.code,{children:"Button"})," component with a ",e.jsx(n.code,{children:"type"}),`
of `,e.jsx(n.code,{children:"submit"})," to submit the form to a server through the ",e.jsx(n.code,{children:"Form"}),"'s ",e.jsx(n.code,{children:"action"})," prop."]}),`
`,e.jsxs(n.p,{children:["Note: An ",e.jsx(n.code,{children:"aria-label"})," is not required. If one is needed, make sure it is descriptive."]}),`
`,e.jsx(n.p,{children:"Resources:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://webaim.org/techniques/forms/",rel:"nofollow",children:"WebAIM Creating Accessible Forms"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.deque.com/blog/anatomy-of-accessible-forms-best-practices/",rel:"nofollow",children:"Deque The Anatomy of Accessible Forms: Best Practices"})}),`
`]}),`
`,e.jsx(n.h2,{id:"spacing-variants",children:"Spacing Variants"}),`
`,e.jsxs(n.p,{children:["By default, the ",e.jsx(n.code,{children:"Form"}),` component will handle the NYPL spacing around form input
elements. The default spacing value is large `,e.jsx(n.code,{children:"grid.l"}),`, which corresponds to the
CSS variable `,e.jsx(n.code,{children:"--nypl-space-l"})," (2rem / 32px)."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"IMPORTANT:"}),` The default spacing should not be overwritten without a very good
reason.`]}),`
`,e.jsxs(n.p,{children:["Below are examples of the spacing values available to use in the ",e.jsx(n.code,{children:"gap"}),` prop of
the `,e.jsx(n.code,{children:"Form"})," component: ",e.jsx(n.code,{children:'"grid.xxs"'}),", ",e.jsx(n.code,{children:'"grid.xs"'}),", ",e.jsx(n.code,{children:'"grid.s"'}),", ",e.jsx(n.code,{children:'"grid.m"'}),`,
`,e.jsx(n.code,{children:'"grid.l"'}),", ",e.jsx(n.code,{children:'"grid.xl"'}),", ",e.jsx(n.code,{children:'"grid.xxl"'}),"."]}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h2,{id:"example-code",children:"Example Code"}),`
`,e.jsx(r,{code:`
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
`,language:"tsx"}),`
`,e.jsx(n.h2,{id:"changelog",children:"Changelog"}),`
`,e.jsx(m,{changelogData:j})]})}function g(o={}){const{wrapper:n}={...c(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(l,{...o})}):l(o)}export{g as default};
