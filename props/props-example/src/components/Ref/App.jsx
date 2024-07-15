import React, { useRef } from "react";

export default function App() {
  // let paragraphRef=React.useRef();
  let paragraphRef = useRef();
  let inputRef = useRef();
  const getDetails = () => {
    paragraphRef.current.classList.toggle("container");
    console.log(inputRef.current.value);
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <p className="container" ref={paragraphRef}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
        voluptas molestias autem odit labore consequuntur incidunt eligendi
        ullam animi quos commodi dicta voluptate facere modi possimus non, odio
        aliquam? Placeat.
      </p>
      <button onClick={getDetails}>Click Me</button>
      <p>{inputRef.current.value}</p>
    </div>
  );
}
