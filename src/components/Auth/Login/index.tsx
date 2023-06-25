import Input from "@components/Input";
import Button from "@components/Button";
import "./index.css";
import { auth } from "@configs/firebase.ts";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import type { FC } from "react";

const Login: FC = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const login = async () => {
    try {
      const res = await signInWithEmailAndPassword(auth, username, password);
      console.log(res);
      navigate("/");
    } catch (e) {
      toast.error("Could not login with provider email and password!");
    }
  };
  return (
    <div className="layout__container">
      <Input title="username" onChange={(e) => setUsername(e.target.value)} />
      <Input
        title="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") login();
        }}
      />
      <Button onClick={login}>Login</Button>
    </div>
  );
};

export default Login;
