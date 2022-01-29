const mongoose = require("mongoose");
// const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
	{
		username: {
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
			},
		],
	},
	{
		collection: "User",
		toJSON: {
			virtuals: true,
		},
	}
);

// const User = model("User", userSchema);

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
