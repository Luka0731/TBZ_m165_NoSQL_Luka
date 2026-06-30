db.users.find(
    {
        $or: [
            { username: "sara_h" },
            { username: "tobia_k" }
        ]
    },
    { _id: 1, username: 1, email: 1 }
);

db.listings.find(
    {
        $and: [
            { condition: "good" },
            { price: { $lt: 30 } }
        ]
    },
    { _id: 0, title: 1, price: 1, condition: 1 }
);

db.listings.find({
    "album.release_date": { $gte: new Date("2000-01-01") }
});

db.listings.find({
    title: { $regex: "Stomach", $options: "i" }
});

db.users.find({
    watchlists: { $ne: [] }
});
