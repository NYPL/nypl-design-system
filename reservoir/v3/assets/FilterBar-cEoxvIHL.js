import{u as d,j as e,M as c,y as i,bu as s,L as o,B as h,a as l}from"./iframe-CFLVJZOZ.js";const a=""+new URL("exampleColumn-Upqc3-9-.png",import.meta.url).href,p=""+new URL("examplePopup-BDluWQIO.png",import.meta.url).href,u=""+new URL("exampleRow-B_YZmSr0.png",import.meta.url).href,x=""+new URL("filterBar-Dv5bhq8l.png",import.meta.url).href;function r(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...d(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Style Guide/Filtering/Page elements/Filter bar"}),`
`,e.jsx(n.h1,{id:"filter-bar",children:"Filter bar"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"filter bar"}),` is a wrapper for individual form input elements, including the
following DS components: `,e.jsx(n.code,{children:"CheckboxGroup"}),", ",e.jsx(n.code,{children:"MultiSelectGroup"}),", ",e.jsx(n.code,{children:"RadioGroup"}),`,
`,e.jsx(n.code,{children:"Checkbox"}),", ",e.jsx(n.code,{children:"DatePicker"}),", ",e.jsx(n.code,{children:"MultiSelect"}),", ",e.jsx(n.code,{children:"Radio"}),", ",e.jsx(n.code,{children:"Select"}),", ",e.jsx(n.code,{children:"Slider"}),`,
`,e.jsx(n.code,{children:"TextInput"}),", and ",e.jsx(n.code,{children:"Toggle"}),"."]}),`
`,e.jsx(i,{alt:"Example of filter bar",src:x,...s}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(o,{href:"#rendering",target:"_self",children:"Rendering"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(o,{href:"#filter-option-labeling",target:"_self",children:"Filter option labeling"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(o,{href:"#filter-option-status",target:"_self",children:"Filter option status"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(o,{href:"#action-buttons",target:"_self",children:"Action buttons"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"rendering",children:"Rendering"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"filter bar"}),` element should be rendered using the DS
`,e.jsx(n.a,{href:"./?path=/docs/components-form-elements-filterbarinline--docs",children:"FilterBarInline"}),`
and
`,e.jsx(n.a,{href:"./?path=/docs/components-form-elements-filterbarpopup--docs",children:"FilterBarPopup"}),`
components.`]}),`
`,e.jsx(h,{content:e.jsxs(e.Fragment,{children:[e.jsx(n.strong,{children:"IMPORTANT:"})," The filter bar should be configured based on the viewport."]}),mb:"s",type:"warning"}),`
`,e.jsx(n.h3,{id:"desktop-and-tablet",children:"Desktop and tablet"}),`
`,e.jsxs(n.p,{children:["For tablet and desktop viewports, the ",e.jsx(n.code,{children:"FilterBarInline"}),` component should be used
to render the `,e.jsx(n.code,{children:"filter bar"}),` element using one of two layouts: column (vertical)
or row (horizontal).`]}),`
`,e.jsx(n.h4,{id:"column-vertical",children:"Column (vertical)"}),`
`,e.jsxs(l,{display:"flex",flexDirection:{base:"column",md:"row"},gap:"l",children:[e.jsx(l,{children:e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"filter bar"}),` element should be placed in a sidebar on either the left or
right side of the main content area.`]}),`
`,e.jsx(n.li,{children:`This configuration allows users to easily make selections across multiple
facets.`}),`
`,e.jsxs(n.li,{children:["This configuration is recommended:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`for filters that are non-contextual and apply to the entirety of the main
content area`}),`
`,e.jsx(n.li,{children:"when there are a large number of filter facets"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Using the ",e.jsx(n.code,{children:"MultiSelect"})," component:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"MultiSelect"}),` component is the most common input element used for
applying filter options`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"MultiSelect"}),` components should be configured to allow multiple
`,e.jsx(n.code,{children:"MultiSelect"})," components to be opened at the same time"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"MultiSelect"})," components should be configured to use the ",e.jsx(n.code,{children:'"expand"'}),` overflow
functionality`]}),`
`,e.jsxs(n.li,{children:["When ",e.jsx(n.code,{children:"MultiSelect"})," components are used, at least one ",e.jsx(n.code,{children:"MultiSelect"}),` component
should be opened by default to make the options visible to users; other
`,e.jsx(n.code,{children:"MultiSelect"})," components in the ",e.jsx(n.code,{children:"filter bar"})," may remain collapsed"]}),`
`]}),`
`]}),`
`]})}),e.jsx(i,{alt:"Example of column filter bar",border:"1px solid var(--nypl-colors-ui-border-default)",caption:"Example of column filter bar",src:a,...s})]}),`
`,e.jsx(n.h4,{id:"row-horizontal",children:"Row (horizontal)"}),`
`,e.jsxs(l,{display:"flex",flexDirection:{base:"column",md:"row"},gap:"l",children:[e.jsx(l,{children:e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"filter bar"}),` should be placed above the area of the page that is pertinent
to the filters.`]}),`
`,e.jsxs(n.li,{children:["The filters that compose the ",e.jsx(n.code,{children:"filter bar"}),` should render in one row for desktop
viewports (approx. five filter facets)`,`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`For specific use cases that need more than five filter facets, the filters
should render on a maximum of two rows for desktop viewports`}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:`Filters should be contextual and only apply to certain sections of the main
content area (such as the items table of the Research Catalog bib page)`}),`
`,e.jsxs(n.li,{children:["Using the ",e.jsx(n.code,{children:"MultiSelect"})," component:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"MultiSelect"})," components should be configured so that only one ",e.jsx(n.code,{children:"MultiSelect"}),`
component can be opened at any given time. (i.e. When a `,e.jsx(n.code,{children:"MultiSelect"}),`
component is opened, all other `,e.jsx(n.code,{children:"MultiSelect"})," components will close.)",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`NOTE: This configuration requires users to make selections in only one
opened dropdown at a time, making it slightly more difficult to quickly
make selections across multiple facets.`}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"MultiSelect"})," components should be configured to use the ",e.jsx(n.code,{children:'"scroll"'}),` overflow
functionality`]}),`
`]}),`
`]}),`
`]})}),e.jsx(i,{alt:"Example of row filter bar",border:"1px solid var(--nypl-colors-ui-border-default)",caption:"Example of row filter bar",src:u,...s})]}),`
`,e.jsx(n.h3,{id:"mobile",children:"Mobile"}),`
`,e.jsxs(l,{display:"flex",flexDirection:{base:"column",md:"row"},gap:"l",children:[e.jsxs(l,{children:[e.jsxs(n.p,{children:["For mobile viewports, the ",e.jsx(n.code,{children:"FilterBarPopup"}),` component should be used to render
the filter bar element. The `,e.jsx(n.code,{children:"filter bar"}),` element will not be visible when the
page first loads and users will need to click a "Show filters" button to open
the `,e.jsx(n.code,{children:"filter bar"})," in a modal overlay."]}),e.jsx(n.p,{children:"The filter input fields will be presented in a column layout."}),e.jsxs(n.p,{children:["Using the ",e.jsx(n.code,{children:"MultiSelect"})," component:"]}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"MultiSelect"})," components should be configured to allow multiple ",e.jsx(n.code,{children:"MultiSelect"}),`
components to be opened at the same time`]}),`
`]})]}),e.jsx(i,{alt:"Example of popup filters on mobile",border:"1px solid var(--nypl-colors-ui-border-default)",caption:"Example of popup filters on mobile",src:p,...s})]}),`
`,e.jsx(n.h2,{id:"filter-option-labeling",children:"Filter option labeling"}),`
`,e.jsxs(n.p,{children:[`The label text for filter options should include the number of items associated
with each filter option. For example, `,e.jsx(n.code,{children:"English (5)"})," or ",e.jsx(n.code,{children:"Offsite (11)"}),`. The
number of associated items included in the label text should be updated as
filter options are applied. This treatment is applicable for the labels of the
`,e.jsx(n.code,{children:"Checkbox"}),", ",e.jsx(n.code,{children:"Radio"}),", and ",e.jsx(n.code,{children:"Toggle"}),` components, and the labels of the checkbox
options within a `,e.jsx(n.code,{children:"MultiSelect"}),` component, as well as the options within a
`,e.jsx(n.code,{children:"Select"})," component."]}),`
`,e.jsx(n.h2,{id:"filter-option-status",children:"Filter option status"}),`
`,e.jsxs(n.p,{children:[`If the number of items associated with a filter option is zero (0), that filter
option should be set to disabled. Please note that this does not mean that a
filter option should be hidden. This treatment is applicable for the labels of
the `,e.jsx(n.code,{children:"Checkbox"}),", ",e.jsx(n.code,{children:"Radio"}),", and ",e.jsx(n.code,{children:"Toggle"}),` components, and the labels of the checkbox
options within a `,e.jsx(n.code,{children:"MultiSelect"})," component."]}),`
`,e.jsx(n.p,{children:`Disabling a filter retains consistency and avoids the the need for a user to
shift their eye. If the options set is constantly changing, users may become
disoriented. Additionally, disabled options still convey information. They let
the user know that an option might become available if they changed their filter
criteria.`}),`
`,e.jsx(n.h2,{id:"action-buttons",children:"Action buttons"}),`
`,e.jsx(n.h3,{id:"desktop-and-tablet-1",children:"Desktop and tablet"}),`
`,e.jsxs(n.p,{children:["For desktop and tablet viewports, the ",e.jsx(n.code,{children:"filter bar"}),` can display optional "Apply
filters" and "Clear all filters" buttons.`]}),`
`,e.jsxs(n.p,{children:['The "Apply filters" button must be rendered when the ',e.jsx(n.a,{href:"./?path=/docs/style-guide-filtering-applying-clearing-filters--docs#batch-filtering",children:`batch
filtering`}),`
method is being used. The "Apply filters" button should never be rendered when
the `,e.jsx(n.a,{href:"./?path=/docs/style-guide-filtering-applying-clearing-filters--docs#live-filtering",children:`live
filtering`}),`
method is being used.`]}),`
`,e.jsx(n.p,{children:'Clicking the "Apply filters" button should:'}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["update the ",e.jsx(n.code,{children:"active filters"}),` list based on the filter options that have been
selected`]}),`
`,e.jsxs(n.li,{children:["update the ",e.jsx(n.code,{children:"results"})," list based on the filter options that have been selected"]}),`
`,e.jsxs(n.li,{children:["update the ",e.jsx(n.code,{children:"total results"}),` heading to reflect the number of items in the
updated `,e.jsx(n.code,{children:"results"})," list"]}),`
`]}),`
`,e.jsxs(n.p,{children:[`The "Clear all filters" button should be rendered in use cases where the
`,e.jsx(n.code,{children:"TagSet"}),` component is not used as part of the overall searching and filtering
UX.`]}),`
`,e.jsx(n.p,{children:'Clicking the "Clear all filters" button should:'}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["reset all form input elements within the ",e.jsx(n.code,{children:"filter bar"})]}),`
`,e.jsxs(n.li,{children:["update the ",e.jsx(n.code,{children:"active filters"})," list to remove all filter options"]}),`
`,e.jsxs(n.li,{children:["update the ",e.jsx(n.code,{children:"results"})," list to an unfiltered state"]}),`
`,e.jsxs(n.li,{children:["update the ",e.jsx(n.code,{children:"total results"}),` heading to reflect the number of items in the
updated `,e.jsx(n.code,{children:"results"})," list"]}),`
`]}),`
`,e.jsx(n.h3,{id:"mobile-1",children:"Mobile"}),`
`,e.jsx(n.p,{children:`For mobile viewports, the filter bar will display a "Show results" button and can
display an optional "Clear all filters" button.`}),`
`,e.jsx(n.p,{children:`The "Show results" button will always be rendered at the bottom of the modal
popup regardless of the filtering method being used. It is recommended that the
label for the "Show results" button also include the current number of items in
the results list. For example, "Show 72 results." The number value should update
as filter options are selected. Clicking the "Show results" button will close
the modal overlay.`}),`
`,e.jsx(n.p,{children:`The "Clear all filters" button is optional, but it is recommended to render the
buttons. Clicking the "Clear all filters" button should:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["reset all form input elements within the ",e.jsx(n.code,{children:"filter bar"})]}),`
`,e.jsxs(n.li,{children:["remove all tags from the ",e.jsx(n.code,{children:"TagSet"})," component"]}),`
`,e.jsxs(n.li,{children:["update the ",e.jsx(n.code,{children:"results"})," list to an unfiltered state"]}),`
`,e.jsxs(n.li,{children:["update the ",e.jsx(n.code,{children:"total results"}),` heading to reflect the number of items in the
updated `,e.jsx(n.code,{children:"results"})," list"]}),`
`,e.jsxs(n.li,{children:[`update the label for the "Clear all filters" button to reflect the number of
items in the updated `,e.jsx(n.code,{children:"results"})," list"]}),`
`]})]})}function m(t={}){const{wrapper:n}={...d(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{m as default};
