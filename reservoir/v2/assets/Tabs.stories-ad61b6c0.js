import{j as e,a}from"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import{w as K}from"./index-6148c31a.js";import{T as h,a as x,b as s,c as M,d as r}from"./Tabs-1fbcb425.js";const c=[{label:"Tom Nook",content:a("p",{children:["Tom Nook, ",e("b",{children:"known in Japan as Tanukichi"}),", is a fictional character in the Animal Crossing series who operates the village store."]})},{label:"Isabelle",content:"Isabelle, known as Shizue in Japan, is a fictional character from the Animal Crossing series of video games. She is a kindly Shih Tzu that debuted in the 2012 release Animal Crossing: New Leaf, where she serves as the secretary to the player character."},{label:"K.K. Slider",content:"<p>Totakeke, more commonly known as <b>K.K. Slider or K.K.</b>, is a fictional character within the Animal Crossing franchise. One of the franchise's most popular characters, he debuted in the title Animal Crossing, and has appeared in every installment since.</p>"},{label:"Mr. Resetti",content:"<strong>Mr. Resetti</strong>, full name Sonny Resetti, is a fictional character from the Animal Crossing series of video games by Nintendo. His first appearance was in the Nintendo 64 game Dōbutsu no Mori, released in Europe and North America on the GameCube as Animal Crossing."},{label:"Zucker",content:"<strong>Zucker</strong> is a lazy octopus villager who first appeared in New Leaf. His Japanese name and general appearance refers to the Japanese snack takoyaki, which is a fried ball of dough commonly filled with minced octopus. His catchphrase is a reference to how he is an underwater animal. He has the same initial phrase as Bertha. He has the nature hobby."}],P=[{label:"Filbert",content:"<strong>Filbert</strong> is a lazy squirrel villager in the Animal Crossing series. His name, like most of his species, comes from a type of nut. In this case, his name comes from an edible type of hazelnut. He has made an appearance in every Animal Crossing game to date. He is the only lazy squirrel villager in the series so far. His initial catchphrase could be based on the fact that squirrels usually appear to have buck teeth. He has the nature hobby."},{label:"Timmy and Tommy",content:"<strong>Timothy</strong> (better known as Timmy) and <strong>Thomas</strong> (more often known as Tommy) are the twin apprentices of Tom Nook, the tanuki who runs the town's store. Their last names are said to be Nook."}],J={title:"Components/Overlays & Switchers/Tabs",component:h,decorators:[K],argTypes:{children:{table:{disable:!0}},defaultIndex:{table:{defaultValue:{summary:0}}},id:{control:!1},onChange:{control:!1},tabsData:{control:!1},useHash:{table:{defaultValue:{summary:!1}}}}},n={args:{tabsData:c,defaultIndex:0,id:"tabs-id",onChange:void 0,useHash:!1},parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=36835%3A26464"},jest:["Tabs.test.tsx"]}},z=D=>{window.alert(`Tab index selected was ${D}`)},t={render:()=>e(h,{tabsData:[...c,...P]})},i={render:()=>e(h,{tabsData:c,onChange:z})},o={render:()=>e(h,{tabsData:c,useHash:!0})},l={render:()=>a(h,{children:[a(x,{children:[e(s,{children:"Tom Nook"}),e(s,{children:"Isabelle"}),e(s,{children:"K.K. Slider"}),e(s,{children:"Mr. Resetti"}),e(s,{children:"Zucker"})]}),a(M,{children:[e(r,{children:a("p",{children:["Tom Nook, ",e("b",{children:"known in Japan as Tanukichi"}),", is a fictional character in the Animal Crossing series who operates the village store."]})}),e(r,{children:"Isabelle, known as Shizue in Japan, is a fictional character from the Animal Crossing series of video games. She is a kindly Shih Tzu that debuted in the 2012 release Animal Crossing: New Leaf, where she serves as the secretary to the player character."}),e(r,{children:a("p",{children:["Totakeke, more commonly known as ",e("b",{children:"K.K. Slider or K.K."}),", is a fictional character within the Animal Crossing franchise. One of the franchise's most popular characters, he debuted in the title Animal Crossing, and has appeared in every installment since."]})}),a(r,{children:[e("strong",{children:"Mr. Resetti"}),", full name Sonny Resetti, is a fictional character from the Animal Crossing series of video games by Nintendo. His first appearance was in the Nintendo 64 game Dōbutsu no Mori, released in Europe and North America on the GameCube as Animal Crossing."]}),a(r,{children:[e("strong",{children:"Zucker"})," is a lazy octopus villager who first appeared in New Leaf. His Japanese name and general appearance refers to the Japanese snack takoyaki, which is a fried ball of dough commonly filled with minced octopus. His catchphrase is a reference to how he is an underwater animal. He has the same initial phrase as Bertha. He has the nature hobby."]})]})]})};var d,m,p,b,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source},description:{story:"Main Story for the Tabs component. This must contains the `args`\nand `parameters` properties in this object.",...(u=(b=n.parameters)==null?void 0:b.docs)==null?void 0:u.description}}};var f,g,T;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Tabs tabsData={[...animalCrossingData, ...extraACData]} />
}`,...(T=(g=t.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var w,y,k;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Tabs tabsData={animalCrossingData} onChange={onChange} />
}`,...(k=(y=i.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var C,A,S;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Tabs tabsData={animalCrossingData} useHash={true} />
}`,...(S=(A=o.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var H,v,N;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(N=(v=l.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};const I=["WithControls","ExtendedTabSetExample","CallbackEventFunction","URLHashOption","ChildrenComponents"],O=Object.freeze(Object.defineProperty({__proto__:null,CallbackEventFunction:i,ChildrenComponents:l,ExtendedTabSetExample:t,URLHashOption:o,WithControls:n,__namedExportsOrder:I,default:J},Symbol.toStringTag,{value:"Module"}));export{i as C,t as E,O as T,o as U,n as W,l as a};
//# sourceMappingURL=Tabs.stories-ad61b6c0.js.map
