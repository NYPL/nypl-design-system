import{a as i,j as e}from"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import{w as O}from"./index-6148c31a.js";import{B as k}from"./Button-948e9be8.js";import{B as M}from"./ButtonGroup-c2c033a6.js";import{C as d}from"./Checkbox-6e7b1e16.js";import{C}from"./CheckboxGroup-6c26da72.js";import{D as G}from"./DatePicker-542b5b5a.js";import{F as m,b as l,a as o}from"./Form-b79b3734.js";import{g as S}from"./SimpleGrid-bd04b221.js";import{H as L}from"./Heading-7eebc756.js";import{H as P}from"./HorizontalRule-3ade1aff.js";import{R as s}from"./Radio-8cdc7037.js";import{R as q}from"./RadioGroup-8ef77e28.js";import{S as h}from"./Select-2c2d1d20.js";import{T as n}from"./TextInput-70995d87.js";import{F as p,A as c}from"./chakra-ui-layout.esm-e0dbb94e.js";const D={title:"Components/Form Elements/Form",component:m,decorators:[O],argTypes:{action:{control:!1},id:{control:!1},method:{control:{type:"radio"},options:["get","post"]},gap:{control:{type:"select"},table:{defaultValue:{summary:"grid.l"}},options:S}}},r={args:{action:"/end/point",className:void 0,id:"form-id",method:"get",gap:"grid.l"},parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?type=design&node-id=10734-2768"},jest:"Form.test.tsx"},render:t=>i(m,{...t,id:"form-id",children:[i(l,{children:[e(o,{children:e(n,{helperText:"Make sure to complete this field.",id:"first-name",isRequired:!0,labelText:"First Name"})}),e(o,{children:e(n,{helperText:"Make sure to complete this field.",id:"last-name",isRequired:!0,labelText:"Last Name"})}),e(o,{children:e(G,{dateType:"full",dateFormat:"yyyy-MM-dd",helperTextFrom:"From this date.",helperTextTo:"To this date.",helperText:"Select a valid date range.",id:"date-range",invalidText:"Please select a valid date range.",isDateRange:!0,labelText:"Select the date range you want to visit NYPL",minDate:"1/1/2021",maxDate:"1/1/2022",nameFrom:"visit-dates",showLabel:!1})})]}),e(o,{children:e(n,{helperText:"Make sure to complete this field.",id:"username",isRequired:!0,labelText:"Username"})}),e(o,{children:e(n,{helperText:"Make sure to complete this field.",id:"password",isRequired:!0,labelText:"Password"})}),i(l,{children:[e(o,{children:e(n,{helperText:"This one is up to you.",id:"phone",labelText:"Phone Field",type:"tel"})}),e(o,{children:e(n,{helperText:"This one is up to you.",id:"url",labelText:"URL Field",type:"url"})}),e(o,{children:e(n,{helperText:"This one is up to you.",id:"age",labelText:"Age",type:"number"})})]}),i(l,{children:[e(o,{children:i(C,{id:"checkbox-group",isFullWidth:!0,labelText:"Checkbox Group",name:"checkbox-example",children:[e(d,{id:"arts",labelText:i(p,{children:[e("span",{children:"Arts"}),e(c,{}),e("span",{children:"4"})]}),value:"arts"}),e(d,{id:"english",labelText:i(p,{children:[e("span",{children:"English"}),e(c,{}),e("span",{children:"23"})]}),value:"English"}),e(d,{id:"science",labelText:i(p,{children:[e("span",{children:"Science"}),e(c,{}),e("span",{children:"10"})]}),value:"Science"}),e(d,{id:"math",labelText:i(p,{children:[e("span",{children:"Math"}),e(c,{}),e("span",{children:"3"})]}),value:"Math"})]})}),e(o,{children:i(q,{id:"radio-group",labelText:"Radio Group",name:"rg1",children:[e(s,{id:"radio1",labelText:"Radio 1",value:"radio1"}),e(s,{id:"radio2",labelText:"Radio 2",value:"radio2"}),e(s,{id:"radio3",labelText:"Radio 3",value:"radio3"}),e(s,{id:"radio4",labelText:"Radio 4",value:"radio4"})]})}),e(o,{children:i(h,{helperText:"The select field helper text.",id:"select",labelText:"Select Field",name:"select",showLabel:!0,children:[e("option",{children:"Option 1"}),e("option",{children:"Option 2"}),e("option",{children:"Option 3"}),e("option",{children:"Option 4"}),e("option",{children:"Option 5"})]})})]}),e(l,{children:e(o,{children:e(M,{children:e(k,{id:"submit",children:"Submit"})})})})]})},I=t=>{const v=`Size: ${t}`;return i("li",{children:[e(L,{level:"h3",size:"heading6",children:v}),e(m,{gap:t,id:`form-spacing-${t}`,children:i(l,{children:[e(o,{children:i(h,{helperText:"The select field helper text.",id:`select-spacing-${t}-1`,labelText:"Select Field",name:`select-spacing-${t}-1`,showLabel:!0,children:[e("option",{children:"Option 1"}),e("option",{children:"Option 2"}),e("option",{children:"Option 3"}),e("option",{children:"Option 4"})]})}),e(o,{children:i(h,{helperText:"The select field helper text.",id:`select-spacing-${t}-2`,labelText:"Select Field",name:`select-spacing-${t}-2`,showLabel:!0,children:[e("option",{children:"Option 1"}),e("option",{children:"Option 2"}),e("option",{children:"Option 3"}),e("option",{children:"Option 4"})]})}),e(o,{children:i(h,{helperText:"The select field helper text.",id:`select-spacing-${t}-3`,labelText:"Select Field",name:`select-spacing-${t}-3`,showLabel:!0,children:[e("option",{children:"Option 1"}),e("option",{children:"Option 2"}),e("option",{children:"Option 3"}),e("option",{children:"Option 4"})]})})]})}),e(P,{})]},t)},w=[],u=S;for(const t in u)w.push(I(u[t]));const N=t=>e("ul",{style:{listStyle:"none"},children:t}),a={render:()=>N(w)};var x,F,T,b,g;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    action: "/end/point",
    className: undefined,
    id: "form-id",
    method: "get",
    gap: "grid.l"
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?type=design&node-id=10734-2768"
    },
    jest: "Form.test.tsx"
  },
  render: args => <Form {...args} id="form-id">
      <FormRow>
        <FormField>
          <TextInput helperText="Make sure to complete this field." id="first-name" isRequired labelText="First Name" />
        </FormField>
        <FormField>
          <TextInput helperText="Make sure to complete this field." id="last-name" isRequired labelText="Last Name" />
        </FormField>
        <FormField>
          <DatePicker dateType="full" dateFormat="yyyy-MM-dd" helperTextFrom="From this date." helperTextTo="To this date." helperText="Select a valid date range." id="date-range" invalidText="Please select a valid date range." isDateRange labelText="Select the date range you want to visit NYPL" minDate="1/1/2021" maxDate="1/1/2022" nameFrom="visit-dates" showLabel={false} />
        </FormField>
      </FormRow>
      <FormField>
        <TextInput helperText="Make sure to complete this field." id="username" isRequired labelText="Username" />
      </FormField>
      <FormField>
        <TextInput helperText="Make sure to complete this field." id="password" isRequired labelText="Password" />
      </FormField>
      <FormRow>
        <FormField>
          <TextInput helperText="This one is up to you." id="phone" labelText="Phone Field" type="tel" />
        </FormField>
        <FormField>
          <TextInput helperText="This one is up to you." id="url" labelText="URL Field" type="url" />
        </FormField>
        <FormField>
          <TextInput helperText="This one is up to you." id="age" labelText="Age" type="number" />
        </FormField>
      </FormRow>
      <FormRow>
        <FormField>
          <CheckboxGroup id="checkbox-group" isFullWidth labelText="Checkbox Group" name="checkbox-example">
            <Checkbox id="arts" labelText={<Flex>
                  <span>Arts</span>
                  <Spacer />
                  <span>4</span>
                </Flex>} value="arts" />
            <Checkbox id="english" labelText={<Flex>
                  <span>English</span>
                  <Spacer />
                  <span>23</span>
                </Flex>} value="English" />
            <Checkbox id="science" labelText={<Flex>
                  <span>Science</span>
                  <Spacer />
                  <span>10</span>
                </Flex>} value="Science" />
            <Checkbox id="math" labelText={<Flex>
                  <span>Math</span>
                  <Spacer />
                  <span>3</span>
                </Flex>} value="Math" />
          </CheckboxGroup>
        </FormField>
        <FormField>
          <RadioGroup id="radio-group" labelText="Radio Group" name="rg1">
            <Radio id="radio1" labelText="Radio 1" value="radio1" />
            <Radio id="radio2" labelText="Radio 2" value="radio2" />
            <Radio id="radio3" labelText="Radio 3" value="radio3" />
            <Radio id="radio4" labelText="Radio 4" value="radio4" />
          </RadioGroup>
        </FormField>
        <FormField>
          <Select helperText="The select field helper text." id="select" labelText="Select Field" name="select" showLabel={true}>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
            <option>Option 5</option>
          </Select>
        </FormField>
      </FormRow>
      <FormRow>
        <FormField>
          <ButtonGroup>
            <Button id="submit">Submit</Button>
          </ButtonGroup>
        </FormField>
      </FormRow>
    </Form>
}`,...(T=(F=r.parameters)==null?void 0:F.docs)==null?void 0:T.source},description:{story:"Main Story for the Form component. This must contains the `args`\nand `parameters` properties in this object.",...(g=(b=r.parameters)==null?void 0:b.docs)==null?void 0:g.description}}};var f,R,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => getForms(sizes)
}`,...(y=(R=a.parameters)==null?void 0:R.docs)==null?void 0:y.source}}};const j=["WithControls","FormSpacing"],ee=Object.freeze(Object.defineProperty({__proto__:null,FormSpacing:a,WithControls:r,__namedExportsOrder:j,default:D},Symbol.toStringTag,{value:"Module"}));export{ee as F,r as W,a};
//# sourceMappingURL=Form.stories-2549f363.js.map
