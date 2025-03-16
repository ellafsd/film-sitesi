const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container, .navbar, .sidebar, .sidebar i, .toggle, .movie-list-filter select, .movie-list-title"
);

ball.addEventListener("click", function () {
  ball.classList.toggle("active");
  items.forEach((item) => {
    item.classList.toggle("active");
  });

  // Recalculate the slider behavior for dark mode
  arrows.forEach((arrow, i) => {
    const widthRatio = Math.floor(window.innerWidth / 300);  //Number of items visible in the viewport
    const imageItems = movieLists[i].querySelectorAll("img").length;  //Total items in the list

    const maxClicks = Math.max(imageItems - widthRatio, 0); //Recalculate for dark mode
    movieLists[i].style.transform = "translateX(0)";  //Reset the slider
  });
});

arrows.forEach((arrow, i) => {
  const widthRatio = Math.floor(window.innerWidth / 300);   //Number of items visible in the viewport
  let clickCounter = 0;
  const imageItems = movieLists[i].querySelectorAll("img").length;  //Total items in the list

  arrow.addEventListener("click", function () {
    const maxClicks = Math.max(imageItems - widthRatio, 0);   //Max number of valid clicks
    if (clickCounter < maxClicks) {
      clickCounter++;
      movieLists[i].style.transform = `translateX(${
        -300 * clickCounter
      }px)`;
    } else {
      // Reset to the beginning when reaching the end
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  // no extra space after resizing the window
  window.addEventListener("resize", () => {
    const newWidthRatio = Math.floor(window.innerWidth / 300);
    const newMaxClicks = imageItems - newWidthRatio;
    if (clickCounter > newMaxClicks) {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
});














// const arrows = document.querySelectorAll(".arrow");
// const movieLists = document.querySelectorAll(".movie-list");

// arrows.forEach((arrow, i) => {
//   const widthRatio = Math.floor(window.innerWidth / 300);
//   console.log(Math.floor(window.innerWidth/300));
//   let clickCounter = 0;
//   const imageItem = movieLists[i].querySelectorAll("img").length;
//   arrow.addEventListener("click", function () {
//     clickCounter++;
//     if (imageItem - (4 + clickCounter) + (4 - widthRatio) >= 0) {
//       movieLists[i].style.transform = `translateX(${
//         movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
//       }px)`;
//     } else {
//       movieLists[i].stye.transform = "translateX(0)";
//       clickCounter = 0;
//     }
//   });
// });

// //dark mode

// const ball = document.querySelector(".toggle-ball");
// const items = document.querySelectorAll(
//   ".container, .navbar, .sidebar, .sidebar i, .toggle, .toggle-ball, .movie-list-filter select, .movie-list-title"
// );

// ball.addEventListener("click", function () {
//   items.forEach((item) => item.classList.toggle("active"));
// });
























