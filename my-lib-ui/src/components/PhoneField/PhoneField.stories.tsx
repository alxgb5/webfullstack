import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PhoneField from "./PhoneField";

export default {
    title: "UI/PhoneField",
    component: PhoneField,
} as ComponentMeta<typeof PhoneField>;

let frenchPhoneRegex = '^((\+)33|0)[1-9](\d{2}){4}$';


export const PhoneFieldUI: ComponentStory<typeof PhoneField> = () => {
    const [value, setValue] = useState("");
    return (
        <div>
            <PhoneField
                label='Phone Field'
                placeholder='Entrez un numéro'
                value={value}
                onChange={(e) => { setValue(e.target.value); }}
                validator={frenchPhoneRegex}
            />
        </div>);
};


export const PhoneFieldUICustom: ComponentStory<typeof PhoneField> = (args) => {
    return (
        <div>
            <PhoneField
                {...args}
            />
        </div>);
};
