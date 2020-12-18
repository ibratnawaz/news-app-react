import "./App.css";
import Header from "./components/header/Header";
import Homepage from "./components/homepage/Homepage";
import Footer from "./components/footer/Footer";
import _404 from "./components/404/404";
import About from "./components/about/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <About />
        </Route>
        <Route path="*">
          <_404 />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
