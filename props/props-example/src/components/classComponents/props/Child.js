import { Component } from "react";
import Button from "./Button";
// parent to child
// export default class Child extends Component {
//   componentDidMount() {
//     console.log(this.props);
//   }
//   render() {
//     return (
//       <div>
//         <h1>Child Component</h1>
//         <h1>componentName:{this.props.ComponentName}</h1>
//         <h1>firstName:{this.props.firstName}</h1>
//       </div>
//     );
//   }
// }

// Child To Parent
// export default class Child extends Component {
//   carName = "Maruti";
//   componentDidMount() {
//     console.log(this.props);
//     this.props.childToParent(this.carName);
//   }
//   // transferData(){
//   //   this.props.childToParent(Math.random()
//   //   )
//   // }
//   transferData = () => {
//     this.props.childToParent(Math.random());
//   };
//   render() {
//     return (
//       <div>
//         <h1>Child Component</h1>
//         {/* <button onClick={this.transferData.bind(this)}>Data Transfer</button>
//         <button onClick={this.transferData}>Data Transfer</button>
//         <button onClick={this.transferData()}>Data Transfer</button> */}
//         <button onClick={()=>this.transferData()}>Data Transfer</button>
//       </div>
//     );
//   }
// }

// children
export default class Child extends Component {
  render() {
    return (
      <div>
        <h1>Child Component</h1>
        {this.props.childern}
        <Button></Button>
      </div>
    );
  }
}
