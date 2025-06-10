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
      <h1 className="text-4xl font-bold">All Notes</h1>

      <p>{noteData.length}</p>

      <div className="w-full h-screen  flex flex-col mt-20 px-5 ">
        {noteData?.map((note, i) => (
          <NoteRow
            key={i}
            title={note?.note_title}
            description={note?.note_description}
            time={note?.created_at}
          />
        ))}
      </div>
    </div>
  );
};

export default NotesPage;
