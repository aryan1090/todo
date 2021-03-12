import React,{useEffect} from 'react'
import Task from  '../Task/Task';
import NewTask from '../Task/NewTask'

const LeftMenu = (props) => {
    const {show,selectTask,selectedTask,tasks,mode,new_title,new_note,setMode,searchValue} = props;
    useEffect(()=>{
        setMode('display');
    },[selectedTask,setMode])
    if(selectedTask===-100){
        
    }
    else if(tasks.length===0){
        return(
            <div className="place">
                <h1>Add Tasks by clicking on the addTask Button and get Started</h1>
            </div>
        )
    }

    return (
        
        <div 
        className="left-panel" 
        style={{
            display:`${show ? 'block':'none'}`,
            transition:'display 3s ease-in-out',
            borderRight:'2px solid grey'
        }}>
            {mode==='newNote' ? 
            <NewTask new_title={new_title} new_note={new_note}/>
            :
            ''
        }
            {tasks.map((task)=> task.title.toLowerCase().includes(searchValue.toLowerCase()) ? 
            <Task task={task} key={task.id} selectTask={selectTask} selected={selectedTask===task.id ? true:false}/>
            :null)}
        </div>
    )
}

export default LeftMenu;
