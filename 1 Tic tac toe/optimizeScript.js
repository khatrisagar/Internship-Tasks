// let sagarOne = document.getElementById("one")
// let sagarTwo = document.getElementById("two")
// let sagarThree = document.getElementById("three")
// let sagarFour = document.getElementById("four")
// let sagarFive = document.getElementById("five")
// let sagarSix = document.getElementById("six")
// let sagarSeven = document.getElementById("seven")
// let sagarEight = document.getElementById("eight")
// let sagarNine = document.getElementById("nine")

let sagarStateOne = 1;
let sagarStateTwo = 1;
let sagarStateThree = 1;
let sagarStateFour = 1;
let sagarStateFive = 1;
let sagarStateSix = 1;
let sagarStateSeven = 1;
let sagarStateEight = 1;
let sagarStateNine = 1;

let sagarFlag = 1;


let sagarIds = [
{    
    "id": "one",
    "element":"sagarOne",
    "clickEvent": "clickOne",
    "state": "sagarStateOne"  
},
{
    "id": "two",
    "element":"sagarTwo",
    "clickEvent": "clickTwo",
    "state": "sagarStateTwo"  
},
{
    "id": "three",
    "element":"sagarThree",
    "clickEvent": "clickThree",
    "state": "sagarStateThree"  
},
{
    "id": "four",
    "element":"sagarFour",
    "clickEvent": "clickFour",
    "state": "sagarStateFour"  
},
{
    "id": "five",
    "element":"sagarFive",
    "clickEvent": "clickFive",
    "state": "sagarStateFive"  
},
{
    "id": "six",
    "element":"sagarSix",
    "clickEvent": "clickSix",
    "state": "sagarStateSix"  
},
{
    "id": "seven",
    "element":"sagarSeven",
    "clickEvent": "clickSeven",
    "state": "sagarStateSeven"  
},
{
    "id": "eight",
    "element":"sagarEigth",
    "clickEvent": "clickEight",
    "state": "sagarStateEight"  
},
{
    "id": "nine",
    "element":"sagarNine",
    "clickEvent": "clickNine",
    "state": "sagarStateNine"  
},

];

for(let i =0; i<9;i++){

    let ele = sagarIds[i].element
    click = sagarIds[i].clickEvent
    // console.log(click)
    function click(){
        if(sagarFlag==1){
            ele.innerHTML = "X"
            ele.style.backgroundColor = "aqua"
            sagarFlag = 0
        }
        else{
            ele.innerHTML = "O"
            ele.style.backgroundColor = "yellow"
            sagarFlag = 1
        }
    }
}

function winCheck(){
    // console.log("hehe")
    return
}