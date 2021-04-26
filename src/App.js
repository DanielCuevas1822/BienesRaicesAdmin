import { Switch, Route } from "react-router";

import Login from "./views/Login";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
