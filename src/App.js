import Editor from "./components/editor/Editor";
import NavBar from "./components/nav/NavBar.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Health from "./components/blog-display/Health";
import Home from "./components/home/Home";
function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/editor" render={() => <Editor />} />
          <Route exact path="/health/:title" render={() => <Health />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
