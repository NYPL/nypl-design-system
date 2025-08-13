import{ai as o,j as n,aG as x,r as b,V as j,o as S}from"./iframe-CFLVJZOZ.js";const g=x(10),H={title:"Components/Navigation/Pagination",component:o,argTypes:{className:{control:!1},currentPage:{control:!1},getPageHref:{control:!1},id:{control:!1},initialPage:{control:!1,table:{defaultValue:{summary:"1"}}},onPageChange:{control:!1}}},a={args:{className:void 0,getPageHref:g.getPageHref,id:"pagination-id",initialPage:g.computedCurrentPage||1,pageCount:10},name:"Pagination with URL Updates",render:e=>n.jsx(o,{...e,onPageChange:void 0}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=17226%3A932"},jest:["Pagination.test.tsx"]}},t={args:{className:void 0,id:"pagination-id-2",initialPage:7,onPageChange:e=>{console.log(`Current page: ${e}`)},pageCount:10},name:"Pagination with Unchanging URL",render:e=>n.jsx(o,{...e,getPageHref:void 0}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=17226%3A932"},jest:["Pagination.test.tsx"]}};function N(){const[e,i]=b.useState(1),w=()=>i(1),U=s=>i(s);return n.jsxs(j,{align:"start",spacing:6,children:[n.jsx(o,{pageCount:10,currentPage:e,onPageChange:s=>U(s)}),n.jsx(S,{id:"go-to-btn",type:"button",onClick:w,children:"Go to Page 1"})]})}const r={render:()=>n.jsx(N,{}),name:"Forcing a Page Change Programmatically"};var c,d,l,p,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    className: undefined,
    getPageHref: hrefProps.getPageHref,
    id: "pagination-id",
    initialPage: hrefProps.computedCurrentPage || 1,
    pageCount: 10
  },
  name: "Pagination with URL Updates",
  render: args => <Pagination {...args} onPageChange={undefined} />,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=17226%3A932"
    },
    jest: ["Pagination.test.tsx"]
  }
}`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source},description:{story:'The Pagination component doesn\'t have a "main" story. Both variations are\nequally important with two separate features so they will both be highlighted.\nThis must contains the `args` and `parameters` properties in this object.',...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.description}}};var P,u,f;t.parameters={...t.parameters,docs:{...(P=t.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    className: undefined,
    id: "pagination-id-2",
    initialPage: 7,
    onPageChange: selectedPage => {
      console.log(\`Current page: \${selectedPage}\`);
    },
    pageCount: 10
  },
  name: "Pagination with Unchanging URL",
  render: args => <Pagination {...args} getPageHref={undefined} />,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=17226%3A932"
    },
    jest: ["Pagination.test.tsx"]
  }
}`,...(f=(u=t.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var h,C,y;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <CurrentPagePaginationExample />,
  name: "Forcing a Page Change Programmatically"
}`,...(y=(C=r.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};const M=["URLUpdates","UnchangingURL","UpdateProgrammatically"],v=Object.freeze(Object.defineProperty({__proto__:null,URLUpdates:a,UnchangingURL:t,UpdateProgrammatically:r,__namedExportsOrder:M,default:H},Symbol.toStringTag,{value:"Module"}));export{v as P,a as U,t as a,r as b};
