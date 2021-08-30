import { useState } from "react";

const App = () => {
  let [color, setColor] = useState("rgb(0, 0, 0)");
  return (
    <div
      onClick={() => {
        let numOne = Math.trunc(Math.random() * 255);
        let numTwo = Math.trunc(Math.random() * 255);
        let numThree = Math.trunc(Math.random() * 255);

        setColor(`rgb(${numOne}, ${numTwo}, ${numThree})`);
      }}
      className="grid place-content-center text-center cursor-pointer"
      style={{
        backgroundColor: color,
        width: "100%",
        height: "100vh",
        color: "#fff",
      }}
    >
      <h1 className="text-3xl font-bold">
        Click On The Background to Change Color{" "}
      </h1>
      <p className="text-2xl font-bold my-14">{color}</p>
    </div>
  );
};
export default App;
