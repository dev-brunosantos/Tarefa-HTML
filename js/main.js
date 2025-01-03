const input = document.querySelector('.input');
const btnSalvar = document.querySelector('.btn-salvar');
const containerTarefas = document.querySelector('.container_tarefas');

function IniciarTarefas() {
    const txt = input.value;
    if(input.value === '' || txt.trim() === '') return alert('Digite uma tarefa');
    tarefas.CriarTarefa(input.value);
    input.value = '';
}

btnSalvar.addEventListener('click', IniciarTarefas);

window.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        IniciarTarefas()
    }
});

const tarefasCadastradas = JSON.parse(localStorage.getItem("tarefas")) || []
