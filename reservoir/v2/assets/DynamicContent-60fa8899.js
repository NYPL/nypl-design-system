import{j as n,a as t,F as d}from"./jsx-runtime-fdf4db99.js";import{M as c,b as i}from"./index-445595fc.js";import{L as a}from"./Link-24c1437a.js";import{u as l}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-da8f5748.js";import"../sb-preview/runtime.js";import"./index-42773b54.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-2a967270.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-33c8ee8e.js";import"./index-314a82e0.js";import"./index-11d98b33.js";import"./index-356e4a49.js";import"./index-8f383b84.js";import"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import"./chakra-ui-layout.esm-e0dbb94e.js";import"./Icon-4eeffe51.js";function r(o){const e=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",p:"p",em:"em",code:"code",a:"a",strong:"strong",h3:"h3"},l(),o.components);return t(d,{children:[n(c,{title:"Accessibility Guide/Dynamic Content"}),`
`,n(e.h1,{id:"dynamic-content",children:"Dynamic Content"}),`
`,n(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:[`
`,n(a,{href:"#general-information",target:"_self",children:"General Information"}),`
`]}),`
`,t(e.li,{children:[`
`,n(a,{href:"#aria-live-regions",target:"_self",children:"ARIA Live Regions"}),`
`]}),`
`,t(e.li,{children:[`
`,n(a,{href:"#managing-focus",target:"_self",children:"Managing Focus"}),`
`]}),`
`,t(e.li,{children:[`
`,n(a,{href:"#anti-patterns",target:"_self",children:"Anti-Patterns"}),`
`]}),`
`,t(e.li,{children:[`
`,n(a,{href:"#nypl-patterns",target:"_self",children:"NYPL Patterns"}),`
`]}),`
`,t(e.li,{children:[`
`,n(a,{href:"#resources",target:"_self",children:"Resources"}),`
`]}),`
`]}),`
`,n(e.h2,{id:"general-information",children:"General Information"}),`
`,n(e.p,{children:`Most websites have elements that are updated dynamically. Typically, these
updates are indicated with a visual loading animation before the new content is
displayed. This visual cue, however, is not helpful for visually impaired users
or users who use assistive technology. We need to ensure that the changes are
understood and announced by the assistive technology.`}),`
`,t(e.p,{children:["The quick takeaway for implementing this necessary functionality is to ",n(e.em,{children:"always"}),`
render an empty container for the dynamic content in the DOM on the server-side.
The container element should have an `,n(e.code,{children:'aria-live="polite"'}),` attribute applied. The
following example shows one possible DOM structure that allows newly generated
content to be recognized and announced by assistive technology.`]}),`
`,n(i,{code:`
<div class="dynamic-content-container" aria-live="polite">
  <!-- Any dynamic content should be inserted, removed, or updated here. -->
</div>
`,language:"html"}),`
`,n(e.h2,{id:"aria-live-regions",children:"ARIA Live Regions"}),`
`,t(e.p,{children:["The ",n(e.code,{children:"aria-live"}),` attribute is used to indicate that an element's content will be
updated dynamically and that it should be announced to assistive technology. The
`,n(e.code,{children:"aria-live"}),' attribute can be set to "off", "polite", or "assertive". ',n(e.em,{children:"When"}),` the
content should be read by the assistive technology depends on which of the three
values is used. This attribute does not manage focus on the element.`]}),`
`,n(e.p,{children:t(e.em,{children:["For dynamic content, always include the ",n(e.code,{children:"aria-live"}),` attribute in the initial
DOM render to allow assistive technology to track the updates for the specified
element.`]})}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:[n(e.code,{children:'aria-live="off"'}),` - the default value which is the same as not having the
attribute at all.`]}),`
`,t(e.li,{children:[n(e.code,{children:'aria-live="polite"'}),` - the screen reader will wait until the user is done
interacting with the page before announcing the change. This is usually the
best option for dynamic content.`]}),`
`,t(e.li,{children:[n(e.code,{children:'aria-live="assertive"'}),` - the screen reader will announce the change
immediately, even if the user is in the middle of interacting with the page.
This should be used sparingly when the update is time-sensitive or critical
because it can be disruptive to the user.`]}),`
`]}),`
`,n(e.h2,{id:"aria-atomic",children:"ARIA Atomic"}),`
`,t(e.p,{children:["The ",n(e.code,{children:"aria-atomic"}),` attribute is used to indicate whether assistive technology
should announce the entire content or only the changes. This is useful when an
element's entire content is not replaced on every update but all of the content
should still be read.`]}),`
`,t(e.p,{children:[`For example, if the content of an element is updated to "Results found: 5" and
then updated again to "Results found: 10", the assistive technology will
announce "10" when `,n(e.code,{children:'aria-atomic="false"'}),` but will announce "Results found: 10"
when `,n(e.code,{children:'aria-atomic="true"'}),"."]}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:[n(e.code,{children:'aria-atomic="true"'}),` - the entire content of the element will be read by the
assistive technology.`]}),`
`,t(e.li,{children:[n(e.code,{children:'aria-atomic="false"'}),` - only the changes to the content will be read by the
assistive technology.`]}),`
`]}),`
`,n(i,{code:`
<div class="dynamic-content-container" aria-live="polite" aria-atomic="true">
  Results found:
  <span class="dynamic-content">
    <!-- Any dynamic content should be inserted, removed, or updated here. -->
  </span>
</div>
`,language:"html"}),`
`,n(e.h2,{id:"managing-focus",children:"Managing Focus"}),`
`,n(e.p,{children:`Not all instances of dynamic content updates require a focus change, but some
do. When a process completes and an important message is displayed, the focus
should be moved to the message. For example, when a user submits a form and the
form is cleared from the page, and a status message is added in its place, then
focus should be placed on the status message. It is generally inappropriate to
forcefully move focus to the message or search results when it is anticipated
that the user might be interacting with multiple facets of filtering in
succession and a focus change would be disruptive to their flow.`}),`
`,t(e.p,{children:["As mentioned above, the ",n(e.code,{children:"aria-live"}),` attribute does not manage focus on the
element. In order to move focus to the element, the `,n(e.code,{children:"tabindex"})," (",n(e.code,{children:"tabIndex"}),` in
React) attribute must be set to `,n(e.code,{children:"-1"}),` to allow for programmatic focus on the
element, and a `,n(e.code,{children:"focus()"}),` method must be called on the element. When focusing on
an element, the focus will automatically cause the updated content to be read
and the `,n(e.code,{children:"aria-live"})," attribute should no longer be used."]}),`
`,t(e.p,{children:["More on managing focus can be found ",n(e.a,{href:"./?path=/docs/accessibility-guide-managing-focus--docs",children:"here"}),"."]}),`
`,n(i,{code:`
<div class="dynamic-content-container" tabindex="-1">
  <!-- Any dynamic content should be inserted, removed, or updated here. -->
