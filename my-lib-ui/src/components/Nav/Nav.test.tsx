import React from "react";
import { render } from "@testing-library/react";

import Nav from "./Nav";

describe("Nav", () => {
    test("renders the Nav component", () => {
        render(<Nav title='NavTitle' links={[
            {
                label: 'Link1',
                onClick: () => { },
            },
            {
                label: 'Link2',
                onClick: () => { },
            },
            {
                label: 'Link3',
                onClick: () => { },
            },
        ]} showMenu={true} menuLabel="Menu" onMenuClick={() => { }} />);
    });
});