window.onload = () => {
    let button = document.querySelector('.btn');
    button.addEventListener('click', calculate);
}
function calculate() {
    let amount = document.querySelector('#billAmt').value;
    let service = document.querySelector('#service').value;
    let people = document.querySelector('#people').value;
    console.log(amount);

    if (amount === "" || service === "select") {
        alert("Please enter the valid value");
        return;
    }

    let total = (amount * service) / people;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

    let result = document.querySelector(".result");
    result.style.display = "block";
    let bill = document.querySelector("#bill");
    bill.innerHTML = total;
}

