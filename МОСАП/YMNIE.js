

// СЮДА НЕ ЛЕЗЬТЕ 


const track = document.querySelector(".slider-track");
const prevBtn = document.querySelector(".slider-prev");
const nextBtn = document.querySelector(".slider-next");
const careerBlock = document.querySelector(".career")
const popup = document.querySelector(".career-popup")
const closePopup = document.querySelector(".career-popup__close")
const modal = document.querySelector(".doc-modal");
const frame = document.querySelector(".doc-frame");
const diplomaCards = document.querySelectorAll(".diploma-card")
const diplomaModal = document.querySelector(".diploma-modal")
const diplomaModalImg = document.querySelector(".diploma-modal-img")
const diplomaClose = document.querySelector(".diploma-close")
const mapTrack = document.querySelector(".map-slider-track")
const mapItems = document.querySelectorAll(".map-slider-track span")

const mapPrev = document.querySelector(".map-prev")
const mapNext = document.querySelector(".map-next")
const mapCards = document.querySelector(".map-cards")





function updateSlider() {

  const cards = document.querySelectorAll(".edu-card");

  cards.forEach(card => card.classList.remove("active"));

  cards[1].classList.add("active"); // центр

}

nextBtn.addEventListener("click", () => {

  track.appendChild(track.firstElementChild);

  updateSlider();

});

prevBtn.addEventListener("click", () => {

  track.prepend(track.lastElementChild);

  updateSlider();

});

updateSlider();

document.addEventListener("DOMContentLoaded", () => {

const careerBlock = document.querySelector(".career")
const popup = document.querySelector(".career-popup")
const closePopup = document.querySelector(".career-popup__close")

/* ЕСЛИ POPUP УЖЕ ПОКАЗЫВАЛСЯ — НИЧЕГО НЕ ДЕЛАЕМ */

if(sessionStorage.getItem("careerPopupShown")){
return
}

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

popup.classList.add("active")

/* сохраняем флаг */

sessionStorage.setItem("careerPopupShown","true")

/* отключаем observer */

observer.disconnect()

}

})

},{
threshold:0.2,
rootMargin:"0px 0px -150px 0px"
})

observer.observe(careerBlock)

closePopup.addEventListener("click", () => {

popup.classList.remove("active")

})

})

document.querySelectorAll(".license-card").forEach(btn => {

btn.addEventListener("click", () => {

const doc = btn.dataset.doc;

frame.src = doc;

modal.classList.add("active");

});

});

document.querySelector(".doc-close").addEventListener("click", () => {

modal.classList.remove("active");

frame.src = "";

});

modal.addEventListener("click", e => {

if(e.target === modal){

modal.classList.remove("active");

frame.src = "";

}

});

diplomaCards.forEach(card => {

card.addEventListener("click", () => {

const img = card.querySelector("img")

if(!img) return

diplomaModalImg.src = img.src

diplomaModal.classList.add("active")

})

})

diplomaClose.addEventListener("click", () => {

diplomaModal.classList.remove("active")

})

diplomaModal.addEventListener("click", e => {

if(e.target === diplomaModal){

diplomaModal.classList.remove("active")

}

})

document.addEventListener('DOMContentLoaded', () => {
    const faqCards = document.querySelectorAll('.faq-card');

    faqCards.forEach(card => {
        card.addEventListener('click', () => {
      
            faqCards.forEach(otherCard => {
                if (otherCard !== card) otherCard.classList.remove('active');
            });
            
            
            card.classList.toggle('active');
        });
    });
});


let mapIndex = 0

function updateMapSlider(){
mapTrack.style.transform = `translateX(-${mapIndex * 100}%)`
}

mapNext.addEventListener("click", () => {

mapIndex++

if(mapIndex >= mapItems.length){
mapIndex = 0
}

updateMapSlider()

})

mapPrev.addEventListener("click", () => {

mapIndex--

if(mapIndex < 0){
mapIndex = mapItems.length - 1
}

updateMapSlider()

})

let isDown = false
let startX
let scrollLeft

mapCards.addEventListener("mousedown", (e) => {
isDown = true
mapCards.classList.add("dragging")

startX = e.pageX - mapCards.offsetLeft
scrollLeft = mapCards.scrollLeft
})

mapCards.addEventListener("mouseleave", () => {
isDown = false
mapCards.classList.remove("dragging")
})

mapCards.addEventListener("mouseup", () => {
isDown = false
mapCards.classList.remove("dragging")
})

mapCards.addEventListener("mousemove", (e) => {
if(!isDown) return

e.preventDefault()

const x = e.pageX - mapCards.offsetLeft
const walk = (x - startX) * 1.5

mapCards.scrollLeft = scrollLeft - walk
})

/* колесо мыши → горизонтальный скролл */

mapCards.addEventListener("wheel", (e) => {

if(e.deltaY !== 0){
e.preventDefault()
mapCards.scrollLeft += e.deltaY
}

})

// Ждем загрузки DOM, чтобы скрипт точно увидел элементы
document.addEventListener('DOMContentLoaded', () => {
    const appModal = document.querySelector(".app-modal");
    const openBtn = document.querySelector(".application-training");
    const closeBtn = document.querySelector(".app-close");

    // Проверка на случай, если кнопки нет на какой-то странице
    if (openBtn && appModal) {
        // Открыть
        openBtn.addEventListener("click", () => {
            appModal.classList.add("active");
            document.body.style.overflow = "hidden"; // Запретить скролл страницы на фоне
        });

        // Закрыть на крестик
        closeBtn.addEventListener("click", () => {
            appModal.classList.remove("active");
            document.body.style.overflow = "auto"; // Вернуть скролл
        });

        // Закрыть при клике на фон (темную подложку)
        appModal.addEventListener("click", (e) => {
            // e.target === appModal проверяет, что клик был именно по фону, а не по самому окну
            if (e.target === appModal) {
                appModal.classList.remove("active");
                document.body.style.overflow = "auto";
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const heroSlides = document.querySelectorAll(".hero__slider .KArtinka");
    let currentSlide = 0;
    const slideInterval = 5000; // Время показа одной картинки (5 секунд)

    function nextSlide() {
        // Убираем активный класс у текущей картинки
        heroSlides[currentSlide].classList.remove("active");
        
        // Считаем индекс следующей картинки (зацикливаем)
        currentSlide = (currentSlide + 1) % heroSlides.length;
        
        // Добавляем активный класс следующей
        heroSlides[currentSlide].classList.add("active");
    }

    // Запускаем таймер, если картинок больше одной
    if (heroSlides.length > 1) {
        setInterval(nextSlide, slideInterval);
    }
});
// КЛИКИ 
function scrollToBlock() {
  document.getElementById("contacts").scrollIntoView({
    behavior: "smooth"
  });
}
// контакты 
function scrollToInfo(){
  document.getElementById("MAP-info").scrollIntoView({
    behavior: "smooth"
  });
}
// МАП инфо
function scrollToAdvantages(){
  document.getElementById("advantages").scrollIntoView({
    behavior: "smooth"
  });
}

function scrollToLicenses(){
  document.getElementById("licenses").scrollIntoView({
    behavior: "smooth"
  });
}