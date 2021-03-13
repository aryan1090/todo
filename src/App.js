import React,{ useState} from 'react'
import './App.css';

import {TopMenu} from './components/TopMenu/TopMenu';
import LeftMenu from './components/LeftMenu/LeftMenu';
import RightMenu from './components/RightMenu/RightMenu'



function App() {

  const arr = [
    {
        id:0,
        title:"Meeting",
        time:"9:23PM",
        note:"This is a note kasdlajskdlas aksjdlasjdkla"
    },
    {
      id:1,
      title:"Take Dog to Vet",
      time:"9:23PM",
      note:"This is a note kasdlajskdlas aksjdlasjdkla"
    },
    {
    id:2,
    title:"Meet Inder",
    time:"9:23PM",
    note:"This is a note kasdlajskdlas aksjdlasjdkla"
    },
    {
      id:3,
      title:"Do some chores",
      time:"9:23PM",
      note:"This is a note kasdlajskdlas aksjdlasjdkla"
    }
];

  const [tasks ,setTasks] = useState(arr);
  console.log(tasks);
  const [show,setShow] = useState(true);
  const [task_id,setTask] = useState(0);
  const [mode,setMode] = useState('display');
  const [edit,setedit] = useState(false);
  const[new_title,setTitle] = useState('Dummy title');
  const[new_note,setNote] = useState('Dummy Note');
  const[searchValue,setSearch] = useState('');


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
    const d = new Date();
    var new_obj = {
      id:(tasks.length*Math.random())+11,
      title:`${new_title}`,
      // eslint-disable-next-line
      time: d.getHours()+":"+`${d.getMinutes()<10 ? '0'+d.getMinutes():d.getMinutes()}`+` ${d.getHours()>12 ? 'PM':'AM' }`,
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

    // if(tasks.length==0){
    //   setTask(-100);
    // }
    // else{
    //   setTask(tasks[0].id);
    // }
    
  }
  function editTask(id){
    const change = tasks.filter((task)=>id===task.id);
    setTitle(change[0].title);
    setNote(change[0].note);
    setMode('newNote');
    setedit(true);
  }
  async function editAdd(){
    // var new_obj = {
    //   id:(tasks.length*Math.random())+11,
    //   title:`${new_title}`,
    //   time:'9:20PM',
    //   note:`${new_note}`
    // }
    
    // tasks.push(new_obj);
    setTasks(tasks.map((task)=>{
      if(task.id===task_id){
        task.title = new_title;
        task.note = new_note;
        const d = new Date();
        task.time= d.getHours() +':'+ d.getMinutes()+'PM';
      }
      return task;
      
    }));
    // setTasks(tasks.filter((task)=>task.id!==task_id));
    
    setMode('display');
    setTitle('Dummy Title');
    setNote('Dummy Note');
    setedit(false);
    // setTask(new_obj.id);
  }
  return (
    <div className="App">
      <TopMenu 
      panelHandler={panelHandler} 
      addTask={addTask}
      deleteTask={deleteTask}
      selectedTask={task_id}
      editTask={editTask}
      searchValue={searchValue}
      setSearch={setSearch}/>

      <div className="d-flex">
      <LeftMenu
      searchValue={searchValue}
      mode={mode}
      tasks={tasks}
      show={show} 
      new_title={new_title}
      new_note={new_note}
      selectedTask={task_id} 
      selectTask={selectTask}
      setMode={setMode}/>

      <RightMenu 
      selectedTask={task_id}
      task={tasks.filter((task)=>task.id===task_id)[0]} 
      mode={mode}
      new_title={new_title}
      new_note={new_note}
      setTitle = {setTitle}
      setNote={setNote} 
      addTaskToList={addTaskToList}
      edit={edit}
      editAdd={editAdd}
      />
      </div>
    </div>
  );
}

export default App;
