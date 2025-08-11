import{u as d,j as e,M as a,L as i,C as t,bw as c,S as s}from"./iframe-D93LbwGv.js";import{A as h,W as r,a as p,L as m,S as u,b as f,E as x}from"./AudioPlayer.stories-B5Sj-0C-.js";import{C as j}from"./ComponentChangelogTable-Ck_3mwrR.js";const b=[{date:"2025-07-17",version:"3.6.4",type:"Update",affects:["Accessibility"],notes:["Display a fallback warning message on JavaScript-disabled browsers."]},{date:"2024-03-14",version:"3.0.0",type:"Update",affects:["Styles"],notes:["Chakra 2.8 update."]},{date:"2023-12-07",version:"2.1.3",type:"Update",affects:["Accessibility","Documentation"],notes:["Updated the `headingText` prop to allow JSX to render custom heading elements for accessible heading hierarchy."]}];function l(o){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:h}),`
`,e.jsx(n.h1,{id:"audio-player",children:"Audio Player"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Component Version"}),e.jsx(n.th,{children:"DS Version"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Added"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"1.2.0"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Latest"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"3.6.4"})})]})]})]}),`
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
`,e.jsx(i,{href:"#example-embed-code-snippets",target:"_self",children:"Example Embed Code Snippets"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{href:"#errored",target:"_self",children:"Errored"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{href:"#changelog",target:"_self",children:"Changelog"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"AudioPlayer"}),` component is used to embed a streaming audio player from 3rd
party services such as `,e.jsx(n.code,{children:"Libsyn"}),", ",e.jsx(n.code,{children:"SoundCloud"}),", and ",e.jsx(n.code,{children:"Spotify"}),` on a page. The
component requires the `,e.jsx(n.code,{children:"embedCode"})," prop or ",e.jsx(n.code,{children:"filePath"}),` prop. The component will
not function properly if you try to set both of them.`]}),`
`,e.jsxs(n.p,{children:["The current version of the ",e.jsx(n.code,{children:"AudioPlayer"}),` component does not support the playback
of locally hosted audio files. That functionality will be added in a future
version of the component.`]}),`
`,e.jsx(n.h2,{id:"component-props",children:"Component Props"}),`
`,e.jsx(t,{of:r}),`
`,e.jsx(c,{of:r}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"AudioPlayer"})," component renders an iframe element from ",e.jsx(n.code,{children:"Libsyn"}),`,
`,e.jsx(n.code,{children:"SoundCloud"}),", or ",e.jsx(n.code,{children:"Spotify"}),". The accessibility of the ",e.jsx(n.code,{children:"iframe"}),` element can be
improved if a `,e.jsx(n.code,{children:"title"}),` attribute is provided and most 3rd party audio services
will include a `,e.jsx(n.code,{children:"title"})," attribute in the embed code they provide. If the ",e.jsx(n.code,{children:"title"}),`
attribute is omitted from the embed code, a default `,e.jsx(n.code,{children:"title"}),` will be added by the
`,e.jsx(n.code,{children:"AudioPlayer"})," component, but it is recommended to include a custom ",e.jsx(n.code,{children:"title"}),` that
is related to the audio file content.`]}),`
`,e.jsxs(n.p,{children:[`Because these audios are hosted on a third-party platform, we cannot guarantee
that the audio player will be accessible. Besides setting the `,e.jsx(n.code,{children:"title"}),` in the
embedded `,e.jsx(n.code,{children:"iframe"}),", there are ",e.jsx(n.em,{children:"some ways"})," we can reduce accessibility issues."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The player should not be set to auto-play when the page first loads."}),`
`,e.jsx(n.li,{children:`The text in the heading, description and helper text element should be
relevant and related to the embedded audio player.`}),`
`,e.jsx(n.li,{children:`The iframe title should describe in a few words the content of the embedded
audio.`}),`
`,e.jsx(n.li,{children:`Consider using the description or helper text to add a link to a full
transcript of the audio file. Refer to the link below for additional
information.`}),`
`]}),`
`,e.jsx(n.p,{children:"Resources:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.w3.org/WAI/media/av/",rel:"nofollow",children:"W3C Making Audio and Video Media Accessible"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://webaim.org/techniques/frames/",rel:"nofollow",children:"WebAIM Creating Accessible Frames and Iframes"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe",rel:"nofollow",children:"MDN iframe: The Inline Frame element"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://dequeuniversity.com/tips/provide-iframe-titles",rel:"nofollow",children:"Deque University Be Sure to Provide Titles for Iframes"})}),`
`]}),`
`,e.jsx(n.h2,{id:"with-custom-heading",children:"With Custom Heading"}),`
`,e.jsxs(n.p,{children:["By default, the ",e.jsx(n.code,{children:"AudioPlayer"})," will render an ",e.jsx(n.code,{children:"h2"}),` element when a string is
passed to the `,e.jsx(n.code,{children:"headingText"}),` component. If this is an accessibility issue, it's
possible to pass in a custom heading element.`]}),`
`,e.jsxs(n.p,{children:["In the following example, an ",e.jsx(n.code,{children:"h4"})," is rendered through the DS ",e.jsx(n.code,{children:"Heading"})," component."]}),`
`,e.jsx(s,{code:`

const customH4 = <Heading level="h4">Custom H4 Heading</Heading>;

<AudioPlayer headingText={customH4} {...props} />
`,language:"tsx"}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(n.h2,{id:"example-embed-code-snippets",children:"Example Embed Code Snippets"}),`
`,e.jsx(n.p,{children:`The examples below are shown with precise HTML formatting. However, often the
embed code snippets provided by 3rd party services are delivered as one long
string.`}),`
`,e.jsx(n.h3,{id:"libsyn",children:"Libsyn"}),`
`,e.jsx(n.p,{children:`The following is an example iframe code for Libsyn that would go into the
embedCode prop.`}),`
`,e.jsx(s,{code:`
<iframe
title="Libsyn Player"
style="border: none"
src="//html5-player.libsyn.com/embed/episode/id/18268511/height/90/theme/custom/thumbnail/yes/direction/backward/render-playlist/no/custom-color/87A93A/"
height="90"
width="100%"
scrolling="no"
allowfullscreen
webkitallowfullscreen
mozallowfullscreen
oallowfullscreen
msallowfullscreen
></iframe>
`,language:"html"}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(n.h3,{id:"soundcloud",children:"SoundCloud"}),`
`,e.jsx(n.p,{children:`The following is an example iframe code for SoundCloud that would go into the
embedCode prop.`}),`
`,e.jsx(s,{code:`
<iframe
width="100%"
height="300"
scrolling="no"
frameborder="no"
src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/311382449&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
></iframe>
<div
style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"
>
<a
  href="https://soundcloud.com/nypl"
  title="New York Public Library"
  target="_blank"
  style="color: #cccccc; text-decoration: none;"
  >New York Public Library</a
>
·
<a
  href="https://soundcloud.com/nypl/journalism-in-the-age-of-trump"
  title="Journalism in the Age of Trump"
  target="_blank"
  style="color: #cccccc; text-decoration: none;"
  >Journalism in the Age of Trump</a
>
</div>
`,language:"html"}),`
`,e.jsx(t,{of:u}),`
`,e.jsx(n.h3,{id:"spotify",children:"Spotify"}),`
`,e.jsx(n.p,{children:`The following is an example iframe code for Spotify that would go into the
embedCode prop.`}),`
`,e.jsx(s,{code:`
<iframe
style="border-radius:12px"
src="https://open.spotify.com/embed/playlist/37i9dQZF1DX0uqkwkR49kK?utm_source=generator"
width="100%"
height="380"
frameborder="0"
allowfullscreen=""
allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
></iframe>
`,language:"html"}),`
`,e.jsx(t,{of:f}),`
`,e.jsx(n.h2,{id:"errored",children:"Errored"}),`
`,e.jsxs(n.p,{children:["If the necessary props are not passed to the ",e.jsx(n.code,{children:"AudioPlayer"}),` component, the
component UI will display an error message.`]}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(n.h2,{id:"changelog",children:"Changelog"}),`
`,e.jsx(j,{changelogData:b})]})}function v(o={}){const{wrapper:n}={...d(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(l,{...o})}):l(o)}export{v as default};
