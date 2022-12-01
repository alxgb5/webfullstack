import React, { useState } from "react";
import { render } from "@testing-library/react";

import Button from "./UIButton";

const ButtonTest = () => {
    return (
        <Button label='Primary' color={"primary"} />
    );
};

describe("Button", () => {
    test("renders the Input component", () => {
        render(<ButtonTest />);
    });
});