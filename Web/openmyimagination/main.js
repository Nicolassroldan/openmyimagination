var boton = document.getElementById("pop-up-art");
var popUp = document.getElementById("pop-up");

boton.onclick = function() {
    popUp.style.display = "block";
}

function toggleDropdown() {
    var dropdownContent = document.getElementById('dropdown-content');
    if (dropdownContent.style.display === 'none') {
        dropdownContent.style.display = 'flex';
    } else {
        dropdownContent.style.display = 'none';
    }
}

