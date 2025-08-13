import{u as a,j as e,M as o,L as t}from"./iframe-CFLVJZOZ.js";function s(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...a(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Accessibility Guide/Links"}),`
`,e.jsx(n.h1,{id:"links",children:"Links"}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#general-information",target:"_self",children:"General Information"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#nypl-patterns",target:"_self",children:"NYPL Patterns"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#resources",target:"_self",children:"Resources"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"general-information",children:"General Information"}),`
`,e.jsx(n.p,{children:`There is no explicit rule in the accessibility space that dictates using
underlines to indicate a link. However, because the underline is long-standing
default treatment of links by browsers, along with a change in color, it is
arguably the most recognizable indicator of a link's presence on a page. In
cases where it is not visually desirable to use an underline, such as when a
large number of links within body text may negatively impact readability or
scanability, then other design choices can be used.`}),`
`,e.jsx(n.p,{children:`From an accessibility standpoint, the most important thing is the ability to
identify links and distinguish them from non-interactive content. This can be
done in ways other than using an underline.`}),`
`,e.jsx(n.p,{children:`Color can be used, though it cannot be the ONLY method of distinguishing a link
within a block of non-linked text. This comes from WCAG Success Criterion 1.4.1
Use of Color, which states "Color is not used as the only visual means of
conveying information, indicating an action, prompting a response, or
distinguishing a visual element." (Level A)`}),`
`,e.jsx(n.p,{children:`As an example, if you have a link within a block of non-linked text, then you
could rely on contrast between the color of the link text and the color of the
non-linked text (this should be 3:1 - use the Contrast Triangle tool to check
your combinations), and add additional cues such as bolding, increasing the font
size, using a different font, etc. This can also be combined with additional
indicators that appear when tabbing or hovering over a link. However, note that
on touch-screen devices there is no such equivalent mechanism to trigger that
additional visual cue, so the default state should be distinct enough to be
relied on alone.`}),`
`,e.jsx(n.p,{children:`For links that occur outside the context of a block of non-linked text, then
again, other visual cues that serve as a call to action can be used, such as a
border, increased font size, bolding, change of background, adjacent icons to
indicate an action, etc. Links in a main navigation area, or in a common list
format are generally considered to be fine without an underline.`}),`
`,e.jsx(n.h2,{id:"nypl-patterns",children:"NYPL Patterns"}),`
`,e.jsx(n.p,{children:`Text links can be presented in three general scenarios: in a heading, mixed
within a block of plain text, or as an isolated navigation element. In all
instances, the aim is to reduce the visual impact of the link underline while
still meeting accessibility requirements and best practices.`}),`
`,e.jsx(n.p,{children:`In cases where an underline for a text link is necessary, the 1px width and
dotted underline styles will allow text links to be visually highlighted without
being overly intrusive. This, in turn, will help text- and link-heavy pages to
be less overwhelming and cluttered.`}),`
`,e.jsx(n.h3,{id:"headings",children:"Headings"}),`
`,e.jsxs(n.p,{children:[`When a link is applied to a full heading, the link text SHOULD be rendered using
the `,e.jsx(n.code,{children:"link primary"}),` color and the default state of the link text SHOULD NOT be
underlined. The link text hover state SHOULD be rendered using the `,e.jsx(n.code,{children:"link secondary"}),` color and MUST be underlined. Applying a link to a full heading is
the recommended pattern.`]}),`
`,e.jsxs(n.p,{children:[`When a link is applied to a subset of words within a heading, the link text MUST
be rendered using the `,e.jsx(n.code,{children:"link primary"}),` color and the default state of the link
text MUST be underlined. The link text hover state SHOULD be rendered using the
`,e.jsx(n.code,{children:"link secondary"})," color and MUST be underlined. ",e.jsx(n.strong,{children:`While this is acceptable,
applying a link to a portion of a heading is not the recommended pattern.`})]}),`
`,e.jsx(n.h3,{id:"mixed-text",children:"Mixed Text"}),`
`,e.jsxs(n.p,{children:[`When a body text link sits within a block of plain (unlinked) text — a
paragraph, a single sentence, or even just a few words — the link text
SHOULD be rendered using the `,e.jsx(n.code,{children:"link primary"}),` color and the default state of the
link text MUST be underlined. The link text hover state SHOULD be rendered using
the `,e.jsx(n.code,{children:"link secondary"})," color and MUST be underlined."]}),`
`,e.jsx(n.h3,{id:"standalone-links",children:"Standalone Links"}),`
`,e.jsxs(n.p,{children:[`When a body text link sits by itself within the page content area — a Read
More link at the end of a short description, a View In Catalog link on a book
detail page — the link text SHOULD be rendered using the `,e.jsx(n.code,{children:"link primary"}),`
color, the default state of the link text SHOULD NOT be underlined, and the link
text SHOULD be displayed with a "forward" directional arrow rendered using the
`,e.jsx(n.code,{children:"link primary"}),` color. The link text hover state SHOULD be rendered using
the `,e.jsx(n.code,{children:"link secondary"})," color and MUST be underlined."]}),`
`,e.jsx(n.h3,{id:"tips-for-writing-standalone-link-text",children:"Tips for Writing Standalone Link Text"}),`
`,e.jsx(n.p,{children:`Avoid using a URL as a text link. URLs, especially long ones, may cause reading
difficulty for both humans and screen readers.`}),`
`,e.jsx(n.p,{children:`Keep link text as short as possible. Instead of "you can contact us," use
"contact us."`}),`
`,e.jsx(n.p,{children:`Link should have at least one full word (two is better). Avoid using a single
letter or a symbol for a link as it lacks context and is difficult to click on.`}),`
`,e.jsx(n.h3,{id:"acceptable-style-deviations",children:"Acceptable Style Deviations"}),`
`,e.jsx(n.p,{children:"There are times when deviations from the standard link styles are allowed."}),`
`,e.jsx(n.p,{children:`Links in main navigation areas or in a common list format can be presented
without an underline or some other link indicator (ex. text with icon). It is
also acceptable to use a color other than the standard link color, but it is
generally recommended to use black or white.`}),`
`,e.jsx(n.p,{children:`Links on colored backgrounds will almost always run into problems with color
contrast. In those cases, the link color should be set to either black or
white, depending on the background color.`}),`
`,e.jsx(n.p,{children:`In situations when the link color is not used and the link color is changed to
white or black, an underline must be applied whenever a link it mixed with plain
text. This mirrors the patterns of the standard link styles.`}),`
`,e.jsx(n.h2,{id:"resources",children:"Resources"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html",rel:"nofollow",children:"WCAG Success Criterion 1.4.1 Use of Color"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://webaim.org/techniques/hypertext/",rel:"nofollow",children:"WebAIM: Links and Hypertext"})}),`
`]})]})}function r(i={}){const{wrapper:n}={...a(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{r as default};
