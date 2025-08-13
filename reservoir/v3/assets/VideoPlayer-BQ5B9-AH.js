import{u as c,j as e,M as h,L as i,bv as a,C as r,bw as p,S as t}from"./iframe-CFLVJZOZ.js";import{V as o,W as d,a as x,E as m,H as j}from"./VideoPlayer.stories-0-Xz60Wg.js";import{C as u}from"./ComponentChangelogTable-DvY0SxTs.js";import"./storybookUtils-BmTl87w5.js";const f=[{date:"2025-07-17",version:"3.6.4",type:"Update",affects:["Accessibility"],notes:["Display a fallback warning message on JavaScript-disabled browsers."]},{date:"2024-03-14",version:"3.0.0",type:"Update",affects:["Styles"],notes:["Chakra 2.8 update."]},{date:"2023-12-07",version:"2.1.3",type:"Update",affects:["Accessibility","Documentation"],notes:["Updated the `headingText` prop to allow JSX to render custom heading elements for accessible heading hierarchy."]}];function l(s){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...c(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:o}),`
`,e.jsx(n.h1,{id:"video-player",children:"Video Player"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Component Version"}),e.jsx(n.th,{children:"DS Version"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Added"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"0.23.2"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Latest"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"3.6.4"})})]})]})]}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{href:"#with-custom-heading",target:"_self",children:"With Custom Heading"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{href:"#extracting-video-ids",target:"_self",children:"Extracting Video IDs"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{href:"#example-embed-code-snippets",target:"_self",children:"Example Embed Code Snippets"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{href:"#errored",target:"_self",children:"Errored"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{href:"#html-in-helper-text",target:"_self",children:"HTML in Helper Text"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{href:"#changelog",target:"_self",children:"Changelog"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(a,{of:o}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"VideoPlayer"})," component is used to embed a ",e.jsx(n.code,{children:"Vimeo"})," or ",e.jsx(n.code,{children:"YouTube"}),` video player
on a page. The component requires the `,e.jsx(n.code,{children:"embedCode"})," prop or both the ",e.jsx(n.code,{children:"videoType"}),`
and `,e.jsx(n.code,{children:"videoId"}),` props. The component will not function properly if you try to set
all of them.`]}),`
`,e.jsxs(n.p,{children:["You can extract the videoId from the video's URL. ",e.jsx(n.strong,{children:"IMPORTANT:"}),` Do not try to
enter the full video URL as the `,e.jsx(n.code,{children:"videoId"})," value."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"aspectRatio"}),` prop is used to control the sizing of the space allotted for
the video rendering. Ultimately, the `,e.jsx(n.code,{children:"aspectRatio"}),` prop should be set to match
the aspect ratio of the video that is being rendered. The default aspect ratio
is `,e.jsx(n.code,{children:"16:9"}),"."]}),`
`,e.jsx(n.h2,{id:"component-props",children:"Component Props"}),`
`,e.jsx(r,{of:d}),`
`,e.jsx(p,{of:d}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Example Vimeo IDs:"})," ",e.jsx(n.code,{children:"474719268"}),", ",e.jsx(n.code,{children:"491405018"}),", ",e.jsx(n.code,{children:"493795778"})," (square)",e.jsx("br",{}),`
`,e.jsx(n.strong,{children:"Example YouTube IDs:"})," ",e.jsx(n.code,{children:"PfqgDG1qrKg"}),", ",e.jsx(n.code,{children:"roi5V8ppi7Y"}),", ",e.jsx(n.code,{children:"nm-dD2tx6bk"})]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"VideoPlayer"})," component renders an ",e.jsx(n.code,{children:"iframe"}),` element with either a Vimeo or
YouTube video. `,e.jsx(n.code,{children:"iframe"}),"s can be accessible if a ",e.jsx(n.code,{children:"title"}),` attribute is provided.
When passing in a video type and a video `,e.jsx(n.code,{children:"id"}),`, make sure to pass a title.
Otherwise, the title must already be provided in the embed code value that is
passed to the `,e.jsx(n.code,{children:"embedCode"}),` prop. A default one is provided but a custom one is
recommended.`]}),`
`,e.jsxs(n.p,{children:["Not all the Vimeo or YouTube videos passed to the ",e.jsx(n.code,{children:"VideoPlayer"}),` component will
be owned by The New York Public Library. Because these videos are hosted on a
third-party platform, we cannot guarantee that the video will be accessible.
Besides setting the `,e.jsx(n.code,{children:"title"})," in the embedded ",e.jsx(n.code,{children:"iframe"}),", there are ",e.jsx(n.em,{children:"some"}),` ways we
can reduce accessibility issues.`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`Never use autoplay on videos; a user must click the play button to start the
video.`}),`
`,e.jsx(n.li,{children:`Always show all the video player's controls for the user to interact with the
video.`}),`
`,e.jsx(n.li,{children:"Keep the full screen option available."}),`
`]}),`
`,e.jsx(n.p,{children:"Resources:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.w3.org/WAI/media/av/",rel:"nofollow",children:"W3C Making Audio and Video Media Accessible"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://webaim.org/techniques/frames/",rel:"nofollow",children:"WebAIM Creating Accessible Frames and Iframes"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe",rel:"nofollow",children:"MDN iframe: The Inline Frame element"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://dequeuniversity.com/tips/provide-iframe-titles",rel:"nofollow",children:"Deque University Be Sure to Provide Titles for Iframes"})}),`
`]}),`
`,e.jsx(n.h2,{id:"with-custom-heading",children:"With Custom Heading"}),`
`,e.jsxs(n.p,{children:["By default, the ",e.jsx(n.code,{children:"VideoPlayer"})," will render an ",e.jsx(n.code,{children:"h2"}),` element when a string is
passed to the `,e.jsx(n.code,{children:"headingText"}),` component. If this is an accessibility issue, it's
possible to pass in a custom heading element.`]}),`
`,e.jsxs(n.p,{children:["In the following example, an ",e.jsx(n.code,{children:"h4"})," is rendered through the DS ",e.jsx(n.code,{children:"Heading"})," component."]}),`
`,e.jsx(t,{code:`

const customH4 = <Heading level="h4">Custom H4 Heading</Heading>;

<VideoPlayer headingText={customH4} {...props} />
`,language:"tsx"}),`
`,e.jsx(r,{of:x}),`
`,e.jsx(n.h2,{id:"extracting-video-ids",children:"Extracting Video IDs"}),`
`,e.jsx(n.h3,{id:"vimeo",children:"Vimeo"}),`
`,e.jsx(t,{code:`
https://vimeo.com/[VIDEO_ID]
https://vimeo.com/474719268
`,language:"html"}),`
`,e.jsx(n.h3,{id:"youtube",children:"YouTube"}),`
`,e.jsx(t,{code:`
https://www.youtube.com/watch?v=[VIDEO_ID]
https://www.youtube.com/watch?v=nm-dD2tx6bk
`,language:"html"}),`
`,e.jsx(n.h2,{id:"example-embed-code-snippets",children:"Example Embed Code Snippets"}),`
`,e.jsx(n.p,{children:`The examples below are shown with precise HTML formatting. However, often the
embed code snippets provided by 3rd party video services are delivered as one
long string.`}),`
`,e.jsx(n.h3,{id:"vimeo-1",children:"Vimeo"}),`
`,e.jsx(t,{code:`
<iframe
src="https://player.vimeo.com/video/421404144?h=5467db7edd"
width="640"
height="360"
frameborder="0"
allow="autoplay; fullscreen; picture-in-picture"
allowfullscreen
></iframe>
`,language:"html"}),`
`,e.jsx(n.h3,{id:"youtube-1",children:"YouTube"}),`
`,e.jsx(t,{code:`
<iframe
width="560"
height="315"
src="https://www.youtube.com/embed/nm-dD2tx6bk"
title="YouTube video player"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen
></iframe>
`,language:"html"}),`
`,e.jsx(n.h2,{id:"errored",children:"Errored"}),`
`,e.jsxs(n.p,{children:["If the necessary props are not passed to the ",e.jsx(n.code,{children:"VideoPlayer"}),` component, the
component UI will display an error message.`]}),`
`,e.jsx(r,{of:m}),`
`,e.jsx(n.h2,{id:"html-in-helper-text",children:"HTML in Helper Text"}),`
`,e.jsxs(n.p,{children:["It's possible to include HTML in the ",e.jsx(n.code,{children:"helperText"})," prop."]}),`
`,e.jsx(r,{name:"HTML in Helper Text",of:j}),`
`,e.jsx(n.h2,{id:"changelog",children:"Changelog"}),`
`,e.jsx(u,{changelogData:f})]})}function w(s={}){const{wrapper:n}={...c(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(l,{...s})}):l(s)}export{w as default};
