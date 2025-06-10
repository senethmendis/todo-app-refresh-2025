import { SquarePen } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { supabase } from "../services";
import { formatDate } from "../utils";

const EditNotePage = () => {
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const [date, setDate] = useState("");

  useEffect(() => {
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

      const obj = {
        noteName: data?.note_title,
        note: data?.note_description,
      };
      setDate(data?.created_at);
      reset(obj);
    };
    fetchData(id);
  }, [id, reset]);

  const handleOnSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className="w-[1250px] h-screen mx-auto">
      <form
        onSubmit={handleSubmit(handleOnSubmit)}
        className="w-full h-auto flex flex-col"
      >
        <div className=" max-w-[800px] w-full flex flex-row justify-between items-center">
          <div>
            <input
              {...register("noteName", { required: true })}
              className="h-auto py-1 border text-3xl border-black/20 max-w-[600px] w-full rounded-md px-3 outline-black/20"
              placeholder="Title"
            />

            <p className="text-xl text-gray-400 mt-2">{formatDate(date)}</p>
          </div>
        </div>

        <textarea
          {...register("note", { required: true })}
          className="max-w-[800px] w-ful text-justifyl text-2xl mt-5 rounded-md h-[300px] max-h[500px] border border-black/20 p-3 outline-black/20"
          placeholder="Discription"
        ></textarea>
        <div className="flex w-full gap-4 mt-5">
          <button
            type="submit"
            className="border border-black/20 p-2 rounded-md max-w-[150px] w-full "
          >
            Update Note
          </button>
          <button
            type="reset"
            className="border border-black/20 p-2 rounded-md max-w-[150px] w-full "
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditNotePage;
