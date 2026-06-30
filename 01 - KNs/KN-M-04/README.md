# KN-M-04



## A) Aggregationen
### Script
[Link](aggregate.js)
### Screenshot
![Bild](../../02%20-%20Resources/01%20-%20Images/kn-m-04__a1.jpg)
![Bild](../../02%20-%20Resources/01%20-%20Images/kn-m-04__a2.jpg)
![Bild](../../02%20-%20Resources/01%20-%20Images/kn-m-04__a3.jpg)



---



## B) Join-Aggregation
### Script
[Link](lookup.js)
### Screenshot
![Bild](../../02%20-%20Resources/01%20-%20Images/kn-m-04__b1.jpg)
No result could be completly shown in one image, so here is one wrighten down:
```javascript
{
  _id: ObjectId('6a43968c9e9db516a60c804a'),
  title: 'Stomach Book - Sophmore Slump Callithump, mint condition',
  cover_image: 'https://s3.amazonaws.com/cdmarket/listings/listing1.jpg',
  description: 'Bought it at a small show, barely played. Still has the original wrap.',
  price: 22.5,
  condition: 'mint',
  tags: [
    'indie',
    'bedroom pop',
    'rare',
    'signed'
  ],
  user_id: ObjectId('6a43968c9e9db516a60c8047'),
  album: {
    _id: ObjectId('6a43968c9e9db516a60c8052'),
    title: 'Sophmore Slump Callithump',
    artist: 'Stomach Book',
    release_date: 2022-09-01T00:00:00.000Z,
    cover_url: 'https://s3.amazonaws.com/cdmarket/covers/stomach_book_ssc.jpg'
  },
  seller_info: [
    {
      _id: ObjectId('6a43968c9e9db516a60c8047'),
      username: 'luka_g',
      profile_picture: 'https://s3.amazonaws.com/cdmarket/profiles/luka.jpg',
      email: 'luka.grujic@gmail.com',
      phone: Long('41791234567'),
      watchlists: [
        {
          _id: ObjectId('6a43968c9e9db516a60c804f'),
          title: 'CDs I want',
          saved_listing_ids: [
            ObjectId('6a43968c9e9db516a60c804b'),
            ObjectId('6a43968c9e9db516a60c804d')
          ]
        }
      ]
    }
  ]
}
```
![Bild](../../02%20-%20Resources/01%20-%20Images/kn-m-04__b2.jpg)



---



## C) Unter-Dokumente / Arrays
### Script
[Link](subdocuments.js)
### Screenshot
![Bild](../../02%20-%20Resources/01%20-%20Images/kn-m-04__c1.jpg)
![Bild](../../02%20-%20Resources/01%20-%20Images/kn-m-04__c2.jpg)
![Bild](../../02%20-%20Resources/01%20-%20Images/kn-m-04__c3.jpg)
