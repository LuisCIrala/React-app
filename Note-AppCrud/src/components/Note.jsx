// src/components/Note.jsx
import PropTypes from 'prop-types'

export function Note({ title, content, onDelete }) {
    return (
        <div className="note">
            <h3>{title}</h3>
            <p>{content}</p>
            <button onClick={onDelete}>Eliminar</button>
        </div>
    )
}

Note.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired
}
