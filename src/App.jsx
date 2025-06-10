import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AboutPage,
  NotesPage,
  HomePage,
  NoteViewPage,
  EditNotePage,
} from "./pages";
import { Layout } from "./components";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="notes" element={<NotesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="notes/:id" element={<NoteViewPage />} />
          <Route path="/notes/:id/edit" element={<EditNotePage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
