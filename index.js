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
let p1deck=[] //Pre-declares the player's decks and win count
let p2deck=[]
let p1wins=0
let p2wins=0
let logged_in = 0 //Shows how many players have logged in
let p1name = 0 //Stores the names of players 1 and 2 and the password for player 1
let p1password = 0
let p2name = 0
let just_logged_in = false //Used to show if a player just logged in or not

function pageLoad(){ //The first function to run. When the page loads, this function runs to allow input from the submit button for logging in
    document.getElementById("login").addEventListener("submit", processLogin) //If the submit button is clicked, the processLogin functions runs
}
function authorisation(){
    let authorised_users = [{name:'Yaeger024', pass:'aot'}, {name: 'Excalibur', pass:'evLA55'}]
    //Array of authorised users (each in their own record) have their username and password declared
    let index=0 //Sets index to 0 to cycle through all indexes of the authorised_users array
    let username=document.getElementById("username").value //Assigns user input from the username field to variable username
    let password=document.getElementById("password").value //Assigns user input from the password field to variable password
    if((username===p1name) && (password===p1password)){ //Checks to see if player 2 is trying to input player 1's login
        alert("You can't input the same name and password in for both players") //Outputs a warning and doesn't allow them to play the game
    }
    else if((username!==p1name) || (password!==p1password)){ //If player 2 doesn't input player 1's login, their login details get searched for
        for(let i=0;i<authorised_users.length;i++){ //For loop that runs until either the username and password match or all elements have been checked
            if((authorised_users[index].name===username) && (authorised_users[index].pass===password)){
                //If statement checks to see if the inputted username=a stored username at index in the authorised_users array
                logged_in+=1 //Adds one to variable 'logged_in' to say how many players have logged in
                document.getElementById("login").reset() //Resets the username and password fields
                alert("Player has successfully logged in.")
                if(logged_in===1){ //Checks to see if player 1 has logged in,
                    p1name = username //Assigns inputted username to p1name
                    p1password = password //Assigns inputted password to password
                    document.getElementById("p1name").innerHTML = p1name //Outputs player 1's name to the html page
                    just_logged_in = true //Sets variable to true so that a below if statement doesn't run when player 1 successfully logs in
                }
                if(logged_in===2) {
                    p2name = username //Assigns inputted username to variable
                    document.getElementById("p2name").innerHTML = p2name //Outputs player 2's name to the html page
                    shuffle(deck) //Once both players have logged in, the deck gets shuffled
                }
                break //Ends the for loop if a player has logged in
            }
            else{
                index++ //If no username was found, the next index is checked
                just_logged_in = false //Sets variable to false so that the below variable can run if a player doesn't manage to login successfully
            }
        }
        if(!just_logged_in&&logged_in<2){ //Runs if at least one player hasn't logged in and there's been an attempt after player 1 logged in
            alert("Your credentials are wrong.") //User is alerted their credentials are wrong and can try to login again
        }
    }
    return(logged_in)
}
function processLogin(){ //The function to ensure only authorised users can play
    event.preventDefault() //Prevents the submit button from submitting a form
    if(logged_in<2){ //If at least one player hasn't been authorised, this if statement runs
        authorisation(logged_in) //Calls the authorisation function
    }
    else if(logged_in===2){ //If both players have logged in, this runs
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
    return(deck) //Returns deck to the function 'processLogin'
}
function pickup(){ //The pickup function is declared when the pickup button is clicked
    if(logged_in===2){
        if((p1wins+p2wins)<15){ //Ensures that not all the cards have bee played yet
            let p1card=deck[0] //Assigns the first element to variable 'p1card' as player 1's card
            document.getElementById("player1").innerHTML = p1card.name //Displays the name of player 1's card on the webpage
            deck.shift() //Removes the first element of the array 'deck' and shifts everything else down by one
            let p2card=deck[0] //Assigns the new first element to variable 'p2card' as player 2's card
            document.getElementById("player2").innerHTML = p2card.name //Displays the name of player 2's card on the webpage
            deck.shift() //Removes the first element in the array again
            if(p1card.suit===p2card.suit){ //Checks to see if the players' cards are the same colour
                if(p1card.value>p2card.value){ //Checks to see if player 1's card has a higher value than player 2
                    p1deck.push(p1card.name, p2card.name) //Adds both players' card to player 1's deck (an array)
                    p1wins++ //Adds one to player 1's wins
                    document.getElementById("winner-declaration").innerHTML = p1name //Displays that player 1 won that round
                    document.getElementById("winner-reason").innerHTML = 'Due to having a greater card value' //Displays the reason player 1 beat player 2
                }
                else{//Runs if player 2's card has a higher value than player 1's
                    p2deck.push(p1card.name, p2card.name)  //Adds both players' cards to player 2's deck (an array)
                    p2wins++ //Adds one to player 2's wins
                    document.getElementById("winner-declaration").innerHTML = p2name
                    document.getElementById("winner-reason").innerHTML = 'Due to having a greater card value' //Displays the reason player 2 beat player 1
                }
            }
            else if(p1card.suit==="Red"&&p2card.suit==="Black"){ //Checks to see if player 1 has the dominant card in this situation
                p1deck.push(p1card.name, p2card.name)
                p1wins++
                document.getElementById("winner-declaration").innerHTML = p1name
                document.getElementById("winner-reason").innerHTML = 'Due to having the dominant colour (Red beats Black)'
            }
            else if(p2card.suit==="Red"&&p1card.suit==="Black"){ //Checks to see if player 2 has the dominant card in this situation
                p2deck.push(p1card.name, p2card.name)
                p2wins++
                document.getElementById("winner-declaration").innerHTML = p2name
                document.getElementById("winner-reason").innerHTML = 'Due to having the dominant colour (Red beats Black)'
            }
            else if(p1card.suit==="Yellow"&&p2card.suit==="Red"){ //Checks to see if player 1 has the dominant card in this situation
                p1deck.push(p1card.name, p2card.name)
                p1wins++
                document.getElementById("winner-declaration").innerHTML = p1name
                document.getElementById("winner-reason").innerHTML = 'Due to having the dominant colour (Yellow beats Red)'
            }
            else if(p2card.suit==="Yellow"&&p1card.suit==="Red"){ //Checks to see if player 2 has the dominant card in this situation
                p2deck.push(p1card.name, p2card.name)
                p2wins++
                document.getElementById("winner-declaration").innerHTML = p2name
                document.getElementById("winner-reason").innerHTML = 'Due to having the dominant colour (Yellow beats Red)'
            }
            else if(p1card.suit==="Black"&&p2card.suit==="Yellow"){ //Checks to see if player 1 has the dominant card in this situation
                p1deck.push(p1card.name, p2card.name)
                p1wins++
                document.getElementById("winner-declaration").innerHTML = p1name
                document.getElementById("winner-reason").innerHTML = 'Due to having the dominant colour (Black beats Yellow)'
            }
            else if(p2card.suit==="Black"&&p1card.suit==="Yellow"){ //Checks to see if player 2 has the dominant card in this situation
                p2deck.push(p1card.name, p2card.name)
                p2wins++
                document.getElementById("winner-declaration").innerHTML = p2name
                document.getElementById("winner-reason").innerHTML = 'Due to having the dominant colour (Black beats Yellow)'
            }
        }
        else if((p1wins+p2wins)>=15){ //Runs once all the cards have been played
            alert("That is the end of the game") //Alerts the players that the game is over
            if(p1wins>p2wins){ //Checks to see if player 1 won the game overall
                document.getElementById("deck_outputs").innerHTML = p1name+" wins with "+p1wins+" rounds won. Here is their deck: "+JSON.stringify(p1deck)
                //Displays player 1's deck if they won
            }
            else{
                document.getElementById("deck_outputs").innerHTML = p2name+" wins with "+p2wins+" rounds won. Here is their deck: "+JSON.stringify(p2deck)
                //Displays player 2's deck if they won
            }

        }
    }
    else{ //If at least one of the players hasn't logged in, they will be told to if the click the button
        alert("You must login in both players before playing.")
    }
}
