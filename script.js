let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newGamebtn = document.querySelector(".newBtn");
let massageContainer = document.querySelector(".massageContainer");
let msg = document.querySelector(".msg")
let turnO = true;
const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () => {
    turnO = true;
    anableBoxes();
    massageContainer.classList.add("hide");
}


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log(" Box Was Clicked");
        if(turnO){
            box.innerText = "◯";
            turnO = false;
        }
        else{
            box.innerText = "✗";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
        });
    });

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}
const anableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText="";
    }
}

const showWinner = (Winner) => {
    msg.innerText = `Congratulation!! The winner is ${Winner}` ;
    massageContainer.classList.remove("hide");
    disableBoxes();
}

    checkWinner = () => {
        for (let pattern of winPattern) {
            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;

            if(pos1Val != "" && pos2Val != "" && pos3Val != "" ){
                if(pos1Val === pos2Val && pos2Val === pos3Val){
                    console.log("WINNER!", pos1Val);
                    showWinner(pos1Val);
                }
            }
        }
    }

newGamebtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame)