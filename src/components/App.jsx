import React, {useState} from "react"
import Note from './Note'
import Header from './header'
import Footer from './footer'
import Input from './input'


function App(){
    const [items, setItems]= useState([])

    function addItems(notes){
        setItems(prevNotes =>{
            return[...prevNotes,notes]
        })
    }

    function deleteItems(id){
        setItems(prevNotes=> {
            return prevNotes.filter((noteItems, index)=>{
                return index !==id
            })
        })
    }

    return(
        <>
            <Header/>
            <Input onAdd={addItems}/>
            {items.map((noteItem,index)=>{
                return (
                <Note
                    title={noteItem.title}
                    content={noteItem.content}
                    key={index}
                    id={index}
                    delItems={deleteItems}
                />
                )
            })}
            <Footer/>
        </>
    )
}

export default App