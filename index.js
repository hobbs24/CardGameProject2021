let deck = [ //Declaring the Array of Records
  {
    name: "R1", suit: "Red", value: "1", //The firs element. Each element has an identifier (name) and belongs to 2 groups(suit and value)
  }, {
    name: "R2", suit: "Red", value: "2",
  }, {
    name: "R3", suit: "Red", value: "3",
  }, {
    name: "R4", suit: "Red", value: "4",
  }, {
    name: "R5", suit: "Red", value: "5",
  }, {
    name: "R6", suit: "Red", value: "6",
  }, {
    name: "R7", suit: "Red", value: "7",
  }, {
    name: "R8", suit: "Red", value: "8",
  }, {
    name: "R9", suit: "Red", value: "9",
  }, {
    name: "R10", suit: "Red", value: "10",
  }, {
    name: "B1", suit: "Black", value: "1",
  }, {
    name: "B2", suit: "Black", value: "2",
  }, {
    name: "B3", suit: "Black", value: "3",
  }, {
    name: "B4", suit: "Black", value: "4",
  }, {
    name: "B5", suit: "Black", value: "5",
  }, {
    name: "B6", suit: "Black", value: "6",
  }, {
    name: "B7", suit: "Black", value: "7",
  }, {
    name: "B8", suit: "Black", value: "8",
  }, {
    name: "B9", suit: "Black", value: "9",
  }, {
    name: "B10", suit: "Black", value: "10",
  }, {
    name: "Y1", suit: "Yellow", value: "1",
  }, {
    name: "Y2", suit: "Yellow", value: "2",
  }, {
    name: "Y3", suit: "Yellow", value: "4",
  }, {
    name: "Y4", suit: "Yellow", value: "4",
  }, {
    name: "Y5", suit: "Yellow", value: "5",
  }, {
    name: "Y6", suit: "Yellow", value: "6",
  }, {
    name: "Y7", suit: "Yellow", value: "7",
  }, {
    name: "Y8", suit: "Yellow", value: "8",
  }, {
    name: "Y9", suit: "Yellow", value: "9",
  }, {
    name: "Y10", suit: "Yellow", value: "10",
  }
]
function shuffle(deck) {
  //Below randomises (shuffles) the array (deck)
  let i = deck.length
  while (0 !== i) { //Provides an ending condition to the shuffling
    let index = Math.floor(Math.random() * deck.length) //Randomises a whole number for an element
    i -= 1 //Picking a remaining element
    let temp = deck[i] //Adding the element to a temporary variable to be assignd later
    deck[i] = deck[index] 
    deck[index] = temp //assigning the temporary variable to its new spot
  } 
}
function play(deck){
  shuffle(deck) //Calls the shuffle function to shuffle the deck before playing
  let p1_wins = 0 //Pre-declaring some variables so they can be used later on without causing any errors
  let p2_wins = 0
  let top = 0 //This will be used regularly to decide what card each player gets from the deck
  for(let count=0; count<15; count++){ //Setting up a for loop to not have to retype everything, or copy and paste
    let p1_card = deck[top] //Asigns a card to each player, with the second getting the card after player 1's
    let p2_card = deck[top+1]
    console.log("Player 1's card is " + p1_card.name) //Allows the users to know their cards and can be used to test if the program works as intended
    console.log("Player 2's card is " + p2_card.name)
    if(p1_card.suit == p2_card.suit){ //The first comparison to help decide who the winner of the round is, comparing the cards' colours to se eif they're the same
      if(p1_card.value>p2_card.value){ //The following awards the player's whose card's value is highest a point
        console.log("Player 1 has won this round.\n")
        p1_wins += 1}
      else if(p2_card.value>p1_card.value){
        console.log("Player 2 has won this round.\n")
        p2_wins += 1}
    }
    if(p1_card.suit == "Red" && p2_card.suit == "Black"){ //The following test to see what the conditions are for colour sets, then awards the points as intended
      console.log("Player 1 has won this round.\n")
      p1_wins += 1}
    else if(p2_card.suit == "Red" && p1_card.suit == "Black"){
      console.log("Player 2 has won this round.\n")
      p2_wins += 1}
    else if(p1_card.suit == "Yellow" && p2_card.suit == "Red"){
      console.log("Player 1 has won this round.\n")
      p1_wins += 1}
    else if(p2_card.suit == "Yellow" && p1_card.suit == "Red"){
      console.log("Player 2 has won this round.\n")
      p2_wins += 1}
    else if(p1_card.suit == "Black" && p2_card.suit == "Yellow"){
      console.log("Player 1 has won this round.\n")
      p1_wins += 1}
    else if(p2_card.suit == "Black" && p1_card.suit == "Yellow"){
      console.log("Player 2 has won this round.\n")
      p2_wins += 1}
    top += 2 //Adds 2 to top so that when player 1 takes another card, it'll come after the one player 2 took
  } 
  console.log("_____________________THE RESULTS_____________________")
  console.log("Player 1 won " + p1_wins + " rounds.") //Simple concatenation to show the players who won how many
  console.log("Player 2 won " + p2_wins + " rounds.")
  if(p1_wins>p2_wins){ //Tests to see which player won the game
    console.log("Player 1 has won the game.")}
  else{
    console.log("Player 2 has won the game.")}
}
play(deck)

