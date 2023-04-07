let Sagar_rowXcol = 2
let sagarScore = 0;
let sagarTableMain =  document.getElementById("tableMain")
let sagarTimeId =  document.getElementById("timerText")
let sagarBtnId = document.getElementById("startBtn")
let sagarTime = 10

function startGame(){
    let sagarTime = 10
    sagarTableMain.innerHTML = ""
    let sagarBlockNumber = 1;
    let clrArr = [111111,444444,666666,888888,223344,556677,887766,334477,997756,992233,534562,434234,654321,999999]
    let sagarRandomColor = "#"+clrArr[Math.floor(Math.random()*clrArr.length)]
    // let sagarRandomColor = '#'+Math.floor(Math.random()*999999)

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
        sagarBtnId.style.display = "none"
    }

    let cell = Math.floor(Math.random()*Sagar_rowXcol*Sagar_rowXcol) +1
        let cellColor =  document.getElementById(`${cell}`);
        cellColor.style.opacity = "0.6";

            cellColor.onclick= function(){
                console.log(sagarTime)
                if(sagarTime != 0){
                    Sagar_rowXcol++;
                    startGame() 
                    sagarScore++;
                    sagarScoreId.innerHTML= sagarScore
                }
                
            }
                
    }
let sagarScoreId = document.getElementById("scoreText")



sagarBtnId.addEventListener("click",()=>{
    setInterval(function(){
        if(sagarTime >= 0){
            
            sagarTimeId.innerHTML = sagarTime
            if(sagarTime >=0 && sagarTime<=10){
                sagarTimeId.style.color = "red"
            }
            if(sagarTime <= 0){
                alert(`Time Out Your score: ${sagarScore} `)
                window.location.reload()
                // sagarTableMain.innerHTML = ""
                // Sagar_rowXcol = 2
                // sagarScoreId.innerHTML= ""
                // startBtn.style.display = "block"
                
            }
            sagarTime--;
        }
    },1000) 
})

function resetGame(){
    window.location.reload()
}