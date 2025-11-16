import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex fixed top-0 left-0 right-0 font-montserrat font-medium text-stone-50 justify-between bg-slate-700 p-6 ">
      <div className="flex items-center justify-center  gap-2 text-2xl">
        <img src="vite.svg" alt="" />
        <h3>DariushOps</h3>
      </div>
      <div className="flex items-center justify-center gap-4 p-[-2rem]">
        <NavLink to="/">Home</NavLink>
        <NavLink title="Shop" to="shop">
          Shop
        </NavLink>
        <NavLink title="About" to="about">
          About
        </NavLink>
        <NavLink title="Contact Us" to="contactUs">
          Contact Us
        </NavLink>
      </div>
      <div className="flex items-center justify-center  gap-2">
        <Link to="login">Log In</Link>
        <Link to="signup">Sign Up</Link>
      </div>
    </nav>
  );
}
