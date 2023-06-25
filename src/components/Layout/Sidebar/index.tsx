import "./index.css";
import ConversationList from "@components/Conversation/List";
import SignOut from "@components/Auth/SignOut";
import type { FC } from "react";
const LayoutSidebar: FC = () => {
  return (
    <div className="sidebar">
      <SignOut />
      <ConversationList />
    </div>
  );
};
export default LayoutSidebar;
