// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// console.log(galleryItems);
// Описан в документации
// npm install simplelightbox;
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

document
  .querySelector(".gallery")
  .insertAdjacentHTML("afterbegin", createGalleryMarkup(galleryItems));

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
           <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
           />
        </a>
    </li>`;
    })
    .join("");
}