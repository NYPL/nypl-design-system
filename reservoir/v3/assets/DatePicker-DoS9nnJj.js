import{u as l,j as e,M as h,L as n,bv as c,C as a,bw as p,S as i}from"./iframe-CFLVJZOZ.js";import{C as u}from"./ComponentChangelogTable-DvY0SxTs.js";import{D as r,W as o,a as x,M as j,Y as f,O as m,I as g,b as y,c as b}from"./DatePicker.stories-BxKF8487.js";const D=[{date:"2024-09-19",version:"3.3.2",type:"Update",affects:["Styles"],notes:["Changes 'r' in '(required)' label from upper- to lowercase"]},{date:"2024-07-25",version:"3.2.0",type:"Update",affects:["Functionality"],notes:["Exports the `CustomTextInputProps` interface."]},{date:"2024-07-03",version:"3.1.7",type:"Update",affects:["Documentation"],notes:["Adds interaction tests for the Controls story."]},{date:"2024-04-11",version:"3.1.0",type:"Update",affects:["Styles"],notes:["Reduced the spacing between the field label and the field itself."]},{date:"2024-03-14",version:"3.0.0",type:"Update",affects:["Styles"],notes:["Chakra 2.8 update."]},{date:"2024-02-22",version:"2.1.6",type:"Update",affects:["Styles"],notes:["Fixes the range calendar style for the month and year calendars.","Fixes minor typo in the Initial Date Values section."]},{date:"2024-01-04",version:"2.1.4",type:"Update",affects:["Functionality","Styles"],notes:["Fixes bug where month and year calendars were rendering vertically rather than horizontally.","Updates the `initialDate` and `initialDateTo` props to accept an empty string and adds optional `placeholder` and `placeholderTo` props."]},{date:"2023-12-07",version:"2.1.3",type:"Update",affects:["Styles"],notes:["Adds z-index to calendar container so that helper text does not shift when calendar opens."]},{date:"2023-10-26",version:"2.1.1",type:"Update",affects:["Accessibility"],notes:['Updates the internal TextInput to always have an "aria-label" attribute that tells screenreader users how to access the calendar.']},{date:"2023-10-18",version:"2.1.0",type:"Update",affects:["Accessibility"],notes:["Updates to pass a secondaryHelperTextId to its TextInput if needed so that the aria-describedby value can be associated with all relevant helperTexts.","Updates so that focus remains on input after value is changed."]},{date:"2023-9-28",version:"2.0.0",type:"Update",affects:["Styles"],notes:["Applied Typo2023 styles, including font size, font color, and text link patterns."]}];function d(s){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:r}),`
`,e.jsx(t.h1,{id:"datepicker",children:"DatePicker"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Component Version"}),e.jsx(t.th,{children:"DS Version"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Added"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"0.24.0"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Latest"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"3.3.2"})})]})]})]}),`
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
`,e.jsx(n,{href:"#date-range",target:"_self",children:"Date Range"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(n,{href:"#calendar-types",target:"_self",children:"Calendar Types"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(n,{href:"#other-states",target:"_self",children:"Other States"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(n,{href:"#date-inputs-and-output",target:"_self",children:"Date Inputs and Output"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(n,{href:"#getting-date-input-values",target:"_self",children:"Getting Date Input Values"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(n,{href:"#changelog",target:"_self",children:"Changelog"}),`
`]}),`
`]}),`
`,e.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(c,{of:r}),`
`,e.jsx(t.p,{children:`This is fully customizable to allow selectable full dates, only the month, or
only they year as input. Initial date values and max and min date values can
also be added through props.`}),`
`,e.jsx(t.h2,{id:"component-props",children:"Component Props"}),`
`,e.jsx(a,{of:o}),`
`,e.jsx(p,{of:o}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.p,{children:["The Reservoir ",e.jsx(t.code,{children:"DatePicker"})," component implements the ",e.jsx(t.code,{children:"react-datepicker"}),` npm package.
This package exports a component that is used internally to display the popup
calendar, manage its data, and associate the `,e.jsx(t.code,{children:"<label>"}),` element with its corresponding
`,e.jsx(t.code,{children:"<input>"})," element."]}),`
`,e.jsx(t.p,{children:`This component is accessible through keyboard navigation. When keyboard users tab to
the input, the calendar automatically opens. Tabbing again moves focus into the
calendar. Dates can be navigated to using the arrow keys. The enter key selects the
date in focus and closes the calendar. Focus then returns to the input.`}),`
`,e.jsxs(t.p,{children:["The Reservoir ",e.jsx(t.code,{children:"DatePicker"})," handles the grouping of the two ",e.jsx(t.code,{children:"<input>"}),` elements in
the "date range" mode by wrapping the elements in a `,e.jsx(t.code,{children:"<fieldset>"}),` element with
its own `,e.jsx(t.code,{children:"<legend>"}),` label for the group. Note that this is in addition to the two
labels that each `,e.jsx(t.code,{children:"<input>"})," element is associated with."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"helperText"})," is also associated with the ",e.jsx(t.code,{children:"<input>"})," elements via the ",e.jsx(t.code,{children:"aria-describedby"}),`
attribute. If a `,e.jsx(t.code,{children:"helperTextFrom"})," or ",e.jsx(t.code,{children:"helperTextTo"}),` is passed in addition to a general
`,e.jsx(t.code,{children:"helperText"})," for the entire ",e.jsx(t.code,{children:"DatePicker"}),", then the ",e.jsx(t.code,{children:"aria-describedby"}),` attribute of the
`,e.jsx(t.code,{children:"<input>"}),' element will be "[general-helperText-id] [input-helperText-id]".']}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"DatePicker"}),"'s ",e.jsx(t.code,{children:"<input>"})," has an ",e.jsx(t.code,{children:"aria-label"}),` that tells screen reader users what
the element is and how to access its calendar. In the "date range" mode, when `,e.jsx(t.code,{children:"showLabel"}),`
is set to false, the `,e.jsx(t.code,{children:"<fieldset>"}),"'s ",e.jsx(t.code,{children:"<legend>"})," will have the ",e.jsx(t.code,{children:"labelText"})," visually hidden."]}),`
`,e.jsx(t.p,{children:"Resources:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/Hacker0x01/react-datepicker#accessibility",rel:"nofollow",children:"react-datepicker Accessibility"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://whatsock.com/Templates/Datepickers/Basic,%20Auto%20Open/index.htm",rel:"nofollow",children:"Apex 4x Technical Style Guide: Aria Date Picker"})}),`
`]}),`
`,e.jsx(t.h2,{id:"date-range",children:"Date Range"}),`
`,e.jsxs(t.p,{children:["A date range can be rendered by setting the ",e.jsx(t.code,{children:"isDateRange"})," prop to ",e.jsx(t.code,{children:"true"}),`. This
will render two input fields with labels "From" and "To". If the component has
an error, has required fields, or if it is disabled, then both input elements
will share the props and styling. Note that for date range types, a `,e.jsx(t.code,{children:"fieldset"}),`
is used as the parent wrapper and the `,e.jsx(t.code,{children:"labelText"})," is used for the ",e.jsx(t.code,{children:"legend"}),`
element text.`]}),`
`,e.jsx(t.p,{children:`Note: In the following example, the minimum date is "1/1/2022" and the max date
is "7/1/22". This means only values within this range are selectable from the
popup calendar.`}),`
`,e.jsx(a,{of:x}),`
`,e.jsx(t.h2,{id:"calendar-types",children:"Calendar Types"}),`
`,e.jsx(t.h3,{id:"full-date-input",children:"Full Date Input"}),`
`,e.jsxs(t.p,{children:["By default, the ",e.jsx(t.code,{children:"DatePicker"}),` will display the input date value in the full
format that contains the year, month, and day such as "2021-01-30". Although
this is the default, it can be explicitly set through the `,e.jsx(t.code,{children:"dateType"}),` prop with
value of `,e.jsx(t.code,{children:'"full"'}),"."]}),`
`,e.jsx(t.h3,{id:"month-date-input",children:"Month Date Input"}),`
`,e.jsxs(t.p,{children:[`It's possible to select dates by skipping the day value and only selecting
the month and the year when `,e.jsx(t.code,{children:"dateType"})," is set to ",e.jsx(t.code,{children:'"month"'}),`. Note
that all 12 months will appear in the popup calendar with their abbreviated names.`]}),`
`,e.jsx(a,{of:j}),`
`,e.jsx(t.h3,{id:"year-date-input",children:"Year Date Input"}),`
`,e.jsxs(t.p,{children:["It's possible to select dates by only the year when ",e.jsx(t.code,{children:"dateType"}),` is set to
`,e.jsx(t.code,{children:'"year"'}),`. Note that only 12 values will appear in the popup calendar; the four
previous years, the current year, and the next seven years.`]}),`
`,e.jsx(a,{of:f}),`
`,e.jsx(t.h2,{id:"other-states",children:"Other States"}),`
`,e.jsx(a,{of:m}),`
`,e.jsx(t.h2,{id:"date-inputs-and-output",children:"Date Inputs and Output"}),`
`,e.jsx(t.h3,{id:"initial-date-values",children:"Initial Date Values"}),`
`,e.jsxs(t.p,{children:["The initial date values can be set through ",e.jsx(t.code,{children:"initialDate"}),` for the "From" input
field and `,e.jsx(t.code,{children:"initialDateTo"}),` for the "To" input field. In the following examples,
`,e.jsx(t.code,{children:"initialDate"})," is ",e.jsx(t.code,{children:'"12/1/21"'})," and ",e.jsx(t.code,{children:"initialDateTo"})," is ",e.jsx(t.code,{children:'"12/10/21"'}),`. The
`,e.jsx(t.code,{children:"initialDate"})," and ",e.jsx(t.code,{children:"initialDateTo"})," values are used in the JS ",e.jsx(t.code,{children:"Date"}),` function so
they need to be in that specific format. Note that according to the NYPL
styleguide, we display dates as "year-month-day" by default.`]}),`
`,e.jsx(a,{of:g}),`
`,e.jsx(t.h3,{id:"date-format",children:"Date Format"}),`
`,e.jsxs(t.p,{children:["The display date format can be updated through the ",e.jsx(t.code,{children:"dateFormat"}),` prop. The
default is set to `,e.jsx(t.code,{children:'"yyyy-MM-dd"'}),` based on the NYPL styleguide. This should be
written in `,e.jsx(t.a,{href:"https://www.w3.org/TR/NOTE-datetime",rel:"nofollow",children:"ISO-8601 format"}),"."]}),`
`,e.jsx(a,{of:y}),`
`,e.jsx(t.h3,{id:"max-and-min-date-values",children:"Max and Min Date Values"}),`
`,e.jsxs(t.p,{children:["The maximum and minimum date values can be set through the ",e.jsx(t.code,{children:"maxDate"}),` and
`,e.jsx(t.code,{children:"minDate"}),` props, respectively. In this example, go back to January through
February to see the dates that are available to select in 2022.`]}),`
`,e.jsx(a,{of:b}),`
`,e.jsx(t.h2,{id:"getting-date-input-values",children:"Getting Date Input Values"}),`
`,e.jsx(t.h3,{id:"controlled-component-using-onchange-prop",children:"Controlled Component Using onChange prop"}),`
`,e.jsxs(t.p,{children:[`If your application uses controlled React components and the Reservoir Design
System (DS) DatePicker must be controlled, you can extract the data through the
`,e.jsx(t.code,{children:"onChange"}),` prop function. This will be called every time the date is updated in
either the start date input field or the end date input field. The returned
data is an object with `,e.jsx(t.code,{children:"startDate"})," and ",e.jsx(t.code,{children:"endDate"})," keys and ",e.jsx(t.code,{children:"Date"})," object values."]}),`
`,e.jsx(i,{code:`
const onChange = (data) => {
// This will return an object such as:
// {
//   startDate: dateValue,
//   endDate: dateValue
// }
// Note that dateValue is a Date object so you need to get the date value
// yourself. The endDate attribute will only appear if the DS DatePicker
// component is a date range.
console.log(data);
};
// ...

// Example of the DS DatePicker instance with the function above:

<DatePicker
id="date-range"
dateType="full"
labelText="Select the date range you want to visit NYPL"
invalidText="Please select a valid date range."
onChange={onChange}
isDateRange
/>
`,language:"jsx"}),`
`,e.jsx(t.h3,{id:"uncontrolled-component-using-refs",children:"Uncontrolled Component Using refs"}),`
`,e.jsxs(t.p,{children:["If your application uses uncontrolled components, you can pass React ",e.jsx(t.code,{children:"ref"}),` props
to the DS DatePicker component to get values from the DOM. In this scenario, you
need to also pass in a `,e.jsx(t.code,{children:"nameFrom"})," prop so that the ",e.jsx(t.code,{children:"ref"}),` values knows what DOM
element to get the value from. If you are using a date range, you need to pass
additional `,e.jsx(t.code,{children:"nameTo"})," and ",e.jsx(t.code,{children:"refTo"}),` props or else only the start date value will be
obtained.`]}),`
`,e.jsxs(t.p,{children:["The following example is using the ",e.jsx(t.code,{children:"register"})," React ",e.jsx(t.code,{children:"ref"}),` from the
`,e.jsx(t.code,{children:"react-hook-form"})," package."]}),`
`,e.jsx(i,{code:`
import { useFormContext } from "react-hook-form";
// ...
const { register, handleSubmit } = useFormContext();
// ...
const submitForm = (formData) => {
// This will return an object with all the DOM element values that were
// registered with a name attribute.
// Note that the returned values are strings and NOT Date objects.
// {
//   visitDateFrom: "2020-01-01"
//   visitDateTo: "2021-01-01"
// }
console.log(formData);
// ...
};

<form
onSubmit={handleSubmit(submitForm)}
method="post"
action="/some/api/endpoint"
>
<DatePicker
  id="date-range"
  dateType="full"
  labelText="Select the date range you want to visit NYPL"
  nameFrom="visitDateFrom"
  nameTo="visitDateTo"
  invalidText="Please select a valid date range."
  ref={register()}
  refTo={register()}
  isDateRange
/>
</form>
`,language:"jsx"}),`
`,e.jsxs(t.p,{children:["The above is specific to ",e.jsx(t.code,{children:"react-hook-form"}),` but a similar pattern can be used
with normal React `,e.jsx(t.code,{children:"ref"})," values."]}),`
`,e.jsx(i,{code:`
const refStart = React.createRef<TextInputRefType>();
const refEnd = React.createRef<TextInputRefType>();
// ...
<DatePicker
id="date-range"
dateType="full"
labelText="Select the date range you want to visit NYPL"
nameFrom="visitDateFrom"
nameTo="visitDateTo"
invalidText="Please select a valid date range."
ref={refStart}
refTo={refEnd}
isDateRange
/>
// ...
// Get the value through:
const onSubmit = () => {
// ...
const startDate = refStart.current.value;
const endDate = refEnd.current.value;
};
`,language:"jsx"}),`
`,e.jsx(t.h2,{id:"changelog",children:"Changelog"}),`
`,e.jsx(u,{changelogData:D})]})}function k(s={}){const{wrapper:t}={...l(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(d,{...s})}):d(s)}export{k as default};
