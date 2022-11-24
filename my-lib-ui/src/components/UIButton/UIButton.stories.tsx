import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import UIButton from "./UIButton";


export default {
    title: "UI/Buttons",
    component: UIButton,
} as ComponentMeta<typeof UIButton>;

export const Button: ComponentStory<typeof UIButton> = () => (
    <div>
        <UIButton></UIButton>
    </div>
);