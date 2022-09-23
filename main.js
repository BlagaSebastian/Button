const luckResult = document.getElementById("luckResult");
let randomNr = Math.ceil(Math.random() * 3);

function onClick(id) {
    if (id == randomNr) {
        luckResult.innerHTML = "Winner!";
    } else {
        luckResult.innerHTML = "Try again!";
    }
    document.getElementById("1").disabled = true;
    document.getElementById("2").disabled = true;
    document.getElementById("3").disabled = true;
}
