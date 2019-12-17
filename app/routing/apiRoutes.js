var friendsData = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function(req, res) {

        let totalDifference = 0;
        let bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        }

        let userData = req.body;
        let userName = userData.name;
        let userScores = userData.scores

        let b = userScores.map(function(item) {
            return parseInt(item, 10);
        });

        userData = {
            name: req.body.name,
            photo: req.body.photo,
            scores: b
        };

        console.log(`Name: ${userName}`)
        console.log(`Score: ${userScores}`)   

        let sum = b.reduce((a, b) => a + b, 0);

        console.log(`Sum of User Score is ${sum}`)
        console.log(`Best Match Friend Difference ${bestMatch.friendDifference}`)
        console.log("*-*-*-*-*-*-*-")

        for (let i = 0 ; i < friendsData.length ; i++) {
            console.log("for loop works")
            console.log(friendsData[i].name)
            totalDifference = 0;
            console.log(`Total Difference ${totalDifference}`)
            console.log(`Best Match friend difference ${bestMatch.friendDifference}`)

            let bfriendScore = friendsData[i].scores.reduce((a, b) => a + b, 0);
            console.log(`Total friend score ${bfriendScore}`)
            totalDifference += Math.abs(sum - bfriendScore)
            console.log(`Here is the total difference: ${totalDifference}`)

            if (totalDifference <= bestMatch.friendDifference) {
                console.log("if statement works")
                bestMatch.name = friendsData[i].name;
                bestMatch.photo = friendsData[i].photo;
                bestMatch.friendDifference = totalDifference;
            } else {
                console.log("There is no one for you!")
            }
            console.log(`Here is the total difference: ${totalDifference}`)
        }   
            console.log(`Here is the best match: ${bestMatch.name}`)
            friendsData.push(userData);
            res.json(bestMatch)
      
      });

};