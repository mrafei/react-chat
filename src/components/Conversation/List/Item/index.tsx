import { Link, useParams } from "react-router-dom";
import type { FC } from "react";

const ConversationItem: FC<IConversation> = (props) => {
  const { id, image, title, lastMessage } = props;
  const { id: activeConversationId } = useParams();

  const isActive = Number(activeConversationId) === id;
  return (
    <Link
      to={`/conversations/${id}`}
      className={`conversation-item ${
        isActive ? "conversation-item--active" : ""
      }`}
    >
      <img className="conversation-item__image" src={image} alt={title} />
      <div className="conversation-item__content">
        <div>{title}</div>
        <div>{lastMessage}</div>
      </div>
    </Link>
  );
};
export default ConversationItem;
