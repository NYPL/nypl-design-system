import{a9 as R,aa as c,j as e,ab as l,ac as i,a6 as n,R as v,e as w,f as r,F as a,G as d,ad as O,ae as p,af as x,n as k,o as M,H as C,ag as G}from"./iframe-D93LbwGv.js";const L={title:"Components/Form Elements/Form",component:c,argTypes:{action:{control:!1},id:{control:!1},method:{control:{type:"radio"},options:["get","post"]},gap:{control:{type:"select"},table:{defaultValue:{summary:"grid.l"}},options:R}}},o={args:{action:"/end/point",className:void 0,id:"form-id",method:"get",gap:"grid.l"},parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?type=design&node-id=10734-2768"},jest:"Form.test.tsx"},render:t=>e.jsxs(c,{...t,id:"form-id",children:[e.jsxs(l,{children:[e.jsx(i,{children:e.jsx(n,{helperText:"Make sure to complete this field.",id:"first-name",isRequired:!0,labelText:"First Name"})}),e.jsx(i,{children:e.jsx(n,{helperText:"Make sure to complete this field.",id:"last-name",isRequired:!0,labelText:"Last Name"})}),e.jsx(i,{children:e.jsx(v,{dateType:"full",dateFormat:"yyyy-MM-dd",helperTextFrom:"From this date.",helperTextTo:"To this date.",helperText:"Select a valid date range.",id:"date-range",invalidText:"Please select a valid date range.",isDateRange:!0,labelText:"Select the date range you want to visit NYPL",minDate:"1/1/2021",maxDate:"1/1/2022",nameFrom:"visit-dates",showLabel:!1})})]}),e.jsx(i,{children:e.jsx(n,{helperText:"Make sure to complete this field.",id:"username",isRequired:!0,labelText:"Username"})}),e.jsx(i,{children:e.jsx(n,{helperText:"Make sure to complete this field.",id:"password",isRequired:!0,labelText:"Password"})}),e.jsxs(l,{children:[e.jsx(i,{children:e.jsx(n,{helperText:"This one is up to you.",id:"phone",labelText:"Phone Field",type:"tel"})}),e.jsx(i,{children:e.jsx(n,{helperText:"This one is up to you.",id:"url",labelText:"URL Field",type:"url"})}),e.jsx(i,{children:e.jsx(n,{helperText:"This one is up to you.",id:"age",labelText:"Age",type:"number"})})]}),e.jsxs(l,{children:[e.jsx(i,{children:e.jsxs(w,{id:"checkbox-group",isFullWidth:!0,labelText:"Checkbox Group",name:"checkbox-example",children:[e.jsx(r,{id:"arts",labelText:e.jsxs(a,{children:[e.jsx("span",{children:"Arts"}),e.jsx(d,{}),e.jsx("span",{children:"4"})]}),value:"arts"}),e.jsx(r,{id:"english",labelText:e.jsxs(a,{children:[e.jsx("span",{children:"English"}),e.jsx(d,{}),e.jsx("span",{children:"23"})]}),value:"English"}),e.jsx(r,{id:"science",labelText:e.jsxs(a,{children:[e.jsx("span",{children:"Science"}),e.jsx(d,{}),e.jsx("span",{children:"10"})]}),value:"Science"}),e.jsx(r,{id:"math",labelText:e.jsxs(a,{children:[e.jsx("span",{children:"Math"}),e.jsx(d,{}),e.jsx("span",{children:"3"})]}),value:"Math"})]})}),e.jsx(i,{children:e.jsxs(O,{id:"radio-group",labelText:"Radio Group",name:"rg1",children:[e.jsx(p,{id:"radio1",labelText:"Radio 1",value:"radio1"}),e.jsx(p,{id:"radio2",labelText:"Radio 2",value:"radio2"}),e.jsx(p,{id:"radio3",labelText:"Radio 3",value:"radio3"}),e.jsx(p,{id:"radio4",labelText:"Radio 4",value:"radio4"})]})}),e.jsx(i,{children:e.jsxs(x,{helperText:"The select field helper text.",id:"select",labelText:"Select Field",name:"select",showLabel:!0,children:[e.jsx("option",{children:"Option 1"}),e.jsx("option",{children:"Option 2"}),e.jsx("option",{children:"Option 3"}),e.jsx("option",{children:"Option 4"}),e.jsx("option",{children:"Option 5"})]})})]}),e.jsx(l,{children:e.jsx(i,{children:e.jsx(k,{children:e.jsx(M,{id:"submit",children:"Submit"})})})})]})},P=t=>{const S=`Size: ${t}`;return e.jsxs("li",{children:[e.jsx(C,{level:"h3",size:"heading6",children:S}),e.jsx(c,{gap:t,id:`form-spacing-${t}`,children:e.jsxs(l,{children:[e.jsx(i,{children:e.jsxs(x,{helperText:"The select field helper text.",id:`select-spacing-${t}-1`,labelText:"Select Field",name:`select-spacing-${t}-1`,showLabel:!0,children:[e.jsx("option",{children:"Option 1"}),e.jsx("option",{children:"Option 2"}),e.jsx("option",{children:"Option 3"}),e.jsx("option",{children:"Option 4"})]})}),e.jsx(i,{children:e.jsxs(x,{helperText:"The select field helper text.",id:`select-spacing-${t}-2`,labelText:"Select Field",name:`select-spacing-${t}-2`,showLabel:!0,children:[e.jsx("option",{children:"Option 1"}),e.jsx("option",{children:"Option 2"}),e.jsx("option",{children:"Option 3"}),e.jsx("option",{children:"Option 4"})]})}),e.jsx(i,{children:e.jsxs(x,{helperText:"The select field helper text.",id:`select-spacing-${t}-3`,labelText:"Select Field",name:`select-spacing-${t}-3`,showLabel:!0,children:[e.jsx("option",{children:"Option 1"}),e.jsx("option",{children:"Option 2"}),e.jsx("option",{children:"Option 3"}),e.jsx("option",{children:"Option 4"})]})})]})}),e.jsx(G,{})]},t)},y=[],h=R;for(const t in h)y.push(P(h[t]));const q=t=>e.jsx("ul",{style:{listStyle:"none"},children:t}),s={render:()=>q(y)};var m,u,F,T,j;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(F=(u=o.parameters)==null?void 0:u.docs)==null?void 0:F.source},description:{story:"Main Story for the Form component. This must contains the `args`\nand `parameters` properties in this object.",...(j=(T=o.parameters)==null?void 0:T.docs)==null?void 0:j.description}}};var b,g,f;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => getForms(sizes)
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const I=["WithControls","FormSpacing"],D=Object.freeze(Object.defineProperty({__proto__:null,FormSpacing:s,WithControls:o,__namedExportsOrder:I,default:L},Symbol.toStringTag,{value:"Module"}));export{D as F,o as W,s as a};
