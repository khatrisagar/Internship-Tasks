const containerId = document.getElementById('tic-tac-toe-container')

let n = 3

for(let i = 0; i<n; i++){

  containerId.innerHTML+= `
    <div id="tic-tac-toe-container-ele">
        <table id="tableMain" class="tableMain" onclick="winCheck()">
            <tr>
                <td id="one-${i}">-</td>
                <td id="two-${i}">-</td>
                <td id="three-${i}">-</td>
            </tr>
            <tr>
                <td id="four-${i}">-</td>
                <td id="five-${i}">-</td>
                <td id="six-${i}">-</td>
            </tr>
            <tr>
                <td id="seven-${i}">-</td>
                <td id="eight-${i}">-</td>
                <td id="nine-${i}">-</td>
            </tr>
        </table>
    </div>`
}

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

console.log("td")


for(let i  = 0; i<n;i++){
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
}
