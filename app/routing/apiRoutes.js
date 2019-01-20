let friendsData = require('../data/friends');
let scoreDiffArr = [];

console.log(friendsData);
module.exports = function(app) {
    app.get('/api/friends', (req, res) => {
        res.json(friendsData);
    }),
    app.post('/api/friends', (req, res) => {
        let newFriend = req.body;
        let scoreDifferential = 0;
        console.log(newFriend);
        friendsData.push(req.body);
        console.log(newFriend.scores[0], newFriend.name);
        for(let i = 0; i < friendsData.length; i++) {
            for(let j = 0; j < 10; j++) {
                scoreDifferential += Math.abs(newFriend.scores[j] - friendsData[i].scores[j]);
                console.log(newFriend.scores, friendsData[i].scores);
            } 
        }
        scoreDiffArr.push(scoreDifferential);
        console.log(scoreDiffArr);
    });
}