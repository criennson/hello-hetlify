import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form name="contact" method="POST" data-netlify="true">
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" />
          </div>
          <div>
            <button type="submit">Send</button>
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
