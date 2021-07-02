import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components"

import IsInteger from "../tasks/IsInteger";
import IsPolindrome from "../tasks/isPolindrome"
import FindArrayDuplicates from "../tasks/findArrayDuplicates";
import CloneDeep from "../tasks/cloneDeep";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import "./App.css";

const Container = styled.div`
  margin: 10px;
  border: 3px solid gray;
  box-shadow: 10px 5px 5px lightgray;
  padding: 15px;
`;

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
            <li>
              <Link to="/findArrayDuplicates">findArrayDuplicates</Link>
            </li>
            <li>
              <Link to="/cloneDeep">cloneDeep</Link>
            </li>
          </ul>
        </nav>

        <Container>
          <Switch>
            <Route path="/isPalindrome">
              <IsPolindrome />
            </Route>
            <Route path="/isInteger">
              <IsInteger />
            </Route>
            <Route path="/findArrayDuplicates">
              <FindArrayDuplicates />
            </Route>
            <Route path="/cloneDeep">
              <CloneDeep />
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

export default App;
