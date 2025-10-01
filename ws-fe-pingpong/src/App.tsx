import { useEffect, useRef, useState } from 'react'
import './App.css'
// whenever this components get mount then it there will persistent connection that is why we will use useEffect.

function App() {
  const [socket, setSocket] = useState();
  const inputRef = useRef(null);

  function sendMessage() {
    if(!socket  ) {
      return;
    }
    const message = inputRef.current.value;
    //@ts-ignore
    socket.send(message);
  }

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080')
    setSocket(ws);

    ws.onmessage = (event) => {
      alert(event.data);
    }

    
  }, [])

// we are passing empty array because we want this effect to run only once when the component mounts and not on every re-render.
  // if we don't pass empty array then it will run on every re-render and it will create multiple connections to the server which is not desired.
  // so we pass empty array to run this effect only once when the component mounts.

  return (
    <>
      <div>
        <input ref= {inputRef} type="text" placeholder="Message..."/>
        <button onClick={sendMessage}> Send </button>
      </div>
    </>
  )
}

export default App
