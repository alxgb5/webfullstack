import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PhoneField from "./PhoneField";

export default {
    title: "UI/PhoneField",
    component: PhoneField,
} as ComponentMeta<typeof PhoneField>;

let frenchPhoneRegex = '^((\+)33|0)[1-9](\d{2}){4}$'
let value = ''

export const PhoneFieldUI: ComponentStory<typeof PhoneField> = () => (
    <div>
        <PhoneField
            label='Phone number'
            onChange={(e) => { value = e.target.value }}
            placeholder='Entre votre numéro de téléphone'
            value={value}
            validator={frenchPhoneRegex}
        />
    </div>
);