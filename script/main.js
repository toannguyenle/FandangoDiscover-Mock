/*VARIABLES*/
var points = 0;

/*FUNCTIONS*/
loadPage = function(){
	document.getElementById('f7').style.display = 'none';
	document.getElementById('profile').style.visibility = 'none';	
	document.getElementById('buy_tickets').addEventListener('click', buyTickets, false);
	document.getElementById('watch_trailer').addEventListener('click', watchTrailer, false);
	document.getElementById('check_in').addEventListener('click', checkIn, false);
	document.getElementById('quiz').addEventListener('click', quiz, false);
	document.getElementById('fb_like').addEventListener('click', fbLike, false);
	document.getElementById('fb_share').addEventListener('click', fbShare, false);
	document.getElementById('twitter_follow').addEventListener('click', twitterFollow, false);
	document.getElementById('twitter_share').addEventListener('click', twitterShare, false);
	document.getElementById('fd-logo').addEventListener('click', goToHome, false);
	document.getElementById('fd-user').addEventListener('click', goToProfile, false);
	document.getElementById('fd-f7').addEventListener('click', goToF7, false);
}

goToHome = function(){
	document.getElementById('f7').style.display = 'none';
	document.getElementById('profile').style.visibility = 'none';
	document.getElementById('home').style.display = 'inline';
}

goToF7 = function(){
	document.getElementById('profile').style.display = 'none';
	document.getElementById('home').style.display = 'none';
	document.getElementById('f7').style.display = 'inline';
}

goToProfile = function(){
	document.getElementById('f7').style.visibility = 'none';
	document.getElementById('home').style.display = 'none';
	document.getElementById('profile').style.display = 'inline';
}

buyTickets = function(){
	document.getElementById('buy_tickets').style.display = 'none';
	document.getElementById('buy_tickets_check').style.display = 'inline';
	updatePoints(300);
}

watchTrailer = function(){
	document.getElementById('watch_trailer').style.display = 'none';
	document.getElementById('watch_trailer_check').style.display = 'inline';
	updatePoints(20);
}

checkIn = function(){
	document.getElementById('check_in').style.display = 'none';
	document.getElementById('check_in_check').style.display = 'inline';
	updatePoints(900);
}

quiz = function(){
	document.getElementById('quiz').style.display = 'none';
	document.getElementById('quiz_check').style.display = 'inline';
	updatePoints(3);
}

fbLike = function(){
	document.getElementById('fb_like').style.display = 'none';
	document.getElementById('fb_like_check').style.display = 'inline';
	updatePoints(1);
}

fbShare = function(){
	document.getElementById('fb_share').style.display = 'none';
	document.getElementById('fb_share_check').style.display = 'inline';
	updatePoints(1);
}

twitterFollow = function(){
	document.getElementById('twitter_follow').style.display = 'none';
	document.getElementById('twitter_follow_check').style.display = 'inline';
	updatePoints(1);
}

twitterShare = function(){
	document.getElementById('twitter_share').style.display = 'none';
	document.getElementById('twitter_share_check').style.display = 'inline';
	updatePoints(1);
}

updatePoints = function(pointValue){
	if(pointValue)
		points += pointValue;
	document.getElementsByClassName('points').length;
	for(i = 0; i < document.getElementsByClassName('points').length; i++){
		document.getElementsByClassName('points')[i].innerHTML = points;
	}
	if(points >= 1000){
		document.getElementById('winner').style.display = 'inline';
	}
}

/*PROGRAM*/
loadPage();
updatePoints();