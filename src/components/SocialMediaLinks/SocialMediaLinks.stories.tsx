
import type { Meta, StoryObj } from '@storybook/react';
import Socialmedialinks from "./SocialMediaLinks";
import {withDesign} from "storybook-addon-designs";


const meta: Meta<typeof Socialmedialinks> = {
    title: "Components/Navigation/SocialMediaLinks",
    component: Socialmedialinks,
    decorators: [withDesign],
    argTypes: {
    },

};



export default meta;
type Story = StoryObj<typeof Socialmedialinks>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
    render: () =>
        <Socialmedialinks />
};

export const WithTypes: Story = {
    render: () =>
        <Socialmedialinks linksData={['twitter','instagram']}/>
};

export const WithUrls: Story = {
    render: () =>
        <Socialmedialinks linksData={
            [
                { type: "facebook" },
                { type: "twitter", url: "twitter.com/somewhere" },
                { type: "instagram"},
            ]
        }/>
};

export const WithMix: Story = {
    render: () =>
        <Socialmedialinks linksData={
            [
                'facebook',
                { type: "twitter", url: "twitter.com/elsewhere" },
                'instagram',
            ]
        }/>
};
// import SocialMediaLinks, { socialMediaLinkTypeArray } from "./SocialMediaLinks";
//
// const socialMediaLinksData = [
//   { url: "#", text: "Parent" },
//   { url: "#", text: "Child" },
//   { url: "#", text: "Grandchild" },
// ];
//
// const meta: Meta<typeof SocialMediaLinks> = {
//   title: "Components/Navigation/SocialMediaLinks",
//   component: SocialMediaLinks,
//   decorators: [withDesign],
//   argTypes: {
//     socialMediaLinksData: { control: false },
//     socialMediaLinksType: {
//       table: { defaultValue: { summary: "whatsOn" } },
//       control: {
//         type: "select",
//       },
//       options: socialMediaLinkTypeArray,
//     },
//     className: { control: false },
//     id: { control: false },
//   },
// };
//
// export default meta;
// type Story = StoryObj<typeof SocialMediaLinks>;
//
// /**
//  * Main Story for the Accordion component. This must contains the `args`
//  * and `parameters` properties in this object.
//  */
// export const WithControls: Story = {
//   args: {
//     socialMediaLinksData,
//     socialMediaLinksType: "whatsOn",
//     className: undefined,
//     id: "socialMediaLinks-id",
//   },
//   parameters: {
//     design: {
//       type: "figma",
//       url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=10766%3A1031",
//     },
//     jest: ["SocialMediaLinks.test.tsx"],
//   },
// };
//
//
