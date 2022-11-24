import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";


export default {
    title: "Buttons",
    component: Button,
} as ComponentMeta<typeof Button>;


export const FlatButton: ComponentStory<typeof Button> = () => (
    <div>
        <Button label="Primary" appearance='flat' color='primary' onClick={() => { }} />
        <Button label="Secondary" appearance='flat' color='secondary' onClick={() => { }} />
        <Button label="Success" appearance='flat' color='success' onClick={() => { }} />
        <Button label="Warning" appearance='flat' color='warning' onClick={() => { }} />
        <Button label="Danger" appearance='flat' color='danger' onClick={() => { }} />
        <Button label="Disabled" disabled={true} onClick={() => { }} />
    </div>
);

export const OutlineButton: ComponentStory<typeof Button> = () => (
    <div>
        <Button label="Primary" appearance='outline' color='primary' onClick={() => { }} />
        <Button label="Secondary" appearance='outline' color='secondary' onClick={() => { }} />
        <Button label="Success" appearance='outline' color='success' onClick={() => { }} />
        <Button label="Warning" appearance='outline' color='warning' onClick={() => { }} />
        <Button label="Danger" appearance='outline' color='danger' onClick={() => { }} />
        <Button label="Disabled" appearance='outline' disabled={true} onClick={() => { }} />
    </div>
);


export const Size: ComponentStory<typeof Button> = () => (
    <div>
        <Button label="Size S" size='s' onClick={() => { }} />
        <Button label="Size M" size='m' onClick={() => { }} />
        <Button label="Size L" size='l' onClick={() => { }} />
    </div>
);