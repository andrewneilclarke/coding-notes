import { useState } from 'react' 
import Header from './components/Header'
import Notes from './components/Notes'
import AddNote from './components/AddNote'

function App() {
  const [showaddform, setshowaddform] = useState(false)
  const [notes, setNotes] = useState([
{    
"id": 1,
"title": "React Project Ideas",
"text": "Tutorial Hell, Memorizing Syntax, Portfolio Projects",
"expand": false,
},
{
  "id": 2,
  "title": "JS Revision",
  "text": "Map, destructuring, fetch API, Async Await, Promises",
  "expand": false,
},
{
  "id": 3,
  "title": "Advice",
  "text": "Tutorial Hell, Memorizing Syntax, Portfolio Projects",
  "expand": false,
},
{
  "id": 4,
  "title": "Tutorials",
  "text": "Tutorial Hell, Memorizing Syntax, Portfolio Projects",
  "expand": false,
},
{
  "id": 5,
  "title": "ES6",
  "text": "Tutorial Hell, Memorizing Syntax, Portfolio Projects",
  "expand": false,
},
{
  "id": 6,
  "title": "Misc",
  "text": "Tutorial Hell, Memorizing Syntax, Portfolio Projects",
  "expand": false,
},
])

// Delete Note prop
const deleteNote = (id) => {
  setNotes(notes.filter((note) => note.id !== id ))
}

// open note
const openNote = (id) => {
  setNotes(notes.filter((note) => note.id === id))
}
//open add form
const handleClick = () => {
  setshowaddform(!showaddform)
}

// add note
const addNote = (note) => {
  const id = Math.floor(Math.random() * 10000) +1
  // console.log(note)
  const newNote = { id, ...note }
  setNotes([...notes, newNote])
}


  return (
    <div className="container">
      <Header showaddform={showaddform} setshowaddform={setshowaddform} handleClick={handleClick}/>
      {showaddform && <AddNote onAdd={addNote} />}
      {notes.length > 0 ? (
       <Notes notes={notes} onDelete={deleteNote} onOpen={openNote} /> 
      ) : (
        <p style={{ margin: "10px"}}>'No Notes To Show'</p>
        )}
    </div>
  );
}

export default App;
