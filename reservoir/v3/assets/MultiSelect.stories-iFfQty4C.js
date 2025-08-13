import{aA as Be,aB as ye,a7 as b,j as e,O as x,H as h,m as _,r as S,z as Me,o as Ee}from"./iframe-CFLVJZOZ.js";import{u as V}from"./useMultiSelect-BKRBcoIA.js";const{action:C}=__STORYBOOK_MODULE_ACTIONS__,{userEvent:m,within:g,expect:f}=__STORYBOOK_MODULE_TEST__,o=[{id:"art",name:"Art"},{id:"architecture",name:"Architecture"},{id:"art_history",name:"Art History"},{id:"design",name:"Design"},{id:"business",name:"Business"},{id:"advertising",name:"Advertising"},{id:"government_and_law",name:"Government and Law"},{id:"civil_rights",name:"Civil Rights"},{id:"history",name:"History"},{id:"atlases",name:"Atlases"},{id:"cartography",name:"Cartography"},{id:"geology",name:"Geology"}],p=[{id:"art",name:"Art"},{id:"architecture",name:"Architecture"},{id:"design",name:"Design",children:[{id:"fashion",name:"Fashion"},{id:"ux",name:"User Experience"},{id:"architecture_design",name:"Architecture"},{id:"home",name:"Home"}]},{id:"business",name:"Business"},{id:"education",name:"Education"},{id:"games",name:"Games"}],je=[{id:"art",name:"Art"},{id:"architecture",name:"Architecture",isDisabled:!0},{id:"art_history",name:"Art History"},{id:"design",name:"Design",children:[{id:"fashion",name:"Fashion",isDisabled:!0},{id:"ux",name:"User Experience",isDisabled:!0},{id:"architecture_design",name:"Architecture",isDisabled:!1},{id:"home",name:"Home",isDisabled:!1}]},{id:"business",name:"Business"}],Ie=[{id:"art",name:"Art"},{id:"architecture",name:"Architecture",isDisabled:!0},{id:"art_history",name:"Art History"},{id:"design",name:"Design",children:[{id:"fashion",name:"Fashion",isDisabled:!0},{id:"ux",name:"User Experience",isDisabled:!0},{id:"architecture_design",name:"Architecture",isDisabled:!0},{id:"home",name:"Home",isDisabled:!0}]},{id:"business",name:"Business"}],Ae=[{id:"art",name:"Art",itemCount:7},{id:"architecture",name:"Architecture",itemCount:20},{id:"creativity",name:"Creativity",isDisabled:!0,itemCount:0},{id:"design",name:"Design",children:[{id:"bauhaus",name:"Bauhaus",isDisabled:!0,itemCount:0},{id:"fashion",name:"Fashion",itemCount:2},{id:"ux",name:"User Experience",itemCount:5},{id:"home",name:"Home",itemCount:1},{id:"standards",name:"Standards",isDisabled:!0,itemCount:0}],itemCount:11},{id:"business",name:"Business",itemCount:2},{id:"education",name:"Education",itemCount:15},{id:"games",name:"Games",itemCount:6}],Oe={title:"Components/Form Elements/MultiSelect",component:b,argTypes:{defaultItemsVisible:{table:{defaultValue:{summary:"5"}}},id:{control:!1},closeOnBlur:{table:{defaultValue:{summary:"false"}}},isBlockElement:{table:{defaultValue:{summary:"false"}}},isDefaultOpen:{table:{defaultValue:{summary:"false"}}},isSearchable:{table:{defaultValue:{summary:"false"}}},listOverflow:{control:"radio",options:ye,table:{defaultValue:{summary:"scroll"}}},onChange:{control:!1},onMixedStateChange:{control:!1},selectedItems:{control:!1},width:{description:'Value used to set the width for the MultiSelect component. \n\n `"full"` `"fitContent"`',control:"radio",options:Be,table:{defaultValue:{summary:"full"}}}}},v={args:{buttonText:"MultiSelect",id:"multi-select-id",closeOnBlur:!0,isBlockElement:!0,isDefaultOpen:!1,isSearchable:!0,items:o,listOverflow:"scroll",onChange:void 0,onMixedStateChange:void 0,selectedItems:void 0,width:"full"},render:t=>e.jsx(De,{...t}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=43593%3A24611"},jest:["MultiSelect.test.tsx"]},play:async({canvasElement:t})=>{let c=g(t).getByRole("button");await m.click(c),await f(c).toHaveAttribute("aria-expanded","true");const u=g(t).getByText(/Architecture/);await m.click(u);const d=g(t).getByText(/Cartography/);await m.click(d);let l=g(t).getByTestId("multi-select-close-button-testid");await f(l).toHaveAttribute("aria-label","remove 2 items selected from MultiSelect"),await m.click(l);const s=g(t).getAllByRole("textbox")[0];await m.type(s,"Design"),await f(d).not.toBeVisible();let r=g(t).getAllByRole("checkbox");f(r.length).toBe(1);const n=g(t).getByText(/Design/);await f(n).toBeVisible(),await m.click(n);const i=g(s.parentElement).getAllByRole("button")[0];await m.click(i),await m.click(l),f(r).not.toBeChecked,await m.click(document.body),await f(c).toHaveAttribute("aria-expanded","false")}},k={render:()=>e.jsx(e.Fragment,{children:e.jsxs(x,{align:"left",spacing:"l",children:[e.jsxs("div",{children:[e.jsx(h,{level:"h3",size:"heading6",text:"Default"}),e.jsx(a,{id:"multi-select-id-1",isBlockElement:!0,items:o,listOverflow:"expand"})]}),e.jsxs("div",{children:[e.jsx(h,{level:"h3",size:"heading6",text:"Custom"}),e.jsx(a,{defaultItemsVisible:8,id:"multi-select-id-2",isBlockElement:!0,items:o,listOverflow:"expand"})]}),e.jsxs("div",{children:[e.jsx(h,{level:"h3",size:"heading6",text:"Default with Nested Items"}),e.jsx(a,{id:"multi-select-id-3",isBlockElement:!0,items:p,listOverflow:"expand"})]})]})})},B={render:()=>e.jsx(a,{id:"multi-select-id-4",isBlockElement:!0,isDefaultOpen:!1,isSearchable:!1,items:p})},y={render:()=>e.jsx(a,{id:"multi-select-id-5",isBlockElement:!0,isDefaultOpen:!1,isSearchable:!1,items:je})},M={render:()=>e.jsx(a,{id:"multi-select-id-6",isBlockElement:!0,isDefaultOpen:!1,isSearchable:!1,items:Ie})},E={render:()=>e.jsxs(x,{direction:"row",align:"left",spacing:"xl",children:[e.jsxs("div",{children:[e.jsx(h,{level:"h3",size:"heading6",text:"Search (scrollable)"}),e.jsx(a,{id:"multi-select-id-7",isBlockElement:!0,isDefaultOpen:!1,isSearchable:!0,items:[...p,...p,...p]})]}),e.jsxs("div",{children:[e.jsx(h,{level:"h3",size:"heading6",text:"Search (expands)"}),e.jsx(a,{id:"multi-select-id-8",isBlockElement:!0,isDefaultOpen:!1,isSearchable:!0,listOverflow:"expand",items:p})]})]})},j={render:()=>e.jsx(a,{id:"multi-select-id-8",isBlockElement:!0,isDefaultOpen:!1,isSearchable:!1,items:Ae})},I={name:"isBlockElement",render:()=>e.jsx(e.Fragment,{children:e.jsxs(x,{align:"left",spacing:"l",children:[e.jsxs("div",{children:[e.jsx(h,{level:"h3",size:"heading6",text:"true"}),e.jsxs(x,{align:"left",spacing:"s",children:[e.jsxs(x,{align:"left",children:[e.jsx(a,{id:"multi-select-id-9",isBlockElement:!0,items:o,listOverflow:"expand"}),e.jsx(a,{id:"multi-select-id-10",isBlockElement:!0,items:o,listOverflow:"expand"})]}),e.jsx(_,{children:"Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui."})]})]}),e.jsxs("div",{children:[e.jsx(h,{level:"h3",size:"heading6",text:"false (default configuration)"}),e.jsxs(x,{align:"left",spacing:"s",children:[e.jsxs(x,{direction:"row",width:"100%",alignContent:"stretch",children:[e.jsx(a,{id:"multi-select-id-11",items:o}),e.jsx(a,{id:"multi-select-id-12",items:o}),e.jsx(a,{id:"multi-select-id-13",items:o})]}),e.jsx(_,{children:"Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui."}),e.jsx(_,{children:"Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui."}),e.jsx(_,{children:"Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui."})]})]})]})})},A={render:()=>e.jsx(e.Fragment,{children:e.jsxs(x,{align:"left",spacing:"l",children:[e.jsxs("div",{children:[e.jsx(h,{level:"h3",size:"heading6",text:"full (default configuration)"}),e.jsx(a,{id:"multi-select-id-14",isBlockElement:!0,items:o})]}),e.jsxs("div",{children:[e.jsx(h,{level:"h3",size:"heading6",text:"fitContent"}),e.jsx(a,{id:"multi-select-id-15",isBlockElement:!0,items:o,width:"fitContent"})]})]})})},O={render:()=>e.jsx(a,{id:"multi-select-id-16",isBlockElement:!0,isDefaultOpen:!0,items:p})},D={render:()=>e.jsx(a,{id:"multi-select-id-17",closeOnBlur:!0,isBlockElement:!0,items:p})},T={render:()=>e.jsx(Te,{items:o})},De=t=>{const{onChange:c,onMixedStateChange:u,onClear:d,selectedItems:l}=V(),[s,r]=S.useState("");S.useEffect(()=>{Object.keys(l).length!==0&&C(s)(l),s==="onClear"&&C(s)(l)},[s,l]);const n=t.id;return e.jsx(b,{...t,selectedItems:l,onChange:i=>{c(i.target.id,n),r("onChange")},onMixedStateChange:i=>{u(i.target.id,n,t.items),r("onMixedStateChange")},onClear:()=>{d(n),r("onClear")}})},a=({id:t,closeOnBlur:c=!1,isBlockElement:u=!1,isSearchable:d=!1,isDefaultOpen:l,items:s,listOverflow:r="scroll",width:n="full",defaultItemsVisible:i=5})=>{const{onChange:we,onMixedStateChange:ve,onClear:ke,selectedItems:w}=V(),[H,L]=S.useState("");return S.useEffect(()=>{Object.keys(w).length!==0&&C(H)(w),H==="onClear"&&C(H)(w)},[H,w]),e.jsx(b,{buttonText:"MultiSelect",closeOnBlur:c,defaultItemsVisible:i,id:t,isBlockElement:u,isDefaultOpen:l,isSearchable:d,items:s,listOverflow:r,selectedItems:w,width:n,onChange:z=>{we(z.target.id,t),L("onChange")},onMixedStateChange:z=>{ve(z.target.id,t,s),L("onMixedStateChange")},onClear:()=>{ke(t),L("onClear")}})},Te=({items:t})=>{const{onChange:c,onMixedStateChange:u,onClear:d,onClearAll:l,selectedItems:s}=V(),[r,n]=S.useState("");return S.useEffect(()=>{Object.keys(s).length!==0&&C(r)(s),r==="onClear"&&C(r)(s)},[r,s]),e.jsxs(Me,{minHeight:"300px",alignItems:"baseline",children:[e.jsx(b,{buttonText:"MultiSelect",id:"ms-group-1",isBlockElement:!0,items:t,selectedItems:s,width:"fitContent",onChange:i=>{c(i.target.id,"ms-group-1"),n("onChange")},onMixedStateChange:i=>{u(i.target.id,"ms-group-1",t),n("onMixedStateChange")},onClear:()=>{d("ms-group-1"),n("onClear")}}),e.jsx(b,{buttonText:"MultiSelect",id:"ms-group-2",items:t,selectedItems:s,width:"fitContent",onChange:i=>{c(i.target.id,"ms-group-2"),n("onChange")},onMixedStateChange:i=>{u(i.target.id,"ms-group-2",t),n("onMixedStateChange")},onClear:()=>{d("ms-group-2"),n("onClear")}}),e.jsx(b,{buttonText:"MultiSelect",id:"ms-group-3",items:t,selectedItems:s,width:"fitContent",onChange:i=>{c(i.target.id,"ms-group-3"),n("onChange")},onMixedStateChange:i=>{u(i.target.id,"ms-group-3",t),n("onMixedStateChange")},onClear:()=>{d("ms-group-3"),n("onClear")}}),e.jsx(Ee,{id:"clear-all",onClick:()=>l(),children:"Clear All"})]})};var F,R,N;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    buttonText: "MultiSelect",
    id: "multi-select-id",
    closeOnBlur: true,
    isBlockElement: true,
    isDefaultOpen: false,
    isSearchable: true,
    items: withItems,
    listOverflow: "scroll",
    onChange: undefined,
    onMixedStateChange: undefined,
    selectedItems: undefined,
    width: "full"
  },
  render: args => <MultiSelectWithControlsStory {...args} />,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=43593%3A24611"
    },
    jest: ["MultiSelect.test.tsx"]
  },
  play: async ({
    canvasElement
  }) => {
    let multiselect = within(canvasElement).getByRole("button");
    await userEvent.click(multiselect);
    await expect(multiselect).toHaveAttribute("aria-expanded", "true");
    const checkbox1Label = within(canvasElement).getByText(/Architecture/);
    await userEvent.click(checkbox1Label);
    const checkbox2Label = within(canvasElement).getByText(/Cartography/);
    await userEvent.click(checkbox2Label);
    let clearMultiselect = within(canvasElement).getByTestId("multi-select-close-button-testid");
    await expect(clearMultiselect).toHaveAttribute("aria-label", "remove 2 items selected from MultiSelect");
    await userEvent.click(clearMultiselect);
    const searchBar = within(canvasElement).getAllByRole("textbox")[0];
    await userEvent.type(searchBar, "Design");
    await expect(checkbox2Label).not.toBeVisible();
    let checkboxes = within(canvasElement).getAllByRole("checkbox");
    expect(checkboxes.length).toBe(1);
    const checkbox3Label = within(canvasElement).getByText(/Design/);
    await expect(checkbox3Label).toBeVisible();
    await userEvent.click(checkbox3Label);
    const clearSearchBar = within(searchBar.parentElement).getAllByRole("button")[0];
    await userEvent.click(clearSearchBar);
    await userEvent.click(clearMultiselect);
    expect(checkboxes).not.toBeChecked;
    await userEvent.click(document.body);
    await expect(multiselect).toHaveAttribute("aria-expanded", "false");
  }
}`,...(N=(R=v.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};var q,G,U;k.parameters={...k.parameters,docs:{...(q=k.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <>
      <Stack align="left" spacing="l">
        <div>
          <Heading level="h3" size="heading6" text="Default" />
          <MultiSelectStory id="multi-select-id-1" isBlockElement items={withItems} listOverflow="expand" />
        </div>
        <div>
          <Heading level="h3" size="heading6" text="Custom" />
          <MultiSelectStory defaultItemsVisible={8} id="multi-select-id-2" isBlockElement items={withItems} listOverflow="expand" />
        </div>
        <div>
          <Heading level="h3" size="heading6" text="Default with Nested Items" />
          <MultiSelectStory id="multi-select-id-3" isBlockElement items={withChildrenItems} listOverflow="expand" />
        </div>
      </Stack>
    </>
}`,...(U=(G=k.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var W,J,K;B.parameters={...B.parameters,docs:{...(W=B.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <MultiSelectStory id="multi-select-id-4" isBlockElement isDefaultOpen={false} isSearchable={false} items={withChildrenItems} />
}`,...(K=(J=B.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Y,P,Q;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <MultiSelectStory id="multi-select-id-5" isBlockElement isDefaultOpen={false} isSearchable={false} items={withDisabledItems} />
}`,...(Q=(P=y.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var X,Z,$;M.parameters={...M.parameters,docs:{...(X=M.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <MultiSelectStory id="multi-select-id-6" isBlockElement isDefaultOpen={false} isSearchable={false} items={withDisabledAllChildrenItems} />
}`,...($=(Z=M.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,ie;E.parameters={...E.parameters,docs:{...(ee=E.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <Stack direction="row" align="left" spacing="xl">
      <div>
        <Heading level="h3" size="heading6" text="Search (scrollable)" />
        <MultiSelectStory id="multi-select-id-7" isBlockElement isDefaultOpen={false} isSearchable items={[...withChildrenItems, ...withChildrenItems, ...withChildrenItems]} />
      </div>
      <div>
        <Heading level="h3" size="heading6" text="Search (expands)" />
        <MultiSelectStory id="multi-select-id-8" isBlockElement isDefaultOpen={false} isSearchable listOverflow="expand" items={withChildrenItems} />
      </div>
    </Stack>
}`,...(ie=(te=E.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var se,ne,ae;j.parameters={...j.parameters,docs:{...(se=j.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <MultiSelectStory id="multi-select-id-8" isBlockElement isDefaultOpen={false} isSearchable={false} items={withItemCountItems} />
}`,...(ae=(ne=j.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var le,re,ce;I.parameters={...I.parameters,docs:{...(le=I.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: "isBlockElement",
  render: () => <>
      <Stack align="left" spacing="l">
        <div>
          <Heading level="h3" size="heading6" text="true" />
          <Stack align="left" spacing="s">
            <Stack align="left">
              <MultiSelectStory id="multi-select-id-9" isBlockElement items={withItems} listOverflow="expand" />
              <MultiSelectStory id="multi-select-id-10" isBlockElement items={withItems} listOverflow="expand" />
            </Stack>
            <Text>
              Maecenas sed diam eget risus varius blandit sit amet non magna.
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Aenean lacinia bibendum nulla sed
              consectetur. Donec sed odio dui.
            </Text>
          </Stack>
        </div>
        <div>
          <Heading level="h3" size="heading6" text="false (default configuration)" />
          <Stack align="left" spacing="s">
            <Stack direction="row" width="100%" alignContent="stretch">
              <MultiSelectStory id="multi-select-id-11" items={withItems} />
              <MultiSelectStory id="multi-select-id-12" items={withItems} />
              <MultiSelectStory id="multi-select-id-13" items={withItems} />
            </Stack>
            <Text>
              Maecenas sed diam eget risus varius blandit sit amet non magna.
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Aenean lacinia bibendum nulla sed
              consectetur. Donec sed odio dui.
            </Text>
            <Text>
              Maecenas sed diam eget risus varius blandit sit amet non magna.
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Aenean lacinia bibendum nulla sed
              consectetur. Donec sed odio dui.
            </Text>
            <Text>
              Maecenas sed diam eget risus varius blandit sit amet non magna.
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Aenean lacinia bibendum nulla sed
              consectetur. Donec sed odio dui.
            </Text>
          </Stack>
        </div>
      </Stack>
    </>
}`,...(ce=(re=I.parameters)==null?void 0:re.docs)==null?void 0:ce.source}}};var oe,de,ue;A.parameters={...A.parameters,docs:{...(oe=A.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <>
      <Stack align="left" spacing="l">
        <div>
          <Heading level="h3" size="heading6" text="full (default configuration)" />
          <MultiSelectStory id="multi-select-id-14" isBlockElement items={withItems} />
        </div>
        <div>
          <Heading level="h3" size="heading6" text="fitContent" />
          <MultiSelectStory id="multi-select-id-15" isBlockElement items={withItems} width="fitContent" />
        </div>
      </Stack>
    </>
}`,...(ue=(de=A.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var me,he,ge;O.parameters={...O.parameters,docs:{...(me=O.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => <MultiSelectStory id="multi-select-id-16" isBlockElement isDefaultOpen={true} items={withChildrenItems} />
}`,...(ge=(he=O.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var xe,pe,fe;D.parameters={...D.parameters,docs:{...(xe=D.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => <MultiSelectStory id="multi-select-id-17" closeOnBlur={true} isBlockElement items={withChildrenItems} />
}`,...(fe=(pe=D.parameters)==null?void 0:pe.docs)==null?void 0:fe.source}}};var be,Se,Ce;T.parameters={...T.parameters,docs:{...(be=T.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <MultiSelectGroupStory items={withItems} />
}`,...(Ce=(Se=T.parameters)==null?void 0:Se.docs)==null?void 0:Ce.source}}};const He=["withControls","visibleListItems","nestedListItems","disabledListItems","disabledListItemsAllChildren","searchInputField","itemCountListItems","isBlockElement","width","defaultOpenState","closeOnBlurState","InAGroup"],ze=Object.freeze(Object.defineProperty({__proto__:null,InAGroup:T,__namedExportsOrder:He,closeOnBlurState:D,default:Oe,defaultOpenState:O,disabledListItems:y,disabledListItemsAllChildren:M,isBlockElement:I,itemCountListItems:j,nestedListItems:B,searchInputField:E,visibleListItems:k,width:A,withControls:v},Symbol.toStringTag,{value:"Module"}));export{T as I,ze as M,M as a,I as b,A as c,y as d,O as e,D as f,j as i,B as n,E as s,k as v,v as w};
