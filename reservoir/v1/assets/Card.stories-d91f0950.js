import{a,j as e,F as me}from"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import{a as A}from"./chunk-OPEUWD42-a3b45fd8.js";import{w as ge}from"./index-6148c31a.js";import{B as w}from"./Button-a3ea41e0.js";import{C as i,a as n,b as t,c as s}from"./Card-ecb67591.js";import{H as u}from"./HorizontalRule-da9b0069.js";import{I as pe}from"./Image-3405777f.js";import{L as l}from"./Link-0ed02cf7.js";import{S as o}from"./SimpleGrid-e54e0b68.js";import{l as he}from"./types-5ca2ba04.js";const Ce={title:"Components/Basic Elements/Card",component:i,decorators:[ge],argTypes:{backgroundColor:{control:{type:"color"}},className:{control:!1},foregroundColor:{control:{type:"color"}},id:{control:!1},imageProps:{disable:!0},"imageProps.alt":{control:{type:"text"},table:{defaultValue:{summary:""}}},"imageProps.aspectRatio":{table:{defaultValue:{summary:"square"}}},"imageProps.caption":{control:!1},"imageProps.component":{control:!1},"imageProps.credit":{control:!1},"imageProps.isAtEnd":{table:{defaultValue:{summary:!1}}},"imageProps.size":{table:{defaultValue:{summary:"default"}}},"imageProps.src":{table:{defaultValue:{summary:""}}},isAlignedRightActions:{table:{defaultValue:{summary:!1}}},isBordered:{table:{defaultValue:{summary:!1}}},isCentered:{table:{defaultValue:{summary:!1}}},layout:{control:{type:"select"},options:he,table:{defaultValue:{summary:"column"}}}}},d={args:{backgroundColor:void 0,className:void 0,foregroundColor:void 0,id:"card-id","imageProps.alt":"Alt text","imageProps.aspectRatio":"square","imageProps.component":void 0,"imageProps.isAtEnd":!1,"imageProps.size":"default","imageProps.src":"https://placeimg.com/400/300/animals",isAlignedRightActions:!1,isBordered:!1,isCentered:!1,layout:"row",mainActionLink:void 0},render:r=>a(i,{backgroundColor:r.backgroundColor,className:r.className,foregroundColor:r.foregroundColor,id:r.id,imageProps:{alt:r["imageProps.alt"],aspectRatio:r["imageProps.aspectRatio"],component:r["imageProps.component"],isAtEnd:r["imageProps.isAtEnd"],size:r["imageProps.size"],src:r["imageProps.src"]},isAlignedRightActions:r.isAlignedRightActions,isBordered:r.isBordered,isCentered:r.isCentered,layout:r.layout,mainActionLink:r.mainActionLink,children:[e(n,{level:"two",id:"main-heading1",children:"Optional Header"}),e(n,{level:"three",id:"main-heading2",children:"Sollicitudin Lorem Tortor Purus Ornare"}),e(t,{children:"Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue."}),a(s,{topBorder:!0,bottomBorder:!0,children:[e(w,{id:"main-button1",onClick:A("clicked"),type:"submit",children:"Primary"}),e(w,{buttonType:"secondary",id:"main-button2",onClick:A("clicked"),type:"submit",children:"Secondary"})]}),a(s,{children:[e(l,{href:"#",children:"#hash1"}),",",e(l,{href:"#",children:"#hash2"}),",",e(l,{href:"#",children:"#hash3"})]})]}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=36835%3A25747"},jest:["Card.test.tsx"]}},c={render:()=>a(o,{columns:2,children:[a(i,{imageProps:{alt:"Alt text",aspectRatio:"twoByOne",src:"https://placeimg.com/400/200/animals"},children:[e(n,{level:"three",id:"props-heading1",children:"Image on Top (default)"}),e(t,{children:"Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue."})]}),a(i,{imageProps:{alt:"Alt text",aspectRatio:"twoByOne",isAtEnd:!0,src:"https://placeimg.com/400/200/animals"},children:[e(n,{level:"three",id:"props-heading2",children:"Image on Bottom"}),e(t,{children:"Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue."})]})]})},m={render:()=>a(o,{columns:1,children:[a(i,{imageProps:{alt:"Alt text",aspectRatio:"twoByOne",src:"https://placeimg.com/400/200/animals"},isCentered:!0,layout:"row",children:[e(n,{level:"four",id:"row-heading1",children:"Image on Left (default)"}),e(t,{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam."})]}),a(i,{imageProps:{alt:"Alt text",aspectRatio:"twoByOne",isAtEnd:!0,src:"https://placeimg.com/400/200/animals"},isCentered:!0,layout:"row",children:[e(n,{level:"four",id:"row-heading2",children:"Image on Right"}),e(t,{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam."})]})]})},g={render:()=>a(o,{columns:1,children:[a(i,{imageProps:{alt:"Alt text",aspectRatio:"square",size:"xxsmall",src:"https://placeimg.com/400/200/animals"},isCentered:!0,children:[e(n,{level:"three",id:"column-heading1",children:"Extra Extra Small Image"}),e(n,{level:"four",id:"column-heading2",children:"Max-Width: 64px"}),e(t,{children:"Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue."})]}),e(u,{}),a(i,{imageProps:{alt:"Alt text",aspectRatio:"square",size:"xsmall",src:"https://placeimg.com/400/200/animals"},isCentered:!0,children:[e(n,{level:"three",id:"column-heading1",children:"Extra Small Image"}),e(n,{level:"four",id:"column-heading2",children:"Max-Width: 96px"}),e(t,{children:"Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue."})]}),e(u,{}),a(i,{imageProps:{alt:"Alt text",aspectRatio:"square",size:"small",src:"https://placeimg.com/400/200/animals"},isCentered:!0,children:[e(n,{level:"three",id:"column-heading1",children:"Small Image"}),e(n,{level:"four",id:"column-heading2",children:"Max-Width: 165px"}),e(t,{children:"Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue."})]}),e(u,{}),a(i,{imageProps:{alt:"Alt text",aspectRatio:"square",size:"medium",src:"https://placeimg.com/400/200/animals"},isCentered:!0,children:[e(n,{level:"three",id:"column2-heading1",children:"Medium Image"}),e(n,{level:"four",id:"column2-heading2",children:"Max-Width: 225px"}),e(t,{children:"Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue."})]}),e(u,{}),a(i,{imageProps:{alt:"Alt text",aspectRatio:"square",size:"large",src:"https://placeimg.com/400/200/animals"},isCentered:!0,children:[e(n,{level:"three",id:"column3-heading1",children:"Large Image"}),e(n,{level:"four",id:"column3-heading2",children:"Max-Width: 360px"}),e(t,{children:"Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue."})]}),e(u,{}),a(i,{imageProps:{alt:"Alt text",aspectRatio:"square",src:"https://placeimg.com/400/200/animals"},isCentered:!0,children:[e(n,{level:"three",id:"column-4heading1",children:"Default Image"}),e(n,{level:"four",id:"column-4heading2",children:"Width: 100%"}),e(t,{children:"Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue."})]})]})},p={render:()=>a(o,{columns:1,children:[a(i,{imageProps:{alt:"Alt text",aspectRatio:"twoByOne",size:"xxsmall",src:"https://placeimg.com/400/200/animals"},isCentered:!0,layout:"row",children:[e(n,{level:"three",id:"row2-heading1",children:"Extra Extra Small Image"}),e(n,{level:"four",id:"row2-heading2",children:"Max-Width: 64px"}),e(t,{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et."})]}),a(i,{imageProps:{alt:"Alt text",aspectRatio:"twoByOne",size:"xsmall",src:"https://placeimg.com/400/200/animals"},isCentered:!0,layout:"row",children:[e(n,{level:"three",id:"row2-heading1",children:"Extra Small Image"}),e(n,{level:"four",id:"row2-heading2",children:"Max-Width: 96px"}),e(t,{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et."})]}),a(i,{imageProps:{alt:"Alt text",aspectRatio:"twoByOne",size:"small",src:"https://placeimg.com/400/200/animals"},isCentered:!0,layout:"row",children:[e(n,{level:"three",id:"row2-heading1",children:"Small Image"}),e(n,{level:"four",id:"row2-heading2",children:"Max-Width: 165px"}),e(t,{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et."})]}),a(i,{imageProps:{alt:"Alt text",aspectRatio:"twoByOne",size:"medium",src:"https://placeimg.com/400/200/animals"},isCentered:!0,layout:"row",children:[e(n,{level:"three",id:"row3-heading2",children:"Medium Image"}),e(n,{level:"four",id:"row3-heading2",children:"Max-Width: 225px"}),e(t,{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis."})]}),a(i,{imageProps:{alt:"Alt text",aspectRatio:"twoByOne",size:"large",src:"https://placeimg.com/400/200/animals"},isCentered:!0,layout:"row",children:[e(n,{level:"three",id:"row4-heading1",children:"Large Image"}),e(n,{level:"four",id:"row4-heading2",children:"Max-Width: 360px"}),e(t,{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam."})]}),a(i,{imageProps:{alt:"Alt text",aspectRatio:"twoByOne",src:"https://placeimg.com/400/200/animals"},isCentered:!0,layout:"row",children:[e(n,{level:"three",id:"row5-heading2",children:"Default Image"}),e(n,{level:"four",id:"row5-heading2",children:"Max-Width: 225px"}),e(t,{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam."})]})]})},h={render:()=>a(i,{imageProps:{alt:"Alt text",component:e(pe,{src:"https://placeimg.com/400/400/animals",alt:"Alt text"})},children:[e(n,{level:"two",id:"img1-heading1",children:"Card Component with Custom Image Component"}),e(n,{level:"three",id:"img2-heading2",children:"Secondary Heading"}),e(t,{children:"Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed posuere consectetur est at lobortis."}),a(s,{children:[e(l,{type:"button",href:"#",children:"Reserve"}),e(l,{href:"#url",type:"forwards",children:"View Book Details"})]})]})},C={render:()=>a(i,{imageProps:{alt:"Alt text",aspectRatio:"twoByOne",src:"https://placeimg.com/400/200/animals"},children:[e(n,{level:"three",id:"link-heading1",url:"http://nypl.org",children:"Go to NYPL home page."}),e(n,{level:"four",id:"link-heading2",children:a(me,{children:["Go to NYPL ",e(l,{href:"http://nypl.org",children:"home page"}),"."]})}),e(t,{children:"This entire `Card` component is clickable, but the links below are still accessible by tabbing through the `Card` and pressing `enter` or clicking with a mouse."}),a(s,{children:[e(l,{href:"#",type:"button",children:"Button"}),e(l,{href:"#",type:"forwards",children:"Other link"})]})]})},f={render:()=>a(o,{columns:2,children:[a(i,{imageProps:{alt:"Alt text",aspectRatio:"twoByOne",src:"https://placeimg.com/400/200/animals"},mainActionLink:"http://nypl.org",children:[e(n,{level:"three",id:"fullclick1-heading1",children:"Go to NYPL home page."}),e(n,{level:"four",id:"fullclick1-heading2",children:"Some other heading."}),e(t,{children:"This entire `Card` component is clickable, but the links below are still accessible by tabbing through the `Card` and pressing `enter` or clicking with a mouse."}),a(s,{children:[e(l,{href:"#",type:"button",children:"Button"}),e(l,{href:"#",type:"forwards",children:"Other link"})]})]}),a(i,{imageProps:{alt:"Alt text",aspectRatio:"twoByOne",isAtEnd:!0,src:"https://placeimg.com/410/210/animals"},mainActionLink:"http://nypl.org",children:[e(n,{level:"three",id:"fullclick2-heading1",children:"Go to NYPL home page."}),e(t,{children:"This `Card` component does not have any extra links."})]})]}),name:"Full-Click Functionality"},b={render:()=>a(o,{columns:3,children:[a(i,{isBordered:!0,mainActionLink:"https://nypl-ds-test-app.vercel.app/fullPages/blog/lunar-new-year#above-header-notification",children:[e(n,{level:"four",children:"Lunar New Year Blog"}),e(t,{children:"A basic blog post, including text chracters outside a standard Western font-set."})]}),a(i,{isBordered:!0,mainActionLink:"https://nypl-ds-test-app.vercel.app/fullPages/blog/doc-chat-forty-two#above-header-notification",children:[e(n,{level:"four",children:"Doc Chat Forty-Two Blog"}),e(t,{children:"A blog post with an array of components."})]}),a(i,{isBordered:!0,mainActionLink:"https://nypl-ds-test-app.vercel.app/fullPages/homepage#above-header-notification",children:[e(n,{level:"four",children:"Homepage"}),e(t,{children:"A layout to mimic a basic homepage structure."})]}),a(i,{isBordered:!0,mainActionLink:"https://nypl-ds-test-app.vercel.app/fullPages/library-registry#above-header-notification",children:[e(n,{level:"four",children:"Library Registry Interface"}),e(t,{children:"A POC for the Library Registry admin tools."})]}),a(i,{isBordered:!0,mainActionLink:"https://nypl-ds-test-app.vercel.app/fullPages/search-and-filter#above-header-notification",children:[e(n,{level:"four",children:"Search and Filter"}),e(t,{children:"A functional form to showcase search filtering and content cards."})]}),a(i,{isBordered:!0,mainActionLink:"https://nypl-ds-test-app.vercel.app/fullPages/sign-up#above-header-notification",children:[e(n,{level:"four",children:"Sign-Up"}),e(t,{children:"A functional form to utilize multiple form input components."})]})]}),name:"Full-Click Turbine Example"},v={render:()=>a(i,{imageProps:{alt:"Alt text",aspectRatio:"twoByOne",size:"medium",src:"https://placeimg.com/400/200/animals"},isAlignedRightActions:!0,isCentered:!0,layout:"row",children:[e(n,{level:"two",id:"main-heading1",children:"Optional Header"}),e(n,{level:"three",id:"main-heading2",children:"Sollicitudin Lorem Tortor Purus Ornare"}),e(t,{children:"Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue."}),a(s,{topBorder:!0,bottomBorder:!0,children:[e(w,{onClick:A("clicked"),id:"main-button1",type:"submit",children:"Primary"}),e(w,{onClick:A("clicked"),id:"main-button2",buttonType:"secondary",type:"submit",children:"Secondary"})]}),a(s,{children:[e(l,{href:"#",children:"#hash1"}),",",e(l,{href:"#",children:"#hash2"}),",",e(l,{href:"#",children:"#hash3"})]})]}),name:"Right Side CardActions"},y={render:()=>a(o,{columns:3,children:[a(i,{imageProps:{alt:"Alt text",aspectRatio:"twoByOne",src:"https://placeimg.com/400/200/animals"},children:[e(n,{level:"three",id:"grid1-heading1",children:"Card Heading"}),e(t,{children:"Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue."})]}),a(i,{imageProps:{alt:"Alt text",aspectRatio:"twoByOne",src:"https://placeimg.com/410/210/animals"},children:[e(n,{level:"three",id:"grid2-heading1",children:"Card Heading"}),e(t,{children:"Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue."})]}),a(i,{imageProps:{alt:"Alt text",aspectRatio:"twoByOne",src:"https://placeimg.com/420/220/animals"},children:[e(n,{level:"three",id:"grid3-heading1",children:"Card Heading"}),e(t,{children:"Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue."})]}),a(i,{imageProps:{alt:"Alt text",aspectRatio:"twoByOne",src:"https://placeimg.com/430/230/animals"},children:[e(n,{level:"three",id:"grid4-heading1",children:"Card Heading"}),e(t,{children:"Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue."})]}),a(i,{imageProps:{alt:"Alt text",aspectRatio:"twoByOne",src:"https://placeimg.com/440/200/animals"},children:[e(n,{level:"three",id:"grid5-heading1",children:"Card Heading"}),e(t,{children:"Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue."})]}),a(i,{imageProps:{alt:"Alt text",aspectRatio:"twoByOne",src:"https://placeimg.com/450/200/animals"},children:[e(n,{level:"three",id:"grid6-heading1",children:"Card Heading"}),e(t,{children:"Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue."})]})]})},H={render:()=>a(o,{columns:1,children:[a(i,{imageProps:{alt:"Alt text",aspectRatio:"twoByOne",src:"https://placeimg.com/400/200/animals"},isCentered:!0,layout:"row",children:[e(n,{level:"four",id:"stack1-heading1",children:"Card Heading"}),e(t,{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam."})]}),a(i,{imageProps:{alt:"Alt text",aspectRatio:"twoByOne",src:"https://placeimg.com/410/210/animals"},isCentered:!0,layout:"row",children:[e(n,{level:"four",id:"stack2-heading2",children:"Card Heading"}),e(t,{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam."})]}),a(i,{imageProps:{alt:"Alt text",aspectRatio:"twoByOne",src:"https://placeimg.com/420/220/animals"},isCentered:!0,layout:"row",children:[e(n,{level:"four",id:"stack3-heading3",children:"Card Heading"}),e(t,{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam."})]})]})},P={render:()=>a(me,{children:[a(o,{columns:3,children:[a(i,{isBordered:!0,children:[e(n,{level:"three",id:"no-img1-heading1",children:"Card Heading"}),e(t,{children:"Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl."})]}),a(i,{isBordered:!0,children:[e(n,{level:"three",id:"no-img2-heading1",children:"Card Heading"}),e(t,{children:"Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl."})]}),a(i,{isBordered:!0,children:[e(n,{level:"three",id:"no-img3-heading1",children:"Card Heading"}),e(t,{children:"Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl."})]})]}),e("br",{}),a(o,{columns:1,children:[a(i,{layout:"row",isBordered:!0,children:[e(n,{level:"three",id:"no-img4-heading1",children:"Card Heading"}),e(t,{children:"Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue. Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec id elit non mi porta gravida at eget metus."})]}),a(i,{layout:"row",isBordered:!0,children:[e(n,{level:"three",id:"no-img5-heading1",children:"Card Heading"}),e(t,{children:"Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue. Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec id elit non mi porta gravida at eget metus."})]}),a(i,{layout:"row",isBordered:!0,children:[e(n,{level:"three",id:"no-img6-heading1",children:"Card Heading"}),e(t,{children:"Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue. Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec id elit non mi porta gravida at eget metus."})]})]})]})};var x,k,B,S,R;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    backgroundColor: undefined,
    className: undefined,
    foregroundColor: undefined,
    id: "card-id",
    "imageProps.alt": "Alt text",
    "imageProps.aspectRatio": "square",
    "imageProps.component": undefined,
    "imageProps.isAtEnd": false,
    "imageProps.size": "default",
    "imageProps.src": "https://placeimg.com/400/300/animals",
    isAlignedRightActions: false,
    isBordered: false,
    isCentered: false,
    layout: "row",
    mainActionLink: undefined
  },
  render: args => <Card backgroundColor={args.backgroundColor} className={args.className} foregroundColor={args.foregroundColor} id={args.id} imageProps={{
    alt: args["imageProps.alt"],
    aspectRatio: args["imageProps.aspectRatio"],
    component: args["imageProps.component"],
    isAtEnd: args["imageProps.isAtEnd"],
    size: args["imageProps.size"],
    src: args["imageProps.src"]
  }} isAlignedRightActions={args.isAlignedRightActions} isBordered={args.isBordered} isCentered={args.isCentered} layout={args.layout} mainActionLink={args.mainActionLink}>
      <CardHeading level="two" id="main-heading1">
        Optional Header
      </CardHeading>
      <CardHeading level="three" id="main-heading2">
        Sollicitudin Lorem Tortor Purus Ornare
      </CardHeading>
      <CardContent>
        Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
        libero, a pharetra augue. Nullam quis risus eget urna mollis ornare vel
        eu leo. Nulla vitae elit libero, a pharetra augue.
      </CardContent>
      <CardActions topBorder bottomBorder>
        <Button id="main-button1" onClick={action("clicked")} type="submit">
          Primary
        </Button>
        <Button buttonType="secondary" id="main-button2" onClick={action("clicked")} type="submit">
          Secondary
        </Button>
      </CardActions>
      <CardActions>
        <Link href="#">#hash1</Link>,<Link href="#">#hash2</Link>,
        <Link href="#">#hash3</Link>
      </CardActions>
    </Card>,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=36835%3A25747"
    },
    jest: ["Card.test.tsx"]
  }
}`,...(B=(k=d.parameters)==null?void 0:k.docs)==null?void 0:B.source},description:{story:"Main Story for the Card component. This must contains the `args`\nand `parameters` properties in this object.",...(R=(S=d.parameters)==null?void 0:S.docs)==null?void 0:R.description}}};var N,L,q;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={2}>
      <Card imageProps={{
      alt: "Alt text",
      aspectRatio: "twoByOne",
      src: "https://placeimg.com/400/200/animals"
    }}>
        <CardHeading level="three" id="props-heading1">
          Image on Top (default)
        </CardHeading>
        <CardContent>
          Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
          libero, a pharetra augue.
        </CardContent>
      </Card>
      <Card imageProps={{
      alt: "Alt text",
      aspectRatio: "twoByOne",
      isAtEnd: true,
      src: "https://placeimg.com/400/200/animals"
    }}>
        <CardHeading level="three" id="props-heading2">
          Image on Bottom
        </CardHeading>
        <CardContent>
          Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
          libero, a pharetra augue.
        </CardContent>
      </Card>
    </SimpleGrid>
}`,...(q=(L=c.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var O,V,I;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={1}>
      <Card imageProps={{
      alt: "Alt text",
      aspectRatio: "twoByOne",
      src: "https://placeimg.com/400/200/animals"
    }} isCentered layout="row">
        <CardHeading level="four" id="row-heading1">
          Image on Left (default)
        </CardHeading>
        <CardContent>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac
          facilisis in, egestas eget quam.
        </CardContent>
      </Card>
      <Card imageProps={{
      alt: "Alt text",
      aspectRatio: "twoByOne",
      isAtEnd: true,
      src: "https://placeimg.com/400/200/animals"
    }} isCentered layout="row">
        <CardHeading level="four" id="row-heading2">
          Image on Right
        </CardHeading>
        <CardContent>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac
          facilisis in, egestas eget quam.
        </CardContent>
      </Card>
    </SimpleGrid>
}`,...(I=(V=m.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var z,E,W;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={1}>
      <Card imageProps={{
      alt: "Alt text",
      aspectRatio: "square",
      size: "xxsmall",
      src: "https://placeimg.com/400/200/animals"
    }} isCentered>
        <CardHeading level="three" id="column-heading1">
          Extra Extra Small Image
        </CardHeading>
        <CardHeading level="four" id="column-heading2">
          Max-Width: 64px
        </CardHeading>
        <CardContent>
          Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
          libero, a pharetra augue.
        </CardContent>
      </Card>
      <HorizontalRule />
      <Card imageProps={{
      alt: "Alt text",
      aspectRatio: "square",
      size: "xsmall",
      src: "https://placeimg.com/400/200/animals"
    }} isCentered>
        <CardHeading level="three" id="column-heading1">
          Extra Small Image
        </CardHeading>
        <CardHeading level="four" id="column-heading2">
          Max-Width: 96px
        </CardHeading>
        <CardContent>
          Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
          libero, a pharetra augue.
        </CardContent>
      </Card>
      <HorizontalRule />
      <Card imageProps={{
      alt: "Alt text",
      aspectRatio: "square",
      size: "small",
      src: "https://placeimg.com/400/200/animals"
    }} isCentered>
        <CardHeading level="three" id="column-heading1">
          Small Image
        </CardHeading>
        <CardHeading level="four" id="column-heading2">
          Max-Width: 165px
        </CardHeading>
        <CardContent>
          Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
          libero, a pharetra augue.
        </CardContent>
      </Card>
      <HorizontalRule />
      <Card imageProps={{
      alt: "Alt text",
      aspectRatio: "square",
      size: "medium",
      src: "https://placeimg.com/400/200/animals"
    }} isCentered>
        <CardHeading level="three" id="column2-heading1">
          Medium Image
        </CardHeading>
        <CardHeading level="four" id="column2-heading2">
          Max-Width: 225px
        </CardHeading>
        <CardContent>
          Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
          libero, a pharetra augue.
        </CardContent>
      </Card>
      <HorizontalRule />
      <Card imageProps={{
      alt: "Alt text",
      aspectRatio: "square",
      size: "large",
      src: "https://placeimg.com/400/200/animals"
    }} isCentered>
        <CardHeading level="three" id="column3-heading1">
          Large Image
        </CardHeading>
        <CardHeading level="four" id="column3-heading2">
          Max-Width: 360px
        </CardHeading>
        <CardContent>
          Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
          libero, a pharetra augue.
        </CardContent>
      </Card>
      <HorizontalRule />
      <Card imageProps={{
      alt: "Alt text",
      aspectRatio: "square",
      src: "https://placeimg.com/400/200/animals"
    }} isCentered>
        <CardHeading level="three" id="column-4heading1">
          Default Image
        </CardHeading>
        <CardHeading level="four" id="column-4heading2">
          Width: 100%
        </CardHeading>
        <CardContent>
          Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
          libero, a pharetra augue.
        </CardContent>
      </Card>
    </SimpleGrid>
}`,...(W=(E=g.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var G,M,T;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={1}>
      <Card imageProps={{
      alt: "Alt text",
      aspectRatio: "twoByOne",
      size: "xxsmall",
      src: "https://placeimg.com/400/200/animals"
    }} isCentered layout="row">
        <CardHeading level="three" id="row2-heading1">
          Extra Extra Small Image
        </CardHeading>
        <CardHeading level="four" id="row2-heading2">
          Max-Width: 64px
        </CardHeading>
        <CardContent>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        </CardContent>
      </Card>
      <Card imageProps={{
      alt: "Alt text",
      aspectRatio: "twoByOne",
      size: "xsmall",
      src: "https://placeimg.com/400/200/animals"
    }} isCentered layout="row">
        <CardHeading level="three" id="row2-heading1">
          Extra Small Image
        </CardHeading>
        <CardHeading level="four" id="row2-heading2">
          Max-Width: 96px
        </CardHeading>
        <CardContent>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        </CardContent>
      </Card>
      <Card imageProps={{
      alt: "Alt text",
      aspectRatio: "twoByOne",
      size: "small",
      src: "https://placeimg.com/400/200/animals"
    }} isCentered layout="row">
        <CardHeading level="three" id="row2-heading1">
          Small Image
        </CardHeading>
        <CardHeading level="four" id="row2-heading2">
          Max-Width: 165px
        </CardHeading>
        <CardContent>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        </CardContent>
      </Card>
      <Card imageProps={{
      alt: "Alt text",
      aspectRatio: "twoByOne",
      size: "medium",
      src: "https://placeimg.com/400/200/animals"
    }} isCentered layout="row">
        <CardHeading level="three" id="row3-heading2">
          Medium Image
        </CardHeading>
        <CardHeading level="four" id="row3-heading2">
          Max-Width: 225px
        </CardHeading>
        <CardContent>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Sed posuere consectetur est at lobortis.
        </CardContent>
      </Card>
      <Card imageProps={{
      alt: "Alt text",
      aspectRatio: "twoByOne",
      size: "large",
      src: "https://placeimg.com/400/200/animals"
    }} isCentered layout="row">
        <CardHeading level="three" id="row4-heading1">
          Large Image
        </CardHeading>
        <CardHeading level="four" id="row4-heading2">
          Max-Width: 360px
        </CardHeading>
        <CardContent>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac
          facilisis in, egestas eget quam.
        </CardContent>
      </Card>
      <Card imageProps={{
      alt: "Alt text",
      aspectRatio: "twoByOne",
      src: "https://placeimg.com/400/200/animals"
    }} isCentered layout="row">
        <CardHeading level="three" id="row5-heading2">
          Default Image
        </CardHeading>
        <CardHeading level="four" id="row5-heading2">
          Max-Width: 225px
        </CardHeading>
        <CardContent>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac
          facilisis in, egestas eget quam.
        </CardContent>
      </Card>
    </SimpleGrid>
}`,...(T=(M=p.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var j,F,D;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Card imageProps={{
    alt: "Alt text",
    component: <Image src="https://placeimg.com/400/400/animals" alt="Alt text" />
  }}>
      <CardHeading level="two" id="img1-heading1">
        Card Component with Custom Image Component
      </CardHeading>
      <CardHeading level="three" id="img2-heading2">
        Secondary Heading
      </CardHeading>
      <CardContent>
        Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Aenean lacinia bibendum nulla sed
        consectetur. Vestibulum id ligula porta felis euismod semper. Cras justo
        odio, dapibus ac facilisis in, egestas eget quam. Sed posuere
        consectetur est at lobortis.
      </CardContent>
      <CardActions>
        <Link type="button" href="#">
          Reserve
        </Link>
        <Link href="#url" type="forwards">
          View Book Details
        </Link>
      </CardActions>
    </Card>
}`,...(D=(F=h.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var Y,_,J;C.parameters={...C.parameters,docs:{...(Y=C.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <Card imageProps={{
    alt: "Alt text",
    aspectRatio: "twoByOne",
    src: "https://placeimg.com/400/200/animals"
  }}>
      <CardHeading level="three" id="link-heading1" url="http://nypl.org">
        Go to NYPL home page.
      </CardHeading>
      <CardHeading level="four" id="link-heading2">
        <>
          Go to NYPL <Link href="http://nypl.org">home page</Link>.
        </>
      </CardHeading>
      <CardContent>
        This entire \`Card\` component is clickable, but the links below are still
        accessible by tabbing through the \`Card\` and pressing \`enter\` or
        clicking with a mouse.
      </CardContent>
      <CardActions>
        <Link href="#" type="button">
          Button
        </Link>
        <Link href="#" type="forwards">
          Other link
        </Link>
      </CardActions>
    </Card>
}`,...(J=(_=C.parameters)==null?void 0:_.docs)==null?void 0:J.source}}};var U,K,Q;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={2}>
      <Card imageProps={{
      alt: "Alt text",
      aspectRatio: "twoByOne",
      src: "https://placeimg.com/400/200/animals"
    }} mainActionLink="http://nypl.org">
        <CardHeading level="three" id="fullclick1-heading1">
          Go to NYPL home page.
        </CardHeading>
        <CardHeading level="four" id="fullclick1-heading2">
          Some other heading.
        </CardHeading>
        <CardContent>
          This entire \`Card\` component is clickable, but the links below are
          still accessible by tabbing through the \`Card\` and pressing \`enter\` or
          clicking with a mouse.
        </CardContent>
        <CardActions>
          <Link href="#" type="button">
            Button
          </Link>
          <Link href="#" type="forwards">
            Other link
          </Link>
        </CardActions>
      </Card>
      <Card imageProps={{
      alt: "Alt text",
      aspectRatio: "twoByOne",
      isAtEnd: true,
      src: "https://placeimg.com/410/210/animals"
    }} mainActionLink="http://nypl.org">
        <CardHeading level="three" id="fullclick2-heading1">
          Go to NYPL home page.
        </CardHeading>
        <CardContent>
          This \`Card\` component does not have any extra links.
        </CardContent>
      </Card>
    </SimpleGrid>,
  name: "Full-Click Functionality"
}`,...(Q=(K=f.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Z,$;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={3}>
      <Card isBordered mainActionLink="https://nypl-ds-test-app.vercel.app/fullPages/blog/lunar-new-year#above-header-notification">
        <CardHeading level="four">Lunar New Year Blog</CardHeading>
        <CardContent>
          A basic blog post, including text chracters outside a standard Western
          font-set.
        </CardContent>
      </Card>
      <Card isBordered mainActionLink="https://nypl-ds-test-app.vercel.app/fullPages/blog/doc-chat-forty-two#above-header-notification">
        <CardHeading level="four">Doc Chat Forty-Two Blog</CardHeading>
        <CardContent>A blog post with an array of components.</CardContent>
      </Card>
      <Card isBordered mainActionLink="https://nypl-ds-test-app.vercel.app/fullPages/homepage#above-header-notification">
        <CardHeading level="four">Homepage</CardHeading>
        <CardContent>A layout to mimic a basic homepage structure.</CardContent>
      </Card>
      <Card isBordered mainActionLink="https://nypl-ds-test-app.vercel.app/fullPages/library-registry#above-header-notification">
        <CardHeading level="four">Library Registry Interface</CardHeading>
        <CardContent>A POC for the Library Registry admin tools.</CardContent>
      </Card>
      <Card isBordered mainActionLink="https://nypl-ds-test-app.vercel.app/fullPages/search-and-filter#above-header-notification">
        <CardHeading level="four">Search and Filter</CardHeading>
        <CardContent>
          A functional form to showcase search filtering and content cards.
        </CardContent>
      </Card>
      <Card isBordered mainActionLink="https://nypl-ds-test-app.vercel.app/fullPages/sign-up#above-header-notification">
        <CardHeading level="four">Sign-Up</CardHeading>
        <CardContent>
          A functional form to utilize multiple form input components.
        </CardContent>
      </Card>
    </SimpleGrid>,
  name: "Full-Click Turbine Example"
}`,...($=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ae,ne;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <Card imageProps={{
    alt: "Alt text",
    aspectRatio: "twoByOne",
    size: "medium",
    src: "https://placeimg.com/400/200/animals"
  }} isAlignedRightActions isCentered layout="row">
      <CardHeading level="two" id="main-heading1">
        Optional Header
      </CardHeading>
      <CardHeading level="three" id="main-heading2">
        Sollicitudin Lorem Tortor Purus Ornare
      </CardHeading>
      <CardContent>
        Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
        libero, a pharetra augue. Nullam quis risus eget urna mollis ornare vel
        eu leo. Nulla vitae elit libero, a pharetra augue.
      </CardContent>
      <CardActions topBorder bottomBorder>
        <Button onClick={action("clicked")} id="main-button1" type="submit">
          Primary
        </Button>
        <Button onClick={action("clicked")} id="main-button2" buttonType="secondary" type="submit">
          Secondary
        </Button>
      </CardActions>
      <CardActions>
        <Link href="#">#hash1</Link>,<Link href="#">#hash2</Link>,
        <Link href="#">#hash3</Link>
      </CardActions>
    </Card>,
  name: "Right Side CardActions"
}`,...(ne=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var ie,te,re;y.parameters={...y.parameters,docs:{...(ie=y.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={3}>
      <Card imageProps={{
      alt: "Alt text",
      aspectRatio: "twoByOne",
      src: "https://placeimg.com/400/200/animals"
    }}>
        <CardHeading level="three" id="grid1-heading1">
          Card Heading
        </CardHeading>
        <CardContent>
          Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
          libero, a pharetra augue.
        </CardContent>
      </Card>
      <Card imageProps={{
      alt: "Alt text",
      aspectRatio: "twoByOne",
      src: "https://placeimg.com/410/210/animals"
    }}>
        <CardHeading level="three" id="grid2-heading1">
          Card Heading
        </CardHeading>
        <CardContent>
          Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
          libero, a pharetra augue.
        </CardContent>
      </Card>
      <Card imageProps={{
      alt: "Alt text",
      aspectRatio: "twoByOne",
      src: "https://placeimg.com/420/220/animals"
    }}>
        <CardHeading level="three" id="grid3-heading1">
          Card Heading
        </CardHeading>
        <CardContent>
          Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
          libero, a pharetra augue.
        </CardContent>
      </Card>
      <Card imageProps={{
      alt: "Alt text",
      aspectRatio: "twoByOne",
      src: "https://placeimg.com/430/230/animals"
    }}>
        <CardHeading level="three" id="grid4-heading1">
          Card Heading
        </CardHeading>
        <CardContent>
          Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
          libero, a pharetra augue.
        </CardContent>
      </Card>
      <Card imageProps={{
      alt: "Alt text",
      aspectRatio: "twoByOne",
      src: "https://placeimg.com/440/200/animals"
    }}>
        <CardHeading level="three" id="grid5-heading1">
          Card Heading
        </CardHeading>
        <CardContent>
          Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
          libero, a pharetra augue.
        </CardContent>
      </Card>
      <Card imageProps={{
      alt: "Alt text",
      aspectRatio: "twoByOne",
      src: "https://placeimg.com/450/200/animals"
    }}>
        <CardHeading level="three" id="grid6-heading1">
          Card Heading
        </CardHeading>
        <CardContent>
          Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
          libero, a pharetra augue.
        </CardContent>
      </Card>
    </SimpleGrid>
}`,...(re=(te=y.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var le,oe,se;H.parameters={...H.parameters,docs:{...(le=H.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={1}>
      <Card imageProps={{
      alt: "Alt text",
      aspectRatio: "twoByOne",
      src: "https://placeimg.com/400/200/animals"
    }} isCentered layout="row">
        <CardHeading level="four" id="stack1-heading1">
          Card Heading
        </CardHeading>
        <CardContent>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac
          facilisis in, egestas eget quam.
        </CardContent>
      </Card>
      <Card imageProps={{
      alt: "Alt text",
      aspectRatio: "twoByOne",
      src: "https://placeimg.com/410/210/animals"
    }} isCentered layout="row">
        <CardHeading level="four" id="stack2-heading2">
          Card Heading
        </CardHeading>
        <CardContent>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac
          facilisis in, egestas eget quam.
        </CardContent>
      </Card>
      <Card imageProps={{
      alt: "Alt text",
      aspectRatio: "twoByOne",
      src: "https://placeimg.com/420/220/animals"
    }} isCentered layout="row">
        <CardHeading level="four" id="stack3-heading3">
          Card Heading
        </CardHeading>
        <CardContent>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac
          facilisis in, egestas eget quam.
        </CardContent>
      </Card>
    </SimpleGrid>
}`,...(se=(oe=H.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var de,ue,ce;P.parameters={...P.parameters,docs:{...(de=P.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <>
      <SimpleGrid columns={3}>
        <Card isBordered>
          <CardHeading level="three" id="no-img1-heading1">
            Card Heading
          </CardHeading>
          <CardContent>
            Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
            libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue.
            Praesent commodo cursus magna, vel scelerisque nisl.
          </CardContent>
        </Card>
        <Card isBordered>
          <CardHeading level="three" id="no-img2-heading1">
            Card Heading
          </CardHeading>
          <CardContent>
            Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
            libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue.
            Praesent commodo cursus magna, vel scelerisque nisl.
          </CardContent>
        </Card>
        <Card isBordered>
          <CardHeading level="three" id="no-img3-heading1">
            Card Heading
          </CardHeading>
          <CardContent>
            Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
            libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue.
            Praesent commodo cursus magna, vel scelerisque nisl.
          </CardContent>
        </Card>
      </SimpleGrid>
      <br />
      <SimpleGrid columns={1}>
        <Card layout="row" isBordered>
          <CardHeading level="three" id="no-img4-heading1">
            Card Heading
          </CardHeading>
          <CardContent>
            Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
            libero, a pharetra augue. Vestibulum id ligula porta felis euismod
            semper. Nulla vitae elit libero, a pharetra augue. Nulla vitae elit
            libero, a pharetra augue. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec id elit non mi porta gravida
            at eget metus.
          </CardContent>
        </Card>
        <Card layout="row" isBordered>
          <CardHeading level="three" id="no-img5-heading1">
            Card Heading
          </CardHeading>
          <CardContent>
            Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
            libero, a pharetra augue. Vestibulum id ligula porta felis euismod
            semper. Nulla vitae elit libero, a pharetra augue. Nulla vitae elit
            libero, a pharetra augue. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec id elit non mi porta gravida
            at eget metus.
          </CardContent>
        </Card>
        <Card layout="row" isBordered>
          <CardHeading level="three" id="no-img6-heading1">
            Card Heading
          </CardHeading>
          <CardContent>
            Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
            libero, a pharetra augue. Vestibulum id ligula porta felis euismod
            semper. Nulla vitae elit libero, a pharetra augue. Nulla vitae elit
            libero, a pharetra augue. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec id elit non mi porta gravida
            at eget metus.
          </CardContent>
        </Card>
      </SimpleGrid>
    </>
}`,...(ce=(ue=P.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};const fe=["WithControls","ImagePositionColumnCards","ImagePositionRowCards","ImageSizeColumnCards","ImageSizeRowCards","CustomImageComponent","HeadingAsLink","FullClick","CardFullClickTurbineExample","CardWithRightSideCardActions","GridExample","StackExample","WithoutImages"],Se=Object.freeze(Object.defineProperty({__proto__:null,CardFullClickTurbineExample:b,CardWithRightSideCardActions:v,CustomImageComponent:h,FullClick:f,GridExample:y,HeadingAsLink:C,ImagePositionColumnCards:c,ImagePositionRowCards:m,ImageSizeColumnCards:g,ImageSizeRowCards:p,StackExample:H,WithControls:d,WithoutImages:P,__namedExportsOrder:fe,default:Ce},Symbol.toStringTag,{value:"Module"}));export{Se as C,f as F,y as G,C as H,c as I,H as S,d as W,m as a,g as b,p as c,h as d,b as e,v as f,P as g};
//# sourceMappingURL=Card.stories-d91f0950.js.map
