import { supabase } from "../services/supabaseConfig";
import { toast } from "react-toastify";

export const addNewNote = async (noteName, note) => {
  const { data, error } = await supabase
    .from("notes")
    .insert([{ note_title: noteName, note_description: note }]);
  if (error) {
    console.error("Insert error:", error);
    toast.error("Faild to add data !", { theme: "colored" });
  } else {
    toast.success("Note Added !");
    console.log("Inserted data:", data);
  }
};
