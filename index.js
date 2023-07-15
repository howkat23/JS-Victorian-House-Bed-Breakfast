const button = document.querySelector("#btn");
button.addEventListener("click", calculateAmount);
const buttonResortFee = document.querySelector("#addResortFee");
buttonResortFee.addEventListener("click", showResortFee);
function showResortFee(e) {
    e.preventDefault();
    resortFee.style.display = "block";
}
function calculateAmount(e) {
    e.preventDefault();
    const bill = document.querySelector("#bill").value;
    const guests = document.querySelector("#guests").value;
    const resortFee = document.querySelector("#resortFee").value;
    if (bill === "" || guests === ""  || guests < 1) {
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Please enter your Information!',
        })
    }
//  Formulas
    let amountPerGuests = bill/guests;
    let resortFeePerGuests = (bill * resortFee) / guests;
    let totalSum = amountPerGuests + resortFeePerGuests;
// toFixed()
    amountPerGuests = amountPerGuests.toFixed(2);
    resortFeePerGuests = resortFeePerGuests.toFixed(2);
    totalSum = totalSum.toFixed(2);

// Show it in the Application
    document.querySelector("#dividedBill").textContent = amountPerGuests;
    document.querySelector("#dividedResortFee").textContent = resortFeePerGuests;
    document.querySelector("#billAndResortFee").textContent = totalSum;
}



