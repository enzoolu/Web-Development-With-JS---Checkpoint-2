const inserirMedia = document.getElementById('inserirMedia');

document.getElementById('confirmarNotas').addEventListener('click', e => {
    e.preventDefault();

    media();
});

function media() {
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    let nota3 = parseFloat(document.getElementById('nota3').value);
    let nota4 = parseFloat(document.getElementById('nota4').value);

    let media = (nota1 + nota2 + nota3 + nota4) / 4;

    inserirMedia.innerHTML = 'Média: ' + media.toFixed(1);

    if (media >= 6) {
        inserirResultado.innerHTML = 'Resultado: Aprovado';
        Swal.fire(
            {
                title: 'Aprovado:',
                Text: 'Parabéns!!!',
                icon: 'success'
            });
    } else if (media < 6 && media >= 4) {
        inserirResultado.innerHTML = 'Resultado: Exame';
        Swal.fire(
            {
                title: 'Exame:',
                icon: 'alert'
            });
    } else {
        inserirResultado.innerHTML = 'Resultado: Reprovado';
        Swal.fire(
            {
                title: 'Reprovado:',
                icon: 'error'
            });
    }
};