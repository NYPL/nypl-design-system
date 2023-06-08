import{j as e,a}from"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import{w as H}from"./index-6148c31a.js";import{T as l,a as v,b as s,c as N,d as r}from"./Tabs-008682e2.js";const h=[{label:"Tom Nook",content:a("p",{children:["Tom Nook, ",e("b",{children:"known in Japan as Tanukichi"}),", is a fictional character in the Animal Crossing series who operates the village store."]})},{label:"Isabelle",content:"Isabelle, known as Shizue in Japan, is a fictional character from the Animal Crossing series of video games. She is a kindly Shih Tzu that debuted in the 2012 release Animal Crossing: New Leaf, where she serves as the secretary to the player character."},{label:"K.K. Slider",content:"<p>Totakeke, more commonly known as <b>K.K. Slider or K.K.</b>, is a fictional character within the Animal Crossing franchise. One of the franchise's most popular characters, he debuted in the title Animal Crossing, and has appeared in every installment since.</p>"},{label:"Mr. Resetti",content:"<strong>Mr. Resetti</strong>, full name Sonny Resetti, is a fictional character from the Animal Crossing series of video games by Nintendo. His first appearance was in the Nintendo 64 game Dōbutsu no Mori, released in Europe and North America on the GameCube as Animal Crossing."},{label:"Zucker",content:"<strong>Zucker</strong> is a lazy octopus villager who first appeared in New Leaf. His Japanese name and general appearance refers to the Japanese snack takoyaki, which is a fried ball of dough commonly filled with minced octopus. His catchphrase is a reference to how he is an underwater animal. He has the same initial phrase as Bertha. He has the nature hobby."}],K={title:"Components/Overlays & Switchers/Tabs",component:l,decorators:[H],argTypes:{children:{table:{disable:!0}},defaultIndex:{table:{defaultValue:{summary:0}}},id:{control:!1},onChange:{control:!1},tabsData:{control:!1},useHash:{table:{defaultValue:{summary:!1}}}}},n={args:{tabsData:h,defaultIndex:0,id:"tabs-id",onChange:void 0,useHash:!1},parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=36835%3A26464"},jest:["Tabs.test.tsx"]}},D=A=>{window.alert(`Tab index selected was ${A}`)},i={render:()=>e(l,{tabsData:h,onChange:D})},t={render:()=>e(l,{tabsData:h,useHash:!0})},o={render:()=>a(l,{children:[a(v,{children:[e(s,{children:"Tom Nook"}),e(s,{children:"Isabelle"}),e(s,{children:"K.K. Slider"}),e(s,{children:"Mr. Resetti"}),e(s,{children:"Zucker"})]}),a(N,{children:[e(r,{children:a("p",{children:["Tom Nook, ",e("b",{children:"known in Japan as Tanukichi"}),", is a fictional character in the Animal Crossing series who operates the village store."]})}),e(r,{children:"Isabelle, known as Shizue in Japan, is a fictional character from the Animal Crossing series of video games. She is a kindly Shih Tzu that debuted in the 2012 release Animal Crossing: New Leaf, where she serves as the secretary to the player character."}),e(r,{children:a("p",{children:["Totakeke, more commonly known as ",e("b",{children:"K.K. Slider or K.K."}),", is a fictional character within the Animal Crossing franchise. One of the franchise's most popular characters, he debuted in the title Animal Crossing, and has appeared in every installment since."]})}),a(r,{children:[e("strong",{children:"Mr. Resetti"}),", full name Sonny Resetti, is a fictional character from the Animal Crossing series of video games by Nintendo. His first appearance was in the Nintendo 64 game Dōbutsu no Mori, released in Europe and North America on the GameCube as Animal Crossing."]}),a(r,{children:[e("strong",{children:"Zucker"})," is a lazy octopus villager who first appeared in New Leaf. His Japanese name and general appearance refers to the Japanese snack takoyaki, which is a fried ball of dough commonly filled with minced octopus. His catchphrase is a reference to how he is an underwater animal. He has the same initial phrase as Bertha. He has the nature hobby."]})]})]})};var c,d,m,p,b;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    tabsData: animalCrossingData,
    defaultIndex: 0,
    id: "tabs-id",
    onChange: undefined,
    useHash: false
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=36835%3A26464"
    },
    jest: ["Tabs.test.tsx"]
  }
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source},description:{story:"Main Story for the Tabs component. This must contains the `args`\nand `parameters` properties in this object.",...(b=(p=n.parameters)==null?void 0:p.docs)==null?void 0:b.description}}};var u,f,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Tabs tabsData={animalCrossingData} onChange={onChange} />
}`,...(g=(f=i.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var T,w,C;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Tabs tabsData={animalCrossingData} useHash={true} />
}`,...(C=(w=t.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var y,k,S;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Tabs>
      <TabList>
        <Tab>Tom Nook</Tab>
        <Tab>Isabelle</Tab>
        <Tab>K.K. Slider</Tab>
        <Tab>Mr. Resetti</Tab>
        <Tab>Zucker</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <p>
            Tom Nook, <b>known in Japan as Tanukichi</b>, is a fictional
            character in the Animal Crossing series who operates the village
            store.
          </p>
        </TabPanel>
        <TabPanel>
          Isabelle, known as Shizue in Japan, is a fictional character from the
          Animal Crossing series of video games. She is a kindly Shih Tzu that
          debuted in the 2012 release Animal Crossing: New Leaf, where she
          serves as the secretary to the player character.
        </TabPanel>
        <TabPanel>
          <p>
            Totakeke, more commonly known as <b>K.K. Slider or K.K.</b>, is a
            fictional character within the Animal Crossing franchise. One of the
            franchise's most popular characters, he debuted in the title Animal
            Crossing, and has appeared in every installment since.
          </p>
        </TabPanel>
        <TabPanel>
          <strong>Mr. Resetti</strong>, full name Sonny Resetti, is a fictional
          character from the Animal Crossing series of video games by Nintendo.
          His first appearance was in the Nintendo 64 game Dōbutsu no Mori,
          released in Europe and North America on the GameCube as Animal
          Crossing.
        </TabPanel>
        <TabPanel>
          <strong>Zucker</strong> is a lazy octopus villager who first appeared
          in New Leaf. His Japanese name and general appearance refers to the
          Japanese snack takoyaki, which is a fried ball of dough commonly
          filled with minced octopus. His catchphrase is a reference to how he
          is an underwater animal. He has the same initial phrase as Bertha. He
          has the nature hobby.
        </TabPanel>
      </TabPanels>
    </Tabs>
}`,...(S=(k=o.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};const M=["WithControls","CallbackEventFunction","URLHashOption","ChildrenComponents"],L=Object.freeze(Object.defineProperty({__proto__:null,CallbackEventFunction:i,ChildrenComponents:o,URLHashOption:t,WithControls:n,__namedExportsOrder:M,default:K},Symbol.toStringTag,{value:"Module"}));export{i as C,L as T,t as U,n as W,o as a};
//# sourceMappingURL=Tabs.stories-b8303606.js.map
