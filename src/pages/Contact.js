import { useState } from "react";
import Info from "./Info";
// import { connect } from "react-redux";
import { increase, decrease } from "../actions/counter";

import {useSelector, useDispatch} from 'react-redux';

const Contact = () => {
  
  // console.log(props.count);
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  const [arrStr, setStr] = useState(["1. todo list", "2. todo on Saturday"]);
  const addTodo = () => {
  
    setStr((str) => [...str, ". new list to do"]);
  };
  return (
    <div className="container">
      <h1>Contact Me</h1>
      <Info arrStr={arrStr} addTodo={addTodo} />
      <div>
        <h3>Counter is {count}</h3>
        <button onClick={()=>dispatch(increase(3))}>Redux Counter++</button>
        <button onClick={()=>dispatch(decrease(6))}>Redux Counter--</button>
      </div>
    </div>
  );
};
// const mapStateToProps = state => ({
//   ...state
// });

// const mapDispatchToProps = dispatch => ({
//   add: () => dispatch(increase(3)),
//   dec: () =>dispatch(decrease(2))
// });
// export default connect(mapStateToProps, mapDispatchToProps)(Contact);
export default Contact;
