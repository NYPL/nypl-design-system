import{u as s,j as e,M as r,L as t,S as a}from"./iframe-D93LbwGv.js";function i(o){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Development Guide/Header"}),`
`,e.jsx(n.h1,{id:"header",children:"Header"}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#implementation",target:"_self",children:"Implementation"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#skip-navigation",target:"_self",children:"Skip Navigation"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#catalog-log-in",target:"_self",children:"Catalog Log In"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#search",target:"_self",children:"Search"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#navigation",target:"_self",children:"Navigation"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#header-log-in-timeout",target:"_self",children:"Header Log In Timeout"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:["The NYPL ",e.jsx(n.code,{children:"Header"}),` is the top most feature on NYPL sites. Even though this component
appears on various NYPL digital applications, it is itself a separate application
that gets embedded on said digital applications. This complex component is composed
using the Reservoir Design System and contains features for logging in, logging
out, searching, and navigating the NYPL.org site.`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://ds-header.nypl.org/header",rel:"nofollow",children:"NYPL Header Preview"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/NYPL/nypl-header-app",rel:"nofollow",children:"NYPL Header App Github repo"})}),`
`]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Header"})," component:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"fetches data from different APIs,"}),`
`,e.jsxs(n.li,{children:["uses the DS' ",e.jsx(n.code,{children:"SkipNavigation"})," component for webpage accessibility,"]}),`
`,e.jsx(n.li,{children:"has static NYPL.org navigational links,"}),`
`,e.jsxs(n.li,{children:["a log in form for patrons to log into NYPL's ",e.jsx(n.a,{href:"https://nypl.na2.iiivega.com/",rel:"nofollow",children:"Catalog"}),`
and `,e.jsx(n.a,{href:"https://www.nypl.org/research/research-catalog/",rel:"nofollow",children:"Research Catalog"}),","]}),`
`,e.jsxs(n.li,{children:["a search form for patrons to search the Catalog and across ",e.jsx(n.a,{href:"https://www.nypl.org/",rel:"nofollow",children:"NYPL.org"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Header"})," should be embedded on an NYPL app through the following code snippet:"]}),`
`,e.jsx(a,{code:`
<style>
#header-placeholder {
  min-height: 70px;
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
`,e.jsxs(n.p,{children:["The placeholder styles and ",e.jsx(n.code,{children:"div"}),` wrapper are additional elements that are used
to mitigate the "jumping" effect that occurs when the `,e.jsx(n.code,{children:"Header"}),` is loaded on a
page. The `,e.jsx(n.code,{children:"Header"}),` script is loaded asynchronously and this means that the
`,e.jsx(n.code,{children:"Header"}),` will render after the rest of the page is rendered and it will push the
main content down. The fixed height of the placeholder `,e.jsx(n.code,{children:"div"}),` prevents the main
content from jumping down. Note that we cannot predict the length of the alert
text in the banner (in any) and the page may still jump but not by much.`]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Header"}),` component contains multiple native HTML elements that work together
to make the component accessible. It contains:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Skip navigation - More information about this feature in the following section."}),`
`,e.jsxs(n.li,{children:["Notification ",e.jsx(n.code,{children:"<aside>"}),` HTML element - This landmark element renders NYPL alert
messages. Per accessibility guidelines, this element cannot be nested within
the `,e.jsx(n.code,{children:"<header>"}),` element, so it is rendered above. More information can be found
in the `,e.jsx(n.a,{href:"../?path=/docs/components-feedback-notification--docs#accessibility",children:"Notification Accessibility"}),`
section.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<header>"}),` HTML element - This landmark element denotes the top content section
of the page. There should only be one main `,e.jsx(n.code,{children:"<header>"}),` element on the page as a
child of the `,e.jsx(n.code,{children:"<body>"})," element."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<nav>"})," HTML elements - The ",e.jsx(n.code,{children:"Header"})," component renders one (1) ",e.jsx(n.code,{children:"<nav>"}),` element
in the mobile view and two (2) `,e.jsx(n.code,{children:"<nav>"})," elements in the desktop view. Each ",e.jsx(n.code,{children:"<nav>"}),`
element appropriately contains its own `,e.jsx(n.code,{children:"aria-label"}),` attribute to differentiate
it from one another.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<form>"})," HTML element - The ",e.jsx(n.code,{children:"<form>"})," element is used in the search feature."]}),`
`,e.jsxs(n.li,{children:["Dropdowns buttons with focus-trap feature - The ",e.jsx(n.code,{children:"Header"})," uses ",e.jsx(n.code,{children:"react-focus-lock"}),`
to trap (or loop) focus within its various dropdowns: the login submenu, the
search form, and the mobile navigation submenu. This is to make keyboard
navigation easier for users. Trapping focus means that when a parent element is
clicked and its dropdown becomes visible, focus remains among its children
while the user tabs. The user may close the dropdown and escape the focus trap
by clicking on the parent element once again, or by using the escape key.
Note: This is how the original NYPL `,e.jsx(n.code,{children:"Header"}),` was implemented and its Reservoir
counterpart replicates this behavior. However, this is not the
`,e.jsx(n.em,{children:"currently recommended"}),` way to implement focus management in dropdowns.
According to the `,e.jsx(n.a,{href:"https://www.w3.org/wiki/MenuButton",rel:"nofollow",children:"W3C"}),`, up and down arrow
keys, rather than tab, should loop focus over child elements. Tabbing should
instead close the dropdown and move focus to the following parent. In the
future, we hope to change the Reservoir Header to align with current best
practices.`]}),`
`]}),`
`,e.jsx(n.p,{children:"Resources:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header#page_header",rel:"nofollow",children:"MDN header"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.w3.org/WAI/tutorials/page-structure/regions/#page-header",rel:"nofollow",children:"W3C Page Regions, Page header"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.w3.org/WAI/tutorials/page-structure/regions/#navigation",rel:"nofollow",children:"W3C Page Regions, Navigation"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav",rel:"nofollow",children:"MDN nav: The Navigation Section element"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.w3.org/WAI/tutorials/page-structure/labels/",rel:"nofollow",children:"W3C Labeling Regions"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form",rel:"nofollow",children:"MDN form: The Form element"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.w3.org/wiki/MenuButton",rel:"nofollow",children:"W3C MenuButton"})}),`
`]}),`
`,e.jsx(n.h2,{id:"skip-navigation",children:"Skip Navigation"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Header"})," component implements the DS ",e.jsx(n.code,{children:"SkipNavigation"}),` component. More
information about the component can be found in the
`,e.jsx(n.a,{href:"../?path=/docs/components-navigation-skipnavigation--docs",children:"Storybook documentation"}),`
and why we should use it in its
`,e.jsx(n.a,{href:"../?path=/docs/accessibility-guide-skip-navigation--docs",children:"accessibility guideline"}),"."]}),`
`,e.jsxs(n.p,{children:["It is important to note that the ",e.jsx(n.code,{children:"SkipNavigation"}),` component expects that the page
it is on has a `,e.jsx(n.code,{children:"main"})," HTML element with an ",e.jsx(n.code,{children:"id"})," of ",e.jsx(n.code,{children:"mainContent"}),`. This allows
the first link in the skip navigation to function correctly.`]}),`
`,e.jsxs(n.p,{children:[`The second link in the skip navigation points to
`,e.jsx(n.a,{href:"https://www.nypl.org/accessibility",rel:"nofollow",children:"NYPL's accessibility resource"}),"."]}),`
`,e.jsx(n.h3,{id:"templateappcontainer",children:"TemplateAppContainer"}),`
`,e.jsxs(n.p,{children:["The DS ",e.jsx(n.a,{href:"../?path=/docs/components-page-layout-template--docs",children:e.jsx(n.code,{children:"TemplateAppContainer"})}),`
component renders the same `,e.jsx(n.code,{children:"SkipNavigation"})," component that the ",e.jsx(n.code,{children:"Header"}),` component
renders. When using both the `,e.jsx(n.code,{children:"Header"})," and the ",e.jsx(n.code,{children:"TemplateAppContainer"}),` components,
set the `,e.jsx(n.code,{children:"renderSkipNavigation"})," prop in the ",e.jsx(n.code,{children:"TemplateAppContainer"}),` component to
`,e.jsx(n.code,{children:"false"}),". This will prevent two ",e.jsx(n.code,{children:"SkipNavigation"})," components from being rendered."]}),`
`,e.jsx(n.h2,{id:"catalogs-log-in",children:"Catalogs Log In"}),`
`,e.jsxs(n.p,{children:["While the ",e.jsx(n.code,{children:"Header"}),` doesn't perform authentication, it does determine whether a user is
logged in and, if they are, renders a logged in UI, which includes the patron's name.`]}),`
`,e.jsxs(n.p,{children:["This process begins after the ",e.jsx(n.code,{children:"Header"}),` mounts. At that time, it looks for the
`,e.jsx(n.code,{children:"nyplIdentityPatron"})," cookie. If it exists, an ",e.jsx(n.code,{children:"accessToken"}),` is extracted from the cookie
and sent via fetch request to the `,e.jsx(n.code,{children:"patronApiUrl"}),`. If the request is successful, the
patron's name is returned. The name is then stored in a React Context variable called
`,e.jsx(n.code,{children:"HeaderContext"}),", which is available to all children of the ",e.jsx(n.code,{children:"Header"}),`. The existence of the
patron's name in `,e.jsx(n.code,{children:"HeaderContext"})," causes the ",e.jsx(n.code,{children:"HeaderLoginButton"})," and ",e.jsx(n.code,{children:"HeaderLogin"}),` to
render their "logged in" view.`]}),`
`,e.jsxs(n.p,{children:["There is the possibility that the call to the ",e.jsx(n.code,{children:"patronApiUrl"}),` returns a response with a
`,e.jsx(n.code,{children:"statusCode"})," of 401 and an ",e.jsx(n.code,{children:"expired"})," key set to true. This means the ",e.jsx(n.code,{children:"accessToken"}),` is
expired. If this is the case, the `,e.jsx(n.code,{children:"Header"})," will attempt to refresh the ",e.jsx(n.code,{children:"accessToken"}),` by
sending a fetch request to the `,e.jsx(n.code,{children:"tokenRefreshLink"}),". If successful, the ",e.jsx(n.code,{children:"Header"}),` will retry
the request to the `,e.jsx(n.code,{children:"patronApiUrl"})," with the new ",e.jsx(n.code,{children:"accessToken"}),"."]}),`
`,e.jsx(n.h3,{id:"mobile",children:"Mobile"}),`
`,e.jsx(n.p,{children:`In the mobile view, the "log in" feature can be seen when the user SVG icon
dropdown button is clicked. The user unfilled SVG icon signifies that the patron
is not logged in while the user filled SVG icon signifies that the patron is
logged in.`}),`
`,e.jsx(n.p,{children:`When opened, the dropdown menu will contain two red buttons that will direct the
user to the Catalog or the Research Catalog login pages.`}),`
`,e.jsx(n.p,{children:`When logged in, the dropdown menu will also display the patron's name and an
additional "logout" link.`}),`
`,e.jsx(n.h3,{id:"desktop",children:"Desktop"}),`
`,e.jsxs(n.p,{children:[`In the desktop view, the "log in" feature is the first dropdown button in the top
navigation of the `,e.jsx(n.code,{children:"Header"}),`. When opened, the dropdown menu will display two
rounded blue buttons that will direct the user to the Catalog or the Research
Catalog login pages.`]}),`
`,e.jsx(n.p,{children:`When logged in, the dropdown button's text will turn from "Log In" to
"My Account". The dropdown menu will display the patron's name and an additional
"logout" link.`}),`
`,e.jsx(n.h2,{id:"search",children:"Search"}),`
`,e.jsxs(n.p,{children:["There is a single search form in the ",e.jsx(n.code,{children:"Header"}),` component that can be used to
search in two separate locations: the Library Catalog or the NYPL.org website.
When using the search form, a patron can choose which location to search.`]}),`
`,e.jsxs(n.p,{children:[`When looking for an item, such as book, ebook, DVD, etc, the best search location
is the Library Catalog. For example, please see the
`,e.jsx(n.a,{href:"https://nypl.na2.iiivega.com/search?query=cats&searchType=everything&pageSize=10",rel:"nofollow",children:"Catalog search"}),`
for items about cats. This returns books, microform format items, and DVDs
about cats.`]}),`
`,e.jsxs(n.p,{children:[`When searching for general information about the Library, events, or locations,
the NYPL.org website is the best search location. For example, please see the
`,e.jsx(n.a,{href:"https://www.nypl.org/search/cats?searched_from=header_search&timestamp=1658412778392",rel:"nofollow",children:"NYPL.org search"}),`
for information about cats at NYPL. This returns blogs and cat related items
from the NYPL Shop.`]}),`
`,e.jsx(n.h3,{id:"mobile-1",children:"Mobile"}),`
`,e.jsx(n.p,{children:`In the mobile view, the patron needs to click on the search icon button for the
search form dropdown to appear. The search form will contain a single search
input field and two buttons, one for the Catalog and one for the NYPL.org website.
The expected behavior is for the user to fill out the form and click on a button
to search the appropriate location.`}),`
`,e.jsx(n.h3,{id:"desktop-1",children:"Desktop"}),`
`,e.jsx(n.p,{children:`In the desktop view, the patron needs to click on the "Search" button with the
search icon for the dropdown to appear. The search form will contain the single
search input field, two radio buttons to toggle between the Catalog and NYPL.org
website, and a search button. The expected behavior is for the user to fill out
the form, choose the appropriate location, and click on the search button or
press enter to submit the form.`}),`
`,e.jsx(n.h2,{id:"navigation",children:"Navigation"}),`
`,e.jsxs(n.p,{children:["There are two main navigational lists in the ",e.jsx(n.code,{children:"Header"}),` component. The (1) first
contains:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"the log in dropdown button"}),`
`,e.jsxs(n.li,{children:["a link to the NYPL ",e.jsx(n.a,{href:"https://www.nypl.org/locations",rel:"nofollow",children:"Locations page"})]}),`
`,e.jsxs(n.li,{children:["a link to the NYPL ",e.jsx(n.a,{href:"https://www.nypl.org/library-card",rel:"nofollow",children:"Library card"})," information"]}),`
`,e.jsx(n.li,{children:"a link to NYPL's email subscription service"}),`
`,e.jsx(n.li,{children:"a link to donate to NYPL"}),`
`,e.jsx(n.li,{children:"a link to NYPL's Shop"}),`
`]}),`
`,e.jsx(n.p,{children:"The (2) second navigational list contains:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["a link to NYPL's ",e.jsx(n.a,{href:"https://www.nypl.org/books-music-movies",rel:"nofollow",children:"Books/Music/Movies"})," page"]}),`
`,e.jsxs(n.li,{children:["a link to NYPL's ",e.jsx(n.a,{href:"https://www.nypl.org/research",rel:"nofollow",children:"Research"})," page"]}),`
`,e.jsxs(n.li,{children:["a link to NYPL's ",e.jsx(n.a,{href:"https://www.nypl.org/education",rel:"nofollow",children:"Education"})," page"]}),`
`,e.jsxs(n.li,{children:["a link to NYPL's ",e.jsx(n.a,{href:"https://www.nypl.org/events",rel:"nofollow",children:"Events"})," page"]}),`
`,e.jsxs(n.li,{children:["a link to NYPL's ",e.jsx(n.a,{href:"https://www.nypl.org/connect",rel:"nofollow",children:"Connect"})," page"]}),`
`,e.jsxs(n.li,{children:["a link to NYPL's ",e.jsx(n.a,{href:"https://www.nypl.org/give",rel:"nofollow",children:"Give"})," page"]}),`
`,e.jsxs(n.li,{children:["a link to NYPL's ",e.jsx(n.a,{href:"https://www.nypl.org/get-help",rel:"nofollow",children:"Get Help"})," page"]}),`
`,e.jsx(n.li,{children:"the search dropdown button"}),`
`]}),`
`,e.jsx(n.h3,{id:"mobile-2",children:"Mobile"}),`
`,e.jsx(n.p,{children:`In the mobile view, the patron needs to click on the hamburger menu icon button
for the navigation dropdown to appear. This dropdown contains the (2) NYPL
website navigation links, and the first list of links (1) are now rendered
as buttons in a grid.`}),`
`,e.jsx(n.p,{children:`The location link, the log in dropdown button, and the search dropdown button,
are rendered differently in the mobile view and not in the navigational list.
The location link and the log in and search dropdown buttons, are now part of
the four SVG icon button links.`}),`
`,e.jsx(n.h3,{id:"desktop-2",children:"Desktop"}),`
`,e.jsxs(n.p,{children:[`In the desktop view, the first set of links (1) appears horizontally at the top
while the second set of links (2) appears at the bottom of the `,e.jsx(n.code,{children:"Header"}),"."]}),`
`,e.jsx(n.h2,{id:"header-log-in-timeout",children:"Header Log In Timeout"}),`
`,e.jsxs(n.p,{children:[`There are occassions when a patron may log out directly from either the Catalog
or the Research Catalog, or log out by using the log out link in the `,e.jsx(n.code,{children:"Header"}),`
component. Because of this, there is a mismatch where one or more service
`,e.jsx(n.em,{children:"thinks"})," the patron is still logged in. In order to avoid confusion, the ",e.jsx(n.code,{children:"Header"}),`
component performs an extra step to log the patron out completely.`]}),`
`,e.jsxs(n.p,{children:[`NYPL's Encore Catalog does not provide a way to programmatically log out a
patron, such as through an API endpoint. Due to this limitation, there is a
current workaround for logging out a patron in the `,e.jsx(n.code,{children:"Header"})," component."]}),`
`,e.jsxs(n.p,{children:[`When a patron logs into the Catalog or the Research Catalog, a 30 minute timer
will start in the `,e.jsx(n.code,{children:"Header"}),` component. Once this timer reaches 0, the Header will
insert an `,e.jsx(n.code,{children:"iframe"})," HTML element into the ",e.jsx(n.code,{children:"body"}),` HTML element of the webpage.
This `,e.jsx(n.code,{children:"iframe"}),"'s ",e.jsx(n.code,{children:"src"}),` attribute is set to the necessary Encore Catalog logout
link. This `,e.jsx(n.code,{children:"iframe"})," element has a style of ",e.jsx(n.code,{children:"display: none"})," so it is not visible."]})]})}function h(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(i,{...o})}):i(o)}export{h as default};
