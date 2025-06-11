import { NAVBAR_ITEMS } from "../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full max-w-[1250px] mx-auto my-12">
      <nav className="w-full">
        <ul className="w-full flex flex-row items-center gap-10 ">
          <img src="logo.svg" alt="logo" className="mt-1 w-9 p-1 bg-amber-300 rounded-full" />
          {NAVBAR_ITEMS.map((item, i) => (
            <Link to={item.href} key={i} >
              <li className="text-lg hover:underline transition-all ease-in font-medium text-primary">{item.name}</li>
            </Link>
          ))}
          <li></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
