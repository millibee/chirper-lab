import React, { useState } from "react";
import Timeline from "./components/Timeline";

const App = () => {
  //always 2 things in the useState hook, 1. name of state, 2. name of function that sets state
  const [newUsername, setUsername] = useState("");
  const [newMessage, setMessage] = useState("");
  const [chirps, setChirps] = useState([
    { userName: "Bob", msg: "Excited fgor the weekend" },
    { userName: "gryffindorfan2021", msg: "Wingardium leviosa" },
    { userName: "joe-beidne", msg: "Im the prez" },
  ]);

  let submitChirp = (e) => {
    //   e.preventDefault()
    let newChirp = {
      userName: newUsername,
      msg: newMessage,
    };

    //resetting state chirps array and adding the newChirp from input
    setChirps([...chirps, newChirp]);
  };

  return (
    <>
      <div id="create-chirp=div" className="m-5">
        <h1>Chirpr</h1>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder={`What's on your mind?`}
          onChange={(e) => setMessage(e.target.value)}
        ></input>
        <button className="btn btn-primary" onClick={submitChirp}>
          Submit Chirp
        </button>
      </div>
      { chirps.map((chirp) =><Timeline chirp={chirp}/> )}
    </>
  );
};

export default App;
