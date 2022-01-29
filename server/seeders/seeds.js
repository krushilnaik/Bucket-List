const faker = require("faker");
const sample = require("lodash.sample");

const { Wish, User } = require("../models");
const db = require("../config/connection");

db.once("open", async () => {
	console.log("clearing database");

	await Wish.deleteMany({});
	await User.deleteMany({});

	console.log("database cleared");
	// create user data
	const userData = [];

	console.log("creating users");

	for (let i = 0; i < 5; i += 1) {
		const username = faker.internet.userName();
		const email = faker.internet.email(username);
		const password = faker.internet.password();

		userData.push({ username, email, password });
		// const createdUser = await User.create({ username, email, password });

		// console.log(createdUser);
	}

	await User.collection.insertMany(userData);

	console.log(`Created ${userData.length} users`);

	// const createdUsers = await User.collection.insertMany(userData);

	// create wishes
	// let createdWishes = [];
	// for (let i = 0; i < 100; i += 1) {
	// 	const { _id } = sample(userData);

	// 	const wishText = faker.lorem.words(Math.ceil(Math.random() * 5));

	// 	const createdWish = await Wish.create({ userId: _id, wishText });

	// 	createdWishes.push(createdWish);
	// }

	// await Wish.collection.insertMany(createdWishes);

	// console.log(`Created ${createdWishes.length} wishes`);

	process.exit(0);
});
