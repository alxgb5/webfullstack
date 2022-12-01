import React, { useState } from "react";
import { render } from "@testing-library/react";

import RadioField from "./RadioField";

const PasswordFieldTest = () => {
    const [value, setValue] = useState<string>('');
    return (
        <RadioField titre="Vous êtes :" onChange={(event) => setValue(event.target.value)}
        />
    );
};

describe("Button", () => {
    test("renders the Input component", () => {
        render(<PasswordFieldTest />);
    });
});