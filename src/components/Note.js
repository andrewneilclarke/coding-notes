import { Title } from "./Title";

const Note = ({ note }) => {
    return (
        <div className="note">
            <Title />
            <p className="note-text">{ note.text }</p>
        </div>
    )
}

export default Note;