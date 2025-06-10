import { useEffect, useState } from "react";
import { supabase } from "../services/supabaseConfig";
import { NoNotesFound, NoteRow, Skeleton } from "../components";

const NotesPage = () => {
  const [noteData, setNoteData] = useState([]);
  const [noteLoading, setNoteLoading] = useState(true);

  const fetchData = async () => {
    setNoteLoading(true);
    const { data, error } = await supabase.from("notes").select();

    if (error) {
      console.log(error, "some Error");
      return;
    }
    setNoteData(data);
    setNoteLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-[1250px] mx-auto">
      <h1 className="text-4xl font-bold">All Notes</h1>

      <div className="w-full h-screen  flex flex-col my-20 px-5 ">
        {noteLoading ? (
          <>
            <Skeleton />
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default NotesPage;
