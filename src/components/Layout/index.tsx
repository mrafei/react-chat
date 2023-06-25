import Sidebar from "./Sidebar";
import ChatInput from "@components/Chat/Input";
import "./index.css";
import type { HOCFunctionalComponent } from "@_types/components";
import { useParams } from "react-router-dom";
const Layout: HOCFunctionalComponent = (props) => {
  const { children } = props;
  const { id } = useParams();

  return (
    <div className="layout">
      <Sidebar />
      <div className="container">
        <div className="container__inner">
          {children}
          {id ? <ChatInput /> : null}
        </div>
      </div>
    </div>
  );
};

export default Layout;
