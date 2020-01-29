function openModal() {
    document.getElementById("aboutModal").style.display = 'block';
    document.getElementsByClassName("modal-close")[0].onclick = closeModal;
}

function closeModal() {
    document.getElementById('aboutModal').style.display = 'none';
}

