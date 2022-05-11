import { memo } from "react";

const Info = ({ arrStr, addTodo }) => {
  return (
    <div>
      {arrStr.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};

export default memo(Info);
