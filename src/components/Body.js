import Note from './Note'
import Notes from './Notes'

const Body = ( {note } ) => {
    return (
        <div className="note-body">
            <h6>{note.text}</h6>     
        </div>
    )
}
export default Body;