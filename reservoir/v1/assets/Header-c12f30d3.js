import{j as n,a as o,F as l}from"./jsx-runtime-09ad29cb.js";import{M as h,b as d}from"./index-5d3bb37f.js";import{L as t}from"./Link-0ed02cf7.js";import{u as a}from"./index-a14fc4fc.js";import"./index-f2bd0723.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-359c5387.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-86fba1ca.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-22f77b05.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-944fe3e7.js";import"./index-0a26bc51.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-b629ee11.js";import"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import"./chakra-ui-layout.esm-b2fa9d31.js";import"./Icon-6616a4b9.js";function i(r){const e=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",p:"p",code:"code",a:"a",em:"em",h3:"h3"},a(),r.components);return o(l,{children:[n(h,{title:"Development Guide/Header"}),`
`,n(e.h1,{id:"header",children:"Header"}),`
`,n(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,o(e.ul,{children:[`
`,o(e.li,{children:[`
`,n(t,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,o(e.li,{children:[`
`,n(t,{href:"#implementation",target:"_self",children:"Implementation"}),`
`]}),`
`,o(e.li,{children:[`
`,n(t,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,o(e.li,{children:[`
`,n(t,{href:"#skip-navigation",target:"_self",children:"Skip Navigation"}),`
`]}),`
`,o(e.li,{children:[`
`,n(t,{href:"#catalog-log-in",target:"_self",children:"Catalog Log In"}),`
`]}),`
`,o(e.li,{children:[`
`,n(t,{href:"#search",target:"_self",children:"Search"}),`
`]}),`
`,o(e.li,{children:[`
`,n(t,{href:"#navigation",target:"_self",children:"Navigation"}),`
`]}),`
`,o(e.li,{children:[`
`,n(t,{href:"#header-log-in-timeout",target:"_self",children:"Header Log In Timeout"}),`
`]}),`
`]}),`
`,n(e.h2,{id:"overview",children:"Overview"}),`
`,o(e.p,{children:["The NYPL ",n(e.code,{children:"Header"}),` is the top most feature on NYPL sites. Even though this component
appears on various NYPL digital applications, it is itself a separate application
that gets embedded on said digital applications. This complex component is composed
using the Reservoir Design System and contains features for logging in, logging
out, searching, and navigating the NYPL.org site.`]}),`
`,o(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"https://ds-header.nypl.org/header",target:"_blank",rel:"nofollow noopener noreferrer",children:"NYPL Header Preview"})}),`
`,n(e.li,{children:n(e.a,{href:"https://github.com/NYPL/nypl-header-app",target:"_blank",rel:"nofollow noopener noreferrer",children:"NYPL Header App Github repo"})}),`
`]}),`
`,o(e.p,{children:["The ",n(e.code,{children:"Header"})," component:"]}),`
`,o(e.ul,{children:[`
`,n(e.li,{children:"fetches data from different APIs,"}),`
`,o(e.li,{children:["uses the DS' ",n(e.code,{children:"SkipNavigation"})," component for webpage accessibility,"]}),`
`,n(e.li,{children:"has static NYPL.org navigational links,"}),`
`,o(e.li,{children:["a log in form for patrons to log into NYPL's ",n(e.a,{href:"https://nypl.na2.iiivega.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Catalog"}),`
and `,n(e.a,{href:"https://www.nypl.org/research/research-catalog/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Research Catalog"}),","]}),`
`,o(e.li,{children:["a search form for patrons to search the Catalog and across ",n(e.a,{href:"https://www.nypl.org/",target:"_blank",rel:"nofollow noopener noreferrer",children:"NYPL.org"}),"."]}),`
`]}),`
`,n(e.h2,{id:"implementation",children:"Implementation"}),`
`,o(e.p,{children:["The ",n(e.code,{children:"Header"})," should be embedded on an NYPL app through the following code snippet:"]}),`
`,n(d,{code:`
<style>
  #header-placeholder {
    minheight: 70px;
  }
  @media screen and (min-width: 1024px) {
    #header-placeholder {
      min-height: 230px;
    }
  }
</style>
<!-- .... -->
<div id="header-placeholder">
  <div id="nypl-header"></div>
  <script
    type="module"
    src="https://ds-header.nypl.org/header.min.js?containerId=nypl-header"
    async
  ><\/script>
</div>
  `,language:"html"}),`
`,o(e.p,{children:["The placeholder styles and ",n(e.code,{children:"div"}),` wrapper are additional elements that are used
to mitigate the "jumping" effect that occurs when the `,n(e.code,{children:"Header"}),` is loaded on a
page. The `,n(e.code,{children:"Header"}),` script is loaded asynchronously and this means that the
`,n(e.code,{children:"Header"}),` will render after the rest of the page is rendered and it will push the
main content down. The fixed height of the placeholder `,n(e.code,{children:"div"}),` prevents the main
content from jumping down. Note that we cannot predict the length of the alert
text in the banner (in any) and the page may still jump but not by much.`]}),`
`,n(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,o(e.p,{children:["The ",n(e.code,{children:"Header"}),` component contains multiple native HTML elements that work together
to make the component accessible. It contains:`]}),`
`,o(e.ul,{children:[`
`,n(e.li,{children:"Skip navigation - More information about this feature in the following section."}),`
`,o(e.li,{children:["Notification ",n(e.code,{children:"<aside>"}),` HTML element - This landmark element renders NYPL alert
messages. Per accessibility guidelines, this element cannot be nested within
the `,n(e.code,{children:"<header>"}),` element, so it is rendered above. More information can be found
in the `,n(e.a,{href:"../?path=/docs/components-feedback-notification--docs#accessibility",children:"Notification Accessibility"}),`
section.`]}),`
`,o(e.li,{children:[n(e.code,{children:"<header>"}),` HTML element - This landmark element denotes the top content section
of the page. There should only be one main `,n(e.code,{children:"<header>"}),` element on the page as a
child of the `,n(e.code,{children:"<body>"})," element."]}),`
`,o(e.li,{children:[n(e.code,{children:"<nav>"})," HTML elements - The ",n(e.code,{children:"Header"})," component renders one (1) ",n(e.code,{children:"<nav>"}),` element
in the mobile view and two (2) `,n(e.code,{children:"<nav>"})," elements in the desktop view. Each ",n(e.code,{children:"<nav>"}),`
element appropriately contains its own `,n(e.code,{children:"aria-label"}),` attribute to differentiate
it from one another.`]}),`
`,o(e.li,{children:[n(e.code,{children:"<form>"})," HTML element - The ",n(e.code,{children:"<form>"})," element is used in the search feature."]}),`
`,o(e.li,{children:["Dropdowns buttons with focus-trap feature - The ",n(e.code,{children:"Header"})," uses ",n(e.code,{children:"react-focus-lock"}),`
to trap (or loop) focus within its various dropdowns: the login submenu, the
search form, and the mobile navigation submenu. This is to make keyboard
navigation easier for users. Trapping focus means that when a parent element is
clicked and its dropdown becomes visible, focus remains among its children
while the user tabs. The user may close the dropdown and escape the focus trap
by clicking on the parent element once again, or by using the escape key.
Note: This is how the original NYPL `,n(e.code,{children:"Header"}),` was implemented and its Reservoir
counterpart replicates this behavior. However, this is not the
`,n(e.em,{children:"currently recommended"}),` way to implement focus management in dropdowns.
According to the `,n(e.a,{href:"https://www.w3.org/wiki/MenuButton",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C"}),`, up and down arrow
keys, rather than tab, should loop focus over child elements. Tabbing should
instead close the dropdown and move focus to the following parent. In the
future, we hope to change the Reservoir Header to align with current best
practices.`]}),`
`]}),`
`,n(e.p,{children:"Resources:"}),`
`,o(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header#page_header",target:"_blank",rel:"nofollow noopener noreferrer",children:"MDN header"})}),`
`,n(e.li,{children:n(e.a,{href:"https://www.w3.org/WAI/tutorials/page-structure/regions/#page-header",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C Page Regions, Page header"})}),`
`,n(e.li,{children:n(e.a,{href:"https://www.w3.org/WAI/tutorials/page-structure/regions/#navigation",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C Page Regions, Navigation"})}),`
`,n(e.li,{children:n(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav",target:"_blank",rel:"nofollow noopener noreferrer",children:"MDN nav: The Navigation Section element"})}),`
`,n(e.li,{children:n(e.a,{href:"https://www.w3.org/WAI/tutorials/page-structure/labels/",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C Labeling Regions"})}),`
`,n(e.li,{children:n(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form",target:"_blank",rel:"nofollow noopener noreferrer",children:"MDN form: The Form element"})}),`
`,n(e.li,{children:n(e.a,{href:"https://www.w3.org/wiki/MenuButton",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C MenuButton"})}),`
`]}),`
`,n(e.h2,{id:"skip-navigation",children:"Skip Navigation"}),`
`,o(e.p,{children:["The ",n(e.code,{children:"Header"})," component implements the DS ",n(e.code,{children:"SkipNavigation"}),` component. More
information about the component can be found in the
`,n(e.a,{href:"../?path=/docs/components-navigation-skipnavigation--docs",children:"Storybook documentation"}),`
and why we should use it in its
`,n(e.a,{href:"../?path=/docs/accessibility-guide-skip-navigation--docs",children:"accessibility guideline"}),"."]}),`
`,o(e.p,{children:["It is important to note that the ",n(e.code,{children:"SkipNavigation"}),` component expects that the page
it is on has a `,n(e.code,{children:"main"})," HTML element with an ",n(e.code,{children:"id"})," of ",n(e.code,{children:"mainContent"}),`. This allows
the first link in the skip navigation to function correctly.`]}),`
`,o(e.p,{children:[`The second link in the skip navigation points to
`,n(e.a,{href:"https://www.nypl.org/accessibility",target:"_blank",rel:"nofollow noopener noreferrer",children:"NYPL's accessibility resource"}),"."]}),`
`,n(e.h3,{id:"templateappcontainer",children:"TemplateAppContainer"}),`
`,o(e.p,{children:["The DS ",n(e.a,{href:"../?path=/docs/components-page-layout-template--docs",children:n(e.code,{children:"TemplateAppContainer"})}),`
component renders the same `,n(e.code,{children:"SkipNavigation"})," component that the ",n(e.code,{children:"Header"}),` component
renders. When using both the `,n(e.code,{children:"Header"})," and the ",n(e.code,{children:"TemplateAppContainer"}),` components,
set the `,n(e.code,{children:"renderSkipNavigation"})," prop in the ",n(e.code,{children:"TemplateAppContainer"}),` component to
`,n(e.code,{children:"false"}),". This will prevent two ",n(e.code,{children:"SkipNavigation"})," components from being rendered."]}),`
`,n(e.h2,{id:"catalogs-log-in",children:"Catalogs Log In"}),`
`,o(e.p,{children:["While the ",n(e.code,{children:"Header"}),` doesn't perform authentication, it does determine whether a user is
logged in and, if they are, renders a logged in UI, which includes the patron's name.`]}),`
`,o(e.p,{children:["This process begins after the ",n(e.code,{children:"Header"}),` mounts. At that time, it looks for the
`,n(e.code,{children:"nyplIdentityPatron"})," cookie. If it exists, an ",n(e.code,{children:"accessToken"}),` is extracted from the cookie
and sent via fetch request to the `,n(e.code,{children:"patronApiUrl"}),`. If the request is successful, the
patron's name is returned. The name is then stored in a React Context variable called
`,n(e.code,{children:"HeaderContext"}),", which is available to all children of the ",n(e.code,{children:"Header"}),`. The existence of the
patron's name in `,n(e.code,{children:"HeaderContext"})," causes the ",n(e.code,{children:"HeaderLoginButton"})," and ",n(e.code,{children:"HeaderLogin"}),` to
render their "logged in" view.`]}),`
`,o(e.p,{children:["There is the possibility that the call to the ",n(e.code,{children:"patronApiUrl"}),` returns a response with a
`,n(e.code,{children:"statusCode"})," of 401 and an ",n(e.code,{children:"expired"})," key set to true. This means the ",n(e.code,{children:"accessToken"}),` is
expired. If this is the case, the `,n(e.code,{children:"Header"})," will attempt to refresh the ",n(e.code,{children:"accessToken"}),` by
sending a fetch request to the `,n(e.code,{children:"tokenRefreshLink"}),". If successful, the ",n(e.code,{children:"Header"}),` will retry
the request to the `,n(e.code,{children:"patronApiUrl"})," with the new ",n(e.code,{children:"accessToken"}),"."]}),`
`,n(e.h3,{id:"mobile",children:"Mobile"}),`
`,n(e.p,{children:`In the mobile view, the "log in" feature can be seen when the user SVG icon
dropdown button is clicked. The user unfilled SVG icon signifies that the patron
is not logged in while the user filled SVG icon signifies that the patron is
logged in.`}),`
`,n(e.p,{children:`When opened, the dropdown menu will contain two red buttons that will direct the
user to the Catalog or the Research Catalog login pages.`}),`
`,n(e.p,{children:`When logged in, the dropdown menu will also display the patron's name and an
additional "logout" link.`}),`
`,n(e.h3,{id:"desktop",children:"Desktop"}),`
`,o(e.p,{children:[`In the desktop view, the "log in" feature is the first dropdown button in the top
navigation of the `,n(e.code,{children:"Header"}),`. When opened, the dropdown menu will display two
rounded blue buttons that will direct the user to the Catalog or the Research
Catalog login pages.`]}),`
`,n(e.p,{children:`When logged in, the dropdown button's text will turn from "Log In" to
"My Account". The dropdown menu will display the patron's name and an additional
"logout" link.`}),`
`,n(e.h2,{id:"search",children:"Search"}),`
`,o(e.p,{children:["There is a single search form in the ",n(e.code,{children:"Header"}),` component that can be used to
search in two separate locations: the Library Catalog or the NYPL.org website.
When using the search form, a patron can choose which location to search.`]}),`
`,o(e.p,{children:[`When looking for an item, such as book, ebook, DVD, etc, the best search location
is the Library Catalog. For example, please see the
`,n(e.a,{href:"https://nypl.na2.iiivega.com/search?query=cats&searchType=everything&pageSize=10",target:"_blank",rel:"nofollow noopener noreferrer",children:"Catalog search"}),`
for items about cats. This returns books, microform format items, and DVDs
about cats.`]}),`
`,o(e.p,{children:[`When searching for general information about the Library, events, or locations,
the NYPL.org website is the best search location. For example, please see the
`,n(e.a,{href:"https://www.nypl.org/search/cats?searched_from=header_search&timestamp=1658412778392",target:"_blank",rel:"nofollow noopener noreferrer",children:"NYPL.org search"}),`
for information about cats at NYPL. This returns blogs and cat related items
from the NYPL Shop.`]}),`
`,n(e.h3,{id:"mobile-1",children:"Mobile"}),`
`,n(e.p,{children:`In the mobile view, the patron needs to click on the search icon button for the
search form dropdown to appear. The search form will contain a single search
input field and two buttons, one for the Catalog and one for the NYPL.org website.
The expected behavior is for the user to fill out the form and click on a button
to search the appropriate location.`}),`
`,n(e.h3,{id:"desktop-1",children:"Desktop"}),`
`,n(e.p,{children:`In the desktop view, the patron needs to click on the "Search" button with the
search icon for the dropdown to appear. The search form will contain the single
search input field, two radio buttons to toggle between the Catalog and NYPL.org
website, and a search button. The expected behavior is for the user to fill out
the form, choose the appropriate location, and click on the search button or
press enter to submit the form.`}),`
`,n(e.h2,{id:"navigation",children:"Navigation"}),`
`,o(e.p,{children:["There are two main navigational lists in the ",n(e.code,{children:"Header"}),` component. The (1) first
contains:`]}),`
`,o(e.ul,{children:[`
`,n(e.li,{children:"the log in dropdown button"}),`
`,o(e.li,{children:["a link to the NYPL ",n(e.a,{href:"https://www.nypl.org/locations",target:"_blank",rel:"nofollow noopener noreferrer",children:"Locations page"})]}),`
`,o(e.li,{children:["a link to the NYPL ",n(e.a,{href:"https://www.nypl.org/library-card",target:"_blank",rel:"nofollow noopener noreferrer",children:"Library card"})," information"]}),`
`,n(e.li,{children:"a link to NYPL's email subscription service"}),`
`,n(e.li,{children:"a link to donate to NYPL"}),`
`,n(e.li,{children:"a link to NYPL's Shop"}),`
`]}),`
`,n(e.p,{children:"The (2) second navigational list contains:"}),`
`,o(e.ul,{children:[`
`,o(e.li,{children:["a link to NYPL's ",n(e.a,{href:"https://www.nypl.org/books-music-movies",target:"_blank",rel:"nofollow noopener noreferrer",children:"Books/Music/Movies"})," page"]}),`
`,o(e.li,{children:["a link to NYPL's ",n(e.a,{href:"https://www.nypl.org/research",target:"_blank",rel:"nofollow noopener noreferrer",children:"Research"})," page"]}),`
`,o(e.li,{children:["a link to NYPL's ",n(e.a,{href:"https://www.nypl.org/education",target:"_blank",rel:"nofollow noopener noreferrer",children:"Education"})," page"]}),`
`,o(e.li,{children:["a link to NYPL's ",n(e.a,{href:"https://www.nypl.org/events",target:"_blank",rel:"nofollow noopener noreferrer",children:"Events"})," page"]}),`
`,o(e.li,{children:["a link to NYPL's ",n(e.a,{href:"https://www.nypl.org/connect",target:"_blank",rel:"nofollow noopener noreferrer",children:"Connect"})," page"]}),`
`,o(e.li,{children:["a link to NYPL's ",n(e.a,{href:"https://www.nypl.org/give",target:"_blank",rel:"nofollow noopener noreferrer",children:"Give"})," page"]}),`
`,o(e.li,{children:["a link to NYPL's ",n(e.a,{href:"https://www.nypl.org/get-help",target:"_blank",rel:"nofollow noopener noreferrer",children:"Get Help"})," page"]}),`
`,n(e.li,{children:"the search dropdown button"}),`
`]}),`
`,n(e.h3,{id:"mobile-2",children:"Mobile"}),`
`,n(e.p,{children:`In the mobile view, the patron needs to click on the hamburger menu icon button
for the navigation dropdown to appear. This dropdown contains the (2) NYPL
website navigation links, and the first list of links (1) are now rendered
as buttons in a grid.`}),`
`,n(e.p,{children:`The location link, the log in dropdown button, and the search dropdown button,
are rendered differently in the mobile view and not in the navigational list.
The location link and the log in and search dropdown buttons, are now part of
the four SVG icon button links.`}),`
`,n(e.h3,{id:"desktop-2",children:"Desktop"}),`
`,o(e.p,{children:[`In the desktop view, the first set of links (1) appears horizontally at the top
while the second set of links (2) appears at the bottom of the `,n(e.code,{children:"Header"}),"."]}),`
`,n(e.h2,{id:"header-log-in-timeout",children:"Header Log In Timeout"}),`
`,o(e.p,{children:[`There are occassions when a patron may log out directly from either the Catalog
or the Research Catalog, or log out by using the log out link in the `,n(e.code,{children:"Header"}),`
component. Because of this, there is a mismatch where one or more service
`,n(e.em,{children:"thinks"})," the patron is still logged in. In order to avoid confusion, the ",n(e.code,{children:"Header"}),`
component performs an extra step to log the patron out completely.`]}),`
`,o(e.p,{children:[`NYPL's Encore Catalog does not provide a way to programmatically log out a
patron, such as through an API endpoint. Due to this limitation, there is a
current workaround for logging out a patron in the `,n(e.code,{children:"Header"})," component."]}),`
`,o(e.p,{children:[`When a patron logs into the Catalog or the Research Catalog, a 30 minute timer
will start in the `,n(e.code,{children:"Header"}),` component. Once this timer reaches 0, the Header will
insert an `,n(e.code,{children:"iframe"})," HTML element into the ",n(e.code,{children:"body"}),` HTML element of the webpage.
This `,n(e.code,{children:"iframe"}),"'s ",n(e.code,{children:"src"}),` attribute is set to the necessary Encore Catalog logout
link. This `,n(e.code,{children:"iframe"})," element has a style of ",n(e.code,{children:"display: none"})," so it is not visible."]})]})}function S(r={}){const{wrapper:e}=Object.assign({},a(),r.components);return e?n(e,Object.assign({},r,{children:n(i,r)})):i(r)}export{S as default};
//# sourceMappingURL=Header-c12f30d3.js.map
