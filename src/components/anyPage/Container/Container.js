import React from "react";
import stylid from "./Container.module.css";

// const Test = (props) => {
//   return <div>{props.Test}</div>;
// };

// const Container = () => {
//   return (
//     <div>
//       <Test Test={<div style="max-width:max-content;"> </div>} />
//     </div>
//   );
// };

// export default React.memo(Container);
const Container = (props) => {
  return (
    <div
      className={stylid.wrapi}
      style={{ maxWidth: props.maxWidth ? `${props.maxWidth}px` : "100%" }}>
      {props.children}
    </div>
  );
};

export default React.memo(Container);
