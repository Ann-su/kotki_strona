const input = document.getElementById('photo');

input.addEventListener('change', function () {
    if (input.files.length > 0) {
        input.nextElementSibling.textContent = input.files[0].name;
    } else {
        input.nextElementSibling.textContent = 'Wybierz plik';
    }
});
