import "./App.css";
import Routes from "@components/Routes";
import { ToastContainer } from "react-toastify";
import type { FC } from "react";

const App: FC = () => (
  <main>
    <Routes />
    <ToastContainer />
  </main>
);

export default App;
