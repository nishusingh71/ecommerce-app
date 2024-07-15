import { Button } from "bootstrap";

export default function ChildToParent(props) {
  // console.log(props);
  // let carName = "Tata";
  // props.childToParent(carName);
  // function transferRandomNumber() {
  //   props.childToParent(Math.random());
  // }
  return (
    <div>
      {/* <h1>ChildComponent:{props.ComponentName}</h1>
      <h1>firstName:{props.firstName}</h1> */}
      <h1>ChildComponent</h1>
      {/* automatically run when component loads */}
      {/* <button onClick={transferRandomNumber()}>transferRandomNumber</button> */}
      {/* <button onClick={transferRandomNumber}>transferRandomNumber</button> */}
      {/* <button onClick={() => transferRandomNumber("Hello")}>
        transferRandomNumber
      </button> */}
      
       { props.children};
      
    </div>
  );
}
