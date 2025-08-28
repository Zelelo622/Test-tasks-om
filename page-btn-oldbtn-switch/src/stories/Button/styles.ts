import styled from "styled-components";
import type { ButtonProps } from "./Button";

type Color = "red" | "green";

const palette = {
  default: {
    base: "#ebebeb",
    hover: "#f4f4f4",
    pressed: "#e1e1e1",
    border: "#afafaf",
  },
  red: {
    base: "#ca130c",
    hover: "#e83029",
    pressed: "#a9110b",
    border: "#db241f",
  },
  green: {
    base: "#6e8735",
    hover: "#85b444",
    pressed: "#5e822b",
    border: "#6d9735",
  },
} satisfies Record<string, Record<string, string>>;

const getColor = (color?: Color) => palette[color ?? "default"];

export const ButtonComponent = styled.button<
  Pick<ButtonProps, "variant" | "isPressed" | "isDisabled" | "color">
>`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  padding: 8px 12px;
  border: 1px solid ${palette.default.border};
  background-color: ${palette.default.base};
  color: #000;

  .arrow-shape {
    margin-left: 6px;
    display: inline-block;
    width: 6px;
    height: 10px;
    background: ${palette.red.base};
    clip-path: polygon(0 0, 100% 50%, 0 100%);
  }

  ${({ variant }) =>
    (variant === "primary" || variant === "arrow") &&
    `
      border: 1px solid ${palette.default.border};
      background-color: ${palette.default.base};
      color: #000;

      &:hover {
        background-color: ${palette.default.hover};
        .arrow-shape {
          background: ${palette.red.hover};
        }
      }

      &:active {
        background-color: ${palette.default.pressed};
      }
    `}

  ${({ variant, color }) =>
    variant === "outline" &&
    color &&
    `
      border: none;
      padding: 9px 13px;
      background-color: ${palette.default.base};
      box-shadow: inset 0 0 0 2px ${getColor(color).border};
      color: #000;

      &:hover {
        background-color: ${palette.default.hover};
        box-shadow: inset 0 0 0 2px ${getColor(color).border};
      }

      &:active {
        background-color: ${palette.default.pressed};
        box-shadow: inset 0 0 0 2px ${getColor(color).pressed};
      }
    `}

  ${({ variant, color }) =>
    variant === "filled" &&
    color &&
    `
      padding: 9px 13px;
      border: none;
      background-color: ${getColor(color).base};
      color: #fff;

      &:hover {
        background-color: ${getColor(color).hover};
      }

      &:active {
        background-color: ${getColor(color).pressed};
      }
    `}

  ${({ isPressed, variant, color }) =>
    isPressed &&
    (variant === "filled" && color
      ? `background-color: ${getColor(color).pressed}; color: #fff;`
      : variant === "outline" && color
      ? `background-color: ${palette.default.pressed};
         box-shadow: inset 0 0 0 2px ${getColor(color).pressed};
         color: #000;`
      : `background-color: ${palette.default.pressed};
         .arrow-shape {
            background: ${palette.red.pressed};
          }`)}

  ${({ isDisabled }) =>
    isDisabled &&
    `
      opacity: 0.6;
      cursor: not-allowed;
    `}

  .icon-left {
    display: inline-flex;
    align-items: center;
    margin-right: 8px;
  }
`;
