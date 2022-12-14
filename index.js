const badges = {
    ["green"]: 2129465541,
    ["blue"]: 2129271749,
    ["bathroomflood"]: 2129371014,
    ["candyflood"]: 2129371017,
    ["bob"]: 2129371021,
    ["purple"]: 2129371024
};
const data = {
    ["green"]: {["awardedyesterday"]: 0, ["awarded"]: 0},
    ["blue"]: {["awardedyesterday"]: 0, ["awarded"]: 0},
    ["bathroomflood"]: {["awardedyesterday"]: 0, ["awarded"]: 0},
    ["candyflood"]: {["awardedyesterday"]: 0, ["awarded"]: 0},
    ["bob"]: {["awardedyesterday"]: 0, ["awarded"]: 0},
    ["purple"]: {["awardedyesterday"]: 0, ["awarded"]: 0}
};
const API = "https://badges.roblox.com/v1/badges/"
function updateData() {
    Object.keys(badges).forEach(i => {
        var ID = badges[i];
        $.ajax({
            url: `https://badges.roblox.com/v1/badges/${ID}`,
            type: 'GET',
            crossDomain: true,
            dataType: 'jsonp',
            success: function(data) {
                console.log(data)
            },
            error: function(e) {
                console.log(e)
            }
        });
    });
}
updateData();