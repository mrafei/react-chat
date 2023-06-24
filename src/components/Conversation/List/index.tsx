import ConversationItem from "./Item";
import "./index.css";

import type { FC } from "react";

const conversations: IConversation[] = [
  {
    id: 1,
    image: "/avatar.png",
    title: "john",
    lastMessage: "something cool!",
  },
  { id: 2, image: "/avatar.png", title: "cindy", lastMessage: "Bunq news" },
  {
    id: 3,
    image: "/avatar.png",
    title: "jonah miller",
    lastMessage: "Hey mohammad!",
  },
  {
    id: 4,
    image: "/avatar.png",
    title: "katheryn johansson",
    lastMessage: "Have a great week!",
  },
];
const ConversationList: FC = () => {
  return (
    <div className="conversation-list">
      {conversations.map((item) => (
        <ConversationItem key={item.id} {...item} />
      ))}
    </div>
  );
};
export default ConversationList;
