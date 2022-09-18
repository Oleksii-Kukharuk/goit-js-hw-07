import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallryRef = document.querySelector(".gallery");

function galleryMarkup(items) {
  return items
    .map(
      (item) => `<li><a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}"  alt="${item.description}">
    </a></li>`
    )
    .join("");
}

const addMarkup = galleryMarkup(galleryItems);
gallryRef.innerHTML = addMarkup;

gallryRef.addEventListener("click", imgSelect);

function imgSelect(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const lightbox = new SimpleLightbox(".gallery a", {
    captionType: "alt",
    captionsData: "alt",
    captionDelay: 250,
    showCounter: false,
    maxZoom: 2,
    scrollZoomFactor: 0.1,
  });
}
