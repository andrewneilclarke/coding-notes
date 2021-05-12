const notes = [
    {
    "id": 1,
    "title": "React Project Ideas",
    "text": "1. Coding Notes, 2. Childrens Bedtime Stories",
},
{
    "id": 2,
    "title": "React Project Ideas",
    "text": "1. Coding Notes, 2. Childrens Bedtime Stories",
}
]

export const Notes = () => {
    return (
        <>
         {notes.map((note)=> (
         <h3>{note.text}</h3>
         ))}   
        </>
    )
}
export default Notes;