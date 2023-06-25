import { Link, useParams } from "react-router-dom";
import type { FC } from "react";
import { auth } from "@configs/firebase.ts";
import { profileImageUrl } from "@utils/image.ts";

const ConversationItem: FC<IConversation> = (props) => {
  const { id, image, title, lastMessage, participants } = props;
  const { uid: currentUserId } = auth.currentUser || {};
  const { id: activeConversationId } = useParams();

  const isActive = activeConversationId === id;
  const recipient = participants.filter(
    ({ uid }) => uid !== currentUserId
  )?.[0];
  const contactTitle = recipient?.title;
  const conversationTitle = title || contactTitle;
  return (
    <Link
      to={`/conversations/${id}`}
      className={`conversation-item ${
        isActive ? "conversation-item--active" : ""
      }`}
    >
      <img
        className="conversation-item__image"
        src={image || profileImageUrl(recipient?.uid)}
        alt={title}
      />
      <div className="conversation-item__content">
        <div>{conversationTitle}</div>
        <div>{lastMessage}</div>
      </div>
    </Link>
  );
};
export default ConversationItem;
