let Sagar_rowXcol = 2
let sagarScore = 0;
let sagarTableMain =  document.getElementById("tableMain")
let sagarTimeId =  document.getElementById("timerText")

function startGame(){

    sagarTableMain.innerHTML = ""
    let sagarBlockNumber = 1;

    let sagarRandomColor = '#'+Math.floor(Math.random()*16777215).toString(16);

    for(let i = 0; i<Number(Sagar_rowXcol); i++){
        
        let tr = document.createElement("tr")
        
        for(let j = 0; j<Number(Sagar_rowXcol); j++){
            let td = document.createElement("td")
            td.setAttribute("id",sagarBlockNumber)
            tr.appendChild(td)
            td.style.backgroundColor = sagarRandomColor;
        
            sagarBlockNumber++; 
        }
        sagarTableMain.appendChild(tr)
    }

    let cell = Math.floor(Math.random()*Sagar_rowXcol*Sagar_rowXcol) +1
        let cellColor =  document.getElementById(`${cell}`);
        cellColor.style.opacity = "0.6";

            cellColor.onclick= function(){
                    Sagar_rowXcol++;
                    startGame() 
                    sagarScore++;
                    sagarScoreId.innerHTML= sagarScore
                }
    }
let sagarScoreId = document.getElementById("scoreText")

let sagarBtnId = document.getElementById("startBtn")
let sagarTime = 59

sagarBtnId.addEventListener("click",()=>{
    setInterval(function(){
        if(sagarTime >= 0){
            
            sagarTimeId.innerHTML = sagarTime
            if(sagarTime >=0 && sagarTime<=10){
                sagarTimeId.style.color = "red"
            }
            sagarTime--;
        }
    },1000) 
})