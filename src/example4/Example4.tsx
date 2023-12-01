import "./Example4.css";
import React, { useState } from "react";
import GridBox from "./GridBox";
import MoveableBox from "./MoveableBox";
const Example4 = () => {


const [activeItem, setActiveItem] = useState("z")


  const arr: Array<string> = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];


  const enableDropping = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {

	let id = event.currentTarget.id;
	setActiveItem(id);
  };

  return (
    <>
      {activeItem === 'z' && <MoveableBox />}
      <div id="grid">
        {arr.map((item, key) => {
          let str = item;
          return (
            <GridBox
              id={str}
              key={key}
              handleDrop={handleDrop}
              enableDropping={enableDropping}
            >
			{str === activeItem && <MoveableBox />} 
			</GridBox>
          );
        })}
      </div>
    </>
  );
};

export default Example4;
