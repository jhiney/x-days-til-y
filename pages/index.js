import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";
import dateDiff from "../utils/dateMath";

export default function Home() {
	const [event, setEvent] = useState("");
	const [days, setDays] = useState(0);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data, error } = await supabase.from("events").select();
				setEvent(data[0].event_name);
				setDays(dateDiff("07/28/2022", data[0].event_date));
			} catch (err) {
				console.log(err);
			}
		};
		fetchData();
	});

	return (
		<h1 className="text-3xl font-bold">
			Its been {days} days since {event}
		</h1>
	);
}
