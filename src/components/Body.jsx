import React, { useContext, useState } from "react";
import bgImage from "../assets/bg-desktop-light.jpg";
import darkImage from "../assets/bg-desktop-dark.jpg";
import moonImage from "../assets/icon-moon.svg";
import sunImage from "../assets/icon-sun.svg";
import {useDispatch, useSelector} from "react-redux";
import { addTask } from "../utils/taskSlice";
import TodoList from "./TodoList";
import ThemeContext from "../context/ThemeContext";

const Body = () => {

    const [task, setTask] = useState("");

    const {darkMode, setDarkMode} = useContext(ThemeContext);

    const imagePath = darkMode ? darkImage : bgImage;
    const icon = darkMode ? sunImage : moonImage;

    const dispatch = useDispatch();

    // to write the data
    const addTaskHandler = () => {
        dispatch(addTask(task));
        setTask("");
    }
    // to read the data
    const taskItem = useSelector ((store) => store.task.items);

    return (
        <> 
        <div className={darkMode ? "dark" : ""}>
            <img className="w-full absolute" src={imagePath} alt="bg-img" ></img>
            <img className = "absolute cursor-pointer top-10 right-1/3" src={icon} 
                onClick={() => {setDarkMode(!darkMode)}}
            ></img>
            <h1 className="absolute left-1/3 top-10 text-4xl font-bold text-white">To Do</h1>
        </div>
        <input type="text" placeholder="Add task here..." className={darkMode ? "relative top-24 m-2 p-5 w-1/3 left-1/3 rounded-lg bg bg-black text-white": "relative top-24 m-2 p-4 w-1/3 left-1/3 rounded-lg"}
            value={task} 
            onChange={(e)=>{setTask(e.target.value)}}
        ></input>

        <button className="relative top-24 left-[450px] py-2 px-8 text-xl bg bg-blue-800 text-white rounded-lg "
            onClick={() => {addTaskHandler()}}
        >Add</button> 

        <div className= {darkMode ? "absolute w-1/3 bg bg-black text-white left-[575px] rounded-md top-52" : "absolute w-1/3 bg bg-white left-[575px] rounded-md top-52"}>
            {
                taskItem.map((t) => (
                   <TodoList key = {t.id} data = {t}/>
                ))
            }
        </div>
        
       
        </>


    )
}

export default Body;