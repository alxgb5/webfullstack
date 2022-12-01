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
            label="Vous êtes :"
            radios={[
                { label: 'Un particulier', value: 'particulier', checked: true },
                { label: 'Une entreprise', value: 'entreprise', checked: false },
            ]}
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