window.onload = function () {
	
	//var maze= document.getElementById("boundary1");
	var maze= document.getElementsByClassName("boundary");
	var lose= document.getElementsByClassName("youlose");
	
	for(var x=0;x<=4;x++)
		{
			maze[x].addEventListener("mouseover", function()
			{
				for(var z=0;z<=4;z++)
				{
					maze[z].setAttribute("class", "boundary youlose");
				}				
			});
		}

}