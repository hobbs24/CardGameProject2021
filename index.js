let deck = [ //Declaring the Array of Records
    {name: "Red 1", suit: "Red", value: "1", //The first element. Each element has the name, colour and value of their card
    }, {
        name: "Red 2", suit: "Red", value: "2",
    }, {
        name: "Red 3", suit: "Red", value: "3",
    }, {
        name: "Red 4", suit: "Red", value: "4",
    }, {
        name: "Red 5", suit: "Red", value: "5",
    }, {
        name: "Red 6", suit: "Red", value: "6",
    }, {
        name: "Red 7", suit: "Red", value: "7",
    }, {
        name: "Red 8", suit: "Red", value: "8",
    }, {
        name: "Red 9", suit: "Red", value: "9",
    }, {
        name: "Red 10", suit: "Red", value: "10",
    }, {
        name: "Black 1", suit: "Black", value: "1",
    }, {
        name: "Black 2", suit: "Black", value: "2",
    }, {
        name: "Black 3", suit: "Black", value: "3",
    }, {
        name: "Black 4", suit: "Black", value: "4",
    }, {
        name: "Black 5", suit: "Black", value: "5",
    }, {
        name: "Black 6", suit: "Black", value: "6",
    }, {
        name: "Black 7", suit: "Black", value: "7",
    }, {
        name: "Black 8", suit: "Black", value: "8",
    }, {
        name: "Black 9", suit: "Black", value: "9",
    }, {
        name: "Black 10", suit: "Black", value: "10",
    }, {
        name: "Yellow 1", suit: "Yellow", value: "1",
    }, {
        name: "Yellow 2", suit: "Yellow", value: "2",
    }, {
        name: "Yellow 3", suit: "Yellow", value: "4",
    }, {
        name: "Yellow 4", suit: "Yellow", value: "4",
    }, {
        name: "Yellow 5", suit: "Yellow", value: "5",
    }, {
        name: "Yellow 6", suit: "Yellow", value: "6",
    }, {
        name: "Yellow 7", suit: "Yellow", value: "7",
    }, {
        name: "Yellow 8", suit: "Yellow", value: "8",
    }, {
        name: "Yellow 9", suit: "Yellow", value: "9",
    }, {
        name: "Yellow 10", suit: "Yellow", value: "10",
    }
]
let p1Deck=[] //Pre-declares the player's decks and win count
let p2Deck=[]
let p1Wins=0
let p2Wins=0
let p1Card = 0 //Used to store the most recently picked up cards the players have
let p2Card = 0
let loggedIn = 0 //Shows how many players have logged in
let p1Name = 0 //Stores the names of players 1 and 2 and the password for player 1 (With p1Password only being used temporarily)
let p1Password = 0
let p2Name = 0
let username = 0 //username and password are used temporarily while authenticating
let password = 0
let justLoggedIn= false //Used to show if a player just logged in or not
let winReason = 0 //Used to show why the player won that round

