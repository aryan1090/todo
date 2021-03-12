import React from 'react'

const Task = (props) => {
    const {id,title,time,note} = props.task;
    const {selectTask,selected} = props;
    console.log(props);
    const col = `${selected ? 'yellow':'grey'}`; 
    return (
        <div className="task" key={id} onClick={()=>selectTask(id)} style={{backgroundColor:`${col}`}}>
            <div className="details p-2">
                <h4><b>{title}</b></h4>
                <span>{time}</span> <span className="text-muted">{note.substring(0,15)}...</span> 
            </div>
        </div>
    )
}

export default Task
