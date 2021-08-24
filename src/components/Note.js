import { FaTimes } from 'react-icons/fa'
import Body from './Body'
import useFetch from './useFetch'

export const Note = ( { note, notes } ) => {
    
    // const { data:notes, loading, error } = useFetch('http://localhost:8000/notes/' + note.id)
    
    //delete function
    const handleClick = () => {
        console.log(notes)
        fetch(`http://localhost:8000/notes/${note.id}`, {
            method: 'DELETE',
        })
        console.log(note.id)
        
    }
    return (
        <>
        <div className={`note ${note.expand ? 'expand' : ''}`}>
            <h3>
                {note.title} 
            </h3>
            <FaTimes style={{ color: "red", cursor:"pointer"}} onClick={handleClick} />
        </div>
        <div className="note-body">
            <Body note={note} />
        </div>
        </>
    )
}

export default Note;