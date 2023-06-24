import type { FC } from "react";
import "./index.css";
import ConversationList from "@components/Conversation/List";
const LayoutSidebar: FC = () => {
  return (
    <div className="sidebar">
      <ConversationList />
    </div>
  );
};
export default LayoutSidebar;
