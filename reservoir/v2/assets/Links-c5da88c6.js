import{j as n,a as i,F as l}from"./jsx-runtime-fdf4db99.js";import{M as s}from"./index-445595fc.js";import{L as o}from"./Link-24c1437a.js";import{u as r}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-da8f5748.js";import"../sb-preview/runtime.js";import"./index-42773b54.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-2a967270.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-33c8ee8e.js";import"./index-314a82e0.js";import"./index-11d98b33.js";import"./index-356e4a49.js";import"./index-8f383b84.js";import"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import"./chakra-ui-layout.esm-e0dbb94e.js";import"./Icon-4eeffe51.js";function a(t){const e=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",p:"p",h3:"h3",code:"code",strong:"strong",a:"a"},r(),t.components);return i(l,{children:[n(s,{title:"Accessibility Guide/Links"}),`
`,n(e.h1,{id:"links",children:"Links"}),`
`,n(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[`
`,n(o,{href:"#general-information",target:"_self",children:"General Information"}),`
`]}),`
`,i(e.li,{children:[`
`,n(o,{href:"#nypl-patterns",target:"_self",children:"NYPL Patterns"}),`
`]}),`
`,i(e.li,{children:[`
`,n(o,{href:"#resources",target:"_self",children:"Resources"}),`
`]}),`
`]}),`
`,n(e.h2,{id:"general-information",children:"General Information"}),`
`,n(e.p,{children:`There is no explicit rule in the accessibility space that dictates using
underlines to indicate a link. However, because the underline is long-standing
default treatment of links by browsers, along with a change in color, it is
arguably the most recognizable indicator of a link's presence on a page. In
cases where it is not visually desirable to use an underline, such as when a
large number of links within body text may negatively impact readability or
scanability, then other design choices can be used.`}),`
`,n(e.p,{children:`From an accessibility standpoint, the most important thing is the ability to
identify links and distinguish them from non-interactive content. This can be
done in ways other than using an underline.`}),`
`,n(e.p,{children:`Color can be used, though it cannot be the ONLY method of distinguishing a link
within a block of non-linked text. This comes from WCAG Success Criterion 1.4.1
Use of Color, which states "Color is not used as the only visual means of
conveying information, indicating an action, prompting a response, or
distinguishing a visual element." (Level A)`}),`
`,n(e.p,{children:`As an example, if you have a link within a block of non-linked text, then you
could rely on contrast between the color of the link text and the color of the
non-linked text (this should be 3:1 - use the Contrast Triangle tool to check
your combinations), and add additional cues such as bolding, increasing the font
size, using a different font, etc. This can also be combined with additional
indicators that appear when tabbing or hovering over a link. However, note that
on touch-screen devices there is no such equivalent mechanism to trigger that
additional visual cue, so the default state should be distinct enough to be
relied on alone.`}),`
`,n(e.p,{children:`For links that occur outside the context of a block of non-linked text, then
again, other visual cues that serve as a call to action can be used, such as a
border, increased font size, bolding, change of background, adjacent icons to
indicate an action, etc. Links in a main navigation area, or in a common list
format are generally considered to be fine without an underline.`}),`
`,n(e.h2,{id:"nypl-patterns",children:"NYPL Patterns"}),`
`,n(e.p,{children:`Text links can be presented in three general scenarios: in a heading, mixed
within a block of plain text, or as an isolated navigation element. In all
instances, the aim is to reduce the visual impact of the link underline while
still meeting accessibility requirements and best practices.`}),`
`,n(e.p,{children:`In cases where an underline for a text link is necessary, the 1px width and
dotted underline styles will allow text links to be visually highlighted without
being overly intrusive. This, in turn, will help text- and link-heavy pages to
be less overwhelming and cluttered.`}),`
`,n(e.h3,{id:"headings",children:"Headings"}),`
`,i(e.p,{children:[`When a link is applied to a full heading, the link text SHOULD be rendered using
the `,n(e.code,{children:"link primary"}),` color and the default state of the link text SHOULD NOT be
underlined. The link text hover state SHOULD be rendered using the `,n(e.code,{children:"link secondary"}),` color and MUST be underlined. Applying a link to a full heading is
the recommended pattern.`]}),`
`,i(e.p,{children:[`When a link is applied to a subset of words within a heading, the link text MUST
be rendered using the `,n(e.code,{children:"link primary"}),` color and the default state of the link
text MUST be underlined. The link text hover state SHOULD be rendered using the
`,n(e.code,{children:"link secondary"})," color and MUST be underlined. ",n(e.strong,{children:`While this is acceptable,
applying a link to a portion of a heading is not the recommended pattern.`})]}),`
`,n(e.h3,{id:"mixed-text",children:"Mixed Text"}),`
`,i(e.p,{children:[`When a body text link sits within a block of plain (unlinked) text — a
paragraph, a single sentence, or even just a few words — the link text
SHOULD be rendered using the `,n(e.code,{children:"link primary"}),` color and the default state of the
link text MUST be underlined. The link text hover state SHOULD be rendered using
the `,n(e.code,{children:"link secondary"})," color and MUST be underlined."]}),`
`,n(e.h3,{id:"standalone-links",children:"Standalone Links"}),`
`,i(e.p,{children:[`When a body text link sits by itself within the page content area — a Read
More link at the end of a short description, a View In Catalog link on a book
detail page — the link text SHOULD be rendered using the `,n(e.code,{children:"link primary"}),`
color, the default state of the link text SHOULD NOT be underlined, and the link
text SHOULD be displayed with a "forward" directional arrow rendered using the
`,n(e.code,{children:"link primary"}),` color. The link text hover state SHOULD be rendered using
the `,n(e.code,{children:"link secondary"})," color and MUST be underlined."]}),`
`,n(e.h3,{id:"tips-for-writing-standalone-link-text",children:"Tips for Writing Standalone Link Text"}),`
`,n(e.p,{children:`Avoid using a URL as a text link. URLs, especially long ones, may cause reading
difficulty for both humans and screen readers.`}),`
`,n(e.p,{children:`Keep link text as short as possible. Instead of "you can contact us," use
"contact us."`}),`
`,n(e.p,{children:`Link should have at least one full word (two is better). Avoid using a single
letter or a symbol for a link as it lacks context and is difficult to click on.`}),`
`,n(e.h3,{id:"acceptable-style-deviations",children:"Acceptable Style Deviations"}),`
`,n(e.p,{children:"There are times when deviations from the standard link styles are allowed."}),`
`,n(e.p,{children:`Links in main navigation areas or in a common list format can be presented
without an underline or some other link indicator (ex. text with icon). It is
also acceptable to use a color other than the standard link color, but it is
generally recommended to use black or white.`}),`
`,n(e.p,{children:`Links on colored backgrounds will almost always run into problems with color
contrast. In those cases, the link color should be set to either black or
white, depending on the background color.`}),`
`,n(e.p,{children:`In situations when the link color is not used and the link color is changed to
white or black, an underline must be applied whenever a link it mixed with plain
text. This mirrors the patterns of the standard link styles.`}),`
`,n(e.h2,{id:"resources",children:"Resources"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"WCAG Success Criterion 1.4.1 Use of Color"})}),`
`,n(e.li,{children:n(e.a,{href:"https://webaim.org/techniques/hypertext/",target:"_blank",rel:"nofollow noopener noreferrer",children:"WebAIM: Links and Hypertext"})}),`
`]})]})}function D(t={}){const{wrapper:e}=Object.assign({},r(),t.components);return e?n(e,Object.assign({},t,{children:n(a,t)})):a(t)}export{D as default};
//# sourceMappingURL=Links-c5da88c6.js.map
