import{j as n,a as o,F as h}from"./jsx-runtime-fdf4db99.js";import{M as s,C as t,A as p,b as l}from"./index-445595fc.js";import{A as m,W as d,a as u,L as f,S as b,b as g,E as y}from"./AudioPlayer.stories-49cf3bcd.js";import{L as i}from"./Link-24c1437a.js";import{C as w}from"./ComponentChangelogTable-310bbbfd.js";import{u as c}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-da8f5748.js";import"../sb-preview/runtime.js";import"./index-42773b54.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-2a967270.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-33c8ee8e.js";import"./index-314a82e0.js";import"./index-11d98b33.js";import"./index-356e4a49.js";import"./index-8f383b84.js";import"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import"./chakra-ui-layout.esm-e0dbb94e.js";import"./index-6148c31a.js";import"./AudioPlayer-db2e617a.js";import"./ComponentWrapper-aa2910be.js";import"./useDSHeading-94e72700.js";import"./Heading-7eebc756.js";import"./Text-d88b2f7a.js";import"./HelperErrorText-55c57f50.js";import"./Icon-4eeffe51.js";import"./List-582282a6.js";import"./Table-64c6aa77.js";const v=[{date:"2023-12-07",version:"2.1.3",type:"Update",affects:["Accessibility","Documentation"],notes:["Updated the `headingText` prop to allow JSX to render custom heading elements for accessible heading hierarchy."]}];function a(r){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",em:"em",a:"a",h3:"h3"},c(),r.components);return o(h,{children:[n(s,{of:m}),`
`,n(e.h1,{id:"audio-player",children:"Audio Player"}),`
`,o(e.table,{children:[n(e.thead,{children:o(e.tr,{children:[n(e.th,{children:"Component Version"}),n(e.th,{children:"DS Version"})]})}),o(e.tbody,{children:[o(e.tr,{children:[n(e.td,{children:"Added"}),n(e.td,{children:n(e.code,{children:"1.2.0"})})]}),o(e.tr,{children:[n(e.td,{children:"Latest"}),n(e.td,{children:n(e.code,{children:"2.1.3"})})]})]})]}),`
`,n(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,o(e.ul,{children:[`
`,o(e.li,{children:[`
`,n(i,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,o(e.li,{children:[`
`,n(i,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,o(e.li,{children:[`
`,n(i,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,o(e.li,{children:[`
`,n(i,{href:"#with-custom-heading",target:"_self",children:"With Custom Heading"}),`
`]}),`
`,o(e.li,{children:[`
`,n(i,{href:"#example-embed-code-snippets",target:"_self",children:"Example Embed Code Snippets"}),`
`]}),`
`,o(e.li,{children:[`
`,n(i,{href:"#errored",target:"_self",children:"Errored"}),`
`]}),`
`,o(e.li,{children:[`
`,n(i,{href:"#changelog",target:"_self",children:"Changelog"}),`
`]}),`
`]}),`
`,n(e.h2,{id:"overview",children:"Overview"}),`
`,o(e.p,{children:["The ",n(e.code,{children:"AudioPlayer"}),` component is used to embed a streaming audio player from 3rd
party services such as `,n(e.code,{children:"Libsyn"}),", ",n(e.code,{children:"SoundCloud"}),", and ",n(e.code,{children:"Spotify"}),` on a page. The
component requires the `,n(e.code,{children:"embedCode"})," prop or ",n(e.code,{children:"filePath"}),` prop. The component will
not function properly if you try to set both of them.`]}),`
`,o(e.p,{children:["The current version of the ",n(e.code,{children:"AudioPlayer"}),` component does not support the playback
of locally hosted audio files. That functionality will be added in a future
version of the component.`]}),`
`,n(e.h2,{id:"component-props",children:"Component Props"}),`
`,n(t,{of:d}),`
`,n(p,{of:d}),`
`,n(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,o(e.p,{children:["The ",n(e.code,{children:"AudioPlayer"})," component renders an iframe element from ",n(e.code,{children:"Libsyn"}),`,
`,n(e.code,{children:"SoundCloud"}),", or ",n(e.code,{children:"Spotify"}),". The accessibility of the ",n(e.code,{children:"iframe"}),` element can be
improved if a `,n(e.code,{children:"title"}),` attribute is provided and most 3rd party audio services
will include a `,n(e.code,{children:"title"})," attribute in the embed code they provide. If the ",n(e.code,{children:"title"}),`
attribute is omitted from the embed code, a default `,n(e.code,{children:"title"}),` will be added by the
`,n(e.code,{children:"AudioPlayer"})," component, but it is recommended to include a custom ",n(e.code,{children:"title"}),` that
is related to the audio file content.`]}),`
`,o(e.p,{children:[`Because these audios are hosted on a third-party platform, we cannot guarantee
that the audio player will be accessible. Besides setting the `,n(e.code,{children:"title"}),` in the
embedded `,n(e.code,{children:"iframe"}),", there are ",n(e.em,{children:"some ways"})," we can reduce accessibility issues."]}),`
`,o(e.ul,{children:[`
`,n(e.li,{children:"The player should not be set to auto-play when the page first loads."}),`
`,n(e.li,{children:`The text in the heading, description and helper text element should be
relevant and related to the embedded audio player.`}),`
`,n(e.li,{children:`The iframe title should describe in a few words the content of the embedded
audio.`}),`
`,n(e.li,{children:`Consider using the description or helper text to add a link to a full
transcript of the audio file. Refer to the link below for additional
information.`}),`
`]}),`
`,n(e.p,{children:"Resources:"}),`
`,o(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"https://www.w3.org/WAI/media/av/",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C Making Audio and Video Media Accessible"})}),`
`,n(e.li,{children:n(e.a,{href:"https://webaim.org/techniques/frames/",target:"_blank",rel:"nofollow noopener noreferrer",children:"WebAIM Creating Accessible Frames and Iframes"})}),`
`,n(e.li,{children:n(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe",target:"_blank",rel:"nofollow noopener noreferrer",children:"MDN iframe: The Inline Frame element"})}),`
`,n(e.li,{children:n(e.a,{href:"https://dequeuniversity.com/tips/provide-iframe-titles",target:"_blank",rel:"nofollow noopener noreferrer",children:"Deque University Be Sure to Provide Titles for Iframes"})}),`
`]}),`
`,n(e.h2,{id:"with-custom-heading",children:"With Custom Heading"}),`
`,o(e.p,{children:["By default, the ",n(e.code,{children:"AudioPlayer"})," will render an ",n(e.code,{children:"h2"}),` element when a string is
passed to the `,n(e.code,{children:"headingText"}),` component. If this is an accessibility issue, it's
possible to pass in a custom heading element.`]}),`
`,o(e.p,{children:["In the following example, an ",n(e.code,{children:"h4"})," is rendered through the DS ",n(e.code,{children:"Heading"})," component."]}),`
`,n(l,{code:`

const customH4 = <Heading level="h4">Custom H4 Heading</Heading>;

<AudioPlayer headingText={customH4} {...props} />
`,language:"tsx"}),`
`,n(t,{of:u}),`
`,n(e.h2,{id:"example-embed-code-snippets",children:"Example Embed Code Snippets"}),`
`,n(e.p,{children:`The examples below are shown with precise HTML formatting. However, often the
embed code snippets provided by 3rd party services are delivered as one long
string.`}),`
`,n(e.h3,{id:"libsyn",children:"Libsyn"}),`
`,n(e.p,{children:`The following is an example iframe code for Libsyn that would go into the
embedCode prop.`}),`
`,n(l,{code:`
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
`,n(t,{of:f}),`
`,n(e.h3,{id:"soundcloud",children:"SoundCloud"}),`
`,n(e.p,{children:`The following is an example iframe code for SoundCloud that would go into the
embedCode prop.`}),`
`,n(l,{code:`
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
`,n(t,{of:b}),`
`,n(e.h3,{id:"spotify",children:"Spotify"}),`
`,n(e.p,{children:`The following is an example iframe code for Spotify that would go into the
embedCode prop.`}),`
`,n(l,{code:`
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
`,n(t,{of:g}),`
`,n(e.h2,{id:"errored",children:"Errored"}),`
`,o(e.p,{children:["If the necessary props are not passed to the ",n(e.code,{children:"AudioPlayer"}),` component, the
component UI will display an error message.`]}),`
`,n(t,{of:y}),`
`,n(e.h2,{id:"changelog",children:"Changelog"}),`
`,n(w,{changelogData:v})]})}function $(r={}){const{wrapper:e}=Object.assign({},c(),r.components);return e?n(e,Object.assign({},r,{children:n(a,r)})):a(r)}export{$ as default};
//# sourceMappingURL=AudioPlayer-ea14b244.js.map
