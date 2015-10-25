# streamel-api

a [Sails](http://sailsjs.org) application. Serves streamel.

##Create a User
```
POST http://localhost:1337/user
{
    "meta": {
        "type": "user",
        "name": "John Doe",
        "description": "I like starring in movies.",
        "tags": [],
        "searchable": false
    },
    "email": "john@example.com",
    "password": "123456"
}
```














##Add a sereis:

POST http://localhost:1337/series

{
    "name": "The Tommy Show",
    "description": "It's the Tommy Show!",
    "user": "admin",
    "thumbnail": "http://cms.streamel.com/images/testPoster.jpg",
    "episodes": [
        {
            "name": "Meet Tommy",
            "description": "He's Great!",
            "thumbnail": "http://cms.streamel.com/images/test.png",
            "url": "http://videos.streamel.com/videos/test.mp4"
        },
        {
            "name": "Tommy goes to school",
            "description": "Will his teacher be mean?",
            "thumbnail": "http://cms.streamel.com/images/test.png",
            "url": "http://videos.streamel.com/videos/test.mp4"
        }
    ]
}

##Search for a series

http://localhost:1337/series/search?q=tommy




{
    "name": "Getting to Ten (Sample)",
    "description": "Tensions run high as two best friends attempt to achieve a goal they've been working towards for years.",
    "user": "admin",
    "thumbnail": "http://cms.streamel.com/images/sample1Poster.png",
    "episodes": [
        {
            "name": "Getting to Ten",
            "description": "Tensions run high as two best friends attempt to achieve a goal they've been working towards for years.",
            "thumbnail": "http://cms.streamel.com/images/sample1Thumbnail.png",
            "url": "http://videos.streamel.com/videos/sample1.mp4"
        }
    ]
}