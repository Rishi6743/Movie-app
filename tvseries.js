let tvseries = [
  {
    name: "Breaking Bad",
    image_link:
      "https://upload.wikimedia.org/wikipedia/en/6/61/Breaking_Bad_title_card.png",
    webseries_name: "Breaking Bad",
    trailer_link: "https://www.youtube.com/embed/HhesaQXLuRY?start=30"
  },
  {
    name: "Game of Thrones",
    image_link:
      "https://upload.wikimedia.org/wikipedia/en/d/d8/Game_of_Thrones_title_card.jpg",
    webseries_name: "Game of Thrones",
    trailer_link: "https://www.youtube.com/embed/rlR4PJn8b8I?start=30"
  },
  {
    name: "The Office",
    image_link:
      "https://upload.wikimedia.org/wikipedia/en/8/8f/The_Office_US_title.jpg",
    webseries_name: "The Office",
    trailer_link: "https://www.youtube.com/embed/USlvzf0aKjw?start=30"
  },
  {
    name: "Friends",
    image_link:
      "https://upload.wikimedia.org/wikipedia/en/0/0b/Friends_logo.svg",
    webseries_name: "Friends",
    trailer_link: "https://www.youtube.com/embed/hDNNmeeJs1Q?start=30"
  },
  {
    name: "Stranger Things",
    image_link:
      "https://upload.wikimedia.org/wikipedia/en/6/6b/Stranger_Things_season_3_poster.jpg",
    webseries_name: "Stranger Things",
    trailer_link: "https://www.youtube.com/embed/XcnHOQ-cHa0?start=30"
  },
  {
    name: "The Crown",
    image_link:
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/The_Crown_Season_3.jpg/250px-The_Crown_Season_3.jpg",
    webseries_name: "The Crown",
    trailer_link: "https://www.youtube.com/embed/UPzxSsCXw8E?start=30"
  },
  {
    name: "House of Cards",
    image_link:
      "https://upload.wikimedia.org/wikipedia/en/3/3f/House_of_Cards_title_card.png",
    webseries_name: "House of Cards",
    trailer_link: "https://www.youtube.com/embed/NTzycsqxYJ0?start=30"
  },
  {
    name: "The Handmaid's Tale",
    image_link:
      "https://upload.wikimedia.org/wikipedia/en/thumb/1/18/The_Handmaid%27s_Tale_Season_1_Poster.jpg/250px-The_Handmaid%27s_Tale_Season_1_Poster.jpg",
    webseries_name: "The Handmaid's Tale",
    trailer_link: "https://www.youtube.com/embed/dN8AwGUaqDA?start=30"
  },
  {
    name: "The Sopranos",
    image_link:
      "https://upload.wikimedia.org/wikipedia/en/c/cd/Sopranos-s6-part2.jpg",
    webseries_name: "The Sopranos",
    trailer_link: "https://www.youtube.com/embed/4SvnFDBBah0?start=30"
  },
  {
    name: "Stranger Things",
    image_link:
      "https://upload.wikimedia.org/wikipedia/en/6/6b/Stranger_Things_season_3_poster.jpg",
    webseries_name: "Stranger Things",
    trailer_link: "https://www.youtube.com/embed/XcnHOQ-cHa0?start=30"
  },
  {
    name: "Black Mirror",
    image_link:
      "https://upload.wikimedia.org/wikipedia/en/6/64/BlackMirror_S2_Ep2.jpg",
    webseries_name: "Black Mirror",
    trailer_link: "https://www.youtube.com/embed/jDiYGjp5iFg?start=30"
  },
  {
    name: "Breaking Bad",
    image_link:
      "https://upload.wikimedia.org/wikipedia/en/6/61/Breaking_Bad_title_card.png",
    webseries_name: "Breaking Bad",
    trailer_link: "https://www.youtube.com/embed/HhesaQXLuRY?start=30"
  },
  {
    name: "The Wire",
    image_link:
      "https://upload.wikimedia.org/wikipedia/en/3/32/TheWire_Title.png",
    webseries_name: "The Wire",
    trailer_link: "https://www.youtube.com/embed/qkU0xGcEBJE?start=30"
  },
  {
    name: "Mad Men",
    image_link:
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Mad_Men_title_card.jpg/250px-Mad_Men_title_card.jpg",
    webseries_name: "Mad Men",
    trailer_link: "https://www.youtube.com/embed/cu3tutwKtQA?start=30"
  },
  {
    name: "The Office",
    image_link:
      "https://upload.wikimedia.org/wikipedia/en/8/8f/The_Office_US_title.jpg",
    webseries_name: "The Office",
    trailer_link: "https://www.youtube.com/embed/USlvzf0aKjw?start=30"
  },
  {
    name: "Friends",
    image_link:
      "https://upload.wikimedia.org/wikipedia/en/0/0b/Friends_logo.svg",
    webseries_name: "Friends",
    trailer_link: "https://www.youtube.com/embed/hDNNmeeJs1Q?start=30"
  },
  {
    name: "The Marvelous Mrs. Maisel",
    image_link:
      "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/The_Marvelous_Mrs._Maisel_title_card.jpg/250px-The_Marvelous_Mrs._Maisel_title_card.jpg",
    webseries_name: "The Marvelous Mrs. Maisel",
    trailer_link: "https://www.youtube.com/embed/fOmwkTrW4OQ?start=30"
  },
  {
    name: "Stranger Things",
    image_link:
      "https://upload.wikimedia.org/wikipedia/en/6/6b/Stranger_Things_season_3_poster.jpg",
    webseries_name: "Stranger Things",
    trailer_link: "https://www.youtube.com/embed/XcnHOQ-cHa0?start=30"
  },
  {
    name: "Peaky Blinders",
    image_link:
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/Peaky_Blinders_titlecard.jpg/250px-Peaky_Blinders_titlecard.jpg",
    webseries_name: "Peaky Blinders",
    trailer_link: "https://www.youtube.com/embed/oVzVdvGIC7U?start=30"
  }
];



const container = document.querySelector(".movie-cards");

tvseries.forEach((movie) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.classList.add("col-md-3");
  card.classList.add("m-3");
  card.style.width = "18rem";

  // const img = document.createElement("img");
  // img.classList.add("card-img-top");
  // img.alt = movie.webseries_name;
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
  cardText.textContent = movie.webseries_name;
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
    tvseries.forEach((movie) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.classList.add("col-md-4");
      card.classList.add("m-3");
      card.style.width = "18rem";

      // const img = document.createElement("img");
      // img.classList.add("card-img-top");
      // img.alt = movie.webseries_name;
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
      cardText.textContent = movie.webseries_name;
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
    const matchedMovies = tvseries.filter((movie) =>
      movie.webseries_name.toLowerCase().includes(inputValue)
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
        // img.alt = movie.webseries_name;
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
        cardText.textContent = movie.webseries_name;
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
