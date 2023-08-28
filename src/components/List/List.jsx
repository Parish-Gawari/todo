/* eslint-disable no-unused-vars */
import React from "react";
import { Button } from "react-bootstrap";
import styles from "./List.module.css"

const List = ({tasks,isCheckHandler,isEditingHandler,cancelHandler,itemListChangeHandler,itemListDateChangeHandler,itemSaveHandler,deleteHandler}) => {

  const delayDate = (data)=>{
    const day1 = new Date(data)
    const day2 = new Date()
    return(day1.toISOString() < day2.toISOString())
    
  }
  
  // style={delayDate(task.dueDate)}
  
 const listItems = tasks.map((task,index)=>(

        <div key={index}>
        <div className= "rounded p-3 w-sm-25" style={(!task.isDone && delayDate(task.dueDate)) ? {border: "2px solid yellow"}: {border: "2px solid aqua"}} >
          {!task.isEditing && (
            <>
            <p style={task.isDone ? {textDecoration: "line-through"}: {}}>{task.item}</p>
            <p style={task.isDone ? {textDecoration: "line-through"}: {}}>Due Date: {task.dueDate} </p>
            </>
          )}
          {task.isEditing && (
            <>
            <div className="d-flex flex-column gap-1">
            <textarea type="text" value={task.editingItem} className="p-1" onChange={(val)=>itemListChangeHandler(index,val.target.value)}/>
            <input type="date" value={task.editDate} className="p-1" onChange={(val)=>itemListDateChangeHandler(index,val.target.value)}/>
            </div>
            <div className="d-flex justify-content-center mt-2 mb-1">
            <Button variant="transparent" onClick={()=>itemSaveHandler(index)} id={styles.Save}>Save</Button>
            <Button variant="transparent" onClick={()=>cancelHandler(index)} id={styles.Cancel} >Cancel</Button>
            
            </div>
            </>
          )}
          <div className="d-flex justify-content-evenly h-25 align-items-center">
            <input type="checkbox" onClick={()=>isCheckHandler(index)} disabled={task.isDone === true}/>
            <Button variant="transparent" className="border-none" onClick={() => isEditingHandler(index)} disabled={task.isDone === true} id={styles.Edit}>Edit</Button>
            <Button variant="transparent" id={styles.delete} onClick={()=>deleteHandler(index)}>Delete</Button>
          </div>
        </div>
        {(!task.isDone && delayDate(task.dueDate)) && (
          <>
          <p className="text-center text-danger" style={{fontSize: "12px"}}>*Due Day Has Been Passed</p>
          </>
        )}
        </div>
       
  ));
  return (
    <>
      <div className="container-fluid d-flex flex-column gap-2 flex-wrap justify-content-center">
        {listItems}    
      </div>
    </>
  );
};

export default List;
