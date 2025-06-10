import { Calendar1, Ellipsis } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const NoteRow = ({ title, description, time, idx }) => {
  const [hidePopUp, setHidePopUp] = useState(true);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setHidePopUp(true); // Close the popup if clicked outside
      }
    };

    // Attach event listener only if popup is open (hidePopUp === false)
    if (!hidePopUp) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [hidePopUp]);

  return (
    <div className="w-full bg-white shadow p-4 rounded-2xl my-2 relative">
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
          <span className="text-gray-500 text-">{time}</span>
        </div>
      </div>
      {/* body of the note */}
      <div className="w-full py-3 px-2">
        <h3 className="text-wrap text-xl">{description}</h3>
      </div>
      {/* popup */}
      <div
        ref={popupRef}
        className={`absolute z-50 bg-white border border-black/10 w-[100px] h-[150px] rounded-2xl -right-20 top-8 ${
          hidePopUp ? "hidden" : ""
        }`}
      >
        {/* Your popup content here */}
      </div>
    </div>
  );
};

export default NoteRow;
