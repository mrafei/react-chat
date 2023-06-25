import ConversationItem from "./Item";
import useConversations from "@hooks/useConversations.ts";
import "./index.css";

import type { FC } from "react";

const ConversationList: FC = () => {
  const conversations = useConversations();

  return (
    <div className="conversation-list">
      {conversations.map((item) => (
        <ConversationItem key={item.id} {...item} />
      ))}
    </div>
  );
};
export default ConversationList;
