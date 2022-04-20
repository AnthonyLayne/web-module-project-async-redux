import React from "react";
import "./App.css";
import RandomActivityForm from "./components/form";
import RandomList from "./components/activity";

function App() {
  return (
    <div>
      <h1 className="App"> Activities Randomizer </h1>
      <div>
        <RandomList />
        <RandomActivityForm />
      </div>
    </div>
  );
}

export default App;
