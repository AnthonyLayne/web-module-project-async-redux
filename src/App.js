import React from "react";
import "./App.css";
import RandomActivityForm from "./components/form";

function App() {
  return (
    <div>
      <h1 className="App"> Activities Randomizer </h1>
      <div>
        <RandomActivityForm />
      </div>
    </div>
  );
}

export default App;
