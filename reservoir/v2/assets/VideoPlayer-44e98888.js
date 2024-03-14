import{j as n,a as i,F as s}from"./jsx-runtime-fdf4db99.js";import{M as p,D as m,C as d,A as u,b as o}from"./index-445595fc.js";import{V as l,W as c,a as f,E as g,H as b}from"./VideoPlayer.stories-517de222.js";import{L as r}from"./Link-24c1437a.js";import{C as v}from"./ComponentChangelogTable-310bbbfd.js";import{u as a}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-da8f5748.js";import"../sb-preview/runtime.js";import"./index-42773b54.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-2a967270.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-33c8ee8e.js";import"./index-314a82e0.js";import"./index-11d98b33.js";import"./index-356e4a49.js";import"./index-8f383b84.js";import"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import"./chakra-ui-layout.esm-e0dbb94e.js";import"./index-6148c31a.js";import"./Heading-7eebc756.js";import"./Text-d88b2f7a.js";import"./VideoPlayer-3c20d99f.js";import"./ComponentWrapper-aa2910be.js";import"./useDSHeading-94e72700.js";import"./HelperErrorText-55c57f50.js";import"./Icon-4eeffe51.js";import"./List-582282a6.js";import"./Table-64c6aa77.js";const y=[{date:"2023-12-07",version:"2.1.3",type:"Update",affects:["Accessibility","Documentation"],notes:["Updated the `headingText` prop to allow JSX to render custom heading elements for accessible heading hierarchy."]}];function h(t){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",strong:"strong",em:"em",a:"a",h3:"h3"},a(),t.components);return i(s,{children:[n(p,{of:l}),`
`,n(e.h1,{id:"video-player",children:"Video Player"}),`
`,i(e.table,{children:[n(e.thead,{children:i(e.tr,{children:[n(e.th,{children:"Component Version"}),n(e.th,{children:"DS Version"})]})}),i(e.tbody,{children:[i(e.tr,{children:[n(e.td,{children:"Added"}),n(e.td,{children:n(e.code,{children:"0.23.2"})})]}),i(e.tr,{children:[n(e.td,{children:"Latest"}),n(e.td,{children:n(e.code,{children:"2.1.3"})})]})]})]}),`
`,n(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[`
`,n(r,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,i(e.li,{children:[`
`,n(r,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,i(e.li,{children:[`
`,n(r,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,i(e.li,{children:[`
`,n(r,{href:"#with-custom-heading",target:"_self",children:"With Custom Heading"}),`
`]}),`
`,i(e.li,{children:[`
`,n(r,{href:"#extracting-video-ids",target:"_self",children:"Extracting Video IDs"}),`
`]}),`
`,i(e.li,{children:[`
`,n(r,{href:"#example-embed-code-snippets",target:"_self",children:"Example Embed Code Snippets"}),`
`]}),`
`,i(e.li,{children:[`
`,n(r,{href:"#errored",target:"_self",children:"Errored"}),`
`]}),`
`,i(e.li,{children:[`
`,n(r,{href:"#html-in-helper-text",target:"_self",children:"HTML in Helper Text"}),`
`]}),`
`,i(e.li,{children:[`
`,n(r,{href:"#changelog",target:"_self",children:"Changelog"}),`
`]}),`
`]}),`
`,n(e.h2,{id:"overview",children:"Overview"}),`
`,n(m,{of:l}),`
`,i(e.p,{children:["The ",n(e.code,{children:"VideoPlayer"})," component is used to embed a ",n(e.code,{children:"Vimeo"})," or ",n(e.code,{children:"YouTube"}),` video player
on a page. The component requires the `,n(e.code,{children:"embedCode"})," prop or both the ",n(e.code,{children:"videoType"}),`
and `,n(e.code,{children:"videoId"}),` props. The component will not function properly if you try to set
all of them.`]}),`
`,i(e.p,{children:["You can extract the videoId from the video's URL. ",n(e.strong,{children:"IMPORTANT:"}),` Do not try to
enter the full video URL as the `,n(e.code,{children:"videoId"})," value."]}),`
`,i(e.p,{children:["The ",n(e.code,{children:"aspectRatio"}),` prop is used to control the sizing of the space allotted for
the video rendering. Ultimately, the `,n(e.code,{children:"aspectRatio"}),` prop should be set to match
the aspect ratio of the video that is being rendered. The default aspect ratio
is `,n(e.code,{children:"16:9"}),"."]}),`
`,n(e.h2,{id:"component-props",children:"Component Props"}),`
`,n(d,{of:c}),`
`,n(u,{of:c}),`
`,i(e.p,{children:[n(e.strong,{children:"Example Vimeo IDs:"})," ",n(e.code,{children:"474719268"}),", ",n(e.code,{children:"491405018"}),", ",n(e.code,{children:"493795778"})," (square)",n("br",{}),`
`,n(e.strong,{children:"Example YouTube IDs:"})," ",n(e.code,{children:"PfqgDG1qrKg"}),", ",n(e.code,{children:"roi5V8ppi7Y"}),", ",n(e.code,{children:"nm-dD2tx6bk"})]}),`
`,n(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,i(e.p,{children:["The ",n(e.code,{children:"VideoPlayer"})," component renders an ",n(e.code,{children:"iframe"}),` element with either a Vimeo or
YouTube video. `,n(e.code,{children:"iframe"}),"s can be accessible if a ",n(e.code,{children:"title"}),` attribute is provided.
When passing in a video type and a video `,n(e.code,{children:"id"}),`, make sure to pass a title.
Otherwise, the title must already be provided in the embed code value that is
passed to the `,n(e.code,{children:"embedCode"}),` prop. A default one is provided but a custom one is
recommended.`]}),`
`,i(e.p,{children:["Not all the Vimeo or YouTube videos passed to the ",n(e.code,{children:"VideoPlayer"}),` component will
be owned by The New York Public Library. Because these videos are hosted on a
third-party platform, we cannot guarantee that the video will be accessible.
Besides setting the `,n(e.code,{children:"title"})," in the embedded ",n(e.code,{children:"iframe"}),", there are ",n(e.em,{children:"some"}),` ways we
can reduce accessibility issues.`]}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:`Never use autoplay on videos; a user must click the play button to start the
video.`}),`
`,n(e.li,{children:`Always show all the video player's controls for the user to interact with the
video.`}),`
`,n(e.li,{children:"Keep the full screen option available."}),`
`]}),`
`,n(e.p,{children:"Resources:"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"https://www.w3.org/WAI/media/av/",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C Making Audio and Video Media Accessible"})}),`
`,n(e.li,{children:n(e.a,{href:"https://webaim.org/techniques/frames/",target:"_blank",rel:"nofollow noopener noreferrer",children:"WebAIM Creating Accessible Frames and Iframes"})}),`
`,n(e.li,{children:n(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe",target:"_blank",rel:"nofollow noopener noreferrer",children:"MDN iframe: The Inline Frame element"})}),`
`,n(e.li,{children:n(e.a,{href:"https://dequeuniversity.com/tips/provide-iframe-titles",target:"_blank",rel:"nofollow noopener noreferrer",children:"Deque University Be Sure to Provide Titles for Iframes"})}),`
`]}),`
`,n(e.h2,{id:"with-custom-heading",children:"With Custom Heading"}),`
`,i(e.p,{children:["By default, the ",n(e.code,{children:"VideoPlayer"})," will render an ",n(e.code,{children:"h2"}),` element when a string is
passed to the `,n(e.code,{children:"headingText"}),` component. If this is an accessibility issue, it's
possible to pass in a custom heading element.`]}),`
`,i(e.p,{children:["In the following example, an ",n(e.code,{children:"h4"})," is rendered through the DS ",n(e.code,{children:"Heading"})," component."]}),`
`,n(o,{code:`

const customH4 = <Heading level="h4">Custom H4 Heading</Heading>;

<VideoPlayer headingText={customH4} {...props} />
`,language:"tsx"}),`
`,n(d,{of:f}),`
`,n(e.h2,{id:"extracting-video-ids",children:"Extracting Video IDs"}),`
`,n(e.h3,{id:"vimeo",children:"Vimeo"}),`
`,n(o,{code:`
https://vimeo.com/[VIDEO_ID]
https://vimeo.com/474719268
`,language:"html"}),`
`,n(e.h3,{id:"youtube",children:"YouTube"}),`
`,n(o,{code:`
https://www.youtube.com/watch?v=[VIDEO_ID]
https://www.youtube.com/watch?v=nm-dD2tx6bk
`,language:"html"}),`
`,n(e.h2,{id:"example-embed-code-snippets",children:"Example Embed Code Snippets"}),`
`,n(e.p,{children:`The examples below are shown with precise HTML formatting. However, often the
embed code snippets provided by 3rd party video services are delivered as one
long string.`}),`
`,n(e.h3,{id:"vimeo-1",children:"Vimeo"}),`
`,n(o,{code:`
<iframe
  src="https://player.vimeo.com/video/421404144?h=5467db7edd"
  width="640"
  height="360"
  frameborder="0"
  allow="autoplay; fullscreen; picture-in-picture"
  allowfullscreen
></iframe>
`,language:"html"}),`
`,n(e.h3,{id:"youtube-1",children:"YouTube"}),`
`,n(o,{code:`
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
`,n(e.h2,{id:"errored",children:"Errored"}),`
`,i(e.p,{children:["If the necessary props are not passed to the ",n(e.code,{children:"VideoPlayer"}),` component, the
component UI will display an error message.`]}),`
`,n(d,{of:g}),`
`,n(e.h2,{id:"html-in-helper-text",children:"HTML in Helper Text"}),`
`,i(e.p,{children:["It's possible to include HTML in the ",n(e.code,{children:"helperText"})," prop."]}),`
`,n(d,{name:"HTML in Helper Text",of:b}),`
`,n(e.h2,{id:"changelog",children:"Changelog"}),`
`,n(v,{changelogData:y})]})}function Z(t={}){const{wrapper:e}=Object.assign({},a(),t.components);return e?n(e,Object.assign({},t,{children:n(h,t)})):h(t)}export{Z as default};
//# sourceMappingURL=VideoPlayer-44e98888.js.map
