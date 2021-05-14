import { FaTimes } from 'react-icons/fa'
import Body from './Body'

export const Note = ( { note, onDelete, onOpen} ) => {
    return (
        <div className={`note ${note.expand ? 'expand' : ''}`} onDoubleClick={() => onOpen(note.id)}>
            <h3>
                {note.title} <FaTimes style={{ color: "red", cursor:"pointer"}} onClick={() => onDelete(note.id)}/>
            </h3>
                <Body />
        </div>
    )
}

export default Note;