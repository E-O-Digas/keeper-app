import React from "react"
import Note from './Note'
import Header from './header'
import Footer from './footer'
import notes from '../notes'


function App(){
    return(
        <>
            <Header/>
            {notes.map(noteItems => 
                <Note 
                    key={noteItems.key} 
                    title={noteItems.title} 
                    content={noteItems.content}
                />
            )}
            <Footer/>
        </>
    )
}

export default App