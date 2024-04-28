const button = document.getElementById('addtask') //captura o botão de adicionar uma nova task
const input = document.getElementById('inputTask') //captura o valor inserido no input

//adiciona dinamicamente um item a minha lista
function addTask(){
    const ul = document.getElementById('taskList') //captura a minha lista
    const li = document.createElement('li') //cria um item dinamicamente
    li.innerText = input.value //inseri o texto que estava no input para o meu item da lista
    li.classList.add('task') //adiciona uma classe ao meu item
    ul.appendChild(li) //adicona o item a minha lista
}

button.addEventListener('click', addTask) //captura um evento de click e chama a função para adicionar uma nova task