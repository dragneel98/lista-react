import  { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import GretingStyle from './components/pure/gretingStyle';
import TaskComponent from './components/pure/task';
import TaskListComponent from './components/container/task_list';
import Father from './components/container/father';
import ContactList from './components/container/contact_list';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <GretingStyle name="gon"></GretingStyle> */}
      {/* <Father></Father> */}
      <ContactList></ContactList>
      {/* <TaskListComponent></TaskListComponent> */}

      
    </div>
  )
}

export default App
