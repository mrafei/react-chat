import Input from "@components/Input";
import "./index.css";
import type { FC } from "react";

const Login: FC = () => (
  <div className="layout__container">
    <Input title="username" />
    <Input title="password" type="password" />
  </div>
);

export default Login;
