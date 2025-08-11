import{u as d,j as e,M as o,L as t,bv as h,C as l,bw as c,S as i}from"./iframe-D93LbwGv.js";import{C as u}from"./ComponentChangelogTable-Ck_3mwrR.js";import{S as x,W as s,R as p,a as g,b as j,c as m,d as f,e as b,G as v,f as S,F as w,g as y,P as C}from"./Slider.stories-B6H_PREW.js";import"./storybookUtils-BmTl87w5.js";const T=[{date:"2024-09-19",version:"3.3.2",type:"Update",affects:["Styles"],notes:["Changes 'r' in '(required)' label from upper- to lowercase"]},{date:"2024-07-03",version:"3.1.7",type:"Update",affects:["Styles"],notes:["Adds interaction tests for the Controls story."]},{date:"2024-04-11",version:"3.1.0",type:"Update",affects:["Styles"],notes:["Reduced the spacing between the field label and the field itself."]},{date:"2024-03-14",version:"3.0.0",type:"Update",affects:["Styles"],notes:["Chakra 2.8 update."]},{date:"2023-10-18",version:"2.1.0",type:"Bug Fix",affects:["Accessibility","Functionality"],notes:["Updated to use appropriate aria-label values for the slider thumbs and text input fields."]},{date:"2023-9-28",version:"2.0.0",type:"Update",affects:["Styles"],notes:["Applied Typo2023 styles, including font size and font color."]}];function r(a){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:x}),`
`,e.jsx(n.h1,{id:"slider",children:"Slider"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Component Version"}),e.jsx(n.th,{children:"DS Version"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Added"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"0.25.4"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Latest"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"3.3.2"})})]})]})]}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#rangeslider",target:"_self",children:"RangeSlider"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#examples",target:"_self",children:"Examples"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#get-input-values",target:"_self",children:"Get Input Values"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#programmatically-update",target:"_self",children:"Programmatically Update"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#changelog",target:"_self",children:"Changelog"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(h,{of:s}),`
`,e.jsxs(n.p,{children:[`The text input component doubles as a display for the slider's current value.
For this type of component, the `,e.jsx(n.code,{children:"value"})," prop must be a single number."]}),`
`,e.jsx(n.h2,{id:"component-props",children:"Component Props"}),`
`,e.jsx(l,{of:s}),`
`,e.jsx(c,{of:s}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Slider"}),` component is accessible via keyboard. In addition to the text fields,
a keyboard user can tab to the blue slider thumb and then with left and right
arrows increase or decrease the value. The color contrast between foreground
color and background color is 4.5:1. If text size is 200%, the button scales
with text so there is no overlap. Internally, a `,e.jsx(n.code,{children:"Label"}),` is associated with the
`,e.jsx(n.code,{children:"<input>"})," element."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"labelText"}),` value is used to populate a global visual label for component.
The value is also used to generate appropriate `,e.jsx(n.code,{children:"aria-label"}),` values for the
component's text input and slider thumb. When `,e.jsx(n.code,{children:"showLabel"}),` is set to false, the
visual label will be removed from the UI, but the value will still be used to
generate the aria-label values for the previously mentioned internal
elements.`]}),`
`,e.jsxs(n.p,{children:["In addition to the ",e.jsx(n.code,{children:"aria-label"}),` attribute, the slider thumb will also contains
the `,e.jsx(n.code,{children:"aria-valuemin"}),", ",e.jsx(n.code,{children:"aria-valuemax"}),", ",e.jsx(n.code,{children:"aria-orientation"}),", and ",e.jsx(n.code,{children:"aria-valuenow"}),`
attributes.`]}),`
`,e.jsx(n.p,{children:"Resources:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.w3.org/TR/wai-aria-practices-1.1/#slider",rel:"nofollow",children:"W3C WAI-Aria Practices - Slider"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.w3.org/TR/wai-aria-practices-1.1/#slidertwothumb",rel:"nofollow",children:"W3C WAI-Aria Practices - Slider (Multi-Thumb)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://chakra-ui.com/docs/components/form/slider",rel:"nofollow",children:"Chakra Slider"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://chakra-ui.com/docs/components/form/range-slider",rel:"nofollow",children:"Chakra RangeSlider"})}),`
`]}),`
`,e.jsx(n.h3,{id:"slider-accessibility-implementation",children:"Slider Accessibility Implementation"}),`
`,e.jsxs(n.p,{children:["Chakra's ",e.jsx(n.code,{children:"Slider"}),` component is accessible and, as recommended, we pass in an
`,e.jsx(n.code,{children:"aria-label"})," to their ",e.jsx(n.code,{children:"Slider"}),` component. On top of that, the Reservoir Design
System (DS) `,e.jsx(n.code,{children:"Slider"})," component's ",e.jsx(n.code,{children:"<label>"})," points to the ",e.jsx(n.code,{children:"<input>"}),` element
which shows the current value. This `,e.jsx(n.code,{children:"input"}),` element also has its own
`,e.jsx(n.code,{children:"aria-label"}),". When the input box is hidden, the ",e.jsx(n.code,{children:"for"})," attribute in the ",e.jsx(n.code,{children:"label"}),`
element is removed.`]}),`
`,e.jsxs(n.p,{children:[`Note that Chakra will automatically generate the values for the following aria
attributes on the single slider thumb: `,e.jsx(n.code,{children:"aria-valuemin"}),", ",e.jsx(n.code,{children:"aria-valuemax"}),`,
`,e.jsx(n.code,{children:"aria-valuenow"}),", and ",e.jsx(n.code,{children:"aria-orientation"}),`. However, Chakra does not generate the
value for the `,e.jsx(n.code,{children:"aria-label"}),` attribute on the single slider thumb. The value for
the `,e.jsx(n.code,{children:"aria-label"})," attribute is dependent on the ",e.jsx(n.code,{children:"labelText"})," value."]}),`
`,e.jsx(n.h2,{id:"rangeslider",children:"RangeSlider"}),`
`,e.jsxs(n.p,{children:["Set ",e.jsx(n.code,{children:"isRangeSlider"})," to ",e.jsx(n.code,{children:"true"}),` to create a range slider. The text input
components double as displays for the slider's current minimum and maximum
value. For this type of component, the `,e.jsx(n.code,{children:"value"}),` prop must be an array of two
numbers. This signifies the starting and ending values of the range slider.`]}),`
`,e.jsxs(n.p,{children:[`Similar to the single slider configuration, each of the two sliders in the range
slider configuration will contain the `,e.jsx(n.code,{children:"aria-label"}),", ",e.jsx(n.code,{children:"aria-valuemin"}),`,
`,e.jsx(n.code,{children:"aria-valuemax"}),", ",e.jsx(n.code,{children:"aria-orientation"}),", and ",e.jsx(n.code,{children:"aria-valuenow"})," attributes."]}),`
`,e.jsx(l,{of:p}),`
`,e.jsx(n.h3,{id:"rangeslider-accessibility-implementation",children:"RangeSlider Accessibility Implementation"}),`
`,e.jsxs(n.p,{children:["Chakra's ",e.jsx(n.code,{children:"RangeSlider"}),` component is accessible and, as recommended, we pass in
two `,e.jsx(n.code,{children:"aria-label"})," values to their ",e.jsx(n.code,{children:"RangeSlider"}),` component. The syntax is
different than the expected standard string; the `,e.jsx(n.code,{children:"RangeSlider"}),` expects
`,e.jsx(n.code,{children:"aria-label"})," to be an array of two strings. On top of this, the DS ",e.jsx(n.code,{children:"Slider"}),`'s
`,e.jsx(n.code,{children:"<label>"})," element, when in the ",e.jsx(n.code,{children:"isRangeSlider"})," state, points to the ",e.jsx(n.em,{children:"first"}),`
`,e.jsx(n.code,{children:"<input>"})," element which shows the current ",e.jsx(n.em,{children:"start"})," value. These two ",e.jsx(n.code,{children:"input"}),`
elements also have their own `,e.jsx(n.code,{children:"aria-label"}),`s. When the input boxes are hidden, the
`,e.jsx(n.code,{children:"for"})," attribute in the ",e.jsx(n.code,{children:"label"})," element is removed."]}),`
`,e.jsxs(n.p,{children:[`Note that Chakra will automatically generate the values for the following aria
attributes on the two slider thumbs: `,e.jsx(n.code,{children:"aria-valuemin"}),", ",e.jsx(n.code,{children:"aria-valuemax"}),`,
`,e.jsx(n.code,{children:"aria-valuenow"}),", and ",e.jsx(n.code,{children:"aria-orientation"}),`. However, Chakra will not generate the
values for the `,e.jsx(n.code,{children:"aria-label"}),` attributes on the two slider thumbs. The values for
the `,e.jsx(n.code,{children:"aria-label"})," attributes are dependent on the ",e.jsx(n.code,{children:"labelText"})," value."]}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"single-slider-states",children:"Single Slider States"}),`
`,e.jsx(l,{of:g}),`
`,e.jsx(n.h3,{id:"range-slider-states",children:"Range Slider States"}),`
`,e.jsxs(n.p,{children:["To enable the Range Slider, set the ",e.jsx(n.code,{children:"isRangeSlider"})," prop to true."]}),`
`,e.jsx(l,{of:j}),`
`,e.jsx(n.h3,{id:"single-slider-variants",children:"Single Slider Variants"}),`
`,e.jsx(n.p,{children:`In the following example, the min/max values and the current value text
input are hidden.`}),`
`,e.jsx(l,{of:m}),`
`,e.jsx(n.p,{children:"For the following examples, all labels are hidden."}),`
`,e.jsx(l,{of:f}),`
`,e.jsx(n.h3,{id:"range-slider-with-adjusted-handles",children:"Range Slider with Adjusted Handles"}),`
`,e.jsx(n.p,{children:"In the following examples, all the labels are hidden."}),`
`,e.jsx(l,{of:b}),`
`,e.jsx(n.h2,{id:"get-input-values",children:"Get Input Values"}),`
`,e.jsxs(n.p,{children:["Pass a callback function to the ",e.jsx(n.code,{children:"onChange"}),` prop to get the current number value
of the `,e.jsx(n.code,{children:"Slider"}),` component or an array of two numbers when it is a range slider.
Internally, the `,e.jsx(n.code,{children:"Slider"}),` component handles the state of the current selected
value or values. Once the value(s) is updated, the `,e.jsx(n.code,{children:"onChange"}),` callback will be
called and the values will be passed. If no `,e.jsx(n.code,{children:"onChange"}),` callback is provided,
you won't be able to get the updated value(s) of the `,e.jsx(n.code,{children:"Slider"})," component."]}),`
`,e.jsx(n.h3,{id:"single-slider-value",children:"Single Slider Value"}),`
`,e.jsxs(n.p,{children:["Open up the browser's developer console to see the value of the ",e.jsx(n.code,{children:"Slider"}),`
after updating it.`]}),`
`,e.jsx(i,{code:`
// Typescript example:
function SliderExample() {
const onChange = (newValue: number) => {
  console.log(\`The single Slider updated value is: \${newValue}\`);
};
return (
  <Slider
    helperText="Component helper text."
    id="slider"
    labelText="Label"
    onChange={onChange}
  />
);
}
`,language:"tsx"}),`
`,e.jsx(l,{of:v}),`
`,e.jsx(n.h3,{id:"range-slider-values",children:"Range Slider Values"}),`
`,e.jsxs(n.p,{children:["Open up the browser's developer console to see the values of the ",e.jsx(n.code,{children:"Slider"}),`
after updating it in the `,e.jsx(n.code,{children:"isRangeSlider"})," state."]}),`
`,e.jsx(i,{code:`
// Typescript example:
function RangeSliderExample() {
const onChange = (newValue: number[]) => {
  const [start, end] = newValue;
  console.log(\`The Range Slider updated start value is: \${start}\`);
  console.log(\`The Range Slider updated end value is: \${end}\`);
};
return (
  <Slider
    helperText="Component helper text."
    id="range-slider"
    isRangeSlider
    labelText="Label"
    onChange={onChange}
  />
);
}
`,language:"tsx"}),`
`,e.jsx(l,{of:S}),`
`,e.jsx(n.h3,{id:"get-final-slider-value",children:"Get Final Slider Value"}),`
`,e.jsxs(n.p,{children:["Pass a callback function to the ",e.jsx(n.code,{children:"onChangeEnd"}),` prop to get the final number value
of the `,e.jsx(n.code,{children:"Slider"})," component or an array of two numbers when it is a range slider."]}),`
`,e.jsxs(n.p,{children:[`Dragging the slider can trigger lots of updates and the consuming app might
only be interested in the final result after sliding is complete. You can use
`,e.jsx(n.code,{children:"onChangeEnd"})," for this."]}),`
`,e.jsx(n.h4,{id:"single-slider-value-1",children:"Single Slider Value"}),`
`,e.jsxs(n.p,{children:["Open up the browser's developer console to see the value of the ",e.jsx(n.code,{children:"Slider"}),` after
updating it. Notice the value is updated only when you stop dragging the slider.`]}),`
`,e.jsx(i,{code:`
// Typescript example:
function SliderEndExample() {
const onChangeEnd = (newValue: number) => {
  console.log(\`The single Slider updated value is: \${newValue}\`);
};
return (
  <Slider
    helperText="Component helper text."
    id="slider"
    labelText="Label"
    onChangeEnd={onChangeEnd}
  />
);
}
`,language:"tsx"}),`
`,e.jsx(l,{of:w}),`
`,e.jsx(n.h4,{id:"range-slider-values-1",children:"Range Slider Values"}),`
`,e.jsxs(n.p,{children:["Open up the browser's developer console to see the values of the ",e.jsx(n.code,{children:"Slider"}),`
after updating it in the `,e.jsx(n.code,{children:"isRangeSlider"})," state."]}),`
`,e.jsx(i,{code:`
// Typescript example:
function RangeSliderEndExample() {
const onChangeEnd = (newValue: number[]) => {
  const [start, end] = newValue;
  console.log(\`The Range Slider updated start value is: \${start}\`);
  console.log(\`The Range Slider updated end value is: \${end}\`);
};
return (
  <Slider
    helperText="Component helper text."
    id="range-slider"
    isRangeSlider
    labelText="Label"
    onChangeEnd={onChangeEnd}
  />
);
}
`,language:"tsx"}),`
`,e.jsx(l,{of:y}),`
`,e.jsx(n.h3,{id:"programmatically-update",children:"Programmatically Update"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Slider"})," can be updated programmatically through the ",e.jsx(n.code,{children:"value"}),` prop. Like the
`,e.jsx(n.code,{children:"defaultValue"})," prop, the ",e.jsx(n.code,{children:"value"}),` prop also takes in a single number for the regular
`,e.jsx(n.code,{children:"Slider"}),' component or an array of two numbers for the "Range" ',e.jsx(n.code,{children:"Slider"})," component."]}),`
`,e.jsxs(n.p,{children:[`When doing this, the consuming app is controlling the state of the values. By
default, the `,e.jsx(n.code,{children:"Slider"}),` component internally keeps track of the current value(s)
and returns the value(s) to the consuming app through the `,e.jsx(n.code,{children:"onChange"})," callback."]}),`
`,e.jsxs(n.p,{children:["Open up the browser's developer console to see the values of the ",e.jsx(n.code,{children:"Slider"}),` after
updating the two corresponding input elements below.`]}),`
`,e.jsx(i,{code:`
function RangeSliderValuesUpdateExample() {
const [value, setValue] = React.useState([15, 75]);
const onChangeFirst = (newValue) => {
  setValue([newValue.target.value, value[1]]);
};
const onChangeSecond = (newValue) => {
  setValue([value[0], newValue.target.value]);
};
return (
  <Form id="slider-example">
    <FormRow>
      <FormField>
        <TextInput
          id="textInput-s1"
          labelText="First Slider value"
          onChange={onChangeFirst}
        />
      </FormField>
      <FormField>
        <TextInput
          id="textInput-s2"
          labelText="Second Slider value"
          onChange={onChangeSecond}
        />
      </FormField>
    </FormRow>
    <FormRow>
      <FormField>
        <Slider
          defaultValue={[15, 75]}
          helperText="Values can be updated through the two inputs above."
          id="range-slider-text-example"
          isRangeSlider
          labelText="Slider with Updated Values"
          showBoxes={false}
          value={value}
        />
      </FormField>
    </FormRow>
  </Form>
);
}
`,language:"tsx"}),`
`,e.jsx(l,{of:C}),`
`,e.jsx(n.h2,{id:"changelog",children:"Changelog"}),`
`,e.jsx(u,{changelogData:T})]})}function I(a={}){const{wrapper:n}={...d(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(r,{...a})}):r(a)}export{I as default};
