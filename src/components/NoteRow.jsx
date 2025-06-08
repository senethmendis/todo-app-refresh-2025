import { Calendar1, Ellipsis, Turtle } from "lucide-react";
import { useState } from "react";

const NoteRow = () => {
  const [hidePopUp, setHidePopUp] = useState(true);

  return (
    <>
      <div className="w-full bg-white shadow p-4 rounded-2xl my-2 relative">
        <div className="flex gap-2.5 items-center">
          <Calendar1 size={50} />
          <div className="w-full">
            <div className="w-full flex flex-row justify-between">
              <h1 className="text-2xl font-bold ">Title</h1>
              <Ellipsis onClick={() => setHidePopUp((prev) => !prev)} />
            </div>
            <span className="text-gray-500 text-">13:45</span>
          </div>
        </div>
        {/* body of the note */}
        <div className="w-full py-3 px-2">
          <h3 className="text-wrap text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ab
            consequuntur accusamus commodi perspiciatis delectus perferendis?
            Autem, iste, quam aut eum soluta minima dolore possimus culpa
            ducimus, laboriosam necessitatibus enim.
          </h3>
        </div>
        <div
          className={`absolute z-50 bg-red-500 w-[100px] h-[150px] rounded-2xl right-10 top-8 ${
            hidePopUp && "hidden"
          }`}
        ></div>
      </div>
    </>
  );
};

export default NoteRow;
