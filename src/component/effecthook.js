import React, { useState, useEffect } from "react";

export default function PageTitle() {
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `Hi, ${name}`;
  });

  return (
    <div>
      <h1>Lezione: Function Component Effects</h1>
      <p>Use the input field below to rename this page!</p>
      <input
        onChange={({ target }) => setName(target.value)}
        value={name}
        type="text"
      />
    </div>
  );
}
