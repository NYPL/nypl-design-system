import{b1 as z,b2 as t,j as e,V as j,a,H as r}from"./iframe-CFLVJZOZ.js";const I={title:"Components/Typography & Styles/StyledList",component:t,argTypes:{children:{table:{disable:!0}},className:{control:!1},id:{control:!1},listItems:{control:!1},style:{control:!1},textSize:{options:z,table:{defaultValue:{summary:"default"}}}}},L=['FULL TITLE: "...and for the City of New York"','ALTERNATIVE TITLES: "...Society of New York delivered at..." + 1 more','SUBJECTS: "...City of New York, in the" + 2 more'],o=[e.jsxs(e.Fragment,{children:["FULL TITLE:"," ",e.jsxs("i",{children:['"...and for the ',e.jsx("b",{children:"City of New York"}),'"']})]}),e.jsxs(e.Fragment,{children:["ALTERNATIVE TITLES:"," ",e.jsxs("i",{children:['"...Society of ',e.jsx("b",{children:"New York"}),' delivered at..."']})," ","+ 1 more"]}),e.jsxs(e.Fragment,{children:["SUBJECTS:"," ",e.jsxs("i",{children:['"...',e.jsx("b",{children:"City of New York"}),', in the"']})," ","+ 2 more"]})],s={args:{className:void 0,id:"nypl-styledlist",listItems:L,style:"capped",textSize:"default"},render:u=>e.jsx(t,{...u}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?type=design&node-id=71684-76060&t=XbyIY1tCtH4Qkkfo-4"},jest:["StyledList.test.tsx"]}},i={render:()=>e.jsxs(j,{align:"stretch",spacing:"l",children:[e.jsxs(a,{children:[e.jsx(r,{level:"h3",size:"heading6",children:"Default / Body 1"}),e.jsx(t,{textSize:"body1",listItems:o})]}),e.jsxs(a,{children:[e.jsx(r,{level:"h3",size:"heading6",children:"Body 2"}),e.jsx(t,{textSize:"body2",listItems:o})]}),e.jsxs(a,{children:[e.jsx(r,{level:"h3",size:"heading6",children:"Caption"}),e.jsx(t,{textSize:"caption",listItems:o})]})]})},n={render:()=>e.jsxs(j,{align:"stretch",spacing:"l",children:[e.jsxs(a,{children:[e.jsx(r,{level:"h3",size:"heading6",children:"Tag"}),e.jsx(t,{textSize:"tag",listItems:o})]}),e.jsxs(a,{children:[e.jsx(r,{level:"h3",size:"heading6",children:"Mini"}),e.jsx(t,{textSize:"mini",listItems:o})]})]})};var l,d,c,m,h;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.source},description:{story:"Main Story for the StyledList component. This must contains the `args`\nand `parameters` properties in this object.",...(h=(m=s.parameters)==null?void 0:m.docs)==null?void 0:h.description}}};var p,x,g;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(x=i.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var S,y,f;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(f=(y=n.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const b=["WithControls","FontSizes","DeprecatedFontSizes"],B=Object.freeze(Object.defineProperty({__proto__:null,DeprecatedFontSizes:n,FontSizes:i,WithControls:s,__namedExportsOrder:b,default:I},Symbol.toStringTag,{value:"Module"}));export{n as D,i as F,B as S,s as W};
