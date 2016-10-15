window.onload = function () {
	
	//var maze= document.getElementById("boundary1");
	var maze= document.getElementsByClassName("boundary");
	var lose= document.getElementsByClassName("youlose");
	var win=false;
	var lose= true;
	var start= false;
	var leftm= document.getElementById("maze").offsetLeft;
	//var top= document.getElementById("boundary").offsetLeft;
	//var height= document.getElementById("start").offsetHeight;
	//var width= document.getElementById("boundary")[3].offsetWidth;
	//var X= event.clientX;
	//var Y= event.clientY;
	var X;     // Get the horizontal coordinate
	var Y;     // Get the vertical coordinate
	var coor = "X coords: " + X + ", Y coords: " + Y;
	
	for(var x=0;x<=4;x++)
	{
			maze[x].addEventListener("mouseover", function()
			{
				if(!win)
				{
					for(var z=0;z<=4;z++)
					{
						maze[z].setAttribute("class", "boundary youlose");
					}
					start= false;
					lose=false;
					document.getElementById("status").innerHTML="You Lose!";
				}
			});
	}
	
	
	document.addEventListener("mousemove", function(){
		if(start && !win)
		{
			X = event.clientX;   
			Y = event.clientY;
			console.log("left is here " +leftm);
			console.log("x is here " +X);
			if(start && X<leftm)
			{
				for(var z=0;z<=4;z++)
				{
					maze[z].setAttribute("class", "boundary youlose");
				}
				start= false;
				lose=false;
				document.getElementById("status").innerHTML="You Lose!"
				console.log("here" +leftm);
				//console.log(x axis is);
			}
		}
	
	});
	
	
	document.getElementById("start").addEventListener("click", function()
	{
		for(var z=0;z<=4;z++)
		{
			maze[z].setAttribute("class", "boundary");
		}
		win=false;
		lose=true;
		start=true;
		document.getElementById("status").innerHTML="Move your mouse over the \"S\" to begin.";
	});
		
		
	document.getElementById("end").addEventListener("mouseover",function()
	{
		if(lose && start)
		{
			document.getElementById("status").innerHTML="You win!";
			win=true;
		}
	});
}
