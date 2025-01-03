const input = document.querySelector('.input');
const btnSalvar = document.querySelector('.btn-salvar');
const containerTarefas = document.querySelector('.container_tarefas');

function IniciarTarefas() {
    const txt = input.value;
    if (input.value === '' || txt.trim() === '') return alert('Digite uma tarefa');
    tarefas.CriarTarefa(input.value);
    input.value = '';
}

btnSalvar.addEventListener('click', IniciarTarefas);

window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        IniciarTarefas()
    }
});

const tarefasCadastradas = JSON.parse(localStorage.getItem("tarefas")) || []


const duvidas = document.querySelector('.btn-icone');

duvidas.addEventListener('click', () => {
    alert(`
    1. Digite uma tarefa no campo de texto e clique no botão salvar ou pressione a tecla Enter.
    
    2. Para excluir uma tarefa, clique no botão 'X'.
    
    3. Para concluir uma tarefa, clique e segure por alguns segundos.
    
    4. Para desmarcar uma tarefa, clique duas vezes sobre ela.
    `)
})