import{j as e,a as n,F as r}from"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import{w as V}from"./index-6148c31a.js";import{A as z}from"./Accordion-ddc955e7.js";import{B as K}from"./Breadcrumbs-527e5d08.js";import{B as j}from"./Button-948e9be8.js";import{C as m,a as l,b as h,c as E}from"./Card-4cbdbbf1.js";import{F as O,a as o,b as Y}from"./Form-b79b3734.js";import{H as W}from"./Heading-7eebc756.js";import{H as U}from"./Hero-42312d27.js";import{H as J}from"./HorizontalRule-3ade1aff.js";import{L as u}from"./Link-24c1437a.js";import{N as p}from"./Notification-715070ee.js";import{S}from"./SkipNavigation-d3aa0043.js";import{T as w,a as N,b as A,c as B,d as M,e as I,f as R,h as b,g as L,i as _,j as q}from"./Template-004c0517.js";import{T as s}from"./TextInput-70995d87.js";function t({children:a,variant:D}){return e("div",{className:`placeholder placeholder--${D}`,children:a})}try{t.displayName="Placeholder",t.__docgenInfo={description:`Creates a gray box with an editable string for dropping in spaces
within components or on templates where a component will be but
that hasn't been created yet`,displayName:"Placeholder",props:{variant:{defaultValue:null,description:"Modifier string for the classname.",name:"variant",required:!1,type:{name:"string"}}}}}catch{}const G={title:"Components/Page Layout/Template",component:w,decorators:[V]},X="With 92 locations across the Bronx, Manhattan, and Staten Island, The New York Public Library is an essential part of neighborhoods across the city. Visit us today.",$=[{accordionType:"default",label:"Tom Nook",panel:n(m,{imageProps:{alt:"Alt text",aspectRatio:"twoByOne",src:"https://play.nintendo.com/images/AC_Tom_FRYtwIN.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png"},isCentered:!0,layout:"row",children:[e(l,{level:"h4",id:"heading1",children:"Tom Nook"}),n(h,{children:["Tom Nook, ",e("b",{children:"known in Japan as Tanukichi"}),", is a fictional character in the Animal Crossing series who operates the village store."]})]})}],Q=[...$,{accordionType:"warning",label:"Isabelle",panel:n(m,{imageProps:{alt:"Alt text",aspectRatio:"twoByOne",src:"https://play.nintendo.com/images/AC_Isabelle_7XU6aGu.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png"},isCentered:!0,layout:"row",children:[e(l,{level:"h4",id:"heading1-isabelle",children:"Isabelle"}),e(h,{children:"Isabelle, known as Shizue in Japan, is a fictional character from the Animal Crossing series of video games. She is a kindly Shih Tzu that debuted in the 2012 release Animal Crossing: New Leaf, where she serves as the secretary to the player character."})]})},{accordionType:"error",label:"K.K. Slider",panel:n(m,{imageProps:{alt:"Alt text",aspectRatio:"twoByOne",src:"https://play.nintendo.com/images/AC_KK_jh4yj5t.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png"},isCentered:!0,layout:"row",children:[e(l,{level:"h4",id:"heading1-kkslider",children:"K.K. Slider"}),e(h,{children:n("p",{children:["Totakeke, more commonly known as ",e("b",{children:"K.K. Slider or K.K."}),", is a fictional character within the Animal Crossing franchise. One of the franchise's most popular characters, he debuted in the title Animal Crossing, and has appeared in every installment since."]})})]})}],i={args:{aboveHeader:e(t,{variant:"short",children:"Above Header"}),breakout:n(r,{children:[e(t,{variant:"short",children:"Breadcrumbs"}),e(t,{children:"Hero"})]}),contentBottom:e(t,{variant:"short",children:"Content Bottom"}),contentId:"mainContent",contentPrimary:n(r,{children:[e(t,{children:"Main Content"}),e(t,{variant:"short",children:"More Content"})]}),contentSidebar:e(t,{children:"Left Sidebar"}),contentTop:e(t,{variant:"short",children:"Content Top"}),footer:e(t,{children:"Footer"}),header:e(t,{variant:"short",children:"Header"}),renderFooterElement:!0,renderHeaderElement:!0,renderSkipNavigation:!1,sidebar:"left"},argTypes:{aboveHeader:{control:!1},breakout:{control:!1},contentBottom:{control:!1},contentPrimary:{control:!1},contentSidebar:{control:!1},contentTop:{control:!1},footer:{control:!1},header:{control:!1},renderSkipNavigation:{table:{defaultValue:{summary:"false"}}},sidebar:{table:{defaultValue:{summary:"none"}}}},render:a=>e(w,{...a}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=36835%3A26688"}}},d={args:{sidebar:"left"},argTypes:{aboveHeader:{table:{disable:!0}},breakout:{table:{disable:!0}},contentBottom:{table:{disable:!0}},contentId:{table:{disable:!0}},contentPrimary:{table:{disable:!0}},contentSidebar:{table:{disable:!0}},contentTop:{table:{disable:!0}},footer:{table:{disable:!0}},header:{table:{disable:!0}},sidebar:{description:"Only used in Storybook."}},render:a=>n(r,{children:[e(S,{}),n(N,{children:[n(A,{children:[e(B,{children:e(t,{variant:"short",children:"Above Header"})}),n(M,{children:[e(t,{variant:"short",children:"Header"}),e(t,{variant:"short",children:"Breadcrumbs"}),e(t,{children:"Hero"})]})]}),n(I,{sidebar:a.sidebar,children:[e(R,{children:e(t,{variant:"short",children:"Content Top"})}),a.sidebar==="left"&&e(b,{children:e(t,{children:"Left Sidebar"})}),n(L,{children:[e(t,{children:"Main Content"}),e(t,{variant:"short",children:"More Content"})]}),a.sidebar==="right"&&e(b,{children:e(t,{children:"Right Sidebar"})}),e(_,{children:e(t,{variant:"short",children:"Content Bottom"})})]}),e(q,{children:e(t,{children:"Footer"})})]})]})},c={render:()=>n(r,{children:[e(S,{}),n(N,{children:[n(A,{children:[e(B,{children:e(p,{noMargin:!0,notificationHeading:"Standard Notification",notificationContent:e(r,{children:'This is an "announcement" Notification with a heading. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.'}),showIcon:!1})}),n(M,{children:[e(K,{breadcrumbsData:[{url:"#",text:"Home"},{url:"#",text:"Research"},{url:"#",text:"Catalog"}]}),e(U,{backgroundImageSrc:"//placekitten.com/g/2400/800",heroType:"campaign",heading:e(W,{level:"h1",id:"1",text:"Hero Campaign"}),imageProps:{alt:"Image example",src:"//placekitten.com/800/400"},subHeaderText:X})]})]}),n(I,{sidebar:"right",children:[e(R,{children:e(p,{notificationType:"announcement",notificationHeading:"Announcement Notification",notificationContent:e(r,{children:'This is an "announcement" Notification with a heading. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.'})})}),n(L,{children:[e("p",{children:"This is the main content!"}),e(z,{accordionData:Q}),e(J,{}),e("p",{children:"Fill out the form!"}),n(O,{action:"/end/point",id:"form1",children:[e(o,{children:e(s,{helperText:"Make sure to complete this field.",id:"username",labelText:"Username",isRequired:!0})}),e(o,{children:e(s,{helperText:"Make sure to complete this field.",id:"password",labelText:"Password",isRequired:!0})}),n(Y,{children:[e(o,{children:e(s,{id:"phone-field",labelText:"Phone Field",type:"tel"})}),e(o,{children:e(s,{id:"url-field",labelText:"URL Field",type:"url"})}),e(o,{children:e(s,{id:"age-field",labelText:"Age",type:"number"})})]}),e(o,{children:e(j,{id:"submit",children:"Submit"})})]})]}),n(b,{children:[e("p",{children:"Sidebar information in a `Card` component."}),n(m,{imageProps:{alt:"Alt text",aspectRatio:"square",size:"small",src:"//placekitten.com/400/200"},isCentered:!0,children:[e(l,{size:"heading4",id:"heading1",children:"Small Animal Image"}),e(l,{level:"h3",size:"heading6",id:"heading2",children:"Animal info"}),e(h,{children:"Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue."})]})]}),e(_,{children:e(p,{noMargin:!0,notificationHeading:"Standard Notification",notificationContent:e(r,{children:"This is an the bottom content area!"}),showIcon:!1})})]}),e(q,{children:n(m,{id:"custom-card",imageProps:{alt:"Alt text",aspectRatio:"sixteenByNine",src:"https://cdn-d8.nypl.org/s3fs-public/2020-05/NYPL_MainFacadeRev2Cam2.png"},layout:"row",backgroundColor:"#616161",foregroundColor:"#FFF",children:[e(l,{id:"heading1-footer",children:"Footer"}),n(h,{children:[e("p",{children:"This is an example footer using the `Card` component."}),e("p",{children:"© The New York Public Library, 2021 The New York Public Library is a 501(c)(3) | EIN 13-1887440"})]}),n(E,{children:[e(u,{color:"#FFF",href:"#",textDecoration:"underline",children:"Facebook"}),",",e(u,{color:"#FFF",href:"#",textDecoration:"underline",children:"Instagram"}),",",e(u,{color:"#FFF",href:"#",textDecoration:"underline",children:"Twitter"})]})]})})]})]})};var f,g,T,C,F;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    aboveHeader: <Placeholder variant="short">Above Header</Placeholder>,
    breakout: <>
        <Placeholder variant="short">Breadcrumbs</Placeholder>
        <Placeholder>Hero</Placeholder>
      </>,
    contentBottom: <Placeholder variant="short">Content Bottom</Placeholder>,
    contentId: "mainContent",
    contentPrimary: <>
        <Placeholder>Main Content</Placeholder>
        <Placeholder variant="short">More Content</Placeholder>
      </>,
    contentSidebar: <Placeholder>Left Sidebar</Placeholder>,
    contentTop: <Placeholder variant="short">Content Top</Placeholder>,
    footer: <Placeholder>Footer</Placeholder>,
    header: <Placeholder variant="short">Header</Placeholder>,
    renderFooterElement: true,
    renderHeaderElement: true,
    renderSkipNavigation: false,
    sidebar: "left"
  },
  argTypes: {
    aboveHeader: {
      control: false
    },
    breakout: {
      control: false
    },
    contentBottom: {
      control: false
    },
    contentPrimary: {
      control: false
    },
    contentSidebar: {
      control: false
    },
    contentTop: {
      control: false
    },
    footer: {
      control: false
    },
    header: {
      control: false
    },
    renderSkipNavigation: {
      table: {
        defaultValue: {
          summary: "false"
        }
      }
    },
    sidebar: {
      table: {
        defaultValue: {
          summary: "none"
        }
      }
    }
  },
  render: args => <TemplateAppContainer {...args} />,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=36835%3A26688"
    }
  }
}`,...(T=(g=i.parameters)==null?void 0:g.docs)==null?void 0:T.source},description:{story:"Main Story for the Template component. This must contains the `args`\nand `parameters` properties in this object.",...(F=(C=i.parameters)==null?void 0:C.docs)==null?void 0:F.description}}};var y,P,v;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    sidebar: "left"
  },
  argTypes: {
    aboveHeader: {
      table: {
        disable: true
      }
    },
    breakout: {
      table: {
        disable: true
      }
    },
    contentBottom: {
      table: {
        disable: true
      }
    },
    contentId: {
      table: {
        disable: true
      }
    },
    contentPrimary: {
      table: {
        disable: true
      }
    },
    contentSidebar: {
      table: {
        disable: true
      }
    },
    contentTop: {
      table: {
        disable: true
      }
    },
    footer: {
      table: {
        disable: true
      }
    },
    header: {
      table: {
        disable: true
      }
    },
    sidebar: {
      description: "Only used in Storybook."
    }
  },
  render: args => <>
      <SkipNavigation />
      <Template>
        <TemplateBreakout>
          <TemplateAboveHeader>
            <Placeholder variant="short">Above Header</Placeholder>
          </TemplateAboveHeader>
          <TemplateHeader>
            <Placeholder variant="short">Header</Placeholder>
            <Placeholder variant="short">Breadcrumbs</Placeholder>
            <Placeholder>Hero</Placeholder>
          </TemplateHeader>
        </TemplateBreakout>
        <TemplateContent sidebar={args.sidebar}>
          <TemplateContentTop>
            <Placeholder variant="short">Content Top</Placeholder>
          </TemplateContentTop>
          {args.sidebar === "left" && <TemplateContentSidebar>
              <Placeholder>Left Sidebar</Placeholder>
            </TemplateContentSidebar>}
          <TemplateContentPrimary>
            <Placeholder>Main Content</Placeholder>
            <Placeholder variant="short">More Content</Placeholder>
          </TemplateContentPrimary>
          {args.sidebar === "right" && <TemplateContentSidebar>
              <Placeholder>Right Sidebar</Placeholder>
            </TemplateContentSidebar>}
          <TemplateContentBottom>
            <Placeholder variant="short">Content Bottom</Placeholder>
          </TemplateContentBottom>
        </TemplateContent>
        <TemplateFooter>
          <Placeholder>Footer</Placeholder>
        </TemplateFooter>
      </Template>
    </>
}`,...(v=(P=d.parameters)==null?void 0:P.docs)==null?void 0:v.source}}};var H,k,x;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <>
      <SkipNavigation />
      <Template>
        <TemplateBreakout>
          <TemplateAboveHeader>
            <Notification noMargin notificationHeading="Standard Notification" notificationContent={<>
                  This is an "announcement" Notification with a heading. Cras
                  mattis consectetur purus sit amet fermentum. Maecenas faucibus
                  mollis interdum. Morbi leo risus, porta ac consectetur ac,
                  vestibulum at eros. Cum sociis natoque penatibus et magnis dis
                  parturient montes, nascetur ridiculus mus. Vivamus sagittis
                  lacus vel augue laoreet rutrum faucibus dolor auctor.
                </>} showIcon={false} />
          </TemplateAboveHeader>
          <TemplateHeader>
            <Breadcrumbs breadcrumbsData={[{
            url: "#",
            text: "Home"
          }, {
            url: "#",
            text: "Research"
          }, {
            url: "#",
            text: "Catalog"
          }]} />
            <Hero backgroundImageSrc="//placekitten.com/g/2400/800" heroType="campaign" heading={<Heading level="h1" id="1" text="Hero Campaign" />} imageProps={{
            alt: "Image example",
            src: "//placekitten.com/800/400"
          }} subHeaderText={otherSubHeaderText} />
          </TemplateHeader>
        </TemplateBreakout>
        <TemplateContent sidebar="right">
          <TemplateContentTop>
            <Notification notificationType="announcement" notificationHeading="Announcement Notification" notificationContent={<>
                  This is an "announcement" Notification with a heading. Cras
                  mattis consectetur purus sit amet fermentum. Maecenas faucibus
                  mollis interdum. Morbi leo risus, porta ac consectetur ac,
                  vestibulum at eros. Cum sociis natoque penatibus et magnis dis
                  parturient montes, nascetur ridiculus mus. Vivamus sagittis
                  lacus vel augue laoreet rutrum faucibus dolor auctor.
                </>} />
          </TemplateContentTop>
          <TemplateContentPrimary>
            <p>This is the main content!</p>
            <Accordion accordionData={faqContentData} />
            <HorizontalRule />
            <p>Fill out the form!</p>
            <Form action="/end/point" id="form1">
              <FormField>
                <TextInput helperText="Make sure to complete this field." id="username" labelText="Username" isRequired />
              </FormField>
              <FormField>
                <TextInput helperText="Make sure to complete this field." id="password" labelText="Password" isRequired />
              </FormField>
              <FormRow>
                <FormField>
                  <TextInput id="phone-field" labelText="Phone Field" type="tel" />
                </FormField>
                <FormField>
                  <TextInput id="url-field" labelText="URL Field" type="url" />
                </FormField>
                <FormField>
                  <TextInput id="age-field" labelText="Age" type="number" />
                </FormField>
              </FormRow>
              <FormField>
                <Button id="submit">Submit</Button>
              </FormField>
            </Form>
          </TemplateContentPrimary>
          <TemplateContentSidebar>
            <p>Sidebar information in a \`Card\` component.</p>
            <Card imageProps={{
            alt: "Alt text",
            aspectRatio: "square",
            size: "small",
            src: "//placekitten.com/400/200"
          }} isCentered>
              <CardHeading size="heading4" id="heading1">
                Small Animal Image
              </CardHeading>
              <CardHeading level="h3" size="heading6" id="heading2">
                Animal info
              </CardHeading>
              <CardContent>
                Vestibulum id ligula porta felis euismod semper. Nulla vitae
                elit libero, a pharetra augue.
              </CardContent>
            </Card>
          </TemplateContentSidebar>
          <TemplateContentBottom>
            <Notification noMargin notificationHeading="Standard Notification" notificationContent={<>This is an the bottom content area!</>} showIcon={false} />
          </TemplateContentBottom>
        </TemplateContent>
        <TemplateFooter>
          <Card id="custom-card" imageProps={{
          alt: "Alt text",
          aspectRatio: "sixteenByNine",
          src: "https://cdn-d8.nypl.org/s3fs-public/2020-05/NYPL_MainFacadeRev2Cam2.png"
        }} layout="row" backgroundColor="#616161" foregroundColor="#FFF">
            <CardHeading id="heading1-footer">Footer</CardHeading>
            <CardContent>
              <p>This is an example footer using the \`Card\` component.</p>
              <p>
                © The New York Public Library, 2021 The New York Public Library
                is a 501(c)(3) | EIN 13-1887440
              </p>
            </CardContent>
            <CardActions>
              <Link color="#FFF" href="#" textDecoration="underline">
                Facebook
              </Link>
              ,
              <Link color="#FFF" href="#" textDecoration="underline">
                Instagram
              </Link>
              ,
              <Link color="#FFF" href="#" textDecoration="underline">
                Twitter
              </Link>
            </CardActions>
          </Card>
        </TemplateFooter>
      </Template>
    </>
}`,...(x=(k=c.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};const Z=["WithControls","ChildrenComponentProps","FullExampleWithTemplateChildrenComponents"],be=Object.freeze(Object.defineProperty({__proto__:null,ChildrenComponentProps:d,FullExampleWithTemplateChildrenComponents:c,WithControls:i,__namedExportsOrder:Z,default:G},Symbol.toStringTag,{value:"Module"}));export{d as C,c as F,be as T,i as W};
//# sourceMappingURL=Template.stories-887f0f47.js.map
