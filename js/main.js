const reservationForm = document.querySelector(".reservation-form");

reservationForm.addEventListener("submit", function(event) {
    event.preventDefault();

    if (!reservationForm.checkValidity()) {
        reservationForm.reportValidity();
        return;
    }

    alert("This is a demo form. No reservation has been submitted.");
    reservationForm.reset();
});