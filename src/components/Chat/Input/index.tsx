import "./index.css";
import { useRef } from "react";
import { auth, db } from "@configs/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import type { FC } from "react";
import { useParams } from "react-router-dom";
const ChatInput: FC = () => {
  const { id } = useParams();
  const inputRef = useRef<HTMLInputElement>(null);
  const sendMessage = async (message: string) => {
    if (inputRef.current) inputRef.current.innerHTML = "";
    if (message.trim() === "") {
      alert("Enter valid message");
      return;
    }
    const { uid, displayName, photoURL } = auth.currentUser || {};
    await addDoc(collection(db, "messages"), {
      text: message,
      conversation_id: id,
      name: displayName,
      avatar: photoURL,
      created_at: serverTimestamp(),
      uid,
    });
  };
  return (
    <div className="chat-input__container">
      <div
        ref={inputRef}
        contentEditable
        className="chat-input"
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage(inputRef.current?.innerHTML || "");
          }
        }}
      />
    </div>
  );
};

export default ChatInput;
