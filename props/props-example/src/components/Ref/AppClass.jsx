import React, { Component, createRef } from 'react'

export default class AppClass extends Component {
  constructor(){
    super();
    // this.paragraphRef=React.createRef()
    this.paragraphRef=createRef();
  }
  getDetails=()=>{
    this.paragraphRef.current.classList.toggle('container');
  }
  render() {
    return (
      <div>
        <p ref={this.paragraphRef}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tempore esse eos in, sint harum a dolorem eligendi laborum cupiditate architecto quaerat modi saepe temporibus eius placeat. Voluptatem, amet adipisci?</p>
        <button onClick={this.getDetails}>Click Me</button>
      </div>
    )
  }
}
