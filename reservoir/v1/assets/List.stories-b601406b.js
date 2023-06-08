import{j as e,a as l}from"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import{w as T}from"./index-6148c31a.js";import{L}from"./Link-0ed02cf7.js";import{L as d,l as D}from"./List-b2e63895.js";const I={title:"Components/Typography & Styles/List",component:d,decorators:[T],argTypes:{children:{table:{disable:!0}},className:{control:!1},id:{control:!1},inline:{table:{defaultValue:{summary:!1}}},listItems:{control:!1},noStyling:{table:{defaultValue:{summary:!1}}},type:{control:{type:"radio"},options:D,table:{defaultValue:{summary:"ul"}}}}},C=[{term:"Mahi-mahi",description:'The mahi-mahi is an ocean fish known for its wide, somewhat-cute face. It can reach over six feet long. It is known by different names including "dolphinfish," even though it has no relation to dolphins. They live in only in warm, tropical waters...which perhaps explains the relaxed, happy look on their faces.'},{term:"Golden trout",description:l("p",{children:["The golden trout is a ",e("b",{children:"beautifully"})," colored fish that can only live in very clean waters. They are difficult to come across since they are found only in high mountain streams. As a side note, I find it much easier to appreciate fish that aren't such prima donnas about everything."]})},{term:"Rainbowfish",description:'The rainbowfish is a tropical fish known for its metallic colors and beautiful fins. There are over 50 different species, each unique and pleasing color. I must say, it does make me wish for feathers of a more exciting hue than "underbaked brownie."'},{term:"Suckerfish",description:l("p",{children:["The"," ",e(L,{href:"https://animalcrossing.fandom.com/wiki/Suckerfish",children:"suckerfish"})," ","is a curious fish that likes to attach itself with its sucker mouth to larger marine animals. The benefit to the suckerfish is that it gets to eat smaller parasites and dead skin off the host's body. Amusingly, some people have used suckerfish on cords to catch large turtles with the fish's own suction! I imagine this practice is the cause of some awkward conversations between fish and turtle, eh wot?"]})}],F=["Art","Bushes","Clothing","DIY Recipes","Flowers","Fossils","Fruits","Furniture","Materials","NPC","Songs","Tools","Villagers"],M=[{term:"Balrogs",description:`Demonic creatures of fire and shadow, Balrogs were fallen Maiar, loyal to the first Dark Lord, Morgoth. They participated in the wars of the First Age of Middle-earth but were mostly destroyed during the War of Wrath which ended the Age. By the Third Age, the only remaining Balrog was "Durin's Bane," the Balrog of Moria, killed by Gandalf.`},{term:"Dwarves",description:"The race of Dwarves preferred to live in mountains and caves, settling in places such as Erebor (the Lonely Mountain), the Iron Hills, the Blue Mountains, and Moria (Khazad-dûm) in the Misty Mountains. Aulë the Smith created Dwarves; he also invented the Dwarven language, known as Khuzdul. Dwarves mined and worked precious metals throughout the mountains of Middle-earth. The seven different groups of Dwarf-folk originated in the locations where the Seven Fathers of the Dwarves first awoke before the First Age."},{term:"Elves",description:`The Elves, or Firstborn, were the first of Eru's Children to awaken. Born under the stars before the ascension of the Moon and the Sun, they retain a special love for light and an inner spirit endowed with unique gifts. They call themselves the Quendi, or "Speakers", for they were the first to utter words; and, even now, no race understands language and song like the Firstborn. Fair and fine featured, brilliant and proud, immortal and strong, tall and agile, they are the most blessed of the Free Peoples. They can see as well under moon or starlight as a man at the height of day. They cannot become sick or scarred, but if an Elf should die, from violence or losing the will to live from grief, their spirit goes to the halls of Mandos, and as they are bound to Arda and cannot leave until the world is broken and remade. Elven skill and agility is legendary: for instance, walking atop freshly fallen snow without leaving a trace of their passing. On a clear day they can see ten miles with perfect clarity and detail up to 100 miles. These gifts come at great cost, though: they are strongly bound to Fate (see Mandos) and hated by Morgoth. No other race has been blessed and cursed more than the Quendi.`},{term:"Ents",description:"Ents were an ancient race of tree-like creatures, having become like the trees that they shepherd. They were created by Yavanna and given life by Ilúvatar. By the Third Age, they were a dwindling race, having long ago lost their mates, the Entwives."},{term:"Hobbits",description:'Hobbits are a race of Middle-earth, also known as "halflings" on account of their short stature, roughly half the size of men. They are characterized by curly hair on their heads and leathery feet that have furry insteps, for which they did not wear shoes. Many hobbits live in the Shire as well as Bree, and they once lived in the vales of the Anduin. They are fond of an unadventurous life of farming, eating, and socializing. There were three types of Hobbits: The Harfoots were the most numerous. The Stoors had an affinity for water, boats and swimming; the Fallohides were an adventurous people. The origin of hobbits is unclear, but of all the races they have the closest affinity to men, and in the Prologue to The Lord of the Rings Tolkien calls them relatives of men.'}],a={args:{className:void 0,id:"nypl-list",inline:!1,listItems:void 0,noStyling:!1,title:"Middle-Earth Peoples",type:"ul"},render:r=>e(d,{...r,children:r.type!=="dl"?F.map((t,n)=>e("li",{children:t},n)):M.map((t,n)=>[e("dt",{children:t.term},`dt_${n}`),e("dd",{children:t.description},`dd_${n}`)])}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=16115%3A304"},jest:["List.test.tsx"]}},i={args:{id:"nypl-list2",noStyling:!1,title:"Middle-Earth Peoples"},argTypes:{inline:{control:!1},noStyling:{control:!1},type:{control:!1}},render:r=>e(d,{...r,type:"dl",children:M.map((t,n)=>[e("dt",{children:t.term},`dt_${n}`),e("dd",{children:t.description},`dd_${n}`)])}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=10734%3A5178"}}},s={args:{noStyling:!1,title:"Details"},argTypes:{inline:{control:!1},noStyling:{control:!1},type:{table:{disable:!0}}},render:r=>l(d,{...r,type:"dl",children:[e("dt",{children:"Authors"}),l("dd",{children:[e("a",{href:"#",children:"Chirwa, Ephraim Wadonda, author"}),e("br",{}),e("a",{href:"#",children:"Dorward, Andrew, author"})]}),e("dt",{children:"Subjects"}),l("dd",{children:[e("a",{href:"#",children:"Ackerbau"}),e("br",{}),e("a",{href:"#",children:"Ackerbau."}),e("br",{}),e("a",{href:"#",children:"Africa."}),e("br",{}),e("a",{href:"#",children:"Afrika."}),e("br",{}),e("a",{href:"#",children:"Agrarsubvention"}),e("br",{}),e("a",{href:"#",children:"Agrarsubvention."}),e("br",{}),e("a",{href:"#",children:"Agricultura -- Subvencions -- Malawi."}),e("br",{}),e("a",{href:"#",children:"Agricultural economics New."}),e("br",{}),e("a",{href:"#",children:"Agricultural subsidies"}),e("br",{}),e("a",{href:"#",children:"Agricultural subsidies -- Developing countries."}),e("br",{}),e("a",{href:"#",children:"Agricultural subsidies -- Malawi."}),e("br",{}),e("a",{href:"#",children:"Agricultural subsidies."}),e("br",{}),e("a",{href:"#",children:"BUSINESS & ECONOMICS -- Industries"}),e("br",{})]})]}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=10734%3A5178"}}},o={args:{listItems:C,noStyling:!1,title:"Animal Crossing Fish"},argTypes:{inline:{control:!1},noStyling:{control:!1},type:{control:!1}},render:r=>e(d,{...r,type:"dl"})};var h,c,f,u,p;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    className: undefined,
    id: "nypl-list",
    inline: false,
    listItems: undefined,
    noStyling: false,
    title: "Middle-Earth Peoples",
    type: "ul"
  },
  render: args => <List {...args}>
      {args.type !== "dl" ? itemGroups.map((item, i) => <li key={i}>{item}</li>) : descriptions.map((item, i) => [<dt key={\`dt_\${i}\`}>{item.term}</dt>, <dd key={\`dd_\${i}\`}>{item.description}</dd>])}
    </List>,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=16115%3A304"
    },
    jest: ["List.test.tsx"]
  }
}`,...(f=(c=a.parameters)==null?void 0:c.docs)==null?void 0:f.source},description:{story:"Main Story for the List component. This must contains the `args`\nand `parameters` properties in this object.",...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.description}}};var m,g,y;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    id: "nypl-list2",
    noStyling: false,
    title: "Middle-Earth Peoples"
  },
  argTypes: {
    inline: {
      control: false
    },
    noStyling: {
      control: false
    },
    type: {
      control: false
    }
  },
  render: args => <List {...args} type="dl">
      {descriptions.map((item, i) => [<dt key={\`dt_\${i}\`}>{item.term}</dt>, <dd key={\`dd_\${i}\`}>{item.description}</dd>])}
    </List>,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=10734%3A5178"
    }
  }
}`,...(y=(g=i.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var b,w,v;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    noStyling: false,
    title: "Details"
  },
  argTypes: {
    inline: {
      control: false
    },
    noStyling: {
      control: false
    },
    type: {
      table: {
        disable: true
      }
    }
  },
  render: args => <List {...args} type="dl">
      <dt>Authors</dt>
      <dd>
        <a href="#">Chirwa, Ephraim Wadonda, author</a>
        <br />
        <a href="#">Dorward, Andrew, author</a>
      </dd>
      <dt>Subjects</dt>
      <dd>
        <a href="#">Ackerbau</a>
        <br />
        <a href="#">Ackerbau.</a>
        <br />
        <a href="#">Africa.</a>
        <br />
        <a href="#">Afrika.</a>
        <br />
        <a href="#">Agrarsubvention</a>
        <br />
        <a href="#">Agrarsubvention.</a>
        <br />
        <a href="#">Agricultura -- Subvencions -- Malawi.</a>
        <br />
        <a href="#">Agricultural economics New.</a>
        <br />
        <a href="#">Agricultural subsidies</a>
        <br />
        <a href="#">Agricultural subsidies -- Developing countries.</a>
        <br />
        <a href="#">Agricultural subsidies -- Malawi.</a>
        <br />
        <a href="#">Agricultural subsidies.</a>
        <br />
        <a href="#">BUSINESS &amp; ECONOMICS -- Industries</a>
        <br />
      </dd>
    </List>,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=10734%3A5178"
    }
  }
}`,...(v=(w=s.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var A,S,k;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    listItems: animalCrossingDescriptions,
    noStyling: false,
    title: "Animal Crossing Fish"
  },
  argTypes: {
    inline: {
      control: false
    },
    noStyling: {
      control: false
    },
    type: {
      control: false
    }
  },
  render: args => <List {...args} type="dl" />
}`,...(k=(S=o.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};const E=["WithControls","DescriptionList","DescriptionListWithLinks","ListWithDataProps"],W=Object.freeze(Object.defineProperty({__proto__:null,DescriptionList:i,DescriptionListWithLinks:s,ListWithDataProps:o,WithControls:a,__namedExportsOrder:E,default:I},Symbol.toStringTag,{value:"Module"}));export{i as D,W as L,a as W,s as a,o as b};
//# sourceMappingURL=List.stories-b601406b.js.map
