import type { FC } from "react";

const ConversationItem: FC<IConversation> = (props) => {
  const { id, image, title, lastMessage } = props;

  return (
    <a href={`/conversations/${id}`} className="conversation-item">
      <img className="conversation-item__image" src={image} alt={title} />
      <div className="conversation-item__content">
        <div>{title}</div>
        <div>{lastMessage}</div>
      </div>
    </a>
  );
};
export default ConversationItem;
