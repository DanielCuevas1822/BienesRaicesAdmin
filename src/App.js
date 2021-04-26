import { Switch, Route } from "react-router";

import Login from "./views/Login";
import Home from "./views/Home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
