import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CheckboxField from './CheckboxField';

export default {
    title: "UI/CheckboxFields",
    component: CheckboxField,
} as ComponentMeta<typeof CheckboxField>;

let value = '';

export const CheckboxFieldUI: ComponentStory<typeof CheckboxField> = () => (
    <div>
        <CheckboxField
            label="J'atteste que j'ai un permis de conduire valide."
            checked={false}
        />
    </div>
);

export const CheckboxFieldUICustom: ComponentStory<typeof CheckboxField> = (args) => (
    <div>
        <CheckboxField
            {...args}
        />
    </div>
);