// src/components/NoteList.jsx
import PropTypes from 'prop-types'
import { Note } from './note.jsx'

export function NoteList({ notes = [], onDeleteNote }) {
    if (!notes || notes.length === 0) {
        return (
            <div className="notes-list-empty">
                <p>No hay notas disponibles</p>
            </div>
        )
    }

    return (
        <div className="notes-list">
            {notes.map(({ id, title, content }) => (
                <Note
                    key={id}
                    title={title}
                    content={content}
                    onDelete={() => onDeleteNote(id)}
                />
            ))}
        </div>
    )
}

NoteList.propTypes = {
    notes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ]).isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired
        })
    ),
    onDeleteNote: PropTypes.func.isRequired
}
