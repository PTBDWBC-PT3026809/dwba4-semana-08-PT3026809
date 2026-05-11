const alunos = [
    { nome: "João da Silva", nota1: 7, nota2: 8.5 },
    { nome: "Maria Oliveira", nota1: 6, nota2: 9.2 },
    { nome: "Carlos Santos", nota1: 8, nota2: 7.5 }
];

const resultadoElement = document.getElementById("resultado");
let html = "<ul>";

alunos.forEach((aluno) => {
    const peso1 = aluno.nota1 * 0.6;
    const peso2 = aluno.nota2 * 0.4;
    const total = peso1 + peso2;

    alert(`Aluno: ${aluno.nome}\nPrimeira nota: ${aluno.nota1}\nSegunda nota: ${aluno.nota2}`);
    alert(`Aluno: ${aluno.nome}\nNota total: ${total.toFixed(1)}`);

    html += `<li><strong>${aluno.nome}</strong>: nota1=${aluno.nota1}, nota2=${aluno.nota2}, peso1=${peso1.toFixed(1)}, peso2=${peso2.toFixed(1)}, total=${total.toFixed(1)}</li>`;
});

html += "</ul>";
resultadoElement.innerHTML = html;
