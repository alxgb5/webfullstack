import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PasswordField from './PasswordField';

export default {
    title: "UI/PasswordField",
    component: PasswordField,
} as ComponentMeta<typeof PasswordField>;

export const PasswordFieldUI: ComponentStory<typeof PasswordField> = () => {
    const [value, setValue] = useState<string>('');
    return (
        <div>
            <PasswordField label='PasswordField' onChange={(e) => { setValue(e.target.value); }} placeholder='Entrez une valeur' value={value} />
        </div>
    );
};


export const EmailFieldUICustom: ComponentStory<typeof PasswordField> = (args) => {
    return (
        <div>
            <PasswordField {...args} />
        </div>
    );
};