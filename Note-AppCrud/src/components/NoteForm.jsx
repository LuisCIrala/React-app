// src/components/NoteForm.jsx
import { useState } from 'react'
import PropTypes from 'prop-types'

export function NoteForm({ onSubmit }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim() || !content.trim()) return

    onSubmit({ 
      id: Date.now(),  // Añadimos id para mantener consistencia
      title, 
      content 
    })
    setTitle('')
    setContent('')
  }

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Contenido de la nota"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Crear Nota</button>
    </form>
  )
}

NoteForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}
