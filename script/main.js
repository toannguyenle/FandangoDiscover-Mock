/*VARIABLES*/
var points = 0;

/*FUNCTIONS*/
updatePoints = function(){
	document.getElementsByClassName('points').length
	for(i = 0; i < document.getElementsByClassName('points').length; i++){
		document.getElementsByClassName('points')[i].innerHTML = points;
	}
}

/*PROGRAM*/
updatePoints();