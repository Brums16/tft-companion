import logo from './logo.svg';
import './App.css';
import { useState } from 'react';





function App() {

  const [message, setMessage] = useState("")

const callApi = async () => {
  const response  = await fetch("http://127.0.0.1:8000/")
  const data = await response.json()
  console.log(data, data)
  setMessage(data.message)
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <button onClick={() => callApi()}>Get message</button>
        <p>{message}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
