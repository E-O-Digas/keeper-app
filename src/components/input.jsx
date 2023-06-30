import { useState } from "react"

function Input(props){
    const [notes, setNotes]= useState({
        title:'',
        content:''
    })
    
    function handleChange(e){
        const {name,value}= e.target
        setNotes(prevNotes=>{
            return{
                ...prevNotes,
                [name]:value
            }
        })
    }

    function handleClick(e){
        props.onAdd(notes)
        setNotes({
            title:'',
            content:''
        })
        e.preventDefault()
    }

    return(
        <form action="">
            <input name="title" onChange={handleChange} placeholder="Title" value={notes.title}/>
            <textarea name="content" onChange={handleChange} placeholder="Text Area" value={notes.content} rows='3'/>
            <button onClick={handleClick}
            >Add</button>
        </form>
    )
}

export default Input