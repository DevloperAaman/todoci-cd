import React, { useState,useEffect } from "react";
import List from "./list";
import Button from "../component/Button";



const TodoList = (i) => {
const todos = JSON.parse(window.localStorage.getItem('aman')||"[]");
    const [taskList, setTaskList] = useState(todos);
    const [taskname, setTaskName] = useState("");
  
    const handleChange = (e) => {
        setTaskName(e.target.value);
    };

    

   
    const handleclick = () => {
 
      if (taskname == "") return alert ("Please add a task ");
        const list = {
            id: Math.floor(Math.random() * 10000),
            task: taskname,
            status: "false",
        };
        setTaskList([...taskList, list]);
        setTaskName("");
        
    };
    const Status =(d)=>{
    taskList.map((item)=> {
        if(item?.id == d.target.id){item.Status= true}
    })
    setTaskList([...taskList,]);
    };
 
    const removelist =(e) => {
        // let newtasklist = [...taskList];
        // newtasklist.splice(key,1);
        // setTaskList([...newtasklist])
        const abc = taskList.filter((item)=>{if(item.id != e.target.value) return taskList})
        setTaskList(abc);
    }
    useEffect(() => {
      localStorage.setItem("aman", JSON.stringify(taskList));
    }, [taskList ]);


    return (
        <div className="w-full">
            <div className="m-4 ml-[31%]">
                <label for="taskName">Task Name: </label>
                <input type="text" value={taskname} onChange={handleChange} className="border-4 border-indigo-500/100 mr-2 " />
                <Button name="Add" styles="" onClick={handleclick} />
            </div>
            <List taskList={taskList}  key={i} index={i}  deleteitem={removelist}  Comitem={Status}/>
        </div>
    );
};
export default TodoList;