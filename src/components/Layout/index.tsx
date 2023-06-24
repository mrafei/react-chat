import Sidebar from "./Sidebar";
import "./index.css";
import type { HOCFunctionalComponent } from "@_types/components";
const Layout: HOCFunctionalComponent = (props) => {
  const { children } = props;
  return (
    <div className="layout">
      <Sidebar />
      <div className="container">{children}</div>
    </div>
  );
};

export default Layout;
