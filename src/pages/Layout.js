import { Outlet, Link } from "react-router-dom";
import "../App.css";
import { connect } from "react-redux";
import { startAction } from "../actions/startAction";
import { stopAction } from "../actions/stopAction";


const Layout = (props) => {
  console.log(props);
  return (
    <div>
      
      <nav className="App-header">
        <ul
          style={{ display: "flex", justifyContent: "center", margin: "auto" }}
        >
         <li>
         <input 
          type='image'
          src={'/logo.svg'} 
          className={
            (props.rotating ? "App-logo" : " App-logo-paused")
          } 
          alt="logo" 
          onClick ={props.rotating ? props.stopAction : props.startAction}
      />
      <button onClick={props.rotating ? props.stopAction : props.startAction}>Stop</button>
         </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};
const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  startAction: () => dispatch(startAction),
  stopAction: () => dispatch(stopAction)
  
});
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
