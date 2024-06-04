/// <reference types="vite-plugin-svgr/client" />

declare module "react-autosuggest";

declare module "*.svg" {
  const content: any;
  export default content;
}
