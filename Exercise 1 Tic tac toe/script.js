let sagarOne = document.getElementById("one")
let sagarTwo = document.getElementById("two")
let sagarThree = document.getElementById("three")
let sagarFour = document.getElementById("four")
let sagarFive = document.getElementById("five")
let sagarSix = document.getElementById("six")
let sagarSeven = document.getElementById("seven")
let sagarEight = document.getElementById("eight")
let sagarNine = document.getElementById("nine")

let sagarFlag = 1;

let sagarResetBtn = document.getElementById("resetBtn")

let sagarWinMsg = document.getElementById("winMsg")
let playerTurnMsg = document.getElementById("playerTurnMsg")

let sagarStateOne = 1;
let sagarStateTwo = 1;
let sagarStateThree = 1;
let sagarStateFour = 1;
let sagarStateFive = 1;
let sagarStateSix = 1;
let sagarStateSeven = 1;
let sagarStateEight = 1;
let sagarStateNine = 1;


function disableClick(){
    sagarStateOne = 0;
    sagarStateTwo = 0;
    sagarStateThree = 0;
    sagarStateFour = 0;
    sagarStateFive = 0;
    sagarStateSix = 0;
    sagarStateSeven = 0;
    sagarStateEight = 0;
    sagarStateNine = 0;
}

// function turnCheck(){
//     if(flag==1){
//         playerTurnMsg.innerHTML = "X's turn"    
//     }
//     else{
//         playerTurnMsg.innerHTML = "O's turn"
//     }
// }

function resetGame(){
    sagarOne.innerHTML = "-"
    sagarTwo.innerHTML = "-"
    sagarThree.innerHTML = "-"
    sagarFour.innerHTML = "-"
    sagarFive.innerHTML = "-"
    sagarSix.innerHTML = "-"
    sagarSeven.innerHTML = "-"
    sagarEight.innerHTML = "-"
    sagarNine.innerHTML = "-"

    sagarOne.style.backgroundColor = "#fff"
    sagarTwo.style.backgroundColor = "#fff"
    sagarThree.style.backgroundColor = "#fff"
    sagarFour.style.backgroundColor = "#fff"
    sagarFive.style.backgroundColor = "#fff"
    sagarSix.style.backgroundColor = "#fff"
    sagarSeven.style.backgroundColor = "#fff"
    sagarEight.style.backgroundColor = "#fff"
    sagarNine.style.backgroundColor = "#fff"

    sagarWinMsg.innerHTML = ""

    sagarStateOne = 1;
    sagarStateTwo = 1;
    sagarStateThree = 1;
    sagarStateFour = 1;
    sagarStateFive = 1;
    sagarStateSix = 1;
    sagarStateSeven = 1;
    sagarStateEight = 1;
    sagarStateNine = 1;
}

