import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(props) {
    return setNotes([...notes, props]);
  }

  function deleteItem(id) {
    return setNotes((prevs) => {
      return prevs.filter((items, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea add={addNote} id={notes.length} />
      {notes.map((items, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={items.title}
            content={items.content}
            delete={deleteItem}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
