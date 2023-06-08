import{j as i,a as f,F as T}from"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import{w as g}from"./index-6148c31a.js";import{L as b}from"./Link-0ed02cf7.js";import{V as s,a as x,b as V}from"./VideoPlayer-01410771.js";const I={title:"Components/Media & Icons/VideoPlayer",component:s,decorators:[g],argTypes:{aspectRatio:{controls:{type:"radio"},options:x,table:{defaultValue:{summary:"sixteenByNine"}}},className:{control:!1},id:{control:!1},showHelperInvalidText:{table:{defaultValue:{summary:!0}}},videoType:{controls:{type:"radio"},options:V}}},e={args:{aspectRatio:"sixteenByNine",className:void 0,descriptionText:"Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",embedCode:'<iframe src="https://player.vimeo.com/video/421404144?h=5467db7edd" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>',headingText:"NYPL Video",helperText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",id:"videoPlayer-id",iframeTitle:void 0,showHelperInvalidText:!0,videoId:void 0,videoType:void 0},parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?type=design&node-id=36835-25314&t=AEGDRpspvTyuSWSA-4"},jest:"VideoPlayer.test.tsx"},render:t=>i(s,{...t,aspectRatio:t.aspectRatio,embedCode:t.embedCode,videoId:t.videoId,videoType:t.videoType})},o={render:()=>i(s,{videoId:"https://vimeo.com/474719268",videoType:"vimeo"})},r={render:()=>i(s,{helperText:f(T,{children:["This helper text contains ",i("b",{children:"bold text"})," and a"," ",i(b,{href:"https://nypl.org",children:"link"}),"."]}),videoId:"474719268",videoType:"vimeo"})};var a,d,n,l,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(d=e.parameters)==null?void 0:d.docs)==null?void 0:n.source},description:{story:"Main Story for the VideoPlayer component. This must contains the `args`\nand `parameters` properties in this object.",...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.description}}};var p,c,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <VideoPlayer videoId="https://vimeo.com/474719268" videoType="vimeo" />
}`,...(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var y,v,h;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <VideoPlayer helperText={<>
          This helper text contains <b>bold text</b> and a{" "}
          <Link href="https://nypl.org">link</Link>.
        </>} videoId="474719268" videoType="vimeo" />
}`,...(h=(v=r.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const w=["WithControls","Errored","HTMLInHelperText"],H=Object.freeze(Object.defineProperty({__proto__:null,Errored:o,HTMLInHelperText:r,WithControls:e,__namedExportsOrder:w,default:I},Symbol.toStringTag,{value:"Module"}));export{o as E,r as H,H as V,e as W};
//# sourceMappingURL=VideoPlayer.stories-6c72ccb7.js.map
