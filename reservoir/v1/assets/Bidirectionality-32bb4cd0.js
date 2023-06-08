import{j as e,a as i,F as f}from"./jsx-runtime-09ad29cb.js";import{M as b,b as l}from"./index-5d3bb37f.js";import{B as h}from"./Button-a3ea41e0.js";import{H as s}from"./Heading-2ec2ea62.js";import{I as p}from"./Image-3405777f.js";import{L as o}from"./Link-0ed02cf7.js";import{S as a}from"./SearchBar-3a276fc1.js";import{T as d}from"./Text-eabcdc0a.js";import{u}from"./index-a14fc4fc.js";import{B as t,V as c,F as m}from"./chakra-ui-layout.esm-b2fa9d31.js";import"./index-f2bd0723.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-359c5387.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-86fba1ca.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-22f77b05.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-944fe3e7.js";import"./index-0a26bc51.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-b629ee11.js";import"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import"./Icon-6616a4b9.js";import"./chakra-ui-hooks.esm-02e82f78.js";import"./chakra-ui-visually-hidden.esm-1c1b3639.js";import"./ComponentWrapper-82a15cf7.js";import"./Select-43c64995.js";import"./Label-2b2058d3.js";import"./utils-acca7d12.js";import"./chakra-ui-form-control.esm-c23b95fa.js";import"./TextInput-3683470d.js";function g(r){const n=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",p:"p",a:"a",em:"em",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3"},u(),r.components);return i(f,{children:[e(b,{title:"Style Guide/Bidirectionality"}),`
`,e(n.h1,{id:"bidirectionality",children:"Bidirectionality"}),`
`,e(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,i(n.ul,{children:[`
`,i(n.li,{children:[`
`,e(o,{href:"#terms",target:"_self",children:"Terms"}),`
`]}),`
`,i(n.li,{children:[`
`,e(o,{href:"#general-information",target:"_self",children:"General Information"}),`
`]}),`
`,i(n.li,{children:[`
`,e(o,{href:"#reservoir-bidirectionality-goal",target:"_self",children:"Reservoir Bidirectionality Goal"}),`
`]}),`
`,i(n.li,{children:[`
`,e(o,{href:"#reservoir-component-implementation",target:"_self",children:"Reservoir Component Implementation"}),`
`]}),`
`,i(n.li,{children:[`
`,e(o,{href:"#application-implementation",target:"_self",children:"Application Implementation"}),`
`]}),`
`]}),`
`,e(n.h2,{id:"terms",children:"Terms"}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:"LTR = left-to-right"}),`
`,e(n.li,{children:"RTL = right-to-left"}),`
`]}),`
`,e(n.h2,{id:"general-information",children:"General Information"}),`
`,e(n.p,{children:`When building user interfaces (UIs) and page layouts, we tend to think in terms
of left-to-right for layout direction. This is because the default language we
build UIs for is English. At NYPL, we serve patrons who speak a variety of
languages including languages such as Arabic or Hebrew which are right-to-left
languages. To correctly render any language, UIs should be mirrored to accomodate
navigation and the passage of time, for example.`}),`
`,e(n.p,{children:"Resources:"}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:e(n.a,{href:"https://material.io/design/usability/bidirectionality.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Material Design's Bidirectionality documentation"})}),`
`]}),`
`,e(n.h2,{id:"reservoir-bidirectionality-goal",children:"Reservoir Bidirectionality Goal"}),`
`,i(n.p,{children:[`While the majority of applications at NYPL will have a LTR direction,
applications will introduce internationalization through different means. While
the Reservoir Design System (DS) has `,e(n.em,{children:"no preference"}),` in how an application is
internationalized, DS components should work appropriately in RTL configurations
in any browser.`]}),`
`,e(n.h2,{id:"reservoir-component-implementation",children:"Reservoir Component Implementation"}),`
`,i(n.p,{children:[`In order to accomplish the goal described above, the DS implementation for RTL
support includes using the CSS properties `,e(n.code,{children:"margin-inline-start"}),`,
`,e(n.code,{children:"margin-inline-end"}),", ",e(n.code,{children:"padding-inline-start"}),", and ",e(n.code,{children:"padding-inline-end"}),` instead of
`,e(n.code,{children:"margin-left"}),", ",e(n.code,{children:"margin-right"}),", ",e(n.code,{children:"padding-left"}),", and ",e(n.code,{children:"padding-right"}),`. These updated
properties are used to apply the correct direction to the HTML element it targets.`]}),`
`,i(n.p,{children:[`In the DS, the components that use these properties use the Chakra shorthands
`,e(n.code,{children:"marginStart"}),", ",e(n.code,{children:"marginEnd"}),", ",e(n.code,{children:"paddingStart"}),", and ",e(n.code,{children:"paddingEnd"}),`. Internally, Chakra
converts these shorthands to the corresponding CSS properties. The DS components
should also use the `,e(n.code,{children:"inline"})," modifier instead of the ",e(n.code,{children:"block"}),` modifier because the
`,e(n.code,{children:"block"})," modifier renders elements unexpectedly in RTL configurations."]}),`
`,i(n.p,{children:["In LTR configurations, the ",e(n.code,{children:"marginStart"})," and ",e(n.code,{children:"paddingStart"}),` properties match
with the `,e(n.code,{children:"marginLeft"})," and ",e(n.code,{children:"paddingLeft"})," properties, and the ",e(n.code,{children:"marginEnd"}),` and
`,e(n.code,{children:"paddingEnd"})," properties match with the ",e(n.code,{children:"marginRight"})," and ",e(n.code,{children:"paddingRight"}),`. In the
RTL configurations, the `,e(n.code,{children:"marginStart"})," and ",e(n.code,{children:"paddingStart"}),` properties now match
with the `,e(n.code,{children:"marginRight"})," and ",e(n.code,{children:"paddingRight"})," properties, and the ",e(n.code,{children:"marginEnd"}),` and
`,e(n.code,{children:"paddingEnd"})," properties now match with the ",e(n.code,{children:"marginLeft"})," and ",e(n.code,{children:"paddingLeft"}),"."]}),`
`,i(n.table,{children:[e(n.thead,{children:i(n.tr,{children:[e(n.th,{children:"CSS Property"}),e(n.th,{children:"RTL Support Property"}),e(n.th,{children:"Equivalent Chakra Shorthand"})]})}),i(n.tbody,{children:[i(n.tr,{children:[e(n.td,{children:e(n.code,{children:"margin-left"})}),e(n.td,{children:e(n.code,{children:"margin-inline-start"})}),e(n.td,{children:e(n.code,{children:"marginStart"})})]}),i(n.tr,{children:[e(n.td,{children:e(n.code,{children:"margin-right"})}),e(n.td,{children:e(n.code,{children:"margin-inline-end"})}),e(n.td,{children:e(n.code,{children:"marginEnd"})})]}),i(n.tr,{children:[e(n.td,{children:e(n.code,{children:"padding-left"})}),e(n.td,{children:e(n.code,{children:"padding-inline-start"})}),e(n.td,{children:e(n.code,{children:"paddingStart"})})]}),i(n.tr,{children:[e(n.td,{children:e(n.code,{children:"padding-right"})}),e(n.td,{children:e(n.code,{children:"padding-inline-end"})}),e(n.td,{children:e(n.code,{children:"paddingEnd"})})]})]})]}),`
`,e(n.h3,{id:"layout-example",children:"Layout Example"}),`
`,i(n.p,{children:["In the following example, the ",e(n.code,{children:"marginStart"})," and ",e(n.code,{children:"marginEnd"}),` properties are used
to give space between the image, the text area, and the button. In the RTL
configuration, these same properties are applied appropriately and mirroring
the original and intentional design layout is achieved in the RTL direction.`]}),`
`,e(l,{code:`
<Flex alignItems="center">
  <Box marginEnd="30px">
    <Image
      alt="Alt text"
      imageType="circle"
      marginEnd="30px"
      size="xsmall"
      src="https://placeimg.com/400/400/animals"
    />
  </Box>
  <VStack align="stretch">
    <Text>Bark Twain</Text>
    <Text size="caption">This is my profile</Text>
  </VStack>
  <Button marginStart="50px">Follow me</Button>
