import mongoose from "mongoose";

const photoSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    url: {
			type: String,
			required: true,
			unique: true,
		},
  },
  { timestamps: true }
);

const Photo = mongoose.model("Photo", photoSchema);

export default Photo;
