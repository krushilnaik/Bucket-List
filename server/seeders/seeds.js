const faker = require("faker");
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

	for (let i = 0; i < 50; i += 1) {
		const username = faker.internet.userName();
		const email = faker.internet.email(username);
		const password = faker.internet.password();

		userData.push({ username, email, password });
		// const createdUser = await User.create({ username, email, password });

		// console.log(createdUser);
	}

	await User.collection.insertMany(userData);

	console.log(`Created ${userData.length} users`);
	process.exit(0);

	// const createdUsers = await User.collection.insertMany(userData);

	// create wishes
	// let createdWishes = [];
	// for (let i = 0; i < 100; i += 1) {
	// 	const username = faker.internet.userName();
	// 	const wishText = faker.lorem.words(Math.round(Math.random() * 20) + 1);

	// 	const createdWish = await Wish.create({ username, wishText });

	// 	createdWishes.push(createdWish);
	// }
});
