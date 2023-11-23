$(document).ready(function () {
    $('#carrossel-imagens').slick({
        autoplay: true, /*funcao para slide mudar sozinho*/
    });

    $('.menu-hamburguer').click(function () {
        $('nav').slideToggle(); /*ao clicar no menu hamburguer realiza o slidedown e slideup do menu nav*/
    })

    $('#telefone').mask('(00) 00000-0000') /*criacao de mascara para telefone*/

    $('#cpf').mask('000.000.000-00') /*criacao de mascara para cpf*/

    $('#cep').mask('00000-000') /*criacao de mascara para cep*/

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            enderecoCompleto: {
                required: true
            },
            cep: {
                required: true
            },
            mensagem: {
                required: true,
            },
            veiculoInteresse: {
                required: false,
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos.`)
            }
        }
    })

    $('.lista-veiculos button').click(function () { /* chama funcao click - ao clicar em um botao da ul lista-veiculos */
        const destino = $('#contato'); /* cria constante 'destino' que sera aplicada posteriorment, para onde a pagina vai depois do click */
        const nomeVeiculo = $(this).parent().find('h3').text(); /* recupera o texto do parent */

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({  /*animacao do elemento HTML, aplicando efeito de rolagem */
            scrollTop: destino.offset().top
        }, 1000)
    })
})