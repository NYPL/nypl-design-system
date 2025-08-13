import{a4 as a,j as e,V as j,r as V,o as v}from"./iframe-CFLVJZOZ.js";import{a as B}from"./storybookUtils-BmTl87w5.js";const F={title:"Components/Content Display/TagSet",component:a,argTypes:{className:{control:!1},id:{control:!1},isDismissible:B(),onClick:{control:!1},tagSetData:{control:!1},type:{control:!1,table:{defaultValue:{summary:"filter"}}}}},t={args:{className:void 0,id:"tagSet-id-explore",tagSetData:[{label:e.jsx("a",{href:"../?path=/story/components-basic-elements-card--with-controls",children:"Card"})},{iconName:"fileTypeDoc",label:e.jsx("a",{href:"../?path=/story/components-page-layout-structuredcontent--controls",children:"StructuredContent"})},{iconName:"alertWarningOutline",label:e.jsx("a",{href:"../?path=/story/components-feedback-progressindicator--with-controls",children:"ProgressIndicator"})},{iconName:"actionSettings",label:e.jsx("a",{href:"../?path=/docs/hooks-usenyplbreakpoints--docs",children:"useNYPLBreakpoints React hook"})}],type:"explore"},argTypes:{isDismissible:{table:{disable:!0}},onClick:{table:{disable:!0}}},parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=51380%3A41869"},jest:["TagSet.test.tsx"]}},c=[{iconName:"utilityAccountFilled",id:"abby-road",label:"Abbey Road"},{iconName:"actionLaunch",id:"the-beatles",label:"The Beatles"},{iconName:"alertWarningOutline",id:"revolver",label:"Revolver"},{iconName:"check",id:"st-peppers",label:"The Beatles Sgt. Pepper's Lonely Hearts Club Band"}],R=()=>{const[n,i]=V.useState(c),D=s=>{if(console.log(`Clicked from the onClick props: ${s.label}`),s.id==="clear-filters"){i([]);return}i(w=>w.filter(T=>T.id!==s.id))};return n.length===0?e.jsx(v,{id:"reset-tags",onClick:()=>i(c),children:"Reset Tags"}):e.jsx(a,{id:"tagSet-id-filter-dismissible",isDismissible:!0,onClick:D,tagSetData:n,type:"filter"})},o={render:n=>e.jsx(R,{})},r={render:n=>e.jsx(a,{id:"tagSet-id-filter",tagSetData:c,type:"filter"})},l={args:{className:void 0,id:void 0,isDismissible:void 0,onClick:void 0,tagSetData:void 0,type:void 0},render:()=>e.jsxs(j,{align:"stretch",gap:"l",children:[e.jsx(a,{tagSetData:[{label:e.jsx("a",{href:"../?path=/story/components-basic-elements-card--card-with-controls",children:"Card"})},{label:e.jsx("a",{href:"../?path=/docs/components-page-layout-structuredcontent--structured-content-with-controls",children:"StructuredContent"})},{label:e.jsx("a",{href:"../?path=/docs/components-feedback-progressindicator--progress-indicator-with-controls",children:"ProgressIndicator"})},{label:e.jsx("a",{href:"../?path=/docs/hooks-usenyplbreakpoints--page",children:"useNYPLBreakpoints React hook"})}],type:"explore"}),e.jsx(a,{tagSetData:[{label:e.jsx("a",{href:"../?path=/story/components-basic-elements-card--card-with-controls",children:"Card"})},{iconName:"fileTypeDoc",label:e.jsx("a",{href:"../?path=/docs/components-page-layout-structuredcontent--structured-content-with-controls",children:"StructuredContent"})},{iconName:"alertWarningOutline",label:e.jsx("a",{href:"../?path=/docs/components-feedback-progressindicator--progress-indicator-with-controls",children:"ProgressIndicator"})},{iconName:"actionSettings",label:e.jsx("a",{href:"../?path=/docs/hooks-usenyplbreakpoints--page",children:"useNYPLBreakpoints React hook"})}],type:"explore"}),e.jsx(a,{tagSetData:[{id:"red",label:"Red"},{id:"orange",label:"Orange"},{id:"yellow",label:"Yellow"},{id:"green",label:"Green"},{id:"blue",label:"Blue"},{id:"indigo",label:"Indigo"},{id:"violet",label:"Violet"}],type:"filter"}),e.jsx(a,{isDismissible:!0,onClick:n=>console.log(`Clicked from the onClick props: ${n}`),tagSetData:[{id:"red",label:"Red"},{id:"orange",label:"Orange"},{id:"yellow",label:"Yellow"},{id:"green",label:"Green"},{id:"blue",label:"Blue"},{id:"indigo",label:"Indigo"},{id:"violet",label:"Violet"}],type:"filter"}),e.jsx(a,{onClick:n=>console.log(`Clicked from the onClick props: ${n}`),tagSetData:[{iconName:"alertWarningFilled",id:"red",label:"Red"},{iconName:"check",id:"orange",label:"Orange"},{iconName:"check",id:"yellow",label:"Yellow"},{iconName:"alertWarningFilled",id:"green",label:"Green"},{iconName:"check",id:"blue",label:"Blue"},{iconName:"check",id:"indigo",label:"Indigo"},{iconName:"check",id:"violet",label:"Violet"}],type:"filter"})]})};var d,p,g,b,h;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    className: undefined,
    id: "tagSet-id-explore",
    tagSetData: [{
      label: <a href="../?path=/story/components-basic-elements-card--with-controls">
            Card
          </a>
    }, {
      iconName: "fileTypeDoc",
      label: <a href="../?path=/story/components-page-layout-structuredcontent--controls">
            StructuredContent
          </a>
    }, {
      iconName: "alertWarningOutline",
      label: <a href="../?path=/story/components-feedback-progressindicator--with-controls">
            ProgressIndicator
          </a>
    }, {
      iconName: "actionSettings",
      label: <a href="../?path=/docs/hooks-usenyplbreakpoints--docs">
            useNYPLBreakpoints React hook
          </a>
    }],
    type: "explore"
  } as TagSetExploreProps,
  argTypes: {
    isDismissible: {
      table: {
        disable: true
      }
    },
    onClick: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=51380%3A41869"
    },
    jest: ["TagSet.test.tsx"]
  }
}`,...(g=(p=t.parameters)==null?void 0:p.docs)==null?void 0:g.source},description:{story:"Main Story for the TagSet component. This must contains the `args`\nand `parameters` properties in this object.",...(h=(b=t.parameters)==null?void 0:b.docs)==null?void 0:h.description}}};var m,u,f;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: _args => <FilterVariantStory />
}`,...(f=(u=o.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var y,k,S;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: _args => <TagSet id="tagSet-id-filter" tagSetData={defaultTagSetData} type="filter" />
}`,...(S=(k=r.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var N,x,C;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    className: undefined,
    id: undefined,
    isDismissible: undefined,
    onClick: undefined,
    tagSetData: undefined,
    type: undefined
  },
  render: () => <VStack align="stretch" gap="l">
      <TagSet tagSetData={[{
      label: <a href="../?path=/story/components-basic-elements-card--card-with-controls">
                Card
              </a>
    }, {
      label: <a href="../?path=/docs/components-page-layout-structuredcontent--structured-content-with-controls">
                StructuredContent
              </a>
    }, {
      label: <a href="../?path=/docs/components-feedback-progressindicator--progress-indicator-with-controls">
                ProgressIndicator
              </a>
    }, {
      label: <a href="../?path=/docs/hooks-usenyplbreakpoints--page">
                useNYPLBreakpoints React hook
              </a>
    }]} type="explore" />
      <TagSet tagSetData={[{
      label: <a href="../?path=/story/components-basic-elements-card--card-with-controls">
                Card
              </a>
    }, {
      iconName: "fileTypeDoc",
      label: <a href="../?path=/docs/components-page-layout-structuredcontent--structured-content-with-controls">
                StructuredContent
              </a>
    }, {
      iconName: "alertWarningOutline",
      label: <a href="../?path=/docs/components-feedback-progressindicator--progress-indicator-with-controls">
                ProgressIndicator
              </a>
    }, {
      iconName: "actionSettings",
      label: <a href="../?path=/docs/hooks-usenyplbreakpoints--page">
                useNYPLBreakpoints React hook
              </a>
    }]} type="explore" />
      <TagSet tagSetData={[{
      id: "red",
      label: "Red"
    }, {
      id: "orange",
      label: "Orange"
    }, {
      id: "yellow",
      label: "Yellow"
    }, {
      id: "green",
      label: "Green"
    }, {
      id: "blue",
      label: "Blue"
    }, {
      id: "indigo",
      label: "Indigo"
    }, {
      id: "violet",
      label: "Violet"
    }]} type="filter" />
      <TagSet isDismissible onClick={tagLabel => console.log(\`Clicked from the onClick props: \${tagLabel}\`)} tagSetData={[{
      id: "red",
      label: "Red"
    }, {
      id: "orange",
      label: "Orange"
    }, {
      id: "yellow",
      label: "Yellow"
    }, {
      id: "green",
      label: "Green"
    }, {
      id: "blue",
      label: "Blue"
    }, {
      id: "indigo",
      label: "Indigo"
    }, {
      id: "violet",
      label: "Violet"
    }]} type="filter" />
      <TagSet onClick={tagLabel => console.log(\`Clicked from the onClick props: \${tagLabel}\`)} tagSetData={[{
      iconName: "alertWarningFilled",
      id: "red",
      label: "Red"
    }, {
      iconName: "check",
      id: "orange",
      label: "Orange"
    }, {
      iconName: "check",
      id: "yellow",
      label: "Yellow"
    }, {
      iconName: "alertWarningFilled",
      id: "green",
      label: "Green"
    }, {
      iconName: "check",
      id: "blue",
      label: "Blue"
    }, {
      iconName: "check",
      id: "indigo",
      label: "Indigo"
    }, {
      iconName: "check",
      id: "violet",
      label: "Violet"
    }]} type="filter" />
    </VStack>
}`,...(C=(x=l.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const O=["ExploreVariant","FilterVariantDismiss","FilterVariant","FormattingExamples"],L=Object.freeze(Object.defineProperty({__proto__:null,ExploreVariant:t,FilterVariant:r,FilterVariantDismiss:o,FormattingExamples:l,__namedExportsOrder:O,default:F},Symbol.toStringTag,{value:"Module"}));export{t as E,o as F,L as T,r as a,l as b};
