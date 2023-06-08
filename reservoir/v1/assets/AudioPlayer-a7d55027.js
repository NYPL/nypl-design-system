import{j as n,a as r,F as s}from"./jsx-runtime-09ad29cb.js";import{M as h,C as i,A as p,b as l}from"./index-5d3bb37f.js";import{A as m,W as d,L as f,S as u,a as b,E as y}from"./AudioPlayer.stories-6cd3f596.js";import{L as t}from"./Link-0ed02cf7.js";import{u as c}from"./index-a14fc4fc.js";import"./index-f2bd0723.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-359c5387.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-86fba1ca.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-22f77b05.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-944fe3e7.js";import"./index-0a26bc51.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-b629ee11.js";import"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import"./chakra-ui-layout.esm-b2fa9d31.js";import"./index-6148c31a.js";import"./AudioPlayer-ef216574.js";import"./ComponentWrapper-82a15cf7.js";import"./Heading-2ec2ea62.js";import"./Text-eabcdc0a.js";import"./Icon-6616a4b9.js";function a(o){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",em:"em",a:"a",h3:"h3"},c(),o.components);return r(s,{children:[n(h,{of:m}),`
`,n(e.h1,{id:"audio-player",children:"Audio Player"}),`
`,r(e.table,{children:[n(e.thead,{children:r(e.tr,{children:[n(e.th,{children:"Component Version"}),n(e.th,{children:"DS Version"})]})}),r(e.tbody,{children:[r(e.tr,{children:[n(e.td,{children:"Added"}),n(e.td,{children:n(e.code,{children:"1.2.0"})})]}),r(e.tr,{children:[n(e.td,{children:"Latest"}),n(e.td,{children:n(e.code,{children:"1.5.0"})})]})]})]}),`
`,n(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,r(e.ul,{children:[`
`,r(e.li,{children:[`
`,n(t,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,r(e.li,{children:[`
`,n(t,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,r(e.li,{children:[`
`,n(t,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,r(e.li,{children:[`
`,n(t,{href:"#example-embed-code-snippets",target:"_self",children:"Example Embed Code Snippets"}),`
`]}),`
`,r(e.li,{children:[`
`,n(t,{href:"#errored",target:"_self",children:"Errored"}),`
`]}),`
`]}),`
`,n(e.h2,{id:"overview",children:"Overview"}),`
`,r(e.p,{children:["The ",n(e.code,{children:"AudioPlayer"}),` component is used to embed a streaming audio player from 3rd
party services such as `,n(e.code,{children:"Libsyn"}),", ",n(e.code,{children:"SoundCloud"}),", and ",n(e.code,{children:"Spotify"}),` on a page. The
component requires the `,n(e.code,{children:"embedCode"})," prop or ",n(e.code,{children:"filePath"}),` prop. The component will
not function properly if you try to set both of them.`]}),`
`,r(e.p,{children:["The current version of the ",n(e.code,{children:"AudioPlayer"}),` component does not support the playback
of locally hosted audio files. That functionality will be added in a future
version of the component.`]}),`
`,n(e.h2,{id:"component-props",children:"Component Props"}),`
`,n(i,{of:d}),`
`,n(p,{of:d}),`
`,n(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,r(e.p,{children:["The ",n(e.code,{children:"AudioPlayer"})," component renders an iframe element from ",n(e.code,{children:"Libsyn"}),`,
`,n(e.code,{children:"SoundCloud"}),", or ",n(e.code,{children:"Spotify"}),". The accessibility of the ",n(e.code,{children:"iframe"}),` element can be
improved if a `,n(e.code,{children:"title"}),` attribute is provided and most 3rd party audio services
will include a `,n(e.code,{children:"title"})," attribute in the embed code they provide. If the ",n(e.code,{children:"title"}),`
attribute is omitted from the embed code, a default `,n(e.code,{children:"title"}),` will be added by the
`,n(e.code,{children:"AudioPlayer"})," component, but it is recommended to include a custom ",n(e.code,{children:"title"}),` that
is related to the audio file content.`]}),`
`,r(e.p,{children:[`Because these audios are hosted on a third-party platform, we cannot guarantee
that the audio player will be accessible. Besides setting the `,n(e.code,{children:"title"}),` in the
embedded `,n(e.code,{children:"iframe"}),", there are ",n(e.em,{children:"some ways"})," we can reduce accessibility issues."]}),`
`,r(e.ul,{children:[`
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
`,r(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"https://www.w3.org/WAI/media/av/",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C Making Audio and Video Media Accessible"})}),`
`,n(e.li,{children:n(e.a,{href:"https://webaim.org/techniques/frames/",target:"_blank",rel:"nofollow noopener noreferrer",children:"WebAIM Creating Accessible Frames and Iframes"})}),`
`,n(e.li,{children:n(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe",target:"_blank",rel:"nofollow noopener noreferrer",children:"MDN iframe: The Inline Frame element"})}),`
`,n(e.li,{children:n(e.a,{href:"https://dequeuniversity.com/tips/provide-iframe-titles",target:"_blank",rel:"nofollow noopener noreferrer",children:"Deque University Be Sure to Provide Titles for Iframes"})}),`
`]}),`
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
`,n(i,{of:f}),`
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
`,n(i,{of:u}),`
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
`,n(i,{of:b}),`
`,n(e.h2,{id:"errored",children:"Errored"}),`
`,r(e.p,{children:["If the necessary props are not passed to the ",n(e.code,{children:"AudioPlayer"}),` component, the
component UI will display an error message.`]}),`
`,n(i,{of:y})]})}function R(o={}){const{wrapper:e}=Object.assign({},c(),o.components);return e?n(e,Object.assign({},o,{children:n(a,o)})):a(o)}export{R as default};
//# sourceMappingURL=AudioPlayer-a7d55027.js.map
