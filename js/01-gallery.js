import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallryRef = document.querySelector(".gallery");

function galleryMarkup(items) {
  return items
    .map(
      (
        item
      ) => `<div class="gallery__item"><a class="gallery__link" src="${item.original}">
    <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}">
    </a></div>`
    )
    .join("");
}

const addMarkup = galleryMarkup(galleryItems);
gallryRef.insertAdjacentHTML("beforeend", addMarkup);

gallryRef.addEventListener("click", imgSelect);

function imgSelect(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
<img src="${event.target.dataset.source}" width="800" height="600">
`);

  instance.show();
}
// import * as basicLightbox from 'basiclightbox'
