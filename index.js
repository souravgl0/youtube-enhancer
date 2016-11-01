var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var button = buttons.ActionButton({
	id: "mozilla-link",
	label: "Visit Mozilla",
	icon: {
		"16":"./Pause.png"
	},
	onClick: act
});


/*var toggle = Hotkey({
  combo: "accel-alt-shift-o",
  onPress: hide
  });*/
var paused=false;
var yttabs = [];
var lastpaused=0;

function act()
{
	console.log("paused:   "+ paused + "lastpaused:   "+ lastpaused);
	if(paused=="true")
	{
		paused=false;
		tabs[lastpaused].attach({
			contentScript: "document.getElementById('movie_player').wrappedJSObject.playVideo();"
		});
		return;
	}

	var i=0;
	for(;i<tabs.length;i++)
	{
		console.log(i+"   "+tabs[i].url);
		if(tabs[i].url.indexOf("youtube.com")>-1)
		{
			yttabs.push(i);

			var state=tabs[i].attach({
				contentScriptFile: "./google.js"

			});
			state.port.on("Paused",function(message){
				if(message=="Paused")
				{
					paused=true;
					lastpaused=i;
				}
			});

		}

	}

/*	for(i=0;i<yttabs.length;i++)
	{
		tabs[yttabs[i]].attach({
			contentScript: 'document.getElementById("movie_player").wrappedJSObject.pauseVideo();'
		});
	}*/
}


