let movies = [
  {
    name: "The Shawshank Redemption",
    image_link:
      "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
    movie_name: "The Shawshank Redemption",
    trailer_link: "https://www.youtube.com/embed/NmzuHjWmXOc?start=30"
  },
  {
    name: "The Godfather",
    image_link:
      "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
    movie_name: "The Godfather",
    trailer_link:
      "https://www.youtube.com/embed/sY1S34973zA?start=30?autoplay=1"
  },
  {
    name: "The Dark Knight",
    image_link:
      "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg",
    movie_name: "The Dark Knight",
    trailer_link: "https://www.youtube.com/embed/EXeTwQWrcwY?start=30"
  },
  {
    name: "The Godfather: Part II",
    image_link:
      "https://upload.wikimedia.org/wikipedia/en/0/03/Godfather_part_ii.jpg",
    movie_name: "The Godfather: Part II",
    trailer_link: "https://www.youtube.com/embed/9O1Iy9od7-A?start=30"
  },
  {
    name: "12 Angry Men",
    image_link:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQuhFZT3lQfr0vDy4XWMHQ8X93FWuamEuw_5iB4dmOTxc_w79rA",
    movie_name: "12 Angry Men",
    trailer_link: "https://www.youtube.com/embed/TEN-2uTi2c0?start=30"
  },
  {
    name: "Schindler's List",
    image_link:
      "https://rukminim1.flixcart.com/image/416/416/knunf680/poster/z/u/c/medium-schindler-s-list-movie-wall-poster-for-room-with-gloss-original-imag2g3a4cgq7uhc.jpeg?q=70",
    movie_name: "Schindler's List",
    trailer_link: "https://www.youtube.com/embed/gG22XNhtnoY?start=30"
  },
  {
    name: "The Lord of the Rings: The Return of the King",
    image_link:
      "https://rukminim1.flixcart.com/image/416/416/jqmnv680/poster/w/k/y/medium-pwl-the-lord-of-the-rings-the-return-of-the-king-the-lord-original-imaek7n7untxmyfj.jpeg?q=70",
    movie_name: "The Lord of the Rings: The Return of the King",
    trailer_link: "https://www.youtube.com/embed/y2rYRu8UW8M?start=30"
  },
  {
    name: "Pulp Fiction",
    image_link:
      "https://c4.wallpaperflare.com/wallpaper/670/109/174/bruce-willis-john-travolta-pulp-fiction-quentin-tarantino-wallpaper-thumb.jpg",
    movie_name: "Pulp Fiction",
    trailer_link: "https://www.youtube.com/embed/tGpTpVyI_OQ?start=30"
  },
  {
    name: "The Lord of the Rings: The Fellowship of the Ring",
    image_link:
      "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Lord_of_the_Rings_The_Fellowship_of_the_Ring_%282001%29.jpg",
    movie_name: "The Lord of the Rings: The Fellowship of the Ring",
    trailer_link: "https://www.youtube.com/embed/_nZdmwHrcnw?start=30"
  },
  {
    name: "Forrest Gump",
    image_link:
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81sZaS6kcmL._SL1500_.jpg",
    movie_name: "Forrest Gump",
    trailer_link: "https://www.youtube.com/embed/bLvqoHBptjg?start=30"
  },
  {
    name: "Fight Club",
    image_link:
      "https://upload.wikimedia.org/wikipedia/en/f/fc/Fight_Club_poster.jpg",
    movie_name: "Fight Club",
    trailer_link: "https://www.youtube.com/embed/qtRKdVHc-cE?start=30"
  },
  {
    name: "Inception",
    image_link:
      "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
    movie_name: "Inception",
    trailer_link: "https://www.youtube.com/embed/8hP9D6kZseM?start=30"
  }
];

const container = document.querySelector(".movie-cards");

movies.forEach((movie) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.classList.add("col-md-3");
  card.classList.add("m-3");
  card.style.width = "18rem";

  // const img = document.createElement("img");
  // img.classList.add("card-img-top");
  // img.alt = movie.movie_name;
  // img.src = movie.image_link;
  // card.appendChild(img);

  const iframe = document.createElement("iframe");
  iframe.width = "560";
  iframe.height = "315";
  iframe.src = movie.trailer_link;
  iframe.title = "YouTube video player";
  iframe.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.allowFullscreen = true;
  card.appendChild(iframe);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  const cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.textContent = movie.movie_name;
  cardBody.appendChild(cardText);
  card.appendChild(cardBody);

  const link = document.createElement("a");
  link.classList.add("alink");
  link.target = "_blank";
  link.href = movie.trailer_link;
  link.textContent = "Watch it";
  card.appendChild(link);

  // Add the card to the container
  container.appendChild(card);
});

let searchInput = document.getElementById("search-input");

function searchMovies() {
  const inputValue = searchInput.value.trim().toLowerCase();

  if (inputValue === "") {
    container.innerHTML = "";
    movies.forEach((movie) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.classList.add("col-md-4");
      card.classList.add("m-3");
      card.style.width = "18rem";

      // const img = document.createElement("img");
      // img.classList.add("card-img-top");
      // img.alt = movie.movie_name;
      // img.src = movie.image_link;
      // card.appendChild(img);

      const iframe = document.createElement("iframe");
      iframe.width = "560";
      iframe.height = "315";
      iframe.src = movie.trailer_link;
      iframe.title = "YouTube video player";
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.allowFullscreen = true;
      card.appendChild(iframe);

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
      const cardText = document.createElement("p");
      cardText.classList.add("card-text");
      cardText.textContent = movie.movie_name;
      cardBody.appendChild(cardText);
      card.appendChild(cardBody);
      const link = document.createElement("a");
      link.classList.add("alink");
      link.target = "_blank";
      link.href = movie.trailer_link;
      link.textContent = "Watch it";
      card.appendChild(link);
      container.appendChild(card);
    });
  } else {
    const matchedMovies = movies.filter((movie) =>
      movie.movie_name.toLowerCase().includes(inputValue)
    );

    if (matchedMovies.length === 0) {
      container.innerHTML = "<p>No results found.</p>";
    } else {
      container.innerHTML = "";
      matchedMovies.forEach((movie) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.classList.add("col-md-4");
        card.classList.add("m-3");
        card.style.width = "18rem";

        
        // const img = document.createElement("img");
        // img.classList.add("card-img-top");
        // img.alt = movie.movie_name;
        // img.src = movie.image_link;
        // card.appendChild(img);
        // link.href = movie.trailer_link;
        const iframe = document.createElement("iframe");
        iframe.width = "560";
        iframe.height = "315";
        iframe.src = movie.trailer_link;
        iframe.title = "YouTube video player";
        iframe.allow =
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        iframe.allowFullscreen = true;
        card.appendChild(iframe);

      

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        const cardText = document.createElement("p");
        cardText.classList.add("card-text");
        cardText.textContent = movie.movie_name;
        cardBody.appendChild(cardText);
        card.appendChild(cardBody);

        const link = document.createElement("a");
        link.classList.add("alink");
        link.target = "_blank";
        link.href = movie.trailer_link;
        link.textContent = "Watch it";
        card.appendChild(link);

        container.appendChild(card);
      });
    }
  }
}

searchInput.addEventListener("input", searchMovies);