function pageLoad(){ //The first function to run. When the page loads, this function runs to allow input from the submit button for logging in
    console.log("Deck before shuffling " +JSON.stringify(deck))
    document.getElementById("login").addEventListener("submit", processLogin) //If the submit button is clicked, the processLogin functions runs
}
function authorisation(){
    let authorisedUsers = [{name:'Yaeger024', pass:'aot'}, {name: 'Excalibur', pass:'evLA55'}]
    //Array of authorised users (each in their own record) have their username and password declared
    console.log(username, password)
    let index=0 //Sets index to 0 to cycle through all indexes of the authorisedUsers array
    if((username===p1Name) && (password===p1Password)){ //Checks to see if player 2 is trying to input player 1's login
        alert("You can't input the same name and password in for both players") //Outputs a warning and doesn't allow them to play the game
    }
    else if((username!==p1Name) || (password!==p1Password)){ //If player 2 doesn't input player 1's login, their login details get searched for
        for(let i=0;i<authorisedUsers.length;i++){ //For loop that runs until either the username and password match or all elements have been checked
            if((authorisedUsers[index].name===username) && (authorisedUsers[index].pass===password)){
                //If statement checks to see if the inputted username=a stored username at index in the authorisedUsers array
                loggedIn+=1 //Adds one to variable 'loggedIn' to say how many players have logged in
                document.getElementById("login").reset() //Resets the username and password fields
                alert("Player has successfully logged in.")
                if(loggedIn===1){ //Checks to see if player 1 has logged in,
                    p1Name = username //Assigns inputted username to p1Name
                    p1Password = password //Assigns inputted password to password
                    document.getElementById("p1Name").innerHTML = p1Name //Outputs player 1's name to the html page
                    justLoggedIn = true //Sets variable to true so that a below if statement doesn't run when player 1 successfully logs in
                }
                if(loggedIn===2) {
                    p2Name = username //Assigns inputted username to variable
                    document.getElementById("p2Name").innerHTML = p2Name //Outputs player 2's name to the html page
                    shuffle(deck) //Once both players have logged in, the deck gets shuffled
                }
                break //Ends the for loop if a player has logged in
            }
            else{
                index++ //If no username was found, the next index is checked
                justLoggedIn = false //Sets variable to false so that the below variable can run if a player doesn't manage to login successfully
            }
        }
        if(!justLoggedIn&&loggedIn<2){ //Runs if at least one player hasn't logged in and there's been an attempt after player 1 logged in
            alert("Your credentials are wrong.") //User is alerted their credentials are wrong and can try to login again
        }
    }
    return(loggedIn)
}
function processLogin(){ //The function to ensure only authorised users can play
    event.preventDefault() //Prevents the submit button from submitting a form
    username=document.getElementById("username").value //Assigns user input from the username field to variable username
    password=document.getElementById("password").value //Assigns user input from the password field to variable password
    if((username.length===0) || (password.length===0)){
        alert("You didn't input anything into at least one of the fields, try again")
    }
    else if(loggedIn<2){ //If at least one player hasn't been authorised, this if statement runs
        authorisation(loggedIn, username, password) //Calls the authorisation function
    }
    else if(loggedIn===2){ //If both players have logged in, this runs
        shuffle(deck) //Calls the shuffle function and runs it with the array 'deck'
    }
}
function shuffle(deck) { //Runs the shuffle function with the array 'deck'
    //Below randomises (shuffles) the array (deck)
    let i = deck.length
    while (0 !== i) { //Provides an ending condition to the shuffling
        let index = Math.floor(Math.random() * deck.length) //Randomises a whole number for an element
        i -= 1 //Picking a remaining element
        let temp = deck[i] //Adding the element to a temporary variable to be assigned later
        deck[i] = deck[index] //Assigns a value to its new spot
        deck[index] = temp //Assigning the temporary variable to its new spot
    }
    alert("Deck has been shuffled. You may now play.") //Alerts the user they can actually play the game now
    console.log("Deck after shuffling " +JSON.stringify(deck))
    return(deck) //Returns deck to the function 'processLogin'
}
function p1RoundWins(){
    p1Deck.push(p1Card.name, p2Card.name) //Adds both players' card to player 1's deck (an array)
    p1Wins++ //Adds one to player 1's wins
    console.log("P1Deck "+JSON.stringify(p1Deck))
    console.log("P1Wins "+p1Wins)
    document.getElementById("winner-declaration").innerHTML = p1Name //Displays that player 1 won that round
    document.getElementById("winner-reason").innerHTML = "Due to having the "+winReason //Displays the reason player 1 beat player 2
}
function p2RoundWins(){
    p2Deck.push(p1Card.name, p2Card.name)  //Adds both players' cards to player 2's deck (an array)
    p2Wins++ //Adds one to player 2's wins
    console.log(JSON.stringify(p2Deck))
    console.log(p2Wins)
    document.getElementById("winner-declaration").innerHTML = p2Name
    document.getElementById("winner-reason").innerHTML = "Due to having the "+winReason //Displays the reason player 2 beat player 1
}
function pickup(){ //The pickup function is declared when the pickup button is clicked
    console.log(loggedIn)
    if(loggedIn===2){
        if((p1Wins+p2Wins)<15){ //Ensures that not all the cards have bee played yet
            p1Card=deck[0] //Assigns the first element to variable 'p1Card' as player 1's card
            document.getElementById("player1").innerHTML = p1Card.name //Displays the name of player 1's card on the webpage
            deck.shift() //Removes the first element of the array 'deck' and shifts everything else down by one
            p2Card=deck[0] //Assigns the new first element to variable 'p2Card' as player 2's card
            document.getElementById("player2").innerHTML = p2Card.name //Displays the name of player 2's card on the webpage
            deck.shift() //Removes the first element in the array again
            console.log("Deck after losing 2 cards " +JSON.stringify(deck))
            if(p1Card.suit===p2Card.suit){ //Checks to see if the players' cards are the same colour
                winReason = "greater number"
                if(p1Card.value>p2Card.value){ //Checks to see if player 1's card has a higher value than player 2
                    p1RoundWins()
                }
                else{//Runs if player 2's card has a higher value than player 1's
                    p2RoundWins()
                }
            }
            else if(p1Card.suit==="Red"&&p2Card.suit==="Black"){ //Checks to see if player 1 has the dominant card in this situation
                winReason = "dominant colour (Red beats Black)"
                p1RoundWins()
            }
            else if(p2Card.suit==="Red"&&p1Card.suit==="Black"){ //Checks to see if player 2 has the dominant card in this situation
                winReason = "dominant colour (Red beats Black)"
                p2RoundWins()
            }
            else if(p1Card.suit==="Yellow"&&p2Card.suit==="Red"){ //Checks to see if player 1 has the dominant card in this situation
                winReason = "dominant colour (Yellow beats Red)"
                p1RoundWins()
            }
            else if(p2Card.suit==="Yellow"&&p1Card.suit==="Red"){ //Checks to see if player 2 has the dominant card in this situation
                winReason = "dominant colour (Yellow beats Red)"
                p2RoundWins()
            }
            else if(p1Card.suit==="Black"&&p2Card.suit==="Yellow"){ //Checks to see if player 1 has the dominant card in this situation
                winReason = "dominant colour (Black beats Yellow)"
                p1RoundWins()
            }
            else if(p2Card.suit==="Black"&&p1Card.suit==="Yellow"){ //Checks to see if player 2 has the dominant card in this situation
                winReason = "dominant colour (Black beats Yellow)"
                p2RoundWins()
            }
        }
        else if((p1Wins+p2Wins)>=15){ //Runs once all the cards have been played
            alert("That is the end of the game") //Alerts the players that the game is over
            if(p1Wins>p2Wins){ //Checks to see if player 1 won the game overall
                document.getElementById("deck_outputs").innerHTML = p1Name+" wins with "+p1Wins+" rounds won. Here is their deck: "+JSON.stringify(p1Deck)
                //Displays player 1's deck if they won
            }
            else{
                document.getElementById("deck_outputs").innerHTML = p2Name+" wins with "+p2Wins+" rounds won. Here is their deck: "+JSON.stringify(p2Deck)
                //Displays player 2's deck if they won
            }

        }
    }
    else{ //If at least one of the players hasn't logged in, they will be told to if the click the button
        alert("You must login in both players before playing.")
    }
}
