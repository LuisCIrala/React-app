// src/App.jsx
import { useState } from 'react'
import { NoteForm } from './components/NoteForm'
import { NoteList } from './components/NoteList'
import './App.css'

export function App() {
  const [notes, setNotes] = useState([])

  const handleAddNote = (newNote) => {
    setNotes([...notes, newNote])
  }

  const handleDeleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id))
  }

  return (
    <div className="app">
      <h1>Notas</h1>
      <NoteForm onSubmit={handleAddNote} />
      <NoteList 
        notes={notes} 
        onDeleteNote={handleDeleteNote}
      />
    </div>
  )
}



