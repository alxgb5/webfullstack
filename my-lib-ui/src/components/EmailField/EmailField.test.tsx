import React, { useState } from "react";
import { render } from "@testing-library/react";

import EmailField from "./EmailField";

const EmailTestComponent = () => {
    const [value, setValue] = useState<string>('');
    return (
        <EmailField label='EmailField' onChange={(e) => { setValue(e.target.value); }} placeholder='Entrez une valeur' value={value} />
    );
};

describe("EmailField", () => {
    test("renders the EmailField component", () => {
        render(<EmailTestComponent />);
    });
});