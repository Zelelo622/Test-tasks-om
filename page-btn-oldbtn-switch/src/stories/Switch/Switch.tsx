import React from "react";
import "./styles.css";

type SwitchProps = {
  /**
   * Текущее состояние переключателя
   */
  checked: boolean;
  /**
   * Колбэк, вызываемый при изменении состояния переключателя.
   */
  onChange: (checked: boolean) => void;
  /** Дополнительные CSS-классы для обертки переключателя. */
  className?: string;
  /** Дополнительные CSS-классы для стилизации слайдера. */
  classNameSlider?: string;
};

/**
 * Switch — переключатель (toggle), позволяющий пользователю включать или выключать состояние.
 */
export const Switch = ({
  checked,
  onChange,
  className,
  classNameSlider,
}: SwitchProps): React.ReactElement => {
  const switchClass = className ? `switch ${className}` : "switch";
  const sliderClass = classNameSlider ? `slider ${classNameSlider}` : "slider";

  return (
    <label className={switchClass}>
      <input
        type="checkbox"
        className="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className={sliderClass}></span>
    </label>
  );
};
