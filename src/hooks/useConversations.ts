import { useEffect, useState } from "react";
import useAuth from "@hooks/useAuth.ts";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "@configs/firebase.ts";

const useConversations = () => {
  const [conversations, setConversations] = useState<IConversation[]>([]);
  const { uid } = useAuth() || {};
  useEffect(() => {
    if (!uid) return;
    const q = query(
      collection(db, "conversations"),
      where("participant_ids", "array-contains", uid)
    );
    return onSnapshot(q, (QuerySnapshot) => {
      const list: IConversation[] = [];
      QuerySnapshot.forEach((doc) => {
        const conversation = { ...doc.data(), id: doc.id } as IConversation;
        list.push(conversation);
      });
      setConversations(list);
    });
  }, [uid]);
  return conversations;
};
export default useConversations;
