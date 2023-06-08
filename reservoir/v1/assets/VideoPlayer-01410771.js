import{j as r}from"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import{r as I}from"./index-f2bd0723.js";import{C as _}from"./ComponentWrapper-82a15cf7.js";import{f as q,u as N,B as s}from"./chakra-ui-layout.esm-b2fa9d31.js";const H=["fourByThree","sixteenByNine","square"],B=["vimeo","youtube"],y=q(I.forwardRef((l,f)=>{const{aspectRatio:h,className:v,descriptionText:p,embedCode:t,headingText:c,helperText:u,id:m,iframeTitle:n,showHelperInvalidText:T=!0,videoId:e,videoType:a,...b}=l,g=a==="vimeo"?n||"Vimeo video player":n||"YouTube video player",V=a==="vimeo"?`https://player.vimeo.com/video/${e}?autoplay=0&loop=0`:`https://www.youtube.com/embed/${e}?disablekb=1&autoplay=0&fs=1&modestbranding=0`,x=n?`${n}`:"Video player",i=t&&t.includes("<iframe")&&!t.includes("title=")?t.replace("<iframe ",`<iframe title="${x}" `):t,w="<strong>Error:</strong> This video player has not been configured properly. Please contact the site administrator.";let o=!1;!i&&!a&&!e?(console.warn("NYPL Reservoir VideoPlayer: Pass in either the `embedCode` prop or both the `videoType` and `videoId` props; none were passed."),o=!0):!i&&!a?(console.warn("NYPL Reservoir VideoPlayer: The `videoType` prop is also required. Only the `videoId` prop was set."),o=!0):!i&&!e?(console.warn("NYPL Reservoir VideoPlayer: The `videoId` prop is also required. Only the `videoType` prop was set."),o=!0):i&&(a||e)&&(console.warn("NYPL Reservoir VideoPlayer: Pass in either the `embedCode` prop or both the `videoType` and `videoId` props; all were set."),o=!0),e&&(e.includes("://")||e.includes("http")||e.includes(".")||e.includes("youtube")||e.includes("vimeo"))&&(console.warn("NYPL Reservoir VideoPlayer: The `videoId` prop is not configured properly."),o=!0),i&&(!i.includes("vimeo.com")&&!i.includes("youtube.com")||!i.includes("<iframe")||!i.includes("</iframe"))&&(console.warn("NYPL Reservoir VideoPlayer: The `embedCode` prop is not configured properly."),o=!0);const d=N("VideoPlayer",{variant:o?"invalid":h}),P=i?r("span",{dangerouslySetInnerHTML:{__html:i}}):r(s,{as:"iframe",src:V,title:g,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture",allowFullScreen:!0,__css:d.iframe});return r(s,{className:v,"data-testid":"video-player-component",id:m,ref:f,__css:d,...b,children:o?r("span",{dangerouslySetInnerHTML:{__html:w}}):r(_,{headingText:c||void 0,descriptionText:p||void 0,helperText:u&&T?u:void 0,id:`${m}-componentWrapper`,children:r(s,{__css:d.inside,children:P})})})}));try{y.displayName="VideoPlayer",y.__docgenInfo={description:"",displayName:"VideoPlayer",props:{className:{defaultValue:null,description:"Optional className you can add in addition to `video-player`",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"ID that other components can cross reference for accessibility purposes",name:"id",required:!1,type:{name:"string"}},aspectRatio:{defaultValue:null,description:"Optional aspect ratio prop to control the sizing of the video player; if\nomitted, the video player defaults to `sixteen-by-nine`",name:"aspectRatio",required:!1,type:{name:'"fourByThree" | "sixteenByNine" | "square"'}},descriptionText:{defaultValue:null,description:"Optional string to set the text for a video description",name:"descriptionText",required:!1,type:{name:"string"}},embedCode:{defaultValue:null,description:"Optional string to set a code snippet provided by YouTube or Vimeo; the\n`videoPlayer` component will accept the `embedCode` prop or the `videoId`\nand `videoType` props",name:"embedCode",required:!1,type:{name:"string"}},headingText:{defaultValue:null,description:"Optional string to set the text for a `Heading` component",name:"headingText",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"Optional string to set the text for a `HelperErrorText` component",name:"helperText",required:!1,type:{name:"HelperErrorTextType"}},iframeTitle:{defaultValue:null,description:"Optional title to be added to the `<iframe>` element for improved\naccessibility; this title should describe in a few words the content of\nthe video; if omitted, a generic title will be added; if a `title`\nattribute is already present in the `embedCode` prop, this prop will be\nignored",name:"iframeTitle",required:!1,type:{name:"string"}},showHelperInvalidText:{defaultValue:null,description:"Offers the ability to hide the helper/invalid text.",name:"showHelperInvalidText",required:!1,type:{name:"boolean"}},videoId:{defaultValue:null,description:`Required YouTube or Vimeo video ID. This value can be pulled from a
video's YouTube or Vimeo URL.`,name:"videoId",required:!1,type:{name:"string"}},videoType:{defaultValue:null,description:"Required. Used to specify which video service is being used.",name:"videoType",required:!1,type:{name:'"vimeo" | "youtube"'}}}}}catch{}export{y as V,H as a,B as b};
//# sourceMappingURL=VideoPlayer-01410771.js.map
