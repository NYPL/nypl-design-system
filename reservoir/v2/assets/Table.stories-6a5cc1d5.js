import{j as e}from"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import{w as A}from"./index-6148c31a.js";import{I as c}from"./Image-ed70f474.js";import{T as a}from"./Table-64c6aa77.js";const I={title:"Components/Page Layout/Table",component:a,decorators:[A],argTypes:{columnHeaders:{control:{disable:!0}},columnHeadersBackgroundColor:{control:{type:"color"}},columnHeadersTextColor:{control:{type:"color"}},id:{control:!1},tableData:{control:!1}}},d=["First Name","Last Name","Nick Name","Address1","City","State","Zipcode"],i=[["Tom","Nook","Tanukichi","Main Street","New York","NY","23458"],["Isabelle","-","Shizue","Walnut Street","New York","NY","23458"],["K.K.","Slider","Totakeke","Niper Place","New York","NY","98765"],["Sonny","Resetti","Risetto san","Village Road","New York","NY","09873"]],r={args:{className:void 0,columnHeaders:d,columnHeadersBackgroundColor:void 0,columnHeadersTextColor:void 0,id:void 0,showRowDividers:!1,tableData:i,titleText:void 0,useRowHeaders:!1},render:j=>e(a,{...j}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=46780%3A27675"},jest:"Table.test.tsx"}},o={render:()=>e(a,{columnHeaders:d,id:"title-table",tableData:i,titleText:"Table with a title"})},s={render:()=>e(a,{columnHeaders:d,id:"showRowDividers-table",showRowDividers:!0,tableData:i})},t={render:()=>e(a,{columnHeaders:d,id:"rowHeaders-table",tableData:i,useRowHeaders:!0})},n={render:()=>e(a,{columnHeaders:d,columnHeadersBackgroundColor:"var(--nypl-colors-ui-link-secondary)",columnHeadersTextColor:"var(--nypl-colors-ui-white)",id:"rowHeaders-table",showRowDividers:!0,tableData:i,useRowHeaders:!0})},Y=["First Name","Last Name","Avatar"],K=[["Tom","Nook",e(c,{alt:"Tom Nook",size:"small",src:"https://play.nintendo.com/images/AC_Tom_FRYtwIN.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png"},"image")],["Isabelle","-",e(c,{alt:"Isabelle",size:"small",src:"https://play.nintendo.com/images/AC_Isabelle_7XU6aGu.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png"},"image")],["K.K.","Slider",e(c,{alt:"K.K Slider",size:"small",src:"https://play.nintendo.com/images/AC_KK_jh4yj5t.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png"},"image")]],l={render:()=>e(a,{columnHeaders:Y,id:"jsx-example",showRowDividers:!0,tableData:K}),name:"JSX Element"};var m,u,p,b,w;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    className: undefined,
    columnHeaders,
    columnHeadersBackgroundColor: undefined,
    columnHeadersTextColor: undefined,
    id: undefined,
    showRowDividers: false,
    tableData,
    titleText: undefined,
    useRowHeaders: false
  },
  render: args => <Table {...args}></Table>,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=46780%3A27675"
    },
    jest: "Table.test.tsx"
  }
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source},description:{story:"Main Story for the Table component. This must contains the `args`\nand `parameters` properties in this object.",...(w=(b=r.parameters)==null?void 0:b.docs)==null?void 0:w.description}}};var H,g,T;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <Table columnHeaders={columnHeaders} id="title-table" tableData={tableData} titleText="Table with a title" />
}`,...(T=(g=o.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var h,f,D;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Table columnHeaders={columnHeaders} id="showRowDividers-table" showRowDividers tableData={tableData} />
}`,...(D=(f=s.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var R,y,C;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Table columnHeaders={columnHeaders} id="rowHeaders-table" tableData={tableData} useRowHeaders />
}`,...(C=(y=t.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var S,v,N;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Table columnHeaders={columnHeaders} columnHeadersBackgroundColor="var(--nypl-colors-ui-link-secondary)" columnHeadersTextColor="var(--nypl-colors-ui-white)" id="rowHeaders-table" showRowDividers tableData={tableData} useRowHeaders />
}`,...(N=(v=n.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var k,x,_;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Table columnHeaders={characterHeaders} id="jsx-example" showRowDividers tableData={charactersData} />,
  name: "JSX Element"
}`,...(_=(x=l.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};const J=["WithControls","Title","RowDividers","RowHeaders","CustomHeaderColors","JSXElements"],F=Object.freeze(Object.defineProperty({__proto__:null,CustomHeaderColors:n,JSXElements:l,RowDividers:s,RowHeaders:t,Title:o,WithControls:r,__namedExportsOrder:J,default:I},Symbol.toStringTag,{value:"Module"}));export{n as C,l as J,s as R,F as T,r as W,o as a,t as b};
//# sourceMappingURL=Table.stories-6a5cc1d5.js.map
