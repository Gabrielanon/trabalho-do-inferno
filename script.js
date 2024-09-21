document.getElementById('meuBotao').addEventListener('click', function() {
    document.getElementById('mensagem').textContent = 'Você clicou no botão!';
});

document.getElementById('mostrarTexto').addEventListener('click', function() {
    const texto = document.getElementById('meuInput').value;
    document.getElementById('textoDigitado').textContent = `Você digitou: ${texto}`;
});
