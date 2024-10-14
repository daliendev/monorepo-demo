import { useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('')

  const fetchMessage = () => {
    setMessage('Loading...')
    fetch(`http://localhost:8000/hello/world`)
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => {
        console.error('Error fetching message:', error)
        setMessage('Error fetching message')
      })
  }

  return (
    <>
      <h1>Monorepo inside a Gitpod Cloud Development workflow</h1>
      <p>
        This configuration demonstrates how to set up a proxy on the frontend that forwards requests to the backend. Specifically, it intercepts requests made to the /api path and proxies them to the Symfony backend.
      </p>
      <button onClick={fetchMessage}>
        Fetch Message from Symfony Backend
      </button>
      <textarea
        value={message}
        readOnly
        rows={5}
        className="message-box"
      ></textarea>
      <p>
        Something not work? Reach me at <a href="mailto:contact@dcadeau.com">contact@dcadeau.com</a>
      </p>
    </>
  )
}

export default App
