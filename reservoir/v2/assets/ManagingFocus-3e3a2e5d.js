import{j as n,a as t,F as l}from"./jsx-runtime-fdf4db99.js";import{M as c,b as r}from"./index-445595fc.js";import{L as i}from"./Link-24c1437a.js";import{u as s}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-da8f5748.js";import"../sb-preview/runtime.js";import"./index-42773b54.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-2a967270.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-33c8ee8e.js";import"./index-314a82e0.js";import"./index-11d98b33.js";import"./index-356e4a49.js";import"./index-8f383b84.js";import"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import"./chakra-ui-layout.esm-e0dbb94e.js";import"./Icon-4eeffe51.js";function a(o){const e=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",p:"p",code:"code",strong:"strong",a:"a"},s(),o.components);return t(l,{children:[n(c,{title:"Accessibility Guide/Managing Focus"}),`
`,n(e.h1,{id:"managing-focus",children:"Managing Focus"}),`
`,n(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:[`
`,n(i,{href:"#general-information",target:"_self",children:"General Information"}),`
`]}),`
`,t(e.li,{children:[`
`,n(i,{href:"#forcing-focus-during-content-updates",target:"_self",children:"Forcing Focus During Content Updates"}),`
`]}),`
`,t(e.li,{children:[`
`,n(i,{href:"#how-to-manage-focus",target:"_self",children:"How To Manage Focus"}),`
`]}),`
`,t(e.li,{children:[`
`,n(i,{href:"#resources",target:"_self",children:"Resources"}),`
`]}),`
`]}),`
`,n(e.h2,{id:"general-information",children:"General Information"}),`
`,n(e.p,{children:`Focusable elements are UI elements that a keyboard user can navigate to. By default, this
includes interactive elements like links, checkboxes, and text inputs, etc. It's
possible to make any element focusable; more on this later.`}),`
`,n(e.p,{children:`Focus order should be logical, and should generally follow the visual order of the page.
For most languages, the focus order starts at the top of the page and ends at the bottom,
traveling from left to right. However, some languages are read right to left, so the
primary language of the page may warrant a different focus order.`}),`
`,n(e.h2,{id:"forcing-focus-during-content-updates",children:"Forcing Focus During Content Updates"}),`
`,n(e.p,{children:`There are times when a forced shift of focus is necessary to alert the user to changes and
make it possible for them to read and interact with the changed content. Examples include:`}),`
`,t(e.ul,{children:[`
`,n(e.li,{children:"When a dialog opens"}),`
`,n(e.li,{children:"When a dialog closes"}),`
`,n(e.li,{children:"When a form is submitted with errors"}),`
`,n(e.li,{children:"When a process completes and new content is loaded"}),`
`]}),`
`,n(e.p,{children:`Dialogs should always forcefully manage focus. Focus should land within the dialog when
it is triggered and return to the triggering control (or the most logical place) when
the dialog is closed. Focus should be trapped within the dialog until it is dismissed.`}),`
`,n(e.p,{children:`When a form is submitted and errors are added, focus should move either to the list
of errors (if provided) or to the first field in error if using in-line validation.
If you submit a form, and a status message is added in its place, then focus should be
placed on the status message.`}),`
`,n(e.p,{children:`If there is the ability to “load more” results, focus should move to the top of the
newly added content.`}),`
`,n(e.p,{children:`Not all instances of content updates require a focus change. For example, it is
generally inappropriate to forcefully move focus to search results when it is
anticipated that the user may be interacting with multiple filters in succession and
a focus change would be disruptive to their flow.`}),`
`,n(e.h2,{id:"how-to-manage-focus",children:"How To Manage Focus"}),`
`,t(e.p,{children:["The ",n(e.code,{children:"tabindex"})," HTML attribute (",n(e.code,{children:"tabIndex"}),` in React) can be used to manipulate the tab sequence of
elements on a page. A `,n(e.code,{children:"tabindex"})," of -1 removes an element from this sequence. A ",n(e.code,{children:"tabindex"}),`of
0 adds an element that is not focusable by default. A `,n(e.code,{children:"tabindex"}),` of 1 or greater will take
precedence in the focus order. This is considered an anti-pattern and should `,n(e.strong,{children:"not"}),` be used
because it confuses the natural focus order.`]}),`
`,t(e.p,{children:["Note that the ",n(e.code,{children:"aria-live"}),` attribute does not manage focus. In order to programmatically move
focus to an element (as in the situations described above), use the `,n(e.code,{children:".focus()"}),` method on the
element.`]}),`
`,n(r,{code:`
document.getElementByID("#element-to-focus").focus()
`,language:"js"}),`
`,t(e.p,{children:["In React, a ref can be assigned to the element and then the ",n(e.code,{children:".focus()"}),` method can be
called on the ref's current property.`]}),`
`,n(r,{code:`
const closeDialogRef = useRef(null)

useEffect(() => {
if (isOpen) {
closeDialogRef.current.focus()
}
}, [isOpen])

<Dialog isOpen={isOpen}>
  <button onClick={() => setIsOpen(false)} ref={closeDialogRef}>
    Close Dialog
  </button>
</Dialog>
`,language:"jsx"}),`
`,t(e.p,{children:[n(e.strong,{children:"Note"}),`: When focus is being moved to an element that is not natively focusable, the target
element will need to have tabindex=”-1”. This allows it to receive programmatic
focus without also placing it in the tab sequence as tabindex=”0” would.`]}),`
`,n(e.h2,{id:"resources",children:"Resources"}),`
`,t(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility#exploring_the_keyboard_usability_problem",target:"_blank",rel:"nofollow noopener noreferrer",children:"MDN Exploring the keyboard usability problem"})}),`
`,n(e.li,{children:n(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex",target:"_blank",rel:"nofollow noopener noreferrer",children:"MDN tabindex"})}),`
`,n(e.li,{children:n(e.a,{href:"https://web.dev/learn/accessibility/focus/#:~:text=Naturally%20focusable%20HTML%20elements%20include,overrides%20the%20natural%20focus%20semantics.",target:"_blank",rel:"nofollow noopener noreferrer",children:"web.dev Keyboard focus"})}),`
`]})]})}function j(o={}){const{wrapper:e}=Object.assign({},s(),o.components);return e?n(e,Object.assign({},o,{children:n(a,o)})):a(o)}export{j as default};
//# sourceMappingURL=ManagingFocus-3e3a2e5d.js.map
