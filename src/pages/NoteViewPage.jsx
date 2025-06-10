import { Link, useParams } from "react-router-dom";
import { supabase } from "../services";
import { useEffect, useState } from "react";
import { SquarePen } from "lucide-react";
import { formatDate } from "../utils";

const NoteViewPage = () => {
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
  };

  useEffect(() => {
    fetchData(params?.id);
  }, []);

  return (
    <div className="w-[1250px] h-screen mx-auto">
      <div className="w-full h-auto flex flex-col">
        <div className=" max-w-[800px] w-full flex flex-row justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">{noteData?.note_title}</h1>
            <p className="text-xl text-gray-400">
              {formatDate(noteData?.created_at)}
            </p>
          </div>
          <Link
            to={`edit`}
            className="bg-[#535bf2be] hover:bg-[#535bf2] w-[40px] h-[40px] flex transition-colors justify-center items-center rounded-full"
          >
            <SquarePen size={23} color="white" />
          </Link>
        </div>

        <p className="max-w-[800px] text-justify mt-5 text-2xl">
          {noteData?.note_description}
        </p>
      </div>
    </div>
  );
};

export default NoteViewPage;
