import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Nav from "./Nav";


export default {
    title: "Nav",
    component: Nav,
} as ComponentMeta<typeof Nav>;


const Template: ComponentStory<typeof Nav> = (args) => <Nav {...args} />;

export const NavFluid = Template.bind({});
NavFluid.args = {
    title: 'NavTitle',
    links: [
        {
            label: 'Link1',
            onClick: () => { },
        },
        {
            label: 'Link2',
            onClick: () => { },
        },
        {
            label: 'Link3',
            onClick: () => { },
        },
    ],
    showMenu: true,
    menuLabel: 'Menu',
    onMenuClick: () => { },
};

export const NavFluidWithoutMenu = Template.bind({});
NavFluidWithoutMenu.args = {
    title: 'NavTitle',
    links: [
        {
            label: 'Link1',
            onClick: () => { },
        },
        {
            label: 'Link2',
            onClick: () => { },
        },
        {
            label: 'Link3',
            onClick: () => { },
        },
    ],
    showMenu: false,
};