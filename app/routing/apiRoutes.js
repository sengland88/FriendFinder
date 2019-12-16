var friendsData = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function(req, res) {

        var newRes = req.body

        newRes.routeName = newRes.name.replace(/\s+/g, "").toLowerCase();    
        friendsData.push(newRes);
      
      });

};