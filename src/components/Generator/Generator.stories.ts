import type { Meta, StoryObj } from "@storybook/react";
import { Generator } from "./Generator";
// import { fn } from '@storybook/test';


const meta = {
  title: "Components/Generator",
  component: Generator,
  // tags: ["autodocs"],
  // args: { onClick: fn() },
} satisfies Meta<typeof Generator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Generator: Story = {
};
