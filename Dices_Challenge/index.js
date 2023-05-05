// return [1:max]
function getRandomNum(max){
    return Math.floor(Math.random()*max)+1;
}

const dice1 = document.querySelector(".img1");
const dice2 = document.querySelector(".img2");
const header = document.querySelector(".container h1");

function createWinnerJudge(){
    const flagIcon = document.createElement("i");
    flagIcon.classList.add("fa-regular",  "fa-flag-checkered");

    return function determineWinner(dice1Value, dice2Value){
        const headerText = document.createElement("span");

        if(dice1Value > dice2Value){
            headerText.textContent = "Player 1 wins !!";
            headerText.prepend(flagIcon);
        }
        else if(dice1Value < dice2Value){
            headerText.textContent = "Player 2 wins !!";
            headerText.appendChild(flagIcon);
        }
        else{
            headerText.textContent = "Draw!";
        }

        header.innerHTML = " ";
        header.appendChild(headerText);
    }
}

const judge = createWinnerJudge();

function updateDiceImage(){
    const randomDiceNum1 = getRandomNum(6);
    const randomDiceNum2 = getRandomNum(6);

    dice1.setAttribute("src", `images/dice${randomDiceNum1}.png`);
    dice2.setAttribute("src", `images/dice${randomDiceNum2}.png`);

    judge(randomDiceNum1, randomDiceNum2);
}

setInterval(updateDiceImage, 1000);