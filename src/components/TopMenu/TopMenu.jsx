import React from 'react'

export const TopMenu = ({panelHandler,addTask,deleteTask,selectedTask,editTask}) => {
    return (
        <div className="d-flex justify-content-between align-items-center bg-dark">
            <div className="burger-icon" onClick={panelHandler}>
                <button className="btn btn-secondary">icon</button>
            </div>
            <div className="buttons d-flex justify-content-between align-items-center p-2 col-md-5">
                <button className="btn btn-secondary add" onClick={addTask}>Add Note</button>
                <button className="btn btn-danger delete" onClick={()=>deleteTask(selectedTask)}>Delete</button>
                <button className="btn btn-primary edit" onClick={()=>editTask(selectedTask)}>Edit</button>
            </div>
            <div className="mr-2">
                <input type="text" placeholder="Search"/>
            </div>
        </div>
    )
}
