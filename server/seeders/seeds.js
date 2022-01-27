const faker = require('faker');
const { Wish, User } = require('../models');
const db = require('../config/connection');


db.once('open', async () => {
    await Wish.deleteMany({});
    await User.deleteMany({});

    // create user data
    const userData = [];

    for (let i = 0; i < 50; i += 1) {
        const username = faker.internet.userName();
        const email = faker.internet.email(username);
        const password = faker.internet.password();

        userData.push({ username, email, password });
    }

    // const createdUsers = await User.collection.insertMany(userData);

    // create wishes
    let createdWishes = [];
    for (let i = 0; i < 100; i += 1) {
        const wishText = faker.lorem.words(Math.round(Math.random() * 20) + 1);

        const createdWish = await Wish.create({ wishText });

        createdWishes.push(createdWish);
    }
});
