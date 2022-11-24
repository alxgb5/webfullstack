import React from "react";
import { render } from "@testing-library/react";

import Spinner from "./Spinner";

describe("Spinner", () => {
    test("renders the Spinner component", () => {
        render(<Spinner show={true} />);
    });
});