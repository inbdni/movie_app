import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";

function App() {
  return (
    <div>
      <HashRouter>
        <Navigation></Navigation>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/about" exact={true} component={About}/>
        <Route path="/movie/:id" exact={true} component={Detail}/>
      </HashRouter>
    </div>
  );
}

export default App;