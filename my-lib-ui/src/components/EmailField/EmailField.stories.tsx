import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import EmailField from './EmailField';

export default {
    title: "UI/EmailFields",
    component: EmailField,
} as ComponentMeta<typeof EmailField>;

let value = '';

export const EmailFieldUI: ComponentStory<typeof EmailField> = () => (
    <div>
        <EmailField label='EmailField' onChange={(e) => { value = e.target.value; }} placeholder='Entrez une valeur' value={value} />
    </div>
);