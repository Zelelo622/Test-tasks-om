import React from "react";
import "./styles.css";

type OldButtonProps = {
  /** Текст, отображаемый на кнопке. */
  label: string;
  /** Дополнительные CSS-классы для настройки стилей кнопки. */
  className?: string;
  /** Обработчик события клика по кнопке. */
  onClick: () => void;
};

/** Кнопка — компонент позволяющий пользователю совершать действия с интерфейсом */
export const OldButton = ({
  label = "кнопка",
  className,
  onClick,
}: OldButtonProps): React.ReactElement => {
  const buttonClass = className ? `button ${className}` : "button";

  return (
    <button className={buttonClass} onClick={onClick}>
      {label}
    </button>
  );
};
