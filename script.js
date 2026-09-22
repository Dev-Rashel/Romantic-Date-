// =====================================
// DATE DATA
// =====================================

const dateData = {
    time: "",
    place: "",
    color: ""
};


// =====================================
// PAGES
// =====================================

const pages =
    document.querySelectorAll(".page");

const homePage =
    document.getElementById("homePage");

const smilePage =
    document.getElementById("smilePage");

const timePage =
    document.getElementById("timePage");

const placePage =
    document.getElementById("placePage");

const dressPage =
    document.getElementById("dressPage");

const finalPage =
    document.getElementById("finalPage");

const planPage =
    document.getElementById("planPage");


// =====================================
// PAGE CHANGE
// =====================================

function showPage(page) {

    pages.forEach((item) => {

        item.classList.remove("active");

    });

    page.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// =====================================
// YES BUTTON
// =====================================

const yesBtn =
    document.getElementById("yesBtn");


yesBtn.addEventListener("click", () => {

    showPage(smilePage);

    setTimeout(() => {

        showPage(timePage);

    }, 1800);

});


// =====================================
// NO BUTTON
// =====================================

const noBtn =
    document.getElementById("noBtn");

const homeCard =
    document.querySelector(".home-card");

let noCount = 0;


// Mouse hover
noBtn.addEventListener(
    "mouseenter",
    moveNoButton
);


// Click
noBtn.addEventListener(
    "click",
    (event) => {

        event.preventDefault();

        moveNoButton();

    }
);


// =====================================
// MOVE NO BUTTON
// WHOLE HOME CARD-এর ভিতরে
// =====================================

function moveNoButton() {

    noCount++;


    const cardWidth =
        homeCard.clientWidth;

    const cardHeight =
        homeCard.clientHeight;


    const buttonWidth =
        noBtn.offsetWidth;

    const buttonHeight =
        noBtn.offsetHeight;


    /*
        Card-এর padding বাদ দিয়ে
        safe area রাখা হচ্ছে।
    */

    const padding = 20;


    const maxX =
        cardWidth -
        buttonWidth -
        padding;


    const maxY =
        cardHeight -
        buttonHeight -
        padding;


    const randomX =
        padding +
        Math.random() *
        Math.max(
            maxX - padding,
            1
        );


    const randomY =
        padding +
        Math.random() *
        Math.max(
            maxY - padding,
            1
        );


    /*
        Button পুরো home-card-এর
        ভিতরে random জায়গায় যাবে।
    */

    noBtn.style.transform =
        "none";

    noBtn.style.left =
        randomX + "px";

    noBtn.style.top =
        randomY + "px";


    // Button text change

    if (noCount === 2) {

        noBtn.innerText =
            "Really? 👀";

    }

    else if (noCount === 4) {

        noBtn.innerText =
            "Think again 😌";

    }

    else if (noCount === 6) {

        noBtn.innerText =
            "Nope 😂";

    }

    else if (noCount === 8) {

        noBtn.innerText =
            "Just say YES 💗";

    }

}


// =====================================
// TIME SELECTION
// =====================================

const timeButtons =
    document.querySelectorAll(
        "[data-time]"
    );


timeButtons.forEach((button) => {

    button.addEventListener(
        "click",
        () => {

            dateData.time =
                button.dataset.time;

            showPage(placePage);

        }
    );

});


// =====================================
// PLACE SELECTION
// =====================================

const placeButtons =
    document.querySelectorAll(
        "[data-place]"
    );


placeButtons.forEach((button) => {

    button.addEventListener(
        "click",
        () => {

            dateData.place =
                button.dataset.place;

            showPage(dressPage);

        }
    );

});


// =====================================
// COLOR SELECTION
// =====================================

const colorButtons =
    document.querySelectorAll(
        "[data-color]"
    );


colorButtons.forEach((button) => {

    button.addEventListener(
        "click",
        () => {

            dateData.color =
                button.dataset.color;

            showPage(finalPage);

        }
    );

});


// =====================================
// DATE PLAN
// =====================================

const planBtn =
    document.getElementById("planBtn");


const finalTime =
    document.getElementById("finalTime");

const finalPlace =
    document.getElementById("finalPlace");

const finalColor =
    document.getElementById("finalColor");


planBtn.addEventListener(
    "click",
    () => {

        finalTime.innerText =
            dateData.time;

        finalPlace.innerText =
            dateData.place;

        finalColor.innerText =
            dateData.color;


        // Directly full plan
        showPage(planPage);

    }
);


// =====================================
// I UNDERSTAND
// =====================================

const understandBtn =
    document.getElementById(
        "understandBtn"
    );


understandBtn.addEventListener(
    "click",
    () => {

        // আবার Home page
        showPage(homePage);


        // Data reset
        dateData.time = "";
        dateData.place = "";
        dateData.color = "";


        // No button আবার আগের জায়গায়
        noBtn.style.left = "50%";
        noBtn.style.top = "50%";
        noBtn.style.transform =
            "translate(-50%, -50%)";


        noBtn.innerText = "No";

        noCount = 0;

    }
);