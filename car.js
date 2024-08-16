document.getElementById('rentalForm').addEventListener('submit', 
    function(e) {
    const location = document.getElementById('location').value;
    const pickupDate = document.getElementById('pickup-date').value;
    const returnDate = document.getElementById('return-date').value;

    console.log(`Location: ${location}`);
    console.log(`Pick-Up Date: ${pickupDate}`);
    console.log(`Return Date: ${returnDate}`);

    alert(`Location: ${location}\nPick-Up Date: ${pickupDate}\nReturn Date: ${returnDate}`);
});
function toggleModal() {
    const modal = document.getElementById('navModal');
    if (modal.style.display === "flex") {
        modal.style.display = "none";
    } else {
        modal.style.display = "flex";
    }
}

