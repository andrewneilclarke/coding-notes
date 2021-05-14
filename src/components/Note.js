import { FaTimes } from 'react-icons/fa'

export const Note = ( { note } ) => {
    return (
        <div className="note">
            <h3>{note.title} <FaTimes /></h3>
            <p>{note.text}</p>
        </div>
    )
}

export default Note;