import './App.css';
import {useEffect, useState } from 'react'


function App() {

  const [joke, setJoke] = useState([])

  useEffect(() => {
    fetch('https://www.tronalddump.io/random/quote/')
    .then(response => response.json())
    .then(result => {
      console.log(result.value)
      setJoke(result.value)
    })
  }, [])

  return (
    <div className="App">
      <h1>Hejhej</h1>
      {!joke.length ? null : <div>{joke}</div>}
    </div>
  );
}

export default App;
