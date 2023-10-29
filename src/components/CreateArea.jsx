import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    id: props.id,
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      if (name === "title") {
        return { ...prevValue, title: value };
      } else if (name === "content") {
        return { ...prevValue, content: value };
      }
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button
          type="button"
          onClick={() => {
            props.add(note);
            setNote({
              id: props.id,
              title: "",
              content: ""
            });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
