import{j as r,a as b}from"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import{r as S}from"./index-f2bd0723.js";import{w as H}from"./index-6148c31a.js";import{B as x}from"./Button-a3ea41e0.js";import{P as o}from"./Pagination-f276063d.js";import{a as j}from"./utils-acca7d12.js";import{V as N}from"./chakra-ui-layout.esm-b2fa9d31.js";const g=j(10),M={title:"Components/Navigation/Pagination",component:o,decorators:[H],argTypes:{className:{control:!1},currentPage:{control:!1},getPageHref:{control:!1},id:{control:!1},initialPage:{control:!1,table:{defaultValue:{summary:1}}},onPageChange:{control:!1}}},a={args:{className:void 0,getPageHref:g.getPageHref,id:"pagination-id",initialPage:g.computedCurrentPage||1,pageCount:10},name:"Pagination with URL Updates",render:e=>r(o,{...e,onPageChange:void 0}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=17226%3A932"},jest:["Pagination.test.tsx"]}},n={args:{className:void 0,id:"pagination-id-2",initialPage:7,onPageChange:e=>{console.log(`Current page: ${e}`)},pageCount:100},name:"Pagination with Unchanging URL",render:e=>r(o,{...e,getPageHref:void 0}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=17226%3A932"},jest:["Pagination.test.tsx"]}};function v(){const[e,s]=S.useState(1),w=()=>s(1),U=i=>s(i);return b(N,{align:"start",spacing:6,children:[r(o,{pageCount:10,currentPage:e,onPageChange:i=>U(i)}),r(x,{id:"go-to-btn",type:"button",onClick:w,children:"Go to Page 1"})]})}const t={render:()=>r(v,{}),name:"Forcing a Page Change Programmatically"};var c,d,p,m,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source},description:{story:'The Pagination component doesn\'t have a "main" story. Both variations are\nequally important with two separate features so they will both be highlighted.\nThis must contains the `args` and `parameters` properties in this object.',...(l=(m=a.parameters)==null?void 0:m.docs)==null?void 0:l.description}}};var P,f,u;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    className: undefined,
    id: "pagination-id-2",
    initialPage: 7,
    onPageChange: selectedPage => {
      console.log(\`Current page: \${selectedPage}\`);
    },
    pageCount: 100
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
}`,...(u=(f=n.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var h,C,y;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <CurrentPagePaginationExample />,
  name: "Forcing a Page Change Programmatically"
}`,...(y=(C=t.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};const A=["URLUpdates","UnchangingURL","UpdateProgrammatically"],I=Object.freeze(Object.defineProperty({__proto__:null,URLUpdates:a,UnchangingURL:n,UpdateProgrammatically:t,__namedExportsOrder:A,default:M},Symbol.toStringTag,{value:"Module"}));export{I as P,a as U,n as a,t as b};
//# sourceMappingURL=Pagination.stories-bd519856.js.map
