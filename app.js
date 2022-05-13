const form = document.querySelector('#form1');
const input = document.querySelector('#input1');
const ul = document.querySelector('#ul1')

form.addEventListener('submit', function(event){
    event.preventDefault();
    const li = document.createElement('li');
    li.textContent = input.value;

    const button = document.createElement('input');
    button.type = 'button';
    button.value = 'Clear';
    ul.appendChild(li);
    ul.appendChild(button);

    button.addEventListener('click', (event) => {
        if (event.target.onclick) {
            
        } else {
            li.remove();
            button.remove();
        }
    })

    ul.style.display = 'flex';
    button.style.marginLeft = '10px';
    button.style.marginRight = '30px';
    input.value = '';
    input.focus();
})