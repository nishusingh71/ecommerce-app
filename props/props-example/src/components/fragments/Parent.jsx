import React, { Fragment } from "react";
import Child from "./Child";
export default function Parent() {
  return (
    <Fragment>
      <p>Parent Component</p>
      <Child />
    </Fragment>
  );
}
