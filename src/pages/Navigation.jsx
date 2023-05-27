import logo from "../assets/images/logo.jpg";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";

const Navigation = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    if(handleLogOut){
        alert("Please confirm Logout")
    };
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div className="navbar bg-slate-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/home">Home</Link>
            </li>
          </ul>
        </div>
        <Link className="ml-2 normal-case text-xl">Recife Hero</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {!user ? (
          <ul className="mr-10 flex flex-row gap-5">
            <li>
              <Link to="login" className="btn btn-outline btn-accent">Login</Link>
            </li>
          </ul>
        ) : (
          <button onClick={handleLogOut} className="mr-5 btn btn-outline btn-accent">
            Logout
          </button>
        )}
        <div tabIndex={0} className="btn btn-ghost btn-circle avatar tooltip" data-tip={user?.displayName}>
          <img
            className="w-10 rounded-full border-2 p-1"
            src={user ? user.photoURL : logo}
          />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
