import Todos from "./Todos";
import { useState, createContext, useContext } from "react";
const UserContext = createContext();

const Home = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const changeTodo = () => {
    setTodos((todos) => {
      return [
        ...todos,
        "1.blog post at 12:00 pm",
        "2.Study React at 10:00 am everyday",
      ];
    });
    console.log(todos);
  };
  return (
    <UserContext.Provider value={todos}>
      <div className="container">
        <h1>Home</h1>
        <Section1 />
        <hr />
        <div>
          Count: {count}
          <button onClick={increment}>+</button>
        </div>
        <div>
          <button onClick={changeTodo}>change todo</button>
        </div>
      </div>
    </UserContext.Provider>
  );
};

const Section1 = () => {
  return (
    <div className="d-flex justify-center">
      <div style={{ width: "30%" }}>
        <p>
          I figure regex way would be the safest (and faster?) one, but actualy
          trying to initialize a variable and check if it has been set correctly
          would be more reliable (and insecure?) way to do it, right?
        </p>
      </div>
      <div>
        <Section2 />
      </div>
    </div>
  );
};
const Section2 = () => {
  const tt = useContext(UserContext);
  return (
    <div>
      <img src={require("../assets/img/head-1.jpg")} alt="images" width={500} />
      <Todos todos={tt} />
    </div>
  );
};
export default Home;
