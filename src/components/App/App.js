import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components"

import IsInteger from "../tasks/IsInteger";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import "./App.css";

const Container = styled.div`
  margin: 10px;
`

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/isPalindrome">isPalindrome</Link>
            </li>
            <li>
              <Link to="/isInteger">isInteger</Link>
            </li>
          </ul>
        </nav>

        <Container>
          <Switch>
            <Route path="/isPalindrome">
              <Task />
            </Route>
            <Route path="/isInteger">
              <IsInteger />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Please choose task</h2>;
}

function Task() {
  return <h2>Task</h2>;
}

export default App;
