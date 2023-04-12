let td = document.querySelectorAll('td')
let tableMain = document.getElementById('tableMain')
let winMsg =  document.getElementById('winMsg')

let flag  = new Array(td.length)
flag.fill(0)
let turnFlag = 0;

for(let i = 0 ; i< td.length; i++){
    
    td[i].addEventListener('click', ()=>{
        if(flag[i] === 0){
            if(turnFlag == 0){
                td[i].innerHTML = "X"
                td[i].style.backgroundColor = "aqua"
                turnFlag = 1;
            }
            else{
                td[i].innerHTML = "O"
                td[i].style.backgroundColor = "yellow"
                turnFlag = 0;
            }
            flag[i] = 1
        }
    })
}

const checkWinner = () =>{
    let winArr = [
        [td[0],td[1],td[2]],
        [td[3],td[4],td[5]],
        [td[6],td[7],td[8]],
        [td[0],td[3],td[6]],
        [td[1],td[4],td[7]],
        [td[2],td[5],td[8]],
        [td[0],td[4],td[8]],
        [td[2],td[4],td[6]],
    ]
    
    if(flag.includes(0)){
        let a = 0;
        winArr.forEach(win =>{
         if(win[0].innerHTML == "X" && win[1].innerHTML =="X" && win[2].innerHTML == "X"){
             winMsg.innerHTML = "X Wins"
             flag.fill(1)
             tableMain.removeEventListener('click', checkWinner)

         }
         if(win[0].innerHTML == "O" && win[1].innerHTML =="O" && win[2].innerHTML == "O"){
             winMsg.innerHTML = "O Wins"
             flag.fill(1)
             tableMain.removeEventListener('click', checkWinner)
         }
        })
    }
    else{
        winMsg.innerHTML = "No one win"
    }
}

tableMain.addEventListener('click', checkWinner)

let resetBtn  = document.getElementById('resetBtn')
resetBtn.addEventListener('click',()=>{
    flag.fill(0)
    tableMain.addEventListener('click', checkWinner)
    winMsg.innerHTML = ""
    td.forEach(element=>{
        element.innerHTML = "-"
        element.style.backgroundColor = "white"
    })
})