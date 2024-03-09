var turn = 0

var sqauares = []
var alerts = document.getElementById("alert")
function ween(num1, num2, num3) {
    // alerts.innerText = 'WENNER'
    document.getElementById("XO" + num1).style.background = "black"
    document.getElementById("XO" + num2).style.background = "black"
    document.getElementById("XO" + num3).style.background = "black"
    alerts.innerText="😍"
    setInterval(function () { alerts.innerText += '.' }, 1000)
    setTimeout(function () { location.reload() }, 3000)
    
}
function BALANCE(){
    var espace=""
    index = sqauares.indexOf(espace)
    if(index==-1){
    // alerts.innerText = 'THE BALANCE'
    alerts.innerText = '😔'
    setInterval(function () { alerts.innerText += '.' }, 1000)
    setTimeout(function () { location.reload() }, 6000)
    }

}

function weanr(id) {
    sqauares[1] = document.getElementById("XO1").textContent
    sqauares[2] = document.getElementById("XO2").textContent
    sqauares[3] = document.getElementById("XO3").textContent
    sqauares[4] = document.getElementById("XO4").textContent
    sqauares[5] = document.getElementById("XO5").textContent
    sqauares[6] = document.getElementById("XO6").textContent
    sqauares[7] = document.getElementById("XO7").textContent
    sqauares[8] = document.getElementById("XO8").textContent
    sqauares[9] = document.getElementById("XO9").textContent
    



    if (sqauares[1] == sqauares[2] && sqauares[2] == sqauares[3] && sqauares[1] != '') {
        ween(1, 2, 3)
    }
    else if (sqauares[4] == sqauares[5] && sqauares[5] == sqauares[6] && sqauares[4] != '') {
        ween(4, 5, 6)

    }
    else if (sqauares[7] == sqauares[8] && sqauares[8] == sqauares[9] && sqauares[7] != '') {
        ween(7, 8, 9)

    }
    else if (sqauares[1] == sqauares[4] && sqauares[4] == sqauares[7] && sqauares[1] != '') {
        ween(1, 4, 7)

    }
    else if (sqauares[2] == sqauares[5] && sqauares[5] == sqauares[8] && sqauares[2] != '') {
        ween(2, 5, 8)

    }
    else if (sqauares[3] == sqauares[6] && sqauares[6] == sqauares[9] && sqauares[3] != '') {
        ween(3, 6, 9)
    }
    else if (sqauares[1] == sqauares[5] && sqauares[5] == sqauares[9] && sqauares[1] != '') {
        ween(1, 5, 9)

    }
    else if (sqauares[3] == sqauares[5] && sqauares[5] == sqauares[7] && sqauares[3] != '') {
        ween(3, 5, 7)


    }
    else{
        BALANCE()
    }
}
function game(id) {
    var element = document.getElementById(id)
    if (turn == 0 && element.innerText == "") {
        element.innerText = "X"
        alerts.innerText = 'O'
        turn = 1
    }
    else if (turn == 1 && element.innerText == "") {
        element.innerText = "O"
        alerts.innerText = 'X'

        turn = 0
    }
    weanr(id)
}

