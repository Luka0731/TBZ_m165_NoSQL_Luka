// |--- variables ---|

var user1 = new ObjectId();
var user2 = new ObjectId();
var user3 = new ObjectId();
var listing1 = new ObjectId();
var listing2 = new ObjectId();
var listing3 = new ObjectId();
var listing4 = new ObjectId();
var listing5 = new ObjectId();



// |--- users ---|

db.users.insertOne({
    _id: user1,
    username: "luka_g",
    profile_picture: "https://s3.amazonaws.com/cdmarket/profiles/luka.jpg",
    email: "luka.gru@gmail.com",
    phone: 41791234567,
    watchlists: [
        {
            _id: new ObjectId(),
            title: "CDs I want",
            saved_listing_ids: [listing2, listing4]
        }
    ]
});
db.users.insertMany([
    {
        _id: user2,
        username: "sara_h",
        profile_picture: "https://s3.amazonaws.com/cdmarket/profiles/sara.jpg",
        email: "sara@mail.com",
        phone: 41798765432,
        watchlists: [
            {
                _id: new ObjectId(),
                title: "Wishlist",
                saved_listing_ids: [listing1, listing3]
            },
            {
                _id: new ObjectId(),
                title: "Cheap ones",
                saved_listing_ids: [listing5]
            }
        ]
    },
    {
        _id: user3,
        username: "tobia_k",
        profile_picture: "https://s3.amazonaws.com/cdmarket/profiles/tobia.jpg",
        email: "tobia@mail.com",
        phone: 41791112233,
        watchlists: []
    }
]);



// |--- listings ---|

db.listings.insertOne({
    _id: listing1,
    title: "Stomach Book - Sophmore Slump Callithump, mint condition",
    cover_image: "https://s3.amazonaws.com/cdmarket/listings/listing1.jpg",
    description: "Bought it at a small show, barely played. Still has the original wrap.",
    price: 22.50,
    condition: "mint",
    tags: ["indie", "bedroom pop", "rare", "signed"],
    user_id: user1,
    album: {
        _id: new ObjectId(),
        title: "Sophmore Slump Callithump",
        artist: "Stomach Book",
        release_date: new Date("2022-09-01"),
        cover_url: "https://s3.amazonaws.com/cdmarket/covers/stomach_book_ssc.jpg"
    }
});
db.listings.insertMany([
    {
        _id: listing2,
        title: "Mitski - Puberty 2, good condition",
        cover_image: "https://s3.amazonaws.com/cdmarket/listings/listing2.jpg",
        description: "Played a few times but still in great shape. One of my favourites.",
        price: 18.00,
        condition: "good",
        tags: ["indie", "art rock", "mitski"],
        user_id: user2,
        album: {
            _id: new ObjectId(),
            title: "Puberty 2",
            artist: "Mitski",
            release_date: new Date("2016-06-17"),
            cover_url: "https://s3.amazonaws.com/cdmarket/covers/mitski_puberty2.jpg"
        }
    },
    {
        _id: listing3,
        title: "Björk - Homogenic, sealed",
        cover_image: "https://s3.amazonaws.com/cdmarket/listings/listing3.jpg",
        description: "Never opened, bought two copies at a record fair.",
        price: 35.00,
        condition: "mint",
        tags: ["electronic", "art pop", "sealed", "rare"],
        user_id: user1,
        album: {
            _id: new ObjectId(),
            title: "Homogenic",
            artist: "Björk",
            release_date: new Date("1997-09-22"),
            cover_url: "https://s3.amazonaws.com/cdmarket/covers/bjork_homogenic.jpg"
        }
    },
    {
        _id: listing4,
        title: "Kate Bush - Hounds of Love, fair condition",
        cover_image: "https://s3.amazonaws.com/cdmarket/listings/listing4.jpg",
        description: "Has some light scratches but plays perfectly. A true classic.",
        price: 14.00,
        condition: "fair",
        tags: ["art pop", "classic", "80s", "cheap"],
        user_id: user3,
        album: {
            _id: new ObjectId(),
            title: "Hounds of Love",
            artist: "Kate Bush",
            release_date: new Date("1985-09-16"),
            cover_url: "https://s3.amazonaws.com/cdmarket/covers/kate_bush_hounds.jpg"
        }
    },
    {
        _id: listing5,
        title: "Pastel Ghost - Aether, good condition",
        cover_image: "https://s3.amazonaws.com/cdmarket/listings/listing5.jpg",
        description: "Kept in sleeve, minimal wear. Hard to find physical copy.",
        price: 28.00,
        condition: "good",
        tags: ["darkwave", "synthpop", "rare"],
        user_id: user2,
        album: {
            _id: new ObjectId(),
            title: "Aether",
            artist: "Pastel Ghost",
            release_date: new Date("2013-05-14"),
            cover_url: "https://s3.amazonaws.com/cdmarket/covers/pastel_ghost_aether.jpg"
        }
    }
]);
