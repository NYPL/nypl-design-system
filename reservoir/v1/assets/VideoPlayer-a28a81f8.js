import{j as r,a as n,F as s}from"./jsx-runtime-09ad29cb.js";import{M as p,D as m,C as d,A as u,b as t}from"./index-5d3bb37f.js";import{V as l,W as c,E as f,H as b}from"./VideoPlayer.stories-6c72ccb7.js";import{L as i}from"./Link-0ed02cf7.js";import{u as a}from"./index-a14fc4fc.js";import"./index-f2bd0723.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-359c5387.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-86fba1ca.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-22f77b05.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-944fe3e7.js";import"./index-0a26bc51.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-b629ee11.js";import"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import"./chakra-ui-layout.esm-b2fa9d31.js";import"./index-6148c31a.js";import"./VideoPlayer-01410771.js";import"./ComponentWrapper-82a15cf7.js";import"./Heading-2ec2ea62.js";import"./Text-eabcdc0a.js";import"./Icon-6616a4b9.js";function h(o){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",strong:"strong",em:"em",a:"a",h3:"h3"},a(),o.components);return n(s,{children:[r(p,{of:l}),`
`,r(e.h1,{id:"video-player",children:"Video Player"}),`
`,n(e.table,{children:[r(e.thead,{children:n(e.tr,{children:[r(e.th,{children:"Component Version"}),r(e.th,{children:"DS Version"})]})}),n(e.tbody,{children:[n(e.tr,{children:[r(e.td,{children:"Added"}),r(e.td,{children:r(e.code,{children:"0.23.2"})})]}),n(e.tr,{children:[r(e.td,{children:"Latest"}),r(e.td,{children:r(e.code,{children:"1.5.0"})})]})]})]}),`
`,r(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,r(i,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,n(e.li,{children:[`
`,r(i,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,n(e.li,{children:[`
`,r(i,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,n(e.li,{children:[`
`,r(i,{href:"#extracting-video-ids",target:"_self",children:"Extracting Video IDs"}),`
`]}),`
`,n(e.li,{children:[`
`,r(i,{href:"#example-embed-code-snippets",target:"_self",children:"Example Embed Code Snippets"}),`
`]}),`
`,n(e.li,{children:[`
`,r(i,{href:"#errored",target:"_self",children:"Errored"}),`
`]}),`
`,n(e.li,{children:[`
`,r(i,{href:"#html-in-helper-text",target:"_self",children:"HTML in Helper Text"}),`
`]}),`
`]}),`
`,r(e.h2,{id:"overview",children:"Overview"}),`
`,r(m,{of:l}),`
`,n(e.p,{children:["The ",r(e.code,{children:"VideoPlayer"})," component is used to embed a ",r(e.code,{children:"Vimeo"})," or ",r(e.code,{children:"YouTube"}),` video player
on a page. The component requires the `,r(e.code,{children:"embedCode"})," prop or both the ",r(e.code,{children:"videoType"}),`
and `,r(e.code,{children:"videoId"}),` props. The component will not function properly if you try to set
all of them.`]}),`
`,n(e.p,{children:["You can extract the videoId from the video's URL. ",r(e.strong,{children:"IMPORTANT:"}),` Do not try to
enter the full video URL as the `,r(e.code,{children:"videoId"})," value."]}),`
`,n(e.p,{children:["The ",r(e.code,{children:"aspectRatio"}),` prop is used to control the sizing of the space allotted for
the video rendering. Ultimately, the `,r(e.code,{children:"aspectRatio"}),` prop should be set to match
the aspect ratio of the video that is being rendered. The default aspect ratio
is `,r(e.code,{children:"16:9"}),"."]}),`
`,r(e.h2,{id:"component-props",children:"Component Props"}),`
`,r(d,{of:c}),`
`,r(u,{of:c}),`
`,n(e.p,{children:[r(e.strong,{children:"Example Vimeo IDs:"})," ",r(e.code,{children:"474719268"}),", ",r(e.code,{children:"491405018"}),", ",r(e.code,{children:"493795778"})," (square)",r("br",{}),`
`,r(e.strong,{children:"Example YouTube IDs:"})," ",r(e.code,{children:"PfqgDG1qrKg"}),", ",r(e.code,{children:"roi5V8ppi7Y"}),", ",r(e.code,{children:"nm-dD2tx6bk"})]}),`
`,r(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n(e.p,{children:["The ",r(e.code,{children:"VideoPlayer"})," component renders an ",r(e.code,{children:"iframe"}),` element with either a Vimeo or
YouTube video. `,r(e.code,{children:"iframe"}),"s can be accessible if a ",r(e.code,{children:"title"}),` attribute is provided.
When passing in a video type and a video `,r(e.code,{children:"id"}),`, make sure to pass a title.
Otherwise, the title must already be provided in the embed code value that is
passed to the `,r(e.code,{children:"embedCode"}),` prop. A default one is provided but a custom one is
recommended.`]}),`
`,n(e.p,{children:["Not all the Vimeo or YouTube videos passed to the ",r(e.code,{children:"VideoPlayer"}),` component will
be owned by The New York Public Library. Because these videos are hosted on a
third-party platform, we cannot guarantee that the video will be accessible.
Besides setting the `,r(e.code,{children:"title"})," in the embedded ",r(e.code,{children:"iframe"}),", there are ",r(e.em,{children:"some"}),` ways we
can reduce accessibility issues.`]}),`
`,n(e.ul,{children:[`
`,r(e.li,{children:`Never use autoplay on videos; a user must click the play button to start the
video.`}),`
`,r(e.li,{children:`Always show all the video player's controls for the user to interact with the
video.`}),`
`,r(e.li,{children:"Keep the full screen option available."}),`
`]}),`
`,r(e.p,{children:"Resources:"}),`
`,n(e.ul,{children:[`
`,r(e.li,{children:r(e.a,{href:"https://www.w3.org/WAI/media/av/",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C Making Audio and Video Media Accessible"})}),`
`,r(e.li,{children:r(e.a,{href:"https://webaim.org/techniques/frames/",target:"_blank",rel:"nofollow noopener noreferrer",children:"WebAIM Creating Accessible Frames and Iframes"})}),`
`,r(e.li,{children:r(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe",target:"_blank",rel:"nofollow noopener noreferrer",children:"MDN iframe: The Inline Frame element"})}),`
`,r(e.li,{children:r(e.a,{href:"https://dequeuniversity.com/tips/provide-iframe-titles",target:"_blank",rel:"nofollow noopener noreferrer",children:"Deque University Be Sure to Provide Titles for Iframes"})}),`
`]}),`
`,r(e.h2,{id:"extracting-video-ids",children:"Extracting Video IDs"}),`
`,r(e.h3,{id:"vimeo",children:"Vimeo"}),`
`,r(t,{code:`
https://vimeo.com/[VIDEO_ID]
https://vimeo.com/474719268
`,language:"html"}),`
`,r(e.h3,{id:"youtube",children:"YouTube"}),`
`,r(t,{code:`
https://www.youtube.com/watch?v=[VIDEO_ID]
https://www.youtube.com/watch?v=nm-dD2tx6bk
`,language:"html"}),`
`,r(e.h2,{id:"example-embed-code-snippets",children:"Example Embed Code Snippets"}),`
`,r(e.p,{children:`The examples below are shown with precise HTML formatting. However, often the
embed code snippets provided by 3rd party video services are delivered as one
long string.`}),`
`,r(e.h3,{id:"vimeo-1",children:"Vimeo"}),`
`,r(t,{code:`
<iframe
  src="https://player.vimeo.com/video/421404144?h=5467db7edd"
  width="640"
  height="360"
  frameborder="0"
  allow="autoplay; fullscreen; picture-in-picture"
  allowfullscreen
></iframe>
`,language:"html"}),`
`,r(e.h3,{id:"youtube-1",children:"YouTube"}),`
`,r(t,{code:`
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
`,r(e.h2,{id:"errored",children:"Errored"}),`
`,n(e.p,{children:["If the necessary props are not passed to the ",r(e.code,{children:"VideoPlayer"}),` component, the
component UI will display an error message.`]}),`
`,r(d,{of:f}),`
`,r(e.h2,{id:"html-in-helper-text",children:"HTML in Helper Text"}),`
`,n(e.p,{children:["It's possible to include HTML in the ",r(e.code,{children:"helperText"})," prop."]}),`
`,r(d,{name:"HTML in Helper Text",of:b})]})}function B(o={}){const{wrapper:e}=Object.assign({},a(),o.components);return e?r(e,Object.assign({},o,{children:r(h,o)})):h(o)}export{B as default};
//# sourceMappingURL=VideoPlayer-a28a81f8.js.map
