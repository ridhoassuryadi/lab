import { useEffect, useState } from "react";
import cn from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import useInterval from "../../hooks/useInterval";
import styles from "./messages.module.scss"
import randomWords from "random-words";

const messageConfig = { min: 3, max: 10, join: " " };
const initialMessages = [
  { text: randomWords(messageConfig), sent: true },
  { text: randomWords(messageConfig) },
  { text: randomWords(messageConfig), sent: true },
  { text: randomWords(messageConfig) },
  { text: randomWords(messageConfig) },
  { text: randomWords(messageConfig), sent: true },
];

const transition = {
  type: "spring",
  stiffness: 200,
  mass: 0.2,
  damping: 20,
};

const variants = {
  initial: {
    opacity: 0,
    y: 300,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition,
  },
};

const Messages = (): JSX.Element => {
  const [isMounted, setIsMounted] = useState(false);
  const [messages, setMessages] = useState(initialMessages);

  useEffect(() => {
    setIsMounted(true);
  }, []);



  if (!isMounted) return <></>;

  return (

      <ol className={"list"} style={{ minHeight: 600 }}>
        {messages.map(({ text, sent }, i) => {
          const isLast = i === messages.length - 1;
          const noTail = !isLast && messages[i + 1]?.sent === sent;
          return (
            <li key={i} className={cn(styles.shared, sent ? styles.sent : styles.received, noTail && styles.noTail)}>
            {text}
          </li>
          );
        })}
      </ol>
  );
};

export default Messages;