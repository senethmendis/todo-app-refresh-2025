import { Calendar1, Ellipsis, Turtle } from "lucide-react";
import { useState } from "react";

const NoteRow = ({ title, description, time }) => {
  const [hidePopUp, setHidePopUp] = useState(true);

  return (
    <>
      <div className="w-full bg-white shadow p-4 rounded-2xl my-2 relative">
        <div className="flex gap-2.5 items-center">
          <Calendar1 size={50} />
          <div className="w-full">
            <div className="w-full flex flex-row justify-between">
              <h1 className="text-2xl font-bold ">{title}</h1>
              <div
                onClick={() => setHidePopUp((prev) => !prev)}
                className="w-[40px] h-[40px] bg-gray-100/80 hover:bg-gray-200/70
               flex justify-center items-center rounded-full"
              >
                <Ellipsis className="text-gray-400" />
              </div>
            </div>
            <span className="text-gray-500 text-">{time}</span>
          </div>
        </div>
        {/* body of the note */}
        <div className="w-full py-3 px-2">
          <h3 className="text-wrap text-xl">{description}</h3>
        </div>
        <div
          className={`absolute z-50 bg-white border border-black/10 w-[100px] h-[150px] rounded-2xl right-10 top-8 ${
            hidePopUp && "hidden"
          }`}
        ></div>
      </div>
    </>
  );
};

export default NoteRow;
