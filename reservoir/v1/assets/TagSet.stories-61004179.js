import{j as e,a as f}from"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import{w as k}from"./index-6148c31a.js";import{T as a}from"./TagSet-8b2c5816.js";import{V as y}from"./chakra-ui-layout.esm-b2fa9d31.js";const S={title:"Components/Form Elements/TagSet",component:a,decorators:[k],argTypes:{className:{control:!1},id:{control:!1},isDismissible:{control:"boolean",table:{defaultValue:{summary:"false"}}},onClick:{control:!1},tagSetData:{control:!1},type:{control:!1,table:{defaultValue:{summary:"filter"}}}}},t={args:{className:void 0,id:"tagSet-id-explore",isDismissible:void 0,onClick:void 0,tagSetData:[{label:e("a",{href:"../?path=/story/components-basic-elements-card--with-controls",children:"Card"})},{iconName:"fileTypeDoc",label:e("a",{href:"../?path=/story/components-page-layout-structuredcontent--controls",children:"StructuredContent"})},{iconName:"alertWarningOutline",label:e("a",{href:"../?path=/story/components-feedback-progressindicator--with-controls",children:"ProgressIndicator"})},{iconName:"actionSettings",label:e("a",{href:"../?path=/docs/hooks-usenyplbreakpoints--docs",children:"useNYPLBreakpoints React hook"})}],type:"explore"},argTypes:{isDismissible:{table:{disable:!0}},onClick:{table:{disable:!0}}},parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=51380%3A41869"},jest:["TagSet.test.tsx"]}},o={args:{className:void 0,id:"tagSet-id-filter",isDismissible:!0,onClick:n=>{console.log(`Clicked from the onClick props: ${n}`)},tagSetData:[{iconName:"utilityAccountFilled",label:"Abbey Road"},{iconName:"actionLaunch",label:"The Beatles"},{iconName:"alertWarningOutline",label:"Revolver"},{iconName:"check",label:"The Beatles Sgt. Pepper's Lonely Hearts Club Band"}],type:"filter"}},l={args:{className:void 0,id:void 0,isDismissible:void 0,onClick:void 0,tagSetData:void 0,type:void 0},render:()=>f(y,{align:"stretch",gap:"l",children:[e(a,{tagSetData:[{label:e("a",{href:"../?path=/story/components-basic-elements-card--card-with-controls",children:"Card"})},{label:e("a",{href:"../?path=/docs/components-page-layout-structuredcontent--structured-content-with-controls",children:"StructuredContent"})},{label:e("a",{href:"../?path=/docs/components-feedback-progressindicator--progress-indicator-with-controls",children:"ProgressIndicator"})},{label:e("a",{href:"../?path=/docs/hooks-usenyplbreakpoints--page",children:"useNYPLBreakpoints React hook"})}],type:"explore"}),e(a,{tagSetData:[{label:e("a",{href:"../?path=/story/components-basic-elements-card--card-with-controls",children:"Card"})},{iconName:"fileTypeDoc",label:e("a",{href:"../?path=/docs/components-page-layout-structuredcontent--structured-content-with-controls",children:"StructuredContent"})},{iconName:"alertWarningOutline",label:e("a",{href:"../?path=/docs/components-feedback-progressindicator--progress-indicator-with-controls",children:"ProgressIndicator"})},{iconName:"actionSettings",label:e("a",{href:"../?path=/docs/hooks-usenyplbreakpoints--page",children:"useNYPLBreakpoints React hook"})}],type:"explore"}),e(a,{onClick:n=>console.log(`Clicked from the onClick props: ${n}`),tagSetData:[{label:"Red"},{label:"Orange"},{label:"Yellow"},{label:"Green"},{label:"Blue"},{label:"Indigo"},{label:"Violet"}],type:"filter"}),e(a,{isDismissible:!0,onClick:n=>console.log(`Clicked from the onClick props: ${n}`),tagSetData:[{label:"Red"},{label:"Orange"},{label:"Yellow"},{label:"Green"},{label:"Blue"},{label:"Indigo"},{label:"Violet"}],type:"filter"}),e(a,{onClick:n=>console.log(`Clicked from the onClick props: ${n}`),tagSetData:[{iconName:"alertWarningFilled",label:"Red"},{iconName:"check",label:"Orange"},{iconName:"check",label:"Yellow"},{iconName:"alertWarningFilled",label:"Green"},{iconName:"check",label:"Blue"},{iconName:"check",label:"Indigo"},{iconName:"check",label:"Violet"}],type:"filter"})]})};var r,s,i,c,d;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    className: undefined,
    id: "tagSet-id-explore",
    isDismissible: undefined,
    onClick: undefined,
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
  },
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
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source},description:{story:"Main Story for the TagSet component. This must contains the `args`\nand `parameters` properties in this object.",...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.description}}};var p,b,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    className: undefined,
    id: "tagSet-id-filter",
    isDismissible: true,
    onClick: tagLabel => {
      console.log(\`Clicked from the onClick props: \${tagLabel}\`);
    },
    tagSetData: [{
      iconName: "utilityAccountFilled",
      label: "Abbey Road"
    }, {
      iconName: "actionLaunch",
      label: "The Beatles"
    }, {
      iconName: "alertWarningOutline",
      label: "Revolver"
    }, {
      iconName: "check",
      label: "The Beatles Sgt. Pepper's Lonely Hearts Club Band"
    }],
    type: "filter"
  }
}`,...(m=(b=o.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var g,h,u;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
      <TagSet onClick={tagLabel => console.log(\`Clicked from the onClick props: \${tagLabel}\`)} tagSetData={[{
      label: "Red"
    }, {
      label: "Orange"
    }, {
      label: "Yellow"
    }, {
      label: "Green"
    }, {
      label: "Blue"
    }, {
      label: "Indigo"
    }, {
      label: "Violet"
    }]} type="filter" />
      <TagSet isDismissible onClick={tagLabel => console.log(\`Clicked from the onClick props: \${tagLabel}\`)} tagSetData={[{
      label: "Red"
    }, {
      label: "Orange"
    }, {
      label: "Yellow"
    }, {
      label: "Green"
    }, {
      label: "Blue"
    }, {
      label: "Indigo"
    }, {
      label: "Violet"
    }]} type="filter" />
      <TagSet onClick={tagLabel => console.log(\`Clicked from the onClick props: \${tagLabel}\`)} tagSetData={[{
      iconName: "alertWarningFilled",
      label: "Red"
    }, {
      iconName: "check",
      label: "Orange"
    }, {
      iconName: "check",
      label: "Yellow"
    }, {
      iconName: "alertWarningFilled",
      label: "Green"
    }, {
      iconName: "check",
      label: "Blue"
    }, {
      iconName: "check",
      label: "Indigo"
    }, {
      iconName: "check",
      label: "Violet"
    }]} type="filter" />
    </VStack>
}`,...(u=(h=l.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const N=["ExploreVariant","FilterVariant","FormattingExamples"],x=Object.freeze(Object.defineProperty({__proto__:null,ExploreVariant:t,FilterVariant:o,FormattingExamples:l,__namedExportsOrder:N,default:S},Symbol.toStringTag,{value:"Module"}));export{t as E,o as F,x as T,l as a};
//# sourceMappingURL=TagSet.stories-61004179.js.map
