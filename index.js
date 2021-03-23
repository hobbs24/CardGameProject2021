let deck = [ //Declaring the Array of Records
    {
        name: "R1", suit: "Red", value: "1", //The first element. Each element has an identifier (name) and belongs to 2 groups(suit and value)
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
let p1deck=[]
let p2deck=[]
let p1wins=0
let p2wins=0
let p1card=0
let p2card=0

function pageLoad(){
    document.getElementById("login").addEventListener("submit", processLogin)
}
function processLogin(){
    event.preventDefault()
    let authorised_users = [{name:'Yaeger024', pass:'aot'}, {name: 'Excalibur', pass:'evLA55'}]
    let username=document.getElementById("username").value
    let password=document.getElementById("password").value
    let authorised = false
    let index=0
    for(let i=0;i<authorised_users.length;i++){
        if(authorised_users[index].name===username){
            if(authorised_users[index].pass===password){
                authorised=true
                document.getElementById("login").reset()
                break
            }
            else {
                index++
            }
        }
        else{
            index++
        }
    }
    console.log(username)
    console.log(password)
    console.log(authorised)
    if(authorised){
        alert("Logged in")
        shuffle(deck)
        console.log(deck)
    }
    else{
        alert("Your credentials are wrong")
    }
}

function shuffle(deck) {
    //Below randomises (shuffles) the array (deck)
    let i = deck.length
    while (0 !== i) { //Provides an ending condition to the shuffling
        let index = Math.floor(Math.random() * deck.length) //Randomises a whole number for an element
        i -= 1 //Picking a remaining element
        let temp = deck[i] //Adding the element to a temporary variable to be assigned later
        deck[i] = deck[index]
        deck[index] = temp //assigning the temporary variable to its new spot
    }
    alert("Deck has been shuffled. You may now play")
    return(deck)
}

function pickup(p1deck, p2deck, deck, p1wins, p2wins, p1card, p2card){
    if((p1wins+p2wins)<15){
        p1card=deck[0]
        deck.shift()
        p2card=deck[0]
        deck.shift()
        if(p1card.suit==p2card.suit){
            if(p1card.value>p2card.value){
                p1deck.push(p1card, p2card)
                p1wins++
            }
            else{
                p2deck.push(p1card, p2card)
                p2wins++
            }
        }
        else if(p1card.suit=="Red"&&p2card.suit=="Black"){
            p1deck.push(p1card, p2card)
            p1wins++
        }
        else if(p2card.suit=="Red"&&p1card.suit=="Black"){
            p2deck.push(p1card, p2card)
            p2wins++
        }
        else if(p1card.suit=="Yellow"&&p2card.suit=="Red"){
            p1deck.push(p1card, p2card)
            p1wins++
        }
        else if(p2card.suit=="Yellow"&&p1card.suit=="Red"){
            p2deck.push(p1card, p2card)
            p2wins++
        }
        else if(p1card.suit=="Black"&&p2card.suit=="Yellow"){
            p1deck.push(p1card, p2card)
            p1wins++
        }
        else if(p2card.suit=="Black"&&p1card.suit=="Yellow"){
            p2deck.push(p1card, p2card)
            p2wins++
        }
        if(p1wins>p2wins){
            alert("Player 1 wins. Here is their deck. /n" + p1deck)
        }
        else{
            alert("Player 2 wins. Here is their deck. /n" + p2deck)
        }
    }
    else if((p1wins+p2wins)>=15){
        alert("That is the end of the game")
    }
}
