const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

//Добавление разметки карточек
const gallaryContainer = document.querySelector('ul.js-gallery')
const gallaryCards = createGallaryCards(galleryItems)

function createGallaryCards(galleryitems) {
  const markup = galleryitems.map(({preview, original, description}) => {
     
    return (
   `<li class="gallery__item">
      <a
          class="gallery__link"
            href="${original}"
          >
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
      </a>
    </li>`)
    
    
  }).join('')
return markup;
}

gallaryContainer.insertAdjacentHTML("beforeend", gallaryCards)


//События модального окна
const modalEl = document.querySelector(".lightbox.js-lightbox")
const modalImage = document.querySelector('img.lightbox__image')
const modalButton = document.querySelector('button[data-action="close-lightbox"]')



gallaryContainer.addEventListener('click', onOpenModal)

function onOpenModal(event) {
  
  event.preventDefault()
  if (!event.target.classList.contains('gallery__image')) {
    return
  }
   
  modalEl.classList.add('is-open')
  modalImage.src = event.target.dataset.source
  modalImage.alt = event.target.alt
  window.addEventListener('keydown', onKeyDown)
  
}

modalButton.addEventListener('click', onCloseModal)

function onCloseModal(event) {
  modalEl.classList.remove('is-open')
  modalImage.src = ""
  modalImage.alt = ""
  window.removeEventListener('keydown', onKeyDown)
}

//Дополнительно:
//Закрытие модального окна по клику на div.lightbox__overlay.

const lightboxOverlayEl = document.querySelector('.lightbox__overlay')

lightboxOverlayEl.addEventListener('click', onCloseModal)


//Дополнительно:
//Закрытие модального окна по нажатию клавиши ESC.

function onKeyDown(event) {

  if (event.code === 'Escape') {
    onCloseModal()
  }
}
