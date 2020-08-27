const produtos = [{
  nome: "Pão de Queijo",
  peso: ["100g", "3kg", "10kg"],
  descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet massa eget nisi condimentum efficitur a sollicitudin metus. Aliquam erat volutpat. Pellentesque dictum at libero sit amet venenatis. Suspendisse maximus metus mollis dui euismod, et tincidunt felis egestas."
}]

$(document).ready(function(){
  $(".main-carousel.owl-carousel").owlCarousel({
      nav:true,
      margin:25,
      items: 1,
      mouseDrag: false,
      })
  
  $("section.produtos .owl-carousel").owlCarousel({
    nav:true,
    dots: false,
    items: 1,
    })  
})

$(window).scroll(function () {

  let posicaoTela = $(window).scrollTop() + $(window).height()
  let posicaoElemento =  $("section.produtos").position().top + $("section.produtos").outerHeight()

  if (posicaoTela > posicaoElemento) {
    $(".popup-chat").animate({ opacity: "1", right : "50", bottom : "150" }, 600)
    $(".popup-chat").css('position', 'fixed')
    $(".popup-chat").css('display', 'flex')

  }
})

function fecharPopup() {
  $(".popup-chat").animate({ opacity: "0", right : "0" }, 600)
  setTimeout(function(){
    $(".popup-chat").remove()
  }, 800)
}

function abrirChat() {
  // ------- //
}


