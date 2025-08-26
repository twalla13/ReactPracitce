/* eslint-disable react-hooks/rules-of-hooks */
import "./App.css";
import { useState } from "react";

//Creating a prefix notation calculator app (polish notation)
//Basic web page that takes in prefix expression and returns result

function App() {
  //To have a reuslt variable that updates whenever calculate is clicked
  //useState to allow re rendering!!!! initial value null

  const [div1Color, setDiv1Color] = useState("red");
  const [div2Color, setDiv2Color] = useState("blue");

  const handleButton = () => {
    setDiv1Color("yellow");
    setDiv2Color("pink");
  };
  return (
    <div>
      <div style={{ backgroundColor: div1Color, height: "80px" }}>
        <p>Hello</p>
      </div>
      <div style={{ backgroundColor: div2Color, height: "80px" }}>
        <p>World </p>
      </div>

      <button style={{ height: "80px" }} onClick={handleButton}>
        Change Color
      </button>
    </div>
  );
}

export default App;
