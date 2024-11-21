
const cardContainer = document.querySelector('.card-container');
document.addEventListener('DOMContentLoaded', function () {
  cardContainer.scrollLeft = cardContainer.scrollWidth / 2;

});
function scrollMain(container) {
  container.addEventListener('wheel', function(event) {
    if (event.deltaY !== 0) {
      event.preventDefault();
      this.scrollLeft += event.deltaY * 2;
    }
  });
}

scrollMain(cardContainer)