//modular way of programming is a way where the developer make function for each or asingle event .

let UserScore = 0;
let CompScore = 0;

const choices = document.querySelectorAll(".choice")
const message = document.querySelector("#msg")

const userscorepara = document.querySelector("#user-score")
const compscorepara = document.querySelector("#comp-score")
// console.log(message)
// console.log(choices)

const drawGame = () => {


    alert("the game is Draw! play again");
    message.innerHTML = " Game is Draw ! ";
    message.style.backgroundColor = "orange";
}


const showwinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        // console.log("you win !")
        message.innerHTML = `you win ${userchoice} beats ${compchoice}`;
        message.style.backgroundColor = "green"
        UserScore++;
        userscorepara.innerHTML = UserScore++;
    }

    else {
        // console.log(" you lose the game ! ")
        message.innerHTML = `you lose ${compchoice} beats ${userchoice} `;
        message.style.backgroundColor = "red"
        CompScore++;
        compscorepara.innerHTML = CompScore++;
        // CompScore++;
    }
}

const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"]
    const randIdx = Math.floor(Math.random() * 3)
    return options[randIdx];
}

const playGame = (userchoice) => {
    console.log("userchoice =", userchoice)

    const compchoice = gencompchoice();
    console.log(" computer choice =", compchoice)


    if (userchoice === compchoice) {

        drawGame();
        choices();

    }
    let userwin = true;

    if (userchoice === "rock" && compchoice === "scissors") {

        userwin = true;
    }


    else if (userchoice === "rock" && compchoice === "paper") {

        userwin = false;
    }


    else if (userchoice === "scissors" && compchoice === "rock") {

        userwin = false;
    }
    else if (userchoice === "scissors" && compchoice === "paper") {

        userwin = true;
    }

    else if (userchoice === "paper" && compchoice === "rock") {

        userwin = true;
    }
    else if (userchoice === "paper" && compchoice === "scissors") {

        userwin = false;
    }



    // if  (userchoice === "rock") {
    // //scissors , paper
    //     userwin = compchoice === " paper " ? false : true;
    // }
    // else if (userwin === "paper") {
    // //rock , scissors
    // userwin = compchoice === "scissors" ? false : true;
    // }
    // else if( userchoice==="scissor")
    // {//rock
    //     userwin = compchoice === "rock" ? false : true;
    // }

    showwinner(userwin, userchoice, compchoice);
}



choices.forEach((choice) => {
    // console.log(choice)
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id")
        console.log("choices was click", userchoice)

        playGame(userchoice)
    })

})