import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Laborator1 from "./Components/Laborator1";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import * as classes from "prop-types/prop-types";
import Patients from "./Components/Patients.js";
import Medication from "./Components/Medication";
import Home from "./Components/Home";
import Details from "./Components/Details";


function App() {
  return (
      <Router>
          <div className="App container">
              <AppBar position="fixed">
                  <Toolbar>
                      <Typography variant="h6" className={classes.title}>
                        <Link to="/lab1" className="navbar-link">Lab 1</Link>
                      </Typography>
                      <Typography variant="h6" className={classes.title}>
                          <Link to="/patients" className="navbar-link">Patients</Link>
                      </Typography>
                      <Typography variant="h6" className={classes.title}>
                          <Link to="/medication" className="navbar-link">Medication</Link>
                      </Typography>
                  </Toolbar>
              </AppBar>
              <div className={"body-wrapper"}>
                  <Route path="/" component={Home} />
                  <Route path="/lab1" component={Laborator1}/>
                  <Route path="/patients" component={Patients} />
                  <Route path="/medication" component={Medication} />
                  <Route path="/Details/:id" component={Details} />
              </div>
          </div>
      </Router>
  );
}

export default App;
