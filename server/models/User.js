const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			match: [/.+@.+\..+/, "Must match an email address!"],
		},
		password: {
			type: String,
			required: true,
			minlength: 5,
		},
		wishes: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Wish",
				default: [],
			},
		],
	},
	{
		collection: "User",
	}
);

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
