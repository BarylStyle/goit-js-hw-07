import { galleryItems } from './gallery-items.js';

// Change code below this line
const gallery = document.querySelector('.gallery');

galleryItems.forEach(item => {
  const listItem = document.createElement('li');
  listItem.classList.add('gallery__item');

  const link = document.createElement('a');
  link.classList.add('gallery__link');
  link.href = item.original;

  const image = document.createElement('img');
  image.classList.add('gallery__image');
  image.src = item.preview;
  image.alt = item.description;
  image.setAttribute('data-source', item.original);

  link.appendChild(image);
  listItem.appendChild(link);
  gallery.appendChild(listItem);
});

gallery.addEventListener('click', event => {
  event.preventDefault(); 

  if (event.target.classList.contains('gallery__image')) {
    const imageSource = event.target.dataset.source;

    const instance = basicLightbox.create(`
      <img src="${imageSource}" alt="image" />
    `);

    instance.show();

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        instance.close();
      }
    });
  }
});
console.log(galleryItems);
