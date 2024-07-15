import ChildToParent from "./ChildToParent";
import Button from "./Button";
export default function ParentToChild() {
  // let firstName = "Nishu";
  //child to parent
  // function childToParent(value) {
  //   console.log(value);
  // }
  // Children

  return (
    <div>
      <h1>ParentComponent</h1>
      {/* <ChildToParent
        ComponentName="Child"
        firstName={firstName}
      ></ChildToParent> */}
      {/* <ChildToParent childToParent={childToParent} /> */}
      <ChildToParent>
        <Button></Button>
      </ChildToParent>
    </div>
  );
}
