$(document).ready(function(){
		
		var game = new Game();
		game.initializeBoard();
		game.setRandomBoard();
		game.setEventListeners();
		game.redrawScreenFromArray();
		
});
