const Body = ( { note } ) => {
    const { text } = note;
    return (
        <div className="note">
            {text}
        </div>
    )
}
export default Body;