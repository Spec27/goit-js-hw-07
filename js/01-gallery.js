import { galleryItems } from "./gallery-items.js";
// Change code below this line

const createGallery = document.querySelector(".gallery");
const galleryMarcup = createGalleryCards(galleryItems);
createGallery.insertAdjacentHTML("beforeend", galleryMarcup);
createGallery.addEventListener("click", openbigImgEl);

function createGalleryCards(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
          <a class="gallery__link" href="large-image.jpg">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </div>`;
    })
    .join("");
}

function openbigImgEl(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  openBigImgModal(event);
}

function openBigImgModal(event) {
  const imgEl = basicLightbox.create(`<img width="1280" height="968" src= "${event.target.dataset.source}"></img>`);
  imgEl.show();
  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      imgEl.close();
    }
  });
}

/* 
1:Создание и рендеринг разметки по массиву данных 
 galleryItemsи предоставленному шаблону элемента декора.
2:Реализация делегирования div.galleryи получение urlбольшого количества изображений.
3:Подключение скрипта и стиля библиотеки модного окна basicLightbox . 
 Используйте сервис CDN jsdelivr и добавьте в проект ссылки на минифицированные ( .min) файлы.
4:Открытие модального окна по клику на элементе украшения. Для этого ознакомьтесь с документацией и примерами .
5:Замена значения атрибута srcэлемента <img>в модальном окне перед открытием. 
 Использовал готовую разметку модального окна с изображением из библиотеки библиотеки basicLightbox . */
