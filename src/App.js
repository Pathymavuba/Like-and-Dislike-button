import { useState } from "react"
import Header from "./Component/Header";
import Tasks from "./Component/Tasks";
function App() {
  const [tasks,setTasks]= useState(
    [
        {
            id:1,
            text:'Doctors apointement',
            day:'Feb 5th at 2:30pm',
            reminder:true,
        },
        {
            id:2,
            text:'Meeting at school',
            day:'Feb 6th at 1:30pm',
            reminder:true,
        },
        {
            id:3,
            text:'Food shopping',
            day:'Feb 5th at 2:30pm',
            reminder:false,
        },
    ]
)
  
return (
    <div className="container">
        <Header  />
        <Tasks tasks={tasks}/>
    </div>
    
  );
}

export default App;
