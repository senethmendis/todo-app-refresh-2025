import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

const Layout = () => {
	return (
		<main>
			<Navbar />
			<Outlet />
		</main>
	);
};

export default Layout;
