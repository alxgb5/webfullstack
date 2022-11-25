import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SelectField from './SelectField';
export default {
    title: "UI/SelectFieldsUI",
    component: SelectField,
} as ComponentMeta<typeof SelectField>;

let value = '';

export const SelectFieldUI: ComponentStory<typeof SelectField> = () => (
    <div>
        <SelectField label='Select Field' onValueSelected={(e) => { value = e; }} placeholder='Selectionnez une valeur' value={value} options={['Cat', 'Dog', 'Frog']} />
    </div>
);