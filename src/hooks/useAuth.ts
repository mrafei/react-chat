import { useEffect, useState } from "react";
import { onAuthStateChanged, type User } from "firebase/auth";
import { auth } from "@configs/firebase";
const useAuth = () => {
  const [user, setUser] = useState<Nullishable<User>>(undefined);
  useEffect(() => {
    const listener = onAuthStateChanged(auth, async (user) => {
      setUser(user);
    });

    return () => {
      listener();
    };
  }, []);
  return user;
};
export default useAuth;
