import{b8 as se,T as a,j as e,O as te,H as b,y as x}from"./iframe-CFLVJZOZ.js";import{a as T}from"./storybookUtils-BmTl87w5.js";const le={title:"Components/Page Layout/Table",component:a,argTypes:{columnHeaders:{control:{disable:!0}},columnHeadersBackgroundColor:{control:{type:"color"}},columnHeadersTextColor:{control:{type:"color"}},id:{control:!1},isScrollable:{...T(),defaultValue:{summary:"false"}},showRowDividers:{...T(),defaultValue:{summary:"false"}},showTitleText:{...T(),defaultValue:{summary:"false"}},tableData:{control:!1},tableTextSize:{options:se,defaultValue:{summary:"body1"}},useColumnStyles:{control:{type:"boolean"},description:"**Only used for Storybook** – Apply custom column styles and use alternate table data"},useRowHeaders:{...T(),defaultValue:{summary:"false"}}}},t=["First Name","Last Name","Nick Name","Address1","City","State","Zipcode"],s=[["Tom","Nook","Tanukichi","Main Street","New York","NY","23458"],["Isabelle","-","Shizue","Walnut Street","New York","NY","23458"],["K.K.","Slider","Totakeke","Niper Place","New York","NY","98765"],["Sonny","Resetti","Risetto san","Village Road","New York","NY","09873"]],w=["Name","Description","Salary (USD)"],g=[["Tom Nook","Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nulla vitae elit libero, a pharetra augue.","$225,000"],["Isabelle","Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Sed posuere consectetur est at lobortis. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.","$228,500"],["K.K. Slider","Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus.","$157,000"],["Sonny Resetti","Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.","$89,000"]],H=[{minWidth:"200px",width:"15%"},{minWidth:"400px",width:"auto"},{minWidth:"200px",width:"15%",textAlign:"right"}],oe=[{minWidth:"200px",width:"15%"},{},{minWidth:"200px",width:"15%",textAlign:"right"}],y=["Name","Nick Name","Species","Description","Bio","Salary (USD)"],S=[["Tom Nook","Tanukichi","Raccoon","A businessman who manages the town shop and the player's home loan.","Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nulla vitae elit libero, a pharetra augue.","$225,000"],["Isabelle","Shizue","Dog","A secretary and assistant to the player. Twin sister to Digby.","Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Sed posuere consectetur est at lobortis. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.","$228,500"],["K.K. Slider","Totakeke","Dog","A traveling musician and DJ. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.","Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus.","$157,000"],["Sonny Resetti","Risetto san","Mole","Lectures the player if they reset their game. Brother to Don Resetti.","Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.","$89,000"]],v=[{minWidth:"200px",width:"15%"},{minWidth:"200px",width:"15%"},{minWidth:"200px",width:"15%"},{minWidth:"500px",width:"auto"},{minWidth:"500px",width:"auto"},{minWidth:"160px",width:"15%",textAlign:"right"}],l={args:{className:void 0,columnHeaders:t,columnHeadersBackgroundColor:void 0,columnHeadersTextColor:void 0,columnStyles:void 0,id:void 0,isScrollable:!1,showRowDividers:!1,showTitleText:!1,tableData:s,tableTextSize:"body1",titleText:void 0,useColumnStyles:!1,useRowHeaders:!1},render:p=>e.jsx(a,{...p,columnHeaders:p.useColumnStyles?y:t,columnStyles:p.useColumnStyles?v:void 0,tableData:p.useColumnStyles?S:s}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=46780%3A27675"},jest:"Table.test.tsx"}},o={render:()=>e.jsx(a,{columnHeaders:t,id:"table-title-text",tableData:s,titleText:"Table with visible title"})},r={render:()=>e.jsx(a,{columnHeaders:t,id:"table-aria-label",showTitleText:!1,tableData:s,titleText:"Table with aria-label"})},i={render:()=>e.jsx(a,{columnHeaders:t,id:"table-row-dividers",showTitleText:!1,showRowDividers:!0,tableData:s,titleText:"Table with row dividers"})},n={render:()=>e.jsx(a,{columnHeaders:t,id:"table-row-headers",showTitleText:!1,tableData:s,titleText:"Table with row headers",useRowHeaders:!0})},u={render:()=>e.jsx(a,{columnHeaders:t,columnHeadersBackgroundColor:"var(--nypl-colors-ui-link-secondary)",columnHeadersTextColor:"var(--nypl-colors-ui-white)",id:"table-custom-header-colors",showRowDividers:!0,showTitleText:!1,tableData:s,titleText:"Table with custom header colors",useRowHeaders:!0})},c={render:()=>e.jsx(a,{columnHeaders:w,id:"table-native-column-styles",showTitleText:!1,tableData:g,titleText:"Table using native column styles"})},d={render:()=>e.jsxs(te,{spacing:"xl",children:[e.jsxs("div",{children:[e.jsx(b,{level:"h4",size:"heading6",children:"Without Row Headers"}),e.jsx(a,{columnHeaders:w,columnStyles:H,id:"table-custom-column-styles",showTitleText:!1,tableData:g,titleText:"Table with custom column styles"})]}),e.jsxs("div",{children:[e.jsx(b,{level:"h4",size:"heading6",children:"With Row Headers"}),e.jsx(a,{columnHeaders:w,columnStyles:H,id:"table-custom-column-styles-row-headers",showTitleText:!1,tableData:g,titleText:"Table with custom column styles and row headers",useRowHeaders:!0})]}),e.jsxs("div",{children:[e.jsx(b,{level:"h4",size:"heading6",children:"With Empty Style Object"}),e.jsx(a,{columnHeaders:w,columnStyles:oe,id:"table-custom-column-styles",showTitleText:!1,tableData:g,titleText:"Table with custom column styles"})]})]})},m={render:()=>e.jsxs(te,{spacing:"xl",children:[e.jsxs("div",{children:[e.jsx(b,{level:"h4",size:"heading5",children:"Without Row Headers"}),e.jsx(a,{columnHeaders:y,columnStyles:v,id:"table-horizontal-scrolling-wo-row-headers",isScrollable:!0,showRowDividers:!0,showTitleText:!1,tableData:S,titleText:"Table with horizontal scrolling and no row headers"})]}),e.jsxs("div",{children:[e.jsx(b,{level:"h4",size:"heading5",children:"With Row Headers"}),e.jsx(a,{columnHeaders:y,columnStyles:v,id:"table-horizontal-scrolling-w-row-headers",isScrollable:!0,showTitleText:!1,tableData:S,titleText:"Table with horizontal scrolling and row headers",useRowHeaders:!0})]})]})},re=["First Name","Last Name","Avatar"],ie=[["Tom","Nook",e.jsx(x,{alt:"Tom Nook",size:"small",src:"https://play.nintendo.com/images/AC_Tom_FRYtwIN.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png"},"image")],["Isabelle","-",e.jsx(x,{alt:"Isabelle",size:"small",src:"https://play.nintendo.com/images/AC_Isabelle_7XU6aGu.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png"},"image")],["K.K.","Slider",e.jsx(x,{alt:"K.K Slider",size:"small",src:"https://play.nintendo.com/images/AC_KK_jh4yj5t.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png"},"image")]],h={render:()=>e.jsx(a,{columnHeaders:re,id:"jsx-example",showRowDividers:!0,tableData:ie}),name:"JSX Element"};var f,D,C,R,j;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    className: undefined,
    columnHeaders,
    columnHeadersBackgroundColor: undefined,
    columnHeadersTextColor: undefined,
    columnStyles: undefined,
    id: undefined,
    isScrollable: false,
    showRowDividers: false,
    showTitleText: false,
    tableData,
    tableTextSize: "body1",
    titleText: undefined,
    useColumnStyles: false,
    useRowHeaders: false
  },
  render: (args: any) => <Table {...args} columnHeaders={args.useColumnStyles ? columnHeadersAlt : columnHeaders} columnStyles={args.useColumnStyles ? columnStylesComplex : undefined} tableData={args.useColumnStyles ? tableDataAlt : tableData}></Table>,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=46780%3A27675"
    },
    jest: "Table.test.tsx"
  }
}`,...(C=(D=l.parameters)==null?void 0:D.docs)==null?void 0:C.source},description:{story:"Main Story for the Table component. This must contains the `args`\nand `parameters` properties in this object.",...(j=(R=l.parameters)==null?void 0:R.docs)==null?void 0:j.description}}};var A,N,k;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <Table columnHeaders={columnHeaders} id="table-title-text" tableData={tableData} titleText="Table with visible title" />
}`,...(k=(N=o.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var z,W,B;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Table columnHeaders={columnHeaders} id="table-aria-label" showTitleText={false} tableData={tableData} titleText="Table with aria-label" />
}`,...(B=(W=r.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var q,I,E;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <Table columnHeaders={columnHeaders} id="table-row-dividers" showTitleText={false} showRowDividers tableData={tableData} titleText="Table with row dividers" />
}`,...(E=(I=i.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var M,K,_;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <Table columnHeaders={columnHeaders} id="table-row-headers" showTitleText={false} tableData={tableData} titleText="Table with row headers" useRowHeaders />
}`,...(_=(K=n.parameters)==null?void 0:K.docs)==null?void 0:_.source}}};var V,P,Y;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <Table columnHeaders={columnHeaders} columnHeadersBackgroundColor="var(--nypl-colors-ui-link-secondary)" columnHeadersTextColor="var(--nypl-colors-ui-white)" id="table-custom-header-colors" showRowDividers showTitleText={false} tableData={tableData} titleText="Table with custom header colors" useRowHeaders />
}`,...(Y=(P=u.parameters)==null?void 0:P.docs)==null?void 0:Y.source}}};var J,$,O;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <Table columnHeaders={columnHeadersAltBasic} id="table-native-column-styles" showTitleText={false} tableData={tableDataAltBasic} titleText="Table using native column styles" />
}`,...(O=($=c.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};var F,X,L;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Stack spacing="xl">
      <div>
        <Heading level="h4" size="heading6">
          Without Row Headers
        </Heading>
        <Table columnHeaders={columnHeadersAltBasic} columnStyles={columnStylesBasic} id="table-custom-column-styles" showTitleText={false} tableData={tableDataAltBasic} titleText="Table with custom column styles" />
      </div>
      <div>
        <Heading level="h4" size="heading6">
          With Row Headers
        </Heading>
        <Table columnHeaders={columnHeadersAltBasic} columnStyles={columnStylesBasic} id="table-custom-column-styles-row-headers" showTitleText={false} tableData={tableDataAltBasic} titleText="Table with custom column styles and row headers" useRowHeaders />
      </div>
      <div>
        <Heading level="h4" size="heading6">
          With Empty Style Object
        </Heading>
        <Table columnHeaders={columnHeadersAltBasic} columnStyles={columnStylesEmpty} id="table-custom-column-styles" showTitleText={false} tableData={tableDataAltBasic} titleText="Table with custom column styles" />
      </div>
    </Stack>
}`,...(L=(X=d.parameters)==null?void 0:X.docs)==null?void 0:L.source}}};var U,G,Z;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <Stack spacing="xl">
      <div>
        <Heading level="h4" size="heading5">
          Without Row Headers
        </Heading>
        <Table columnHeaders={columnHeadersAlt} columnStyles={columnStylesComplex} id="table-horizontal-scrolling-wo-row-headers" isScrollable showRowDividers showTitleText={false} tableData={tableDataAlt} titleText="Table with horizontal scrolling and no row headers" />
      </div>
      <div>
        <Heading level="h4" size="heading5">
          With Row Headers
        </Heading>
        <Table columnHeaders={columnHeadersAlt} columnStyles={columnStylesComplex} id="table-horizontal-scrolling-w-row-headers" isScrollable showTitleText={false} tableData={tableDataAlt} titleText="Table with horizontal scrolling and row headers" useRowHeaders />
      </div>
    </Stack>
}`,...(Z=(G=m.parameters)==null?void 0:G.docs)==null?void 0:Z.source}}};var Q,ee,ae;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <Table columnHeaders={characterHeaders} id="jsx-example" showRowDividers tableData={charactersData} />,
  name: "JSX Element"
}`,...(ae=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};const ne=["WithControls","ShowTitleText","HideTitleText","RowDividers","RowHeaders","CustomHeaderColors","NativeColumnStyles","CustomColumnStyles","HorizontalScrolling","JSXElements"],de=Object.freeze(Object.defineProperty({__proto__:null,CustomColumnStyles:d,CustomHeaderColors:u,HideTitleText:r,HorizontalScrolling:m,JSXElements:h,NativeColumnStyles:c,RowDividers:i,RowHeaders:n,ShowTitleText:o,WithControls:l,__namedExportsOrder:ne,default:le},Symbol.toStringTag,{value:"Module"}));export{u as C,r as H,h as J,c as N,i as R,o as S,de as T,l as W,n as a,d as b,m as c};
