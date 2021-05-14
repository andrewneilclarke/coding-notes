import Note from './Note'

const Notes = ({ notes, onDelete, onOpen }) => {
    return (
        <>
         {notes.map((note)=> (
         <Note key={note.id} note={note} onDelete={onDelete} onOpen={onOpen} />
         ))}   
        </>
    )
}
export default Notes;