import React from "react";

const Color = (props) => {
  const { color, setColor } = props;
  return (
    <div>
      <ul className="colors ps-0">
        <li
          className="bg-success"
          value={"green"}
          onClick={() => {
            setColor("green");
            console.log(color);
          }}
        ></li>
        <li
          className="bg-dark"
          value={"black"}
          onClick={() => {
            setColor("black");
            console.log(color);
          }}
        ></li>
        <li
          className="bg-white"
          value={"white"}
          onClick={() => {
            setColor("white");
            console.log(color);
          }}
        ></li>
        <li
          className="bg-brown"
          value={"brown"}
          onClick={() => {
            setColor("brown");
            console.log(color);
          }}
        ></li>
        <li
          className="bg-danger"
          value={"red"}
          onClick={() => {
            setColor("red");
            console.log(color);
          }}
        ></li>
        <button onClick={()=>setColor("all")}>all</button>
     
      </ul>
    </div>
  );
};

export default Color;
