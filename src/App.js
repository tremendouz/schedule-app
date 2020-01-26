import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./Calendar";
import Calendar from "./Calendar";
import EventList from "./EventList";
import AddEventButton from "./AddButton";

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  return (
    <div>
      <Calendar></Calendar>
      <EventList></EventList>
      <AddEventButton></AddEventButton>
    </div>
  );
}

export default App;