</Flex>
`,language:"jsx"}),`
`,e(t,{border:"1px",borderColor:"ui.border.default",borderRadius:"5px",mb:"m",p:"s",children:i(c,{align:"stretch",gap:"30px",children:[i(t,{children:[e(s,{level:"three",children:"LTR"}),i(m,{alignItems:"center",children:[e(t,{marginEnd:"30px",children:e(p,{alt:"Alt text",imageType:"circle",marginEnd:"30px",size:"xsmall",src:"https://placeimg.com/400/400/animals"})}),i(c,{align:"stretch",children:[e(d,{children:"Bark Twain"}),e(d,{size:"caption",children:"This is my profile"})]}),e(h,{marginStart:"50px",children:"Follow me"})]})]}),i(t,{dir:"rtl",children:[e(s,{level:"three",children:"RTL"}),i(m,{alignItems:"center",children:[e(t,{marginEnd:"30px",children:e(p,{alt:"Alt text",imageType:"circle",marginEnd:"30px",size:"xsmall",src:"https://placeimg.com/400/400/animals"})}),i(c,{align:"stretch",children:[e(d,{children:"Bark Twain"}),e(d,{size:"caption",children:"This is my profile"})]}),e(h,{marginStart:"50px",children:"Follow me"})]})]})]})}),`
`,e(n.p,{children:"Resources:"}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:e(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-start",target:"_blank",rel:"nofollow noopener noreferrer",children:"MDN padding-inline-start"})}),`
`,e(n.li,{children:e(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-end",target:"_blank",rel:"nofollow noopener noreferrer",children:"MDN padding-inline-end"})}),`
`,e(n.li,{children:e(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline-start",target:"_blank",rel:"nofollow noopener noreferrer",children:"MDN margin-inline-start"})}),`
`,e(n.li,{children:e(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline-end",target:"_blank",rel:"nofollow noopener noreferrer",children:"MDN margin-inline-end"})}),`
`]}),`
`,e(n.h2,{id:"application-implementation",children:"Application Implementation"}),`
`,e(n.p,{children:`Components in the DS will support layout and component mirroring, but application
directionality should be implemented at the application level. The following are
general guidelines on how to set up directionality but implementation will be up
to the application and its architecture.`}),`
`,e(n.h3,{id:"dir-html-attribute",children:"dir HTML attribute"}),`
`,i(n.p,{children:["The ",e(n.code,{children:"dir"}),` HTML attribute can be added to elements to indicate its directionality.
The default direction is `,e(n.code,{children:'"ltr"'}),` or left to right. For languages, such as Arabic
or Hebrew, the correct direction is right to left and the proper attribute
implementation is `,e(n.code,{children:'dir="rtl"'}),"."]}),`
`,i(n.p,{children:["The placement of this attribute can be added at the root ",e(n.code,{children:"<html>"}),` element but can
also be placed in specific DOM elements within a page to target specific page
sections. For example, if you only want to target NYPL DS components within your
top-level `,e(n.code,{children:"app"})," class, the ",e(n.code,{children:"dir"})," attribute can be added to that element:"]}),`
`,e(l,{code:`
// Do this
<div className="app" dir="rtl">
  ...
