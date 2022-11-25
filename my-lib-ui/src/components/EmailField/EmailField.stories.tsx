import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import EmailField from './EmailField';

export default {
    title: "UI/EmailFields",
    component: EmailField,
} as ComponentMeta<typeof EmailField>;

export const EmailFieldUI: ComponentStory<typeof EmailField> = () => {
    const [value, setValue] = useState<string>('');
    return (
        <div>
            <EmailField label='EmailField' onChange={(e) => { setValue(e.target.value); }} placeholder='Entrez une valeur' value={value} />
        </div>
    );
};


export const EmailFieldUICustom: ComponentStory<typeof EmailField> = (args) => {
    return (
        <div>
            <EmailField {...args} />
        </div>
    );
};