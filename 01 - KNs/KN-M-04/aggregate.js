db.listings.aggregate([
    { $match: { condition: "good" } },
    { $match: { price: { $lt: 30 } } }
]);

db.listings.aggregate([
    { $match: { price: { $lt: 30 } } },
    { $project: { _id: 0, title: 1, price: 1 } },
    { $sort: { price: -1 } }
]);

db.listings.aggregate([
    { $group: { _id: "$condition", count: { $sum: 1 } } }
]);

db.listings.aggregate([
    { $group: { _id: "$user_id", totalValue: { $sum: "$price" } } }
]);
