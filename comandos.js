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

const produtos = [
    {
        nome: "Liquidificador",
        valor: "R$ 100,00",
        imagem: "img/liquidificador.png",
        pagamento: "https://checkout.nubank.com.br/DiNnlzaRiG92botq",
        whatsapp: "https://wa.me/5534996920066/?text=Olá,%20Gostaria%20de%20reservar%20esse%20presente%20-%20Liquidificador."
    },
    {
        nome: "Air Fryer",
        valor: "R$ 399,00",
        imagem: "img/airfryer.png",
        pagamento: "https://checkout.nubank.com.br/DiNnlzaRiG92botq",
        whatsapp: "https://wa.me/5534996920066/?text=Olá,%20Gostaria%20de%20reservar%20esse%20presente%20-%20Air%20Fryer."
    },
    {
        nome: "Sanduicheira",
        valor: "R$ 100,00",
        imagem: "img/sandui.png",
        pagamento: "https://checkout.nubank.com.br/DiNnlzaRiG92botq",
        whatsapp: "https://wa.me/5534996920066/?text=Olá,%20Gostaria%20de%20reservar%20esse%20presente%20-%20Sanduicheira."
    },
    {
        nome: "Jogo de Panelas",
        valor: "R$ 550,00",
        imagem: "/img/panelas.png",
        pagamento: "https://checkout.nubank.com.br/DiNnlzaRiG92botq",
        whatsapp: "https://wa.me/5534996920066/?text=Ol%C3%A1,%20Gostaria%20de%20reservar%20esse%20presente%20(Jogo%20de%20Panelas)."
    },
    {
        nome: "Panela De Pressao",
        valor: "R$ 119,99",
        imagem: "/img/panelapressao.png",
        pagamento: "https://checkout.nubank.com.br/DiNnlzaRiG92botq",
        whatsapp: "https://wa.me/5534996920066/?text=Ol%C3%A1,%20Gostaria%20de%20reservar%20esse%20presente%20(Panela%20de%20Pressao).",
    },
    {
        nome: "Micro Ondas",
        valor: "R$ 600,00",
        imagem: "../img/microondas.png",
        pagamento: "https://checkout.nubank.com.br/DiNnlzaRiG92botq",
        whatsapp: "https://wa.me/5534996920066/?text=Ol%C3%A1,%20Gostaria%20de%20reservar%20esse%20presente%20(Micro%20-%20Ondas).",

    },
    {
        nome: "Escorredor de Louças",
        valor: "R$ 100,00",
        imagem: "../img/escorredor.png",
        pagamento: "https://checkout.nubank.com.br/DiNnlzaRiG92botq",
        whatsapp: "https://wa.me/5534996920066/?text=Ol%C3%A1,%20Gostaria%20de%20reservar%20esse%20presente%20(Escorredor%20de%20Louças).",

    },
    {
        nome: "Jogo de Pratos",
        valor: "R$ 65,00",
        imagem: "../img/pratos.png",
        pagamento: "https://checkout.nubank.com.br/DiNnlzaRiG92botq",
        whatsapp: "https://wa.me/5534996920066/?text=Ol%C3%A1,%20Gostaria%20de%20reservar%20esse%20presente%20(Jogo%20de%20Pratos).",

    },
    {
        nome: "Kit de Utensilios",
        valor: "R$ 65,00",
        imagem: "../img/kitutensilios.png",
        pagamento: "https://checkout.nubank.com.br/DiNnlzaRiG92botq",
        whatsapp: "https://wa.me/5534996920066/?text=Ol%C3%A1,%20Gostaria%20de%20reservar%20esse%20presente%20(Kit%20de%20Utensilios).",

    },
    {
        nome: "Travessa de Vidro",
        valor: "R$ 70,00",
        imagem: "../img/TravessaDeVidro.png",
        pagamento: "https://checkout.nubank.com.br/DiNnlzaRiG92botq",
        whatsapp: "https://wa.me/5534996920066/?text=Ol%C3%A1,%20Gostaria%20de%20reservar%20esse%20presente%20(Travessa%20de%20Vidro).",

    },
    {
        nome: "Kit Porta Tempero",
        valor: "R$ 70,00",
        imagem: "../img/portatempero.png",
        pagamento: "https://checkout.nubank.com.br/DiNnlzaRiG92botq",
        whatsapp: "https://wa.me/5534996920066/?text=Ol%C3%A1,%20Gostaria%20de%20reservar%20esse%20presente%20(Kit%20Porta%20Tempero).",

    },
    {
        nome: "Jogo De Facas",
        valor: "R$ 120,00",
        imagem: "../img/facas.png",
        pagamento: "https://checkout.nubank.com.br/DiNnlzaRiG92botq",
        whatsapp: "https://wa.me/5534996920066/?text=Ol%C3%A1,%20Gostaria%20de%20reservar%20esse%20presente%20(Jogo%20De%20Facas).",

    },
    {
        nome: "Faqueiro Buzios",
        valor: "R$ 89,90",
        imagem: "../img/faqueirobuzios.png",
        pagamento: "https://checkout.nubank.com.br/DiNnlzaRiG92botq",
        whatsapp: "https://wa.me/5534996920066/?text=Ol%C3%A1,%20Gostaria%20de%20reservar%20esse%20presente%20(Faqueiro%2024%20Peças).",

    },
    {
        nome: "Kit Pote Hermeticos",
        valor: "R$ 100,00",
        imagem: "../img/poteshermeticos.png",
        pagamento: "https://checkout.nubank.com.br/DiNnlzaRiG92botq",
        whatsapp: "https://wa.me/5534996920066/?text=Ol%C3%A1,%20Gostaria%20de%20reservar%20esse%20presente%20(Kit%20Potes%20Hermeticos).",

    },
    {
        nome: "Kit Cozinha",
        valor: "R$ 61,99",
        imagem: "img/kitcozinha.png",
        pagamento: "https://checkout.nubank.com.br/DiNnlzaRiG92botq",
        whatsapp: "https://wa.me/5534996920066/?text=Ol%C3%A1,%20Gostaria%20de%20reservar%20esse%20presente%20(Kit%20Cozinha).",

    },
    {
        nome: "Jogo de Toalhas",
        valor: "R$ 95,00",
        imagem: "img/toalha.png",
        pagamento: "https://checkout.nubank.com.br/DiNnlzaRiG92botq",
        whatsapp: "https://wa.me/5534996920066/?text=Ol%C3%A1,%20Gostaria%20de%20reservar%20esse%20presente%20(Jogo%20De%20Toalhas).",

    },
    {
        nome: "Jogo de Pano de Pratos",
        valor: "R$ 35,00",
        imagem: "img/jogopanodeprato.png",
        pagamento: "https://checkout.nubank.com.br/DiNnlzaRiG92botq",
        whatsapp: "https://wa.me/5534996920066/?text=Ol%C3%A1,%20Gostaria%20de%20reservar%20esse%20presente%20(Jogo%20De%20Pano%20De%20Pratos).",

    }, {
        nome: "Jogo de Banheiro",
        valor: "R$ 70,00",
        imagem: "img/kitbanheiro.png",
        pagamento: "https://checkout.nubank.com.br/DiNnlzaRiG92botq",
        whatsapp: "https://wa.me/5534996920066/?text=Ol%C3%A1,%20Gostaria%20de%20reservar%20esse%20presente%20(Jogo%20De%20Baheiro).",

    },
    {
        nome: "Kit Potes Mantimentos",
        valor: "R$ 75,00",
        imagem: "img/kitpotesmantimento.png",
        pagamento: "https://checkout.nubank.com.br/DiNnlzaRiG92botq",
        whatsapp: "https://wa.me/5534996920066/?text=Ol%C3%A1,%20Gostaria%20de%20reservar%20esse%20presente%20(Kit%20Pote%20Mantimentos).",

    },
    {
        nome: "Jogo de Tapetes",
        valor: "R$ 90,00",
        imagem: "img/jogotapete1.png",
        pagamento: "https://checkout.nubank.com.br/DiNnlzaRiG92botq",
        whatsapp: "https://wa.me/5534996920066/?text=Ol%C3%A1,%20Gostaria%20de%20reservar%20esse%20presente%20(Jogo%20De%20Tapetes).",

    },
    {
        nome: "Processador",
        valor: "R$ 25,00",
        imagem: "img/processador.png",
        pagamento: "https://checkout.nubank.com.br/DiNnlzaRiG92botq",
        whatsapp: "https://wa.me/5534996920066/?text=Ol%C3%A1,%20Gostaria%20de%20reservar%20esse%20presente%20(Processador%20De%20Alimentos).",

    },
    {
        nome: "Cortador Multifunção",
        valor: "R$ 50,00",
        imagem: "img/cortadorMulti.png",
        pagamento: "https://checkout.nubank.com.br/DiNnlzaRiG92botq",
        whatsapp: "https://wa.me/5534996920066/?text=Ol%C3%A1,%20Gostaria%20de%20reservar%20esse%20presente%20(Cortador%20Multifunção).",

    },
    {
        nome: "Jogo de Tabuleiros",
        valor: "R$ 100,00",
        imagem: "img/tabuleiros.png",
        pagamento: "https://checkout.nubank.com.br/DiNnlzaRiG92botq",
        whatsapp: "https://wa.me/5534996920066/?text=Ol%C3%A1,%20Gostaria%20de%20reservar%20esse%20presente%20(Jogo%20De%20Tabuleiros).",

    },
    {
        nome: "Taças de Sobremesa",
        valor: "R$ 65,00",
        imagem: "img/JogoTacaSobremesa.png",
        pagamento: "https://checkout.nubank.com.br/DiNnlzaRiG92botq",
        whatsapp: "https://wa.me/5534996920066/?text=Ol%C3%A1,%20Gostaria%20de%20reservar%20esse%20presente%20(Jogo%20De%20Taças%20De%@Sobremesa).",

    },
    {
        nome: "Jogo de Copos",
        valor: "R$ 60,00",
        imagem: "../img/jogocopos2.png",
        pagamento: "https://checkout.nubank.com.br/DiNnlzaRiG92botq",
        whatsapp: "https://wa.me/5534996920066/?text=Ol%C3%A1,%20Gostaria%20de%20reservar%20esse%20presente%20(Jogo%20de%20Copos).",

    },
    {
        nome: "Jogo de Copos",
        valor: "R$ 40,00",
        imagem: "img/kitcopo.png",
        pagamento: "https://checkout.nubank.com.br/DiNnlzaRiG92botq",
        whatsapp: "https://wa.me/5534996920066/?text=Ol%C3%A1,%20Gostaria%20de%20reservar%20esse%20presente%20(Jogo%20De%20Copos).",

    },
    {
        nome: "Conjunto de Jarras",
        valor: "R$ 70,00",
        imagem: "img/conjuntoJarra.png",
        pagamento: "https://checkout.nubank.com.br/DiNnlzaRiG92botq",
        whatsapp: "https://wa.me/5534996920066/?text=Ol%C3%A1,%20Gostaria%20de%20reservar%20esse%20presente%20(Conjunto%20De%20Jarras).",

    },
    {
        nome: "Aparelho de Jantar",
        valor: "R$ 200,00",
        imagem: "img/aparelhoDeJantar.png",
        pagamento: "https://checkout.nubank.com.br/DiNnlzaRiG92botq",
        whatsapp: "https://wa.me/5534996920066/?text=Ol%C3%A1,%20Gostaria%20de%20reservar%20esse%20presente%20(Aparelho%20De%20Jantar).",
    },
    {
        nome: "Jogo de Lençol",
        valor: "R$ 120,00",
        imagem: "img/jogoDeLencol.png",
        pagamento: "https://checkout.nubank.com.br/DiNnlzaRiG92botq",
        whatsapp: "https://wa.me/5534996920066/?text=Ol%C3%A1,%20Gostaria%20de%20reservar%20esse%20presente%20(Jogo%20De%20Lençol).",
    },
    {
        nome: "Jogo de Toalha",
        valor: "R$ 95,00",
        imagem: "img/jogoDeToalhas.png",
        pagamento: "https://checkout.nubank.com.br/DiNnlzaRiG92botq",
        whatsapp: "https://wa.me/5534996920066/?text=Ol%C3%A1,%20Gostaria%20de%20reservar%20esse%20presente%20(Jogo%20De%20Toalha).",
    },
    {
        nome: "Saladeira",
        valor: "R$ 50,00",
        imagem: "img/saladeira.png",
        pagamento: "https://checkout.nubank.com.br/DiNnlzaRiG92botq",
        whatsapp: "https://wa.me/5534996920066/?text=Ol%C3%A1,%20Gostaria%20de%20reservar%20esse%20presente%20(Saladeira).",
    },
    {
        nome: "Cortador e Descascador",
        valor: "R$ 30,00",
        imagem: "img/cortadorEdescascador.png",
        pagamento: "https://checkout.nubank.com.br/DiNnlzaRiG92botq",
        whatsapp: "https://wa.me/5534996920066/?text=Ol%C3%A1,%20Gostaria%20de%20reservar%20esse%20presente%20(Cortador%20E%20Descascador).",
    },
    {
        nome: "Jogo de Peneiras",
        valor: "R$ 35,00",
        imagem: "img/jogoDePeneiras.png",
        pagamento: "https://checkout.nubank.com.br/DiNnlzaRiG92botq",
        whatsapp: "https://wa.me/5534996920066/?text=Ol%C3%A1,%20Gostaria%20de%20reservar%20esse%20presente%20(Jogo%20De%20Peneiras).",
    },
    {
        nome: "jogo de Frigideiras",
        valor: "R$ 80,00",
        imagem: "img/jogoDeFrigideiras.png",
        pagamento: "https://checkout.nubank.com.br/DiNnlzaRiG92botq",
        whatsapp: "https://wa.me/5534996920066/?text=Ol%C3%A1,%20Gostaria%20de%20reservar%20esse%20presente%20(Jogo%20De%Frigideiras).",
    },
    {
        nome: "Espremedor de Frutas",
        valor: "R$ 140,00",
        imagem: "img/espremedorDeFrutas.png",
        pagamento: "https://checkout.nubank.com.br/DiNnlzaRiG92botq",
        whatsapp: "https://wa.me/5534996920066/?text=Ol%C3%A1,%20Gostaria%20de%20reservar%20esse%20presente%20(Espremedor%20De%Suco).",
    },
    {
        nome: "Boleira",
        valor: "R$ 70,00",
        imagem: "img/boleira.png",
        pagamento: "https://checkout.nubank.com.br/DiNnlzaRiG92botq",
        whatsapp: "https://wa.me/5534996920066/?text=Ol%C3%A1,%20Gostaria%20de%20reservar%20esse%20presente%20(Boleira).",
    }
    // Adicione novos produtos aqui facilmente
]; 

