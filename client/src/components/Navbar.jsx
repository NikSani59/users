import Home from "../pages/Home";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={Home}>Home</Link>
            <Link>Create User</Link>
            <Link>FAQ</Link>
            <Link>About</Link>
            <Link to="https://github.com/NikSani59">GitHub</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
