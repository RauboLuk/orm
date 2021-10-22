import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="content">
          <Switch>
            <Route path="/signUp">
              <SignUp />
            </Route>
            <Route path="/">
              <SignIn />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
