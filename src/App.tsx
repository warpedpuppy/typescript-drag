import React, { useState } from "react";
import Example1 from "./example1/Example1";
import Example2 from "./example2/Example2";
import Example3 from "./example3/Example3";
import Example4 from "./example4/Example4";
import './App.css';

function App() {
const [page, setPage] = useState(4)
  return (
    <div>
	 <div className="menu">
		<span onClick={() => setPage(1)}>1</span>
		<span onClick={() => setPage(2)}>2</span>
		<span onClick={() => setPage(3)}>3</span>
		<span onClick={() => setPage(4)}>4</span>
	 </div>
      {page === 1 && <Example1 />}
	  {page === 2 && <Example2 />}
	  {page === 3 && <Example3 />}
	  {page === 4 && <Example4 />}
    </div>
  );
}

export default App;
