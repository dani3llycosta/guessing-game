function startGame() {
    let guess = parseInt(Math.random() * 1001);
    const userInput = document.querySelector("input[name='usernum']").value;
    const messageElement = document.getElementById("message");

    if (userInput === "") {
        messageElement.textContent = "Please enter a number.";
    } else {
        const userNum = parseInt(userInput);

        if (userNum === guess) {
            messageElement.textContent = "Correct!";
        } else if (userNum > guess) {
            messageElement.textContent = "Wrong! Keep trying. The number is lower.";
        } else if (userNum < guess) {
            messageElement.textContent = "Wrong! Keep trying. The number is higher.";
        }
    }
}

function checkEnter(event) {
    if (event.key === "Enter") {
        event.preventDefault(); //prevents the form from being sent
        startGame();
    }
}
