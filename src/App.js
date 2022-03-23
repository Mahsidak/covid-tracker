import React from "react";
import Header from "./components/header/header.component";
import Data from "./components/data/data.component";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Data />
      </div>
    );
  }
}

export default App;
