window.onload = function () {
	
	//var maze= document.getElementById("boundary1");
	var maze= document.getElementsByClassName("boundary");
	var lose= document.getElementsByClassName("youlose");
	var win= true;
	
	for(var x=0;x<=4;x++)
	{
			maze[x].addEventListener("mouseover", function()
			{
				for(var z=0;z<=4;z++)
				{
					maze[z].setAttribute("class", "boundary youlose");
				}
				win=false;
			});
	}
	
	document.getElementById("start").addEventListener("click", function()
	{
		for(var z=0;z<=4;z++)
		{
			maze[z].setAttribute("class", "boundary");
		}
		win=true;
	});
		
		
	document.getElementById("end").addEventListener("mouseover",function()
	{
		if(win)
		{
			alert("You win!");
		}
	});
}
