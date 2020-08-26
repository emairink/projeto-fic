let produtos = [{
  nome: "Pão de Queijo",
  peso: ["100g", "3kg", "10kg"],
  descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet massa eget nisi condimentum efficitur a sollicitudin metus. Aliquam erat volutpat. Pellentesque dictum at libero sit amet venenatis. Suspendisse maximus metus mollis dui euismod, et tincidunt felis egestas."
}]




$(document).ready(function(){
  $(".main-carousel.owl-carousel").owlCarousel({
      nav:true,
      margin:15,
      items: 1,
      }
  );
  
      console.log(produtos)



})
