import { useState, useEffect } from "react";
import { nanoid } from 'nanoid'
import NoteList from "./components/NotesList";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import { Button } from 'antd'


function App() {

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'Some dummy first note'
    },
    {
      id: nanoid(),
      text: 'Some dummy second note'
    },
    {
      id: nanoid(),
      text: 'Some dummy third note'
    },
    {
      id: nanoid(),
      text: 'Some dummy forth note'
    }
  ])

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('notes-data')
    );
    if (savedNotes) {
      setNotes(savedNotes)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('notes-data', JSON.stringify(notes))
  }, [notes])

  function addNote(text) {
    const newNote = {
      id: nanoid(),
      text: text
    }

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  function deleteNote(id) {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes);
  }

  function clearLocalStorage() {
    localStorage.clear();
    setNotes([]);
  }
  return (

    <div className="wrapper">
      <Header />
      <SearchBar handleSearch={setSearchText} />
      <NoteList
        notes={notes.filter((note) =>
          note.text.toLocaleLowerCase().includes(searchText)
        )}
        handleAddNewNote={addNote}
        handleDeleteNote={deleteNote} />
      <Button type="primary"
        onClick={clearLocalStorage}
        style={{ marginTop: '10px', marginBottom: '10px' }}
      >
        Clear All Notes
      </Button>
    </div>
  );
}

export default App;



