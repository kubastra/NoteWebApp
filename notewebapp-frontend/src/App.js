import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ title: "", text: "" });

  const fetchNotes = async () => {
    try {
      const res = await fetch("http://localhost:8080/notes");
      const data = await res.json();
      setNotes(data);
    } catch (err) {
      console.error("Błąd pobierania notatek:", err);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const addNote = async (e) => {
    e.preventDefault();
    if (!newNote.title || !newNote.text) return;

    await fetch("http://localhost:8080/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newNote),
    });

    setNewNote({ title: "", text: "" });
    fetchNotes();
  };

  const deleteNote = async (id) => {
    await fetch(`http://localhost:8080/notes/${id}`, {
      method: "DELETE",
    });
    fetchNotes();
  };

  return (
    <div className="App">
      <h1>📝 Moje Notatki</h1>

      <form className="note-form" onSubmit={addNote}>
        <input
          placeholder="Tytuł"
          value={newNote.title}
          onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
        />
        <textarea
          placeholder="Treść notatki"
          value={newNote.text}
          onChange={(e) => setNewNote({ ...newNote, text: e.target.value })}
        />
        <button type="submit">Dodaj notatkę</button>
      </form>

      <div className="notes-container">
        {notes.map((note) => (
          <div key={note.id} className="note-card">
            <h3>{note.title}</h3>
            <p>{note.text}</p>
            <button className="delete-btn" onClick={() => deleteNote(note.id)}>
              Usuń
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
