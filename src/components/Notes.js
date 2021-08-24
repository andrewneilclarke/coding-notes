import Note from './Note'

const Notes = ({ notes }) => {
    return (
        <>
         {notes.map((note)=> (
         <Note key={note.id} notes={notes} note={note} />
         ))}   
        </>
    )
}
export default Notes;