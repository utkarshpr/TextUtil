import "./App.css";
import Navbar, { btc, mys } from "./components/navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TextForm from "./components/TextForm";
function App() {
  console.log(btc);
  console.log(mys);
  return (
    <>
      <Router>
        <Navbar />
        <div className="App">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
