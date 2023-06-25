import { useParams } from "react-router-dom";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
  where,
} from "firebase/firestore";
import { db } from "@configs/firebase";
import { useEffect, useState } from "react";
import MessageItem from "@components/Chat/Messages/Item";
import "./index.css";

import type { FC } from "react";

const ChatMessages: FC = () => {
  const { id } = useParams();
  const [messages, setMessages] = useState<IMessage[]>([]);
  useEffect(() => {
    if (!id) return;
    const q = query(
      collection(db, "messages"),
      where("conversation_id", "==", id),
      orderBy("created_at"),
      limit(50)
    );
    return onSnapshot(q, (QuerySnapshot) => {
      const messages: IMessage[] = [];
      QuerySnapshot.forEach((doc) => {
        const message = { ...doc.data(), id: doc.id } as IMessage;
        messages.push(message);
      });
      setMessages(messages);
    });
  }, [id]);
  if (!id) return null;
  return (
    <div className="message__list">
      {messages.map((message) => (
        <MessageItem key={message.id} {...message} />
      ))}
    </div>
  );
};
export default ChatMessages;
