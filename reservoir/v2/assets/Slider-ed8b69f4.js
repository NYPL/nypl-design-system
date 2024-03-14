import{j as n,a as l,F as s}from"./jsx-runtime-fdf4db99.js";import{M as c,D as p,C as t,A as u,b as a}from"./index-445595fc.js";import{L as i}from"./Link-24c1437a.js";import{S as m,W as o,R as g,a as f,b,c as v,d as S,e as w,G as x,f as C,F as y,g as T,P as R}from"./Slider.stories-f828698d.js";import{C as V}from"./ComponentChangelogTable-310bbbfd.js";import{u as h}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-da8f5748.js";import"../sb-preview/runtime.js";import"./index-42773b54.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-2a967270.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-33c8ee8e.js";import"./index-314a82e0.js";import"./index-11d98b33.js";import"./index-356e4a49.js";import"./index-8f383b84.js";import"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import"./chakra-ui-layout.esm-e0dbb94e.js";import"./Icon-4eeffe51.js";import"./index-6148c31a.js";import"./Heading-7eebc756.js";import"./Text-d88b2f7a.js";import"./Form-b79b3734.js";import"./SimpleGrid-bd04b221.js";import"./Slider-db8f1fc1.js";import"./TextInput-70995d87.js";import"./ComponentWrapper-aa2910be.js";import"./useDSHeading-94e72700.js";import"./HelperErrorText-55c57f50.js";import"./Label-d380cca8.js";import"./Button-948e9be8.js";import"./chakra-ui-hooks.esm-539e7d47.js";import"./tiny-invariant-dd7d57d2.js";import"./chakra-ui-visually-hidden.esm-a796d0b5.js";import"./chakra-ui-form-control.esm-5c4917b4.js";import"./List-582282a6.js";import"./Table-64c6aa77.js";const F=[{date:"2023-10-18",version:"2.1.0",type:"Bug Fix",affects:["Accessibility","Functionality"],notes:["Updated to use appropriate aria-label values for the slider thumbs and text input fields."]},{date:"2023-9-28",version:"2.0.0",type:"Update",affects:["Styles"],notes:["Applied Typo2023 styles, including font size and font color."]}];function d(r){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",a:"a",h3:"h3",em:"em",h4:"h4"},h(),r.components);return l(s,{children:[n(c,{of:m}),`
`,n(e.h1,{id:"slider",children:"Slider"}),`
`,l(e.table,{children:[n(e.thead,{children:l(e.tr,{children:[n(e.th,{children:"Component Version"}),n(e.th,{children:"DS Version"})]})}),l(e.tbody,{children:[l(e.tr,{children:[n(e.td,{children:"Added"}),n(e.td,{children:n(e.code,{children:"0.25.4"})})]}),l(e.tr,{children:[n(e.td,{children:"Latest"}),n(e.td,{children:n(e.code,{children:"2.1.0"})})]})]})]}),`
`,n(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,l(e.ul,{children:[`
`,l(e.li,{children:[`
`,n(i,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,l(e.li,{children:[`
`,n(i,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,l(e.li,{children:[`
`,n(i,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,l(e.li,{children:[`
`,n(i,{href:"#rangeslider",target:"_self",children:"RangeSlider"}),`
`]}),`
`,l(e.li,{children:[`
`,n(i,{href:"#examples",target:"_self",children:"Examples"}),`
`]}),`
`,l(e.li,{children:[`
`,n(i,{href:"#get-input-values",target:"_self",children:"Get Input Values"}),`
`]}),`
`,l(e.li,{children:[`
`,n(i,{href:"#programmatically-update",target:"_self",children:"Programmatically Update"}),`
`]}),`
`,l(e.li,{children:[`
`,n(i,{href:"#changelog",target:"_self",children:"Changelog"}),`
`]}),`
`]}),`
`,n(e.h2,{id:"overview",children:"Overview"}),`
`,n(p,{of:o}),`
`,l(e.p,{children:[`The text input component doubles as a display for the slider's current value.
For this type of component, the `,n(e.code,{children:"value"})," prop must be a single number."]}),`
`,n(e.h2,{id:"component-props",children:"Component Props"}),`
`,n(t,{of:o}),`
`,n(u,{of:o}),`
`,n(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,l(e.p,{children:["The ",n(e.code,{children:"Slider"}),` component is accessible via keyboard. In addition to the text fields,
a keyboard user can tab to the blue slider thumb and then with left and right
arrows increase or decrease the value. The color contrast between foreground
color and background color is 4.5:1. If text size is 200%, the button scales
with text so there is no overlap. Internally, a `,n(e.code,{children:"Label"}),` is associated with the
`,n(e.code,{children:"<input>"})," element."]}),`
`,l(e.p,{children:["The ",n(e.code,{children:"labelText"}),` value is used to populate a global visual label for component.
The value is also used to generate appropriate `,n(e.code,{children:"aria-label"}),` values for the
component's text input and slider thumb. When `,n(e.code,{children:"showLabel"}),` is set to false, the
visual label will be removed from the UI, but the value will still be used to
generate the aria-label values for the previously mentioned internal
elements.`]}),`
`,l(e.p,{children:["In addition to the ",n(e.code,{children:"aria-label"}),` attribute, the slider thumb will also contains
the `,n(e.code,{children:"aria-valuemin"}),", ",n(e.code,{children:"aria-valuemax"}),", ",n(e.code,{children:"aria-orientation"}),", and ",n(e.code,{children:"aria-valuenow"}),`
attributes.`]}),`
`,n(e.p,{children:"Resources:"}),`
`,l(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"https://www.w3.org/TR/wai-aria-practices-1.1/#slider",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C WAI-Aria Practices - Slider"})}),`
`,n(e.li,{children:n(e.a,{href:"https://www.w3.org/TR/wai-aria-practices-1.1/#slidertwothumb",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C WAI-Aria Practices - Slider (Multi-Thumb)"})}),`
`,n(e.li,{children:n(e.a,{href:"https://chakra-ui.com/docs/components/form/slider",target:"_blank",rel:"nofollow noopener noreferrer",children:"Chakra Slider"})}),`
`,n(e.li,{children:n(e.a,{href:"https://chakra-ui.com/docs/components/form/range-slider",target:"_blank",rel:"nofollow noopener noreferrer",children:"Chakra RangeSlider"})}),`
`]}),`
`,n(e.h3,{id:"slider-accessibility-implementation",children:"Slider Accessibility Implementation"}),`
`,l(e.p,{children:["Chakra's ",n(e.code,{children:"Slider"}),` component is accessible and, as recommended, we pass in an
`,n(e.code,{children:"aria-label"})," to their ",n(e.code,{children:"Slider"}),` component. On top of that, the Reservoir Design
System (DS) `,n(e.code,{children:"Slider"})," component's ",n(e.code,{children:"<label>"})," points to the ",n(e.code,{children:"<input>"}),` element
which shows the current value. This `,n(e.code,{children:"input"}),` element also has its own
`,n(e.code,{children:"aria-label"}),". When the input box is hidden, the ",n(e.code,{children:"for"})," attribute in the ",n(e.code,{children:"label"}),`
element is removed.`]}),`
`,l(e.p,{children:[`Note that Chakra will automatically generate the values for the following aria
attributes on the single slider thumb: `,n(e.code,{children:"aria-valuemin"}),", ",n(e.code,{children:"aria-valuemax"}),`,
`,n(e.code,{children:"aria-valuenow"}),", and ",n(e.code,{children:"aria-orientation"}),`. However, Chakra does not generate the
value for the `,n(e.code,{children:"aria-label"}),` attribute on the single slider thumb. The value for
the `,n(e.code,{children:"aria-label"})," attribute is dependent on the ",n(e.code,{children:"labelText"})," value."]}),`
`,n(e.h2,{id:"rangeslider",children:"RangeSlider"}),`
`,l(e.p,{children:["Set ",n(e.code,{children:"isRangeSlider"})," to ",n(e.code,{children:"true"}),` to create a range slider. The text input
components double as displays for the slider's current minimum and maximum
value. For this type of component, the `,n(e.code,{children:"value"}),` prop must be an array of two
numbers. This signifies the starting and ending values of the range slider.`]}),`
`,l(e.p,{children:[`Similar to the single slider configuration, each of the two sliders in the range
slider configuration will contain the `,n(e.code,{children:"aria-label"}),", ",n(e.code,{children:"aria-valuemin"}),`,
`,n(e.code,{children:"aria-valuemax"}),", ",n(e.code,{children:"aria-orientation"}),", and ",n(e.code,{children:"aria-valuenow"})," attributes."]}),`
`,n(t,{of:g}),`
`,n(e.h3,{id:"rangeslider-accessibility-implementation",children:"RangeSlider Accessibility Implementation"}),`
`,l(e.p,{children:["Chakra's ",n(e.code,{children:"RangeSlider"}),` component is accessible and, as recommended, we pass in
two `,n(e.code,{children:"aria-label"})," values to their ",n(e.code,{children:"RangeSlider"}),` component. The syntax is
different than the expected standard string; the `,n(e.code,{children:"RangeSlider"}),` expects
`,n(e.code,{children:"aria-label"})," to be an array of two strings. On top of this, the DS ",n(e.code,{children:"Slider"}),`'s
`,n(e.code,{children:"<label>"})," element, when in the ",n(e.code,{children:"isRangeSlider"})," state, points to the ",n(e.em,{children:"first"}),`
`,n(e.code,{children:"<input>"})," element which shows the current ",n(e.em,{children:"start"})," value. These two ",n(e.code,{children:"input"}),`
elements also have their own `,n(e.code,{children:"aria-label"}),`s. When the input boxes are hidden, the
`,n(e.code,{children:"for"})," attribute in the ",n(e.code,{children:"label"})," element is removed."]}),`
`,l(e.p,{children:[`Note that Chakra will automatically generate the values for the following aria
attributes on the two slider thumbs: `,n(e.code,{children:"aria-valuemin"}),", ",n(e.code,{children:"aria-valuemax"}),`,
`,n(e.code,{children:"aria-valuenow"}),", and ",n(e.code,{children:"aria-orientation"}),`. However, Chakra will not generate the
values for the `,n(e.code,{children:"aria-label"}),` attributes on the two slider thumbs. The values for
the `,n(e.code,{children:"aria-label"})," attributes are dependent on the ",n(e.code,{children:"labelText"})," value."]}),`
`,n(e.h2,{id:"examples",children:"Examples"}),`
`,n(e.h3,{id:"single-slider-states",children:"Single Slider States"}),`
`,n(t,{of:f}),`
`,n(e.h3,{id:"range-slider-states",children:"Range Slider States"}),`
`,l(e.p,{children:["To enable the Range Slider, set the ",n(e.code,{children:"isRangeSlider"})," prop to true."]}),`
`,n(t,{of:b}),`
`,n(e.h3,{id:"single-slider-variants",children:"Single Slider Variants"}),`
`,n(e.p,{children:`In the following example, the min/max values and the current value text
input are hidden.`}),`
`,n(t,{of:v}),`
`,n(e.p,{children:"For the following examples, all labels are hidden."}),`
`,n(t,{of:S}),`
`,n(e.h3,{id:"range-slider-with-adjusted-handles",children:"Range Slider with Adjusted Handles"}),`
`,n(e.p,{children:"In the following examples, all the labels are hidden."}),`
`,n(t,{of:w}),`
`,n(e.h2,{id:"get-input-values",children:"Get Input Values"}),`
`,l(e.p,{children:["Pass a callback function to the ",n(e.code,{children:"onChange"}),` prop to get the current number value
of the `,n(e.code,{children:"Slider"}),` component or an array of two numbers when it is a range slider.
Internally, the `,n(e.code,{children:"Slider"}),` component handles the state of the current selected
value or values. Once the value(s) is updated, the `,n(e.code,{children:"onChange"}),` callback will be
called and the values will be passed. If no `,n(e.code,{children:"onChange"}),` callback is provided,
you won't be able to get the updated value(s) of the `,n(e.code,{children:"Slider"})," component."]}),`
`,n(e.h3,{id:"single-slider-value",children:"Single Slider Value"}),`
`,l(e.p,{children:["Open up the browser's developer console to see the value of the ",n(e.code,{children:"Slider"}),`
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
`,n(t,{of:x}),`
`,n(e.h3,{id:"range-slider-values",children:"Range Slider Values"}),`
`,l(e.p,{children:["Open up the browser's developer console to see the values of the ",n(e.code,{children:"Slider"}),`
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
`,n(t,{of:C}),`
`,n(e.h3,{id:"get-final-slider-value",children:"Get Final Slider Value"}),`
`,l(e.p,{children:["Pass a callback function to the ",n(e.code,{children:"onChangeEnd"}),` prop to get the final number value
of the `,n(e.code,{children:"Slider"})," component or an array of two numbers when it is a range slider."]}),`
`,l(e.p,{children:[`Dragging the slider can trigger lots of updates and the consuming app might
only be interested in the final result after sliding is complete. You can use
`,n(e.code,{children:"onChangeEnd"})," for this."]}),`
`,n(e.h4,{id:"single-slider-value-1",children:"Single Slider Value"}),`
`,l(e.p,{children:["Open up the browser's developer console to see the value of the ",n(e.code,{children:"Slider"}),` after
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
`,n(t,{of:y}),`
`,n(e.h4,{id:"range-slider-values-1",children:"Range Slider Values"}),`
`,l(e.p,{children:["Open up the browser's developer console to see the values of the ",n(e.code,{children:"Slider"}),`
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
`,n(t,{of:T}),`
`,n(e.h3,{id:"programmatically-update",children:"Programmatically Update"}),`
`,l(e.p,{children:["The ",n(e.code,{children:"Slider"})," can be updated programmatically through the ",n(e.code,{children:"value"}),` prop. Like the
`,n(e.code,{children:"defaultValue"})," prop, the ",n(e.code,{children:"value"}),` prop also takes in a single number for the regular
`,n(e.code,{children:"Slider"}),' component or an array of two numbers for the "Range" ',n(e.code,{children:"Slider"})," component."]}),`
`,l(e.p,{children:[`When doing this, the consuming app is controlling the state of the values. By
default, the `,n(e.code,{children:"Slider"}),` component internally keeps track of the current value(s)
and returns the value(s) to the consuming app through the `,n(e.code,{children:"onChange"})," callback."]}),`
`,l(e.p,{children:["Open up the browser's developer console to see the values of the ",n(e.code,{children:"Slider"}),` after
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
`,n(t,{of:R}),`
`,n(e.h2,{id:"changelog",children:"Changelog"}),`
`,n(V,{changelogData:F})]})}function ge(r={}){const{wrapper:e}=Object.assign({},h(),r.components);return e?n(e,Object.assign({},r,{children:n(d,r)})):d(r)}export{ge as default};
//# sourceMappingURL=Slider-ed8b69f4.js.map
