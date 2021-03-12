import React,{useState} from 'react'
import './App.css';

import {TopMenu} from './components/TopMenu/TopMenu';
import LeftMenu from './components/LeftMenu/LeftMenu';
import RightMenu from './components/RightMenu/RightMenu'



function App() {

  const arr = [
    {
        id:0,
        title:"Trial",
        time:"9:23PM",
        note:"This is a note kasdlajskdlas aksjdlasjdkla"
    },
    {
      id:1,
      title:"Trial",
      time:"9:23PM",
      note:"This is a note kasdlajskdlas aksjdlasjdkla"
    },
    {
    id:2,
    title:"Trial",
    time:"9:23PM",
    note:"This is a note kasdlajskdlas aksjdlasjdkla"
    },
    {
      id:3,
      title:"Trial",
      time:"9:23PM",
      note:"This is a note kasdlajskdlas aksjdlasjdkla"
    }
];

  const [tasks ,setTasks] = useState(arr);
  console.log(tasks);
  const [show,setShow] = useState(true);
  const [task_id,setTask] = useState(0);
  const [mode,setMode] = useState('display');

  const[new_title,setTitle] = useState('Dummy title');
  const[new_note,setNote] = useState('Dummy Note');
  function panelHandler(){
    setShow(!show);
  } 

  function selectTask(id){
    setTask(id);
  }
  function addTask(){
    setMode('newNote');
  }

  function addTaskToList(){

    var new_obj = {
      id:(tasks.length*Math.random())+11,
      title:`${new_title}`,
      time:'9:20PM',
      note:`${new_note}`
    }
    
    // tasks.add(new_obj);
    setTasks([...tasks,new_obj]);
    setMode('display');
    setTitle('Dummy Title');
    setNote('Dummy Note');
    setTask(new_obj.id);
  }
  function deleteTask(id){
    
    setTasks(tasks.filter((task)=>task.id!==id));
    if(tasks.length==0){
      
    }
    else{
      setTask(tasks[0].id);
    }
  }
  function editTask(id){
    const change = tasks.filter((task)=>id==task.id);
    setTitle(change[0].title);
    setNote(change[0].note);
    setMode('newNote');
    // const new_arr = tasks.filter((task)=>task.id!==id);
    // setTasks([new_arr]);
  }
  return (
    <div className="App">
      <TopMenu 
      panelHandler={panelHandler} 
      addTask={addTask}
      deleteTask={deleteTask}
      selectedTask={task_id}
      editTask={editTask}/>

      <div className="d-flex">
      <LeftMenu
      mode={mode}
      tasks={tasks}
      show={show} 
      new_title={new_title}
      new_note={new_note}
      selectedTask={task_id} 
      selectTask={selectTask}
      setMode={setMode}/>

      <RightMenu 
      task={tasks.filter((task)=>task.id==task_id)[0]} 
      mode={mode}
      new_title={new_title}
      new_note={new_note}
      setTitle = {setTitle}
      setNote={setNote} 
      addTaskToList={addTaskToList}
      />
      </div>
    </div>
  );
}

export default App;
