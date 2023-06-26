import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Route, Routes as ReactRouter } from "react-router-dom";
import Loading from "@components/Loading";
import useAuth from "@hooks/useAuth.ts";
import type { FC } from "react";

const LoginRoute = lazy(() => import("@components/Auth/Login"));
const ChatRoute = lazy(() => import("@components/Chat"));

const routes = [
  { path: "/", index: true, element: <ChatRoute /> },
  { path: "/conversations/:id", index: true, element: <ChatRoute /> },
  { path: "/login", index: true, element: <LoginRoute /> },
];
const Routes: FC = () => {
  const user = useAuth();

  useEffect(() => {
    if (user === null && window.location.pathname !== "/login")
      window.location.href = "/login";
  }, [user]);
  return (
    <BrowserRouter>
      <ReactRouter>
        {routes.map(({ element, ...route }) => (
          <Route
            key={route.path}
            {...route}
            element={<Suspense fallback={<Loading />}>{element}</Suspense>}
          />
        ))}
      </ReactRouter>
    </BrowserRouter>
  );
};
export default Routes;
