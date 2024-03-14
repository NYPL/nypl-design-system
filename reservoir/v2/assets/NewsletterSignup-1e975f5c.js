import{a as t,j as e}from"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import{r as z,R as m}from"./index-0cbcd92a.js";import{B as D}from"./Button-948e9be8.js";import{F,a as c}from"./Form-b79b3734.js";import{I as p}from"./Icon-4eeffe51.js";import{L as P}from"./Link-24c1437a.js";import{T as n}from"./Text-d88b2f7a.js";import{T as R}from"./TextInput-70995d87.js";import{H as M}from"./Heading-7eebc756.js";import{u as j}from"./useDSHeading-94e72700.js";import{u as O}from"./useNYPLBreakpoints-2881f83d.js";import{a as U,u as W,b as f,V as g,B as o,S as Y}from"./chakra-ui-layout.esm-e0dbb94e.js";const G="Stay connected with the latest research news from NYPL, including information about our events, programs, exhibitions, and collections.",J=e(M,{noSpace:!0,size:"heading3",text:"Sign Up for Our Newsletter"}),h=U(z.forwardRef(({className:y,confirmationHeading:b,confirmationText:x,descriptionText:a=G,errorHeading:w="Oops! Something went wrong.",errorText:r,formHelperText:v,id:S,isInvalidEmail:T=!1,newsletterSignupType:V="blogs",onChange:q,onSubmit:N,privacyPolicyLink:_="https://www.nypl.org/help/about-nypl/legal-notices/privacy-policy",valueEmail:E,title:k,view:i="form",...I},H)=>{const{isLargerThanMobile:A}=O(),l=W("NewsletterSignup",{newsletterSignupType:V}),B=f(null,"dark.ui.typography.body"),d=f("ui.error.primary","dark.ui.error.primary"),C=i==="form"||i==="submitting",L=j({title:k,id:S,customDefaultHeading:J}),s=m.useRef(null);return m.useEffect(()=>{var u;(u=s.current)==null||u.focus()},[i]),t(Y,{direction:A?"row":"column",ref:H,__css:l,...I,children:[t(g,{__css:l.pitch,alignItems:"flex-start",children:[L,a?typeof a=="string"?e(n,{noSpace:!0,size:"body2",children:a}):a:null,e(P,{href:_,type:"external",isUnderlined:!1,__css:l.privacy,children:"Privacy Policy"})]}),t(g,{__css:l.action,children:[C&&t(F,{id:"newsletter-form",onSubmit:N,children:[e(c,{children:e(R,{id:"email-input",isDisabled:i==="submitting",isRequired:!0,invalidText:"Please enter a valid email address.",isInvalid:T,labelText:"Email Address",helperText:v,name:"email",onChange:q,placeholder:"Enter your email address",type:"email",value:E})},"formfield-input"),e(c,{children:e(D,{id:"submit",isDisabled:i==="submitting",type:"submit",children:"Submit"})},"formfield-button")]}),i==="confirmation"&&t(o,{className:"feedback-body response",margin:"auto",ref:s,tabIndex:-1,width:"100%",children:[t(o,{display:"flex",marginBottom:"xs",alignItems:{md:"center"},children:[e(p,{color:B,name:"actionCheckCircleFilled",size:"large"}),e(n,{size:"subtitle1",marginStart:"xs",marginBottom:"unset",fontWeight:"medium",children:b})]}),e(n,{noSpace:!0,size:"body2",children:x})]}),i==="error"&&t(o,{className:"feedback-body response",margin:"auto",ref:s,tabIndex:-1,width:"100%",children:[t(o,{display:"flex",marginBottom:"xs",alignItems:{md:"center"},children:[e(p,{color:d,name:"errorFilled",size:"large"}),e(n,{color:d,size:"subtitle1",marginStart:"xs",marginBottom:"unset",fontWeight:"medium",children:w})]}),r?typeof r=="string"?e(n,{noSpace:!0,size:"body2",children:r}):r:null]})]})]})}));try{h.displayName="NewsletterSignup",h.__docgenInfo={description:`The NewsletterSignup component provides a way for patrons to register for an
email-based newsletter distribution list.`,displayName:"NewsletterSignup",props:{title:{defaultValue:null,description:"Optional string value used to set the text for a `Heading` component, or\na DS Heading component that can be passed in.",name:"title",required:!1,type:{name:"string | Element"}},view:{defaultValue:null,description:"Used to specify what is displayed in the component form/feedback area.",name:"view",required:!1,type:{name:"NewsletterSignupViewType"}},className:{defaultValue:null,description:"Additional class name to add.",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"ID that other components can cross-reference for accessibility purposes",name:"id",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"A handler function that will be called when the text input changes.",name:"onChange",required:!0,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}},onSubmit:{defaultValue:null,description:"A handler function that will be called when the form is submitted.",name:"onSubmit",required:!0,type:{name:"(event: FormEvent<any>) => void"}},descriptionText:{defaultValue:null,description:"Appears below the title to provide details about the newsletter. Accepts a string or an element.",name:"descriptionText",required:!1,type:{name:"string | Element"}},confirmationHeading:{defaultValue:null,description:"Text displayed next to the confirmation icon after a successful email submission",name:"confirmationHeading",required:!0,type:{name:"string"}},confirmationText:{defaultValue:null,description:"Detail text for the confirmation view",name:"confirmationText",required:!0,type:{name:"string"}},errorHeading:{defaultValue:null,description:"Text displayed next to the error icon in case of an error in the email submission process",name:"errorHeading",required:!1,type:{name:"string"}},errorText:{defaultValue:null,description:"Appears below the title to provide details about next steps in case of an error. Accepts a string or an element.",name:"errorText",required:!1,type:{name:"string | Element"}},formHelperText:{defaultValue:null,description:`Appears below the input field's example text to provide any additional instructions. Accepts a string or
an element.`,name:"formHelperText",required:!1,type:{name:"string | Element"}},isInvalidEmail:{defaultValue:null,description:"Toggles the invalid state for the email field.",name:"isInvalidEmail",required:!1,type:{name:"boolean"}},newsletterSignupType:{defaultValue:null,description:`Value to determine the section color highlight. The default is set to "blogs" as it uses the
"ui.border.deafult" color.`,name:"newsletterSignupType",required:!1,type:{name:"string"}},privacyPolicyLink:{defaultValue:null,description:"Link to the relevant privacy policy page.",name:"privacyPolicyLink",required:!1,type:{name:"string"}},valueEmail:{defaultValue:null,description:"The value of the email text input field.",name:"valueEmail",required:!1,type:{name:"string"}}}}}catch{}export{h as N};
//# sourceMappingURL=NewsletterSignup-1e975f5c.js.map
