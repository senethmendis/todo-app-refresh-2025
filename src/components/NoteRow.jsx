import { Calendar1, Ellipsis, SquarePen, Trash2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { supabase } from "../services";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { formatDate, wordLimit } from "../utils";

const NoteRow = ({ title, description, time, idx, fetchData }) => {
  const [hidePopUp, setHidePopUp] = useState(true);
  const popupRef = useRef(null);

  const deleteNoteById = async (id) => {
    const { data, error } = await supabase.from("notes").delete().eq("id", id);

    if (error) {
      toast.error("Faild to delete note !", { theme: "colored" });
    } else {
      toast.success("Note Deleted !");
      console.log(data);
      fetchData();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setHidePopUp(true); 
      }
    };

    if (!hidePopUp) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [hidePopUp]);

  return (
    <div className="w-full bg-white shadow p-4 rounded-2xl mb-5 relative hover:scale-[101%] transition-all ease-in-out">
      <div className="flex gap-2.5 items-center">
        <Calendar1 size={50} />
        <div className="w-full flex flex-col">
          <div className="w-full flex flex-row justify-between">
            <h1 className="text-2xl font-bold ">{title}</h1>
            <div
              onClick={(e) => {
                e.stopPropagation();
                setHidePopUp((prev) => !prev);
              }}
              className="w-[40px] h-[40px] bg-gray-100/80 hover:bg-gray-200/70 flex justify-center items-center rounded-full"
            >
              <Ellipsis className="text-gray-400" />
            </div>
          </div>
          <span className="text-gray-500 text-">{formatDate(time)}</span>
        </div>
      </div>

      <Link to={`${idx}`} className="w-full py-3 px-2">
        <h3 className="text-wrap text-xl">{wordLimit(description)}</h3>
      </Link>
   
      <div
        ref={popupRef}
        className={`absolute z-50 py-5 transition-all w-[100px] h-[150px] rounded-2xl md:-right-20 top-8 sm:right-16 flex flex-col justify-between items-center ${
          hidePopUp ? "hidden" : ""
        }`}
      >

        <div
          className="bg-red-400 hover:bg-red-500 w-[40px] h-[40px] flex transition-colors justify-center items-center rounded-full"
          onClick={() => deleteNoteById(idx)}
        >
          <Trash2 size={23} color="white" />
        </div>
        <Link
          to={`${idx}/edit`}
          className="bg-[#535bf2be] hover:bg-[#535bf2] w-[40px] h-[40px] flex transition-colors justify-center items-center rounded-full"
        >
          <SquarePen size={23} color="white" />
        </Link>
      </div>
    </div>
  );
};

export default NoteRow;
