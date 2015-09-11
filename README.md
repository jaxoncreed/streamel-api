# streamel-api

a [Sails](http://sailsjs.org) application. Serves streamel.


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