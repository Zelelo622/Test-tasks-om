import React, { useState } from "react"; // добавил React
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "./Switch";

const meta = {
  title: "Example/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultSwitch: Story = {
  args: {
    checked: false,
    onChange: () => {},
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked);

    return (
      <Switch {...args} checked={checked} onChange={(val) => setChecked(val)} />
    );
  },
};
