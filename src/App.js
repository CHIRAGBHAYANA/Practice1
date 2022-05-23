import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import LeaderBoard from "./Component/LeaderBoard";
import "h8k-components";
import StatusBar from "./Component/StatusBar";

const title = "SPA - LeaderBoard";

function App() {
  return (
    <div className="App">
      <Router>
        <h8k-navbar header={title}></h8k-navbar>
        <StatusBar />

        <Route exact path="/">
          <LeaderBoard title="default" />
        </Route>

        <Route exact path="/rank">
          <LeaderBoard title="rank" />
        </Route>

        <Route exact path="/name">
          <LeaderBoard title="name" />
        </Route>

        <Route exact path="/points">
          <LeaderBoard title="points" />
        </Route>

        <Route exact path="/age">
          <LeaderBoard title="age" />
        </Route>
      </Router>
    </div>
  );
}

export default App;
