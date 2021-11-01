import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import Chat from './Components/Chat';

function App() {
  return (
    <div className="app">
      <h1>Build in progress</h1>

      <div className="appBody">
        {/*sidebar*/}
        <Sidebar />
        {/*chat box*/}
        <Chat />
      </div>
    </div>
  );
}

export default App;

