import Event from "../models/event.model.js";

export const getUserEvents = async (req, res) => {
	try {
		const userId = req.user._id;

		const userEvents = await Event.find({userId:userId});

		if (!userEvents) return res.status(200).json([]);
        res.status(200).json(userEvents);
	} catch (error) {
		console.log("Error in getUserEvents controller: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};