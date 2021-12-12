import './App.css';
import { useState, useEffect } from 'react'

function App() {

  const [message, setMsg] = useState([])


  function getData() {

    fetch("/.netlify/functions/node-fetch")
      .then((x) => x.json())
      .then(({ msg }) => {
        console.log(msg.data[0].name);
        return setMsg(`${msg.data[0].id} ${msg.data[0].name}`)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="App">
      <h2>Serverless</h2>
      <p>{message
      }</p>

    </div>
  );
}

export default App;
