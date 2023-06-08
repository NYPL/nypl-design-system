import{j as e,a,F as C}from"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import{r as pe}from"./index-f2bd0723.js";import{w as xe}from"./index-6148c31a.js";import{H as n}from"./Heading-2ec2ea62.js";import{a as L,b as V,F as me}from"./Form-7babaf24.js";import{S as v}from"./SimpleGrid-e54e0b68.js";import{S as l}from"./Slider-c914507b.js";import{T as R}from"./TextInput-3683470d.js";import{B as S,V as he}from"./chakra-ui-layout.esm-b2fa9d31.js";const ge={title:"Components/Form Elements/Slider",component:l,decorators:[xe],argTypes:{className:{control:!1},defaultValue:{control:!1,table:{defaultValue:{summary:0}}},id:{control:!1},isDisabled:{table:{defaultValue:{summary:!1}}},isInvalid:{table:{defaultValue:{summary:!1}}},isRequired:{table:{defaultValue:{summary:!1}}},max:{table:{defaultValue:{summary:100}}},min:{table:{defaultValue:{summary:0}}},name:{control:!1},onChange:{control:!1},onChangeEnd:{control:!1},showBoxes:{table:{defaultValue:{summary:!0}}},showHelperInvalidText:{table:{defaultValue:{summary:!0}}},showLabel:{table:{defaultValue:{summary:!0}}},showRequiredLabel:{table:{defaultValue:{summary:!0}}},showValues:{table:{defaultValue:{summary:!0}}},step:{table:{defaultValue:{summary:1}}},value:{control:!1}}},s={args:{className:void 0,defaultValue:50,helperText:"Pass in a value from the min 0 to the max 100 values.",id:"slider-id",invalidText:"Oh no this is an error :(",isDisabled:!1,isInvalid:!1,isRangeSlider:!1,isRequired:!1,labelText:"Slider label",max:100,min:0,name:void 0,onChange:void 0,onChangeEnd:void 0,showBoxes:!0,showHelperInvalidText:!0,showLabel:!0,showRequiredLabel:!0,showValues:!0,step:1,value:void 0},argTypes:{isRangeSlider:{control:!1,table:{defaultValue:{summary:!1}}}},render:t=>e(l,{...t}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=36889%3A25871"},jest:["Slider.test.tsx"]}},i={args:{className:void 0,defaultValue:[25,75],helperText:"Pass in a value from the min 0 to the max 100 values.",id:"slider-range-id",invalidText:"Oh no this is an error :(",isDisabled:!1,isInvalid:!1,isRangeSlider:!0,isRequired:!1,labelText:"Range Slider label",max:100,min:0,name:void 0,onChange:void 0,onChangeEnd:void 0,showBoxes:!0,showHelperInvalidText:!0,showLabel:!0,showRequiredLabel:!0,showValues:!0,step:1,value:void 0},argTypes:{isRangeSlider:{control:!1,table:{defaultValue:{summary:!1}}}},render:t=>e(l,{...t})},d={render:()=>a(he,{align:"stretch",spacing:"l",children:[a(S,{children:[e(n,{id:"heading-single-default",level:"four",text:"Default State"}),e(l,{defaultValue:50,helperText:"Component helper text.",id:"single-slider",invalidText:"Component error text :(",labelText:"Label"})]}),a(S,{children:[e(n,{id:"heading-single-errored",level:"four",text:"Errored State"}),e(l,{defaultValue:50,helperText:"Component helper text.",id:"errored-slider",invalidText:"Component error text :(",labelText:"Label",isInvalid:!0}),e("p",{children:"Note: If the `min` prop value is greater than the `max` prop value, then this will be an errored state."}),e(l,{defaultValue:50,helperText:"Component helper text.",id:"errored-slider",invalidText:"The `min` value must be less than the `max` value.",labelText:"Label",max:30,min:80})]}),a(S,{children:[e(n,{id:"heading-single-required",level:"four",text:"Required State"}),e(l,{defaultValue:50,helperText:"Component helper text.",id:"required-slider",invalidText:"Component error text :(",labelText:"Label",isRequired:!0})]}),a(S,{children:[e(n,{id:"heading-single-disabled",level:"four",text:"Disabled State"}),e(l,{defaultValue:50,helperText:"Component helper text.",id:"disabled-slider",invalidText:"Component error text :(",labelText:"Label",isDisabled:!0})]})]})},o={render:()=>a(he,{align:"stretch",spacing:"l",children:[a("div",{children:[e(n,{id:"heading-range-default",level:"four",text:"Default State"}),e(l,{defaultValue:[25,75],helperText:"Component helper text.",id:"range-slider",invalidText:"Component error text :(",labelText:"Label",isRangeSlider:!0})]}),a("div",{children:[e(n,{id:"heading-range-errored",level:"four",text:"Errored State"}),a(v,{columns:1,gap:"grid.l",children:[e(l,{defaultValue:[25,75],helperText:"Component helper text.",id:"range-error-slider",invalidText:"Component error text :(",labelText:"Label",isRangeSlider:!0,isInvalid:!0}),e("p",{children:"Note: The slider does not allow the starting thumb to go past the ending thumb. Likewise, it also does not allow the ending thumb to go below the starting thumb. However, it's possible to set incorrect values directly into both of the text inputs. For example, if you enter 80 in the first text input box and 20 in the second input box, it will automatically go into the invalid state. In the following example, the default values are already set to 80 and 20 *just* to showcase this error."}),e(l,{defaultValue:[80,20],helperText:"Component helper text.",id:"range-error-slider2",invalidText:"Component error text :(",labelText:"Label",isRangeSlider:!0})]})]}),a("div",{children:[e(n,{id:"heading-range-required",level:"four",text:"Required State"}),e(l,{defaultValue:[25,75],helperText:"Component helper text.",id:"range-required-slider",invalidText:"Component error text :(",labelText:"Label",isRangeSlider:!0,isRequired:!0})]}),a("div",{children:[e(n,{id:"heading-range-disabled",level:"four",text:"Disabled State"}),e(l,{defaultValue:[25,75],helperText:"Component helper text.",id:"single-disabled-slider",invalidText:"Component error text :(",labelText:"Label",isRangeSlider:!0,isDisabled:!0})]})]})},u={render:()=>a(C,{children:[e(n,{id:"heading-single-labels",level:"four",text:"With and Without Component Labels"}),a(v,{columns:1,gap:"grid.xl",children:[e(l,{defaultValue:50,helperText:"Component helper text.",id:"single-slider-variant-1",labelText:"Label",showValues:!1,showBoxes:!1}),e(l,{defaultValue:50,helperText:"Component helper text.",id:"single-slider-variant-2",labelText:"Label",showValues:!1,showBoxes:!1,isRequired:!0}),e(l,{defaultValue:50,helperText:"Component helper text.",id:"single-slider-variant-3",labelText:"Label",showValues:!1,showBoxes:!1}),e(l,{defaultValue:50,helperText:"Component helper text.",id:"single-slider-variant-4",labelText:"Label",showHelperInvalidText:!1,showValues:!1,showBoxes:!1}),e(l,{defaultValue:50,helperText:"Component helper text.",id:"single-slider-variant-5",labelText:"Label",showValues:!1,showBoxes:!1,showLabel:!1})]})]})},h={render:()=>a(C,{children:[e(n,{id:"heading-single-labels-inputs",level:"four",text:"With and Without Internal Inputs and Labels"}),a(v,{columns:1,gap:"grid.xl",children:[e(l,{defaultValue:50,helperText:"Component helper text.",id:"hidden-labels-1",labelText:"Label",showHelperInvalidText:!1,showLabel:!1}),e(l,{defaultValue:50,helperText:"Component helper text.",id:"hidden-labels-2",labelText:"Label",showHelperInvalidText:!1,showLabel:!1,showBoxes:!1}),e(l,{defaultValue:50,helperText:"Component helper text.",id:"hidden-labels-3",labelText:"Label",showHelperInvalidText:!1,showLabel:!1,showValues:!1}),e(l,{defaultValue:50,helperText:"Component helper text.",id:"hidden-labels-4",labelText:"Label",showHelperInvalidText:!1,showLabel:!1,showValues:!1,showBoxes:!1})]})]})},p={render:()=>e(C,{children:a(v,{columns:1,gap:"grid.xl",children:[e(l,{defaultValue:[15,75],helperText:"Component helper text.",id:"range-slider-1",isRangeSlider:!0,labelText:"Label",showHelperInvalidText:!1,showLabel:!1}),e(l,{defaultValue:[15,75],helperText:"Component helper text.",id:"range-slider-1",isRangeSlider:!0,labelText:"Label",showBoxes:!1,showHelperInvalidText:!1,showLabel:!1}),e(l,{defaultValue:[15,75],helperText:"Component helper text.",id:"range-slider-3",isRangeSlider:!0,labelText:"Label",showHelperInvalidText:!1,showLabel:!1,showValues:!1}),e(l,{defaultValue:[15,75],helperText:"Component helper text.",id:"range-slider-4",isRangeSlider:!0,labelText:"Label",showBoxes:!1,showHelperInvalidText:!1,showLabel:!1,showValues:!1})]})})};function fe(){return e(l,{defaultValue:50,helperText:"Component helper text.",id:"slider",labelText:"Label",onChange:r=>{console.log(`The single Slider updated value is: ${r}`)}})}const x={render:()=>e(fe,{})};function be(){return e(l,{defaultValue:[15,75],helperText:"Component helper text.",id:"range-slider",isRangeSlider:!0,labelText:"Label",onChange:r=>{const[c,T]=r;console.log(`The Range Slider updated start value is: ${c}`),console.log(`The Range Slider updated end value is: ${T}`)}})}const m={render:()=>e(be,{})};function ce(){return e(l,{defaultValue:50,helperText:"Component helper text.",id:"slider",labelText:"Label",onChangeEnd:r=>{console.log(`The single Slider updated value is: ${r}`)}})}const g={render:()=>e(ce,{})};function Te(){return e(l,{defaultValue:[15,75],helperText:"Component helper text.",id:"range-slider",isRangeSlider:!0,labelText:"Label",onChangeEnd:r=>{const[c,T]=r;console.log(`The Range Slider updated start value is: ${c}`),console.log(`The Range Slider updated end value is: ${T}`)}})}const f={render:()=>e(Te,{})};function Se(){const[t,r]=pe.useState([15,75]);return a(me,{id:"slider-example",children:[a(L,{children:[e(V,{children:e(R,{id:"textInput-s1",labelText:"First Slider value",onChange:w=>{r([w.target.value,t[1]])}})}),e(V,{children:e(R,{id:"textInput-s2",labelText:"Second Slider value",onChange:w=>{r([t[0],w.target.value])}})})]}),e(L,{children:e(V,{children:e(l,{defaultValue:[15,75],helperText:"Values can be updated through the two inputs aboev.",id:"range-slider-text-example",isRangeSlider:!0,labelText:"Slider with Updated Values",showBoxes:!1,value:t})})})]})}const b={render:()=>e(Se,{})};var I,H,y,B,q;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    className: undefined,
    defaultValue: 50,
    helperText: "Pass in a value from the min 0 to the max 100 values.",
    id: "slider-id",
    invalidText: "Oh no this is an error :(",
    isDisabled: false,
    isInvalid: false,
    isRangeSlider: false,
    isRequired: false,
    labelText: "Slider label",
    max: 100,
    min: 0,
    name: undefined,
    onChange: undefined,
    onChangeEnd: undefined,
    showBoxes: true,
    showHelperInvalidText: true,
    showLabel: true,
    showRequiredLabel: true,
    showValues: true,
    step: 1,
    value: undefined
  },
  argTypes: {
    isRangeSlider: {
      control: false,
      table: {
        defaultValue: {
          summary: false
        }
      }
    }
  },
  render: args => <Slider {...args} />,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=36889%3A25871"
    },
    jest: ["Slider.test.tsx"]
  }
}`,...(y=(H=s.parameters)==null?void 0:H.docs)==null?void 0:y.source},description:{story:"Main Story for the Slider component. This must contains the `args`\nand `parameters` properties in this object.",...(q=(B=s.parameters)==null?void 0:B.docs)==null?void 0:q.description}}};var E,F,D;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    className: undefined,
    defaultValue: [25, 75],
    helperText: "Pass in a value from the min 0 to the max 100 values.",
    id: "slider-range-id",
    invalidText: "Oh no this is an error :(",
    isDisabled: false,
    isInvalid: false,
    isRangeSlider: true,
    isRequired: false,
    labelText: "Range Slider label",
    max: 100,
    min: 0,
    name: undefined,
    onChange: undefined,
    onChangeEnd: undefined,
    showBoxes: true,
    showHelperInvalidText: true,
    showLabel: true,
    showRequiredLabel: true,
    showValues: true,
    step: 1,
    value: undefined
  },
  argTypes: {
    isRangeSlider: {
      control: false,
      table: {
        defaultValue: {
          summary: false
        }
      }
    }
  },
  render: args => <Slider {...args} />
}`,...(D=(F=i.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var W,G,j;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <VStack align="stretch" spacing="l">
      <Box>
        <Heading id="heading-single-default" level="four" text="Default State" />
        <Slider defaultValue={50} helperText="Component helper text." id="single-slider" invalidText="Component error text :(" labelText="Label" />
      </Box>
      <Box>
        <Heading id="heading-single-errored" level="four" text="Errored State" />
        <Slider defaultValue={50} helperText="Component helper text." id="errored-slider" invalidText="Component error text :(" labelText="Label" isInvalid />
        <p>
          Note: If the \`min\` prop value is greater than the \`max\` prop value,
          then this will be an errored state.
        </p>
        <Slider defaultValue={50} helperText="Component helper text." id="errored-slider" invalidText="The \`min\` value must be less than the \`max\` value." labelText="Label" max={30} min={80} />
      </Box>
      <Box>
        <Heading id="heading-single-required" level="four" text="Required State" />
        <Slider defaultValue={50} helperText="Component helper text." id="required-slider" invalidText="Component error text :(" labelText="Label" isRequired />
      </Box>
      <Box>
        <Heading id="heading-single-disabled" level="four" text="Disabled State" />
        <Slider defaultValue={50} helperText="Component helper text." id="disabled-slider" invalidText="Component error text :(" labelText="Label" isDisabled />
      </Box>
    </VStack>
}`,...(j=(G=d.parameters)==null?void 0:G.docs)==null?void 0:j.source}}};var N,P,k;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <VStack align="stretch" spacing="l">
      <div>
        <Heading id="heading-range-default" level="four" text="Default State" />
        <Slider defaultValue={[25, 75]} helperText="Component helper text." id="range-slider" invalidText="Component error text :(" labelText="Label" isRangeSlider />
      </div>
      <div>
        <Heading id="heading-range-errored" level="four" text="Errored State" />
        <SimpleGrid columns={1} gap="grid.l">
          <Slider defaultValue={[25, 75]} helperText="Component helper text." id="range-error-slider" invalidText="Component error text :(" labelText="Label" isRangeSlider isInvalid />
          <p>
            Note: The slider does not allow the starting thumb to go past the
            ending thumb. Likewise, it also does not allow the ending thumb to
            go below the starting thumb. However, it's possible to set incorrect
            values directly into both of the text inputs. For example, if you
            enter 80 in the first text input box and 20 in the second input box,
            it will automatically go into the invalid state. In the following
            example, the default values are already set to 80 and 20 *just* to
            showcase this error.
          </p>
          <Slider defaultValue={[80, 20]} helperText="Component helper text." id="range-error-slider2" invalidText="Component error text :(" labelText="Label" isRangeSlider />
        </SimpleGrid>
      </div>
      <div>
        <Heading id="heading-range-required" level="four" text="Required State" />
        <Slider defaultValue={[25, 75]} helperText="Component helper text." id="range-required-slider" invalidText="Component error text :(" labelText="Label" isRangeSlider isRequired />
      </div>
      <div>
        <Heading id="heading-range-disabled" level="four" text="Disabled State" />
        <Slider defaultValue={[25, 75]} helperText="Component helper text." id="single-disabled-slider" invalidText="Component error text :(" labelText="Label" isRangeSlider isDisabled />
      </div>
    </VStack>
}`,...(k=(P=o.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var O,A,M;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <>
      <Heading id="heading-single-labels" level="four" text="With and Without Component Labels" />
      <SimpleGrid columns={1} gap="grid.xl">
        <Slider defaultValue={50} helperText="Component helper text." id="single-slider-variant-1" labelText="Label" showValues={false} showBoxes={false} />
        <Slider defaultValue={50} helperText="Component helper text." id="single-slider-variant-2" labelText="Label" showValues={false} showBoxes={false} isRequired />
        <Slider defaultValue={50} helperText="Component helper text." id="single-slider-variant-3" labelText="Label" showValues={false} showBoxes={false} />
        <Slider defaultValue={50} helperText="Component helper text." id="single-slider-variant-4" labelText="Label" showHelperInvalidText={false} showValues={false} showBoxes={false} />
        <Slider defaultValue={50} helperText="Component helper text." id="single-slider-variant-5" labelText="Label" showValues={false} showBoxes={false} showLabel={false} />
      </SimpleGrid>
    </>
}`,...(M=(A=u.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var _,$,U;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <>
      <Heading id="heading-single-labels-inputs" level="four" text="With and Without Internal Inputs and Labels" />
      <SimpleGrid columns={1} gap="grid.xl">
        <Slider defaultValue={50} helperText="Component helper text." id="hidden-labels-1" labelText="Label" showHelperInvalidText={false} showLabel={false} />
        <Slider defaultValue={50} helperText="Component helper text." id="hidden-labels-2" labelText="Label" showHelperInvalidText={false} showLabel={false} showBoxes={false} />
        <Slider defaultValue={50} helperText="Component helper text." id="hidden-labels-3" labelText="Label" showHelperInvalidText={false} showLabel={false} showValues={false} />
        <Slider defaultValue={50} helperText="Component helper text." id="hidden-labels-4" labelText="Label" showHelperInvalidText={false} showLabel={false} showValues={false} showBoxes={false} />
      </SimpleGrid>
    </>
}`,...(U=($=h.parameters)==null?void 0:$.docs)==null?void 0:U.source}}};var J,z,K;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <>
      <SimpleGrid columns={1} gap="grid.xl">
        <Slider defaultValue={[15, 75]} helperText="Component helper text." id="range-slider-1" isRangeSlider labelText="Label" showHelperInvalidText={false} showLabel={false} />
        <Slider defaultValue={[15, 75]} helperText="Component helper text." id="range-slider-1" isRangeSlider labelText="Label" showBoxes={false} showHelperInvalidText={false} showLabel={false} />
        <Slider defaultValue={[15, 75]} helperText="Component helper text." id="range-slider-3" isRangeSlider labelText="Label" showHelperInvalidText={false} showLabel={false} showValues={false} />
        <Slider defaultValue={[15, 75]} helperText="Component helper text." id="range-slider-4" isRangeSlider labelText="Label" showBoxes={false} showHelperInvalidText={false} showLabel={false} showValues={false} />
      </SimpleGrid>
    </>
}`,...(K=(z=p.parameters)==null?void 0:z.docs)==null?void 0:K.source}}};var Q,X,Y;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <SliderExampleComponent />
}`,...(Y=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,le;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <RangeSliderExample />
}`,...(le=(ee=m.parameters)==null?void 0:ee.docs)==null?void 0:le.source}}};var ae,te,re;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <SliderEndExample />
}`,...(re=(te=g.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ne,se,ie;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <RangeSliderEndExample />
}`,...(ie=(se=f.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var de,oe,ue;b.parameters={...b.parameters,docs:{...(de=b.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <RangeSliderValuesUpdateExample />
}`,...(ue=(oe=b.parameters)==null?void 0:oe.docs)==null?void 0:ue.source}}};const ve=["WithControls","RangeSliderWithControls","SingleSliderStates","RangeSliderStates","SingleSliderVariants","SingleSliderVariantsHiddenLabels","RangeSliderWithAdjustedHandles","GetInputValuesSingleSlider","GetInputValuesRangeSlider","FinalSingleSliderValue","FinalRangeSliderValue","ProgrammaticallyUpdate"],qe=Object.freeze(Object.defineProperty({__proto__:null,FinalRangeSliderValue:f,FinalSingleSliderValue:g,GetInputValuesRangeSlider:m,GetInputValuesSingleSlider:x,ProgrammaticallyUpdate:b,RangeSliderStates:o,RangeSliderWithAdjustedHandles:p,RangeSliderWithControls:i,SingleSliderStates:d,SingleSliderVariants:u,SingleSliderVariantsHiddenLabels:h,WithControls:s,__namedExportsOrder:ve,default:ge},Symbol.toStringTag,{value:"Module"}));export{g as F,x as G,b as P,i as R,qe as S,s as W,d as a,o as b,u as c,h as d,p as e,m as f,f as g};
//# sourceMappingURL=Slider.stories-5825a527.js.map
