import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { OldButton } from "./OldBtn";

const meta = {
  title: "Example/OldButton",
  component: OldButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof OldButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultBtn: Story = {
  args: {
    label: "Кнопка",
  },
};
