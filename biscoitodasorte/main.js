



/*eventos*/
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btrcookie = document.querySelector("#btrcookie")
const btropenother = document.querySelector("#btropenother")

/*calback
function handleTryClick(event) {
  event.preventDefault()*/
function prizeDraw(event){
    event.preventDefault()

    screen1.classList.add('hide')
    screen2.classList.remove('hide')
}
function prizeDrawnAgain(event2){
    event2.preventDefault()

    screen1.classList.remove('hide')
    screen2.classList.add('hide')
}

/*funções*/
btrcookie.addEventListener('click', prizeDraw)
btropenother.addEventListener('click', prizeDrawnAgain)






/*
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', function () {
    screen1.classList.remove('hide')
    screen2.classList.add('hide')
    xAttempts = 1
  }) */