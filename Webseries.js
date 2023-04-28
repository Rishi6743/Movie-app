let webseries = [
      {
        name: "Stranger Things",
        image_link: "https://upload.wikimedia.org/wikipedia/en/6/6b/Stranger_Things_season_3_poster.jpg",
        webseries_name: "Stranger Things",
        trailer_link: "https://www.youtube.com/embed/XcnHOQ-cHa0?start=30"
      },
      {
        name: "Breaking Bad",
        image_link: "https://upload.wikimedia.org/wikipedia/en/6/61/Breaking_Bad_title_card.png",
        webseries_name: "Breaking Bad",
        trailer_link: "https://www.youtube.com/embed/HhesaQXLuRY?start=30"
      },
      {
        name: "Game of Thrones",
        image_link: "https://upload.wikimedia.org/wikipedia/en/9/92/Game_of_Thrones_title_card.jpg",
        webseries_name: "Game of Thrones",
        trailer_link: "https://www.youtube.com/embed/rlR4PJn8b8I?start=30"
      },
      {
        name: "The Crown",
        image_link: "https://upload.wikimedia.org/wikipedia/en/1/1f/The_Crown_Season_3.jpg",
        webseries_name: "The Crown",
        trailer_link: "https://www.youtube.com/embed/W4HuNPoUgjU?start=30"
      },
      {
        name: "Black Mirror",
        image_link: "https://upload.wikimedia.org/wikipedia/en/f/f3/Black_Mirror_title_card.jpg",
        webseries_name: "Black Mirror",
        trailer_link: "https://www.youtube.com/embed/jDiYGjp5iFg?start=30"
      },
      {
        name: "The Handmaid's Tale",
        image_link: "https://upload.wikimedia.org/wikipedia/en/5/5e/The_Handmaid%27s_Tale_Title_Card.jpg",
        webseries_name: "The Handmaid's Tale",
        trailer_link: "https://www.youtube.com/embed/Da69LsJ8CMQ?start=30"
      },
      {
        name: "Peaky Blinders",
        image_link: "https://upload.wikimedia.org/wikipedia/en/c/c3/Peaky_Blinders_titlecard.jpg",
        webseries_name: "Peaky Blinders",
        trailer_link: "https://www.youtube.com/embed/oVzVdvGIC7U?start=30"
      },
      {
        name: "Narcos",
        image_link: "https://upload.wikimedia.org/wikipedia/en/6/6e/Narcos_logo.jpg",
        webseries_name: "Narcos",
        trailer_link: "https://www.youtube.com/embed/U7elNhHwgBU?start=30"
      },
      {
        name: "Mindhunter",
        image_link: "https://upload.wikimedia.org/wikipedia/en/e/e4/Mindhunter.png",
        webseries_name: "Mindhunter",
        trailer_link: "https://www.youtube.com/embed/7gZCfRD_zWE?start=30"
      },
      {
        name: "Chernobyl",
        image_link: "https://upload.wikimedia.org/wikipedia/en/7/77/Chernobyl_title_card.jpg",
        webseries_name: "Chernobyl",
        trailer_link: "https://www.youtube.com/embed/s9APLXM9Ei8?start=30"
      },
]



const container = document.querySelector(".movie-cards");

webseries.forEach((movie) => {
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
    webseries.forEach((movie) => {
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
    const matchedMovies = webseries.filter((movie) =>
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
