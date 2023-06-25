import Button from "@components/Button";
import { auth } from "@configs/firebase.ts";
import { useNavigate } from "react-router-dom";
import type { FC } from "react";

const SignOut: FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    auth.signOut().then(() => navigate("/login"));
  };
  return <Button onClick={handleClick}>Sign Out</Button>;
};
export default SignOut;
