// ex1
const sub = document.querySelector("#sub")
const bemvindo = document.createElement("P");
bemvindo.textContent = "Bem-vindo ao site!";
hero.insertBefore(bemvindo, sub);

// lista compras ex2
const lista = document.querySelector("#lista");
const addfim = document.querySelector("#btn_fim");
const addtopo = document.querySelector("#btn_topo");
function adicionarItem(posicao){
    const item = document.createElement("li")
    item.textContent = prompt("Digite o seu novo Item");
    const removebtn = document.createElement("button");
    removebtn.textContent = "Remover";
    if(posicao === "fim"){
    lista.appendChild(item);
    lista.appendChild(removebtn);
    }
    else{
      lista.insertBefore(removebtn, lista.firstChild);
        lista.insertBefore(item, lista.firstChild);
    }
    removebtn.addEventListener("click", function(){
       item.remove();
       removebtn.remove();
    });

}
addfim.addEventListener("click", function(){
    adicionarItem("fim");
});
addtopo.addEventListener("click", adicionarItem);

// ex 3
const fotos = document.querySelector(".fotos");
const remove = document.querySelector("#btn_remove");
let urls = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbgIjuFWeUo4JrqvgK1W4LLyiNxhlwstQsmcuv2uUR0Q&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkB8V6StC5kGU4kCQHDSC4WDjWFxze1UBcTS71H4XpOw&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0GYL6lcl7Gw3fhHf65sBE5O03p6IiTLkU97KZ4pDYYA&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDMvSdMyak3E2kYpQjPHAurLqNYeKAMSV2fpUl1vq3vA&s=10"];
   for(let i = 0; i<urls.length;i++){
    const imagem = document.createElement("img");
    imagem.setAttribute ("src", urls[i]);
    fotos.appendChild(imagem);
   }
   remove.addEventListener("click", () => {fotos.lastElementChild.remove();});

   // ex4 arumar
   const contador = document.getElementById("contador");
   const reset = document.getElementById("reset");
   const mais= document.getElementById("mais");
   mais.addEventListener("click", () => {
      let soma = Number(contador.textContent) + 1;
          contador.textContent = soma;
            let somanovo = Number(contador.textContent) + 1;
          contador.textContent = somanovo;
   });
   reset.addEventListener("click", () => {
     const newContador = document.createElement("p");
          newContador.textContent = "0";
          document.body.replaceChild(newContador, contador);
   });

   // ex5
   

