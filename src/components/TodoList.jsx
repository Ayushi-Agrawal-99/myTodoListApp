import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../utils/taskSlice";

const TodoList = ({data}) => {

    const dispatch = useDispatch();
    
    const handleRemove= ()=> {
          dispatch(deleteTask(data));
    }
    
    return(
        <div className="flex justify-between">
            <li className="p-4">{data.name }</li>
            <button className="bg bg-red-600 text-white px-4 m-2 rounded-md text-xl" 
                onClick={() => {handleRemove()}}
            >Delete</button>
        </div>
    )
}

export default TodoList;