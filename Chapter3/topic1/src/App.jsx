import { useState } from "react";
import "./App.css";

function App() {
  const [personOne, setPersonOne] = useState("");
  const [personTwo, setPersonTwo] = useState("");
  const [isSamePerson, setIsSamePerson] = useState(false);

  const checkIsSamePerson = () => {
    if (personOne === personTwo) {
      setIsSamePerson(true);
    } else {
      setIsSamePerson(false);
    }
  };

  return (
    <>
      <div>
        <label htmlFor="personOne">Orang Pertama : </label>
        <input type="text" value={personOne} onChange={(event) => setPersonOne(event.target.value)} />
      </div>
      <div>
        <label htmlFor="personTwo">Orang kedua : </label>
        <input type="text" value={personTwo} onChange={(event) => setPersonTwo(event.target.value)} />
      </div>
      <div>
        <button type="submit" onClick={checkIsSamePerson}>Check...</button>
      </div>
      <div>
        <h2>
          {isSamePerson ? "ini adalah orang yang sama" : "ini adalah orang yang berbeda"}
        </h2>
      </div>
    </>
  );
}

export default App;
