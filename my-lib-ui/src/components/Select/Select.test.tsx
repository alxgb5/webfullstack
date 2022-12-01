import React, { useState } from "react";
import { render } from "@testing-library/react";

import SelectField from "./SelectField";

const SelectFieldTest = () => {
    const [value, setValue] = useState<string>('');
    return (
        <SelectField label='Select Field' onValueSelected={(e) => { setValue(e); }} placeholder='Selectionnez une valeur' value={value} options={['Cat', 'Dog', 'Frog']} />
    );
};

describe("Button", () => {
    test("renders the Input component", () => {
        render(<SelectFieldTest />);
    });
});