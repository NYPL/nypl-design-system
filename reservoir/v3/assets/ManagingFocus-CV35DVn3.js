import{u as a,j as e,M as l,L as s,S as o}from"./iframe-D93LbwGv.js";function i(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Accessibility Guide/Managing Focus"}),`
`,e.jsx(n.h1,{id:"managing-focus",children:"Managing Focus"}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#general-information",target:"_self",children:"General Information"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#forcing-focus-during-content-updates",target:"_self",children:"Forcing Focus During Content Updates"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#how-to-manage-focus",target:"_self",children:"How To Manage Focus"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#resources",target:"_self",children:"Resources"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"general-information",children:"General Information"}),`
`,e.jsx(n.p,{children:`Focusable elements are UI elements that a keyboard user can navigate to. By default, this
includes interactive elements like links, checkboxes, and text inputs, etc. It's
possible to make any element focusable; more on this later.`}),`
`,e.jsx(n.p,{children:`Focus order should be logical, and should generally follow the visual order of the page.
For most languages, the focus order starts at the top of the page and ends at the bottom,
traveling from left to right. However, some languages are read right to left, so the
primary language of the page may warrant a different focus order.`}),`
`,e.jsx(n.h2,{id:"forcing-focus-during-content-updates",children:"Forcing Focus During Content Updates"}),`
`,e.jsx(n.p,{children:`There are times when a forced shift of focus is necessary to alert the user to changes and
make it possible for them to read and interact with the changed content. Examples include:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"When a dialog opens"}),`
`,e.jsx(n.li,{children:"When a dialog closes"}),`
`,e.jsx(n.li,{children:"When a form is submitted with errors"}),`
`,e.jsx(n.li,{children:"When a process completes and new content is loaded"}),`
`]}),`
`,e.jsx(n.p,{children:`Dialogs should always forcefully manage focus. Focus should land within the dialog when
it is triggered and return to the triggering control (or the most logical place) when
the dialog is closed. Focus should be trapped within the dialog until it is dismissed.`}),`
`,e.jsx(n.p,{children:`When a form is submitted and errors are added, focus should move either to the list
of errors (if provided) or to the first field in error if using in-line validation.
If you submit a form, and a status message is added in its place, then focus should be
placed on the status message.`}),`
`,e.jsx(n.p,{children:`If there is the ability to “load more” results, focus should move to the top of the
newly added content.`}),`
`,e.jsx(n.p,{children:`Not all instances of content updates require a focus change. For example, it is
generally inappropriate to forcefully move focus to search results when it is
anticipated that the user may be interacting with multiple filters in succession and
a focus change would be disruptive to their flow.`}),`
`,e.jsx(n.h2,{id:"how-to-manage-focus",children:"How To Manage Focus"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"tabindex"})," HTML attribute (",e.jsx(n.code,{children:"tabIndex"}),` in React) can be used to manipulate the tab sequence of
elements on a page. A `,e.jsx(n.code,{children:"tabindex"})," of -1 removes an element from this sequence. A ",e.jsx(n.code,{children:"tabindex"}),`of
0 adds an element that is not focusable by default. A `,e.jsx(n.code,{children:"tabindex"}),` of 1 or greater will take
precedence in the focus order. This is considered an anti-pattern and should `,e.jsx(n.strong,{children:"not"}),` be used
because it confuses the natural focus order.`]}),`
`,e.jsxs(n.p,{children:["Note that the ",e.jsx(n.code,{children:"aria-live"}),` attribute does not manage focus. In order to programmatically move
focus to an element (as in the situations described above), use the `,e.jsx(n.code,{children:".focus()"}),` method on the
element.`]}),`
`,e.jsx(o,{code:`
document.getElementByID("#element-to-focus").focus()
`,language:"js"}),`
`,e.jsxs(n.p,{children:["In React, a ref can be assigned to the element and then the ",e.jsx(n.code,{children:".focus()"}),` method can be
called on the ref's current property.`]}),`
`,e.jsx(o,{code:`
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
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note"}),`: When focus is being moved to an element that is not natively focusable, the target
element will need to have tabindex=”-1”. This allows it to receive programmatic
focus without also placing it in the tab sequence as tabindex=”0” would.`]}),`
`,e.jsx(n.h2,{id:"resources",children:"Resources"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility#exploring_the_keyboard_usability_problem",rel:"nofollow",children:"MDN Exploring the keyboard usability problem"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex",rel:"nofollow",children:"MDN tabindex"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://web.dev/learn/accessibility/focus/#:~:text=Naturally%20focusable%20HTML%20elements%20include,overrides%20the%20natural%20focus%20semantics.",rel:"nofollow",children:"web.dev Keyboard focus"})}),`
`]})]})}function c(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{c as default};
