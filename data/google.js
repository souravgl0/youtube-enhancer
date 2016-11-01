var player = document.getElementById("movie_player").wrappedJSObject;
var state = player.getPlayerState();
if(state==1)
{
	player.pauseVideo();
	self.port.emit("Paused","Paused");
}
//document.getElementById("player-api").style.display="none";
