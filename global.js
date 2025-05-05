function atualizarContador() {
    // Defina a data final (Ano, Mês (0-11), Dia, Hora, Minuto, Segundo)
    var dataFinal = new Date(2025, 9, 20, 17, 0, 0); // 20 de março de 2025 às 23:59:59

    var agora = new Date();
    var diferenca = dataFinal - agora; // Diferença em milissegundos

    if (diferenca <= 0) {
        document.getElementById("contador").innerHTML = "Chegou o grande dia!";
        clearInterval(intervalo); // Para a contagem quando atingir a data final
        return;
    }

    var dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    var horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById("contador").innerHTML =
        `Faltam ${dias} dias, ${horas}h ${minutos}m ${segundos}s`;
}

// Atualiza o contador a cada segundo
var intervalo = setInterval(atualizarContador, 1000);

// Executa a função imediatamente para evitar espera de 1s
atualizarContador();

// Verifica se veio do formulário de mensagem
if (window.location.hash === '#mensagens' || document.referrer.includes('mensagem.html')) {
    setTimeout(() => {
        const mensagensSection = document.getElementById('mensagens');
        mensagensSection.scrollIntoView({ behavior: 'smooth' });
    }, 300); // Pequeno delay para carregar as mensagens
}

// Inicialize o Firebase com sua configuração
const firebaseConfig = {
    apiKey: "AIzaSyDa-mCyN9ypQqUDvZNCKjIjryknwTIQPyY",
    authDomain: "cha-panela-45b3c.firebaseapp.com",
    projectId: "cha-panela-45b3c",
    storageBucket: "cha-panela-45b3c.firebasestorage.app",
    messagingSenderId: "67640604092",
    appId: "1:67640604092:web:e793278ead88c340ff27b9"
};

firebase.initializeApp(firebaseConfig);

// Referência para o banco de dados
const database = firebase.database();
const mensagensRef = database.ref('mensagens');

// Buscar e exibir mensagens
mensagensRef.on('value', (snapshot) => {
    const mensagens = snapshot.val();
    const listaMensagens = document.getElementById('listaMensagens');
    listaMensagens.innerHTML = '';

    if (mensagens) {
        Object.keys(mensagens).forEach(key => {
            const msg = mensagens[key];
            const mensagemElement = document.createElement('div');
            mensagemElement.className = 'mensagem';
            mensagemElement.innerHTML = `
                    <p class="mensagem-nome"><strong>${msg.nome}</strong></p>
                    <p class="mensagem-texto">${msg.mensagem.replace(/\n/g, '<br>')}</p>
                    <p class="mensagem-data">${msg.data}</p>
                    <hr>
                `;
            listaMensagens.appendChild(mensagemElement);
        });
    } else {
        listaMensagens.innerHTML = '<p>Nenhuma mensagem ainda. Seja o primeiro a deixar uma mensagem!</p>';
    }
});

