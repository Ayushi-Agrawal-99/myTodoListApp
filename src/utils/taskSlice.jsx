import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';

const todoSlice = createSlice({
    name: "task",     //name of the slice
    initialState: {
        items : [],
    },
    reducers : {
        addTask : (state, action) => {   // here it will modify our state based on the action (state is the initial state/value)
            const todo = {
                name:action.payload,
                id:nanoid()
            }
            state.items.push(todo);
        },
        
        deleteTask : (state, action) => {
            state.items = state.items.filter(item => item.id != action.payload.id);
        }
    }
})

export const {addTask, deleteTask} = todoSlice.actions;
export default todoSlice.reducer;