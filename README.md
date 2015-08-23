# streamel-api

a [Sails](http://sailsjs.org) application. Serves streamel.


##Add a sereis:

POST http://localhost:1337/series

{
    "name": "The Tommy Show",
    "description": "It's the Tommy Show!",
    "user": "admin",
    "episodes": [
        {
            "name": "Meet Tommy",
            "description": "He's Great!",
            "url": "sampleUrl"
        },
        {
            "name": "Tommy goes to school",
            "description": "Will his teacher be mean?",
            "url": "sampleUrl"
        }
    ]
}

##Search for a series

http://localhost:1337/series/search?q=tommy