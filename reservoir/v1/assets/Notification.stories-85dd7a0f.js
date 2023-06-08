import{a as c,j as t,F as i}from"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import{w as L}from"./index-6148c31a.js";import{I as j}from"./Icon-6616a4b9.js";import{L as D}from"./Link-0ed02cf7.js";import{N as n,n as A}from"./Notification-69d32803.js";import{T as m}from"./Text-eabcdc0a.js";const _={title:"Components/Feedback/Notification",component:n,decorators:[L],argTypes:{className:{control:!1},dismissible:{table:{defaultValue:{summary:!1}}},icon:{control:!1},id:{control:!1},isCentered:{table:{defaultValue:{summary:!1}}},noMargin:{table:{defaultValue:{summary:!1}}},notificationContent:{control:!1},notificationType:{control:{type:"radio"},options:A,table:{defaultValue:{summary:"standard"}}}}},e={args:{ariaLabel:"Notification label",className:void 0,dismissible:!1,icon:void 0,id:"notification-id",isCentered:!1,noMargin:!1,notificationHeading:"Notification Heading",notificationContent:c(i,{children:["Cras ",t("a",{href:"/",children:"link"})," mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula."]}),notificationType:"standard",showIcon:!0},parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/?node-id=10734%3A812"},jest:["Notification.test.tsx"]},render:k=>t("div",{style:{border:"1px solid #ccc"},children:t(n,{...k})})},s={render:()=>c(i,{children:[t(n,{notificationHeading:"Standard Notification",notificationContent:t(i,{children:'This is a "standard" Notification with a heading. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.'})}),t(n,{notificationType:"announcement",notificationHeading:"Announcement Notification",notificationContent:t(i,{children:'This is an "announcement" Notification with a heading. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.'})}),t(n,{notificationType:"warning",notificationHeading:"Warning Notification",notificationContent:t(i,{children:'This is a "warning" Notification with a heading. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.'})}),t(n,{notificationContent:t(i,{children:'This is a "standard" Notification without a heading. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.'})}),t(n,{notificationType:"announcement",notificationContent:t(i,{children:'This is an "announcement" Notification without a heading. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.'})}),t(n,{notificationType:"warning",notificationContent:t(i,{children:'This is a "warning" Notification without a heading. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.'})})]})},a={render:()=>c(i,{children:[t(n,{notificationHeading:"Notification with Icon",notificationContent:t(i,{children:"Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."})}),t(n,{notificationContent:t(i,{children:"Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."})}),t(n,{notificationHeading:"Notification without Icon",notificationContent:t(i,{children:"Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}),showIcon:!1}),t(n,{notificationContent:t(i,{children:"Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}),showIcon:!1})]})},o={render:()=>t(n,{icon:t(j,{name:"check",color:"section.research.secondary"}),notificationHeading:"Custom Icon",notificationContent:t(i,{children:"This is a Notification with a custom icon. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."})})},u={render:()=>t(n,{notificationHeading:"Standard Notification with HTML content",notificationContent:c(i,{children:[t(m,{children:"Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum."}),c(m,{noSpace:!0,children:["Morbi leo risus, porta ac consectetur ac, vestibulum at eros."," ",t("b",{children:"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus"}),". ",t(D,{href:"#",children:"This is a link"}),"."]})]})})},r={render:()=>t(n,{dismissible:!0,notificationHeading:"Dismissible Notification",notificationContent:t(i,{children:"This is a dismissible Notification with an X icon. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}),notificationType:"announcement"})};var l,d,f,p,b;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ariaLabel: "Notification label",
    className: undefined,
    dismissible: false,
    icon: undefined,
    id: "notification-id",
    isCentered: false,
    noMargin: false,
    notificationHeading: "Notification Heading",
    notificationContent: <>
        Cras <a href="/">link</a> mattis consectetur purus sit amet fermentum.
        Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur
        ac, vestibulum at eros. Cum sociis natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Vivamus sagittis lacus vel
        augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo
        luctus, nisi erat porttitor ligula.
      </>,
    notificationType: "standard",
    showIcon: true
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/?node-id=10734%3A812"
    },
    jest: ["Notification.test.tsx"]
  },
  render: args => <div style={{
    border: "1px solid #ccc"
  }}>
      <Notification {...args} />
    </div>
}`,...(f=(d=e.parameters)==null?void 0:d.docs)==null?void 0:f.source},description:{story:"Main Story for the Notification component. This must contains the `args`\nand `parameters` properties in this object.",...(b=(p=e.parameters)==null?void 0:p.docs)==null?void 0:b.description}}};var g,C,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <>
      <Notification notificationHeading="Standard Notification" notificationContent={<>
            This is a "standard" Notification with a heading. Cras mattis
            consectetur purus sit amet fermentum. Maecenas faucibus mollis
            interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at
            eros. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet
            rutrum faucibus dolor auctor.
          </>} />
      <Notification notificationType="announcement" notificationHeading="Announcement Notification" notificationContent={<>
            This is an "announcement" Notification with a heading. Cras mattis
            consectetur purus sit amet fermentum. Maecenas faucibus mollis
            interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at
            eros. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet
            rutrum faucibus dolor auctor.
          </>} />
      <Notification notificationType="warning" notificationHeading="Warning Notification" notificationContent={<>
            This is a "warning" Notification with a heading. Cras mattis
            consectetur purus sit amet fermentum. Maecenas faucibus mollis
            interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at
            eros. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet
            rutrum faucibus dolor auctor.
          </>} />
      <Notification notificationContent={<>
            This is a "standard" Notification without a heading. Cras mattis
            consectetur purus sit amet fermentum. Maecenas faucibus mollis
            interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at
            eros. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet
            rutrum faucibus dolor auctor.
          </>} />
      <Notification notificationType="announcement" notificationContent={<>
            This is an "announcement" Notification without a heading. Cras
            mattis consectetur purus sit amet fermentum. Maecenas faucibus
            mollis interdum. Morbi leo risus, porta ac consectetur ac,
            vestibulum at eros. Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Vivamus sagittis lacus
            vel augue laoreet rutrum faucibus dolor auctor.
          </>} />
      <Notification notificationType="warning" notificationContent={<>
            This is a "warning" Notification without a heading. Cras mattis
            consectetur purus sit amet fermentum. Maecenas faucibus mollis
            interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at
            eros. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet
            rutrum faucibus dolor auctor.
          </>} />
    </>
}`,...(h=(C=s.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var M,N,v;a.parameters={...a.parameters,docs:{...(M=a.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <>
      <Notification notificationHeading="Notification with Icon" notificationContent={<>
            Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus
            mollis interdum. Morbi leo risus, porta ac consectetur ac,
            vestibulum at eros. Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus.
          </>} />
      <Notification notificationContent={<>
            Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus
            mollis interdum. Morbi leo risus, porta ac consectetur ac,
            vestibulum at eros. Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus.
          </>} />
      <Notification notificationHeading="Notification without Icon" notificationContent={<>
            Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus
            mollis interdum. Morbi leo risus, porta ac consectetur ac,
            vestibulum at eros. Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus.
          </>} showIcon={false} />
      <Notification notificationContent={<>
            Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus
            mollis interdum. Morbi leo risus, porta ac consectetur ac,
            vestibulum at eros. Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus.
          </>} showIcon={false} />
    </>
}`,...(v=(N=a.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};var T,w,y;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Notification icon={<Icon name="check" color="section.research.secondary" />} notificationHeading="Custom Icon" notificationContent={<>
          This is a Notification with a custom icon. Cras mattis consectetur
          purus sit amet fermentum. Maecenas faucibus mollis interdum. Morbi leo
          risus, porta ac consectetur ac, vestibulum at eros. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </>} />
}`,...(y=(w=o.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var q,H,I;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <Notification notificationHeading="Standard Notification with HTML content" notificationContent={<>
          <Text>
            Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus
            mollis interdum.
          </Text>
          <Text noSpace>
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros.{" "}
            <b>
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus
            </b>
            . <Link href="#">This is a link</Link>.
          </Text>
        </>} />
}`,...(I=(H=u.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var S,V,x;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Notification dismissible notificationHeading="Dismissible Notification" notificationContent={<>
          This is a dismissible Notification with an X icon. Cras mattis
          consectetur purus sit amet fermentum. Maecenas faucibus mollis
          interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at
          eros. Cum sociis natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus.
        </>} notificationType="announcement" />
}`,...(x=(V=r.parameters)==null?void 0:V.docs)==null?void 0:x.source}}};const F=["WithControls","NotificationHeading","NotificationIcon","CustomIcon","HTMLContent","Dismissible"],P=Object.freeze(Object.defineProperty({__proto__:null,CustomIcon:o,Dismissible:r,HTMLContent:u,NotificationHeading:s,NotificationIcon:a,WithControls:e,__namedExportsOrder:F,default:_},Symbol.toStringTag,{value:"Module"}));export{o as C,r as D,u as H,P as N,e as W,s as a,a as b};
//# sourceMappingURL=Notification.stories-85dd7a0f.js.map