</div>
`,language:"html"}),`
`,n(i,{code:`
// Javascript example
const container = document.querySelector(".dynamic-content-container");
// Once the content is updated, move focus to the container.
container.focus();
`,language:"js"}),`
`,n(i,{code:`
// React example
const [text, setText] = useState(undefined);
const containerRef = useRef(null);
// Once the content is updated, move focus to the container.
// Pseudocode example - the actual conditional logic will vary.
useEffect(() => {
// When content is updated, move focus to the container.
  containerRef.current.focus();
}, [text])
// ...
return (
  <div class="dynamic-content-container" ref={containerRef} tabIndex="-1">
    <!-- Any dynamic content should be inserted, removed, or updated here. -->
    {text}
  </div>
);
`,language:"jsx"}),`
`,n(e.h2,{id:"anti-patterns",children:"Anti-Patterns"}),`
`,n(e.p,{children:t(e.strong,{children:["Do not dynamically add or remove the ",n(e.code,{children:"aria-live"})," attribute from the element."]})}),`
`,t(e.p,{children:["The ",n(e.code,{children:"aria-live"}),` attribute must be set on the element when the page is rendered.
The following are `,n(e.strong,{children:"incorrect"}),":"]}),`
`,n(i,{code:`
<div id="dynamic-content-container">
  <!-- Any dynamic content should be inserted, removed, or updated here. -->
</div>
`,language:"html"}),`
`,n(i,{code:`
// Javascript anti-pattern example
const container = document.getElementById("dynamic-content-container");
container.setAttribute("aria-live", "polite");
`,language:"js"}),`
`,n(i,{code:`
// React anti-pattern example
const [ariaLive, setAriaLive] = useState(undefined);
// When the component mounts, set the aria-live attribute.
useEffect(() => {
  setAriaLive("polite");
}, [])
// ...
return (
  <div id="dynamic-content-container" aria-live={ariaLive}>
    <!-- Any dynamic content should be inserted, removed, or updated here. -->
  </div>
);
`,language:"jsx"}),`
`,n(e.p,{children:t(e.strong,{children:["Do not assign the ",n(e.code,{children:"aria-live"}),` attribute to an entire section or the entire
page.`]})}),`
`,t(e.p,{children:["Add the ",n(e.code,{children:"aria-live"}),` attribute to the specific element that will be updated. For
example, on a search results page that updates the amount of results found and
the list of results, only add the `,n(e.code,{children:"aria-live"}),` attribute to the element that
contains the number of results. The following is not recommended:`]}),`
`,n(i,{code:`
<div id="search-results" aria-live="polite">
  <div id="results-count">
    <!-- Dynamic content. -->
    <span>10 results found</span>
  </div>
  <ul id="results-list">
    <!-- Dynamic list of li elements. -->
    <li>
      <p>Title: Result 1</p>
      <p>Author: Author 1</p>
    </li>
    <li>
      <p>Title: Result 2</p>
      <p>Author: Author 2</p>
    </li>
    <!-- ... -->
  </ul>
