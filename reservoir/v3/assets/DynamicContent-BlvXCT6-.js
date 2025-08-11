import { u as a, j as e, M as r, L as s, S as t } from "./iframe-D93LbwGv.js";
function o(i) {
  const n = {
    a: "a",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...a(),
    ...i.components,
  };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(r, { title: "Accessibility Guide/Dynamic Content" }),
      `
`,
      e.jsx(n.h1, { id: "dynamic-content", children: "Dynamic Content" }),
      `
`,
      e.jsx(n.h2, { id: "table-of-contents", children: "Table of Contents" }),
      `
`,
      e.jsxs(n.ul, {
        children: [
          `
`,
          e.jsxs(n.li, {
            children: [
              `
`,
              e.jsx(s, {
                href: "#general-information",
                target: "_self",
                children: "General Information",
              }),
              `
`,
            ],
          }),
          `
`,
          e.jsxs(n.li, {
            children: [
              `
`,
              e.jsx(s, {
                href: "#aria-live-regions",
                target: "_self",
                children: "ARIA Live Regions",
              }),
              `
`,
            ],
          }),
          `
`,
          e.jsxs(n.li, {
            children: [
              `
`,
              e.jsx(s, {
                href: "#managing-focus",
                target: "_self",
                children: "Managing Focus",
              }),
              `
`,
            ],
          }),
          `
`,
          e.jsxs(n.li, {
            children: [
              `
`,
              e.jsx(s, {
                href: "#anti-patterns",
                target: "_self",
                children: "Anti-Patterns",
              }),
              `
`,
            ],
          }),
          `
`,
          e.jsxs(n.li, {
            children: [
              `
`,
              e.jsx(s, {
                href: "#nypl-patterns",
                target: "_self",
                children: "NYPL Patterns",
              }),
              `
`,
            ],
          }),
          `
`,
          e.jsxs(n.li, {
            children: [
              `
`,
              e.jsx(s, {
                href: "#resources",
                target: "_self",
                children: "Resources",
              }),
              `
`,
            ],
          }),
          `
`,
        ],
      }),
      `
`,
      e.jsx(n.h2, {
        id: "general-information",
        children: "General Information",
      }),
      `
`,
      e.jsx(n.p, {
        children: `Most websites have elements that are updated dynamically. Typically, these
updates are indicated with a visual loading animation before the new content is
displayed. This visual cue, however, is not helpful for visually impaired users
or users who use assistive technology. We need to ensure that the changes are
understood and announced by the assistive technology.`,
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The quick takeaway for implementing this necessary functionality is to ",
          e.jsx(n.em, { children: "always" }),
          `
render an empty container for the dynamic content in the DOM on the server-side.
The container element should have an `,
          e.jsx(n.code, { children: 'aria-live="polite"' }),
          ` attribute applied. The
following example shows one possible DOM structure that allows newly generated
content to be recognized and announced by assistive technology.`,
        ],
      }),
      `
`,
      e.jsx(t, {
        code: `
<div class="dynamic-content-container" aria-live="polite">
<!-- Any dynamic content should be inserted, removed, or updated here. -->
</div>
`,
        language: "html",
      }),
      `
`,
      e.jsx(n.h2, { id: "aria-live-regions", children: "ARIA Live Regions" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "aria-live" }),
          ` attribute is used to indicate that an element's content will be
updated dynamically and that it should be announced to assistive technology. The
`,
          e.jsx(n.code, { children: "aria-live" }),
          ' attribute can be set to "off", "polite", or "assertive". ',
          e.jsx(n.em, { children: "When" }),
          ` the
content should be read by the assistive technology depends on which of the three
values is used. This attribute does not manage focus on the element.`,
        ],
      }),
      `
`,
      e.jsx(n.p, {
        children: e.jsxs(n.em, {
          children: [
            "For dynamic content, always include the ",
            e.jsx(n.code, { children: "aria-live" }),
            ` attribute in the initial
DOM render to allow assistive technology to track the updates for the specified
element.`,
          ],
        }),
      }),
      `
`,
      e.jsxs(n.ul, {
        children: [
          `
`,
          e.jsxs(n.li, {
            children: [
              e.jsx(n.code, { children: 'aria-live="off"' }),
              ` - the default value which is the same as not having the
attribute at all.`,
            ],
          }),
          `
`,
          e.jsxs(n.li, {
            children: [
              e.jsx(n.code, { children: 'aria-live="polite"' }),
              ` - the screen reader will wait until the user is done
interacting with the page before announcing the change. This is usually the
best option for dynamic content.`,
            ],
          }),
          `
`,
          e.jsxs(n.li, {
            children: [
              e.jsx(n.code, { children: 'aria-live="assertive"' }),
              ` - the screen reader will announce the change
immediately, even if the user is in the middle of interacting with the page.
This should be used sparingly when the update is time-sensitive or critical
because it can be disruptive to the user.`,
            ],
          }),
          `
`,
        ],
      }),
      `
`,
      e.jsx(n.h2, { id: "aria-atomic", children: "ARIA Atomic" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "aria-atomic" }),
          ` attribute is used to indicate whether assistive technology
should announce the entire content or only the changes. This is useful when an
element's entire content is not replaced on every update but all of the content
should still be read.`,
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          `For example, if the content of an element is updated to "Results found: 5" and
then updated again to "Results found: 10", the assistive technology will
announce "10" when `,
          e.jsx(n.code, { children: 'aria-atomic="false"' }),
          ` but will announce "Results found: 10"
when `,
          e.jsx(n.code, { children: 'aria-atomic="true"' }),
          ".",
        ],
      }),
      `
`,
      e.jsxs(n.ul, {
        children: [
          `
`,
          e.jsxs(n.li, {
            children: [
              e.jsx(n.code, { children: 'aria-atomic="true"' }),
              ` - the entire content of the element will be read by the
assistive technology.`,
            ],
          }),
          `
`,
          e.jsxs(n.li, {
            children: [
              e.jsx(n.code, { children: 'aria-atomic="false"' }),
              ` - only the changes to the content will be read by the
assistive technology.`,
            ],
          }),
          `
`,
        ],
      }),
      `
`,
      e.jsx(t, {
        code: `
<div class="dynamic-content-container" aria-live="polite" aria-atomic="true">
Results found:
<span class="dynamic-content">
  <!-- Any dynamic content should be inserted, removed, or updated here. -->
</span>
</div>
`,
        language: "html",
      }),
      `
`,
      e.jsx(n.h2, { id: "managing-focus", children: "Managing Focus" }),
      `
`,
      e.jsx(n.p, {
        children: `Not all instances of dynamic content updates require a focus change, but some
do. When a process completes and an important message is displayed, the focus
should be moved to the message. For example, when a user submits a form and the
form is cleared from the page, and a status message is added in its place, then
focus should be placed on the status message. It is generally inappropriate to
forcefully move focus to the message or search results when it is anticipated
that the user might be interacting with multiple facets of filtering in
succession and a focus change would be disruptive to their flow.`,
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "As mentioned above, the ",
          e.jsx(n.code, { children: "aria-live" }),
          ` attribute does not manage focus on the
element. In order to move focus to the element, the `,
          e.jsx(n.code, { children: "tabindex" }),
          " (",
          e.jsx(n.code, { children: "tabIndex" }),
          ` in
React) attribute must be set to `,
          e.jsx(n.code, { children: "-1" }),
          ` to allow for programmatic focus on the
element, and a `,
          e.jsx(n.code, { children: "focus()" }),
          ` method must be called on the element. When focusing on
an element, the focus will automatically cause the updated content to be read
and the `,
          e.jsx(n.code, { children: "aria-live" }),
          " attribute should no longer be used.",
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "More on managing focus can be found ",
          e.jsx(n.a, {
            href: "./?path=/docs/accessibility-guide-managing-focus--docs",
            children: "here",
          }),
          ".",
        ],
      }),
      `
`,
      e.jsx(t, {
        code: `
<div class="dynamic-content-container" tabindex="-1">
<!-- Any dynamic content should be inserted, removed, or updated here. -->
</div>
`,
        language: "html",
      }),
      `
`,
      e.jsx(t, {
        code: `
// Javascript example
const container = document.querySelector(".dynamic-content-container");
// Once the content is updated, move focus to the container.
container.focus();
`,
        language: "js",
      }),
      `
`,
      e.jsx(t, {
        code: `
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
`,
        language: "jsx",
      }),
      `
`,
      e.jsx(n.h2, { id: "anti-patterns", children: "Anti-Patterns" }),
      `
`,
      e.jsx(n.p, {
        children: e.jsxs(n.strong, {
          children: [
            "Do not dynamically add or remove the ",
            e.jsx(n.code, { children: "aria-live" }),
            " attribute from the element.",
          ],
        }),
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "aria-live" }),
          ` attribute must be set on the element when the page is rendered.
The following are `,
          e.jsx(n.strong, { children: "incorrect" }),
          ":",
        ],
      }),
      `
`,
      e.jsx(t, {
        code: `
<div id="dynamic-content-container">
<!-- Any dynamic content should be inserted, removed, or updated here. -->
</div>
`,
        language: "html",
      }),
      `
`,
      e.jsx(t, {
        code: `
// Javascript anti-pattern example
const container = document.getElementById("dynamic-content-container");
container.setAttribute("aria-live", "polite");
`,
        language: "js",
      }),
      `
`,
      e.jsx(t, {
        code: `
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
`,
        language: "jsx",
      }),
      `
`,
      e.jsx(n.p, {
        children: e.jsxs(n.strong, {
          children: [
            "Do not assign the ",
            e.jsx(n.code, { children: "aria-live" }),
            ` attribute to an entire section or the entire
page.`,
          ],
        }),
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "Add the ",
          e.jsx(n.code, { children: "aria-live" }),
          ` attribute to the specific element that will be updated. For
example, on a search results page that updates the amount of results found and
the list of results, only add the `,
          e.jsx(n.code, { children: "aria-live" }),
          ` attribute to the element that
contains the number of results. The following is not recommended:`,
        ],
      }),
      `
`,
      e.jsx(t, {
        code: `
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
`,
        language: "html",
      }),
      `
`,
      e.jsx(n.p, {
        children:
          "This is not recommended because the screen reader will announce:",
      }),
      `
`,
      e.jsx(t, {
        code: `
"10 results found Title: Result 1 Author: Author 1 Title: Result 2 Author: Author 2 ..."
`,
        language: "html",
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "This is information overload. Instead, add the ",
          e.jsx(n.code, { children: "aria-live" }),
          ` attribute to the
element that contains the updated number of results found. In this case, it's
the element with `,
          e.jsx(n.code, { children: "id" }),
          " of ",
          e.jsx(n.code, { children: "results-count" }),
          " only.",
        ],
      }),
      `
`,
      e.jsx(n.h2, { id: "nypl-patterns", children: "NYPL Patterns" }),
      `
`,
      e.jsx(n.h3, { id: "helpererrortext", children: "HelperErrorText" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "HelperErrorText" }),
          " component renders an empty ",
          e.jsx(n.code, { children: "div" }),
          ` element with the
`,
          e.jsx(n.code, { children: "aria-live" }),
          " attribute set to ",
          e.jsx(n.code, { children: '"polite"' }),
          ` by default. This component should not be
conditionally rendered on the page. Instead, the content should be dynamically
updated.`,
        ],
      }),
      `
`,
      e.jsx(n.p, {
        children: e.jsx(n.a, {
          href: "../?path=/docs/components-content-display-helpererrortext--docs",
          children: "HelperErrorText Storybook documentation",
        }),
      }),
      `
`,
      e.jsx(t, {
        code: `
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
`,
        language: "jsx",
      }),
      `
`,
      e.jsx(n.h3, { id: "form-components", children: "Form Components" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The pattern described in this section is true for the ",
          e.jsx(n.code, { children: "Checkbox" }),
          `,
`,
          e.jsx(n.code, { children: "CheckboxGroup" }),
          ", ",
          e.jsx(n.code, { children: "DatePicker" }),
          ", ",
          e.jsx(n.code, { children: "Radio" }),
          ", ",
          e.jsx(n.code, { children: "RadioGroup" }),
          ", ",
          e.jsx(n.code, { children: "SearchBar" }),
          ", ",
          e.jsx(n.code, { children: "Select" }),
          `,
`,
          e.jsx(n.code, { children: "Slider" }),
          ", ",
          e.jsx(n.code, { children: "TextInput" }),
          ", and ",
          e.jsx(n.code, { children: "Toggle" }),
          ` DS components. All these form components
internally implement the `,
          e.jsx(n.code, { children: "HelperErrorText" }),
          ` component described above.
Implementing the `,
          e.jsx(n.code, { children: "HelperErrorText" }),
          ` component allows the component to display
helper or error text. This is especially useful when there is an error that
needs to be displayed after the user has interacted with the form component.`,
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "For simplicity, the ",
          e.jsx(n.code, { children: "TextInput" }),
          ` component will be in the following example. The
helper text "Please enter a 5-digit value." is set by default. If the user does
not enter a 5-digit value, the error text "Error: The zip code needs to be
5-digits." is displayed `,
          e.jsx(n.em, { children: "and" }),
          " also announced by assistive technology.",
        ],
      }),
      `
`,
      e.jsx(n.p, {
        children: e.jsx(n.a, {
          href: "../?path=/docs/components-form-elements-textinput--docs",
          children: "TextInput Storybook documentation",
        }),
      }),
      `
`,
      e.jsx(t, {
        code: `
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
); `,
        language: "jsx",
      }),
      `
`,
      e.jsx(n.h2, { id: "resources", children: "Resources" }),
      `
`,
      e.jsxs(n.ul, {
        children: [
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.a, {
              href: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live",
              rel: "nofollow",
              children: "MDN aria-live",
            }),
          }),
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.a, {
              href: "https://www.w3.org/TR/wai-aria/#aria-live",
              rel: "nofollow",
              children: "W3 WAI-ARIA: aria-live",
            }),
          }),
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.a, {
              href: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions",
              rel: "nofollow",
              children: "MDN ARIA live regions",
            }),
          }),
          `
`,
        ],
      }),
    ],
  });
}
function d(i = {}) {
  const { wrapper: n } = { ...a(), ...i.components };
  return n ? e.jsx(n, { ...i, children: e.jsx(o, { ...i }) }) : o(i);
}
export { d as default };
