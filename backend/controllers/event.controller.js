import Event from "../models/event.model.js";
import QRCodeGenerator  from "qrcode";

export const register = async (req, res) => {
  try {
    const {name, description ,venue } = req.body;
    const userId = req.user._id;
    const data={
      name,
      description,
      venue,
      userId
    }
    const qrCode=await QRCodeGenerator.toDataURL(JSON.stringify(data));
    const newEvent = new Event({
      name,
      description,
      venue,
      userId,
      participants: [userId],
      photos: [],
      qrCode
    });

    if (newEvent) {
      await newEvent.save();

      res.status(201).json({
        _id: newEvent._id,
        qrCode:newEvent.qrCode,
      });
    } else {
      res.status(400).json({ error: "Invalid new event data" });
    }
  } catch (error) {
    console.log("Error in register controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


