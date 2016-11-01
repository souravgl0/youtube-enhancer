var player = document.getElementById("movie_player").wrappedJSObject;
self.port.emit("state",player.getPlayerState());
