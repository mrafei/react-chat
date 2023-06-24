import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes as ReactRouter } from "react-router-dom";
import Loading from "@components/Loading";
import type { FC } from "react";

// const HomeRoute = lazy(() => import("./Home"));
const LoginRoute = lazy(() => import("@components/Auth/Login"));
const ChatRoute = lazy(() => import("@components/Chat"));

const routes = [
  { path: "/", index: true, element: <ChatRoute /> },
  { path: "/conversations/:id", index: true, element: <ChatRoute /> },
  { path: "/login", index: true, element: <LoginRoute /> },
];
const Routes: FC = () => {
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
