import React from 'react'

const NewTask = ({new_title,new_note}) => {

    const d = new Date();
    const hour = d.getHours();
    const min =d.getMinutes();
    return (
        <div className="task" style={{backgroundColor:'grey'}}>
        <div className="details p-2">
            <h4><b>{new_title}</b></h4>
            <span>{`${hour}:${min} PM`}</span> <span className="text-muted">{new_note.substring(0,15)}...</span> 
        </div>
    </div>
    )
}

export default NewTask
