import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import UIButton from "./UIButton";


export default {
    title: "UI/Buttons",
    component: UIButton,
} as ComponentMeta<typeof UIButton>;

export const Button: ComponentStory<typeof UIButton> = () => (
    <div>
        <UIButton label='Primary' color={"primary"}></UIButton>
        <UIButton label='Light' color={"light"}></UIButton>
        <UIButton label='Dark' color={"dark"}></UIButton>
    </div>
);