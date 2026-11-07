const slides = document.querySelectorAll(".slide");
// const(constante) cria uma variavel onde um valor nao pode ser alterado //
// document representa um documento HTML //
//querySelectorAll(".slide") encontra todos os elementos com a classe slide //

let slideAtual = 0;
// let cria uma variavel onde um valor pode ser alterado //
//slideAtual = 0 irá mostrar que começaremos na primeira foto do carrossel, que é a posição 0 //

console.log("Quantidade de fotos:", slides.length);
// mostra a log no console do navegador//

const botaoPausar = document.querySelector(".carrossel-pausar");
const botaoAnterior = document.querySelector(".carrossel-anterior");
const botaoProximo = document.querySelector(".carrossel-proximo");
// o (querySelector) encontre o elemento com a classe (.) especificada //

let carrosselPausado = false;

function mostrarSlide(indice) {

    slides.forEach(function(slide) {
        slide.classList.remove("ativo");
    });

    indicadores.forEach(function(indicador) {
        indicador.classList.remove("ativo");
    });

    slides[indice].classList.add("ativo");

    indicadores[indice].classList.add("ativo");
}
// forEach() percorre todas as fotografias// 
//classList.remove("ativo") remove a classe ativo de cada uma//

botaoProximo.addEventListener("click", function() {

    slideAtual++;

    if (slideAtual >= slides.length) {
        slideAtual = 0;
    }

    mostrarSlide(slideAtual);

    reiniciarTemporizador();

});
//addEventListener("click", ...) aguarda um clique no botão//
// a parte de slideAtual++ quer dizer que ele aumente em +1//
//if vai verificar se ja ultrapassamos a ultima foto, se sim, ele volta para a primeira//

botaoAnterior.addEventListener("click", function() {

    slideAtual--;

    if (slideAtual < 0) {
        slideAtual = slides.length - 1;
    }

    mostrarSlide(slideAtual);

    reiniciarTemporizador();

});

const indicadores = document.querySelectorAll(".indicador");

indicadores.forEach(function(indicador, indice) {

    indicador.addEventListener("click", function() {

        slideAtual = indice;

        mostrarSlide(slideAtual);

        reiniciarTemporizador();

    });

});

//a função setInterval() irá chamar a função avancarAutomaticamente() a cada 8 segundos (8000 milissegundos)//
function avancarAutomaticamente() {

    slideAtual++;

    if (slideAtual >= slides.length) {
        slideAtual = 0;
    }

    mostrarSlide(slideAtual);
}

let intervaloCarrossel = setInterval(avancarAutomaticamente, 8000);

botaoPausar.addEventListener("click", function() {

    if (carrosselPausado === false) {

        clearInterval(intervaloCarrossel);

        carrosselPausado = true;

        botaoPausar.classList.add("pausado");
        botaoPausar.setAttribute("aria-label", "Continuar carrossel");

    } else {

        intervaloCarrossel = setInterval(avancarAutomaticamente, 8000);

        carrosselPausado = false;

        botaoPausar.classList.remove("pausado");
        botaoPausar.setAttribute("aria-label", "Pausar carrossel");

    }

});
// se for false o {setInterval()} irá pausar o carrossel, se for true ele irá continuar o carrossel//

function reiniciarTemporizador() {

    if (carrosselPausado === false) {

        clearInterval(intervaloCarrossel);

        intervaloCarrossel = setInterval(avancarAutomaticamente, 8000);

    }

}
// ele ira verificar se o carrossel esta pausado, se não estiver ele irá reiniciar o temporizador do carrossel//

const campoTelefone = document.querySelector("#telefone");

