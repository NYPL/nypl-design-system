import{u as r,j as e,M as a,L as o,S as i}from"./iframe-D93LbwGv.js";function s(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Development Guide/Conditional Viewport"}),`
`,e.jsx(n.h1,{id:"conditional-viewport",children:"Conditional Viewport"}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(o,{href:"#background-on-the-viewport-and-input-auto-zoom-issue",target:"_self",children:"Background on the viewport and input auto-zoom issue"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(o,{href:"#how-to-resolve",target:"_self",children:"How to resolve"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(o,{href:"#approach-for-nextjs-app-router-apps",target:"_self",children:"Approach for Next.js App Router apps"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(o,{href:"#approach-for-nextjs-pages-router-apps",target:"_self",children:"Approach for Next.js Pages Router apps"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"background-on-the-viewport-and-input-auto-zoom-issue",children:"Background on the viewport and input auto-zoom issue"}),`
`,e.jsxs(n.p,{children:[`The viewport is the visible area of a web page, which varies from device to device.
The user interacts with the viewport by scrolling or zooming in and out. The viewport's dimensions and scale can be set from the `,e.jsx(n.code,{children:"<meta>"})," tag."]}),`
`,e.jsx(n.p,{children:"On iOS devices, non-native websites will automatically zoom in when a user selects an input element (changing the scale of the viewport). This default is meant to ensure any input field is accessible for the visually impaired, but it generally forces users to zoom back out to continue viewing the page."}),`
`,e.jsxs(n.p,{children:[`This auto-zoom does not occur on Android mobile devices, so NYPL recommends preventing the auto-zoom on iOS to create a consistent experience across all devices.
Since design system components should be able to render regardless of browser/device context, `,e.jsx(n.strong,{children:"this requires a device-specific solution to be implemented by the consuming app"}),"."]}),`
`,e.jsx(n.h2,{id:"how-to-resolve",children:"How to resolve"}),`
`,e.jsxs(n.p,{children:["The general solution to prevent auto-zoom on iOS devices is to conditionally set the ",e.jsx(n.code,{children:"<meta>"})," viewport tag."]}),`
`,e.jsx(n.p,{children:"For iOS:"}),`
`,e.jsx(i,{code:`
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
`,language:"html"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"maximum-scale"}),` value prevents the auto-zoom from occurring on iOS, but when
applied on Android, it prevents users from zooming in correctly at all (which is
its own accessibility violation).`]}),`
`,e.jsx(n.p,{children:"So for everything else, the viewport tag should be:"}),`
`,e.jsx(i,{code:`
<meta name="viewport" content="width=device-width, initial-scale=1" />
`,language:"html"}),`
`,e.jsx(n.p,{children:`Setting the viewport conditionally requires capturing whether the device is iOS or not.
How you do this will depend on your app.`}),`
`,e.jsx(n.h3,{id:"approach-for-nextjs-app-router-apps",children:"Approach for Next.js App Router apps"}),`
`,e.jsxs(n.p,{children:["Using the App router, you can customize the initial viewport with the dynamic ",e.jsx(n.a,{href:"https://nextjs.org/docs/app/api-reference/functions/generate-viewport",rel:"nofollow",children:e.jsx(n.code,{children:"generateViewport()"})}),` function. This only works in a server component, so most likely will be defined near the root of your project in
the `,e.jsx(n.code,{children:"page.tsx"})," or ",e.jsx(n.code,{children:"layout.tsx"})," file."]}),`
`,e.jsxs(n.p,{children:["Then, you can access the ",e.jsx(n.a,{href:"https://nextjs.org/docs/app/api-reference/functions/userAgent",rel:"nofollow",children:e.jsx(n.code,{children:"userAgent"})})," object from Next's ",e.jsx(n.a,{href:"https://nextjs.org/docs/app/api-reference/functions/headers",rel:"nofollow",children:e.jsx(n.code,{children:"headers()"})})," function. If the current device is an iPhone, return the necessary viewport object."]}),`
`,e.jsx(i,{code:`

// layout.tsx or page.tsx

export async function generateViewport() {
const userAgent = headers().get("user-agent");
const isiPhone = /iphone/i.test(userAgent ?? "");
return isiPhone ? 
{ width: "device-width", initialScale: 1, maximumScale: 1, userScalable: false }
  : {};
}
  
`,language:"js"}),`
`,e.jsxs(n.p,{children:["This approach is currently implemented on ",e.jsx(n.a,{href:"https://github.com/NYPL/digital-collections/blob/8758f1106af59c4a76015d978700ec8baba6deb4/app/layout.tsx#L45",rel:"nofollow",children:"Digital Collections"}),"."]}),`
`,e.jsx(n.h3,{id:"approach-for-nextjs-pages-router-apps",children:"Approach for Next.js Pages Router apps"}),`
`,e.jsxs(n.p,{children:["In a Pages router app, you need to find the ",e.jsx(n.code,{children:"userAgent"}),` object from a client component (again, probably near the root of your project).
There are more ways to do this (and many packages), but here's an option:`]}),`
`,e.jsx(i,{code:`
import { Helmet } from "react-helmet";

const [isIOS, setIsIOS] = useState(false);

useEffect(() => {
const userAgent = typeof window !== "undefined" && navigator.userAgent;
if (userAgent && /iPad|iPhone|iPod/.test(userAgent)) {
  setIsIOS(true);
}
}, []);

const viewport = isIOS ?
(<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>)
: (<meta name="viewport" content="width=device-width" />);

return(
<>
<Helmet>{viewport}</Helmet>
...
</>
) 
`,language:"js"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://www.npmjs.com/package/react-helmet",rel:"nofollow",children:e.jsx(n.code,{children:"Helmet"})})," is a React package that injects html into the ",e.jsx(n.code,{children:"<header>"})," from the client component, necessary here because the ",e.jsx(n.code,{children:"useEffect()"}),` is reading
`,e.jsx(n.code,{children:"window.navigator"})," object to get ",e.jsx(n.code,{children:"userAgent"})," above. Once the device is known, you set the state to ",e.jsx(n.code,{children:"isIOS"})," and inject the viewport tag accordingly."]}),`
`,e.jsxs(n.p,{children:["This approach is currently implemented on ",e.jsx(n.a,{href:"https://github.com/NYPL/nypl-ds-test-app/blob/main/pages/_app.tsx",rel:"nofollow",children:"Turbine"}),"."]})]})}function l(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{l as default};
