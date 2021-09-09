import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./layout";
import Home from "./Pages/home";
import Archive from "./Pages/archive";
import Delete from "./Pages/delete";
import "./assets/css/layout.css";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/archive" exact component={Archive} />
          <Route path="/delete" exact component={Delete} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