campoTelefone.addEventListener("input", function() {

    // Remove tudo que não for número e limita a 11 dígitos
    let numeros = campoTelefone.value.replace(/\D/g, "").slice(0, 11);

    let telefoneFormatado = "";

    if (numeros.length > 0) {
        telefoneFormatado = "(" + numeros.substring(0, 2);
    }

    if (numeros.length >= 2) {
        telefoneFormatado += ") ";
    }

    if (numeros.length > 2) {
        telefoneFormatado += numeros.substring(2, 7);
    }

    if (numeros.length >= 7) {
        telefoneFormatado += "-";
    }

    if (numeros.length > 7) {
        telefoneFormatado += numeros.substring(7, 11);
    }

    campoTelefone.value = telefoneFormatado;

});
// replace(/\D/g, "") remove letras, espaços e símbolos. // 
// slice(0, 11) mantém somente os primeiros 11 dígitos. //
// telefone.replace(/\D/g, ""); isso ai vai fazer com que so de para utilizar numeros no campo telefone, e não letras ou caracteres especiais//
// replace() substitui partes de um texto//
// \D identifica qualquer caractere que não seja um número.//
// g significa que a substituição será feita em todas as ocorrências.//
// "" substitui os caracteres encontrados por nada, removendo-os.//

// CAMPOS DE TELEFONE
const checkInternacional = document.querySelector(
    "#telefone-internacional-check"
);

const campoPais = document.querySelector("#pais-telefone");
const campoExterno = document.querySelector("#telefone-externo");


function sincronizarTelefones(limpar = false) {
    const internacional = checkInternacional.checked;
    campoTelefone.disabled = CADASTRO_CONFIG.emBreve || internacional;
    campoTelefone.required = !internacional;
    campoPais.disabled = campoExterno.disabled = CADASTRO_CONFIG.emBreve || !internacional;
    campoPais.required = campoExterno.required = internacional;
    if (limpar) campoTelefone.value = campoPais.value = campoExterno.value = '';
    for (const campo of [campoTelefone, campoPais, campoExterno]) campo.setCustomValidity('');
}
checkInternacional.addEventListener('change', () => sincronizarTelefones(true));
campoPais.addEventListener('change', () => { campoExterno.value = ''; });
campoExterno.addEventListener('input', () => {
    campoExterno.value = campoExterno.value.replace(/\D/g, '').slice(0, 15 - campoPais.value.length);
});
sincronizarTelefones();

const formulario = document.querySelector('.formulario-novidades');
if (CADASTRO_CONFIG.emBreve) {
    formulario.inert = true;
    formulario.setAttribute('aria-disabled', 'true');
    formulario.querySelectorAll('input, select, button').forEach(campo => { campo.disabled = true; });
}
const campoNome = document.querySelector('#nome');
const campoEmail = document.querySelector('#email');
const modalValidacao = document.querySelector('#modal-validacao');
const mensagemValidacao = document.querySelector('#mensagem-validacao');
const modalSucesso = document.querySelector('#modal-sucesso');
let envioEmCurso = false;
let tentativaAtual = null;

function mostrarErro(mensagem) {
    mensagemValidacao.textContent = mensagem;
    if (!modalValidacao.open) modalValidacao.showModal();
}
document.querySelector('#fechar-modal').addEventListener('click', () => modalValidacao.close());
document.querySelector('#fechar-sucesso').addEventListener('click', () => modalSucesso.close());
formulario.addEventListener('reset', () => {
    // O evento ocorre antes de o navegador restaurar os valores padrão.
    queueMicrotask(() => sincronizarTelefones());
});

function coletarCadastro() {
    const marcado = id => document.getElementById(id).checked;
    return CadastroValidacao.validar({
        nome: campoNome.value, email: campoEmail.value,
        telefone: checkInternacional.checked ? campoExterno.value : campoTelefone.value,
        paisTelefone: checkInternacional.checked ? campoPais.value : '55',
        aniversario: document.getElementById('aniversario').value,
        receberEmail: formulario.querySelector('[name="receber_email"]').checked,
        receberWhatsapp: formulario.querySelector('[name="receber_whatsapp"]').checked,
        campanhasPersonalizadas: marcado('consentimento-personalizacao'),
        pesquisasSatisfacao: marcado('consentimento-pesquisas'),
        mensagensAniversario: marcado('consentimento-aniversario'),
        cienciaPolitica: marcado('aceite-politica'),
        versaoPolitica: CADASTRO_CONFIG.versaoPolitica
    });
}

