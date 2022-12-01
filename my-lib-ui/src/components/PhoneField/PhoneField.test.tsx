import React, { useState } from "react";
import { render } from "@testing-library/react";

import PhoneField from "./PhoneField";

const PasswordFieldTest = () => {
    const [value, setValue] = useState<string>('');
    return (
        <PhoneField label='Input' onChange={(e) => { setValue(e.target.value); }} placeholder='Entrez une valeur' value={value} />
    );
};

describe("Button", () => {
    test("renders the Input component", () => {
        render(<PasswordFieldTest />);
    });
});