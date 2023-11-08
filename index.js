document.addEventListener('DOMContentLoaded', function () {
    const inputText = document.getElementById('inputText');
    const keys = document.querySelectorAll('.key');
    const saveButton = document.getElementById('key');
    let word = '';

    keys.forEach(key => {
        key.addEventListener('onMouseDown', function () {
            const letter = key.textContent;
            word += letter;
            inputText.value = word;
        });
    });

    function evMouse(e){
       var res = document.getElementsByClassName("resultado")[0];
       res.innerHTML= e;
    }

    <button onMouseDown="evMouse('Mouse Down')">Click</button>

    
    saveButton.addEventListener('click', function () {
       
        alert('Palavra salva: ' + word);
    });
});


