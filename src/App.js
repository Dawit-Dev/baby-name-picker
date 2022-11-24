import React from "react";
import names from "./babyNamesData.json";
import { useState } from "react";
import "./App.css";
import DisplayNames from "./DisplayNames";

const filterNames = (inputName) => {
  return names.filter((babyName) => {
    return babyName.name.toLowerCase().includes(inputName.toLowerCase());
  });
};

const App = () => {
  const [arrayOfNames, setArrayOfNames] = useState(names);
  return (
    <div className="App">
      <h1>Baby Names Picker</h1>
      <form className="no-submit">
        <input
          type="text"
          placeholder="Please enter your search here"
          className="no-submit"
          onChange={(e) => {
            setArrayOfNames(filterNames(e.target.value));
          }}
        ></input>
      </form>
      <div className="App-body">
        <DisplayNames names={arrayOfNames} />
      </div>
    </div>
  );
};

export default App;
