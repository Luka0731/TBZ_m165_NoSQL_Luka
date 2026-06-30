db.listings.find(
    {},
    { _id: 0, "album.title": 1, "album.artist": 1 }
);

db.listings.find({
    "album.artist": "Mitski"
});

db.users.aggregate([
    { $unwind: "$watchlists" },
    {
        $project: {
            _id: 0,
            username: 1,
            "watchlists.title": 1,
            "watchlists.saved_listing_ids": 1
        }
    }
]);
