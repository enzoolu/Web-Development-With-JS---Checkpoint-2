const inserirMedia = document.getElementById('inserirMedia');
let nota1;
let nota2;
let nota3;
let nota4;

document.getElementById('confirmarNotas').addEventListener('click', e => {
    e.preventDefault();

    verificacoes();
});

function verificacoes() {
    let verificacao = 0

    nota1 = parseFloat(document.getElementById('nota1').value);
    nota2 = parseFloat(document.getElementById('nota2').value);
    nota3 = parseFloat(document.getElementById('nota3').value);
    nota4 = parseFloat(document.getElementById('nota4').value);

    let notas = [nota1, nota2, nota3, nota4];

    if (Math.max(...notas) > 10 || Math.min(...notas) < 0) {
        Swal.fire(
            {
                title: 'ERRO',
                text: 'Digite as notas corretamente',
                icon: 'error'
            }
        );
        verificacao++
    };

    for (let i = 0; i < notas.length; i++) {
        if (isNaN(notas[i])) {
            Swal.fire(
                {
                    title: 'ERRO',
                    text: 'Digite todas as notas',
                    icon: 'error'
                }
            );
            verificacao++
        };
    };

    if (verificacao == 0) {
        media();
    } else {
        verificacao = 0
    }
};

function media() {
    let media = (nota1 + nota2 + nota3 + nota4) / 4;

    inserirMedia.innerHTML = 'Média: ' + media.toFixed(1);

    if (media >= 6) {
        inserirResultado.innerHTML = 'Resultado: Aprovado';
        Swal.fire(
            {
                title: 'Aprovado',
                text: 'Parabéns!!!',
                icon: 'success'
            });
    } else if (media < 6 && media >= 4) {
        inserirResultado.innerHTML = 'Resultado: Exame';
        Swal.fire(
            {
                title: 'Exame',
                icon: 'warning'
            });
    } else {
        inserirResultado.innerHTML = 'Resultado: Reprovado';
        Swal.fire(
            {
                title: 'Reprovado',
                icon: 'error'
            });
    }
}