</div>
`,language:"jsx"}),`
`,i(n.p,{children:["An anti-pattern is to add ",e(n.code,{children:"dir"}),` to all the elements you want to change
directionality in. This HTML rule cascades down to its children elements so
there is no need to do the following:`]}),`
`,e(l,{code:`
// Don't do this
<div className="app" dir="rtl">
  <div dir="rtl">
    <p dir="rtl">
      Some text <button dir="rtl">Button</button>
    </p>
  </div>
</div>
`,language:"jsx"}),`
`,i(n.p,{children:["The ",e(n.code,{children:"dir"}),` HTML attribute is the recommended way to change directionality, but
note that this attribute is not supported in Internet Explorer.`]}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:e(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir",target:"_blank",rel:"nofollow noopener noreferrer",children:"MDN dir Documentation"})}),`
`,e(n.li,{children:e(n.a,{href:"https://www.w3.org/International/questions/qa-html-dir",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C internationalization dir QA"})}),`
`]}),`
`,e(n.h3,{id:"direction-css-rule",children:"`direction` CSS rule"}),`
`,i(n.p,{children:["Another option to change text and UI directionality is through the CSS ",e(n.code,{children:"direction"}),`
rule. The default value for all elements is `,e(n.code,{children:"direction: ltr;"}),`. This rule is
supported by all major browsers and can target specific elements through CSS rules:`]}),`
`,e(l,{code:`
.rightToLeft {
  direction: rtl;
}
.leftToRight {
  direction: ltr;
}
`,language:"css"}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:e(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/direction",target:"_blank",rel:"nofollow noopener noreferrer",children:"MDN direction Documentation"})}),`
`,e(n.li,{children:e(n.a,{href:"https://css-tricks.com/almanac/properties/d/direction/",target:"_blank",rel:"nofollow noopener noreferrer",children:"CSS Tricks direction"})}),`
`]}),`
`,e(n.h3,{id:"examples-using-dir-and-direction",children:"Examples using `dir` and `direction`"}),`
`,i(n.p,{children:[`For the following examples, the main element we are targeting is a div wrapper
that sets a 400px width container for a `,e(n.code,{children:"SearchBar"}),` component. Notice that in both
RTL examples (#2 and #3), it's not just the text that aligns right but the element
itself that aligns right. This is why using the CSS rule `,e(n.code,{children:"text-align: right;"}),` is
not the proper way to handle RTL languages since the UI needs to be mirrored (see above).`]}),`
`,e(n.p,{children:`In both RTL (#2 and #3) examples, the directionality changes for the div wrapper
and there is no significant difference, but implementing both in a real application
won't hurt.`}),`
`,e(n.p,{children:"#1 - Left to right default"}),`
`,e(t,{border:"1px",borderColor:"ui.border.default",borderRadius:"5px",mb:"m",p:"s",children:e("div",{style:{width:"400px"},children:e(a,{helperText:"Use a keyword or phrase to search!",id:"example1",isRequired:!0,textInputProps:{labelText:"Item Search",name:"textInputName",placeholder:"Item Search"}})})}),`
`,i(n.p,{children:["#2 - Right to left using ",e(n.code,{children:'dir="rtl"'}),`. Click on "Show code" in the following
block to see its code implementation.`]}),`
`,e(t,{border:"1px",borderColor:"ui.border.default",borderRadius:"5px",mb:"m",p:"s",children:e("div",{dir:"rtl",children:e("div",{style:{width:"400px"},children:e(a,{helperText:"استخدم كلمة رئيسية أو عبارة للبحث!",id:"example2",isRequired:!0,textInputProps:{labelText:"Item Search",name:"textInputName",placeholder:"Item Search"}})})})}),`
`,i(n.p,{children:["#3 - Right to left using ",e(n.code,{children:"direction: rtl;"}),`. Click on "Show code" in the following
block to see its code implementation.`]}),`
`,e(t,{border:"1px",borderColor:"ui.border.default",borderRadius:"5px",mb:"m",p:"s",children:e("div",{style:{direction:"rtl"},children:e("div",{style:{width:"400px"},children:e(a,{helperText:"استخدم كلمة رئيسية أو عبارة للبحث!",id:"example3",isRequired:!0,textInputProps:{labelText:"Item Search",name:"textInputName",placeholder:"Item Search"}})})})})]})}function $(r={}){const{wrapper:n}=Object.assign({},u(),r.components);return n?e(n,Object.assign({},r,{children:e(g,r)})):g(r)}export{$ as default};
//# sourceMappingURL=Bidirectionality-32bb4cd0.js.map
