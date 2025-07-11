import React from "react";
import ReactDOM from "react-dom/client";

//const heading = <h1>Output using JSX</h1>;

// const Title = () => {
//   return <h1>Title Component</h1>;
// };

const title = (
  <div>
    <h1>Title JSX</h1>
  </div>
);

const Heading = () => (
  <div>
    {title}
    <h1>Heading Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
