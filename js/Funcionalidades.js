class Funcionalidades {
    GerarId() {
        var id = Math.floor(Math.random() * 1000000) + 1
        return id
    }

    CriarElemento(e) {
        var elemento = document.createElement(e)
        return elemento
    }

    AdicionarClasse(elemento, classe) {
        elemento.classList.add(classe)
    }

    CriarModelo(tarefa) {
        const container = this.CriarElemento('div')
        const txtTarefa = this.CriarElemento('p')
        const divBtn = this.CriarElemento('div')
        const btnExcluir = this.CriarElemento('button')

        this.AdicionarClasse(container, 'tarefa')
        this.AdicionarClasse(txtTarefa, 'txt-tarefa')
        this.AdicionarClasse(txtTarefa, 'centralizar')

        this.AdicionarClasse(divBtn, 'div-btn')
        this.AdicionarClasse(divBtn, 'centralizar')

        this.AdicionarClasse(btnExcluir, 'btn-excluir')
        this.AdicionarClasse(btnExcluir, 'centralizar')

        container.setAttribute('draggable', true);

        txtTarefa.textContent = tarefa
        btnExcluir.textContent = 'X'

        btnExcluir.addEventListener('click', () => {
            const index = tarefasCadastradas.findIndex((item) => item.tarefa === txtTarefa.textContent)
            tarefasCadastradas.splice(index, 1)

            localStorage.setItem("tarefas", JSON.stringify(tarefasCadastradas))
            
            alert(txtTarefa.textContent + ' foi excluída com sucesso!')
            
            container.remove()
        })

        container.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', txtTarefa.textContent);
            alert('Tarefa concluída com sucesso!')
            this.ConcluirTarefa(container, txtTarefa.textContent);
        });
        
        container.addEventListener('dblclick', () => {
            container.classList.remove('finalizada')
        })

        divBtn.appendChild(btnExcluir)
        container.appendChild(txtTarefa)
        container.appendChild(divBtn)

        return container
    }

    Finalizar(elemento, titulo) {
        const index = tarefasCadastradas.findIndex((item) => item.tarefa === titulo)
        tarefasCadastradas[index].status = !tarefasCadastradas[index].status
        if(tarefasCadastradas[index].status === true) {
            elemento.classList.add('finalizada')
        }
    }
}