var turn = 0
var sqauares = []
var alerts = document.getElementById("alert")
function handleClick() {
    game(this.id);
}

document.querySelectorAll('.XO').forEach(e => {
    e.addEventListener('click', handleClick)

})
function reload() {
    alerts.innerText = 'play again'

    document.querySelector('.container').childNodes.forEach(e => {
        e.innerText = ''

        if (e.classList) {
            e.classList.remove('black')
        }


    })
    
    document.querySelectorAll('.XO').forEach(e => {
        e.addEventListener('click', handleClick)

    })
}

function ween(num1, num2, num3) {
    // alerts.innerText = 'WENNER'
    document.getElementById("XO" + num1).classList.add("black")
    document.getElementById("XO" + num2).classList.add("black")
    document.getElementById("XO" + num3).classList.add("black")
    alerts.innerText = "😍"
    document.querySelectorAll('.XO').forEach(e => {
        e.removeEventListener('click', handleClick)

    })
    var interval = setInterval(function () { alerts.innerText += '.' }, 1000)
    setTimeout(function () {
        reload()
        clearInterval(interval)
    }, 3000)

}
function BALANCE() {
    var espace = ""

    let index = sqauares.indexOf(espace)

    if (index == -1) {
        // alerts.innerText = 'THE BALANCE'
        alerts.innerText = '😔'
        let interval = setInterval(function () { alerts.innerText += '.' }, 1000)
        setTimeout(function () {
            reload()
            clearInterval(interval)
        }, 3000)
    }

}

function weanr(id) {
    sqauares[0] = document.getElementById("XO1").textContent
    sqauares[1] = document.getElementById("XO2").textContent
    sqauares[2] = document.getElementById("XO3").textContent
    sqauares[3] = document.getElementById("XO4").textContent
    sqauares[4] = document.getElementById("XO5").textContent
    sqauares[5] = document.getElementById("XO6").textContent
    sqauares[6] = document.getElementById("XO7").textContent
    sqauares[7] = document.getElementById("XO8").textContent
    sqauares[8] = document.getElementById("XO9").textContent




    if (sqauares[0] == sqauares[1] && sqauares[1] == sqauares[2] && sqauares[0] != '') {
        ween(1, 2, 3)
    }
    else if (sqauares[3] == sqauares[4] && sqauares[4] == sqauares[5] && sqauares[3] != '') {
        ween(4, 5, 6)

    }
    else if (sqauares[6] == sqauares[7] && sqauares[7] == sqauares[8] && sqauares[6] != '') {
        ween(7, 8, 9)

    }
    else if (sqauares[0] == sqauares[3] && sqauares[3] == sqauares[6] && sqauares[0] != '') {
        ween(1, 4, 7)

    }
    else if (sqauares[1] == sqauares[4] && sqauares[4] == sqauares[7] && sqauares[1] != '') {
        ween(2, 5, 8)

    }
    else if (sqauares[2] == sqauares[5] && sqauares[5] == sqauares[8] && sqauares[2] != '') {
        ween(3, 6, 9)
    }
    else if (sqauares[0] == sqauares[4] && sqauares[4] == sqauares[8] && sqauares[0] != '') {
        ween(1, 5, 9)

    }
    else if (sqauares[2] == sqauares[4] && sqauares[4] == sqauares[6] && sqauares[2] != '') {
        ween(3, 5, 7)


    }
    else {
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

