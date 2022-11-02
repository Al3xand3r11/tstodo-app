import React, { FC } from 'react';
//import { text } from 'stream/consumers';
import './App.css';

const App: FC = () => {
  return (
    <div className="App">
     <div className="Header">
      <input type = "text" placeholder = "Task..." />
      <input type= "number" placeholder= "Dealdline... "/>
      <button>Add Task</button>
    </div>
    </div>
  );
}

export default App;
