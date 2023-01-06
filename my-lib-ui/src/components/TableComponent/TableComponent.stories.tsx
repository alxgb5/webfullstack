import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TableComponent from "./TableComponent";
export default {
    title: "UI/TableComponentUi",
    component: TableComponent,
} as ComponentMeta<typeof TableComponent>;

export const TableComponentUi: ComponentStory<typeof TableComponent> = () => (
    <div>
        <TableComponent headers={["id", 'nom', 'prénom']} rows={['1', 'Enzo', 'Avagliano']} />
    </div>
);