import "./Example4.css";
import React, { useState } from "react";
import GridBox from "./GridBox";
import MoveableBox from "./MoveableBox";
const Example4 = () => {


const [activeItem, setActiveItem] = useState("z")


  const arr: Array<string> = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
  const [obj, setObj] = React.useState({
    a: [<span>1</span>],
    b: [<span>2</span>],
    c: [<span>3</span>],
    d: [<span>4</span>],
    e: [<span>5</span>],
    f: [<span>6</span>],
    g: [<span>7</span>],
    h: [<span>8</span>],
    i: [<span>9</span>],
  });

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
              content={obj[item as keyof object]}
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
