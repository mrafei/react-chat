import "./index.css";
import { useRef } from "react";
import { auth, db } from "@configs/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import type { FC } from "react";
import { useParams } from "react-router-dom";
import Button from "@components/Button";
const ChatInput: FC = () => {
  const { id } = useParams();
  const inputRef = useRef<HTMLInputElement>(null);
  const sendMessage = async (message: string) => {
    if (inputRef.current) inputRef.current.innerHTML = "";
    if (message.trim() === "") return;
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
    <div className="chat">
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
      <Button
        onClick={() => {
          sendMessage(inputRef.current?.innerHTML || "");
        }}
        className="chat-input__button"
      >
        <img src="/icons/send.png" alt="send" />
      </Button>
    </div>
  );
};

export default ChatInput;
