let homeScore = document.querySelector("#home-score");
let guestScore = document.querySelector("#guest-score");
let hCount = 0;
let gCount = 0;

function hOne() {
    hCount += 1;
    homeScore.textContent = hCount;
}
function hTwo() {
    hCount += 2;
    homeScore.textContent = hCount;
}
function hThree() {
    hCount += 3;
    homeScore.textContent = hCount;
}
function gOne() {
    gCount += 1;
    guestScore.textContent = gCount;
}
function gTwo() {
    gCount += 2;
    guestScore.textContent = gCount;
}
function gThree() {
    gCount += 3;
    guestScore.textContent = gCount;
}
function newGame() {
    hCount = 0;
    gCount = 0;
    homeScore.textContent = 0;
    guestScore.textContent = 0;
}
