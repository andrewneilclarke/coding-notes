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
"items": "Tutorial Hell, Memorizing Syntax, Portfolio Projects",
"expand": false,
"updated": '24 July 2021'
},
{
  "id": 2,
  "title": "JS Revision",
  "items": "Map, destructuring, fetch API, Async Await, Promises",
  "expand": false,
  "updated": ''
},
{
  "id": 3,
  "title": "Advice",
  "items": "Tutorial Hell, Memorizing Syntax, Portfolio Projects",
  "expand": false,
  "updated": ''
},
{
  "id": 4,
  "title": "Tutorials",
  "items": "Tutorial Hell, Memorizing Syntax, Portfolio Projects",
  "expand": false,
  "updated": ''
},
{
  "id": 5,
  "title": "ES6",
  "items": "Tutorial Hell, Memorizing Syntax, Portfolio Projects",
  "expand": false,
  "updated": ''
},
{
  "id": 6,
  "title": "Misc",
  "items": "Tutorial Hell, Memorizing Syntax, Portfolio Projects",
  "expand": false,
  "updated": ''
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
  console.log(note)
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
