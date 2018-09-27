import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import "./assets/css/app.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header id="header">
          <div className="bg-dark">
            <div className="container">
              <nav className="navbar navbar-expand-lg navbar-dark">
                <Link className="nav-brand d-flex align-items-center" to="/">
                  <img src={logo} className="App-logo" alt="logo" />
                  <span className="react">React</span>
                </Link>
                <div className="collapse navbar-collapse align-self-stretch align-items-stretch">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item d-flex align-items-center"><a className="nav-link" href="#docs">Docs</a></li>
                    <li className="nav-item d-flex align-items-center"><a className="nav-link" href="#comunity">Comunity</a></li>
                    <li className="nav-item d-flex align-items-center"><a className="nav-link" href="#blogs">Blogs</a></li>
                    <li className="nav-item d-flex align-items-center"><a className="nav-link" href="#tuts">Tutorials</a></li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </header>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React 1</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

/*  <div className="App">
<div className="container">
  <nav className="navbar navbar-expand-lg">
    <Link className="nav-brand d-flex flex-row link" to="/">
      <div className="d-flex align-items-center">
        <img src={logo} className="App-logo" alt="logo" />
        <span className="react align-self-center">React</span>
      </div>
    </Link>
  </nav>
</div>
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <h1 className="App-title">Welcome to React 1</h1>
</header>
<p className="App-intro">
  To get started, edit <code>src/App.js</code> and save to reload.
</p>
</div>*/