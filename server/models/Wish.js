const mongoose = require("mongoose");

const wishSchema = new mongoose.Schema(
	{
		wishText: {
			type: String,
			required: "You need to leave a bucket list wish!",
			minlength: 1,
			maxlength: 280,
		},
		createdAt: {
			type: Date,
			default: Date.now,
			get: (timestamp) => dateFormat(timestamp),
		},
		// username: {
		// 	type: String,
		// 	required: true,
		// },
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{
		collection: "Wish",
		toJSON: {
			getters: true,
		},
	}
);

// const Wish = model("Wish", wishSchema);

module.exports = mongoose.models.Wish || mongoose.model("Wish", wishSchema);
