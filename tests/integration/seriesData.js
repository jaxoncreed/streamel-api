var should = require('should');

module.exports = [
    {
        title: "Should create a series",
        request: {
            method: "post",
            path: "/series",
            body: {
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
        },
        response: {
            status: 201,
            bodyTest: function(body, done) { 
                done() 
            }
        }
    }
];