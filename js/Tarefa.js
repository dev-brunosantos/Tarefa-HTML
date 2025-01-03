class Tarefa extends Funcionalidades {
    nomeTarefa;

    constructor() { super() }

    CriarTarefa(tarefa) {
        this.nomeTarefa = tarefa
        containerTarefas.appendChild(this.CriarModelo(this.nomeTarefa))

        const infor = {
            id: this.GerarId(),
            tarefa: this.nomeTarefa,
            status: false
        }

        tarefasCadastradas.push(infor)

        localStorage.setItem("tarefas", JSON.stringify(tarefasCadastradas))
    }

    ConcluirTarefa(e, txt) {
        this.Finalizar(e, txt)
    }

}

const tarefas = new Tarefa();

tarefasCadastradas.forEach((item) => {
    containerTarefas.appendChild(tarefas.CriarModelo(item.tarefa))
})