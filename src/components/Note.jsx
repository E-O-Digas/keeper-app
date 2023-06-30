
function Note(props){
    return(
        <div className='note'>    
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button className="button">Delet</button>        
        </div>
    )
}

export default Note
