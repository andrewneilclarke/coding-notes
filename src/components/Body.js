const Body = ( { note } ) => {
    const { items, updated, expand } = note;
    return (
        <div className="body-container">
            <div className="note">
                {items} 
            </div>
            <div className="updated">
                {updated} {expand}
            </div>
        </div>
    )
}
export default Body;