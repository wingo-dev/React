import { Outlet, Link } from "react-router-dom";
import "../App.css";
const Layout = () => {
  return (
    <div>
      <nav className="App-header">
        <ul
          style={{ display: "flex", justifyContent: "center", margin: "auto" }}
        >
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

export default Layout;
