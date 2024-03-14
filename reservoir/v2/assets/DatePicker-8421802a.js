import{j as t,a as n,F as c}from"./jsx-runtime-fdf4db99.js";import{M as p,D as u,C as i,A as m,b as o}from"./index-445595fc.js";import{C as f}from"./ComponentChangelogTable-310bbbfd.js";import{D as l,W as d,a as g,M as y,Y as b,O as D,I as T,b as v,c as w}from"./DatePicker.stories-9eda1bc4.js";import{L as a}from"./Link-24c1437a.js";import"./Table-64c6aa77.js";import{u as s}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-da8f5748.js";import"../sb-preview/runtime.js";import"./index-42773b54.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-2a967270.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-33c8ee8e.js";import"./index-314a82e0.js";import"./index-11d98b33.js";import"./index-356e4a49.js";import"./index-8f383b84.js";import"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import"./chakra-ui-layout.esm-e0dbb94e.js";import"./List-582282a6.js";import"./useDSHeading-94e72700.js";import"./Heading-7eebc756.js";import"./Text-d88b2f7a.js";import"./index-6148c31a.js";import"./DatePicker-542b5b5a.js";import"./defineProperty-84a138b7.js";import"./popper-f3391c26.js";import"./Fieldset-46002ef9.js";import"./Form-b79b3734.js";import"./SimpleGrid-bd04b221.js";import"./HelperErrorText-55c57f50.js";import"./TextInput-70995d87.js";import"./ComponentWrapper-aa2910be.js";import"./Label-d380cca8.js";import"./Button-948e9be8.js";import"./Icon-4eeffe51.js";import"./chakra-ui-hooks.esm-539e7d47.js";import"./tiny-invariant-dd7d57d2.js";import"./chakra-ui-visually-hidden.esm-a796d0b5.js";import"./chakra-ui-form-control.esm-5c4917b4.js";const x=[{date:"2024-02-22",version:"2.1.6",type:"Update",affects:["Styles"],notes:["Fixes the range calendar style for the month and year calendars.","Fixes minor typo in the Initial Date Values section."]},{date:"2024-01-04",version:"2.1.4",type:"Update",affects:["Functionality","Styles"],notes:["Fixes bug where month and year calendars were rendering vertically rather than horizontally.","Updates the `initialDate` and `initialDateTo` props to accept an empty string and adds optional `placeholder` and `placeholderTo` props."]},{date:"2023-12-07",version:"2.1.3",type:"Update",affects:["Styles"],notes:["Adds z-index to calendar container so that helper text does not shift when calendar opens."]},{date:"2023-10-26",version:"2.1.1",type:"Update",affects:["Accessibility"],notes:['Updates the internal TextInput to always have an "aria-label" attribute that tells screenreader users how to access the calendar.']},{date:"2023-10-18",version:"2.1.0",type:"Update",affects:["Accessibility"],notes:["Updates to pass a secondaryHelperTextId to its TextInput if needed so that the aria-describedby value can be associated with all relevant helperTexts.","Updates so that focus remains on input after value is changed."]},{date:"2023-9-28",version:"2.0.0",type:"Update",affects:["Styles"],notes:["Applied Typo2023 styles, including font size, font color, and text link patterns."]}];function h(r){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",a:"a",h3:"h3"},s(),r.components);return n(c,{children:[t(p,{of:l}),`
`,t(e.h1,{id:"datepicker",children:"DatePicker"}),`
`,n(e.table,{children:[t(e.thead,{children:n(e.tr,{children:[t(e.th,{children:"Component Version"}),t(e.th,{children:"DS Version"})]})}),n(e.tbody,{children:[n(e.tr,{children:[t(e.td,{children:"Added"}),t(e.td,{children:t(e.code,{children:"0.24.0"})})]}),n(e.tr,{children:[t(e.td,{children:"Latest"}),t(e.td,{children:t(e.code,{children:"2.1.6"})})]})]})]}),`
`,t(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,t(a,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,n(e.li,{children:[`
`,t(a,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,n(e.li,{children:[`
`,t(a,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,n(e.li,{children:[`
`,t(a,{href:"#date-range",target:"_self",children:"Date Range"}),`
`]}),`
`,n(e.li,{children:[`
`,t(a,{href:"#calendar-types",target:"_self",children:"Calendar Types"}),`
`]}),`
`,n(e.li,{children:[`
`,t(a,{href:"#other-states",target:"_self",children:"Other States"}),`
`]}),`
`,n(e.li,{children:[`
`,t(a,{href:"#date-inputs-and-output",target:"_self",children:"Date Inputs and Output"}),`
`]}),`
`,n(e.li,{children:[`
`,t(a,{href:"#getting-date-input-values",target:"_self",children:"Getting Date Input Values"}),`
`]}),`
`,n(e.li,{children:[`
`,t(a,{href:"#changelog",target:"_self",children:"Changelog"}),`
`]}),`
`]}),`
`,t(e.h2,{id:"overview",children:"Overview"}),`
`,t(u,{of:l}),`
`,t(e.p,{children:`This is fully customizable to allow selectable full dates, only the month, or
only they year as input. Initial date values and max and min date values can
also be added through props.`}),`
`,t(e.h2,{id:"component-props",children:"Component Props"}),`
`,t(i,{of:d}),`
`,t(m,{of:d}),`
`,t(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n(e.p,{children:["The Reservoir ",t(e.code,{children:"DatePicker"})," component implements the ",t(e.code,{children:"react-datepicker"}),` npm package.
This package exports a component that is used internally to display the popup
calendar, manage its data, and associate the `,t(e.code,{children:"<label>"}),` element with its corresponding
`,t(e.code,{children:"<input>"})," element."]}),`
`,t(e.p,{children:`This component is accessible through keyboard navigation. When keyboard users tab to
the input, the calendar automatically opens. Tabbing again moves focus into the
calendar. Dates can be navigated to using the arrow keys. The enter key selects the
date in focus and closes the calendar. Focus then returns to the input.`}),`
`,n(e.p,{children:["The Reservoir ",t(e.code,{children:"DatePicker"})," handles the grouping of the two ",t(e.code,{children:"<input>"}),` elements in
the "date range" mode by wrapping the elements in a `,t(e.code,{children:"<fieldset>"}),` element with
its own `,t(e.code,{children:"<legend>"}),` label for the group. Note that this is in addition to the two
labels that each `,t(e.code,{children:"<input>"})," element is associated with."]}),`
`,n(e.p,{children:[t(e.code,{children:"helperText"})," is also associated with the ",t(e.code,{children:"<input>"})," elements via the ",t(e.code,{children:"aria-describedby"}),`
attribute. If a `,t(e.code,{children:"helperTextFrom"})," or ",t(e.code,{children:"helperTextTo"}),` is passed in addition to a general
`,t(e.code,{children:"helperText"})," for the entire ",t(e.code,{children:"DatePicker"}),", then the ",t(e.code,{children:"aria-describedby"}),` attribute of the
`,t(e.code,{children:"<input>"}),' element will be "[general-helperText-id] [input-helperText-id]".']}),`
`,n(e.p,{children:["The ",t(e.code,{children:"DatePicker"}),"'s ",t(e.code,{children:"<input>"})," has an ",t(e.code,{children:"aria-label"}),` that tells screen reader users what
the element is and how to access its calendar. In the "date range" mode, when `,t(e.code,{children:"showLabel"}),`
is set to false, the `,t(e.code,{children:"<fieldset>"}),"'s ",t(e.code,{children:"<legend>"})," will have the ",t(e.code,{children:"labelText"})," visually hidden."]}),`
`,t(e.p,{children:"Resources:"}),`
`,n(e.ul,{children:[`
`,t(e.li,{children:t(e.a,{href:"https://github.com/Hacker0x01/react-datepicker#accessibility",target:"_blank",rel:"nofollow noopener noreferrer",children:"react-datepicker Accessibility"})}),`
`,t(e.li,{children:t(e.a,{href:"https://whatsock.com/Templates/Datepickers/Basic,%20Auto%20Open/index.htm",target:"_blank",rel:"nofollow noopener noreferrer",children:"Apex 4x Technical Style Guide: Aria Date Picker"})}),`
`]}),`
`,t(e.h2,{id:"date-range",children:"Date Range"}),`
`,n(e.p,{children:["A date range can be rendered by setting the ",t(e.code,{children:"isDateRange"})," prop to ",t(e.code,{children:"true"}),`. This
will render two input fields with labels "From" and "To". If the component has
an error, has required fields, or if it is disabled, then both input elements
will share the props and styling. Note that for date range types, a `,t(e.code,{children:"fieldset"}),`
is used as the parent wrapper and the `,t(e.code,{children:"labelText"})," is used for the ",t(e.code,{children:"legend"}),`
element text.`]}),`
`,t(e.p,{children:`Note: In the following example, the minimum date is "1/1/2022" and the max date
is "7/1/22". This means only values within this range are selectable from the
popup calendar.`}),`
`,t(i,{of:g}),`
`,t(e.h2,{id:"calendar-types",children:"Calendar Types"}),`
`,t(e.h3,{id:"full-date-input",children:"Full Date Input"}),`
`,n(e.p,{children:["By default, the ",t(e.code,{children:"DatePicker"}),` will display the input date value in the full
format that contains the year, month, and day such as "2021-01-30". Although
this is the default, it can be explicitly set through the `,t(e.code,{children:"dateType"}),` prop with
value of `,t(e.code,{children:'"full"'}),"."]}),`
`,t(e.h3,{id:"month-date-input",children:"Month Date Input"}),`
`,n(e.p,{children:[`It's possible to select dates by skipping the day value and only selecting
the month and the year when `,t(e.code,{children:"dateType"})," is set to ",t(e.code,{children:'"month"'}),`. Note
that all 12 months will appear in the popup calendar with their abbreviated names.`]}),`
`,t(i,{of:y}),`
`,t(e.h3,{id:"year-date-input",children:"Year Date Input"}),`
`,n(e.p,{children:["It's possible to select dates by only the year when ",t(e.code,{children:"dateType"}),` is set to
`,t(e.code,{children:'"year"'}),`. Note that only 12 values will appear in the popup calendar; the four
previous years, the current year, and the next seven years.`]}),`
`,t(i,{of:b}),`
`,t(e.h2,{id:"other-states",children:"Other States"}),`
`,t(i,{of:D}),`
`,t(e.h2,{id:"date-inputs-and-output",children:"Date Inputs and Output"}),`
`,t(e.h3,{id:"initial-date-values",children:"Initial Date Values"}),`
`,n(e.p,{children:["The initial date values can be set through ",t(e.code,{children:"initialDate"}),` for the "From" input
field and `,t(e.code,{children:"initialDateTo"}),` for the "To" input field. In the following examples,
`,t(e.code,{children:"initialDate"})," is ",t(e.code,{children:'"12/1/21"'})," and ",t(e.code,{children:"initialDateTo"})," is ",t(e.code,{children:'"12/10/21"'}),`. The
`,t(e.code,{children:"initialDate"})," and ",t(e.code,{children:"initialDateTo"})," values are used in the JS ",t(e.code,{children:"Date"}),` function so
they need to be in that specific format. Note that according to the NYPL
styleguide, we display dates as "year-month-day" by default.`]}),`
`,t(i,{of:T}),`
`,t(e.h3,{id:"date-format",children:"Date Format"}),`
`,n(e.p,{children:["The display date format can be updated through the ",t(e.code,{children:"dateFormat"}),` prop. The
default is set to `,t(e.code,{children:'"yyyy-MM-dd"'}),` based on the NYPL styleguide. This should be
written in `,t(e.a,{href:"https://www.w3.org/TR/NOTE-datetime",target:"_blank",rel:"nofollow noopener noreferrer",children:"ISO-8601 format"}),"."]}),`
`,t(i,{of:v}),`
`,t(e.h3,{id:"max-and-min-date-values",children:"Max and Min Date Values"}),`
`,n(e.p,{children:["The maximum and minimum date values can be set through the ",t(e.code,{children:"maxDate"}),` and
`,t(e.code,{children:"minDate"}),` props, respectively. In this example, go back to January through
February to see the dates that are available to select in 2022.`]}),`
`,t(i,{of:w}),`
`,t(e.h2,{id:"getting-date-input-values",children:"Getting Date Input Values"}),`
`,t(e.h3,{id:"controlled-component-using-onchange-prop",children:"Controlled Component Using onChange prop"}),`
`,n(e.p,{children:[`If your application uses controlled React components and the Reservoir Design
System (DS) DatePicker must be controlled, you can extract the data through the
`,t(e.code,{children:"onChange"}),` prop function. This will be called every time the date is updated in
either the start date input field or the end date input field. The returned
data is an object with `,t(e.code,{children:"startDate"})," and ",t(e.code,{children:"endDate"})," keys and ",t(e.code,{children:"Date"})," object values."]}),`
`,t(o,{code:`
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
`,t(e.h3,{id:"uncontrolled-component-using-refs",children:"Uncontrolled Component Using refs"}),`
`,n(e.p,{children:["If your application uses uncontrolled components, you can pass React ",t(e.code,{children:"ref"}),` props
to the DS DatePicker component to get values from the DOM. In this scenario, you
need to also pass in a `,t(e.code,{children:"nameFrom"})," prop so that the ",t(e.code,{children:"ref"}),` values knows what DOM
element to get the value from. If you are using a date range, you need to pass
additional `,t(e.code,{children:"nameTo"})," and ",t(e.code,{children:"refTo"}),` props or else only the start date value will be
obtained.`]}),`
`,n(e.p,{children:["The following example is using the ",t(e.code,{children:"register"})," React ",t(e.code,{children:"ref"}),` from the
`,t(e.code,{children:"react-hook-form"})," package."]}),`
`,t(o,{code:`
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
`,n(e.p,{children:["The above is specific to ",t(e.code,{children:"react-hook-form"}),` but a similar pattern can be used
with normal React `,t(e.code,{children:"ref"})," values."]}),`
`,t(o,{code:`
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
`,t(e.h2,{id:"changelog",children:"Changelog"}),`
`,t(f,{changelogData:x})]})}function me(r={}){const{wrapper:e}=Object.assign({},s(),r.components);return e?t(e,Object.assign({},r,{children:t(h,r)})):h(r)}export{me as default};
//# sourceMappingURL=DatePicker-8421802a.js.map
