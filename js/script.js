$('document').ready(function () {
	var dice = new buzz.sound( '/_projets/dice/media/dice', { formats: [ 'ogg','mp3' ] } );
	
	var rndm = function (){
		var nmbr = Math.round(Math.random()*5);
		return nmbr+1;
	}
	
	var twoDices = function (){
		return rndm() + "-" + rndm();
	}
	
	var threeDices = function (){
		return rndm() + "-" + rndm() + "-" + rndm();
	}
	// $('#game').click(function (){
	// 		$('.screen').text(rndm());
	// 	});
	$('div.btn.oneDice').click(function (){
		$(this).toggleClass('clicked');
		window.setTimeout(function(){$('div.btn.oneDice').removeClass('clicked');}, 400);
		$('.screen').text(rndm());
		dice.play();
	});
	$('div.btn.twoDices').click(function (){
		$(this).toggleClass('clicked');
		window.setTimeout(function(){$('div.btn.twoDices').removeClass('clicked');}, 400);
		$('.screen').text(twoDices());
		dice.play();
	});
	$('div.btn.threeDices').click(function (){
		$(this).toggleClass('clicked');
		window.setTimeout(function(){$('div.btn.threeDices').removeClass('clicked');}, 400);
		$('.screen').text(threeDices());
		dice.play();
	});
});