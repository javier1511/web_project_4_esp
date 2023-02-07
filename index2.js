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
  const images = document.querySelectorAll(".sites__picture-container img");
    const modal = document.querySelector(".modal");
    const modalImg = document.querySelector(".modal__picture");
    const modalTxt = document.querySelector(".modal__text-subtitle");
    const closeButtonModal = document.querySelector(".modal__close-button");
  
    const templateCard = document.querySelector(".template").content;
    const sites = document.querySelector(".sites");
  
    function createCards (name,link){
      const card = templateCard.cloneNode(true);
      card.querySelector(".sites__picture").src = link;
      card.querySelector(".sites__description-text").textContent = name;
      const cardLink = card.querySelector(".sites__picture");
      cardLink.addEventListener("click", () =>{
        modalImg.src = link;
        modalTxt.innerHTML = name;
        modal.classList.add("appear");
        closeButtonModal.addEventListener("click", () => {
          modal.classList.remove("appear");
        })
      })
      return card
    }
   const likeFunction = function (evt){
    evt.target.classList.toggle("sites__description-icon-active");
   }
    initialCards.forEach( function (element) {
     const card = createCards(element.name,element.link);
     sites.append(card);
    }); 

    const addCardButton = document.querySelector(".profile__plus-button");
    const adder = document.querySelector(".adder");
    const adderCloseButton = document.getElementById("adder__close-icon");

   function toggleAdder (){
    adder.classList.toggle("adder__opened");
    overlay.classList.toggle("overlay__visible");
   }

   addCardButton.addEventListener("click", toggleAdder);
   adderCloseButton.addEventListener("click", toggleAdder);
/*
   const adderForm = document.getElementById("adder__form");

   adderForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    const adderTitle = document.getElementById("title").value;
    const adderUrl =document.getElementById("url");
    const card = templateCard.cloneNode(true);
    card.querySelector(".sites__picture").src = evt.target.image.value;
    card.querySelector(".sites__description-text").textContent = evt.target.elements.adderTitle.value;
    card.querySelector(".sites__description-icon").addEventListener("click",function(evt){
        likeFunction(evt)
    });
card.setAttribute("name", evt.target.elements.adderTitle.value);
sites.prepend(card);
adder.classList.remove("adder__opened");
evt.target.reset();
   }); */

   /*create a div and add it to the webpage */


  /*
  /* 3. create a displayCard function */

  function displayCard(){
    
  }

  const handleCardFormSubmit =  (evt) => {
  evt.preventDefault() 
  renderCard() 
  /*toggleAdder()*/

  }

  function renderCard(){
    const div = document.createElement("div");
    div.classList.add("cards__container");
   sites.appendChild(div);
   const adderTitle = document.getElementById("title").value;
    const adderUrl = document.getElementById("url").value;
    let html = `<div class="cards__container">
    <div class="sites__picture-container">
      <img src=${adderUrl} alt="" class="sites__picture">
      <img src= "./images/trash.png" alt="yosemite-imagen-vista" class="sites__trash-icon">
    </div>
      <div class="sites__description-container">
        <p class="sites__description-text">${adderTitle}</p>
        <img src="./images/heart.svg" alt="me-gusta-imagen" class="sites__description-icon">
      </div>
  </div>`;

  div.insertAdjacentHTML("beforeend", html);
  }

 const  adderSubmmit = document.getElementById("adder__submit");
 adderSubmmit.addEventListener("click", handleCardFormSubmit);