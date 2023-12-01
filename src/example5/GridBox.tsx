import React from "react";

const GridBox = ({
  id,
  handleDrop,
  enableDropping,
  dragHandler,
  handleDragEnter,
  activeItem,
  overItem
}: any) => {



  return (
    <div
      id={id}
      key={id}
      onDrop={handleDrop}
      onDragOver={enableDropping}
	  onDragEnter={handleDragEnter}
      className={`drag-box ${activeItem === id ? 'dragging' : ''} ${overItem === id ? "over" : "" }`}
      draggable="true"
	  onDrag={dragHandler}
    >
      {id}
    </div>
  );
};

export default GridBox;
