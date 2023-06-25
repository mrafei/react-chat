import "./index.css";
import type { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
}
const Input: FC<InputProps> = (props) => {
  const { className = "", title, ...restProps } = props;
  return (
    <div className="input__container">
      {title ? <div className="input__title">{title}</div> : null}
      <input className={`input ${className}`} {...restProps} />
    </div>
  );
};
export default Input;
