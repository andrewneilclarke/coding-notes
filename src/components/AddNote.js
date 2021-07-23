import { useState } from 'react'

const AddNote = ( { onAdd } ) => {
    const [title, setTitle] = useState('')
    const [item1, setItem1] = useState('')
    const [item2, setItem2] = useState('')
    const [item3, setItem3] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if (!title) {
            alert('Please fill out note title')
            return
        }
        onAdd( { title, item1, item2, item3 })
        setTitle('')
        setItem1('')
        setItem2('')
        setItem3('')
    }

    return (
        <form className="add-form note" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Title</label>
                <input type="text" value={title} placeholder="Add Note" onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Item 1</label>
                <input type="text" value={item1} placeholder="Add Item 1" onChange={(e) => setItem1(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Item 2</label>
                <input type="text" value={item2} placeholder="Add Item 2" onChange={(e) => setItem2(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Item 3</label>
                <input type="text" value={item3} placeholder="Add Item 3" onChange={(e) => setItem3(e.target.value)} />
            </div>
            <input type="submit" value="Save Note" className="btn btn-block" />
        </form>
    )
}

export default AddNote