function Deck() {
	this.reset();
}
	

Deck.prototype.reset = function() {
	console.log('hello');
	this.suit =  ['Spades', 'Clubs', 'Hearts', 'Diamonds'],	
	this.value = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'],	

	self = this;

	this.deck = [];

	for (i = 0; i < this.suit.length; i ++) {
		for (j = 0; j < this.value.length; j ++) {
			var card = this.value[j] + " of " + this.suit[i];
			self.deck.push(card);
		}
	}
	return this;
}








var myDeck = new Deck();

//console.log(myDeck.reset());


Deck.prototype.shuffle = function() {
	var m = this.deck.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = this.deck[m];
    this.deck[m] = this.deck[i];
    this.deck[i] = t;
  }

  return this;
  
}

myDeck.shuffle();


// Deal from the top, (remember to shuffle first)
Deck.prototype.deal = function() {
	
	
	return this.deck.pop();
	
}

function Player (name) {
	this.name = name;
	
	this.hand = [];
}

Player.prototype.take = function (deck) {
	this.hand.push(deck.deal()); 
	
	return this;

}


Player.prototype.discard = function (hand) {
	this.hand.pop(); 
	
	return this;

}

var Rick = new Player('Rick');
console.log(Rick.take(myDeck));

console.log(myDeck.deal());
console.log(myDeck.deck.length);