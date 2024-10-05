const myButton = document.getElementById("myButton");

myButton.addEventListener("click", handleClick);

function handleClick() {
    const userInput = document.getElementById("userInput").value;
    console.log(`userInput = ${userInput}`);
    document.getElementById("count").innerHTML = computeDivisorsOfThree(userInput.split(",")).toString();
}

function computeDivisorsOfThree(array) {
    let count = 0;
    if (Array.isArray(array)) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] % 3 === 0) {
                count++;
            }
        }
        return count;
    } else {
        window.alert("Enter a valid list of numbers");
        return 0;
    }
}