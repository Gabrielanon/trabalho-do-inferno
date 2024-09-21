document.getElementById('meuBotao').addEventListener('click', function() {
    document.getElementById('mensagem').textContent = 'Você clicou no botão!';
});

document.getElementById('mostrarTexto').addEventListener('click', function() {
    const texto = document.getElementById('meuInput').value;
    document.getElementById('textoDigitado').textContent = `Você digitou: ${texto}`;
});

document.getElementById('mudarCor').addEventListener('click', function() {
    const cores = ['#f0f0f0', '#ffcccc', '#ccffcc', '#ccccff', '#ffffcc'];
    const corAtual = document.body.style.backgroundColor;
    let novaCor = cores[Math.floor(Math.random() * cores.length)];
    while (novaCor === corAtual) {
        novaCor = cores[Math.floor(Math.random() * cores.length)];
    }
    document.body.style.backgroundColor = novaCor;
});

let contador = 0;
document.getElementById('contarCliques').addEventListener('click', function() {
    contador++;
    document.getElementById('contadorCliques').textContent = `Cliques: ${contador}`;
});

document.getElementById('adicionarItem').addEventListener('click', function() {
    const item = document.getElementById('itemInput').value;
    if (item) {
        const li = document.createElement('li');
        li.textContent = item;
        document.getElementById('listaItens').appendChild(li);
        document.getElementById('itemInput').value = '';
    }
});

document.querySelectorAll('.quizBtn').forEach(button => {
    button.addEventListener('click', function() {
        const resposta = this.getAttribute('data-answer');
        const resultado = resposta === 'Brasília' ? 'Correto!' : 'Errado!';
        document.getElementById('quizResultado').textContent = resultado;
    });
});

let tempo = 0;
let intervalo;
document.getElementById('iniciarContador').addEventListener('click', function() {
    if (!intervalo) {
        intervalo = setInterval(() => {
            tempo++;
            document.getElementById('contadorTempo').textContent = `${tempo} segundos`;
        }, 1000);
    }
});

const ctx = document.getElementById('meuGrafico').getContext('2d');
const meuGrafico = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
        datasets: [{
            label: 'Vendas',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
