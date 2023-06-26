//1. Create a new React app.-ok
//2. Create a App.jsx component.-ok
//3. Create a Header.jsx component that renders a <header> element
//to show the Keeper App name in an <h1>.-ok
//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.-ok
//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.-ok
//6. Make sure that the final website is styled like the example shown here:
//https://l1pp6.csb.app/

//HINT: You will need to study the classes in teh styles.css file to appy styling.

import react from 'react'
import {createRoot} from 'react-dom/client'
import Footer from './components/footer'
import Header from './components/header'
import App from './components/App'
import Note from './components/note'
import './public/styles.css'

const rootElement=  document.getElementById('root')
const root= createRoot(rootElement)

root.render(
    <react.StrictMode>
        <App/>
        <Header/>
        <Note/>
        <Footer/>
    </react.StrictMode>
)