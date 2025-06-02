import { useState } from "react";
import toast from "react-hot-toast";

const useRegister = () => {
	const [loading, setLoading] = useState(false);
	

	const register = async ({name,description,venue }) => {
		const success = handleInputErrors({name,description,venue });
		if (!success) return;

		setLoading(true);
		try {
			const res = await fetch("/api/event/register", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ name,description,venue }),
			});

			const data = await res.json();
			
			if (data.error) {
				throw new Error(data.error);
			}
			console.log(data);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, register };
};
export default useRegister;

function handleInputErrors({name,description,venue }) {
  console.log(description);
	if ( !name ||  !description ) {
		toast.error("Please fill in event name");
		return false;
	}
	if ( !description ) {
		toast.error("Please fill in event description");
		return false;
	}
		if ( !venue ) {
		toast.error("Please fill in event venue");
		return false;
	}
    return true;
}
