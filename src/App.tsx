import React from 'react';
import './App.css';

function App() {
   
  const addItem = (e)=> {
    console.log(e)
  }
  
  return (
    <div className="App">
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input placeholder="enter task">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