</div>
`,language:"html"}),`
`,n(e.p,{children:"This is not recommended because the screen reader will announce:"}),`
`,n(i,{code:`
"10 results found Title: Result 1 Author: Author 1 Title: Result 2 Author: Author 2 ..."
`,language:"html"}),`
`,t(e.p,{children:["This is information overload. Instead, add the ",n(e.code,{children:"aria-live"}),` attribute to the
element that contains the updated number of results found. In this case, it's
the element with `,n(e.code,{children:"id"})," of ",n(e.code,{children:"results-count"})," only."]}),`
`,n(e.h2,{id:"nypl-patterns",children:"NYPL Patterns"}),`
`,n(e.h3,{id:"helpererrortext",children:"HelperErrorText"}),`
`,t(e.p,{children:["The ",n(e.code,{children:"HelperErrorText"})," component renders an empty ",n(e.code,{children:"div"}),` element with the
`,n(e.code,{children:"aria-live"})," attribute set to ",n(e.code,{children:'"polite"'}),` by default. This component should not be
conditionally rendered on the page. Instead, the content should be dynamically
updated.`]}),`
`,n(e.p,{children:n(e.a,{href:"../?path=/docs/components-content-display-helpererrortext--docs",children:"HelperErrorText Storybook documentation"})}),`
`,n(i,{code:`
// Very naive example.
const [text, setText] = useState("");
// ...
useEffect(() => {
  setText("This helper text was dynamically updated.");
}, []);
// ...
// Even though "text" is empty by default, the "HelperErrorText" component
// is still rendered. The text that is dynamically updated will be announced
// by assistive technology.
return <HelperErrorText text={text} />;
`,language:"jsx"}),`
`,n(e.h3,{id:"form-components",children:"Form Components"}),`
`,t(e.p,{children:["The pattern described in this section is true for the ",n(e.code,{children:"Checkbox"}),`,
`,n(e.code,{children:"CheckboxGroup"}),", ",n(e.code,{children:"DatePicker"}),", ",n(e.code,{children:"Radio"}),", ",n(e.code,{children:"RadioGroup"}),", ",n(e.code,{children:"SearchBar"}),", ",n(e.code,{children:"Select"}),`,
`,n(e.code,{children:"Slider"}),", ",n(e.code,{children:"TextInput"}),", and ",n(e.code,{children:"Toggle"}),` DS components. All these form components
internally implement the `,n(e.code,{children:"HelperErrorText"}),` component described above.
Implementing the `,n(e.code,{children:"HelperErrorText"}),` component allows the component to display
helper or error text. This is especially useful when there is an error that
needs to be displayed after the user has interacted with the form component.`]}),`
`,t(e.p,{children:["For simplicity, the ",n(e.code,{children:"TextInput"}),` component will be in the following example. The
helper text "Please enter a 5-digit value." is set by default. If the user does
not enter a 5-digit value, the error text "Error: The zip code needs to be
5-digits." is displayed `,n(e.em,{children:"and"})," also announced by assistive technology."]}),`
`,n(e.p,{children:n(e.a,{href:"../?path=/docs/components-form-elements-textinput--docs",children:"TextInput Storybook documentation"})}),`
`,n(i,{code:`
// Very naive example.
const [inputValue, setInputValue] = useState();
return (
<TextInput
  labelText="Zip code example"
  isInvalid={inputValue.length !== 5}
  onChange={(e) => setInputValue(e.target.value)}
  helperText="Please enter a 5-digit value."
  invalidText="Error: The zip code needs to be 5-digits."
  value={inputValue}
/>
); `,language:"jsx"}),`
`,n(e.h2,{id:"resources",children:"Resources"}),`
`,t(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live",target:"_blank",rel:"nofollow noopener noreferrer",children:"MDN aria-live"})}),`
`,n(e.li,{children:n(e.a,{href:"https://www.w3.org/TR/wai-aria/#aria-live",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3 WAI-ARIA: aria-live"})}),`
`,n(e.li,{children:n(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions",target:"_blank",rel:"nofollow noopener noreferrer",children:"MDN ARIA live regions"})}),`
`]})]})}function j(o={}){const{wrapper:e}=Object.assign({},l(),o.components);return e?n(e,Object.assign({},o,{children:n(r,o)})):r(o)}export{j as default};
//# sourceMappingURL=DynamicContent-60fa8899.js.map
