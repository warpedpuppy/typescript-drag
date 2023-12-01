import "./Example5.css";
import React, { useState } from "react";
import GridBox from "./GridBox";
const Example5 = () => {
  const [activeItem, setActiveItem] = useState("");
  const [overItem, setOverItem] = useState("");
  const [temp, setTemp] = useState(['']);

  const [arr, setArray] = useState([
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
  ]);

  const enableDropping = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
	setActiveItem("");
	setOverItem("");
	setArray(temp);
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    let temp1:Array<string> = [...arr];
    let over = e.currentTarget.id;
    let overIndex = arr.indexOf(over);
    let activeIndex = arr.indexOf(activeItem);
    temp1.splice(activeIndex, 1);
    temp1.splice(overIndex, 0, activeItem);
	setTemp(temp1);
    setOverItem(over)
  };

  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    setActiveItem(e.currentTarget.id);
  };

  return (
    <>
      <div id="grid" 
	  onDrop={handleDrop} 
	  onDragOver={enableDropping}>
        {arr.map((item, key) => {
          let str = item;
          return (
            <GridBox
              id={str}
              key={key}
			  overItem={overItem}
			  activeItem={activeItem}
              handleDragEnter={handleDragEnter}
              handleDrop={handleDrop}
              enableDropping={enableDropping}
              dragHandler={dragHandler}
            />
          );
        })}
      </div>
    </>
  );
};

export default Example5;
