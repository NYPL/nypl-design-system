import{j as e,a}from"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import{r as h}from"./index-0cbcd92a.js";import{a as x}from"./chunk-AY7I2SME-5eb1ab46.js";import{w as F}from"./index-6148c31a.js";import{N as t}from"./NewsletterSignup-1e975f5c.js";import{s as J}from"./types-ee6958f5.js";import{H as r}from"./Heading-7eebc756.js";import{L}from"./Link-24c1437a.js";import{T as P}from"./Text-d88b2f7a.js";import{V as M,B as d}from"./chakra-ui-layout.esm-e0dbb94e.js";const U={title:"Components/Form Elements/NewsletterSignup",component:t,decorators:[F],parameters:{jest:["NewsletterSignup.test.tsx"]},argTypes:{className:{control:!1},confirmationHeading:{control:"text"},confirmationText:{control:"text"},descriptionText:{control:"text",table:{defaultValue:{summary:"Stay connected with the latest research news from NYPL, including information about our events, programs, exhibitions, and collections."}}},errorHeading:{control:"text",table:{defaultValue:{summary:"Oops! Something went wrong."}}},errorText:{control:"text"},formHelperText:{control:"text"},id:{control:!1},newsletterSignupType:{control:"select",options:J,table:{defaultValue:{summary:"whatsOn"}}},onChange:{control:!1,action:"onChange"},onSubmit:{control:!1,action:"onSubmit"},privacyPolicyLink:{control:"text",table:{defaultValue:{summary:"https://www.nypl.org/help/about-nypl/legal-notices/privacy-policy"}}},title:{control:!1,mapping:{default:e(r,{noSpace:!0,size:"heading3",text:"Sign Up for Our Newsletter"})},table:{control:"text",defaultValue:{summary:'<Heading noSpace size="heading3" text="Sign Up for Our Newsletter" />'}}},valueEmail:{control:!1},view:{control:"select",options:["form","submitting","confirmation","error"],table:{defaultValue:{summary:"form"}}}}},i="Thank you for signing up!",o="You can update your email subscription preferences at any time using the links at the bottom of the email.",l={args:{className:void 0,confirmationHeading:i,confirmationText:o,descriptionText:void 0,errorHeading:void 0,errorText:void 0,formHelperText:void 0,id:void 0,isInvalidEmail:!1,newsletterSignupType:void 0,onChange:n=>{x("onChange")(n.target.value)},onSubmit:n=>{n.preventDefault(),x("onSubmit")(n.target[0].value)},privacyPolicyLink:void 0,title:void 0,valueEmail:void 0,view:void 0},parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=80849%3A174194&mode=dev"},jest:"NewsletterSignup.test.tsx"},render:n=>e(t,{...n})};let s=0;function W(){const[n,p]=h.useState("form"),[A,v]=h.useState(""),_=()=>{s++,p(s===1?"confirmation":s===2?"error":"form"),setTimeout(()=>{p("form"),v("")},2e3)};return h.useEffect(()=>{s===3&&(s=0)}),e(t,{id:"interactive",view:n,isInvalidEmail:s===3,valueEmail:A,onChange:m=>{console.log(`onChange Email Input value: ${m.target.value}`),v(m.target.value)},onSubmit:m=>{m.preventDefault(),p("submitting"),console.log(`onSubmit Email Input value: ${m.target.email.value}`),setTimeout(_,2e3)},confirmationHeading:i,confirmationText:o})}const c={render:()=>e(W,{}),name:"Interactive Example"},u={render:()=>e(t,{id:"jsx-description-text",view:"form",onChange:()=>{},onSubmit:()=>{},descriptionText:a(P,{noSpace:!0,size:"body2",children:["If the description text needs to have ",e("i",{children:"special"})," styling or needs to have a ",e(L,{href:"https://corgiorgy.com/",children:"nested link"})]}),confirmationHeading:i,confirmationText:o})},g={render:()=>a(M,{align:"stretch",spacing:"l",children:[e(t,{id:"string-title",view:"form",onChange:()=>{},onSubmit:()=>{},title:"Custom string heading",confirmationHeading:i,confirmationText:o}),e(t,{id:"custom-heading",view:"form",onChange:()=>{},onSubmit:()=>{},title:e(r,{level:"h4",text:"Custom h4 DS Heading"}),confirmationHeading:i,confirmationText:o})]})},f={render:()=>a(M,{align:"stretch",spacing:"l",children:[a(d,{children:[e(r,{level:"h3",size:"heading6",children:"Invalid Email"}),e(t,{id:"invalid-email",isInvalidEmail:!0,view:"form",onChange:()=>{},onSubmit:()=>{},confirmationHeading:i,confirmationText:o})]}),a(d,{children:[e(r,{level:"h3",size:"heading6",children:"Submitting View / Disabled"}),e(t,{id:"submitting-view",view:"submitting",onChange:()=>{},onSubmit:()=>{},confirmationHeading:i,confirmationText:o})]}),a(d,{children:[e(r,{level:"h3",size:"heading6",children:"Confirmation View"}),e(t,{id:"confirmation-view",view:"confirmation",onChange:()=>{},onSubmit:()=>{},confirmationHeading:i,confirmationText:o})]}),a(d,{children:[e(r,{level:"h3",size:"heading6",children:"Default Error View"}),e(t,{id:"error-view",view:"error",onChange:()=>{},onSubmit:()=>{},confirmationHeading:i,confirmationText:o})]}),a(d,{children:[e(r,{level:"h3",size:"heading6",children:"Error View with Custom Error Message"}),e(t,{id:"error-view",view:"error",onChange:()=>{},onSubmit:()=>{},confirmationHeading:i,confirmationText:o,errorHeading:"An error has occurred.",errorText:a(P,{noSpace:!0,size:"body2",children:["Please refresh this page and try again. If this error persists,"," ",e(L,{href:"mailto:enews@nypl.org?subject=Please re-activate my e-mail address",children:"contact our e-mail team"}),"."]})})]})]})},q=()=>{const n=document.getElementById("anchor--components-form-elements-newslettersignup--with-controls");n.focus(),n.scrollIntoView({behavior:"smooth"})};setTimeout(q,2e3);var S,w,C,b,T;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    className: undefined,
    confirmationHeading: defaultConfirmationHeading,
    confirmationText: defaultConfirmationText,
    descriptionText: undefined,
    errorHeading: undefined,
    errorText: undefined,
    formHelperText: undefined,
    id: undefined,
    isInvalidEmail: false,
    newsletterSignupType: undefined,
    onChange: event => {
      action("onChange")(event.target.value);
    },
    onSubmit: event => {
      event.preventDefault();
      action("onSubmit")(event.target[0].value);
    },
    privacyPolicyLink: undefined,
    title: undefined,
    valueEmail: undefined,
    view: undefined
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=80849%3A174194&mode=dev"
    },
    jest: "NewsletterSignup.test.tsx"
  },
  render: args => <NewsletterSignup {...args} />
}`,...(C=(w=l.parameters)==null?void 0:w.docs)==null?void 0:C.source},description:{story:"Main Story for the NewsletterSignup component. This must contains the `args`\nand `parameters` properties in this object.",...(T=(b=l.parameters)==null?void 0:b.docs)==null?void 0:T.description}}};var H,y,E;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <NewsletterSignupOnSubmitExampleComponent />,
  name: "Interactive Example"
}`,...(E=(y=c.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var N,V,I;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <NewsletterSignup id="jsx-description-text" view="form" onChange={() => {}} onSubmit={() => {}} descriptionText={<Text noSpace size="body2">
          If the description text needs to have <i>special</i> styling or needs
          to have a <Link href="https://corgiorgy.com/">nested link</Link>
        </Text>} confirmationHeading={defaultConfirmationHeading} confirmationText={defaultConfirmationText} />
}`,...(I=(V=u.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var k,z,j;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <VStack align="stretch" spacing="l">
      <NewsletterSignup id="string-title" view="form" onChange={() => {}} onSubmit={() => {}} title="Custom string heading" confirmationHeading={defaultConfirmationHeading} confirmationText={defaultConfirmationText} />
      <NewsletterSignup id="custom-heading" view="form" onChange={() => {}} onSubmit={() => {}} title={<Heading level="h4" text="Custom h4 DS Heading" />} confirmationHeading={defaultConfirmationHeading} confirmationText={defaultConfirmationText} />
    </VStack>
}`,...(j=(z=g.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};var B,D,O;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <VStack align="stretch" spacing="l">
      <Box>
        <Heading level="h3" size="heading6">
          Invalid Email
        </Heading>
        <NewsletterSignup id="invalid-email" isInvalidEmail view="form" onChange={() => {}} onSubmit={() => {}} confirmationHeading={defaultConfirmationHeading} confirmationText={defaultConfirmationText} />
      </Box>
      <Box>
        <Heading level="h3" size="heading6">
          Submitting View / Disabled
        </Heading>
        <NewsletterSignup id="submitting-view" view="submitting" onChange={() => {}} onSubmit={() => {}} confirmationHeading={defaultConfirmationHeading} confirmationText={defaultConfirmationText} />
      </Box>
      <Box>
        <Heading level="h3" size="heading6">
          Confirmation View
        </Heading>
        <NewsletterSignup id="confirmation-view" view="confirmation" onChange={() => {}} onSubmit={() => {}} confirmationHeading={defaultConfirmationHeading} confirmationText={defaultConfirmationText} />
      </Box>
      <Box>
        <Heading level="h3" size="heading6">
          Default Error View
        </Heading>
        <NewsletterSignup id="error-view" view="error" onChange={() => {}} onSubmit={() => {}} confirmationHeading={defaultConfirmationHeading} confirmationText={defaultConfirmationText} />
      </Box>
      <Box>
        <Heading level="h3" size="heading6">
          Error View with Custom Error Message
        </Heading>
        <NewsletterSignup id="error-view" view="error" onChange={() => {}} onSubmit={() => {}} confirmationHeading={defaultConfirmationHeading} confirmationText={defaultConfirmationText} errorHeading="An error has occurred." errorText={<Text noSpace size="body2">
              Please refresh this page and try again. If this error persists,{" "}
              <Link href="mailto:enews@nypl.org?subject=Please re-activate my e-mail address">
                contact our e-mail team
              </Link>
              .
            </Text>} />
      </Box>
    </VStack>
}`,...(O=(D=f.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};const X=["WithControls","NewsletterSignupOnSubmitExample","DescriptionUsingJSXElements","CustomHeadings","ComponentStates"],ae=Object.freeze(Object.defineProperty({__proto__:null,ComponentStates:f,CustomHeadings:g,DescriptionUsingJSXElements:u,NewsletterSignupOnSubmitExample:c,WithControls:l,__namedExportsOrder:X,default:U},Symbol.toStringTag,{value:"Module"}));export{g as C,u as D,ae as N,l as W,c as a,f as b};
//# sourceMappingURL=NewsletterSignup.stories-99d82adc.js.map
