import { Calendar1, Ellipsis, SquarePen, Trash2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { supabase } from "../services";
import { toast } from "react-toastify";

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
        setHidePopUp(true); // Close the popup if clicked outside
      }
    };

    if (!hidePopUp) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [hidePopUp]);

  const splitDate = (date) => {
    const newString = date.split("T");
    return newString[0];
  };

  const wordLimit = (des) => {
    const words = des.match(/\b\w+\b/g) || [];
    if (words.length > 65) {
      return words.slice(0, 65).join(" ") + "...";
    } else {
      return des;
    }
  };

  return (
    <div className="w-full bg-white shadow p-4 rounded-2xl mb-5 relative hover:scale-[101%] transition-all ease-in-out">
      <div className="flex gap-2.5 items-center">
        <Calendar1 size={50} />
        <div className="w-full">
          <div className="w-full flex flex-row justify-between">
            <h1 className="text-2xl font-bold ">{title}</h1>
            <div
              onClick={(e) => {
                e.stopPropagation(); // prevent bubbling up
                setHidePopUp((prev) => !prev);
              }}
              className="w-[40px] h-[40px] bg-gray-100/80 hover:bg-gray-200/70 flex justify-center items-center rounded-full"
            >
              <Ellipsis className="text-gray-400" />
            </div>
          </div>
          <span className="text-gray-500 text-">{splitDate(time)}</span>
        </div>
      </div>
      {/* body of the note */}
      <div className="w-full py-3 px-2">
        <h3 className="text-wrap text-xl">{wordLimit(description)}</h3>
      </div>
      {/* popup */}
      <div
        ref={popupRef}
        className={`absolute z-50 py-5 bg-white border transition-all border-black/10 w-[100px] h-[150px] rounded-2xl md:-right-20 top-8 sm:right-16 flex flex-col justify-between items-center ${
          hidePopUp ? "hidden" : ""
        }`}
      >
        {/* Your popup content here */}
        <div
          className="bg-red-400 hover:bg-red-500 w-[40px] h-[40px] flex transition-colors justify-center items-center rounded-full"
          onClick={() => deleteNoteById(idx)}
        >
          <Trash2 size={23} color="white" />
        </div>
        <div className="bg-[#535bf2be] hover:bg-[#535bf2] w-[40px] h-[40px] flex transition-colors justify-center items-center rounded-full">
          <SquarePen size={23} color="white" />
        </div>
      </div>
    </div>
  );
};

export default NoteRow;
