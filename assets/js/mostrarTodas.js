import { obtener_localStorage } from "./LocalStorage.js";
import crearCard from "./crearCard.js";

export default function mostrarTodas(){
  let containerPizzas = document.querySelector("#container-pizzas");
  const arrayPizzas = obtener_localStorage('pizzas');
  let fragment = document.createDocumentFragment();

  arrayPizzas.map((pizza) =>{
    let card = crearCard(pizza.nombre, pizza.precio, pizza.img, pizza.ingredientes);
    fragment.appendChild(card)
  })
  containerPizzas.appendChild(fragment);
}