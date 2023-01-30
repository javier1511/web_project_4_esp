const images = document.querySelectorAll(".sites__picture-container img");
  const modal = document.querySelector(".modal");
  const modalImg = document.querySelector(".modal__picture");
  const modalTxt = document.querySelector(".modal__text-subtitle");
  const closeButtonModal = document.querySelector(".modal__close-button");

  images.forEach((image) => {
    image.addEventListener("click", () => {
      modalImg.src = image.src;
      modalTxt.innerHTML = image.alt;
      modal.classList.add("appear");


      closeButtonModal.addEventListener("click", () => {
        modal.classList.remove("appear");
      })
    });
  });

  const cards = document.querySelector(".sites__picture-container"),
  template = document.getElementById("template__card").content,
  fragment = document.createDocumentFragment(),
  const initialCards = [
    {
      name: "Valle de Yosemite",
      link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
    },
    {
      name: "Lago Louise",
      link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
    },
    {
      name: "Montañas Calvas",
      link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
    },
    {
      name: "Latemar",
      link: "https://code.s3.yandex.net/web-code/latemar.jpg"
    },
    {
      name: "Parque Nacional de la Vanoise",
      link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
    },
    {
      name: "Lago di Braies",
      link: "https://code.s3.yandex.net/web-code/lago.jpg"
    }
  ];
  
  initialCards.forEach(el => {
    template.querySelector("img").setAttribute("src", el.link);
    template.querySelector("img").setAttribute("alt", el.name);
    template,querySelector("span").textContent = el.name;


    let clone = document.importNode(template,true);
    fragment.appendChild(clone);
  });

  cards.append(fragment);
  