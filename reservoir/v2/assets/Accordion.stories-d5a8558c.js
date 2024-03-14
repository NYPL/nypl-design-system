import{a,j as e}from"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import{w as E}from"./index-6148c31a.js";import{A as o}from"./Accordion-ddc955e7.js";import{a as l,b as d,C as h}from"./Card-4cbdbbf1.js";import{C as t}from"./Checkbox-6e7b1e16.js";import{C as O}from"./CheckboxGroup-6c26da72.js";import{H as g}from"./Heading-7eebc756.js";import{V as K}from"./chakra-ui-layout.esm-e0dbb94e.js";const p=[{accordionType:"default",label:"Tom Nook",panel:a(h,{imageProps:{alt:"Alt text",aspectRatio:"twoByOne",src:"https://play.nintendo.com/images/AC_Tom_FRYtwIN.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png"},isCentered:!0,layout:"row",children:[e(l,{level:"h4",id:"heading1",children:"Tom Nook"}),a(d,{children:["Tom Nook, ",e("b",{children:"known in Japan as Tanukichi"}),", is a fictional character in the Animal Crossing series who operates the village store."]})]})}],j=[{accordionType:"default",label:"Tom Nook",panel:a(h,{children:[e(l,{level:"h4",id:"heading1",children:"Tom Nook"}),a(d,{children:[e("p",{children:"Tom Nook (たぬきち Tanukichi?, a Tanuki) is a character who plays the most important role in all of the games. He is termed a raccoon in the western versions of the game but a tanuki in the Japanese version."}),e("p",{children:"In all games leading to New Leaf, he is the manager of the town shop. After the final expansion, Nookington's, he will employ his 'nephews' Timmy and Tommy, who work on the second floor in every Animal Crossing series game except New Leaf and New Horizons."}),e("p",{children:"In New Leaf, Nook has taken his interest in real estate to a whole new level, opening Nook's Homes, whilst Timmy and Tommy run the town shop. In New Horizons, Nook acts as the head of Nook Incorporated. He acts as the leader on the island, acting as task giver and island upgrader. In Wild World, he will give out his picture if the player gives him the safe from the Golden Axe Trading Event."})]})]})}],_=[...p,{accordionType:"warning",label:"Isabelle",panel:a(h,{imageProps:{alt:"Alt text",aspectRatio:"twoByOne",src:"https://play.nintendo.com/images/AC_Isabelle_7XU6aGu.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png"},isCentered:!0,layout:"row",children:[e(l,{level:"h4",id:"heading1-isabelle",children:"Isabelle"}),e(d,{children:"Isabelle, known as Shizue in Japan, is a fictional character from the Animal Crossing series of video games. She is a kindly Shih Tzu that debuted in the 2012 release Animal Crossing: New Leaf, where she serves as the secretary to the player character."})]})},{accordionType:"error",label:"K.K. Slider",panel:a(h,{imageProps:{alt:"Alt text",aspectRatio:"twoByOne",src:"https://play.nintendo.com/images/AC_KK_jh4yj5t.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png"},isCentered:!0,layout:"row",children:[e(l,{level:"h4",id:"heading1-kkslider",children:"K.K. Slider"}),e(d,{children:a("p",{children:["Totakeke, more commonly known as ",e("b",{children:"K.K. Slider or K.K."}),", is a fictional character within the Animal Crossing franchise. One of the franchise's most popular characters, he debuted in the title Animal Crossing, and has appeared in every installment since."]})})]})}],z={title:"Components/Overlays & Switchers/Accordion",component:o,decorators:[E],argTypes:{accordionData:{options:["defaultData","longTextData","faqData"],mapping:{defaultData:p,longTextData:j,faqData:_}},id:{control:!1},isDefaultOpen:{table:{defaultValue:{summary:!1}}},isAlwaysRendered:{table:{defaultValue:{summary:!1}}},panelMaxHeight:{control:{type:"text"}}}},n={args:{accordionData:p,id:"accordion-id",isDefaultOpen:!1,isAlwaysRendered:!1,panelMaxHeight:void 0},parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=10734%3A2520"},jest:"Accordion.test.tsx"}},r={render:()=>e(o,{accordionData:_}),name:"FAQ Content"},i={render:()=>e(o,{accordionData:p,panelMaxHeight:"100px"}),name:"panelMaxHeight Example"},s={render:()=>e(o,{accordionData:j,panelMaxHeight:"100px"}),name:"panelMaxHeight Example with Long Text"},L=m=>{console.log(m)},f=m=>[{accordionType:"default",label:"Subjects",panel:a(O,{id:"accordion-checkbox-example",labelText:"Subjects",name:`accordionExample${m}`,showLabel:!1,defaultValue:["music"],onChange:L,children:[e(t,{id:"1",value:"art",labelText:"Art"}),e(t,{id:"2",value:"chemistry",labelText:"Chemistry"}),e(t,{id:"3",value:"history",labelText:"History"}),e(t,{id:"4",value:"music",labelText:"Music"}),e(t,{id:"5",value:"science",labelText:"Science"})]})}],c={render:()=>a(K,{align:"stretch",spacing:"s",children:[e(g,{level:"h3",size:"heading5",children:"Accordion panel is removed when closed"}),e(o,{accordionData:f(0)}),e(g,{level:"h3",size:"heading5",children:"Accordion panel is always rendered"}),e(o,{accordionData:f(1),isAlwaysRendered:!0})]}),name:"isAlwaysRendered"};var u,w,x,y,A;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    accordionData,
    id: "accordion-id",
    isDefaultOpen: false,
    isAlwaysRendered: false,
    panelMaxHeight: undefined
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=10734%3A2520"
    },
    jest: "Accordion.test.tsx"
  }
}`,...(x=(w=n.parameters)==null?void 0:w.docs)==null?void 0:x.source},description:{story:"Main Story for the Accordion component. This must contains the `args`\nand `parameters` properties in this object.",...(A=(y=n.parameters)==null?void 0:y.docs)==null?void 0:A.description}}};var b,T,C;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Accordion accordionData={faqContentData} />,
  name: "FAQ Content"
}`,...(C=(T=r.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var k,v,D;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Accordion accordionData={accordionData} panelMaxHeight="100px" />,
  name: "panelMaxHeight Example"
}`,...(D=(v=i.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var H,S,M;s.parameters={...s.parameters,docs:{...(H=s.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <Accordion accordionData={accordionLongTextData} panelMaxHeight="100px" />,
  name: "panelMaxHeight Example with Long Text"
}`,...(M=(S=s.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};var N,I,R;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <VStack align="stretch" spacing="s">
      <Heading level="h3" size="heading5">
        Accordion panel is removed when closed
      </Heading>
      <Accordion accordionData={getAccordionData(0)} />
      <Heading level="h3" size="heading5">
        Accordion panel is always rendered
      </Heading>
      <Accordion accordionData={getAccordionData(1)} isAlwaysRendered />
    </VStack>,
  name: "isAlwaysRendered"
}`,...(R=(I=c.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};const P=["WithControls","FaqContent","PanelMaxHeightExample","PanelMaxHeightExample2","IsAlwaysRendered"],U=Object.freeze(Object.defineProperty({__proto__:null,FaqContent:r,IsAlwaysRendered:c,PanelMaxHeightExample:i,PanelMaxHeightExample2:s,WithControls:n,__namedExportsOrder:P,default:z},Symbol.toStringTag,{value:"Module"}));export{U as A,r as F,c as I,i as P,n as W,s as a};
//# sourceMappingURL=Accordion.stories-d5a8558c.js.map
