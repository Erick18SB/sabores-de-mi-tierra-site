// ELEMENTOS DO VISUALIZADOR DE FOTOS

const fotoOverlay = document.querySelector("#foto-overlay");
const fotoAmpliada = document.querySelector("#foto-ampliada");
const fotoFechar = document.querySelector("#foto-fechar");

/* ========================================
   PRODUTOS DO CARDÁPIO
======================================== */

const produtos = [

    // PRATOS PRINCIPAIS
/* imagem: null, para pratos que ainda no tem foto
    imagem: "assets/images/cardapio/NomeDaFoto.jpeg", para prato que tem a imagem */
    {   nome: "Pique a lo Macho Grande",
        preco: 150,
        categoria: "principais",
        imagem: "assets/images/cardapio/piqG.jpeg",
        descricao: "Um dos pratos mais conhecidos da Bolívia, famoso por seus sabores marcantes e porções generosas. Uma ótima opção para compartilhar."
    },

    {   nome: "Pique a lo Macho Médio",
        preco: 100,
        categoria: "principais",
        imagem: null,
        descricao: "Uma versão de tamanho médio do tradicional Pique a lo Macho, ideal para quem deseja experimentar essa especialidade da culinária boliviana."
    },

    {   nome: "Sillp'ancho Individual",
        preco: 40,
        categoria: "principais",
        imagem: "assets/images/cardapio/silpInd.jpeg",
        descricao: "Tradicional prato de Cochabamba, na Bolívia, conhecido pela combinação de sabores e por ser uma refeição completa."
    },

    {   nome: "Sillp'ancho Grande",
        preco: 70,
        categoria: "principais",
        imagem: "assets/images/cardapio/silpG.jpeg",
        descricao: "Uma versão maior do tradicional Sillp'ancho, um dos pratos mais representativos da gastronomia de Cochabamba."
    },

    {   nome: "Majadito",
        preco: 40,
        categoria: "principais",
        imagem: "assets/images/cardapio/majadito.jpeg",
        descricao: "Especialidade do oriente boliviano, conhecida pelo sabor caseiro e pela presença marcante do arroz em sua preparação tradicional."
    },

    {   nome: "Sopa de maní",
        preco: 25,
        categoria: "principais",
        imagem: "assets/images/cardapio/sopa.jpeg",
        descricao: "Uma das sopas mais tradicionais da Bolívia, conhecida pelo sabor característico do amendoim e por sua presença na culinária familiar boliviana."
    },


    // ESPECIAIS DA CASA

    {   nome: "Picante de pollo",
        preco: 40,
        categoria: "especiais",
        imagem: null,
        descricao: "Especialidade tradicional boliviana à base de frango, conhecida por seu molho temperado e sabor marcante."
    },

    {   nome: "Picante Mixto",
        preco: 50,
        categoria: "especiais",
        imagem: "assets/images/cardapio/picantemixto.jpeg",
        descricao: "Uma combinação de duas especialidades da culinária boliviana: o frango do tradicional Picante de pollo e a língua bovina do Picante de lengua. Dois sabores marcantes reunidos em um único prato."
    },

    {   nome: "Picante de lengua",
        preco: 40,
        categoria: "especiais",
        imagem: null,
        descricao: "Prato tradicional da gastronomia boliviana, conhecido pelo preparo da língua bovina acompanhada de um molho saboroso."
    },

    {   nome: "Fricasé",
        preco: 50,
        categoria: "especiais",
        imagem: "assets/images/cardapio/fricasse.jpeg",
        descricao: "Uma especialidade muito apreciada na Bolívia, conhecida por seu caldo encorpado e sabor intenso."
    },


    // ESPECIAIS DO MÊS

    {   nome: "Chicharrón Médio",
        preco: 70,
        categoria: "mensais",
        imagem: null,
        descricao: "Uma especialidade tradicional boliviana preparada com carne suína, conhecida por seu sabor marcante e textura dourada. Disponível em porção média."
    },

    {   nome: "Chicharrón Grande",
        preco: 100,
        categoria: "mensais",
        imagem: null,
        descricao: "Uma versão maior do tradicional Chicharrón boliviano, ideal para quem deseja aproveitar essa especialidade em uma porção generosa."
    },

    {   nome: "Keperí al Horno",
        preco: 50,
        categoria: "mensais",
        imagem: null,
        descricao: "Uma especialidade tradicional do oriente boliviano, preparada com carne bovina e assada lentamente no forno por várias horas. Seu preparo cuidadoso proporciona uma carne macia, suculenta e cheia de sabor."
    },


    // ENTRADAS

    {   nome: "Salteña de carne e frango",
        preco: 12,
        unidade: "unidade",
        categoria: "entradas",
        imagem: "assets/images/cardapio/salt.jpeg",
        descricao: "Salteña boliviana tradicional, disponível nos sabores carne ou frango."
    },


    // PORÇÕES

    {   nome: "Arroz (100 g)",
        preco: 10,
        categoria: "porcoes",
        imagem: "assets/images/cardapio/arroz.jpeg",
        descricao: "Porção de arroz, uma opção prática para complementar sua refeição e acompanhar os pratos da casa."
    },

    {   nome: "Batata frita",
        preco: 15,
        categoria: "porcoes",
        imagem: "assets/images/cardapio/batata.jpeg",
        descricao: "Uma deliciosa porção de batatas fritas, ideal para acompanhar nossos pratos ou saborear separadamente."
    },

    {   nome: "Banana-da-terra (4 fatias)",
        preco: 14,
        categoria: "porcoes",
        imagem: "assets/images/cardapio/banana.jpeg",
        descricao: "Porção de banana-da-terra frita, um acompanhamento tradicional que combina o sabor levemente adocicado da banana com os pratos da culinária boliviana."
    },

    {   nome: "Porção de Mote",
        preco: 15,
        categoria: "porcoes",
        imagem: "assets/images/cardapio/mote.jpeg",
        descricao: ""
    },

    {   nome: "Ovo frito (unidade)",
        preco: 4,
        categoria: "porcoes",
        imagem: "assets/images/cardapio/ovo.jpeg",
        descricao: ""
    },

    {   nome: "Porção de pão",
        preco: 4,
        categoria: "porcoes",
        imagem: "assets/images/cardapio/pao.jpeg",
        descricao: ""
    },


    // ==============================
    // BEBIDAS
    // ==============================

    {   nome: "Refresco Moqochinchi 1L",
        preco: 20,
        categoria: "bebidas",
        subcategorias: ["bolivianas", "nao_alcoolicas"],
        imagem: "assets/images/cardapio/moqochinchi1L.jpeg",
        descricao: "Bebida tradicional boliviana preparada com pêssegos desidratados e especiarias. Uma opção refrescante e muito popular na Bolívia."
    },

    {   nome: "Refrigerante Lata",
        preco: 8.90,
        categoria: "bebidas",
        subcategorias: ["nao_alcoolicas"],
        imagem: "assets/images/cardapio/refrilata.jpeg",
        descricao: "Refrigerante em lata, ideal para acompanhar os pratos do nosso cardápio."
    },

    {   nome: "Salvietti Papaya",
        preco: 25,
        categoria: "bebidas",
        subcategorias: ["bolivianas", "nao_alcoolicas"],
        imagem: "assets/images/cardapio/salvietti.jpeg",
        descricao: "Refrigerante boliviano com sabor de papaya, conhecido por seu sabor característico e muito apreciado na Bolívia."
    },

    {   nome: "Simba 2L",
        preco: 25,
        categoria: "bebidas",
        subcategorias: ["bolivianas", "nao_alcoolicas"],
        imagem: "assets/images/cardapio/simba.jpeg",
        descricao: "Refrigerante Simba de 2 litros, uma bebida tradicionalmente consumida na Bolívia, ideal para compartilhar."
    },

    {   nome: "Cerveja Original",
        preco: 10,
        categoria: "bebidas",
        subcategorias: ["alcoolicas"],
        imagem: "assets/images/cardapio/original.jpeg",
        descricao: "Cerveja Original, uma opção clássica para acompanhar sua refeição."
    },

    {   nome: "Cerveja Huari",
        preco: 20,
        categoria: "bebidas",
        subcategorias: ["bolivianas", "alcoolicas"],
        imagem: "assets/images/cardapio/huari.jpeg",
        descricao: "Cerveja boliviana Huari, conhecida por sua tradição e sabor característico. Uma opção para quem deseja experimentar uma cerveja da Bolívia."
    },

    {   nome: "Cerveja Huari Miel",
        preco: 20,
        categoria: "bebidas",
        subcategorias: ["bolivianas", "alcoolicas"],
        imagem: "assets/images/cardapio/huariM.jpeg",
        descricao: "Cerveja boliviana Huari Miel, com notas de mel que proporcionam um sabor diferenciado."
    },

    {   nome: "Cerveja Paceña",
        preco: 20,
        categoria: "bebidas",
        subcategorias: ["bolivianas", "alcoolicas"],
        imagem: "assets/images/cardapio/pacena.jpeg",
        descricao: "Cerveja tradicional da Bolívia, conhecida por seu sabor refrescante e presença marcante na cultura boliviana."
    },

    {   nome: "Chuflay",
        preco: 25,
        categoria: "bebidas",
        subcategorias: ["bolivianas", "alcoolicas", "coqueteis"],
        consumoLocal: true,
        imagem: "assets/images/cardapio/chufly.jpeg",
        descricao: "Coquetel tradicional boliviano preparado com singani. Disponível exclusivamente para consumo no restaurante."
    },

    {   nome: "Shot de Singani",
        preco: 19.90,
        categoria: "bebidas",
        subcategorias: ["bolivianas", "alcoolicas"],
        consumoLocal: true,
        imagem: "assets/images/cardapio/shot.jpeg",
        descricao: "Dose de singani, destilado tradicional da Bolívia produzido a partir de uvas. Disponível exclusivamente para consumo no restaurante."
    },

    {   nome: "Maltín 440 ml",
        preco: 20,
        categoria: "bebidas",
        subcategorias: ["bolivianas", "nao_alcoolicas"],
        imagem: "assets/images/cardapio/maltin.jpeg",
        descricao: "Bebida de malte sem álcool, com sabor marcante e levemente adocicado."
    },

    {   nome: "Café",
        preco: 9.50,
        categoria: "bebidas",
        subcategorias: ["nao_alcoolicas"],
        imagem: null,
        descricao: ""
    },

    {   nome: "Moqochinchi Copo",
        preco: 12,
        categoria: "bebidas",
        subcategorias: ["bolivianas", "nao_alcoolicas"],
        imagem: "assets/images/cardapio/moqochinchi.jpeg",
        descricao: ""
    },

    {   nome: "Chicha de Maní 1 L",
        preco: 20,
        categoria: "bebidas",
        subcategorias: ["bolivianas"], // Não presumir fermentação ou teor alcoólico.
        imagem: "assets/images/cardapio/chicha.jpeg",
        descricao: ""
    },

    {   nome: "Chicha de Maní Copo",
        preco: 12,
        categoria: "bebidas",
        subcategorias: ["bolivianas"], // Não presumir fermentação ou teor alcoólico.
        imagem: "assets/images/cardapio/chichacopo.jpeg",
        descricao: ""
    },


    {
        nome: "Vinho",
        preco: null,
        categoria: "bebidas",
        subcategorias: ["alcoolicas"],
        imagem: "assets/images/cardapio/vinho.jpeg",
        descricao: "Opções disponíveis: Vinho C. de Solana, Vinho Kohlberg e Vinho San Isidro. Consulte os valores diretamente com o restaurante."
    },


    {   nome: "Água",
        preco: 7,
        categoria: "bebidas",
        subcategorias: ["nao_alcoolicas"],
        imagem: "assets/images/cardapio/agua.jpeg",
        descricao: ""
    },

    {   nome: "Água com gás",
        preco: 7,
        categoria: "bebidas",
        subcategorias: ["nao_alcoolicas"],
        imagem: "assets/images/cardapio/aguagas.jpeg",
        descricao: ""
    },

];


