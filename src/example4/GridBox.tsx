import "./Example4.css";
import React from "react";

const GridBox = ({ id,handleDrop, enableDropping, content, children }: any) => {
  return (
    <div id={id} key={id} onDrop={handleDrop} onDragOver={enableDropping}>
      {/* {content.map( (item:any, keyIndex:number) => {
		// console.log(item)
		return <div key={`inner${keyIndex}`}>{item}</div>
	  })} */}
	  {children}
    </div>
  );
};

export default GridBox;
