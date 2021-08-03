import React from "react";
import { render } from "react-dom";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  NavLink
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Nav />
      <div className="content">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
      <footer></footer>
    </Router>
  );
}

const root = document.getElementById("root");
render(<App />, root);

function Nav() {
  return (
    <header>
      <h1 className="logo">
        <i className="fas fa-carrot"></i>
        <span>Fruityvice</span>
      </h1>
      <nav>
        <ul>
          <li>
            <NavLink exact activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/users">
              Users
            </NavLink>
          </li>
          <li>
            <button className="button icon-button" title="Profile">
              <i className="fas fa-user"></i>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Home() {
  return (
    <div className="dashboard">
      <div className="quick-action">
        <ul>
          <li>
            <button className="button icon-button ghost-button" title="Profile">
              <i className="fas fa-cog"></i>
            </button>
          </li>
          <li>
            <button className="button icon-button ghost-button" title="Profile">
              <i className="fas fa-question"></i>
            </button>
          </li>
          <li>
            <button className="button icon-button ghost-button" title="Profile">
              <i className="fas fa-calendar"></i>
            </button>
          </li>
          <li>
            <button className="button icon-button ghost-button" title="Profile">
              <i className="fas fa-history"></i>
            </button>
          </li>
          <li>
            <button className="button icon-button ghost-button" title="Profile">
              <i className="fas fa-search"></i>
            </button>
          </li>
        </ul>
      </div>
      <div className="cards">
        <div className="card">
          <h3 className="card-title">Lorem ipsum</h3>
        </div>
      </div>
      <div className="sidebar"></div>
    </div>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function NoMatch() {
  return <h2>404 Page not found </h2>;
}
