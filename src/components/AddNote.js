import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const AddNote = ( { onAdd, setTime, showaddform, setshowaddform } ) => {
    const [title, setTitle] = useState('')
    const [items, setItems] = useState('')
    const [expand, setExpand] = useState(false)
    const [updated, setUpdated] = useState(setTime)
    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault()
        if (!title) {
            alert('Please fill out note')
            return
        }
        const note = { title, items, expand, updated }
        const timeStamp = new Date().toLocaleString();
        setTitle('')
        setItems('')
        setExpand(false)
        setUpdated(timeStamp)
        // onAdd( { title, items, expand, updated })
        fetch('http://localhost:8000/notes', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(note),
        }).then(() => {
            // history.go(-1);
            // history.push('/');
            setshowaddform(!showaddform);
        });
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Title</label>
                <input type="text" value={title} placeholder="Add Note" onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Items</label>
                <input type="text" value={items} placeholder="Add Items" onChange={(e) => setItems(e.target.value)} />
            </div>
            <input type="submit" value="Save Note" className="btn btn-block" />
        </form>
    )
}

export default AddNote