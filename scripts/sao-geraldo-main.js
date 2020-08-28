
//Array de objetos "produto" para simular uma resposta do servidor para montar a lista  **descartado**
const produtos = [{
  nome: "Pão de Queijo",
  peso: ["100g", "3kg", "10kg"],
  descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet massa eget nisi condimentum efficitur a sollicitudin metus. Aliquam erat volutpat. Pellentesque dictum at libero sit amet venenatis. Suspendisse maximus metus mollis dui euismod, et tincidunt felis egestas."
}]

let menuAberto = false;

//Ativando os carrosseis do site ao carregar a página
$(document).ready(function () {
  $(".main-carousel.owl-carousel").owlCarousel({
    nav: true,
    autoplay:true,
    autoplayTimeout:3000,
    loop:true,
    center: true,
    margin: 25,
    items: 1,
    mouseDrag: false,
  })

  $("section.produtos .owl-carousel").owlCarousel({
    nav: true,
    dots: false,
    items: 1,
    loop: true,
  })

  if ($(window).width() < 1150) {
    $(".recipes-wrapper.owl-carousel").owlCarousel({
      nav: true,
      dots: false,
      margin: 10,
      items: 1,
    })

    $(".mobile-carousel.owl-carousel").owlCarousel({
      nav: false,
      dots: true,
      items: 1,
      center: true,
      autoplay:true,
      autoplayTimeout:3000,
    })
  }

  //Abre e fecha menu mobile
  $(".mobile-trigger, .mobile-menu-close").on('click', function(){
    $(".mobile-menu").fadeToggle()
    if(!menuAberto) {
      $("body").css('overflow', 'hidden')
      $(".fas.fa-bars").css('transform', 'rotate(90deg)')
      menuAberto = true;
    }else {
      $("body").css('overflow', 'visible')
      $(".fas.fa-bars").css('transform', 'rotate(0deg)')
      menuAberto = false;
    }
    $(".mobile-menu").animate({ left: "0" }, 300)
  })
})

//Animação do popup
$(window).scroll(function () {
  // posicaoTela recebe o valor da parte de cima da janela somado com a altura total da tela 
  let posicaoTela = $(window).scrollTop() + $(window).height()
  let posicaoElemento = $("section.produtos").position().top + $("section.produtos").outerHeight()

  //Se a posição da tela for maior que a posição do elemento (sessão de produtos, no caso) o popup surge da direita e fica fixado acompanhando o movimento da tela
  if (posicaoTela > posicaoElemento) {
      if($(window).width() < 768){
        $(".mobile-popup-chat").animate({ opacity: "1", right: "50", bottom: "150" }, 600)
        $(".mobile-popup-chat").css('display', "block")
      }else {
    $(".popup-chat").animate({ opacity: "1", right: "50", bottom: "150" }, 600)
    $(".popup-chat").css('display', "block")
      }
  }
})


//o popup do chat possui um botão para fechar e ao clicar executa a função abaixo
function fecharPopup() {
  //Uma rápida animação do popup escondendo à direita da tela
  $(".popup-chat").animate({ opacity: "0", right: "-50", bottom: "-150" }, 100)
  //Deleta o elemento popup (só aparece novamente se recarregar a página)
  $(".popup-chat").remove()
}
//Função que seria executada caso fosse implementado algum chat no site (no caso está vazia)
function abrirChat() {
  // ------- //
}


