import{j as r,a as n,F as d}from"./jsx-runtime-09ad29cb.js";import{M as h,D as p,C as t,A as m,b as u}from"./index-42243e0e.js";import{P as l,W as o,L as f,C as g,a as b,b as v,c as y,I as w,d as x}from"./ProgressIndicator.stories-337a938d.js";import{L as i}from"./Link-0ed02cf7.js";import{u as c}from"./index-a14fc4fc.js";import"./index-f2bd0723.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-b32021bd.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-86fba1ca.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-22f77b05.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-944fe3e7.js";import"./index-0a26bc51.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-b629ee11.js";import"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import"./chakra-ui-layout.esm-b2fa9d31.js";import"./index-6148c31a.js";import"./ProgressIndicator-38dd35d6.js";import"./Label-2b2058d3.js";import"./SimpleGrid-e54e0b68.js";import"./Icon-6616a4b9.js";function s(a){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",a:"a"},c(),a.components);return n(d,{children:[r(h,{of:l}),`
`,r(e.h1,{id:"progressindicator",children:"ProgressIndicator"}),`
`,n(e.table,{children:[r(e.thead,{children:n(e.tr,{children:[r(e.th,{children:"Component Version"}),r(e.th,{children:"DS Version"})]})}),n(e.tbody,{children:[n(e.tr,{children:[r(e.td,{children:"Added"}),r(e.td,{children:r(e.code,{children:"0.25.4"})})]}),n(e.tr,{children:[r(e.td,{children:"Latest"}),r(e.td,{children:r(e.code,{children:"1.5.0"})})]})]})]}),`
`,r(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,r(i,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,n(e.li,{children:[`
`,r(i,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,n(e.li,{children:[`
`,r(i,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,n(e.li,{children:[`
`,r(i,{href:"#linear-type",target:"_self",children:"Linear Type"}),`
`]}),`
`,n(e.li,{children:[`
`,r(i,{href:"#circular-type",target:"_self",children:"Circular Type"}),`
`]}),`
`,n(e.li,{children:[`
`,r(i,{href:"#sizing",target:"_self",children:"Sizing"}),`
`]}),`
`,n(e.li,{children:[`
`,r(i,{href:"#labels",target:"_self",children:"Labels"}),`
`]}),`
`,n(e.li,{children:[`
`,r(i,{href:"#indeterminate-state",target:"_self",children:"Indeterminate State"}),`
`]}),`
`,n(e.li,{children:[`
`,r(i,{href:"#dark-mode",target:"_self",children:"Dark Mode"}),`
`]}),`
`,n(e.li,{children:[`
`,r(i,{href:"#get-input-values",target:"_self",children:"Get Input Values"}),`
`]}),`
`]}),`
`,r(e.h2,{id:"overview",children:"Overview"}),`
`,r(p,{of:l}),`
`,r(e.h2,{id:"component-props",children:"Component Props"}),`
`,r(t,{of:o}),`
`,r(m,{of:o}),`
`,r(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n(e.p,{children:[`Chakra UI takes care of the internal accessibility attributes for this
component. Specifically, the `,r(e.code,{children:"role"})," attribute is set to ",r(e.code,{children:"progressbar"}),` and the
`,r(e.code,{children:"aria-valuenow"})," attribute is set to the value of the ",r(e.code,{children:"value"}),` prop, or the
percentage completion value. The min and max values are set to "0" and "100",
respectively, and are set with the `,r(e.code,{children:"aria-valuemin"})," and ",r(e.code,{children:"aria-valuemax"}),`
attributes. This makes this component and its value(s) visible to screen
readers.`]}),`
`,n(e.p,{children:["When ",r(e.code,{children:"showLabel"})," is set to false, the ",r(e.code,{children:"labelText"}),` value will be set to the main
`,r(e.code,{children:"<div>"}),"'s ",r(e.code,{children:"aria-label"}),` attribute. This is the same div that contains the
`,r(e.code,{children:"aria-valuemin"}),", ",r(e.code,{children:"aria-valuemax"}),", and ",r(e.code,{children:"aria-valuenow"})," attributes."]}),`
`,r(e.p,{children:"Resources:"}),`
`,n(e.ul,{children:[`
`,r(e.li,{children:r(e.a,{href:"https://www.digitala11y.com/progressbar-role/",target:"_blank",rel:"nofollow noopener noreferrer",children:"DigitalA11y WAI-ARIA: ROLE=PROGRESSBAR"})}),`
`,r(e.li,{children:r(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_progressbar_role",target:"_blank",rel:"nofollow noopener noreferrer",children:"MDN Using the progressbar role"})}),`
`,r(e.li,{children:r(e.a,{href:"https://chakra-ui.com/docs/components/feedback/progress",target:"_blank",rel:"nofollow noopener noreferrer",children:"Chakra UI Progress"})}),`
`,r(e.li,{children:r(e.a,{href:"https://chakra-ui.com/docs/components/feedback/circular-progress",target:"_blank",rel:"nofollow noopener noreferrer",children:"Chakra UI Circular Progress"})}),`
`]}),`
`,r(e.h2,{id:"linear-type",children:"Linear Type"}),`
`,r(e.p,{children:`Progress bars are preferred in vertically narrow areas such as tables, cards,
dialogs, etc.`}),`
`,r(t,{of:f}),`
`,r(e.h2,{id:"circular-type",children:"Circular Type"}),`
`,n(e.p,{children:[`The circular progress type is preferred for large content areas and for
full-screen loading. Set the `,r(e.code,{children:"indicatorType"})," prop to ",r(e.code,{children:'"circular"'})," for this type."]}),`
`,r(t,{of:g}),`
`,r(e.h2,{id:"sizing",children:"Sizing"}),`
`,n(e.p,{children:[`The starting height for the progress bar is 4px on mobile and 8px for desktop.
The `,r(e.code,{children:"size"}),` prop can be used to optionally set the height to 4px for desktop
through the `,r(e.code,{children:"ProgressIndicatorSizes.Small"})," value."]}),`
`,r(e.p,{children:r(e.code,{children:'size="small"'})}),`
`,r(t,{of:b}),`
`,n(e.p,{children:[`The starting size for the circular progress is 48px and can be made smaller to
24px with the `,r(e.code,{children:"size"}),` prop. The small 24px size can be used for inline local
changes in content. Note that in the small size, the label text and the
percentage will not displayed.`]}),`
`,r(e.p,{children:r(e.code,{children:'size="small"'})}),`
`,r(t,{of:v}),`
`,r(e.h2,{id:"labels",children:"Labels"}),`
`,n(e.p,{children:["The ",r(e.code,{children:"labelText"})," value and the ",r(e.code,{children:"value"}),` percentage are displayed by default. They
can be hidden through the `,r(e.code,{children:"showLabel"})," prop."]}),`
`,r(e.p,{children:r(e.code,{children:"showLabel={false}"})}),`
`,n(e.p,{children:["Accessibility Note: when ",r(e.code,{children:"showLabel"})," is false, the ",r(e.code,{children:"aria-label"}),` prop is set in
the progress element to provide a description of the progress for screen
readers.`]}),`
`,r(t,{of:y}),`
`,r(e.h2,{id:"indeterminate-state",children:"Indeterminate State"}),`
`,n(e.p,{children:["When the ",r(e.code,{children:"isIndeterminate"})," prop is set to true, the ",r(e.code,{children:"value"}),` prop is ignored and
the state is set to an animated indeterminate state. This is often used when the
exact value or progress of the task is unknown.`]}),`
`,r(t,{of:w}),`
`,r(e.h2,{id:"dark-mode",children:"Dark Mode"}),`
`,n(e.p,{children:["The ",r(e.code,{children:"darkMode"}),` prop is deprecated and should not be used. This component comes
with built-in dark mode styles that display automatically if dark mode is turned
on.`]}),`
`,r(e.h2,{id:"get-input-values",children:"Get Input Values"}),`
`,n(e.p,{children:["In the following example, we are setting the ",r(e.code,{children:"value"}),` prop based on a timer that
increases the value every second by 10. Once it reaches 100, it resets to 0.
This is a very simple example using `,r(e.code,{children:"React.useState"}),` to manage the state but in
a real application the value would come from a data source or server.`]}),`
`,r(u,{code:`
// Example code
function ProgressIndicatorExample() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setValue((value) => (value === 100 ? 0 : value + 10));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <SimpleGrid columns={1} gap="grid.m">
      <ProgressIndicator
        id="example"
        labelText="Progress example"
        value={value}
      />
      <ProgressIndicator
        id="example-circular"
        indicatorType="circular"
        labelText="Progress example"
        value={value}
      />
    </SimpleGrid>
  );
}
`,language:"jsx"}),`
`,r(t,{of:x})]})}function K(a={}){const{wrapper:e}=Object.assign({},c(),a.components);return e?r(e,Object.assign({},a,{children:r(s,a)})):s(a)}export{K as default};
//# sourceMappingURL=ProgressIndicator-6f54b467.js.map
