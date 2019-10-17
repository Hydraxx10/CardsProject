var firstCard = document.getElementById("firstCard");
var secondCard = document.getElementById("secondCard");
var thirdCard = document.getElementById("thirdCard");

function changeCards() {
    if (firstCard.style.display == '' || firstCard.style.display == 'block') {
        document.getElementById("secondCard").style.display = 'block'
        document.getElementById("firstCard").style.display = 'none'
        document.getElementById("thirdCard").style.display = 'none'
    } else if (secondCard.style.display == 'block') {
        document.getElementById("secondCard").style.display = 'none'
        document.getElementById("firstCard").style.display = 'none'
        document.getElementById("thirdCard").style.display = 'block'
    } else {
        document.getElementById("secondCard").style.display = 'none'
        document.getElementById("firstCard").style.display = 'block'
        document.getElementById("thirdCard").style.display = 'none'
    }
}

function changeCardsReverse() {
    if (firstCard.style.display == '' || firstCard.style.display == 'block') {
        document.getElementById("secondCard").style.display = 'none'
        document.getElementById("firstCard").style.display = 'none'
        document.getElementById("thirdCard").style.display = 'block'
    } else if (thirdCard.style.display == 'block') {
        document.getElementById("secondCard").style.display = 'block'
        document.getElementById("firstCard").style.display = 'none'
        document.getElementById("thirdCard").style.display = 'none'
    } else {
        document.getElementById("secondCard").style.display = 'none'
        document.getElementById("firstCard").style.display = 'block'
        document.getElementById("thirdCard").style.display = 'none'
    }
}