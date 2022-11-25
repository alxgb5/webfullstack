import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import InputField from './PhoneField';

export default {
    title: "UI/InputFields",
    component: InputField,
} as ComponentMeta<typeof InputField>;

let value = '';

export const InputFieldUI: ComponentStory<typeof InputField> = () => (
    <div>
        <InputField label='Input' onChange={(e) => { value = e.target.value; }} placeholder='Entrez une valeur' value={value} />
    </div>
);