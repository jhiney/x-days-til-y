import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";
import dateDiff from "../utils/dateMath";
import { getEventData } from "./api/events";

export async function getServerSideProps() {
	const events = await getEventData();

	return {
		props: {
			events
		}
	};
}

export default function Home(props) {
	const [event, setEvent] = useState("");
	const [days, setDays] = useState(0);

	useEffect(() => {
		console.log(props);
		setEvent(props.events[0].event_name);
		setDays(dateDiff("07/28/2022", props.events[0].event_date));
	}, []);

	return (
		<h1 className="text-3xl font-bold">
			Its been {days} days since {event}
		</h1>
	);
}
