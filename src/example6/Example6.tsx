import "./Example6.css";
import { useState, useRef } from "react";
function Example6() {
  const arr = [1, 2, 3, 4, 5, 6];
  const [isDragging, setIsDragging] = useState(true);
  const [top, setTop] = useState({top: "10px"});
  const table = useRef<HTMLTableElement>(null)

  const startDrag = (e: Object) => {
    setIsDragging(true);
	setTopValue(e)
  };
  const stopDrag = (e: Object) => {
    setIsDragging(false);
  };
  type test = {
	clientY: Number,
	screenY: Number
  }
  const drag = (e: Object) => {
    if (!isDragging) return;
	setTopValue(e)
  };

  const setTopValue = (e: Object) => {
	let offset:Number = table.current?.offsetTop || 1
	let temp = e as test;
	let { clientY } = temp;
	setTop({top: `${+clientY - +offset - 20}px`})
  }

  return (
    <>
      <table className="example6Table" ref={table}>
        <tbody>
          {arr.map((item) => {
            return (
              <tr onPointerDown={startDrag} onPointerUp={stopDrag} onPointerMove={ drag } key={item}>
                <td>{item}</td>
              </tr>
            );
          })}
          {isDragging && (
            <tr
              onPointerDown={startDrag}
              onPointerUp={stopDrag}
              key="drag-item"
			  className="drag-item"
			  style={top}
            >
              <td>dragging!</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default Example6;
