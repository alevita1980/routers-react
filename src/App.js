import './App.css';
import Tarea01 from './components/Tarea01';
import Tarea02 from './components/Tarea02';
import Tarea03 from './components/Tarea03';
import Tarea04 from './components/Tarea04';

import { useState } from 'react'


function App() {
  const [authorized, setAuthorized] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        {/* <Tarea01/> */}
        {/* <Tarea02 /> */}
        {/* <Tarea03 /> */}
        {/* <button onClick={()=>setAuthorized(!authorized)}>{authorized ? "Desautorizame" : "Autorizame"}</button> */}
        {/* <Tarea04 authorized={authorized}/> */}
      </header>
    </div>
  );
}

export default App;
