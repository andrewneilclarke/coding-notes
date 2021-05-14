import { useState } from 'react' 
import Header from './components/Header'
import Note from './components/Note'
import Notes from './components/Notes'

function App() {
  const [notes, setNotes] = useState([
{    
"id": 1,
"title": "React Project Ideas",
"text": "Coding Notes, Childrens Bedtime Stories",
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
])

// Delete Note prop
const deleteNote = (id) => {
  setNotes(notes.filter((note) => note.id !== id ))
}

// open note
const openNote = (id) => {
  setNotes(notes.filter((note) => note.id === id))
}

  return (
    <div className="container">
      <Header />
      {notes.length > 0 ? (
       <Notes notes={notes} onDelete={deleteNote} onOpen={openNote} /> 
      ) : (
        'No Notes To Show' 
        )}
    </div>
  );
}

export default App;
