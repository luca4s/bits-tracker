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
        var xhttp = XMLHttpRequest();
        xhttp.open("GET", `https://badges.roblox.com/v1/badges/${ID}`);
        xhttp.send();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
               console.log(xhttp.responseText)
            }
        };
    });
}
updateData()