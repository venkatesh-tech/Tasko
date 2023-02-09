import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import TaskoBoard from "./Board/TaskoBoard";
import Home from "./Home/Home";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/:boardID" component={TaskoBoard} />
      </div>
    </Router>
  );
};

export default AppRouter;
