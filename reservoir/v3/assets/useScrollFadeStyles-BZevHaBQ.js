import{u as l,j as e,M as d,S as s}from"./iframe-D93LbwGv.js";function o(n){const t={code:"code",h1:"h1",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Hooks/useScrollFadeStyles"}),`
`,e.jsx(t.h1,{id:"usescrollfadestyles",children:"useScrollFadeStyles"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Hook Version"}),e.jsx(t.th,{children:"DS Version"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Added"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"3.5.0"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Latest"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"3.5.0"})})]})]})]}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"useScrollFadeStyles"}),` hook provides a way to manage the visibility of a fade effect on the right edge of a horizontally scrollable element.
It monitors the scroll position and determines whether the fade effect should be shown or hidden based on the scroll state.`]}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.p,{children:"The hook useScrollFadeStyles returns an object with both the scrollableRef and showRightFade boolean value."}),`
`,e.jsx(s,{code:`
const {
scrollableRef,
showRightFade,
} = useScrollFadeStyles();
`,language:"jsx"}),`
`,e.jsx(s,{code:`
// ...
const fadeEffect = () => ({
  position: "absolute",
  top: 0,
  right: 0,
  height: "100%",
  width: "50px",
  background: "linear-gradient(to left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)",
  pointerEvents: "none",
  zIndex: 1,
});

{" "}
<Box>
<div>
  <List type="ul" m="0" ref={scrollableRef} inline noStyling>
    <li>
      <SubNavButton id="subnav-action">Action</SubNavButton>
    </li>
    <li>
      <SubNavLink id="subnav-link">Link</SubNavLink>
    </li>
  </List>
  {showRightFade && <Box sx={fadeEffect()} />}
</div>
</Box>
`,language:"jsx"})]})}function a(n={}){const{wrapper:t}={...l(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{a as default};
