import React, { FC } from 'react';
//import { text } from 'stream/consumers';
import './App.css';

const App: FC = () => {
  return (
    <div className="App">
     <div className="Header">
      <div className="inputcontainer">
      <input type = "text" placeholder = "Task..." />
      <input type= "number" placeholder= "Dealdline... "/>
      </div>
      <button>Add Task</button>
    </div>
    <div className="TodoList"></div>
    </div>
  );
}

export default App;
