import { supabase } from "../services/supabaseConfig";
import { useForm } from "react-hook-form";

const HomePage = () => {
	const { register, handleSubmit, reset } = useForm();

	const handleOnSubmit = (formData) => {
		console.log(formData);
		addNewNote(formData.noteName, formData.note);

		// Optional: reset form after submit
		reset();
	};

	const addNewNote = async (noteName, note) => {
		const { data, error } = await supabase
			.from("notes")
			.insert([{ note_title: noteName, note_description: note }]);

		if (error) {
			console.error("Insert error:", error);
		} else {
			console.log("Inserted data:", data);
		}
	};

	return (
		<div className="w-[1250px] mx-auto">
			<form
				onSubmit={handleSubmit(handleOnSubmit)}
				className="flex flex-col gap-4 items-start">
				<h1 className="text-2xl">Add Note Here</h1>
				<input
					{...register("noteName", { required: true })}
					className="h-10 border max-w-[500px] w-full rounded-md px-3"
				/>
				<textarea
					{...register("note", { required: true })}
					className="max-w-[500px] w-full rounded-md h-24 border p-3"></textarea>
				<div className="flex w-full gap-4">
					<button
						type="submit"
						className="border p-2 rounded-md max-w-[150px] w-full ">
						Add Note
					</button>
					<button
						type="reset"
						className="border p-2 rounded-md max-w-[150px] w-full ">
						clear
					</button>
				</div>
			</form>
		</div>
	);
};

export default HomePage;
