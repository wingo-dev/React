import { useState } from "react";
import Info from "./Info";

const Contact = () => {
  const [arrStr, setStr] = useState(["1. todo list", "2. todo on Saturday"]);
  const addTodo = () => {
    setStr((str) => [...str, "new list to do"]);
  };
  return (
    <div className="container">
      <h1>Contact Me</h1>
      <Info arrStr={arrStr} addTodo={addTodo} />
    </div>
  );
};

export default Contact;
