const button = document.getElementById('addtask') //captura o botão de adicionar uma nova task
const input = document.getElementById('inputTask') //captura o valor inserido no input

//adiciona dinamicamente um item a minha lista
function addTask(){
    if(input.value === ''){
        alert('Please enter a task')
    } else {
        const ul = document.getElementById('taskList') //captura a minha lista
        const li = document.createElement('li') //cria um item dinamicamente
        const div = document.createElement('div') //cria uma div para organizar o radio button e o inpu.value
        const radio = document.createElement('input') //cria um input para o meu radio button
        radio.type = 'radio' //define o tipo do botão
        li.classList.add('task') //adiciona uma classe ao meu item
        li.classList.add('taskitens') //adiciona um segunda classe no meu item
        div.classList.add('organization') //adicona uma classe a minha div organizadora
        const span = document.createElement('span') //cria uma tag span dinamicamente
        span.textContent = input.value //atribui o valor do texto para minha tag span
        div.appendChild(radio) //adicona o meu radio button a minha div organizadora
        div.appendChild(document.createTextNode(' ')) //adiciona um espaço entre o radio button e o texto
        div.appendChild(span) //coloca o texto que estava no input na minha div organizadora
        li.appendChild(div) //adiciona a minha div organizadora ao meu li
        li.appendChild(createRemoveBtn()) //adiciona um botâo para remover o item
        ul.appendChild(li) //adicona o item a minha lista
        checkTask(radio, span) //chama a função para verificar se o botâo foi marcado
    }
}

//cria um botâo que remove a task
function createRemoveBtn(){
    const btn = document.createElement('button') //cria o botão dinamicamente
    btn.innerHTML = '<i class="fa-solid fa-trash"></i>'
    removeTask(btn) //chama a minha função que remove itens da lista
    return btn //retorna o botão criado
}

//remove os itens da lista
function removeTask(btn){
    //recebe o botão que foi clicado como parâmetro e adiciona uma função anonima para ele
    btn.addEventListener('click', function (){
        btn.parentNode.remove() //acessa o elemento pai do botâo que é li e remove ele da lista
    })
}

//verifica se a tarefa já foi concluída
function checkTask(radioBtn, textTask){
    radioBtn.addEventListener('click', function (){
        //se o botão estiver com o valor checked ele adiciona uma linha por cima do meu texto
        if(radioBtn.checked){
            textTask.innerHTML = '<s>' + textTask.innerHTML + '</s>'
        } else { //se não ele remove a linha
            textTask.innerHTML = textTask.innerHTML.replace(/<\/?s>/g, '')
        }
    })
}

button.addEventListener('click', addTask) //captura um evento de click e chama a função para adicionar uma nova task