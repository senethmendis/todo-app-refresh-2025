import { useForm } from "react-hook-form";
import { addNewNote } from "../services";

const HomePage = () => {
  const { register, handleSubmit, reset } = useForm();

  const handleOnSubmit = (formData) => {
    console.log(formData);
    addNewNote(formData.noteName, formData.note);
    reset();
  };

  return (
    <div className="w-[1250px] mx-auto">
      <form
        onSubmit={handleSubmit(handleOnSubmit)}
        className="flex flex-col gap-4 items-start"
      >
        <h1 className="text-3xl font-bold">Add Note Here</h1>
        <input
          {...register("noteName", { required: true })}
          className="h-10 border max-w-[500px] w-full rounded-md px-3"
          placeholder="Title"
        />
        <textarea
          {...register("note", { required: true })}
          className="max-w-[500px] w-full rounded-md h-24 border p-3"
          placeholder="Discription"
        ></textarea>
        <div className="flex w-full gap-4">
          <button
            type="submit"
            className="border p-2 rounded-md max-w-[150px] w-full "
          >
            Add Note
          </button>
          <button
            type="reset"
            className="border p-2 rounded-md max-w-[150px] w-full "
          >
            clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default HomePage;
