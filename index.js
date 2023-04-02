
const BASE_URL = 'http://localhost:3000';

document.addEventListener('DOMContentLoaded', function() {
  fetchMovies();
});

function fetchMovies() {
  fetch(`${BASE_URL}/films/1`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
  .then(response => {
    console.log(response);
    return response.json();
  })
  .then(movie => displayFilmDetails(movie))
  .catch(error => console.error('Error:', error));
}

function displayFilmDetails(movie) {
  const availableTickets = movie.capacity - movie.tickets_sold;

  const runtime = document.createElement("div");
  runtime.textContent = `Runtime: ${movie.runtime} minutes`;

  const filmDetailsSquarebox = document.getElementById("film-details");

  const title = document.createElement("div");
  title.textContent = `Title: ${movie.title}`;

  const showtime = document.createElement("div");
  showtime.textContent = `Showtime: ${movie.showtime}`;

  const poster = document.createElement("img");
  poster.src = movie.poster;

  const availableticketsElement = document.createElement("div");
  availableticketsElement.classList.add("available-tickets");
  availableticketsElement.textContent = `Available tickets: ${availableTickets}`;

  const buyTicketButton = document.createElement("button");
  buyTicketButton.classList.add("buy-ticket-button");
  buyTicketButton.textContent = "Buy Ticket";

  const filmDetailsItemSquarebox = document.createElement("div");
  filmDetailsItemSquarebox.classList.add("film-details-item-squarebox");

  filmDetailsItemSquarebox.appendChild(poster);
  filmDetailsItemSquarebox.appendChild(title);
  filmDetailsItemSquarebox.appendChild(runtime);
  filmDetailsItemSquarebox.appendChild(showtime);
  filmDetailsItemSquarebox.appendChild(availableticketsElement);
  filmDetailsItemSquarebox.appendChild(buyTicketButton);
  filmDetailsSquarebox.appendChild(filmDetailsItemSquarebox);

  buyTicketButton.addEventListener('click', () => {
    if (availableTickets > 0) {
      availableTickets--;
      availableticketsElement.textContent = `Available tickets: ${availableTickets}`;
      if (availableTickets === 0) {
        buyTicketButton.disabled = true;
      }
    }
  });
}

fetch(`${BASE_URL}/films`)
  .then(response => response.json())
  .then(data => {
    const filmList = document.querySelector('#films');
    data.forEach(film => {
      const listItem = document.createElement('li');
      listItem.textContent = film.title;
      listItem.classList.add('film', 'item');
      filmList.appendChild(listItem);
    });
  })
  .catch(error => console.error('Error:', error));











