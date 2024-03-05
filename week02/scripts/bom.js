document.addEventListener("DOMContentLoaded", function() {
    const input = document.querySelector('#favchap');
    const button = document.querySelector('button');
    const list = document.querySelector('#list');

    button.addEventListener('click', () => {
        if (input.value != '') {
            const inputValue = input.value;
            const li = document.createElement('li');
            const deleteButton = document.createElement ('button');
            li.textContent = inputValue;
            deleteButton.textContent = '❌'
            li.append(deleteButton);
            list.append(li);

            deleteButton.addEventListener('click', function(){
                list.removeChild(li);
                input.focus();
                input.value = '';
            });
        } else {
            input.focus();
        }
    });
});
