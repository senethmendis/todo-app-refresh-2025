import { useEffect, useState } from "react";
import { supabase } from "../services/supabaseConfig";
import { NoteRow } from "../components";

const NotesPage = () => {
  const [noteData, setNoteData] = useState([]);

  const fetchData = async () => {
    const { data, error } = await supabase.from("notes").select();

    if (error) {
      console.log(error, "some Error");
      return;
    }
    setNoteData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-[1250px] mx-auto">
      <h1 className="text-4xl font-bold ">All Notes</h1>

      <p>{JSON.stringify(noteData, null, 2)}</p>

      <div className="w-full h-screen overflow-y-auto overflow-x-hidden flex flex-col mt-10 px-5">
        <NoteRow />
        <NoteRow />
        <NoteRow />
        <NoteRow />
        <NoteRow />
        <NoteRow />
        <NoteRow />
        <NoteRow />
      </div>
    </div>
  );
};

export default NotesPage;
