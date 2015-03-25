/* Turnstile         */
/* by Brian Cottrell */
/* 03-24-2015        */

//Turnsile object
var Turnstile = function(){
    var locked = true;
    return {
        coin: function() {locked = false},
        turn: function() {locked = true},
        state: function() {return locked}
    }
}
//Interface for running the turnstile
runTurnstile = function(turnstile, text){
	switch(prompt((text||'Welcome to the turnstile')+'\nType \'coin\' to add a coin\nType \'turn\' to turn the bar\nType \'state\' to check the state')){
		case 'coin': 
			if(turnstile.state()){
				turnstile.coin(); 
				runTurnstile(turnstile, 'The turnstile is now opened');
			}else{
				turnstile.coin(); 
				runTurnstile(turnstile, 'The turnstile is already unlocked');
			}
			break; 
		case 'turn': 
			if(turnstile.state()){
				turnstile.turn(); 
				runTurnstile(turnstile, 'The turnstile is locked');
			}else{
				turnstile.turn(); 
				runTurnstile(turnstile, 'The turnstile has turned');
			}
			break; 
		case 'state': 
			if(turnstile.state()){
				runTurnstile(turnstile, 'The turnstile is locked');
			}else{
				runTurnstile(turnstile, 'The turnstile is unlocked');
			}
			break; 
		default: 
			break;
	}
}
//Create a new turnstile
var turnstile = Turnstile();
//Run the turnstile
runTurnstile(turnstile);