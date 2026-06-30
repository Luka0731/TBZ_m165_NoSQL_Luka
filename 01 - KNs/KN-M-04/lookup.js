db.listings.aggregate([
    {
        $lookup: {
            from: "users",
            localField: "user_id",
            foreignField: "_id",
            as: "seller_info"
        }
    }
]);

db.listings.aggregate([
    {
        $lookup: {
            from: "users",
            localField: "user_id",
            foreignField: "_id",
            as: "seller_info"
        }
    },
    { $unwind: "$seller_info" },
    { $match: { "seller_info.email": { $regex: "gmail" } } },
    {
        $project: {
            _id: 0,
            title: 1,
            price: 1,
            "seller_info.username": 1,
            "seller_info.email": 1
        }
    }
]);
