import React, { type ReactNode } from "react";
import { ButtonComponent } from "./styles";

type BaseButtonProps = {
  /** Текст, отображаемый на кнопке. */
  label: string;
  /** Дополнительные CSS-классы для настройки стилей кнопки. */
  className?: string;
  /** Указывает, находится ли кнопка в нажатом состоянии. */
  isPressed?: boolean;
  /** Отключает кнопку и изменяет её внешний вид. */
  isDisabled?: boolean;
  /** Иконка, отображаемая слева от текста кнопки. */
  leftIcon?: ReactNode;
  /** Обработчик события клика по кнопке. */
  onClick: () => void;
};

type ColoredButtonProps = {
  variant: "filled" | "outline";
  color?: "red" | "green";
};

type DefaultButtonProps = {
  variant?: "primary" | "arrow";
  color?: never;
};

export type ButtonProps = BaseButtonProps &
  (ColoredButtonProps | DefaultButtonProps);

/** Кнопка — компонент позволяющий пользователю совершать действия с интерфейсом */
export const Button = ({
  label,
  className,
  variant = "primary",
  color,
  isPressed = false,
  leftIcon,
  isDisabled = false,
  onClick,
  ...props
}: ButtonProps): React.ReactElement => {
  return (
    <ButtonComponent
      type="button"
      className={className}
      variant={variant}
      color={variant === "primary" ? undefined : color}
      isPressed={isPressed}
      isDisabled={isDisabled}
      onClick={onClick}
      {...props}
    >
      {leftIcon && <span className="icon-left">{leftIcon}</span>}
      {label}
      {variant === "arrow" && <span className="arrow-shape" />}
    </ButtonComponent>
  );
};
