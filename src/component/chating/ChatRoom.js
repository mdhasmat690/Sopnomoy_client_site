import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log(socket, "where are you");
    socket.on("connect", () => {
      console.log(socket.id); // "G5p5..."
    });
  }, []);

  socket.on("connect", () => {
    console.log(socket.id); // ojIckSD2jqNzOqIrAGzL
  });

  socket.on("test event", (data) => {
    console.log("object", data);
  });

  function sendMessage(event) {
    event.preventDefault();
    socket.emit("message", message);
    setMessage("");
  }

  return (
    <div>
      {/* <h1>Chat Room</h1> */}
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
      <form onSubmit={sendMessage}>
        {/*     <input
          type="text"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <button type="submit">Send</button> */}
      </form>
    </div>
  );
}

export default ChatRoom;