const container = document.getElementById("produtos-container");

produtos.forEach((produto, index) => {
    const produtoHTML = `
      <div class="tamanho__grid">
        <img src="${produto.imagem}" alt="${produto.nome}" class="secundario__imagem imagem">

        <h2 class="descricao__texto">${produto.nome}</h2>
        <br>
        <p class="container__valor">${produto.valor}</p>
        <button class="botao-modal" onclick="abrirModal(${index})">🎁 Quero Presentear!</button>

        <div class="modal-overlay" id="modal-${index}" style="display: none;">
          <div class="modal-conteudo">
            <p class="descricao__textoP">Escolha uma opção:</p>
            <div class="modal-botoes">
              <a href="${produto.pagamento}" target="_blank" class="botao-modal-opcao">💳 Presentear agora!</a>
              <a href="${produto.whatsapp}" target="_blank" class="botao-modal-opcao botao-whatsapp">📱 Reservar via WhatsApp e Presentear depois!</a>
            </div>
            <button class="modal-fechar" onclick="fecharModal(${index})">Fechar</button>
          </div>
        </div>
      </div>
    `;
    container.innerHTML += produtoHTML;
});

function abrirModal(index) {
    document.getElementById(`modal-${index}`).style.display = "flex";
}

function fecharModal(index) {
    document.getElementById(`modal-${index}`).style.display = "none";
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

