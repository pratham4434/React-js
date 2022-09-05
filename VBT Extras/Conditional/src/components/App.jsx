import React, { useState } from "react";

function App() {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");

  const [headingText, setHeading] = useState("");

  function handleChange1(event) {
    console.log(event.target.value);
    setFName(event.target.value);
    
  }
  function handleChange2(event) {
    setLName(event.target.value);
    
  }

  function handleClick(event) {
    setHeading(fname +" "+ lname);

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange1}
          type="text"
          placeholder="First name?"
          value={fname}
        />
        <input
          onChange={handleChange2}
          type="text"
          placeholder="Last name?"
          value={lname}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
