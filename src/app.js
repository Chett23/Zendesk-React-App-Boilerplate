import React, {useEffect, useState} from 'react';
import client from './api/zafClient';

function App() {
  const [requester, setRequester] = useState({})

  useEffect(() => {
    client.get('ticket').then(data => {
      setRequester(data.ticket.requester)
    });
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p className="Requester-name">Requesters name is {requester.name}.</p>
      </header>
    </div>
  );
}


export default App;
