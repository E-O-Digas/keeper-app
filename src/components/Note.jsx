
function Note(props){

    function handleClick(){
        props.delItems(props.id)
    }

    return(
        <div className='note'>    
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick} className="button">Delete</button>        
        </div>
    )
}

export default Note
