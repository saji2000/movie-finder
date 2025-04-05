import React, { useState } from "react";

const Practice = (props) => {
  const [number, setNumber] = useState(1);
  const [myInput, setMyInput] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    alert(`Submitted ${number}`);
  };

  const students = ["Kim", "Brian", "Muhammad", "Austin"];

  return (
    <div>
      <form onSubmit={submitForm}>
        <p>This is grade {props.grade}</p>
        <p>{number}</p>
        <button type="button" onClick={() => setNumber(number + 1)}>
          +
        </button>
        <button type="button" onClick={() => setNumber(number - 1)}>
          -
        </button>
        <input
          type="text"
          value={myInput}
          onChange={(e) => setMyInput(e.target.value)}
        ></input>
        <button type="submit">Submit</button>
      </form>
      <div>
        {students.map((student, index) => (
          <p key={index}>{student}</p>
        ))}
      </div>
    </div>
  );
};

export default Practice;
