class Aluno {
    constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
        this.primeiroNome = primeiroNome;
        this.segundoNome = segundoNome;
        this.primeiraNota = primeiraNota;
        this.segundaNota = segundaNota;
    }

    nomeCompleto() {
        return `${this.primeiroNome} ${this.segundoNome}`;
    }

    media() {
        return this.primeiraNota * 0.6 + this.segundaNota * 0.4;
    }

    situacao() {
        return this.media() > 6 ? "Aprovado" : "Reprovado";
    }
}

const alunos = [
    new Aluno("João", "da Silva", 7, 8.5),
    new Aluno("Maria", "Oliveira", 6, 9.2),
    new Aluno("Carlos", "Santos", 8, 7.5),
    new Aluno("Fernanda", "Costa", 5.5, 6.0),
    new Aluno("Lucas", "Pereira", 9, 8)
];

const resultadoElement = document.getElementById("resultado");
let html = "<ul>";

function mostrarDados() {
    alunos.forEach((aluno) => {
        const nome = aluno.nomeCompleto();
        const media = aluno.media();
        const situacao = aluno.situacao();

        html += `<li><strong>${nome}</strong>: Média = ${media.toFixed(1)}, Situação = ${situacao}</li>`;
        alert(`Nome: ${nome}\nMédia: ${media.toFixed(1)}\nSituação: ${situacao}`);
    });

    html += "</ul>";
    resultadoElement.innerHTML = html;
}

mostrarDados();
