/* ==========================================
   OPEN ANNIVERSARY CARD
========================================== */

function openCard() {

    const opening = document.getElementById("opening");
    const mainCard = document.getElementById("mainCard");

    opening.style.display = "none";

    mainCard.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}



/* ==========================================
   MUSIC
========================================== */

const song = document.getElementById("ourSong");

function toggleMusic() {

    const button = document.getElementById("musicButton");

    if (song.paused) {

        song.play();

        button.innerHTML =
            "⏸ Pause Our Song";

    } else {

        song.pause();

        button.innerHTML =
            "🎵 Play Our Song";

    }

}



/* ==========================================
   RELATIONSHIP COUNTER
========================================== */

function updateCounter() {

    const startDate =
        new Date("2024-09-15T00:00:00");

    const today = new Date();


    let years =
        today.getFullYear() -
        startDate.getFullYear();

    let months =
        today.getMonth() -
        startDate.getMonth();

    let days =
        today.getDate() -
        startDate.getDate();


    if (days < 0) {

        months--;

        const previousMonth =
            new Date(
                today.getFullYear(),
                today.getMonth(),
                0
            );

        days += previousMonth.getDate();

    }


    if (months < 0) {

        years--;

        months += 12;

    }


    document.getElementById("years").textContent =
        years;

    document.getElementById("months").textContent =
        months;

    document.getElementById("days").textContent =
        days;

}


updateCounter();



/* ==========================================
   PHOTO SLIDESHOW
========================================== */

let currentSlide = 0;

const slides =
    document.querySelectorAll(".slide");

const dots =
    document.querySelectorAll(".dots span");


function showSlide(index) {

    slides.forEach(slide => {

        slide.classList.remove("active");

    });


    if (dots.length > 0) {

        dots.forEach(dot => {

            dot.style.transform = "scale(1)";

        });

    }


    currentSlide = index;

    slides[currentSlide].classList.add("active");

}


function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {

        currentSlide = 0;

    }

    showSlide(currentSlide);

}


setInterval(nextSlide, 4000);



/* ==========================================
   SURPRISE
========================================== */

function openSurprise() {

    const surprise =
        document.getElementById("surprise");

    surprise.classList.remove("hidden");

    surprise.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}



/* ==========================================
   FLOATING HEARTS
========================================== */

function createHeart() {

    const heart =
        document.createElement("div");

    heart.className = "heart";

    const symbols = [
        "❤️",
        "💗",
        "💙",
        "🩷",
        "💕",
        "✨"
    ];


    heart.innerHTML =
        symbols[
            Math.floor(
                Math.random() * symbols.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        Math.random() * 18 + 15 + "px";


    heart.style.animationDuration =
        Math.random() * 3 + 4 + "s";


    document.getElementById("hearts")
        .appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 7000);

}


setInterval(createHeart, 700);
function toggleMusic() {
    const music = document.getElementById("backgroundMusic");
    const button = document.getElementById("musicButton");

    if (music.paused) {
        music.play();
        button.innerHTML = "⏸️ Pause Our Song";
    } else {
        music.pause();
        button.innerHTML = "🎵 Play Our Song";
    }
}