import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/HomePage/Home";
import Footer from "./components/pages/Footer.js/Footer";
import News from "./components/pages/NewsPage/News";
import Login from "./components/Form/login";

/* import Register from "./components/Form/Form"; */

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/news" component={News} />
          {/* <Route path="/register" component={Register} /> */}
          <Route path="/login" component={Login} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
