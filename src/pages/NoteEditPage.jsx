import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../services";

const NoteEditPage = () => {
  const params = useParams();

  const [noteData, setNoteData] = useState({});

  const fetchData = async (idx) => {
    const { data, error } = await supabase
      .from("notes")
      .select("*")
      .eq("id", idx)
      .single();

    if (error) {
      console.log(error, "some Error");
      return;
    }

    setNoteData(data);
    console.log("note data", data);
  };

  useEffect(() => {
    fetchData(params?.id);
  }, []);

  return (
    <div className="w-[1250px] mx-auto">
      NoteEditPage
      <h1>{JSON.stringify(noteData, null, 2)}</h1>
    </div>
  );
};

export default NoteEditPage;
