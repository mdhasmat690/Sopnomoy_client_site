import React, { useState } from "react";

function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  function sendMessage(event) {
    event.preventDefault();

    setMessage("");
  }

  return (
    <div>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
      <form onSubmit={sendMessage}></form>
    </div>
  );
}

export default ChatRoom;
