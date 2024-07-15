import { Component } from "react";
import Child from "./Child";
import  Button  from "./Button";
// Parent to Child
// export default class Parent extends Component {
//   firstName = "Nishu";
//   render() {
//     return (
//       <div>
//         <h1>Parent Component</h1>
//         <Child componentName="child" firstName={this.firstName}></Child>
//       </div>
//     );
//   }
// }


// Child to Parent
// export default class Parent extends Component {
//   firstName = "Nishu";
//   childToParent=(value)=>{
//     console.log(value);
//   }
//   render() {
//     return (
//       <div>
//         <h1>Parent Component</h1>
//         <Child childToParent={this.childToParent}></Child>
//       </div>
//     );
//   }
// }

//children
export default class Parent extends Component {
  render() {
    return (
      <div>
        <h1>Parent Component</h1>
        <Child><Button/></Child>
      </div>
    );
  }
}

