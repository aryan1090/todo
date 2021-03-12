import React from 'react';
import { FaBars,FaPlus,FaTrash,FaEdit } from "react-icons/fa";

export const TopMenu = ({panelHandler,addTask,deleteTask,selectedTask,editTask,searchValue,setSearch}) => {
    return (
        <div className="d-flex justify-content-between align-items-center bg-dark">
            <div className="burger-icon" onClick={panelHandler}>
                <button className="btn btn-secondary"><FaBars/></button>
            </div>
            <div className="buttons d-flex justify-content-between align-items-center p-2 col-md-5">
                <button className="btn btn-secondary add align-items-center" onClick={addTask}><FaPlus/>  Add Note</button>
                <button className="btn btn-danger delete" onClick={()=>deleteTask(selectedTask)}><FaTrash/>  Delete</button>
                <button className="btn btn-primary edit" onClick={()=>editTask(selectedTask)}><FaEdit/>  Edit</button>
            </div>
            <div className="mr-2">
                <input type="text" placeholder={`Search`} value={searchValue} onChange={(e)=>setSearch(e.target.value)}/>
            </div>
        </div>
    )
}
