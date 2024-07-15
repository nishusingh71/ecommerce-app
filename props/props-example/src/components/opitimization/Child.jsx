import React, { memo } from "react";

function Child({increment}) {
  console.log("Child Component");
  return (
    <div>
      {/* <p>Counter:{counter}</p> */}
      <button onClick={increment}>Increment</button>
    </div>
  );
}
export default memo(Child);
