import Editor from "./components/editor/Editor";
import NavBar from "./components/nav/NavBar.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/" render={() => <div>Home</div>} />
          <Route exact path="/editor" render={() => <Editor />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
