import React from 'react'

const RightMenu = (props) => {
    console.log(props);
    const {mode} = props;
    if(mode==='newNote' && props.task===undefined){
        
    }
    else if(props.task===undefined){
        return(<div className="right-panel" style={{backgroundColor:'#FAFAF8',width:'100%'}}></div>);
    }else{
        var {title,id,note,time} = props.task;
    }
    const {setTitle,setNote,new_title,new_note,addTaskToList,edit,editAdd} = props;

    if(mode==='display'){
    return (
        <div className="right-panel" style={{backgroundColor:'#FAFAF8',width:'100%'}}>
            <div className="details p-3">
            <p>{title}</p>
            <p>{id}</p>
            <p>{note}</p>
            <p>{time}</p>
            </div>
        </div>
    )
    }
    else if(mode==='newNote'){
        return(
            <>
        <div className="right-panel p-2" style={{backgroundColor:'#FAFAF8',width:'100%'}}>
            <input  className="p-2 col-md-4 my-3"type='text' placeholder="Dummy Title" value ={new_title} onChange={(e)=>setTitle(e.target.value)}/><br></br>
            <input className="p-2 col-md-4 my-3" type='text' placeholder='Dummy Note' value ={new_note} onChange={(e)=>setNote(e.target.value)}/><br></br>
            <button className="p-2 my-3 btn btn-success"onClick={edit? editAdd : addTaskToList}>Save</button>
        </div>
        
        </>
        )
    }
}

export default RightMenu;
