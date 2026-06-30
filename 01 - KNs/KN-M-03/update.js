db.users.updateOne(
    { _id: ObjectId("6a43968c9e9db516a60c8047") },
    { $set: { email: "luka.grujic@gmail.com" } }
);

db.listings.updateMany(
    {
        $or: [
            { "album.artist": "Mitski" },
            { "album.artist": "Björk" }
        ]
    },
    { $set: { condition: "sold out" } }
);

db.listings.replaceOne(
    { title: { $regex: "Hounds of Love" } },
    {
        title: "Kate Bush - Hounds of Love, repressed vinyl, mint",
        cover_image: "https://s3.amazonaws.com/cdmarket/listings/listing4_new.jpg",
        description: "New 2024 repress, never played.",
        price: 30.00,
        condition: "mint",
        tags: ["art pop", "classic", "repress"],
        user_id: ObjectId("6a43968c9e9db516a60c8049"),
        album: {
            _id: ObjectId("6a43968c9e9db516a60c8055"),
            title: "Hounds of Love",
            artist: "Kate Bush",
            release_date: new Date("1985-09-16"),
            cover_url: "https://s3.amazonaws.com/cdmarket/covers/kate_bush_hounds.jpg"
        }
    }
);
