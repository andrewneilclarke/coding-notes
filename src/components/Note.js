import { FaTimes } from 'react-icons/fa'
import Body from './Body'

export const Note = ( { note, onDelete } ) => {
    return (
        <div className={`note ${note.expand ? 'expand' : ''}`}>
            <h3>
                {note.title} <FaTimes style={{ color: "red", cursor:"pointer"}} onClick={() => onDelete(note.id)}/>
            </h3>
                <Body note={note} />
        </div>
    )
}

export default Note;