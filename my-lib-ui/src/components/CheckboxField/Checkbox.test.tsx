import React from "react";
import { render } from "@testing-library/react";

import CheckBox from "./CheckboxField";

describe("CheckBox", () => {
    test("renders the CheckBox component", () => {
        render(<CheckBox
            label="J'atteste que j'ai un permis de conduire valide."
            checked={false}
            onChange={(e) => { console.log(e.target.value); }}
        />);
    });
});