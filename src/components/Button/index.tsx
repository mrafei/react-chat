import "./index.css";
import type { HOCFunctionalComponent } from "@_types/components.ts";
import type { ButtonHTMLAttributes } from "react";

const Button: HOCFunctionalComponent<
  ButtonHTMLAttributes<HTMLButtonElement>
> = (props) => {
  const { children, className = "", ...restProps } = props;
  return (
    <button className={`button ${className}`} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
