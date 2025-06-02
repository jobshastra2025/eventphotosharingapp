import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetUserEvents = () => {
	const [loading, setLoading] = useState(false);
	const [userEvents, setUserEvents] = useState([]);

	useEffect(() => {
		const getEvents = async () => {
			setLoading(true);
			try {
				const res = await fetch("/api/user/events");
				const data = await res.json();
				if (data.error) {
					throw new Error(data.error);
				}
				setUserEvents(data);
			} catch (error) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};

		getEvents();
	}, []);

	return { loading, userEvents };
};
export default useGetUserEvents;