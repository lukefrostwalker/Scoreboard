let homeScore = document.getElementById("homeScore")
let guestScore = document.getElementById("guestScore")
let homeBoard = document.querySelector(".hScore")
let guestBoard = document.querySelector(".gScore")

let homePoints = 0
let guestPoints = 0

function highlight() {
if (homePoints > guestPoints) {
    homeBoard.style.backgroundColor = "#CBDF90"
    homeScore.style.color = "#9C2E42"
    guestBoard.style.backgroundColor = "#080001"
    guestScore.style.color = "#f94f6d"
} else if (guestPoints > homePoints) {
    guestBoard.style.backgroundColor = "#CBDF90"
    guestScore.style.color = "#9C2E42"
    homeBoard.style.backgroundColor = "#080001"
    homeScore.style.color = "#f94f6d"
} else if (guestPoints === homePoints) {
    homeBoard.style.backgroundColor = "#CBDF90"
    guestBoard.style.backgroundColor = "#CBDF90"
    homeScore.style.color = "#9C2E42"
    guestScore.style.color = "#9C2E42"
}
}

function addHome1() {
    homePoints +=1
    homeScore.textContent = homePoints
    highlight()
}


function addHome2() {
    homePoints += 2
    homeScore.textContent = homePoints
    highlight()
}

function addHome3() {
    homePoints += 3
    homeScore.textContent = homePoints
    highlight()
}

function addGuest1() {
    guestPoints += 1
    guestScore.textContent = guestPoints
    highlight()
}

function addGuest2() {
    guestPoints += 2
    guestScore.textContent = guestPoints
    highlight()
}

function addGuest3() {
    guestPoints += 3
    guestScore.textContent = guestPoints
    highlight()
}

function newGame() {
    homePoints = 0
    guestPoints = 0
    homeBoard.style.backgroundColor = "#080001"
    guestBoard.style.backgroundColor = "#080001"
    guestScore.style.color = "#f94f6d"
    homeScore.style.color = "#f94f6d"
    guestScore.textContent = 0
    homeScore.textContent = 0
}
