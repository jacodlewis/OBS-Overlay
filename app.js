
var player_uuid = "f7ac6ca3-3282-48cf-a28c-f1d036f67fa0";
var auth_key = "fe04804d-08f3-41a3-8656-9a540ba88e6c";

var wins, losses, wr, streak, kills, deaths, kd, beds;

function update_stats()
{
    fetch('https://api.hypixel.net/player?uuid='+ player_uuid +'&key='+ auth_key)
    .then(result => result.json())
    .then(({ player }) => {
        
        wins = player.stats.Bedwars.wins_bedwars;
        losses = player.stats.Bedwars.losses_bedwars;
        streak = player.stats.Bedwars.winstreak

        kills = player.stats.Bedwars.kills_bedwars;
        deaths = player.stats.Bedwars.deaths_bedwars;

        beds = player.stats.Bedwars.beds_broken_bedwars;
    })
}

setInterval(function(){ 
	update_stats();

    wr = wins/losses;
    kd = kills/deaths;
    document.getElementById("ws-count").innerHTML = "Streak: " + streak;
    document.getElementById("win-count").innerHTML = "Wins: " + wins;
    document.getElementById("win-rate").innerHTML = "WR: " + wr.toFixed(2);

    document.getElementById("kill-count").innerHTML = "Kills: " + kills;
    //document.getElementById("death-count").innerHTML = "Deaths: " + deaths;
    document.getElementById("kd-rate").innerHTML = "K/D: " + kd.toFixed(2);

    document.getElementById("bed-count").innerHTML = "Beds Destroyed: " + beds;
}, 2000);
//}, 60 * 1000 * 1);

document.addEventListener('DOMContentLoaded', function() {
    update_stats();
}, false);