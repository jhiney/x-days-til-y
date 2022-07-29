import { supabase } from "../../utils/supabaseClient";

export async function getEventData() {
	try {
		const { data, error } = await supabase.from("events").select();
		return data;
	} catch (err) {
		console.log(err);
	}
}