async function obterTentativa(dados) {
    const bytes = new TextEncoder().encode(CadastroValidacao.conteudo(dados));
    const hash = Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256', bytes)), b => b.toString(16).padStart(2, '0')).join('');
    // Não persistir dados pessoais nem tokens; somente hash e UUID na sessão.
    if (!tentativaAtual) {
        try { tentativaAtual = JSON.parse(sessionStorage.getItem('sabores_tentativa_v2')); } catch { tentativaAtual = null; }
    }
    if (!tentativaAtual || tentativaAtual.hash !== hash || !/^[0-9a-f-]{36}$/i.test(tentativaAtual.id || '')) {
        tentativaAtual = {hash, id: crypto.randomUUID()};
    }
    try {
        sessionStorage.removeItem('sabores_id_tentativa');
        sessionStorage.setItem('sabores_tentativa_v2', JSON.stringify(tentativaAtual));
    } catch { /* Memória preserva a tentativa enquanto a página estiver aberta. */ }
    return tentativaAtual.id;
}

formulario.addEventListener('submit', async evento => {
    evento.preventDefault();
    // Não validar, gerar tentativas ou enviar, mesmo se a camada for removida.
    if (CADASTRO_CONFIG.emBreve) return;
    if (envioEmCurso) return;
    let dados;
    try { dados = coletarCadastro(); } catch (erro) { mostrarErro(erro.message); return; }
    if (!CADASTRO_CONFIG.ativo || !CADASTRO_CONFIG.politicaAprovada) {
        mostrarErro('Cadastro temporariamente indisponível. Nenhuma informação do formulário foi enviada ou armazenada.');
        return;
    }
    if (!/^https:\/\/script\.google\.com\/macros\/s\/[A-Za-z0-9_-]+\/exec$/.test(CADASTRO_CONFIG.endpoint)) {
        mostrarErro('Cadastro indisponível: configuração pendente.'); return;
    }
    let token;
    try { token = window.turnstile?.getResponse(); } catch { token = ''; }
    if (!token) { mostrarErro('Conclua a verificação de segurança antes de cadastrar.'); return; }
    envioEmCurso = true;
    const botao = formulario.querySelector('[type="submit"]');
    const camposBloqueados = Array.from(formulario.querySelectorAll('input, select'))
        .map(campo => [campo, campo.disabled]);
    camposBloqueados.forEach(([campo]) => { campo.disabled = true; });
    botao.disabled = true;
    try {
        const idTentativa = await obterTentativa(dados);
        const resposta = await fetch(CADASTRO_CONFIG.endpoint, {
            method: 'POST', headers: {'Content-Type': 'text/plain;charset=utf-8'},
            body: JSON.stringify({...dados, idTentativa, tokenTurnstile: token})
        });
        if (!resposta.ok) throw new Error('RESPOSTA_NAO_CONFIRMADA');
        const resultado = await resposta.json();
        if (resultado.sucesso === true && resultado.idTentativa === idTentativa &&
            ['CADASTRO_CONFIRMADO', 'CADASTRO_JA_CONFIRMADO'].includes(resultado.codigo)) {
            tentativaAtual = null;
            try { sessionStorage.removeItem('sabores_tentativa_v2'); } catch {}
            formulario.reset();
            sincronizarTelefones();
            modalSucesso.showModal();
        } else {
            const mensagens = {
                CADASTROS_DESATIVADOS: 'Cadastro temporariamente indisponível.',
                CONFIGURACAO_PENDENTE: 'Cadastro indisponível: configuração do serviço pendente.',
                ID_TENTATIVA_INVALIDO: 'Não foi possível identificar esta tentativa. Recarregue a página antes de tentar novamente.',
                VERIFICACAO_INVALIDA: 'A verificação de segurança expirou. Conclua uma nova verificação.',
                LIMITE_TENTATIVAS: 'Muitas tentativas. Aguarde antes de tentar novamente.',
                CADASTRO_EXISTENTE: 'Não foi possível criar um novo cadastro com este telefone. Entre em contato para revisar suas preferências.',
                DADOS_INVALIDOS: 'Os dados ou a versão da política não foram aceitos. Recarregue a página e revise o formulário.',
                TENTATIVA_DIVERGENTE: 'Esta tentativa possui dados diferentes. Não foi confirmado um novo cadastro.',
                REVISAO_NECESSARIA: 'O envio precisa de revisão. Seus dados podem ter sido recebidos; entre em contato antes de reenviar.'
            };
            mostrarErro(mensagens[resultado.codigo] || 'Não foi possível confirmar o cadastro. Seus dados podem ter sido recebidos; tente novamente com os mesmos dados.');
        }
    } catch {
        mostrarErro('Não foi possível confirmar o envio. Seus dados podem ter sido recebidos. Repita com os mesmos dados; alterações serão tratadas como uma nova tentativa.');
    } finally {
        try { window.turnstile?.reset(); } catch {}
        botao.disabled = false;
        camposBloqueados.forEach(([campo, disabled]) => { campo.disabled = disabled; });
        sincronizarTelefones();
        envioEmCurso = false;
    }
});

