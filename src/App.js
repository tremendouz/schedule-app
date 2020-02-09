import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./Calendar";
import Calendar from "./Calendar";
import EventList from "./EventList";
import AddEventButton from "./AddButton";
import Login from "./Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import { AuthProvider } from "./AuthProvider";
function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/">
            <Calendar></Calendar>
            <EventList></EventList>
            <AddEventButton></AddEventButton>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
