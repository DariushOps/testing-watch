import { Link, NavLink } from "react-router-dom";
import { PiShoppingBagOpenFill } from "react-icons/pi";

function CartIcon({ count }) {
  return (
    <div className="relative">
      <PiShoppingBagOpenFill className="w-8 h-8 text-shadow-white" />

      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-700 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {count}
        </span>
      )}
    </div>
  );
}

export default function Navbar() {
  const linkClasses = `hover:scale-120 transition-all duration-300 backface-hidden`;
  return (
    <nav className="flex fixed top-0 left-0 right-0 font-montserrat font-medium text-stone-50  justify-between bg-linear-to-br from-emerald-800 to-cyan-800 shadow-lg p-6 ">
      <div className="flex items-center justify-center  gap-2 text-2xl animate-fadeIn ">
        <img src="logo.svg" alt="logo page" className="w-full h-8" />
        <h3>DariushOps</h3>
      </div>
      <div className="flex items-center justify-center gap-4  animate-fadeIn  ">
        <NavLink className={linkClasses} to="/">
          Home
        </NavLink>
        <NavLink className={linkClasses} to="shop">
          Shop
        </NavLink>
        <NavLink className={linkClasses} to="about">
          About
        </NavLink>
        <NavLink className={linkClasses} to="contactUs">
          Contact Us
        </NavLink>
      </div>
      <div className="flex items-center justify-center  gap-5 animate-fadeIn">
        <CartIcon count={2} />
        <Link to="login">Log In</Link>
        <Link to="signup">Sign Up</Link>
      </div>
    </nav>
  );
}
