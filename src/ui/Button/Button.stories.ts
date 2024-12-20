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

export const Disabled: Story = {
  args: {
    label : "Halumi!",
    disabled:true,
 },
};

export const Red : Story= {
  args: {
    label : "Halumi!",
    className:'bg-red-600 hover:bg-red-500'
 },
};

export const Green : Story= {
  args: {
    label : "Halumi!",
    className:'bg-green-600 hover:bg-green-500'
 },
};
