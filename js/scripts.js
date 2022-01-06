// Get the modal
var modal;

// When the user clicks the button, open the modal 
function openModal(id){
    modal = document.getElementById(id);
    modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
}