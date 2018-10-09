// var request = new XMLHttpRequest();
// request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
// request.onload = function () {

//   // Begin accessing JSON data here
//   var data = JSON.parse(this.response);
//   if (request.status >= 200 && request.status < 400) {
//     data.forEach(tatuador => {
//       const card = document.createElement('div');
//       card.setAttribute('class', 'card');

//       const nome = document.getElementByClassName('nome');
//       nome.innerHTML = "tatuador.name"

//       const h1 = document.createElement('h1');
//       h1.textContent = tatuador.title;

//       const p = document.createElement('p');
//       tatuador.description = tatuador.description.substring(0, 300);
//       p.textContent = `${tatuador.description}...`;

//       container.appendChild(card);
//       card.appendChild(h1);
//       card.appendChild(p);
//     });
//   } else {
//     const errorMessage = document.createElement('marquee');
//     errorMessage.textContent = `Gah, it's not working!`;
//     app.appendChild(errorMessage);
//   }
// }

// request.send();

const nome = document.getElementById('nome');
nome.innerHTML = "TESTE"