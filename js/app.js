console.log('Sanity Check')

/* Part 2 Code Here */
// Game object
let game = {
    // Player Score
    playerScore: 0,
    // CPU Score
    cpuScore: 0,

    // Card Deck
    deck:[],
    // Get Cards Method
    getCards: function () {

        for (let i= 2; i< 15; i++){
           let img = document.createElement('img')
           img.setAttribute('src', `./images/card${i}.png`) 
           img.setAttribute('value', `${i}`)
           this.deck.push(img) 
        }
    },


    // Shuffle Method
    shuffle: function (){
        this.deck.sort(() => Math.random() - 0.5)
    },

    // Deal Method
    deal: function () {
        if (game.deck.length < 2) {
            game.getCards()
            game.shuffle()
        }

        firstCard = game.deck.shift()
        secondCard = game.deck.shift()
        //console.log(firstCard.getAttribute('value'))
        playerCard.setAttribute('src', firstCard.src)
        cpuCard.setAttribute('src', secondCard.src)
        
        playerCard.setAttribute('value',firstCard.getAttribute('value'))
        cpuCard.setAttribute('value',secondCard.getAttribute('value'))
        game.checkScore()
    },
    // Check Scores Method
    checkScore: function(){
        playerCardValue= parseInt(playerCard.getAttribute('value'))
        cpuCardValue= parseInt(cpuCard.getAttribute('value'))
        // parseInt(playerCardValue)
        // parseInt(cpuCardValue)
        if (playerCardValue > cpuCardValue){
            game.playerScore +=1
        } else {
            game.cpuScore +=1
        }
        playerScore.innerHTML = `Player: ${game.playerScore}`
        cpuScore.innerHTML = `CPU: ${game.cpuScore}`
    }
}

game.getCards()
game.shuffle()
console.log(game.deck)

/* Part 1 Code Here */
// Create container element
let container = document.createElement('div')

container.setAttribute('class','container')

// Append to DOM
document.body.appendChild(container)

// Create card elements
let playerCard = document.createElement('img')
playerCard.setAttribute('class', 'playerCard')
playerCard.setAttribute('src', './images/back.png')

let cpuCard = document.createElement('img')
cpuCard.setAttribute('class', 'cpuCard')
cpuCard.setAttribute('src', './images/back.png')


// Append to Container
container.appendChild(playerCard)
container.appendChild(cpuCard)

// Create Score Container
let scoreContainer = document.createElement('div')
scoreContainer.setAttribute('class','scoreContainer')
document.body.appendChild(scoreContainer)

// Create Player Score
let playerScore = document.createElement('div')
playerScore.setAttribute('class','playerScore')
playerScore.innerHTML="Player: 0"
scoreContainer.appendChild(playerScore)

// Create Computer score
let cpuScore = document.createElement('div')
cpuScore.setAttribute('class','cpuScore')
cpuScore.innerHTML="Cpu: 0"
scoreContainer.appendChild(cpuScore)

// Create Deal Button
let dealButton = document.createElement('button')
dealButton.setAttribute('class', 'dealButton')
document.body.appendChild(dealButton)

dealButton.addEventListener('click', game.deal)
