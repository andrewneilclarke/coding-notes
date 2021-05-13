import Notes from './components/Notes'

export const Title = ( {note} ) => {
    return (
        <div className="note">
            <h5>{ note.title }</h5>
        </div>
    )
}
