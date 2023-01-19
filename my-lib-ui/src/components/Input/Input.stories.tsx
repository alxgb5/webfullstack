import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import InputField from './Input';

export default {
    title: "UI/InputFields",
    component: InputField,
} as ComponentMeta<typeof InputField>;


export const InputFieldUI: ComponentStory<typeof InputField> = () => {
    const [value, setValue] = useState<string>('');

    return (
        <div>
            <InputField type="text" label='Input' onChange={(e) => setValue(e.target.value)} placeholder='Entrez une valeur' value={value} />
        </div>
    )
}