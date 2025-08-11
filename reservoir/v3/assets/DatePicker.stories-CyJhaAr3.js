import{Q as U,R as i,j as e,V as K,H as T}from"./iframe-D93LbwGv.js";const{userEvent:a,within:l,expect:n}=__STORYBOOK_MODULE_TEST__,v=new Date().getFullYear(),G={title:"Components/Form Elements/DatePicker",component:i,parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=11689%3A0"},jest:["DatePicker.test.tsx"]},argTypes:{className:{control:!1},dateFormat:{table:{defaultValue:{summary:"yyyy-MM-dd"}}},dateType:{control:{type:"select"},options:U,table:{defaultValue:{summary:"full"}}},id:{control:!1},isDateRange:{table:{defaultValue:{summary:"false"}}},isDisabled:{table:{defaultValue:{summary:"false"}}},isInvalid:{table:{defaultValue:{summary:"false"}}},isRequired:{table:{defaultValue:{summary:"false"}}},key:{table:{disable:!0}},labelText:{table:{defaultValue:{summary:"From"}}},nameFrom:{control:!1},nameTo:{control:!1},onChange:{control:!1,action:"onChange"},ref:{table:{disable:!0}},refTo:{control:!1},showHelperInvalidText:{table:{defaultValue:{summary:"true"}}},showLabel:{table:{defaultValue:{summary:"true"}}},showRequiredLabel:{table:{defaultValue:{summary:"true"}}}}},o={args:{className:void 0,dateFormat:"yyyy-MM-dd",dateType:"full",helperText:"Note that the Library may be closed on Sundays.",helperTextFrom:"Select start date.",helperTextTo:"Select end date.",id:"datePicker-id",initialDate:`1/1/${v}`,initialDateTo:`12/31/${v}`,invalidText:"Please select a valid date.",isDateRange:!1,isDisabled:!1,isInvalid:!1,isRequired:!1,labelText:"Select the date you want to visit NYPL",maxDate:"1/1/2025",minDate:"1/1/2022",nameFrom:"visit-dates-from",nameTo:"visit-dates-to",refTo:void 0,showHelperInvalidText:!0,showLabel:!0,showRequiredLabel:!0},render:t=>e.jsx(i,{...t}),play:async({canvasElement:t})=>{const r=l(t).getByRole("textbox");n(r).toHaveValue("2025-01-01"),await a.clear(r),await a.type(r,"2024-05-20"),await setTimeout(()=>{},500),n(r).toHaveValue("2024-05-20"),n(l(t).queryAllByText("May 2024")[0]).toBeInTheDocument();const Q=l(t).getByRole("button",{name:"Previous Month"}),x=l(t).getByRole("button",{name:"Next Month"});await a.click(Q),n(l(t).queryByText("May 2024")).not.toBeInTheDocument(),n(l(t).queryAllByText("April 2024")[0]).toBeInTheDocument(),await a.click(x),await a.click(x),n(l(t).queryByText("April 2024")).not.toBeInTheDocument(),n(l(t).queryAllByText("June 2024")[0]).toBeInTheDocument(),await a.click(l(t).getByText("15")),n(r).toHaveValue("2024-06-15"),await a.click(r),await a.click(l(t).getByText("31")),n(r).toHaveValue("2024-05-31"),await a.click(r),await setTimeout(()=>{},500),n(l(t).queryAllByText("May 2024")[0]).toBeInTheDocument(),await a.keyboard("{tab}"),n(l(t).getByText("31")).toHaveFocus(),await a.keyboard("{arrowleft}"),await a.keyboard("{arrowleft}"),await a.keyboard("{arrowleft}"),n(l(t).getByLabelText("Choose Tuesday, May 28th, 2024")).toHaveFocus(),await a.keyboard("{enter}"),n(r).toHaveValue("2024-05-28"),n(r).toHaveFocus()}},s={render:()=>e.jsx(i,{id:"date-range",dateFormat:"yyyy-MM-dd",dateType:"full",minDate:"9/1/2022",maxDate:"12/31/2023",labelText:"Select the date range you want to visit NYPL",nameFrom:"visit-dates-from",nameTo:"visit-dates-to",helperTextFrom:"From this date.",helperTextTo:"To this date.",helperText:"Select a valid date range.",invalidText:"There was an error with the date range :(",isDateRange:!0})},d={render:()=>e.jsx(i,{id:"month-date",dateType:"month",labelText:"Select the month you want to visit NYPL",helperText:"Note that the Library may be closed on Sundays.",invalidText:"Please select a valid month."})},c={render:()=>e.jsx(i,{id:"year-date",dateType:"year",labelText:"Select the year you want to visit NYPL",helperText:"Note that the Library may be closed on Sundays."})},u={render:()=>e.jsxs(K,{align:"stretch",spacing:"s",children:[e.jsx(T,{level:"h3",size:"heading6",children:"Errored State"}),e.jsx(i,{id:"invalid-date",dateType:"full",labelText:"Select the year you want to visit NYPL",helperText:"Note that the Library may be closed on Sundays.",invalidText:"Please select a valid date.",isInvalid:!0,isDateRange:!0}),e.jsx(T,{level:"h3",size:"heading6",children:"Disabled State"}),e.jsx(i,{id:"disabled-date",dateType:"full",labelText:"Select the year you want to visit NYPL",isDateRange:!0,isDisabled:!0}),e.jsx(T,{level:"h3",size:"heading6",children:"Required State"}),e.jsx("p",{children:'The "required" text in the legend in the date range, or the label in a normaldate input, can be hidden when `showRequiredLabel` is set to `false`.'}),e.jsx(i,{id:"required-date",dateType:"full",labelText:"Select the year you want to visit NYPL",isDateRange:!0,isRequired:!0})]})};function X(){const t=r=>{console.log({startDate:r.startDate,endDate:r.endDate})};return e.jsxs(K,{align:"stretch",spacing:"s",children:[e.jsx(i,{id:"init-dates",dateType:"full",labelText:"Select the date you want to visit NYPL",initialDate:"12/1/21",initialDateTo:"12/10/21",isDateRange:!0}),e.jsx(T,{level:"h3",size:"heading6",children:"Passing initialDate an empty string renders an empty input"}),e.jsx(i,{id:"init-dates",dateType:"full",labelText:"Select the date you want to visit NYPL",initialDate:"",initialDateTo:"",isDateRange:!0,onChange:t}),e.jsx(T,{level:"h3",size:"heading6",children:"Passing no initialDate renders today's date"}),e.jsx(i,{id:"init-dates",dateType:"full",labelText:"Select the date you want to visit NYPL",isDateRange:!0})]})}const y={render:()=>X()},h={render:()=>e.jsx(i,{id:"format-date",dateFormat:"MM-dd-yyyy",dateType:"full",labelText:"Select the date you want to visit NYPL",initialDate:"",initialDateTo:"",placeholder:"This is placeholder text",placeholderTo:"This is placeholderTo text",isDateRange:!0})},m={render:()=>e.jsx(i,{id:"format-date",dateFormat:"MM-dd-yyyy",dateType:"full",labelText:"Select the date you want to visit NYPL",initialDate:"12/1/21",initialDateTo:"12/10/21",isDateRange:!0})},p={render:()=>e.jsx(i,{id:"max-min-dates",dateFormat:"MM-dd-yyyy",dateType:"full",labelText:"Select the date you want to visit NYPL",minDate:"1/1/2022",maxDate:"3/1/2022",isDateRange:!0})};var D,b,w,g,f;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    className: undefined,
    dateFormat: "yyyy-MM-dd",
    dateType: "full",
    helperText: "Note that the Library may be closed on Sundays.",
    helperTextFrom: "Select start date.",
    helperTextTo: "Select end date.",
    id: "datePicker-id",
    initialDate: \`1/1/\${currentYear}\`,
    initialDateTo: \`12/31/\${currentYear}\`,
    invalidText: "Please select a valid date.",
    isDateRange: false,
    isDisabled: false,
    isInvalid: false,
    isRequired: false,
    labelText: "Select the date you want to visit NYPL",
    maxDate: "1/1/2025",
    minDate: "1/1/2022",
    nameFrom: "visit-dates-from",
    nameTo: "visit-dates-to",
    refTo: undefined,
    showHelperInvalidText: true,
    showLabel: true,
    showRequiredLabel: true
  },
  render: args => <DatePicker {...args} />,
  play: async ({
    canvasElement
  }) => {
    const textInput = within(canvasElement).getByRole("textbox");
    expect(textInput).toHaveValue("2025-01-01");
    await userEvent.clear(textInput);
    await userEvent.type(textInput, "2024-05-20");
    // A short wait for the calendar popup to "catch up".
    await setTimeout(() => {}, 500);
    expect(textInput).toHaveValue("2024-05-20");
    expect(within(canvasElement).queryAllByText("May 2024")[0]).toBeInTheDocument();
    const previousMonth = within(canvasElement).getByRole("button", {
      name: "Previous Month"
    });
    const nextMonth = within(canvasElement).getByRole("button", {
      name: "Next Month"
    });
    await userEvent.click(previousMonth);
    expect(within(canvasElement).queryByText("May 2024")).not.toBeInTheDocument();
    expect(within(canvasElement).queryAllByText("April 2024")[0]).toBeInTheDocument();
    await userEvent.click(nextMonth);
    await userEvent.click(nextMonth);
    expect(within(canvasElement).queryByText("April 2024")).not.toBeInTheDocument();
    expect(within(canvasElement).queryAllByText("June 2024")[0]).toBeInTheDocument();
    await userEvent.click(within(canvasElement).getByText("15"));
    expect(textInput).toHaveValue("2024-06-15");
    await userEvent.click(textInput);
    // June does not have 31 days, so the date should be set to
    // May 31st.
    await userEvent.click(within(canvasElement).getByText("31"));
    expect(textInput).toHaveValue("2024-05-31");
    await userEvent.click(textInput);
    // A short wait for the calendar popup to "catch up".
    await setTimeout(() => {}, 500);
    expect(within(canvasElement).queryAllByText("May 2024")[0]).toBeInTheDocument();

    // Now try keyboard navigation
    await userEvent.keyboard("{tab}");
    expect(within(canvasElement).getByText("31")).toHaveFocus();
    await userEvent.keyboard("{arrowleft}");
    await userEvent.keyboard("{arrowleft}");
    await userEvent.keyboard("{arrowleft}");
    expect(within(canvasElement).getByLabelText("Choose Tuesday, May 28th, 2024")).toHaveFocus();
    await userEvent.keyboard("{enter}");
    expect(textInput).toHaveValue("2024-05-28");
    expect(textInput).toHaveFocus();
  }
}`,...(w=(b=o.parameters)==null?void 0:b.docs)==null?void 0:w.source},description:{story:"Main Story for the DatePicker component. This must contains the `args`\nand `parameters` properties in this object.",...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.description}}};var S,M,P;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <DatePicker id="date-range" dateFormat="yyyy-MM-dd" dateType="full" minDate="9/1/2022" maxDate="12/31/2023" labelText="Select the date range you want to visit NYPL" nameFrom="visit-dates-from" nameTo="visit-dates-to" helperTextFrom="From this date." helperTextTo="To this date." helperText="Select a valid date range." invalidText="There was an error with the date range :(" isDateRange />
}`,...(P=(M=s.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var k,R,I;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <DatePicker id="month-date" dateType="month" labelText="Select the month you want to visit NYPL" helperText="Note that the Library may be closed on Sundays." invalidText="Please select a valid month." />
}`,...(I=(R=d.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var L,B,N;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <DatePicker id="year-date" dateType="year" labelText="Select the year you want to visit NYPL" helperText="Note that the Library may be closed on Sundays." />
}`,...(N=(B=c.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};var F,Y,q;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <VStack align="stretch" spacing="s">
      <Heading level="h3" size="heading6">
        Errored State
      </Heading>
      <DatePicker id="invalid-date" dateType="full" labelText="Select the year you want to visit NYPL" helperText="Note that the Library may be closed on Sundays." invalidText="Please select a valid date." isInvalid isDateRange />
      <Heading level="h3" size="heading6">
        Disabled State
      </Heading>
      <DatePicker id="disabled-date" dateType="full" labelText="Select the year you want to visit NYPL" isDateRange isDisabled />
      <Heading level="h3" size="heading6">
        Required State
      </Heading>
      <p>
        The "required" text in the legend in the date range, or the label in a
        normaldate input, can be hidden when \`showRequiredLabel\` is set to
        \`false\`.
      </p>
      <DatePicker id="required-date" dateType="full" labelText="Select the year you want to visit NYPL" isDateRange isRequired />
    </VStack>
}`,...(q=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};var H,j,E;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => InitialDateExample()
}`,...(E=(j=y.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var V,A,_;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <DatePicker id="format-date" dateFormat="MM-dd-yyyy" dateType="full" labelText="Select the date you want to visit NYPL" initialDate="" initialDateTo="" placeholder="This is placeholder text" placeholderTo="This is placeholderTo text" isDateRange />
}`,...(_=(A=h.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var O,z,C;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <DatePicker id="format-date" dateFormat="MM-dd-yyyy" dateType="full" labelText="Select the date you want to visit NYPL" initialDate="12/1/21" initialDateTo="12/10/21" isDateRange />
}`,...(C=(z=m.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var J,$,W;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <DatePicker id="max-min-dates" dateFormat="MM-dd-yyyy" dateType="full" labelText="Select the date you want to visit NYPL" minDate="1/1/2022" maxDate="3/1/2022" isDateRange />
}`,...(W=($=p.parameters)==null?void 0:$.docs)==null?void 0:W.source}}};const Z=["WithControls","DateRange","MonthDateInput","YearDateInput","OtherStates","InitialDate","Placeholder","DateFormat","MaxMinDateValues"],te=Object.freeze(Object.defineProperty({__proto__:null,DateFormat:m,DateRange:s,InitialDate:y,MaxMinDateValues:p,MonthDateInput:d,OtherStates:u,Placeholder:h,WithControls:o,YearDateInput:c,__namedExportsOrder:Z,default:G},Symbol.toStringTag,{value:"Module"}));export{te as D,y as I,d as M,u as O,o as W,c as Y,s as a,m as b,p as c};
