import { useState } from 'react' 
import Header from './components/Header'
import Notes from './components/Notes'
import AddNote from './components/AddNote'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import useFetch from './components/useFetch'

function App() {
  const [showaddform, setshowaddform] = useState(false)
  const { data:notes, loading, error } = useFetch('http://localhost:8000/notes')
  
// set timestamp
const setTime = () => {
  return new Date().toLocaleString();
}

  return (
    <Router>
      <Switch>
        <div className="container">
          <Header showaddform={showaddform} setshowaddform={setshowaddform} /*handleClick={handleClick}*//>
          {showaddform && <AddNote /*onAdd={addNote} */setTime={setTime} showaddform={showaddform} setshowaddform={setshowaddform} />}
          {error && <h4 style={{ margin: "10px"}}> { error }</h4> }
          {loading ? <h3 style={{ margin: "10px"}}>Loading...</h3> : (notes ? <Notes notes={notes} /*onOpen={openNote}*/ /> : <p style={{ margin: "10px"}}>'No Notes To Show'</p>)}
        </div>
        </Switch>
    </Router>
  );
}

export default App;
