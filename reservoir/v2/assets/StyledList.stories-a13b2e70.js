import{j as e,a as t,F as d}from"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import{w as T}from"./index-6148c31a.js";import{H as a}from"./Heading-7eebc756.js";import{S as i,t as b}from"./StyledList-8ff9492b.js";import{B as o,V as I}from"./chakra-ui-layout.esm-e0dbb94e.js";const B={title:"Components/Typography & Styles/StyledList",component:i,decorators:[T],argTypes:{children:{table:{disable:!0}},className:{control:!1},id:{control:!1},listItems:{control:!1},style:{control:!1},textSize:{options:b,table:{defaultValue:{summary:"default"}}}}},H=['FULL TITLE: "...and for the City of New York"','ALTERNATIVE TITLES: "...Society of New York delivered at..." + 1 more','SUBJECTS: "...City of New York, in the" + 2 more'],l=[t(d,{children:["FULL TITLE:"," ",t("i",{children:['"...and for the ',e("b",{children:"City of New York"}),'"']})]}),t(d,{children:["ALTERNATIVE TITLES:"," ",t("i",{children:['"...Society of ',e("b",{children:"New York"}),' delivered at..."']})," ","+ 1 more"]}),t(d,{children:["SUBJECTS:"," ",t("i",{children:['"...',e("b",{children:"City of New York"}),', in the"']})," ","+ 2 more"]})],n={args:{className:void 0,id:"nypl-styledlist",listItems:H,style:"capped",textSize:"default"},render:L=>e(i,{...L}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?type=design&node-id=71684-76060&t=XbyIY1tCtH4Qkkfo-4"},jest:["StyledList.test.tsx"]}},s={render:()=>t(I,{align:"stretch",spacing:"l",children:[t(o,{children:[e(a,{level:"h3",size:"heading6",children:"Default / Body 1"}),e(i,{textSize:"body1",listItems:l})]}),t(o,{children:[e(a,{level:"h3",size:"heading6",children:"Body 2"}),e(i,{textSize:"body2",listItems:l})]}),t(o,{children:[e(a,{level:"h3",size:"heading6",children:"Caption"}),e(i,{textSize:"caption",listItems:l})]})]})},r={render:()=>t(I,{align:"stretch",spacing:"l",children:[t(o,{children:[e(a,{level:"h3",size:"heading6",children:"Tag"}),e(i,{textSize:"tag",listItems:l})]}),t(o,{children:[e(a,{level:"h3",size:"heading6",children:"Mini"}),e(i,{textSize:"mini",listItems:l})]})]})};var c,m,h,p,g;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    className: undefined,
    id: "nypl-styledlist",
    listItems: itemGroups,
    style: "capped",
    textSize: "default"
  },
  render: args => <StyledList {...args} />,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?type=design&node-id=71684-76060&t=XbyIY1tCtH4Qkkfo-4"
    },
    jest: ["StyledList.test.tsx"]
  }
}`,...(h=(m=n.parameters)==null?void 0:m.docs)==null?void 0:h.source},description:{story:"Main Story for the StyledList component. This must contains the `args`\nand `parameters` properties in this object.",...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.description}}};var S,y,f;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <VStack align="stretch" spacing="l">
      <Box>
        <Heading level="h3" size="heading6">
          Default / Body 1
        </Heading>
        <StyledList textSize="body1" listItems={listItems} />
      </Box>
      <Box>
        <Heading level="h3" size="heading6">
          Body 2
        </Heading>
        <StyledList textSize="body2" listItems={listItems} />
      </Box>
      <Box>
        <Heading level="h3" size="heading6">
          Caption
        </Heading>
        <StyledList textSize="caption" listItems={listItems} />
      </Box>
    </VStack>
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var x,z,u;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <VStack align="stretch" spacing="l">
      <Box>
        <Heading level="h3" size="heading6">
          Tag
        </Heading>
        <StyledList textSize="tag" listItems={listItems} />
      </Box>
      <Box>
        <Heading level="h3" size="heading6">
          Mini
        </Heading>
        <StyledList textSize="mini" listItems={listItems} />
      </Box>
    </VStack>
}`,...(u=(z=r.parameters)==null?void 0:z.docs)==null?void 0:u.source}}};const k=["WithControls","FontSizes","DeprecatedFontSizes"],F=Object.freeze(Object.defineProperty({__proto__:null,DeprecatedFontSizes:r,FontSizes:s,WithControls:n,__namedExportsOrder:k,default:B},Symbol.toStringTag,{value:"Module"}));export{r as D,s as F,F as S,n as W};
//# sourceMappingURL=StyledList.stories-a13b2e70.js.map
