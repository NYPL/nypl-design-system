import{j as o,a as l,F as a}from"./jsx-runtime-09ad29cb.js";import{M as p,D as m,C as i,A as g,b as r}from"./index-42243e0e.js";import{L as d,W as t,S as f,A as u,C as v}from"./Logo.stories-c57eb745.js";import{L as n}from"./Link-0ed02cf7.js";import{u as s}from"./index-a14fc4fc.js";import"./index-f2bd0723.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-b32021bd.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-86fba1ca.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-22f77b05.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-944fe3e7.js";import"./index-0a26bc51.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-b629ee11.js";import"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import"./chakra-ui-layout.esm-b2fa9d31.js";import"./index-6148c31a.js";import"./Logo-67d61164.js";import"./Icon-6616a4b9.js";import"./Heading-2ec2ea62.js";import"./SimpleGrid-e54e0b68.js";function h(c){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",a:"a"},s(),c.components);return l(a,{children:[o(p,{of:d}),`
`,o(e.h1,{id:"logo",children:"Logo"}),`
`,l(e.table,{children:[o(e.thead,{children:l(e.tr,{children:[o(e.th,{children:"Component Version"}),o(e.th,{children:"DS Version"})]})}),l(e.tbody,{children:[l(e.tr,{children:[o(e.td,{children:"Added"}),o(e.td,{children:o(e.code,{children:"0.25.9"})})]}),l(e.tr,{children:[o(e.td,{children:"Latest"}),o(e.td,{children:o(e.code,{children:"1.5.2"})})]})]})]}),`
`,o(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,l(e.ul,{children:[`
`,l(e.li,{children:[`
`,o(n,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,l(e.li,{children:[`
`,o(n,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,l(e.li,{children:[`
`,o(n,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,l(e.li,{children:[`
`,o(n,{href:"#sizes",target:"_self",children:"Sizes"}),`
`]}),`
`,l(e.li,{children:[`
`,o(n,{href:"#all-logos",target:"_self",children:"All Logos"}),`
`]}),`
`,l(e.li,{children:[`
`,o(n,{href:"#custom-logos",target:"_self",children:"Custom Logos"}),`
`]}),`
`]}),`
`,o(e.h2,{id:"overview",children:"Overview"}),`
`,o(m,{of:d}),`
`,o(e.h2,{id:"component-props",children:"Component Props"}),`
`,o(i,{of:t}),`
`,o(g,{of:t}),`
`,o(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,l(e.p,{children:["For accessibility purposes, every Reservoir Design System (DS) ",o(e.code,{children:"Logo"}),` will
render the `,o(e.code,{children:"svg"})," element with its ",o(e.code,{children:"svg"})," file name in the ",o(e.code,{children:"title"}),` element. The
default text in the `,o(e.code,{children:"title"}),` element is the logo's code name. Pass in better
descriptive text in the `,o(e.code,{children:"title"})," prop when using the ",o(e.code,{children:"Logo"}),` component in your
application. This will give screenreaders a better descriptive title for the
`,o(e.code,{children:"svg"})," graphic."]}),`
`,l(e.p,{children:[o(e.code,{children:"Logos"}),`s are decorative by default. This means that they are presentational and
screenreaders will not read them because the `,o(e.code,{children:"aria-hidden"}),` attribute is set to
`,o(e.code,{children:"true"}),"."]}),`
`,o(e.p,{children:"Resources:"}),`
`,l(e.ul,{children:[`
`,o(e.li,{children:o(e.a,{href:"https://design-system.w3.org/styles/svg-icons.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C Design System SVG Icons"})}),`
`,o(e.li,{children:o(e.a,{href:"https://css-tricks.com/accessible-svg-icons/",target:"_blank",rel:"nofollow noopener noreferrer",children:"CSS-Tricks Accessible SVG Icons"})}),`
`,o(e.li,{children:o(e.a,{href:"https://chakra-ui.com/docs/components/media-and-icons/icon",target:"_blank",rel:"nofollow noopener noreferrer",children:"Chakra UI Icon"})}),`
`]}),`
`,o(e.h2,{id:"sizes",children:"Sizes"}),`
`,l(e.p,{children:["Update the size of the ",o(e.code,{children:"Logo"})," component by passing the ",o(e.code,{children:"size"}),` prop with a value
from the `,o(e.code,{children:"LogoSizes"})," type. The values are ",o(e.code,{children:'"default"'}),", ",o(e.code,{children:'"xxsmall"'}),", ",o(e.code,{children:'"xsmall"'}),`,
`,o(e.code,{children:'"small"'}),", ",o(e.code,{children:'"medium"'}),", and ",o(e.code,{children:'"large"'}),"."]}),`
`,l(e.p,{children:["Note: ",o(e.code,{children:'"default"'})," sets the width to ",o(e.code,{children:"100%"}),` and the rendered logo will expand to
fill the full width of the parent element.`]}),`
`,o(r,{code:`
// Example
<Logo name="nyplFullBlack" size="large" />
`,language:"jsx"}),`
`,o(i,{of:f}),`
`,o(e.h2,{id:"all-logos",children:"All Logos"}),`
`,l(e.p,{children:["Update the icon of the ",o(e.code,{children:"Logo"})," component by passing the ",o(e.code,{children:"name"}),` prop with a value
from the `,o(e.code,{children:"LogoNames"})," type. The values are ",o(e.code,{children:'"appleAppStoreBlack"'}),`,
`,o(e.code,{children:'"appleAppStoreWhite"'}),",",o(e.code,{children:'"bplBlack"'}),", ",o(e.code,{children:'"bplWhite"'}),", ",o(e.code,{children:'"cleverBadgeColor"'}),`,
`,o(e.code,{children:'"cleverColor"'}),", ",o(e.code,{children:'"cleverWhite"'}),", ",o(e.code,{children:'"digitalCollectionsBlack"'}),`,
`,o(e.code,{children:'"digitalCollectionsWhite"'}),", ",o(e.code,{children:'"firstbookColor"'}),", ",o(e.code,{children:'"firstbookColorNegative"'}),`,
`,o(e.code,{children:'"googlePlayBlack"'}),", ",o(e.code,{children:'"lpaBlack"'}),", ",o(e.code,{children:'"lpaColor"'}),", ",o(e.code,{children:'"lpaWhite"'}),", ",o(e.code,{children:'"mlnBlack"'}),`,
`,o(e.code,{children:'"mlnColor"'}),", ",o(e.code,{children:'"mlnWhite"'}),", ",o(e.code,{children:'"nycdoeBlack"'}),", ",o(e.code,{children:'"nycdoeColor"'}),", ",o(e.code,{children:'"nycdoeWhite"'}),`,
`,o(e.code,{children:'"nyplFullBlack"'}),", ",o(e.code,{children:'"nyplFullWhite"'}),", ",o(e.code,{children:'"nyplLionBlack"'}),", ",o(e.code,{children:'"nyplLionWhite"'}),`,
`,o(e.code,{children:'"nyplTextBlack"'}),", ",o(e.code,{children:'"nyplTextWhite"'}),", ",o(e.code,{children:'"openebooksColor"'}),`,
`,o(e.code,{children:'"openebooksNegative"'}),", ",o(e.code,{children:'"openebooksWithTextColor"'}),`,
`,o(e.code,{children:'"openebooksWithTextNegative"'}),", ",o(e.code,{children:'"qplAltBlack"'}),", ",o(e.code,{children:'"qplAltWhite"'}),", ",o(e.code,{children:'"qplBlack"'}),`,
`,o(e.code,{children:'"qplColor"'}),", ",o(e.code,{children:'"qplWhite"'}),", ",o(e.code,{children:'"reservoirIconColor"'}),", ",o(e.code,{children:'"reservoirVerticalColor"'}),`,
`,o(e.code,{children:'"schomburgBlack"'}),", ",o(e.code,{children:'"schomburgCircleBlack"'}),", ",o(e.code,{children:'"schomburgCircleColor"'}),`,
`,o(e.code,{children:'"schomburgCircleWhite"'}),", ",o(e.code,{children:'"schomburgColor"'}),", ",o(e.code,{children:'"schomburgWhite"'}),`,
`,o(e.code,{children:'"simplyeBlack"'}),", ",o(e.code,{children:'"simplyeWhite"'}),", ",o(e.code,{children:'"simplyeColor"'}),", ",o(e.code,{children:'"snflBlack"'}),`,
`,o(e.code,{children:'"snflWhite"'}),", ",o(e.code,{children:'"treasuresColor"'}),", ",o(e.code,{children:'"treasuresColorNegative"'}),"."]}),`
`,l(e.p,{children:["If you feel a necessary logo should be added to the ",o(e.code,{children:"Logo"}),` component, please
reach out to the DS team.`]}),`
`,o(i,{of:u}),`
`,o(e.h2,{id:"custom-logos",children:"Custom Logos"}),`
`,l(e.p,{children:["If you'd like to pass a custom ",o(e.code,{children:"svg"}),` to your application, you can pass it a
child to the `,o(e.code,{children:"Logo"})," component."]}),`
`,o(r,{code:`
<Logo {...props}>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.756 192.756">
    <g fillRule="evenodd" clipRule="evenodd">
      <path fill="#fff" d="M0 0h192.756v192.756H0V0z" />
      <path
        d="M59.73 117.578c-9.859-4.912-23.261-15.887-23.413-27.06C36.149 78.129 44.451 75.087 50 75.087c5.701 0 8.286 3.345 10.637 5.777 2.352-2.433 4.936-5.777 10.637-5.777 5.549 0 13.851 3.042 13.682 15.431-.151 11.173-13.553 22.148-23.412 27.06-.35.174-.629.262-.907.262s-.557-.088-.907-.262z"
        fill="#c23c40"
      />
      <path d="M184.252 78.225c-.027 1.111-.355 1.921-.799 2.399-.871.945-3.1 1.067-4.283.854-.668-.12-1.309-.167-1.66-.137-1.551.136-2.398 1.115-3.242 2.45l-10.377 16.423-.154 6.727c-.033 1.535.287 2.881 2.066 2.799l2.865-.135c1.725-.08 3.35 1.029 3.4 2.867.064 2.359-1.807 3.393-3.943 3.275-1.338-.072-2.559-.275-3.666-.477-2.355-.428-3.977-.279-6.332 0-2.189.262-3.879.43-5.055.4-1.895-.045-3.725-.988-3.91-2.957-.178-1.898 1.297-3.191 3.186-3.041l2.5.199c.963.076 2.232-.406 2.256-1.533l.152-7.555-10.803-17.373c-.588-.948-1.52-1.538-2.42-1.877-1.156-.435-2.35-.464-3.568-.309-.988.125-1.16.01-1.414-.001-2.166-.093-3.1-1.048-2.988-3.064.139-2.505 1.543-2.885 3.936-2.885.412 0 1.391.005 3.344.285 1.43.206 2.609.099 3.531.067 2.436-.083 4.973-.545 7.377-.479 1.334.037 2.285.338 2.943.667.92.459 1.506 1.161 1.473 2.348-.031 1.144-.484 2.161-1.139 2.645-.496.367-1.848.417-2.902.417-1.92-.046-1.844 1.094-1.24 1.651l7.008 11.204 7.336-11.487c.148-.59.916-1.602-1.146-1.365-.637.073-.715.087-1.48.064-1.1-.033-1.854-.247-2.266-.544-1.348-.974-1.18-1.916-.943-3.322.17-1.019.986-1.48 1.877-1.744.928-.275 1.896-.259 2.871-.267 1.105-.009 2.221.111 3.295.272 1.99.297 3.414.306 5.398.066 1.379-.167 3.006-.5 4.559-.488 1.062.008 2.092.056 2.984.551.867.484 1.4 1.278 1.373 2.41zM31.561 112.531c-.116 2.684-2.242 2.799-4.345 2.799-2.14 0-4.302-.387-6.455-.387-2.396 0-4.788.17-7.178.396-2.739.262-4.681-.342-4.576-2.869.07-1.703 1.047-2.818 3.117-2.814l2.783.004c1.497.002 2.085-1.572 2.082-2.721l-.098-23.305c-.004-1.258-.422-2.46-1.917-2.431l-3.169.064c-2.091.042-3.322-1.33-3.301-3.214.026-2.372 1.934-2.958 3.873-2.897.678.021 2.127.043 3.023.136 1.53.157 3.13.141 4.67.141 2.369 0 4.682-.372 7.012-.372 2.197 0 4.145.564 4.274 3.233.078 1.624-1.636 2.807-3.479 2.776l-2.155-.035c-1.634-.027-2.604 1.158-2.587 2.501l.294 23.462c.028 2.24 1.216 2.869 3.008 2.85l2.109-.025c1.58-.02 3.098.777 3.015 2.708zM135.311 78.065c-.084 2.73-1.73 3.344-4.244 3.344 0-.041-4.09-.461-4.09 1.686v26.908c0 3.244-1.57 6.314-5.01 6.314-2.217 0-4.641-1.143-5.557-3.271l-12.846-29.84-.061 23.363c-.004 1.895.496 2.963 2.393 2.908l2.344-.066c2.098-.061 3.543 1.082 3.482 3.266-.066 2.418-1.879 2.932-3.93 2.932-2.467 0-4.818-.783-7.248-.666-2.58.123-5.081.484-7.668.484-2.227 0-3.915-.693-3.915-3.283 0-2.166 1.352-2.596 3.254-2.637l2.58-.055c1.54-.031 2.489-.662 2.489-1.975V82.78c0-1.262-.493-1.895-2.204-1.835l-2.213.079c-2.608.092-3.612-.421-3.543-3.023.061-2.28 1.595-3.273 4.478-3.052 1.569.12 3.148.301 4.722.301 1.721 0 3.434-.042 5.148-.042 2.891 0 4.029 1.753 5.182 4.37l11.777 26.751V83.664c0-1.012-.412-1.794-.732-2.11-.322-.316-.822-.481-1.475-.478l-2.693.019c-1.971.012-3.658-.844-3.623-2.685.055-3.006 2.82-3.496 5.285-3.399 2.385.094 4.965.742 7.32.667 2.227-.071 4.461-.646 6.697-.533 2.885.147 3.951 1.244 3.901 2.92zM179.455 107.746c1.111 0 2.096.396 2.951 1.186.896.832 1.346 1.836 1.346 3.012 0 1.426-.506 2.523-1.518 3.297a4.258 4.258 0 0 1-2.643.902h-.211c-1.004 0-1.926-.42-2.766-1.26-.838-.84-1.258-1.791-1.258-2.852v-.174c0-1.16.398-2.135 1.197-2.926.801-.788 1.767-1.185 2.902-1.185zm.408 3.951c.346 0 .615-.082.809-.246.193-.166.291-.363.291-.594a.77.77 0 0 0-.266-.58c-.178-.164-.422-.246-.736-.246h-1.543v1.666h1.445zm-.308-3.345c-.814 0-1.576.279-2.283.84-.891.699-1.334 1.646-1.334 2.84 0 .914.359 1.742 1.08 2.486.721.746 1.533 1.117 2.438 1.117h.148c.906 0 1.723-.367 2.451-1.104s1.092-1.6 1.092-2.588c0-.971-.359-1.812-1.08-2.523-.719-.713-1.557-1.068-2.512-1.068zm-1.741 1.171h2.221c.504 0 .902.141 1.199.42.264.256.395.561.395.914 0 .338-.125.633-.377.883-.25.252-.6.377-1.043.377l-.174-.012 1.408 2.172h-.703l-1.359-2.074h-.963v2.074h-.604v-4.754z" />
    </g>
  </svg>
</Logo>
`,language:"tsx"}),`
`,o(i,{of:v})]})}function G(c={}){const{wrapper:e}=Object.assign({},s(),c.components);return e?o(e,Object.assign({},c,{children:o(h,c)})):h(c)}export{G as default};
//# sourceMappingURL=Logo-5e146a0c.js.map
