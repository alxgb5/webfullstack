import React, { useState } from "react";
import { render } from "@testing-library/react";

import InputField from "./Input";

const InputFieldTest = () => {
    const [value, setValue] = useState<string>('');
    return (
        <InputField label='Input' onChange={(e) => { setValue(e.target.value); }} placeholder='Entrez une valeur' value={value} />
    );
};

describe("Button", () => {
    test("renders the Input component", () => {
        render(<InputFieldTest />);
    });
});