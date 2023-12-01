import React from "react";

const MoveableBox = (props:any) => {


  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.currentTarget.classList.add("hide");
  };

  const handleDragEnd = (event: React.DragEvent<HTMLDivElement>) => {
    event.currentTarget.classList.remove("hide");
  };

  return (
    <div
      className="drag-box"
      draggable="true"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    />
  );
};

export default MoveableBox;
