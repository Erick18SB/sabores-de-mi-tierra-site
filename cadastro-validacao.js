/* Espelho de AppsScript/ValidacaoCadastro.gs; teste verifica igualdade. */
const CadastroValidacao = Object.freeze({
    versaoPolitica: 'preliminar-v1.0.0-05',
    normalizar(dados) {
        const copia = {...dados};
        for (const campo of ['nome', 'email', 'telefone', 'paisTelefone', 'aniversario', 'versaoPolitica']) {
            if (copia[campo] == null && ['email', 'aniversario'].includes(campo)) copia[campo] = '';
            if (typeof copia[campo] !== 'string') throw new Error('Campo inválido: ' + campo + '.');
            copia[campo] = copia[campo].trim().normalize('NFC');
        }
        copia.nome = copia.nome.replace(/\s+/gu, ' ');
        return copia;
    },
    validar(entrada) {
        if (!entrada || typeof entrada !== 'object' || Array.isArray(entrada)) throw new Error('Dados inválidos.');
        const d = this.normalizar(entrada);
        const parte = "\\p{L}[\\p{L}\\p{M}]*(?:['’\\-]\\p{L}[\\p{L}\\p{M}]*)*";
        if (d.nome.length < 3 || d.nome.length > 100 || !new RegExp('^' + parte + '(?: ' + parte + ')+$', 'u').test(d.nome)) {
            throw new Error('Informe nome e sobrenome, de 3 a 100 caracteres, sem números.');
        }
        for (const campo of ['receberEmail', 'receberWhatsapp', 'campanhasPersonalizadas', 'pesquisasSatisfacao', 'mensagensAniversario', 'cienciaPolitica']) {
            if (typeof d[campo] !== 'boolean') throw new Error('Autorização inválida: ' + campo + '.');
        }
        if (!d.receberEmail && !d.receberWhatsapp) throw new Error('Escolha pelo menos um canal para receber novidades.');
        if (!d.cienciaPolitica) throw new Error('Confirme que leu e está ciente da Política de Privacidade.');
        if (d.versaoPolitica !== this.versaoPolitica) throw new Error('A Política de Privacidade foi atualizada. Recarregue a página e revise suas escolhas.');
        // Subconjunto comum ao input type=email e ao servidor; sem espaços/controles.
        const email = /^[A-Za-z0-9.!#$%&'*+\/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)+$/;
        if (d.email && (d.email.length > 254 || d.email.split('@')[0].length > 64 || !email.test(d.email))) throw new Error('Informe um e-mail válido ou deixe o campo vazio.');
        if (d.receberEmail && !d.email) throw new Error('Informe um e-mail para o canal autorizado.');
        if (d.paisTelefone === '55') {
            if (!/^\([1-9]\d\) 9\d{4}-\d{4}$/.test(d.telefone)) throw new Error('Informe um celular brasileiro no formato (11) 99999-9999.');
        } else {
            if (!['591', '54', '1', '34', '52', '51', '56'].includes(d.paisTelefone) || !/^\d+$/.test(d.telefone) || d.paisTelefone.length + d.telefone.length < 8 || d.paisTelefone.length + d.telefone.length > 15) {
                throw new Error('Selecione um país e informe um telefone internacional com 8 a 15 dígitos, incluindo o código.');
            }
        }
        if (d.aniversario) {
            const m = /^(\d{2})\/(\d{2})$/.exec(d.aniversario);
            if (!m || +m[2] < 1 || +m[2] > 12 || +m[1] < 1 || +m[1] > [31,29,31,30,31,30,31,31,30,31,30,31][+m[2]-1]) throw new Error('Informe um aniversário existente no formato DD/MM.');
        }
        if (d.mensagensAniversario && !d.aniversario) throw new Error('Informe o aniversário ou desmarque a autorização de aniversário.');
        return d;
    },
    conteudo(d) {
        const n = this.validar(d);
        return JSON.stringify(['nome', 'email', 'telefone', 'paisTelefone', 'aniversario', 'receberEmail', 'receberWhatsapp', 'campanhasPersonalizadas', 'pesquisasSatisfacao', 'mensagensAniversario', 'cienciaPolitica', 'versaoPolitica'].map(c => n[c]));
    }
});
