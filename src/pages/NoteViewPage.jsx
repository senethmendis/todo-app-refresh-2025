import { Link, useParams } from "react-router-dom";
import { supabase } from "../services";
import { useEffect, useState } from "react";
import { SquarePen, Turtle } from "lucide-react";
import { formatDate } from "../utils";

const NoteViewPage = () => {
  const params = useParams();
  const [noteData, setNoteData] = useState({});
  const [isNoteLoading, setIsNoteLoading] = useState(false);

  const fetchData = async (idx) => {
    setIsNoteLoading(true);
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
    setIsNoteLoading(false);
  };

  useEffect(() => {
    fetchData(params?.id);
  }, []);

  return (
    <div className="w-[1250px] h-screen mx-auto">
      <div className="w-full h-auto flex flex-col">
        <div className=" max-w-[800px] w-full flex flex-row justify-between items-center">
          {isNoteLoading ? (
            <NoteHead />
          ) : (
            <div>
              <h1 className="text-3xl font-bold">{noteData?.note_title}</h1>
              <p className="text-xl text-gray-400">
                {formatDate(noteData?.created_at)}
              </p>
            </div>
          )}
          <Link
            to={`edit`}
            className="bg-[#535bf2be] hover:bg-[#535bf2] w-[40px] h-[40px] flex transition-colors justify-center items-center rounded-full"
          >
            <SquarePen size={23} color="white" />
          </Link>
        </div>
        {isNoteLoading ? (
          <NoteBody />
        ) : (
          <p className="max-w-[800px] text-justify mt-5 text-2xl">
            {noteData?.note_description}
          </p>
        )}
      </div>
    </div>
  );
};

export default NoteViewPage;

const NoteHead = () => {
  return (
    <div className="w-auto flex flex-col gap-4">
      <div className="w-[200px] h-3 bg-gray-300/50 rounded-3xl animate-pulse transition-all ease-in-out"></div>
      <div className="w-[100px] h-3 bg-gray-300/50 rounded-3xl animate-pulse transition-all ease-in-out"></div>
    </div>
  );
};

const NoteBody = ({ color = "bg-gray-300/50" }) => {
  return (
    <div className="w-full flex flex-col justify-between h-[150px] my-5">
      <div className="w-[800px] flex flex-col gap-6 py-3 px-2">
        <div className="w-full flex flex-row gap-4">
          <div
            className={`w-[700px] h-[13px]  rounded-3xl animate-pulse transition-all ease-in-out ${color}`}
          />
          <div
            className={`w-[300px] h-[13px]  rounded-3xl animate-pulse transition-all ease-in-out ${color}`}
          />
        </div>
        <div className="w-full flex flex-row gap-4">
          <div
            className={`w-[500px] h-[13px]  rounded-3xl animate-pulse transition-all ease-in-out ${color}`}
          />
          <div
            className={`w-[500px] h-[13px]  rounded-3xl animate-pulse transition-all ease-in-out ${color}`}
          />
        </div>
        <div className="w-full justify-between flex flex-row gap-4">
          <div
            className={`w-[700px] h-[13px]  rounded-3xl animate-pulse transition-all ease-in-out ${color}`}
          />
          <div
            className={`w-[450px] h-[13px]  rounded-3xl animate-pulse transition-all ease-in-out ${color}`}
          />
        </div>
        <div className="w-full flex flex-row gap-4">
          <div
            className={`w-[500px] h-[13px]  rounded-3xl animate-pulse transition-all ease-in-out ${color}`}
          />
          <div
            className={`w-[500px] h-[13px]  rounded-3xl animate-pulse transition-all ease-in-out ${color}`}
          />
        </div>
      </div>
    </div>
  );
};
