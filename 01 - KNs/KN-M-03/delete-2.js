db.listings.deleteOne({_id: ObjectId("6a438f32ac4e27f31174abf7")});

db.listings.deleteMany({
    $or: [
        { _id: ObjectId("6a438f32ac4e27f31174abf8") },
        { _id: ObjectId("6a438f32ac4e27f31174abf9") }
    ]
});
