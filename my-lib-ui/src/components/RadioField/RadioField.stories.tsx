import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RadioField from './RadioField';

export default {
    title: "UI/RadioFields",
    component: RadioField,
} as ComponentMeta<typeof RadioField>;

let value = '';

export const RadioFieldUI: ComponentStory<typeof RadioField> = () => (
    <div>
        <RadioField
            titre="Vous êtes :"
            onChange={(event) => value = event.target.value}
        />
    </div>
);

export const RadioFieldUICustom: ComponentStory<typeof RadioField> = (args) => (
    <div>
        <RadioField
            {...args}
        />
    </div>
);