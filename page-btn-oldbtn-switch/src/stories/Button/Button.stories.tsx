import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { AiFillAlert } from "react-icons/ai";
import { Button } from "./Button";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
  argTypes: {
    variant: {
      name: "Variant",
      description: "Визуальный стиль кнопки",
      control: "radio",
      options: ["primary", "filled", "outline", "arrow"],
      defaultValue: "primary",
    },
    color: {
      name: "Color",
      description:
        "Цветовая схема кнопки (доступна только для filled и outline)",
      control: "radio",
      options: ["red", "green"],
    },
    leftIcon: {
      name: "Left Icon",
      description: "Иконка слева от текста кнопки",
      control: false,
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultBtn: Story = {
  args: {
    label: "Button",
  },
};

export const GreenFilledBtn: Story = {
  args: {
    label: "Button",
    variant: "filled",
    color: "green",
  },
};

export const RedFilledBtn: Story = {
  args: {
    label: "Button",
    variant: "filled",
    color: "red",
  },
};

export const GreenOutlineBtn: Story = {
  args: {
    label: "Button",
    variant: "outline",
    color: "green",
  },
};

export const RedOutlineBtn: Story = {
  args: {
    label: "Button",
    variant: "outline",
    color: "red",
  },
};

export const ArrowBtn: Story = {
  args: {
    label: "Button",
    variant: "arrow",
  },
};

export const LeftIconBtn: Story = {
  args: {
    label: "Button",
    leftIcon: <AiFillAlert />,
  },
};
