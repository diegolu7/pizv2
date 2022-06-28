export default function mensajeError(){
  const blurBG = document.querySelectorAll(".ocultar");
  const respuesta = document.querySelector("#mensaje");
  const contenedor = document.querySelector("body > main > div")
  let sum = 0;
  console.log(blurBG);

  blurBG.forEach( elemento => {
    elemento.matches('.ocultar') ? sum++: sum;
  });
  if (sum === 7){
    console.log("No Encontrada");
    respuesta.textContent="Pizza no encontrada";
    respuesta.style.color="red"
    contenedor.style.height ="100vh"
  }else{
    respuesta.textContent="";
    contenedor.style.height ="auto"

  }
}