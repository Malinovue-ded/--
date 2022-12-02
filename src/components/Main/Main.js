import React from "react";
import Content from "../List/Card/Content";
// менять не надо, но все тут из компонентов, строго тут менять!!! В контент заходи
const Main = () => {
  return (
    <main>
      <Content />
    </main>
  );
};

export default React.memo(Main);
