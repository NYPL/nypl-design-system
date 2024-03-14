import{j as e,a as x,F as H}from"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import{w as I}from"./index-6148c31a.js";import{H as V}from"./Heading-7eebc756.js";import{L as w}from"./Link-24c1437a.js";import{V as a,a as C,b as P}from"./VideoPlayer-3c20d99f.js";const S={title:"Components/Media & Icons/VideoPlayer",component:a,decorators:[I],argTypes:{aspectRatio:{controls:{type:"radio"},options:C,table:{defaultValue:{summary:"sixteenByNine"}}},className:{control:!1},id:{control:!1},showHelperInvalidText:{table:{defaultValue:{summary:!0}}},videoType:{controls:{type:"radio"},options:P}}},o={args:{aspectRatio:"sixteenByNine",className:void 0,descriptionText:"Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",embedCode:'<iframe src="https://player.vimeo.com/video/421404144?h=5467db7edd" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>',headingText:"NYPL Video",helperText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",id:"videoPlayer-id",iframeTitle:void 0,showHelperInvalidText:!0,videoId:void 0,videoType:void 0},parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?type=design&node-id=36835-25314&t=AEGDRpspvTyuSWSA-4"},jest:"VideoPlayer.test.tsx"},render:i=>e(a,{...i,aspectRatio:i.aspectRatio,embedCode:i.embedCode,videoId:i.videoId,videoType:i.videoType})},r={render:()=>e(a,{headingText:e(V,{level:"h4",children:"Custom H4 Heading"}),videoId:"474719268",videoType:"vimeo"})},t={render:()=>e(a,{videoId:"https://vimeo.com/474719268",videoType:"vimeo"})},s={render:()=>e(a,{helperText:x(H,{children:["This helper text contains ",e("b",{children:"bold text"})," and a"," ",e(w,{href:"https://nypl.org",children:"link"}),"."]}),videoId:"474719268",videoType:"vimeo"})};var d,n,m,l,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    aspectRatio: "sixteenByNine",
    className: undefined,
    descriptionText: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    embedCode: \`<iframe src="https://player.vimeo.com/video/421404144?h=5467db7edd" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>\`,
    headingText: "NYPL Video",
    helperText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
    id: "videoPlayer-id",
    iframeTitle: undefined,
    showHelperInvalidText: true,
    videoId: undefined,
    videoType: undefined
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?type=design&node-id=36835-25314&t=AEGDRpspvTyuSWSA-4"
    },
    jest: "VideoPlayer.test.tsx"
  },
  render: args => <VideoPlayer {...args} aspectRatio={args.aspectRatio} embedCode={args.embedCode} videoId={args.videoId} videoType={args.videoType} />
}`,...(m=(n=o.parameters)==null?void 0:n.docs)==null?void 0:m.source},description:{story:"Main Story for the VideoPlayer component. This must contains the `args`\nand `parameters` properties in this object.",...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.description}}};var c,u,y;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <VideoPlayer headingText={<Heading level="h4">Custom H4 Heading</Heading>} videoId="474719268" videoType="vimeo" />
}`,...(y=(u=r.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var v,h,g;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <VideoPlayer videoId="https://vimeo.com/474719268" videoType="vimeo" />
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,T,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <VideoPlayer helperText={<>
          This helper text contains <b>bold text</b> and a{" "}
          <Link href="https://nypl.org">link</Link>.
        </>} videoId="474719268" videoType="vimeo" />
}`,...(b=(T=s.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};const j=["WithControls","WithCustomHeading","Errored","HTMLInHelperText"],W=Object.freeze(Object.defineProperty({__proto__:null,Errored:t,HTMLInHelperText:s,WithControls:o,WithCustomHeading:r,__namedExportsOrder:j,default:S},Symbol.toStringTag,{value:"Module"}));export{t as E,s as H,W as V,o as W,r as a};
//# sourceMappingURL=VideoPlayer.stories-517de222.js.map
