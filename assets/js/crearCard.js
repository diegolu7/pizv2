export default function crearCard(nombre,precio,imagen,ingredientes){
  let fragment = document.createDocumentFragment();
  const card = document.createElement('div');
  const h2 = document.createElement('h2');
  const img = document.createElement('img');
  const h3 = document.createElement('h3');
  const ul = document.createElement('ul');

  card.classList.add('card');
  card.classList.add('card-style');
  h2.classList.add('card__title');
  h2.textContent= `${nombre} - ${precio}$`;
  img.classList.add('card__img');
  img.src=imagen;
  h3.classList.add('card__subtitle');
  h3.textContent="Ingredientes"
  ul.classList.add('card__list');

  ingredientes.map((ingrediente)=>{
    let li = document.createElement('li');
    li.classList.add('card__list__item');
    li.textContent=ingrediente;
    ul.appendChild(li);
  });

  card.appendChild(h2);
  card.appendChild(img);
  card.appendChild(h3);
  card.appendChild(ul);

  fragment.appendChild(card);
  return fragment;
}




/*
<div class="card card-style" id="respuesta">
  <h2 class="card__title">Pizza: ROJA $1200</h2>
  <img class="card__img" src="https://images.deliveryhero.io/image/pedidosya/products/30875434-27d05568-65af-4526-8a38-859de406df86.jpeg?quality=90&amp;width=1440&amp;webp=1" alt="ROJA-pizza">
  <h3 class="card__subtitle">Ingredientes</h3>
  <ul class="card__list">
    <li class="card__list__item">Salsa de tomates orgánicos </li>
    <li class="card__list__item">Orégano fresco</li>
    <li class="card__list__item">Tapenade ligero (aceitunas negras)</li>
  </ul>
</div>
*/