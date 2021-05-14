import Note from './Note'

const Notes = ({ notes, onDelete, onExpand }) => {
    return (
        <>
         {notes.map((note)=> (
         <Note key={note.id} note={note} onDelete={onDelete} onExpand={onExpand} />
         ))}   
        </>
    )
}
export default Notes;