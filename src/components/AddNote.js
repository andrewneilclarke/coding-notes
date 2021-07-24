import { useState } from 'react'

const AddNote = ( { onAdd } ) => {
    const [title, setTitle] = useState('')
    const [items, setItems] = useState('')
    const [expand, setExpand] = useState(false)
    const [updated, setUpdated] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if (!title) {
            alert('Please fill out note')
            return
        }
        const now = new Date();
        const nowTime = now.toLocaleString();
        onAdd( { title, items, expand, updated })
        setTitle('')
        setItems('')
        setExpand('')
        setUpdated(nowTime)
        console.log(title, items, expand, nowTime)
        
    }

    return (
        <form className="add-form note" onSubmit={onSubmit}>
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