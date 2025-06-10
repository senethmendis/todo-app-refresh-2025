import { useEffect, useState } from "react";
import { supabase } from "../services/supabaseConfig";
import { NoNotesFound, NoteRow } from "../components";

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

      {noteData?.length === 0 ? (
        <NoNotesFound />
      ) : (
        <div className="w-full h-screen  flex flex-col my-20 px-5 ">
          {noteData?.map((note, idx) => (
            <NoteRow
              fetchData={fetchData}
              key={idx}
              idx={note?.id}
              title={note?.note_title}
              description={note?.note_description}
              time={note?.created_at}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NotesPage;
