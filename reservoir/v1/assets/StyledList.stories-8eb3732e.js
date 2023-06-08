import{j as e,a as t,F as l}from"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import{w as u}from"./index-6148c31a.js";import{H as r}from"./Heading-2ec2ea62.js";import{S as s}from"./StyledList-ad1bf317.js";import{B as o,V as x}from"./chakra-ui-layout.esm-b2fa9d31.js";const I={title:"Components/Typography & Styles/StyledList",component:s,decorators:[u],argTypes:{children:{table:{disable:!0}},className:{control:!1},id:{control:!1},listItems:{control:!1},style:{control:!1},textSize:{table:{defaultValue:{summary:"default"}}}}},L=['FULL TITLE: "...and for the City of New York"','ALTERNATIVE TITLES: "...Society of New York delivered at..." + 1 more','SUBJECTS: "...City of New York, in the" + 2 more'],a=[t(l,{children:["FULL TITLE:"," ",t("i",{children:['"...and for the ',e("b",{children:"City of New York"}),'"']})]}),t(l,{children:["ALTERNATIVE TITLES:"," ",t("i",{children:['"...Society of ',e("b",{children:"New York"}),' delivered at..."']})," ","+ 1 more"]}),t(l,{children:["SUBJECTS:"," ",t("i",{children:['"...',e("b",{children:"City of New York"}),', in the"']})," ","+ 2 more"]})],i={args:{className:void 0,id:"nypl-styledlist",listItems:L,style:"capped",textSize:"default"},render:g=>e(s,{...g}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?type=design&node-id=71684-76060&t=XbyIY1tCtH4Qkkfo-4"},jest:["StyledList.test.tsx"]}},n={render:()=>t(x,{align:"stretch",spacing:"l",children:[t(o,{children:[e(r,{level:"three",children:"Caption"}),e(s,{textSize:"caption",listItems:a})]}),t(o,{children:[e(r,{level:"three",children:"Default"}),e(s,{textSize:"default",listItems:a})]}),t(o,{children:[e(r,{level:"three",children:"Mini"}),e(s,{textSize:"mini",listItems:a})]}),t(o,{children:[e(r,{level:"three",children:"Tag"}),e(s,{textSize:"tag",listItems:a})]})]})};var d,c,m,p,S;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(m=(c=i.parameters)==null?void 0:c.docs)==null?void 0:m.source},description:{story:"Main Story for the StyledList component. This must contains the `args`\nand `parameters` properties in this object.",...(S=(p=i.parameters)==null?void 0:p.docs)==null?void 0:S.description}}};var h,y,f;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <VStack align="stretch" spacing="l">
      <Box>
        <Heading level="three">Caption</Heading>
        <StyledList textSize="caption" listItems={listItems} />
      </Box>
      <Box>
        <Heading level="three">Default</Heading>
        <StyledList textSize="default" listItems={listItems} />
      </Box>
      <Box>
        <Heading level="three">Mini</Heading>
        <StyledList textSize="mini" listItems={listItems} />
      </Box>
      <Box>
        <Heading level="three">Tag</Heading>
        <StyledList textSize="tag" listItems={listItems} />
      </Box>
    </VStack>
}`,...(f=(y=n.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const T=["WithControls","FontSize"],k=Object.freeze(Object.defineProperty({__proto__:null,FontSize:n,WithControls:i,__namedExportsOrder:T,default:I},Symbol.toStringTag,{value:"Module"}));export{n as F,k as S,i as W};
//# sourceMappingURL=StyledList.stories-8eb3732e.js.map
