import React, { useState } from 'react';
// import './Style.css'; // Assuming CSS is saved as TaskForm.css

export default function TaskForm() {
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [category, setCategory] = useState('General');

    return (
        <form className='task-form'>
            <input
                type='text'
                placeholder='Enter your task'
                required
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />

            <div className='btns'>
                <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                >
                    <option value='Medium'>Medium</option>
                    <option value='Low'>Low</option>
                    <option value='High'>High</option>
                </select>

                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value='General'>General</option>
                    <option value='Work'>Work</option>
                    <option value='Personal'>Personal</option>
                </select>
            </div>

            <span>
                <button type='submit'>Add Task</button>
            </span>
        </form>
    );
}




// import React,{useState} from 'react'

// export default function TaskForm() {
//     const [task,setTask]  = useState('');
//     const [priority, setPriority] = useState('Medium');
//     const [category, setCategory] = useState('General')
//   return (
//     <form className='task-form'>
//         <input type='text' 
//         placeholder='Enter your task'  
//         required
//         value={task} 
//         onChange={(e) => setTask(e.target.value)}/>

//         <span>
//             <button>Add button</button>
//         </span>

//         <div className='btns'>
//             <select value={priority} onChange={(e) => setPriority(e.target.value)}>
//                 <option> Medium</option>
//                 <option>Low</option>
//                 <option>High</option>
//             </select>

//             <select value={category} onChange={(e) => setCategory(e.target.value)}>
//                 <option> General</option>
//                 <option>Work</option>
//                 <option>Personal</option>
//             </select>
//         </div>
//     </form>
//   )
// }