function clickOne(){
    if(sagarStateOne == 1){
        if(sagarFlag==1){
                sagarOne.innerHTML = "X"
                sagarOne.style.backgroundColor = "aqua"
                sagarFlag =0
            }
            else{
                sagarOne.innerHTML = "O"
                sagarOne.style.backgroundColor = "yellow" 
                sagarFlag = 1
            }
        sagarStateOne = 0;
    }
    return
}
function clickTwo(){
    if(sagarStateTwo == 1){
        if(sagarFlag==1){
            sagarTwo.innerHTML = "X"
            sagarTwo.style.backgroundColor = "aqua"
            sagarFlag =0
        }
        else{
            sagarTwo.innerHTML = "O"
            sagarTwo.style.backgroundColor = "yellow"
            sagarFlag = 1
        }
    sagarStateTwo = 0;
    }
    return
}
function clickThree(){
    if(sagarStateThree == 1){
        if(sagarFlag==1){
            sagarThree.innerHTML = "X"
            sagarThree.style.backgroundColor = "aqua"
            sagarFlag = 0
        }
        else{
            sagarThree.innerHTML = "O"
            sagarThree.style.backgroundColor = "yellow"
            sagarFlag = 1
        }
    sagarStateThree = 0;
    }
    return
}
function clickFour(){
    if(sagarStateFour == 1){
        if(sagarFlag==1){
            sagarFour.innerHTML = "X"
            sagarFour.style.backgroundColor = "aqua"
            sagarFlag =0
        }
        else{
            sagarFour.innerHTML = "O"
            sagarFour.style.backgroundColor = "yellow"
            sagarFlag = 1
        }
    sagarStateFour = 0;
    }
    return
}
function clickFive(){
    if(sagarStateFive == 1){
        if(sagarFlag==1){
            sagarFive.innerHTML = "X"
            sagarFive.style.backgroundColor = "aqua"
            sagarFlag =0
        }
        else{
            sagarFive.innerHTML = "O"
            sagarFive.style.backgroundColor = "yellow"
            sagarFlag = 1
        }
    sagarStateFive = 0;
    }
    return
}
function clickSix(){
    if(sagarStateSix == 1){
        if(sagarFlag==1){
            sagarSix.innerHTML = "X"
            sagarSix.style.backgroundColor = "aqua"
            sagarFlag =0
        }
        else{
            sagarSix.innerHTML = "O"
            sagarSix.style.backgroundColor = "yellow"
            sagarFlag = 1
        }
    sagarStateSix = 0;
    }
    return
}
function clickSeven(){
    if(sagarStateSeven == 1){
        if(sagarFlag==1){
            sagarSeven.innerHTML = "X"
            sagarSeven.style.backgroundColor = "aqua"
            sagarFlag =0
        }
        else{
            sagarSeven.innerHTML = "O"
            sagarSeven.style.backgroundColor = "yellow"
            sagarFlag = 1
        }
    sagarStateSeven = 0;
    }
    return
}
function clickEight(){
    if(sagarStateEight == 1){
        if(sagarFlag==1){
            sagarEight.innerHTML = "X"
            sagarEight.style.backgroundColor = "aqua"
            sagarFlag =0
        }
        else{
            sagarEight.innerHTML = "O"
            sagarEight.style.backgroundColor = "yellow"
            sagarFlag = 1
        }
    sagarStateEight = 0;
    }
    return
}
function clickNine(){
    if(sagarStateNine == 1){
        if(sagarFlag==1){
            sagarNine.innerHTML = "X"
            sagarNine.style.backgroundColor = "aqua"
            sagarFlag = 0
        }
        else{
            sagarNine.innerHTML = "O"
            sagarNine.style.backgroundColor = "yellow"
            sagarFlag = 1
        }
    sagarStateNine = 0;
    }
    return
}

function winCheck(){
    let sagarWin = [
        [sagarOne,sagarTwo,sagarThree],
        [sagarFour,sagarFive,sagarSix],
        [sagarSeven,sagarEight,sagarNine],
        [sagarOne,sagarFour,sagarSeven],
        [sagarTwo,sagarFive,sagarEight],
        [sagarThree,sagarSix,sagarNine],
        [sagarOne,sagarFive,sagarNine],
        [sagarThree,sagarFive,sagarSeven],
    ]

    if(sagarStateOne ==0 && sagarStateTwo == 0 && sagarStateThree == 0 && sagarStateFour==0 && sagarStateFive == 0 && sagarStateSix == 0 && sagarStateSeven == 0 && sagarStateEight == 0 && sagarStateNine ==0 ){
        sagarWinMsg.innerHTML = "No one wins Try Again"
    }
    sagarWin.forEach(win => {
        if(win[0].innerText == "X" && win[1].innerText == "X" && win[2].innerText=="X"){
            sagarWinMsg.innerHTML = "X win"
            disableClick()
        }
        if(win[0].innerText == "O" && win[1].innerText == "O" && win[2].innerText=="O"){
            sagarWinMsg.innerHTML = "O win"
            disableClick()
        }
    })
}

// pointer event none to disable click
// function resetOnInactivity(){
//     alert("Inactive from a longtime")
//     resetGame()
// }
// setTimeout(resetOnInactivity, 300000)