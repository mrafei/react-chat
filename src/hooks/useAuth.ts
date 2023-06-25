import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, type User } from "firebase/auth";
const useAuth = () => {
  const [user, setUser] = useState<Nullable<User>>(null);
  useEffect(() => {
    const auth = getAuth();

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
