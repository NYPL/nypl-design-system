import{bN as j,m as i,j as e}from"./iframe-D93LbwGv.js";import{a as t}from"./storybookUtils-BmTl87w5.js";const z=(o,A)=>{const n=s=>s.toLocaleString(),h=s=>!isNaN(s)&&!/[^0-9.-]/.test(s);return((s,a)=>{let m=!1;if(h(s)?s=typeof s=="string"?parseFloat(s):s:(console.warn(`NYPL Reservoir useFormatNumber: The provided value ${s} is not supported. Please ensure a valid value is passed.`),m=!0),a!==void 0&&!h(a)?(console.warn(`NYPL Reservoir useFormatNumber: The provided value ${a} for the second argument is not supported. Please ensure a valid value is passed.`),m=!0):a!==void 0&&(a=typeof a=="string"?parseFloat(a):a),m)return null;if(a===void 0)return n(s);const[l,p]=s<a?[s,a]:[a,s];if(l===p)return n(l);const u="–";return p-l===1?`${n(l)}${u}${n(p)}`:`${n(l)}${u}${n(p)}`})(o,A)},D={title:"Components/Typography & Styles/Text",component:i,argTypes:{children:{table:{disable:!0}},className:{control:!1},isBold:t(),isItalic:t(),isCapitalized:t(),isUppercase:t(),isLowercase:t(),noSpace:t(),role:{control:!1},size:{control:{type:"select"},options:j,table:{defaultValue:{summary:"default"}}}}},F=z(8145e4),$=z(100,"20000"),r={args:{className:void 0,isBold:!1,isItalic:!1,isCapitalized:!1,isUppercase:!1,isLowercase:!1,noSpace:!1,role:void 0,size:"default"},parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?type=design&node-id=10975-52&t=AEGDRpspvTyuSWSA-4"},jest:"Text.test.tsx"},render:o=>e.jsxs(e.Fragment,{children:[e.jsxs(i,{...o,children:["Animal Crossing[a] is a ",e.jsx("b",{children:"social"})," simulation video game series developed and published by Nintendo. The series was conceptualized and created by Katsuya Eguchi and Hisashi Nogami. In Animal Crossing, the player character is a human who lives in a village inhabited by various anthropomorphic animals and can do various activities like fishing, bug catching, and fossil hunting. The series is notable for its open-ended gameplay and use of the video game console's internal clock and calendar to simulate real passage of time."]}),e.jsx(i,{...o,children:"Since its initial release in 2001, five Animal Crossing games have been released worldwide, one each for the Nintendo 64/iQue Player (enhanced and reissued for the GameCube), Nintendo DS, Wii, Nintendo 3DS and Nintendo Switch. The series has been both critically and commercially successful and has sold over 60 million units worldwide. Three spin-off games have also been released: Animal Crossing: Happy Home Designer for Nintendo 3DS, Animal Crossing: Amiibo Festival for Wii U, and Animal Crossing: Pocket Camp for mobile devices."}),e.jsxs(i,{...o,children:["As of June 2024, the Animal Crossing franchise has sold over $",F," copies worldwide. Suggested retail price: $",$]})]})},d={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{size:"body1",children:"Body 1"}),e.jsx(i,{size:"body2",children:"Body 2"}),e.jsx(i,{size:"caption",children:"Caption"}),e.jsx(i,{size:"subtitle1",children:"Subtitle 1"}),e.jsx(i,{size:"subtitle2",children:"Subtitle 2"}),e.jsx(i,{size:"overline1",children:"Overline 1"}),e.jsx(i,{size:"overline2",children:"Overline 2"})]})},c={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{size:"tag",children:"Tag text (deprecated)"}),e.jsx(i,{size:"mini",children:"Mini text (deprecated)"})]})};var g,f,b,x,v;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    className: undefined,
    isBold: false,
    isItalic: false,
    isCapitalized: false,
    isUppercase: false,
    isLowercase: false,
    noSpace: false,
    role: undefined,
    size: "default"
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?type=design&node-id=10975-52&t=AEGDRpspvTyuSWSA-4"
    },
    jest: "Text.test.tsx"
  },
  render: args => <>
      <Text {...args}>
        Animal Crossing[a] is a <b>social</b> simulation video game series
        developed and published by Nintendo. The series was conceptualized and
        created by Katsuya Eguchi and Hisashi Nogami. In Animal Crossing, the
        player character is a human who lives in a village inhabited by various
        anthropomorphic animals and can do various activities like fishing, bug
        catching, and fossil hunting. The series is notable for its open-ended
        gameplay and use of the video game console's internal clock and calendar
        to simulate real passage of time.
      </Text>
      <Text {...args}>
        Since its initial release in 2001, five Animal Crossing games have been
        released worldwide, one each for the Nintendo 64/iQue Player (enhanced
        and reissued for the GameCube), Nintendo DS, Wii, Nintendo 3DS and
        Nintendo Switch. The series has been both critically and commercially
        successful and has sold over 60 million units worldwide. Three spin-off
        games have also been released: Animal Crossing: Happy Home Designer for
        Nintendo 3DS, Animal Crossing: Amiibo Festival for Wii U, and Animal
        Crossing: Pocket Camp for mobile devices.
      </Text>
      <Text {...args}>
        As of June 2024, the Animal Crossing franchise has sold over $
        {copiesSold} copies worldwide. Suggested retail price: \${suggestedPrice}
      </Text>
    </>
}`,...(b=(f=r.parameters)==null?void 0:f.docs)==null?void 0:b.source},description:{story:"Main Story for the Text component. This must contains the `args`\nand `parameters` properties in this object.",...(v=(x=r.parameters)==null?void 0:x.docs)==null?void 0:v.description}}};var y,T,S;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <>
      <Text size="body1">Body 1</Text>
      <Text size="body2">Body 2</Text>
      <Text size="caption">Caption</Text>
      <Text size="subtitle1">Subtitle 1</Text>
      <Text size="subtitle2">Subtitle 2</Text>
      <Text size="overline1">Overline 1</Text>
      <Text size="overline2">Overline 2</Text>
    </>
}`,...(S=(T=d.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var N,w,C;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <>
      <Text size="tag">Tag text (deprecated)</Text>
      <Text size="mini">Mini text (deprecated)</Text>
    </>
}`,...(C=(w=c.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const O=["WithControls","RecommendedOptions","DeprecatedOptions"],H=Object.freeze(Object.defineProperty({__proto__:null,DeprecatedOptions:c,RecommendedOptions:d,WithControls:r,__namedExportsOrder:O,default:D},Symbol.toStringTag,{value:"Module"}));export{c as D,d as R,H as T,r as W};
