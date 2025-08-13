import{u as s,j as e,M as r,L as l,B as d}from"./iframe-CFLVJZOZ.js";function t(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Style Guide/Filtering/Applying & clearing filters"}),`
`,e.jsx(n.h1,{id:"applying-and-clearing-filters",children:"Applying and clearing filters"}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(l,{href:"#methods",target:"_self",children:"Methods"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(l,{href:"#applying-filters",target:"_self",children:"Applying filters"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(l,{href:"#clearing-filters",target:"_self",children:"Clearing filters"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(l,{href:"#populating-results",target:"_self",children:"Populating results"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(n.p,{children:`Filters should be applied and cleared using one of two methods: live filtering
or batch filtering.`}),`
`,e.jsx(d,{content:e.jsxs(e.Fragment,{children:[e.jsx(n.strong,{children:"REMINDER:"})," Live filtering is the recommended method for NYPL web apps."]}),mb:"s",type:"recommendation"}),`
`,e.jsx(n.h3,{id:"live-filtering",children:"Live filtering"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Data is updated in real-time as the user selects filtering options."}),`
`,e.jsxs(n.li,{children:["Live filtering is the recommended method for applying filters because:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`Users tend to expect and are familiar with real-time filtering due to its
prevalence in e-commerce and elsewhere.`}),`
`,e.jsxs(n.li,{children:["We have observed in previous research that users tend to miss ",e.jsx(n.code,{children:"Apply"}),`
buttons, particularly when they sit out of sight on the page.`]}),`
`,e.jsx(n.li,{children:`Batch filtering comes at the risk of returning zero results after which
users have to engage in a trial-and-error process to get useful results.`}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"batch-filtering",children:"Batch filtering"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`Data is updated after the user selects one or more filtering options and then
takes the additional action of clicking the "Apply filters" button included in
the `,e.jsx(n.code,{children:"filter bar"}),"."]}),`
`,e.jsxs(n.li,{children:["Batch filtering is recommended for:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"very heavy data sets"}),`
`,e.jsx(n.li,{children:"low performing apps"}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"applying-filters",children:"Applying filters"}),`
`,e.jsx(n.p,{children:"When filters are applied, the following should be addressed:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["update the ",e.jsx(n.code,{children:"active filters"}),` list based on the filter options that have been
selected`]}),`
`,e.jsxs(n.li,{children:["update the ",e.jsx(n.code,{children:"results"})," list based on the filter options that have been selected"]}),`
`,e.jsxs(n.li,{children:["update the ",e.jsx(n.code,{children:"total results"}),` heading to reflect the number of items in the
updated `,e.jsx(n.code,{children:"results"})," list"]}),`
`]}),`
`,e.jsx(n.h2,{id:"clearing-filters",children:"Clearing filters"}),`
`,e.jsx(n.p,{children:`Filters can be cleared using various methods within the page structure,
including global methods as well as methods for clearing individual filters.`}),`
`,e.jsx(n.p,{children:"When filters are cleared, the following should be addressed:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`if a global "clear filters" button is clicked, reset all the form input
elements within the `,e.jsx(n.code,{children:"filter bar"})]}),`
`,e.jsxs(n.li,{children:["update the ",e.jsx(n.code,{children:"active filters"})," list to remove all filter options"]}),`
`,e.jsxs(n.li,{children:["update the ",e.jsx(n.code,{children:"results"})," list to an unfiltered state"]}),`
`,e.jsxs(n.li,{children:["update the ",e.jsx(n.code,{children:"total results"}),` heading to reflect the number of items in the
updated `,e.jsx(n.code,{children:"results"})," list"]}),`
`]}),`
`,e.jsx(n.h3,{id:"keyword-search",children:"Keyword search"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`All filters that have been applied should be programmatically removed any time
a keyword search is executed (i.e. a new keyword search should always produce
a new unfiltered results list)`}),`
`]}),`
`,e.jsx(n.h3,{id:"filter-bar",children:"Filter bar"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:['Click the "Clear all filters" button in the ',e.jsx(n.code,{children:"filter bar"}),` (if available) to
remove all filters that have been applied`]}),`
`]}),`
`,e.jsx(n.h3,{id:"active-filters-list",children:"Active filters list"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:['Click an "active filter" tag rendered in the ',e.jsx(n.code,{children:"active filters"}),` list to remove a
specific filter that has been applied`]}),`
`,e.jsxs(n.li,{children:['Click the "Clear filters" button in the ',e.jsx(n.code,{children:"active filters"}),` list to remove all
filters that have been applied`]}),`
`]}),`
`,e.jsx(n.h3,{id:"form-input-components",children:"Form input components"}),`
`,e.jsx(n.p,{children:`Many form input components can be reset manually. Examples include, but may not
be limited to, the following methods:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"DatePicker component"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Deleting a date that has been entered into the input field"}),`
`,e.jsx(n.li,{children:"Clicking the clear X"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"MultiSelect component"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`Unchecking a checkbox to remove that single selected option (or set of
options in case of nested filters)`}),`
`,e.jsx(n.li,{children:`Clicking the "total options selected" pill button next to the heading to
remove all selected options`}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"TextInput component"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Deleting text that has been entered into the input field"}),`
`,e.jsx(n.li,{children:"Clicking the clear X"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Toggle component"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Clicking the component to return the toggle to its initial state"}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"populating-results",children:"Populating results"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"OR"})," logic should be used within a filtering facet."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Ex: selecting ",e.jsx(n.code,{children:"English (5)"})," and ",e.jsx(n.code,{children:"Spanish (2)"})," from a ",e.jsx(n.code,{children:"Languages"}),` filter should
yield 7 results in total`]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"AND"})," logic should be used between categories."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Ex: selecting ",e.jsx(n.code,{children:"Spanish (2)"})," from a ",e.jsx(n.code,{children:"Languages"}),` filter should cause other
filters to update their options, adjusting the number of associated items for
each option and disabling options with 0 associated items`]}),`
`]})]})}function c(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{c as default};
