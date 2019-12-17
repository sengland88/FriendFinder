var friendsData = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function(req, res) {

        let checking = 0;
        let bestMatch;
        let score = 100;

        userData = req.body;    
        userData.scores = userData.scores.map(function(item) {
            return parseInt(item, 10);
        });

        sum = userData.scores.reduce((a, b) => a + b, 0);
 
        for (let i = 0 ; i < friendsData.length ; i++) {

            let bfriendScore = friendsData[i].scores.reduce((a, b) => a + b, 0);
            let totalDifference = Math.abs(sum - bfriendScore);

            if (totalDifference <= score) {
                bestMatch = friendsData[i];
                score = totalDifference;
            }  

            checking++
            console.log(checking)
        };

        if (friendsData.length = checking) {
            friendsData.push(userData);
            console.log(friendsData)
            res.json(bestMatch)
        }
  
      });

};