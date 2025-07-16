

const produtos = [
    
        {
            "nome": "Jogo de Tapetes",
            "imagem": "img/jogotapete1.png",
            "whatsapp": "https://wa.me/5534996920066/?text=Ol%C3%A1,%20gostaria%20de%20reservar%20esse%20presente%20-%20Jogo%20de%20Tapetes."
        },
        {
            "nome": "Liquidificador",
            "imagem": "img/liquidificador.png",
            "whatsapp": "https://wa.me/5534996920066/?text=Ol%C3%A1,%20gostaria%20de%20reservar%20esse%20presente%20-%20Liquidificador."
        },
        {
            "nome": "Air Fryer",
            "imagem": "img/airfryer.png",
            "whatsapp": "https://wa.me/5534996920066/?text=Ol%C3%A1,%20gostaria%20de%20reservar%20esse%20presente%20-%20Air%20Fryer."
        },
        {
            "nome": "Sanduicheira",
            "imagem": "img/sandui.png",
            "whatsapp": "https://wa.me/5534996920066/?text=Ol%C3%A1,%20gostaria%20de%20reservar%20esse%20presente%20-%20Sanduicheira."
        },
        {
            "nome": "Jogo de Panelas",
            "imagem": "/img/panelas.png",
            "whatsapp": "https://wa.me/5534996920066/?text=Ol%C3%A1,%20gostaria%20de%20reservar%20esse%20presente%20-%20Jogo%20de%20Panelas.",
            "disponivel": false
        },
        {
            "nome": "Panela De Pressao",
            "imagem": "/img/panelapressao.png",
            "whatsapp": "https://wa.me/5534996920066/?text=Ol%C3%A1,%20gostaria%20de%20reservar%20esse%20presente%20-%20Panela%20De%20Pressao."
        },
        {
            "nome": "Micro Ondas",
            "imagem": "../img/microondas.png",
            "whatsapp": "https://wa.me/5534996920066/?text=Ol%C3%A1,%20gostaria%20de%20reservar%20esse%20presente%20-%20Micro%20Ondas.",
            "disponivel": false
        },
        {
            "nome": "Escorredor de Louças",
            "imagem": "../img/escorredor.png",
            "whatsapp": "https://wa.me/5534996920066/?text=Ol%C3%A1,%20gostaria%20de%20reservar%20esse%20presente%20-%20Escorredor%20de%20Lou%C3%A7as."
        },
        {
            "nome": "Jogo de Pratos",
            "imagem": "../img/pratos.png",
            "whatsapp": "https://wa.me/5534996920066/?text=Ol%C3%A1,%20gostaria%20de%20reservar%20esse%20presente%20-%20Jogo%20de%20Pratos."
        },
        {
            "nome": "Kit de Utensilios",
            "imagem": "../img/kitutensilios.png",
            "whatsapp": "https://wa.me/5534996920066/?text=Ol%C3%A1,%20gostaria%20de%20reservar%20esse%20presente%20-%20Kit%20de%20Utensilios."
        },
        {
            "nome": "Travessa de Vidro",
            "imagem": "../img/TravessaDeVidro.png",
            "whatsapp": "https://wa.me/5534996920066/?text=Ol%C3%A1,%20gostaria%20de%20reservar%20esse%20presente%20-%20Travessa%20de%20Vidro."
        },
        {
            "nome": "Kit Porta Tempero",
            "imagem": "../img/portatempero.png",
            "whatsapp": "https://wa.me/5534996920066/?text=Ol%C3%A1,%20gostaria%20de%20reservar%20esse%20presente%20-%20Kit%20Porta%20Tempero."
        },
        {
            "nome": "Jogo De Facas",
            "imagem": "../img/facas.png",
            "whatsapp": "https://wa.me/5534996920066/?text=Ol%C3%A1,%20gostaria%20de%20reservar%20esse%20presente%20-%20Jogo%20De%20Facas."
        },
        {
            "nome": "Faqueiro Buzios",
            "imagem": "../img/faqueirobuzios.png",
            "whatsapp": "https://wa.me/5534996920066/?text=Ol%C3%A1,%20gostaria%20de%20reservar%20esse%20presente%20-%20Faqueiro%2024%20Pe%C3%A7as."
        },
        {
            "nome": "Kit Pote Hermeticos",
            "imagem": "../img/poteshermeticos.png",
            "whatsapp": "https://wa.me/5534996920066/?text=Ol%C3%A1,%20gostaria%20de%20reservar%20esse%20presente%20-%20Kit%20Potes%20Hermeticos."
        },
        {
            "nome": "Kit Cozinha",
            "imagem": "img/kitcozinha.png",
            "whatsapp": "https://wa.me/5534996920066/?text=Ol%C3%A1,%20gostaria%20de%20reservar%20esse%20presente%20-%20Kit%20Cozinha."
        },
        {
            "nome": "Jogo de Toalhas",
            "imagem": "img/toalha.png",
            "whatsapp": "https://wa.me/5534996920066/?text=Ol%C3%A1,%20gostaria%20de%20reservar%20esse%20presente%20-%20Jogo%20de%20Toalhas."
        },
        {
            "nome": "Jogo de Pano de Pratos",
            "imagem": "img/jogopanodeprato.png",
            "whatsapp": "https://wa.me/5534996920066/?text=Ol%C3%A1,%20gostaria%20de%20reservar%20esse%20presente%20-%20Jogo%20de%20Pano%20de%20Pratos."
        },
        {
            "nome": "Jogo de Banheiro",
            "imagem": "img/kitbanheiro.png",
            "whatsapp": "https://wa.me/5534996920066/?text=Ol%C3%A1,%20gostaria%20de%20reservar%20esse%20presente%20-%20Jogo%20de%20Banheiro."
        },
        {
            "nome": "Kit Potes Mantimentos",
            "imagem": "img/kitpotesmantimento.png",
            "whatsapp": "https://wa.me/5534996920066/?text=Ol%C3%A1,%20gostaria%20de%20reservar%20esse%20presente%20-%20Kit%20Potes%20Mantimentos."
        },
        {
            "nome": "Processador",
            "imagem": "img/processador.png",
            "whatsapp": "https://wa.me/5534996920066/?text=Ol%C3%A1,%20gostaria%20de%20reservar%20esse%20presente%20-%20Processador%20De%20Alimentos."
        },
        {
            "nome": "Cortador Multifunção",
            "imagem": "img/cortadorMulti.png",
            "whatsapp": "https://wa.me/5534996920066/?text=Ol%C3%A1,%20gostaria%20de%20reservar%20esse%20presente%20-%20Cortador%20Multifun%C3%A7%C3%A3o.",
            "disponivel": false
        },
        {
            "nome": "Jogo de Tabuleiros",
            "imagem": "img/tabuleiros.png",
            "whatsapp": "https://wa.me/5534996920066/?text=Ol%C3%A1,%20gostaria%20de%20reservar%20esse%20presente%20-%20Jogo%20de%20Tabuleiros."
        },
        {
            "nome": "Taças de Sobremesa",
            "imagem": "img/JogoTacaSobremesa.png",
            "whatsapp": "https://wa.me/5534996920066/?text=Ol%C3%A1,%20gostaria%20de%20reservar%20esse%20presente%20-%20Ta%C3%A7as%20de%20Sobremesa."
        },
        {
            "nome": "Jogo de Copos",
            "imagem": "../img/jogocopos2.png",
            "whatsapp": "https://wa.me/5534996920066/?text=Ol%C3%A1,%20gostaria%20de%20reservar%20esse%20presente%20-%20Jogo%20de%20Copos."
        },
        {
            "nome": "Jogo de Copos",
            "imagem": "img/kitcopo.png",
            "whatsapp": "https://wa.me/5534996920066/?text=Ol%C3%A1,%20gostaria%20de%20reservar%20esse%20presente%20-%20Jogo%20de%20Copos."
        },
        {
            "nome": "Conjunto de Jarras",
            "imagem": "img/conjuntoJarra.png",
            "whatsapp": "https://wa.me/5534996920066/?text=Ol%C3%A1,%20gostaria%20de%20reservar%20esse%20presente%20-%20Conjunto%20de%20Jarras."
        },
        {
            "nome": "Aparelho de Jantar",
            "imagem": "img/aparelhoDeJantar.png",
            "whatsapp": "https://wa.me/5534996920066/?text=Ol%C3%A1,%20gostaria%20de%20reservar%20esse%20presente%20-%20Aparelho%20de%20Jantar."
        },
        {
            "nome": "Jogo de Lençol",
            "imagem": "img/jogoDeLencol.png",
            "whatsapp": "https://wa.me/5534996920066/?text=Ol%C3%A1,%20gostaria%20de%20reservar%20esse%20presente%20-%20Jogo%20de%20Len%C3%A7ol."
        },
        {
            "nome": "Jogo de Toalha",
            "imagem": "img/jogoDeToalhas.png",
            "whatsapp": "https://wa.me/5534996920066/?text=Ol%C3%A1,%20gostaria%20de%20reservar%20esse%20presente%20-%20Jogo%20de%20Toalha."
        },
        {
            "nome": "Saladeira",
            "imagem": "img/saladeira.png",
            "whatsapp": "https://wa.me/5534996920066/?text=Ol%C3%A1,%20gostaria%20de%20reservar%20esse%20presente%20-%20Saladeira."
        },
        {
            "nome": "Cortador e Descascador",
            "imagem": "img/cortadorEdescascador.png",
            "whatsapp": "https://wa.me/5534996920066/?text=Ol%C3%A1,%20gostaria%20de%20reservar%20esse%20presente%20-%20Cortador%20e%20Descascador."
        },
        {
            "nome": "Jogo de Peneiras",
            "imagem": "img/jogoDePeneiras.png",
            "whatsapp": "https://wa.me/5534996920066/?text=Ol%C3%A1,%20gostaria%20de%20reservar%20esse%20presente%20-%20Jogo%20de%20Peneiras."
        },
        {
            "nome": "jogo de Frigideiras",
            "imagem": "img/jogoDeFrigideiras.png",
            "whatsapp": "https://wa.me/5534996920066/?text=Ol%C3%A1,%20gostaria%20de%20reservar%20esse%20presente%20-%20jogo%20de%20Frigideiras."
        },
        {
            "nome": "Espremedor de Frutas",
            "imagem": "img/espremedorDeFrutas.png",
            "whatsapp": "https://wa.me/5534996920066/?text=Ol%C3%A1,%20gostaria%20de%20reservar%20esse%20presente%20-%20Espremedor%20de%20Frutas."
        },
        {
            "nome": "Boleira",
            "imagem": "img/BoleiraVidro.png",
            "whatsapp": "https://wa.me/5534996920066/?text=Ol%C3%A1,%20gostaria%20de%20reservar%20esse%20presente%20-%20Boleira."
        },
        {
            "nome": "Panela De Arroz",
            "imagem": "img/PaneladeArroz.png",
            "whatsapp": "https://wa.me/5534996920066/?text=Ol%C3%A1,%20gostaria%20de%20reservar%20esse%20presente%20-%20Panela%20De%20Arroz."
        },
        {
            "nome": "Ferro De passar",
            "imagem": "img/ferrodepassar.png",
            "whatsapp": "https://wa.me/5534996920066/?text=Ol%C3%A1,%20gostaria%20de%20reservar%20esse%20presente%20-%20Ferro%20De%20passar."
        },
        {
            "nome": "Tábua De Passar",
            "imagem": "img/Tabuadepassar.png",
            "whatsapp": "https://wa.me/5534996920066/?text=Ol%C3%A1,%20gostaria%20de%20reservar%20esse%20presente%20-%20T%C3%A1bua%20De%20Passar."
        },
        {
            "nome": "Forno Elétrico",
            "imagem": "img/Forno.png",
            "whatsapp": "https://wa.me/5534996920066/?text=Ol%C3%A1,%20gostaria%20de%20reservar%20esse%20presente%20-%20Forno%20El%C3%A9trico.",
            "disponivel": false
        },
        {
            "nome": "Tapetes P/ Banheiro",
            "imagem": "img/Tapetesbanheiro.png",
            "whatsapp": "https://wa.me/5534996920066/?text=Ol%C3%A1,%20gostaria%20de%20reservar%20esse%20presente%20-%20Tapetes%20P%2F%20Banheiro."
        },
        {
            "nome": "Cesto De Roupa",
            "imagem": "img/cestoderoupa.png",
            "whatsapp": "https://wa.me/5534996920066/?text=Ol%C3%A1,%20gostaria%20de%20reservar%20esse%20presente%20-%20Cesto%20De%20Roupa."
        },
        {
            "nome": "Lixeira P/ Banheiro",
            "imagem": "img/lixeirabanheiro.png",
            "whatsapp": "https://wa.me/5534996920066/?text=Ol%C3%A1,%20gostaria%20de%20reservar%20esse%20presente%20-%20Lixeira%20P%2F%20Banheiro."
        },
        {
            "nome": "Pipoqueira",
            "imagem": "img/Pipoqueira.png",
            "whatsapp": "https://wa.me/5534996920066/?text=Ol%C3%A1,%20gostaria%20de%20reservar%20esse%20presente%20-%20Pipoqueira."
        },
        {
            "nome": "Leiteira",
            "imagem": "img/FervedorAlminio.png",
            "whatsapp": "https://wa.me/5534996920066/?text=Ol%C3%A1,%20gostaria%20de%20reservar%20esse%20presente%20-%20Leiteira."
        }
        // Adicione novos produtos aqui, repetindo acima
    ]

const container = document.getElementById("produtos-container");

produtos.forEach((produto, index) => {
    const buttonPresentear = produto.disponivel === false
        ? `<button class="botao-modal" disabled style="opacity: 0.5; cursor: not-allowed;">🎁 Presente Já Reservado</button>`
        : `<a href="${produto.whatsapp}" target="_blank" class="botao-modal">🎁 Quero Presentear!</a>`;


    const produtoHTML = `
      <div class="tamanho__grid">
        <img src="${produto.imagem}" alt="${produto.nome}" class="secundario__imagem imagem">

        <h2 class="descricao__texto">${produto.nome}</h2>
        <br>
        ${buttonPresentear}

        <div class="modal-overlay" id="modal-${index}" style="display: none;">
          <div class="modal-conteudo">
            <p class="descricao__textoP">Escolha uma opção:</p>
            <div class="modal-botoes">
              <a href="${produto.pagamento}" target="_blank" class="botao-modal-opcao">💳 Presentear Online!</a>
              <a href="${produto.whatsapp}" target="_blank" class="botao-modal-opcao botao-whatsapp">📱 Reservar via WhatsApp e Presentear presencialmente!</a>
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