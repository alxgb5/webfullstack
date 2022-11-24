import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Spinner from "./Spinner";

export default {
    title: "Spinner",
    component: Spinner,
} as ComponentMeta<typeof Spinner>;

export const ArkSpinner: ComponentStory<typeof Spinner> = () => (
    <div>
        <Spinner show={true} />
    </div>
);

export const ArkSmallSpinner: ComponentStory<typeof Spinner> = () => (
    <div>
        <Spinner show={true} size='s' />
    </div>
);