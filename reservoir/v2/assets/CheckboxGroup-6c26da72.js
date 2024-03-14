import{a as G,j as a}from"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import{r as I,R as m}from"./index-0cbcd92a.js";import{C as P}from"./Checkbox-6e7b1e16.js";import{F as N}from"./Fieldset-46002ef9.js";import{H as D}from"./HelperErrorText-55c57f50.js";import{s as f}from"./spacing-06362f80.js";import{a as F}from"./chakra-ui-checkbox.esm-772830ca.js";import{a as O,u as S,S as W}from"./chakra-ui-layout.esm-e0dbb94e.js";const b=O(I.forwardRef((o,x)=>{const{children:y,defaultValue:n=[],helperText:T,id:t,invalidText:g,isDisabled:w=!1,isFullWidth:k=!1,isInvalid:r=!1,isRequired:l=!1,labelText:q,layout:i="column",name:C,onChange:s,showHelperInvalidText:v=!0,showLabel:V=!0,showRequiredLabel:R=!0,value:u,..._}=o,L=r?g:T,d=[],H=i==="column"?f.input.group.default.vstack:f.input.group.default.hstack,p=n&&s?{defaultValue:n,onChange:s}:{};u&&(p.value=u),t||console.warn("NYPL Reservoir CheckboxGroup: This component's required `id` prop was not passed."),m.Children.map(y,(e,h)=>{if(e.type!==P&&(e.props.mdxType&&e.props.mdxType==="Checkbox"||console.warn("NYPL Reservoir CheckboxGroup: Only `Checkbox` components are allowed as children.")),e!=null){const E={key:h,id:`${t}-${h}`,name:C,isDisabled:w,isInvalid:r,isRequired:l};d.push(m.cloneElement(e,E))}});const c=S("CheckboxGroup",{isFullWidth:k});return G(N,{id:`${t}-checkbox-group`,isLegendHidden:!V,isRequired:l,legendText:q,showRequiredLabel:R,..._,__css:c,children:[a(F,{...p,children:a(W,{id:t,"data-testid":"checkbox-group",direction:[i],spacing:H,ref:x,children:d})}),a(D,{id:`${t}-helperErrorText`,isInvalid:r,isRenderedText:v,text:L,__css:c.helperErrorText})]})}));try{b.displayName="CheckboxGroup",b.__docgenInfo={description:"Wrapper component to wrap `Checkbox` components. Can be displayed in a\ncolumn or in a row. The `CheckboxGroup` component renders all the necessary\nwrapping and associated text elements, but the checkbox input elements\n_need_ to be child `Checkbox` components from the NYPL Design System.",displayName:"CheckboxGroup",props:{id:{defaultValue:null,description:"ID that other components can cross reference for accessibility purposes",name:"id",required:!0,type:{name:"string"}},children:{defaultValue:null,description:"Any child node passed to the component.",name:"children",required:!0,type:{name:"ReactNode"}},name:{defaultValue:null,description:"The `name` prop indicates the form group for all the `Checkbox` children.",name:"name",required:!0,type:{name:"string"}},layout:{defaultValue:null,description:"Renders the checkbox buttons in a row or column (default).",name:"layout",required:!1,type:{name:'"column" | "row"'}},isDisabled:{defaultValue:null,description:"Adds the 'disabled' prop to the input when true.",name:"isDisabled",required:!1,type:{name:"boolean"}},defaultValue:{defaultValue:null,description:"Populates the initial value of the input",name:"defaultValue",required:!1,type:{name:"string[]"}},onChange:{defaultValue:null,description:"The action to perform on the `<input>`'s onChange function",name:"onChange",required:!1,type:{name:"(value: string[]) => void"}},helperText:{defaultValue:null,description:"Optional string to populate the HelperErrorText for standard state",name:"helperText",required:!1,type:{name:"HelperErrorTextType"}},invalidText:{defaultValue:null,description:"Optional string to populate the HelperErrorText for error state",name:"invalidText",required:!1,type:{name:"HelperErrorTextType"}},isInvalid:{defaultValue:null,description:"A`dds the 'aria-invalid' attribute to the input and\nsets the error state when true.",name:"isInvalid",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:"Adds the 'required' attribute to the input when true.",name:"isRequired",required:!1,type:{name:"boolean"}},labelText:{defaultValue:null,description:'The checkbox group label displayed in a `legend` element if `showlabel` is\ntrue, or an "aria-label" if `showLabel` is false.',name:"labelText",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"The values to programmatically update the selected `Checkbox`es.",name:"value",required:!1,type:{name:"string[]"}},showHelperInvalidText:{defaultValue:null,description:"Offers the ability to hide the helper/invalid text.",name:"showHelperInvalidText",required:!1,type:{name:"boolean"}},showLabel:{defaultValue:null,description:"Offers the ability to show the group's legend onscreen or hide it. Refer\nto the `labelText` property for more information.",name:"showLabel",required:!1,type:{name:"boolean"}},isFullWidth:{defaultValue:null,description:"Set's the `Checkbox`s' wrapper to be full width.",name:"isFullWidth",required:!1,type:{name:"boolean"}},showRequiredLabel:{defaultValue:null,description:`Whether or not to display the "(Required)" text in the label text.
True by default.`,name:"showRequiredLabel",required:!1,type:{name:"boolean"}}}}}catch{}export{b as C};
//# sourceMappingURL=CheckboxGroup-6c26da72.js.map
