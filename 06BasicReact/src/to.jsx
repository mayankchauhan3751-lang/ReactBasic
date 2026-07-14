import { useState } from "react";

function To() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  function submit() {
    if (input.trim() === "") return;

    setMessages([...messages, input]);
    setInput("");
  }

  // Delete
  function deleteItem(index) {
    const newMessages = messages.filter((_, i) => i !== index);
    setMessages(newMessages);
  }

  // Edit
  function editItem(index) {
    setInput(messages[index]); // input me value aa jayegi

    const newMessages = messages.filter((_, i) => i !== index);
    setMessages(newMessages);
  }

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={submit}>Submit</button>

      <ul>
        {messages.map((message, index) => (
          <li key={index}>
            {message}

            <button onClick={() => editItem(index)}>
              Edit
            </button>

            <button onClick={() => deleteItem(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default To;

