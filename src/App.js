import React from 'react';
import './App.css';
import Card from "./components/img-card";

function App() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand" href="/">Clicky Game</a>
      </nav>
      <header className="header">
        <h1>It's time for Clicky Game!</h1>
        <h2>Click on an image to earn points, but don't click on any more than once!</h2>
      </header>
      <main className="container">
        <Card />
      </main>
    </React.Fragment>
  );
}

export default App;
