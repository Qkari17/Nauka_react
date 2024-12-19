import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { fn } from '@storybook/test';

const meta = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Click me ",
  },
};

//export const Secondary: Story = {
  //args: {
    //children: "Halumi!",
 // },
//};