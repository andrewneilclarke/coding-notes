import { FaTimes } from 'react-icons/fa'

export const Note = ( { note, onDelete, onExpand} ) => {
    return (
        <div className={`note ${note.expand ? 'expand' : ''}`} onDoubleClick={() => onExpand(note.id)}>
            <h3>
                {note.title} <FaTimes style={{ color: "red", cursor:"pointer"}} onClick={() => onDelete(note.id)}/>
            </h3>
            <p>{note.text}</p>
        </div>
    )
}

export default Note;