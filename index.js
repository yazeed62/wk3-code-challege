 //const BASE_URL = 'http://localhost:3000';
// document.addEventListener('DOMcontentLoaded',function (){
//    fetchMovies();
// });
  
// function fetchmovies (){
//     fetch('${BASE_URL}/films',{
//        method: 'GET',
//         headers: {
//         //   'content-type': 'application/json',
//        },
//    })
//     .then(Response =>Response.json())
//    .then(movie =>displayFilmDetails(movie));
// }
 
// function displayFilmDetails(movie){ 
//     const availableTicket =
//     movie.capacity - movie.ticket_sold;

//     const runtime = document.createElement("T");
//     runtime.textContent ='Runtime:${movie.runtime}minutes';

//     const FilmDetailssquarebox = document.getElementById("film-details");

//     const title = document.createElement("T");
//     title.textContent= 'title:${movie.title}';

//     const showtime = document.createElement("T");
//     showtime.textContent = 'showtime:${movie.showtime}';

//     const poster = document.createElement ("img");
//     poster.src = movie.poster;

//     const availableTicketElement = document.createElement ("T");

//     availableTicketElement.textContent = 'Available Tickets :${available Tickets}';

//     const FilmDetailsItemSquarebox = document.createElement("div");
//     FilmDetailsItemSquarebox.classList.add("film-details-item");

    
//   FilmDetailsItemSquarebox.appendChild(poster);
//   FilmDetailsItemSquarebox.appendChild(title);
//   FilmDetailsItemSquarebox.appendChild(runtime);
//   FilmDetailsItemSquarebox.appendChild(showtime);
//   FilmDetailsItemSquarebox.appendChild(availableTicketsElement);

//   FilmDetailsItemSquarebox.appendChild(FilmDetailsItemSquarebox);
// }



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
      .then(movies => displayFilmDetails(movies));

     // .then(response => response.json())
    //  .then(movies => displayFilmDetails(movies));
  }
  
  function displayFilmDetails(movie) {
    console.log(movie);

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
    availableticketsElement.textContent = `Available tickets: ${availableTickets}`;
  
    const filmDetailsItemSquarebox = document.createElement("div");
    filmDetailsItemSquarebox.classList.add("film-details-item");
  

    filmDetailsItemSquarebox.appendChild(poster);
    filmDetailsItemSquarebox.appendChild(title);
    filmDetailsItemSquarebox.appendChild(runtime);
    filmDetailsItemSquarebox.appendChild(showtime);
    filmDetailsItemSquarebox.appendChild(availableticketsElement);
    filmDetailsSquarebox.appendChild(filmDetailsItemSquarebox);
    

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

  const buyTicketButton = document.createElement("button");
  buyTicketButton.classList.add("buy-ticket-button");
  buyTicketButton.textContent = "Buy Ticket";



  const buyTicketButtons = document.querySelectorAll('.buy-ticket-button');
  buyTicketButtons.forEach(button => {
    button.addEventListener('click', () => {
        const availableTicketsElement = button.closest('.film-details-item-squarebox').querySelector('.available-tickets');
        let availableTickets = parseInt(availableTicketsElement.textContent);
        if (availableTickets > 0) {
            availableTickets--;
            availableTicketsElement.textContent = availableTickets + ' tickets available';
        }
        if (availableTickets === 0) {
            button.disabled = true;
          }
        });
      });











  




