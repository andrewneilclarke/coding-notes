import { useState } from 'react' 
import Header from './components/Header'
import Notes from './components/Notes'
import { useState } from 'react' 

function App() {
  const [notes, setNotes] = useState([
{    
"id": 1,
"title": "React Project Ideas",
"text": "Coding Notes, Childrens Bedtime Stories",
},
{
  "id": 2,
  "title": "JS Revision",
  "text": "Map, destructuring, fetch API, Async Await, Promises",
},
{
  "id": 3,
  "title": "Advice",
  "text": "Tutorial Hell, Memorizing Syntax, Portfolio Projects",
},
])
  return (
    <div className="container">
      <Header />
      <Notes notes={notes}/>
      
    </div>
  );
}

export default App;