const campoAniversario = document.getElementById('aniversario');
campoAniversario.addEventListener('input', function () {
    const numeros = this.value.replace(/\D/g, '').slice(0, 4);
    this.value = numeros.length > 2 ? numeros.slice(0, 2) + '/' + numeros.slice(2) : numeros;
    this.setCustomValidity('');
});

/* ========================================
   MENU HAMBÚRGUER
======================================== */

const botaoMenu = document.querySelector(".menu-toggle");
const menuPrincipal = document.querySelector(".menu-principal");

if (botaoMenu && menuPrincipal) {
    botaoMenu.addEventListener("click", () => {
        const menuAberto = menuPrincipal.classList.toggle("ativo");

        botaoMenu.setAttribute("aria-expanded", String(menuAberto));

        botaoMenu.setAttribute(
            "aria-label",
            menuAberto ? "Fechar menu de navegação" : "Abrir menu de navegação"
        );

        const iconeMenu = botaoMenu.querySelector("i");

        if (iconeMenu) {
            iconeMenu.classList.toggle("fa-bars", !menuAberto);
            iconeMenu.classList.toggle("fa-xmark", menuAberto);
        }

        /* Fecha o menu ao selecionar uma opção */
        const linksMenu = menuPrincipal.querySelectorAll("a");

        linksMenu.forEach((link) => {
            link.addEventListener("click", () => {
                menuPrincipal.classList.remove("ativo");

                botaoMenu.setAttribute("aria-expanded", "false");
                botaoMenu.setAttribute(
                    "aria-label",
                    "Abrir menu de navegação"
                );

                const iconeMenu = botaoMenu.querySelector("i");

                if (iconeMenu) {
                    iconeMenu.classList.add("fa-bars");
                    iconeMenu.classList.remove("fa-xmark");
                }
            });
        });
    });
}

// CARREGAMENTO CONDICIONAL DO TURNSTILE
function carregarTurnstileCadastro() {
    // A configuração ausente/incompleta nunca libera uma requisição externa.
    if (typeof CADASTRO_CONFIG === 'undefined' || !CADASTRO_CONFIG ||
        CADASTRO_CONFIG.emBreve !== false ||
        CADASTRO_CONFIG.ativo !== true ||
        CADASTRO_CONFIG.politicaAprovada !== true) return;

    // Exclusivo do cadastro: não carregar em páginas sem o componente.
    if (!document.querySelector('.formulario-novidades .cf-turnstile') ||
        document.getElementById('turnstile-api')) return;

    const api = document.createElement('script');
    api.id = 'turnstile-api';
    api.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
    api.async = true;
    api.defer = true;
    document.head.appendChild(api);
}

carregarTurnstileCadastro();
