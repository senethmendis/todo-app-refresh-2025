import React from "react";
import { NAVBAR_ITEMS } from "../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<header className="w-full max-w-[1250px] mx-auto my-12">
			<nav className="w-full">
				<ul className="w-full flex flex-row gap-5 ">
					{NAVBAR_ITEMS.map((item, i) => (
						<Link
							to={item.href}
							key={i}>
							<li className="text-lg">{item.name}</li>
						</Link>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
