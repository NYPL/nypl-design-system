import{j as n,a as r,F as s}from"./jsx-runtime-09ad29cb.js";import{M as c,D as p,C as i,A as u,b as a}from"./index-42243e0e.js";import{S as m,W as d,R as g,a as f,b,c as S,d as v,e as w,G as x,f as C,F as y,g as R,P as T}from"./Slider.stories-5825a527.js";import{L as l}from"./Link-0ed02cf7.js";import{u as h}from"./index-a14fc4fc.js";import"./index-f2bd0723.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-b32021bd.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-86fba1ca.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-22f77b05.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-944fe3e7.js";import"./index-0a26bc51.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-b629ee11.js";import"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import"./chakra-ui-layout.esm-b2fa9d31.js";import"./index-6148c31a.js";import"./Heading-2ec2ea62.js";import"./Form-7babaf24.js";import"./SimpleGrid-e54e0b68.js";import"./Slider-c914507b.js";import"./TextInput-3683470d.js";import"./ComponentWrapper-82a15cf7.js";import"./Text-eabcdc0a.js";import"./Label-2b2058d3.js";import"./utils-acca7d12.js";import"./Button-a3ea41e0.js";import"./Icon-6616a4b9.js";import"./chakra-ui-hooks.esm-02e82f78.js";import"./chakra-ui-visually-hidden.esm-1c1b3639.js";import"./chakra-ui-form-control.esm-c23b95fa.js";function o(t){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",a:"a",h3:"h3",em:"em",h4:"h4"},h(),t.components);return r(s,{children:[n(c,{of:m}),`
`,n(e.h1,{id:"slider",children:"Slider"}),`
`,r(e.table,{children:[n(e.thead,{children:r(e.tr,{children:[n(e.th,{children:"Component Version"}),n(e.th,{children:"DS Version"})]})}),r(e.tbody,{children:[r(e.tr,{children:[n(e.td,{children:"Added"}),n(e.td,{children:n(e.code,{children:"0.25.4"})})]}),r(e.tr,{children:[n(e.td,{children:"Latest"}),n(e.td,{children:n(e.code,{children:"1.5.3"})})]})]})]}),`
`,n(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,r(e.ul,{children:[`
`,r(e.li,{children:[`
`,n(l,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,r(e.li,{children:[`
`,n(l,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,r(e.li,{children:[`
`,n(l,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,r(e.li,{children:[`
`,n(l,{href:"#rangeslider",target:"_self",children:"RangeSlider"}),`
`]}),`
`,r(e.li,{children:[`
`,n(l,{href:"#examples",target:"_self",children:"Examples"}),`
`]}),`
`,r(e.li,{children:[`
`,n(l,{href:"#get-input-values",target:"_self",children:"Get Input Values"}),`
`]}),`
`,r(e.li,{children:[`
`,n(l,{href:"#programmatically-update",target:"_self",children:"Programmatically Update"}),`
`]}),`
`]}),`
`,n(e.h2,{id:"overview",children:"Overview"}),`
`,n(p,{of:d}),`
`,r(e.p,{children:[`The text input component doubles as a display for the slider's current value.
For this type of component, the `,n(e.code,{children:"value"})," prop must be a single number."]}),`
`,n(e.h2,{id:"component-props",children:"Component Props"}),`
`,n(i,{of:d}),`
`,n(u,{of:d}),`
`,n(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,r(e.p,{children:["The ",n(e.code,{children:"Slider"}),` component is accessible via keyboard. In addition to the text fields,
a keyboard user can tab to the blue slider thumb and then with left and right
arrows increase or decrease the value. The color contrast between foreground
color and background color is 4.5:1. If text size is 200%, the button scales
with text so there is no overlap. Internally, a `,n(e.code,{children:"Label"}),` is associated with the
`,n(e.code,{children:"<input>"})," element."]}),`
`,r(e.p,{children:["When ",n(e.code,{children:"showLabel"})," is set to false, the ",n(e.code,{children:"labelText"}),` value will be set to the
main `,n(e.code,{children:"<div>"}),"'s ",n(e.code,{children:"aria-label"})," attribute. This is the same ",n(e.code,{children:"<div>"}),` that contains the
`,n(e.code,{children:"aria-valuemin"}),", ",n(e.code,{children:"aria-valuemax"}),", ",n(e.code,{children:"aria-orientation"}),", and ",n(e.code,{children:"aria-valuenow"}),`
attributes.`]}),`
`,n(e.p,{children:"Resources:"}),`
`,r(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"https://www.w3.org/TR/wai-aria-practices-1.1/#slider",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C WAI-Aria Practices - Slider"})}),`
`,n(e.li,{children:n(e.a,{href:"https://www.w3.org/TR/wai-aria-practices-1.1/#slidertwothumb",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C WAI-Aria Practices - Slider (Multi-Thumb)"})}),`
`,n(e.li,{children:n(e.a,{href:"https://chakra-ui.com/docs/components/form/slider",target:"_blank",rel:"nofollow noopener noreferrer",children:"Chakra Slider"})}),`
`,n(e.li,{children:n(e.a,{href:"https://chakra-ui.com/docs/components/form/range-slider",target:"_blank",rel:"nofollow noopener noreferrer",children:"Chakra RangeSlider"})}),`
`]}),`
`,n(e.h3,{id:"slider-accessibility-implementation",children:"Slider Accessibility Implementation"}),`
`,r(e.p,{children:["Chakra's ",n(e.code,{children:"Slider"}),` component is accessible and, as recommended, we pass in an
`,n(e.code,{children:"aria-label"})," to their ",n(e.code,{children:"Slider"}),` component. On top of that, the Reservoir Design
System (DS) `,n(e.code,{children:"Slider"})," component's ",n(e.code,{children:"<label>"})," points to the ",n(e.code,{children:"<input>"}),` element
which shows the current value. This `,n(e.code,{children:"input"}),` element also has its own
`,n(e.code,{children:"aria-label"}),". When the input box is hidden, the ",n(e.code,{children:"for"})," attribute in the ",n(e.code,{children:"label"}),`
element is removed.`]}),`
`,r(e.p,{children:["Note that Chakra handles its single slider thumb aria attributes: ",n(e.code,{children:"aria-valuemin"}),`,
`,n(e.code,{children:"aria-valuemax"}),", ",n(e.code,{children:"aria-valuenow"}),", and ",n(e.code,{children:"aria-orientation"}),"."]}),`
`,n(e.h2,{id:"rangeslider",children:"RangeSlider"}),`
`,r(e.p,{children:["Set ",n(e.code,{children:"isRangeSlider"})," to ",n(e.code,{children:"true"}),` to create a range slider. The text input
components double as displays for the slider's current minimum and maximum
value. For this type of component, the `,n(e.code,{children:"value"}),` prop must be an array of two
numbers. This signifies the starting and ending values of the range slider.`]}),`
`,n(i,{of:g}),`
`,n(e.h3,{id:"rangeslider-accessibility-implementation",children:"RangeSlider Accessibility Implementation"}),`
`,r(e.p,{children:["Chakra's ",n(e.code,{children:"RangeSlider"}),` component is accessible and, as recommended, we pass in
two `,n(e.code,{children:"aria-label"}),"s to their ",n(e.code,{children:"RangeSlider"}),` component. The syntax is different than
the expected standard string; the `,n(e.code,{children:"RangeSlider"})," expect ",n(e.code,{children:"aria-label"}),` to be an array
of two strings. On top of this, the DS `,n(e.code,{children:"Slider"}),"'s ",n(e.code,{children:"<label>"}),` element, when in the
`,n(e.code,{children:"isRangeSlider"})," state, points to the ",n(e.em,{children:"first"})," ",n(e.code,{children:"<input>"}),` element which shows the
current `,n(e.em,{children:"start"})," value. These two ",n(e.code,{children:"input"})," elements also have their own ",n(e.code,{children:"aria-label"}),`s.
When the input boxes are hidden, the `,n(e.code,{children:"for"})," attribute in the ",n(e.code,{children:"label"})," element is removed."]}),`
`,r(e.p,{children:["Note that Chakra handles its two slider thumbs aria attributes: ",n(e.code,{children:"aria-valuemin"}),`,
`,n(e.code,{children:"aria-valuemax"}),", ",n(e.code,{children:"aria-valuenow"}),", and ",n(e.code,{children:"aria-orientation"}),"."]}),`
`,n(e.h2,{id:"examples",children:"Examples"}),`
`,n(e.h3,{id:"single-slider-states",children:"Single Slider States"}),`
`,n(i,{of:f}),`
`,n(e.h3,{id:"range-slider-states",children:"Range Slider States"}),`
`,r(e.p,{children:["To enable the Range Slider, set the ",n(e.code,{children:"isRangeSlider"})," prop to true."]}),`
`,n(i,{of:b}),`
`,n(e.h3,{id:"single-slider-variants",children:"Single Slider Variants"}),`
`,n(e.p,{children:`In the following example, the min/max values and the current value text
input are hidden.`}),`
`,n(i,{of:S}),`
`,n(e.p,{children:"For the following examples, all labels are hidden."}),`
`,n(i,{of:v}),`
`,n(e.h3,{id:"range-slider-with-adjusted-handles",children:"Range Slider with Adjusted Handles"}),`
`,n(e.p,{children:"In the following examples, all the labels are hidden."}),`
`,n(i,{of:w}),`
`,n(e.h2,{id:"get-input-values",children:"Get Input Values"}),`
`,r(e.p,{children:["Pass a callback function to the ",n(e.code,{children:"onChange"}),` prop to get the current number value
of the `,n(e.code,{children:"Slider"}),` component or an array of two numbers when it is a range slider.
Internally, the `,n(e.code,{children:"Slider"}),` component handles the state of the current selected
value or values. Once the value(s) is updated, the `,n(e.code,{children:"onChange"}),` callback will be
called and the values will be passed. If no `,n(e.code,{children:"onChange"}),` callback is provided,
you won't be able to get the updated value(s) of the `,n(e.code,{children:"Slider"})," component."]}),`
`,n(e.h3,{id:"single-slider-value",children:"Single Slider Value"}),`
`,r(e.p,{children:["Open up the browser's developer console to see the value of the ",n(e.code,{children:"Slider"}),`
after updating it.`]}),`
`,n(a,{code:`
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
`,n(i,{of:x}),`
`,n(e.h3,{id:"range-slider-values",children:"Range Slider Values"}),`
`,r(e.p,{children:["Open up the browser's developer console to see the values of the ",n(e.code,{children:"Slider"}),`
after updating it in the `,n(e.code,{children:"isRangeSlider"})," state."]}),`
`,n(a,{code:`
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
`,n(i,{of:C}),`
`,n(e.h3,{id:"get-final-slider-value",children:"Get Final Slider Value"}),`
`,r(e.p,{children:["Pass a callback function to the ",n(e.code,{children:"onChangeEnd"}),` prop to get the final number value
of the `,n(e.code,{children:"Slider"})," component or an array of two numbers when it is a range slider."]}),`
`,r(e.p,{children:[`Dragging the slider can trigger lots of updates and the consuming app might
only be interested in the final result after sliding is complete. You can use
`,n(e.code,{children:"onChangeEnd"})," for this."]}),`
`,n(e.h4,{id:"single-slider-value-1",children:"Single Slider Value"}),`
`,r(e.p,{children:["Open up the browser's developer console to see the value of the ",n(e.code,{children:"Slider"}),` after
updating it. Notice the value is updated only when you stop dragging the slider.`]}),`
`,n(a,{code:`
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
`,n(i,{of:y}),`
`,n(e.h4,{id:"range-slider-values-1",children:"Range Slider Values"}),`
`,r(e.p,{children:["Open up the browser's developer console to see the values of the ",n(e.code,{children:"Slider"}),`
after updating it in the `,n(e.code,{children:"isRangeSlider"})," state."]}),`
`,n(a,{code:`
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
`,n(i,{of:R}),`
`,n(e.h3,{id:"programmatically-update",children:"Programmatically Update"}),`
`,r(e.p,{children:["The ",n(e.code,{children:"Slider"})," can be updated programmatically through the ",n(e.code,{children:"value"}),` prop. Like the
`,n(e.code,{children:"defaultValue"})," prop, the ",n(e.code,{children:"value"}),` prop also takes in a single number for the regular
`,n(e.code,{children:"Slider"}),' component or an array of two numbers for the "Range" ',n(e.code,{children:"Slider"})," component."]}),`
`,r(e.p,{children:[`When doing this, the consuming app is controlling the state of the values. By
default, the `,n(e.code,{children:"Slider"}),` component internally keeps track of the current value(s)
and returns the value(s) to the consuming app through the `,n(e.code,{children:"onChange"})," callback."]}),`
`,r(e.p,{children:["Open up the browser's developer console to see the values of the ",n(e.code,{children:"Slider"}),` after
updating the two corresponding input elements below.`]}),`
`,n(a,{code:`
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
`,n(i,{of:T})]})}function he(t={}){const{wrapper:e}=Object.assign({},h(),t.components);return e?n(e,Object.assign({},t,{children:n(o,t)})):o(t)}export{he as default};
//# sourceMappingURL=Slider-e4b0ee39.js.map
