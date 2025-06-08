import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutPage, NotesPage, HomePage } from "./pages";
import { Layout } from "./components";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<Layout />}>
					<Route
						index
						element={<HomePage />}
					/>
					<Route
						path="notes"
						element={<NotesPage />}
					/>
					<Route
						path="about"
						element={<AboutPage />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
