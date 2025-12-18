// Cria uma "caixa" (array) vazia onde serão guardados todos os números que você digitar
// Ela é criada fora das funções para que todas as funções possam acessá-la
let notas = [];

// Entrada de dados do usuário
function AdicionarNota() {
    // Pega o campo de texto do HTML
    const inputNota = document.getElementById('nota');
    // Converte o texto digitado em número decimal
    const valorNota = parseFloat(inputNota.value);

    // "Se o valorNota for um número real"
    if (!isNaN(valorNota)) {
        notas.push(valorNota); // Adiciona no array
        inputNota.value = ''; // Limpa o campo de digitação
        inputNota.focus(); // Deixa o cursor pronto para a próxima nota
        atualizarListaNotas(); // Chama a função para mostrar a lista na tela
    }
    else {
        alert("Por favor, digite uma nota válida."); // Avisa se tentarem digitar algo vazio ou texto
    }
}

function atualizarListaNotas() {
    const listaUl = document.getElementById('notas'); // Pega a lista (<ul>) do HTML
    listaUl.innerHTML = ''; // Limpa a lista antes de reconstruí-la

    // Percorre cada nota guardada
    for (let index = 0; index < notas.length; index += 1) {
        const novoItem = document.createElement('li'); // Cria um novo item de lista (<li>)
        novoItem.innerText = `Nota ${index + 1}: ${notas[index]}`; // Escreve o texto da nota
        listaUl.appendChild(novoItem); // Coloca o item criado dentro da lista (<ul>)
    }
}

function CalcularMedia() {
    if (notas.length === 0) { // Verifica se o array está vazio
        alert("Adicione notas primeiro!");
        return; // Para a função aqui mesmo se não houver notas
    }
    let somatorioNotas = 0;

    for (let index = 0; index < notas.length; index += 1) {
        somatorioNotas = somatorioNotas + notas[index]; // Soma a nota atual ao total
    }

    let media = somatorioNotas / notas.length; // Divide a soma total pela quantidade de notas

    // Garanta que o ID 'resultado' exista no seu HTML
    const campoResultado = document.getElementById('resultado');

    if (media > 6) {
        // .toFixed(1) deixa só uma casa decimal
        campoResultado.textContent = `Media: ${media.toFixed(1)} - APROVADA`;
        campoResultado.style.color = 'green'; // Muda a cor do texto para verde
    }
    else {
        campoResultado.textContent = `Media: ${media.toFixed(1)} - REPROVADA`;
        campoResultado.style.color = 'red'; // Muda a cor do texto para vermelho
    }
}

    function LimparTudo() {
        // 1. Esvazia o Array de notas
        notas = [];

        // 2. Remove as notas da tela
        document.getElementById('notas').innerHTML = '';

        // 3. Limpa o texto de resultado, limpa a frase de aprovação/reprovação
        document.getElementById('resultado').textContent = '';

        // 4. Limpa a caixa de digitação
        document.getElementById('nota').value = '';

        // 5. Devolve o foco para o campo de nota
        document.getElementById('nota').focus();

        alert("Os dados foram limpos!"); // Feedback visual de que a ação funcional
    }