/* ========================================
   NOMES DAS CATEGORIAS
======================================== */

const nomesCategorias = {
    principais: "Pratos principais",
    especiais: "Especiais da casa",
    mensais: "Especiais do Mês",
    entradas: "Entradas",
    porcoes: "Porções",
    bebidas: "Bebidas"
};

/* ========================================
   FORMATAÇÃO DE PREÇOS
======================================== */

function formatarPreco(preco) {
    if (preco === null) {
        return "Consulte o preço";
    }

    return preco.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

function formatarPrecoProduto(produto) {
    const preco = formatarPreco(produto.preco);
    return produto.unidade && produto.preco !== null ? `${preco} / ${produto.unidade}` : preco;
}

/* ========================================
   CRIAÇÃO DOS CARTÕES
======================================== */

const listaProdutos = document.querySelector("#lista-produtos");

function criarCartao(produto) {
    const artigo = document.createElement("article");
    artigo.className = "cardapio-item";

    artigo.dataset.categoria = produto.categoria;
    artigo.dataset.subcategorias = (produto.subcategorias || []).join(" ");

    // Guarda a posição do produto na lista
    artigo.dataset.indice = produtos.indexOf(produto);

    const especial = produto.categoria === "especiais" ||
                     produto.categoria === "mensais";

    const avisoMensal = produto.categoria === "mensais"
        ? "<p>Preparado aproximadamente uma vez por mês.</p>"
        : "";

    artigo.innerHTML = `
        <div class="cardapio-item-imagem" role="button" tabindex="0" aria-haspopup="dialog" aria-label="Ver detalhes de ${produto.nome}">
            ${produto.imagem
                ? `<img src="${produto.imagem}" alt="${produto.nome}" loading="lazy"
                        onerror="this.style.display='none'; this.nextElementSibling.hidden=false;">`
                : ""
            }

            <div class="cardapio-sem-imagem" ${produto.imagem ? "hidden" : ""}>
                Foto em breve
            </div>
        </div>

        <div class="cardapio-item-conteudo">

            <span class="cardapio-item-categoria">
                ${nomesCategorias[produto.categoria]}
            </span>

            ${especial ? '<span class="cardapio-selo">Especial da casa</span>' : ""}

            ${produto.categoria === "mensais"
                ? '<span class="cardapio-selo cardapio-selo-mensal">Especial do Mês</span>'
                : ""}

            <h3>${produto.nome}</h3>

            ${produto.consumoLocal
                ? '<span class="cardapio-selo-local">Somente no local</span>'
                : ""
            }

            ${avisoMensal}

            <div class="cardapio-item-rodape">
                <strong>${formatarPrecoProduto(produto)}</strong>
                <span>Disponibilidade a confirmar</span>
            </div>

            <div class="cardapio-ver-detalhes" role="button" tabindex="0" aria-haspopup="dialog" aria-label="Ver detalhes de ${produto.nome}">
                <span>Ver detalhes</span>
                <span aria-hidden="true">↗</span>
            </div>

        </div>
    `;

    return artigo;
}

produtos.forEach((produto) => {
    listaProdutos.appendChild(criarCartao(produto));
});

/* ========================================
   FILTROS DO CARDÁPIO
======================================== */

const botoesCategoria = document.querySelectorAll(".categoria-btn");
const botoesBebidas = document.querySelectorAll(".filtro-bebida");

const filtrosBebidas = document.querySelector("#filtros-bebidas");
const produtosCardapio = document.querySelectorAll(".cardapio-item");
const campoPesquisa = document.querySelector("#pesquisa-produtos");
const mensagemNenhumProduto = document.querySelector("#nenhum-produto");
const botaoLimparPesquisa = document.querySelector("#limpar-pesquisa");
const botaoMostrarTodos = document.querySelector("#mostrar-todos-produtos");
const listaSugestoes = document.querySelector("#sugestoes-pesquisa");

let indiceSugestaoAtiva = -1;
let categoriaAtual = "todos";
let bebidaAtual = "todas";
let pesquisaSelecionada = "";

// Atualiza os produtos visíveis
function atualizarFiltros() {

    const textoPesquisa = (
        pesquisaSelecionada || campoPesquisa.value
    )
        .trim()
        .toLocaleLowerCase("pt-BR");

    produtosCardapio.forEach((produto) => {

        const correspondeCategoria =
            categoriaAtual === "todos" ||
            produto.dataset.categoria === categoriaAtual;

        let correspondeBebida = true;

        if (categoriaAtual === "bebidas" && bebidaAtual !== "todas") {

            const subcategorias = (
                produto.dataset.subcategorias || ""
            ).split(" ");

            correspondeBebida = subcategorias.includes(bebidaAtual);
        }

        // Consulta o nome original do produto
        const indice = Number(produto.dataset.indice);

        const nomeProduto = produtos[indice].nome
            .toLocaleLowerCase("pt-BR");

        const correspondePesquisa =
            nomeProduto.includes(textoPesquisa);

                produto.hidden = !(
            correspondeCategoria &&
            correspondeBebida &&
            correspondePesquisa
        );
    });

    // Verifica se existe pelo menos um produto visível
    const existeProdutoVisivel = Array.from(produtosCardapio).some((produto) => {
        return !produto.hidden;
    });

    // Mostra a mensagem somente quando não houver resultados
    mensagemNenhumProduto.hidden = existeProdutoVisivel;
}

/* ========================================
   PESQUISA COM SUGESTÕES AUTOMÁTICAS
======================================== */

// Fecha a lista de sugestões
function fecharSugestoes() {

    listaSugestoes.hidden = true;
    listaSugestoes.innerHTML = "";

    campoPesquisa.setAttribute("aria-expanded", "false");

    indiceSugestaoAtiva = -1;
}

// Seleciona um produto sugerido
function selecionarSugestao(produto) {

    // Guarda o nome do prato selecionado
    pesquisaSelecionada = nomeBase(produto.nome);

    // Limpa a barra de pesquisa
    campoPesquisa.value = "";

    // Fecha as sugestões e atualiza os resultados
    fecharSugestoes();
    atualizarFiltros();

    // Mostra o botão para restaurar o cardápio
    botaoMostrarTodos.hidden = false;

    // Localiza o cartão correspondente ao produto selecionado
    const indiceProduto = produtos.indexOf(produto);

    const cartaoProduto = Array.from(produtosCardapio).find((cartao) => {
        return Number(cartao.dataset.indice) === indiceProduto;
    });

    // Desce suavemente até o produto encontrado
    if (cartaoProduto && !cartaoProduto.hidden) {

        // Remove qualquer destaque anterior
        produtosCardapio.forEach((cartao) => {
            cartao.classList.remove("produto-destacado");
        });

        // Reinicia a animação, mesmo ao pesquisar o mesmo prato
        void cartaoProduto.offsetWidth;

        // Destaca todos os produtos visíveis que correspondem à pesquisa
        produtosCardapio.forEach((cartao) => {

            if (!cartao.hidden) {
                cartao.classList.add("produto-destacado");
            }

        });

        // Desce suavemente até o produto
        cartaoProduto.scrollIntoView({
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
                ? "instant"
                : "smooth",
            block: "center"
        });

    }
}

// Considera a categoria e os subfiltros selecionados
// Remove apenas os tamanhos no final do nome
function nomeBase(nome) {
    return nome.replace(
        /\s+(individual|médio|medio|grande|pequeno|pequena|média|media)$/i,
        ""
    ).trim();
}

// Mostra as sugestões conforme o texto digitado
function mostrarSugestoes() {

    const textoPesquisa = campoPesquisa.value
        .trim()
        .toLocaleLowerCase("pt-BR");

    fecharSugestoes();

    if (!textoPesquisa) {
        return;
    }

    // Filtra os produtos conforme a pesquisa e a categoria
    const produtosEncontrados = produtos.filter((produto) => {

        const correspondeNome = produto.nome
            .toLocaleLowerCase("pt-BR")
            .includes(textoPesquisa);

        const correspondeCategoria =
            categoriaAtual === "todos" ||
            produto.categoria === categoriaAtual;

        const correspondeBebida =
            categoriaAtual !== "bebidas" ||
            bebidaAtual === "todas" ||
            (produto.subcategorias || []).includes(bebidaAtual);

        return (
            correspondeNome &&
            correspondeCategoria &&
            correspondeBebida
        );
    });

    // Agrupa produtos com o mesmo nome, independentemente do tamanho
    const nomesUnicos = new Set();

    const sugestoes = produtosEncontrados.filter((produto) => {

        const nome = nomeBase(produto.nome).toLocaleLowerCase("pt-BR");

        if (nomesUnicos.has(nome)) {
            return false;
        }

        nomesUnicos.add(nome);
        return true;

    }).slice(0, 5);

    if (sugestoes.length === 0) {
        return;
    }

    sugestoes.forEach((produto) => {

        const botao = document.createElement("button");

        botao.type = "button";
        botao.className = "sugestao-item";
        botao.textContent = nomeBase(produto.nome);

        botao.addEventListener("click", () => {
            selecionarSugestao(produto);
        });

        listaSugestoes.appendChild(botao);
    });

    listaSugestoes.hidden = false;
    campoPesquisa.setAttribute("aria-expanded", "true");
}

// Pesquisa em tempo real
campoPesquisa.addEventListener("input", () => {

    // Uma nova digitação substitui a pesquisa anterior
    pesquisaSelecionada = "";

    // Esconde o botão enquanto uma nova pesquisa é feita
    botaoMostrarTodos.hidden = true;

    atualizarFiltros();
    mostrarSugestoes();

});

// Mostra novamente as sugestões ao voltar para o campo
campoPesquisa.addEventListener("focus", () => {

    mostrarSugestoes();

});

// Navegação pelas sugestões com o teclado

campoPesquisa.addEventListener("keydown", (evento) => {

    const sugestoes = Array.from(
        listaSugestoes.querySelectorAll(".sugestao-item")
    );

    // Fecha as sugestões ao pressionar Escape
    if (evento.key === "Escape") {
        fecharSugestoes();
        return;
    }

    // Confirma a pesquisa ao pressionar Enter/Pesquisar
    if (evento.key === "Enter") {

        evento.preventDefault();

        // Se uma sugestão estiver selecionada,
        // mantém o funcionamento original
        if (indiceSugestaoAtiva >= 0 && sugestoes[indiceSugestaoAtiva]) {

            sugestoes[indiceSugestaoAtiva].click();
            return;
        }

        fecharSugestoes();
        atualizarFiltros();

        // Só desce se nenhum produto foi encontrado
        if (!mensagemNenhumProduto.hidden) {

            // Fecha o teclado virtual do celular
            campoPesquisa.blur();

            mensagemNenhumProduto.scrollIntoView({
                behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
                    ? "auto"
                    : "smooth",
                block: "center"
            });

        }

        return;
    }

    // As setas só funcionam quando existem sugestões
    if (listaSugestoes.hidden || sugestoes.length === 0) {
        return;
    }

    if (evento.key === "ArrowDown") {

        evento.preventDefault();

        indiceSugestaoAtiva =
            (indiceSugestaoAtiva + 1) % sugestoes.length;

    } else if (evento.key === "ArrowUp") {

        evento.preventDefault();

        indiceSugestaoAtiva =
            (indiceSugestaoAtiva - 1 + sugestoes.length) %
            sugestoes.length;

    } else {
        return;
    }

    sugestoes.forEach((item, indice) => {

        item.classList.toggle(
            "ativo",
            indice === indiceSugestaoAtiva
        );
    });

});


// Fecha as sugestões ao clicar fora da pesquisa
document.addEventListener("click", (evento) => {

    if (!evento.target.closest(".cardapio-pesquisa-campo")) {
        fecharSugestoes();
    }

});

// Filtros principais
botoesCategoria.forEach((botao) => {

    botao.addEventListener("click", () => {

        categoriaAtual = botao.dataset.categoria;

        botoesCategoria.forEach((item) => {
            item.classList.remove("ativo");
        });

        botao.classList.add("ativo");

        // Exibe os subfiltros somente na categoria Bebidas
        filtrosBebidas.hidden = categoriaAtual !== "bebidas";

        // Reinicia o filtro de bebidas
        bebidaAtual = "todas";

        botoesBebidas.forEach((item) => {
            item.classList.toggle(
                "ativo",
                item.dataset.bebida === "todas"
            );
        });

        atualizarFiltros();
        fecharSugestoes();

    });
});

// Subfiltros de bebidas
botoesBebidas.forEach((botao) => {

    botao.addEventListener("click", () => {

        bebidaAtual = botao.dataset.bebida;

        botoesBebidas.forEach((item) => {
            item.classList.remove("ativo");
        });

        botao.classList.add("ativo");

        atualizarFiltros();
        fecharSugestoes();
    });
});

/* ========================================
   MODAL DE DETALHES DO PRATO
======================================== */

const modalPrato = document.querySelector("#modal-prato");
const botaoFecharModal = document.querySelector("#modal-fechar");
const modalFoto = document.querySelector("#modal-foto");
const modalSemImagem = document.querySelector("#modal-sem-imagem");

// Elementos que receberão as informações do produto
const modalCategoria = document.querySelector(".modal-categoria");
const modalSelos = document.querySelector("#modal-selos");
const modalTitulo = document.querySelector("#modal-titulo");
const modalDescricao = document.querySelector(".modal-descricao");
const modalPreco = document.querySelector(".modal-rodape strong");
const modalWhatsapp = document.querySelector("#modal-whatsapp");

// Guarda o elemento que abriu o modal
let elementoAnterior = null;

// ABRIR MODAL
function abrirModal(indice) {

    // Impede abrir novamente se o modal já estiver aberto
    if (!modalPrato.hidden) {
        return;
    }

    // Busca o produto selecionado
    const produto = produtos[indice];

    if (!produto) {
        return;
    }

    // Atualiza a imagem do produto no modal

    modalFoto.hidden = true;
    modalFoto.removeAttribute("src");
    modalFoto.alt = "";
    modalSemImagem.hidden = false;

    if (produto.imagem) {
        modalFoto.alt = produto.nome;

        modalFoto.onload = () => {
            modalFoto.hidden = false;
            modalSemImagem.hidden = true;
        };

        modalFoto.onerror = () => {
            modalFoto.hidden = true;
            modalSemImagem.hidden = false;
        };

        modalFoto.src = produto.imagem;
    }

    elementoAnterior = document.activeElement;

    // Preenche o modal com as informações do produto
    modalCategoria.textContent = nomesCategorias[produto.categoria];
    modalTitulo.textContent = produto.nome;
    modalPreco.textContent = formatarPrecoProduto(produto);

    /* ========================================
        WHATSAPP PERSONALIZADO DO PRODUTO
    ======================================== */

    const numeroWhatsapp = "5511955898944";

    let mensagemWhatsapp;

    // Bebidas exclusivas para consumo no restaurante
    if (produto.consumoLocal === true) {

        if (produto.preco === null) {
            mensagemWhatsapp =
                `Olá! Gostaria de consultar o preço e a disponibilidade ` +
                `do produto *${produto.nome}* para consumo no restaurante ` +
                `Sabores De Mi Tierra.`;
        } else {
            mensagemWhatsapp =
                `Olá! Gostaria de consultar a disponibilidade ` +
                `do produto *${produto.nome}* para consumo no restaurante ` +
                `Sabores De Mi Tierra.`;
        }

    // Demais produtos do cardápio
    } else if (produto.preco === null) {

        mensagemWhatsapp =
            `Olá! Gostaria de consultar o preço e a disponibilidade ` +
            `do produto *${produto.nome}* no cardápio do Sabores De Mi Tierra.`;

    } else {

        mensagemWhatsapp =
            `Olá! Gostaria de consultar a disponibilidade ` +
            `do produto *${produto.nome}* no cardápio do Sabores De Mi Tierra.`;
    }

    modalWhatsapp.href =
        `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagemWhatsapp)}`;

    /* ========================================
        SELOS ESPECIAIS DO MODAL
        ======================================== */

        // Limpa os selos do produto anterior
        modalSelos.innerHTML = "";

        // Pratos especiais da casa e especiais do mês
        if (
            produto.categoria === "especiais" ||
            produto.categoria === "mensais"
        ) {
            const seloEspecial = document.createElement("span");

            seloEspecial.className = "modal-selo";
            seloEspecial.textContent = "Especial da casa";

            modalSelos.appendChild(seloEspecial);
        }

    // Pratos preparados aproximadamente uma vez por mês
    if (produto.categoria === "mensais") {
        const seloMensal = document.createElement("span");

        seloMensal.className = "modal-selo modal-selo-mensal";
        seloMensal.textContent = "Especial do Mês";

        modalSelos.appendChild(seloMensal);
    }

    // Bebidas exclusivas para consumo no restaurante
    if (produto.consumoLocal === true) {
        const seloLocal = document.createElement("span");

        seloLocal.className = "modal-selo modal-selo-local";
        seloLocal.textContent = "Somente no local";

        modalSelos.appendChild(seloLocal);
    }

        // Descrição provisória
        modalDescricao.textContent =
        produto.descricao || "Descrição em breve.";

        // Abre o modal
        modalPrato.hidden = false;

        // Bloqueia a rolagem da página
        document.body.style.overflow = "hidden";

        // Coloca o foco no botão X
        botaoFecharModal.focus();
    }

    // FECHAR MODAL
    function fecharModal() {

        if (modalPrato.hidden) {
            return;
        }

        modalPrato.hidden = true;
        botaoFecharModal.classList.remove("destaque-fechar");

        // Libera a rolagem da página
        document.body.style.overflow = "";

        // Devolve o foco ao elemento anterior
        if (elementoAnterior) {
            elementoAnterior.focus();
        }
    }

    // Fecha SOMENTE pelo botão X
    botaoFecharModal.addEventListener("click", fecharModal);

    /* ========================================
    ORIENTAÇÃO PARA FECHAR O MODAL
    ======================================== */

    // Destaca o botão X para orientar o cliente
    function destacarFechamento() {

        if (modalPrato.hidden) {
            return;
        }

        // Reinicia a animação caso a pessoa clique novamente
        botaoFecharModal.classList.remove("destaque-fechar");

        void botaoFecharModal.offsetWidth;

        botaoFecharModal.classList.add("destaque-fechar");

        botaoFecharModal.focus();
    }

    // Destaca o botão X do visualizador de fotos

    function destacarFechamentoFoto() {

        if (fotoOverlay.hidden) return;

        fotoFechar.classList.remove("destaque-fechar");

        void fotoFechar.offsetWidth;

        fotoFechar.classList.add("destaque-fechar");

        fotoFechar.focus();
    }


    // Clicar fora da foto ampliada destaca o X

    fotoOverlay.addEventListener("click", (evento) => {

        if (
            evento.target !== fotoAmpliada &&
            !fotoFechar.contains(evento.target)
        ) {
            destacarFechamentoFoto();
        }

    });


    // Clicar fora do modal do prato destaca o X

    modalPrato.addEventListener("click", (evento) => {

        if (evento.target === modalPrato) {
            destacarFechamento();
        }

    });


    // Pressionar ESC destaca o X da janela que estiver aberta

    document.addEventListener("keydown", (evento) => {

        if (evento.key !== "Escape") return;

        // Se a foto ampliada estiver aberta, destaca somente o X dela
        if (!fotoOverlay.hidden) {
            destacarFechamentoFoto();
            return;
        }

        // Se o modal do prato estiver aberto, destaca o X dele
        if (!modalPrato.hidden) {
            destacarFechamento();
        }

    });

    /* ========================================
    EVENTOS DOS CARTÕES
    ======================================== */

    function ativarPorTeclado(evento, acao) {
        if (evento.key === "Enter" || evento.key === " ") {
            evento.preventDefault();
            acao();
        }
    }

    // Seleciona todos os cartões gerados a partir da lista de produtos.
    const cartoesProdutos = document.querySelectorAll(".cardapio-item");

    cartoesProdutos.forEach((cartao) => {

        // Descobre qual produto pertence ao cartão
        const indice = Number(cartao.dataset.indice);

        // Área da imagem
        const imagem = cartao.querySelector(".cardapio-item-imagem");

        // Texto Ver detalhes
        const verDetalhes = cartao.querySelector(".cardapio-ver-detalhes");

        // Abre ao clicar na imagem
        imagem.addEventListener("click", () => {
            abrirModal(indice);
        });

        // Abre ao clicar em Ver detalhes
        verDetalhes.addEventListener("click", () => {
            abrirModal(indice);
        });

        imagem.addEventListener("keydown", evento => ativarPorTeclado(evento, () => abrirModal(indice)));
        verDetalhes.addEventListener("keydown", evento => ativarPorTeclado(evento, () => abrirModal(indice)));

});

let focoAnteriorFoto = null;

// Abre a foto ampliada

modalFoto.addEventListener("click", () => {

    if (modalFoto.hidden || !modalFoto.naturalWidth) return;

    focoAnteriorFoto = document.activeElement;

    fotoAmpliada.src = modalFoto.currentSrc;
    fotoAmpliada.alt = modalFoto.alt;

    fotoOverlay.hidden = false;
    fotoFechar.focus();

});

modalFoto.addEventListener("keydown", evento => ativarPorTeclado(evento, () => modalFoto.click()));

// Fecha a foto ampliada

function fecharFotoAmpliada() {

    if (fotoOverlay.hidden) return;

    fotoOverlay.hidden = true;

    fotoAmpliada.removeAttribute("src");
    fotoAmpliada.alt = "";

    // Remove o destaque do botão X ao fechar
    fotoFechar.classList.remove("destaque-fechar");

    // Devolve o foco ao elemento anterior
    if (focoAnteriorFoto) {
        focoAnteriorFoto.focus();
    }

}

// Botão de fechar

fotoFechar.addEventListener("click", fecharFotoAmpliada);

// ACESSIBILIDADE - CONTROLE DE FOCO DOS MODAIS

function controlarFocoModal(evento) {

    if (evento.key !== "Tab") return;

    // Prioriza o visualizador de foto ampliada
    const janelaAtiva = !fotoOverlay.hidden
        ? fotoOverlay
        : !modalPrato.hidden
            ? modalPrato
            : null;

    if (!janelaAtiva) return;

    const elementosFocaveis = Array.from(
        janelaAtiva.querySelectorAll(
            'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
    ).filter(elemento => elemento.getClientRects().length > 0);

    if (elementosFocaveis.length === 0) {
        evento.preventDefault();
        return;
    }

    const primeiro = elementosFocaveis[0];
    const ultimo = elementosFocaveis[elementosFocaveis.length - 1];

    // Shift + Tab no primeiro elemento
    if (evento.shiftKey && document.activeElement === primeiro) {
        evento.preventDefault();
        ultimo.focus();
    }

    // Tab no último elemento
    else if (!evento.shiftKey && document.activeElement === ultimo) {
        evento.preventDefault();
        primeiro.focus();
    }

    // Impede que o foco escape caso esteja fora da janela
    else if (!janelaAtiva.contains(document.activeElement)) {
        evento.preventDefault();
        primeiro.focus();
    }
}

document.addEventListener("keydown", controlarFocoModal);

/* ========================================
   MOSTRAR TODOS OS PRODUTOS
======================================== */

botaoMostrarTodos.addEventListener("click", () => {

    // Limpa a pesquisa selecionada
    pesquisaSelecionada = "";

    // Limpa o campo
    campoPesquisa.value = "";

    // Fecha as sugestões
    fecharSugestoes();

    // Oculta o botão
    botaoMostrarTodos.hidden = true;

    // Remove os destaques anteriores
    produtosCardapio.forEach((cartao) => {
        cartao.classList.remove("produto-destacado");
    });

    // Restaura os produtos da categoria selecionada
    atualizarFiltros();

});

/* ========================================
   BOTÃO - LIMPAR PESQUISA
======================================== */

botaoLimparPesquisa.addEventListener("click", () => {

    // Limpa o texto digitado
    campoPesquisa.value = "";

    // Remove a pesquisa selecionada anteriormente
    pesquisaSelecionada = "";

    // Fecha as sugestões automáticas
    fecharSugestoes();

    // Esconde o botão flutuante
    botaoMostrarTodos.hidden = true;

    // Remove os destaques dos cartões
    produtosCardapio.forEach((cartao) => {
        cartao.classList.remove("produto-destacado");
    });

    // Atualiza os produtos da categoria selecionada
    atualizarFiltros();

    // Volta para o campo de pesquisa
    campoPesquisa.focus();

});
