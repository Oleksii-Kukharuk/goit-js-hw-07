import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallryRef = document.querySelector(".gallery");

function galleryMarkup(items) {
  return items
    .map(
      (item) => `<a class="gallery__item" src="${item.original}">
    <img class="gallery__image" src="${item.preview}"  alt="${item.description}">
    </a></div>`
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
  let lightbox = new SimpleLightbox(".gallery a");
}
