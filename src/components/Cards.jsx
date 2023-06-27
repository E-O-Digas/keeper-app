Notes.map(foundNotes => 
    <Cards 
        key={foundNotes.key} 
        title={foundNotes.title} 
        content={foundNotes.content}
    />)

function Cards(){
    return (
        <div className="note">
            <h1 className="note">{title}</h1>
            <p className="note">{content}</p>
        </div>
    )
}

export default Cards