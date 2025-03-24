let userScore = 0
let compScore = 0

const choices = document.querySelectorAll("button")
const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user_score")
const compScorePara = document.querySelector("#computer_score")


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("Id")
        playGame(userChoice) // Now this will call playGame with the user's choice
    })
})

const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissor"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];

}

const playGame = (userChoice) => {
    //computer's choice
    const compChoice = getComputerChoice()

    if (userChoice === compChoice) {
        //draw game
        drawGame();
    } else {
        let userWin = true
        if (userChoice === "rock") {
            //scissor,paper
            userWin = compChoice === "paper" ? false : true
        } else if (userChoice === "paper") {
            //scissor,rock
            userWin = compChoice === "rock" ? true : false
        } else {
            //scissor,paper
            userWin = compChoice === "rock" ? false : true
        }
        showWinner(userWin, userChoice, compChoice)
    }
}

const drawGame = () => {
    msg.innerText = "oops!! its Draw, Play again.";
    document.getElementById("msg").style.backgroundColor = "#081b31"
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++
        userScorePara.innerText = userScore
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        document.getElementById("msg").style.backgroundColor = "green"
    } else {
        compScore++
        compScorePara.innerText = compScore
        msg.innerText = `You Lose! ${compChoice} beats Your ${userChoice}`
        document.getElementById("msg").style.backgroundColor = "red"
    }
}