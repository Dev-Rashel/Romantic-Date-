// =====================================
// USER SELECTION DATA
// =====================================

const dateData = {
    time: "",
    place: "",
    color: ""
};


// =====================================
// PAGE ELEMENTS
// =====================================

const pages = document.querySelectorAll(".page");

const proposalPage = document.getElementById("proposalPage");
const smilePage = document.getElementById("smilePage");
const timePage = document.getElementById("timePage");
const placePage = document.getElementById("placePage");
const dressPage = document.getElementById("dressPage");
const finalPage = document.getElementById("finalPage");


// =====================================
// FUNCTION TO CHANGE PAGE
// =====================================

function showPage(page) {

    pages.forEach((singlePage) => {
        singlePage.classList.remove("active");
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

const yesBtn = document.getElementById("yesBtn");

yesBtn.addEventListener("click", () => {

    showPage(smilePage);

    // Smile page will stay for 2 seconds
    setTimeout(() => {

        showPage(timePage);

    }, 2000);

});


// =====================================
// RUNAWAY NO BUTTON 😂
// =====================================

const noBtn = document.getElementById("noBtn");

let noMoveCount = 0;


// Desktop mouse hover
noBtn.addEventListener("mouseenter", moveNoButton);


// Mobile touch
noBtn.addEventListener("touchstart", (event) => {

    event.preventDefault();

    moveNoButton();

});


function moveNoButton() {

    noMoveCount++;

    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;

    const maxX =
        window.innerWidth -
        buttonWidth -
        30;

    const maxY =
        window.innerHeight -
        buttonHeight -
        30;


    const randomX =
        Math.floor(
            Math.random() * Math.max(maxX, 100)
        );

    const randomY =
        Math.floor(
            Math.random() * Math.max(maxY, 100)
        );


    // Make button fixed so it can run
    // anywhere on the screen

    noBtn.style.position = "fixed";

    noBtn.style.left =
        randomX + "px";

    noBtn.style.top =
        randomY + "px";

    noBtn.style.zIndex = "999";


    // Change text sometimes 😆

    if (noMoveCount === 2) {
        noBtn.innerText = "Are you sure? 👀";
    }

    else if (noMoveCount === 4) {
        noBtn.innerText = "Think again 😌";
    }

    else if (noMoveCount === 6) {
        noBtn.innerText = "You can't catch me 😂";
    }

    else if (noMoveCount === 8) {
        noBtn.innerText = "Just press YES 💗";
    }

}


// Prevent accidental click on NO

noBtn.addEventListener("click", (event) => {

    event.preventDefault();

    moveNoButton();

});


// =====================================
// TIME SELECTION
// =====================================

const timeButtons =
    document.querySelectorAll("[data-time]");


timeButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const selectedTime =
            button.dataset.time;

        dateData.time =
            selectedTime;


        // Go to place page

        showPage(placePage);

    });

});


// =====================================
// PLACE SELECTION
// =====================================

const placeButtons =
    document.querySelectorAll("[data-place]");


placeButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const selectedPlace =
            button.dataset.place;

        dateData.place =
            selectedPlace;


        // Go to dress page

        showPage(dressPage);

    });

});


// =====================================
// COLOR SELECTION
// =====================================

const colorButtons =
    document.querySelectorAll("[data-color]");


colorButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const selectedColor =
            button.dataset.color;

        dateData.color =
            selectedColor;


        // Show final page

        showPage(finalPage);

    });

});


// =====================================
// POPUP
// =====================================

const popup =
    document.getElementById("popup");

const showPlanBtn =
    document.getElementById("showPlanBtn");

const closePopup =
    document.getElementById("closePopup");

const doneBtn =
    document.getElementById("doneBtn");


// Popup information

const selectedTimeText =
    document.getElementById("selectedTime");

const selectedPlaceText =
    document.getElementById("selectedPlace");

const selectedColorText =
    document.getElementById("selectedColor");


// Show popup

showPlanBtn.addEventListener("click", () => {

    selectedTimeText.innerText =
        dateData.time;

    selectedPlaceText.innerText =
        dateData.place;

    selectedColorText.innerText =
        dateData.color;


    popup.classList.add("show");

});


// Close popup

closePopup.addEventListener("click", () => {

    popup.classList.remove("show");

});


doneBtn.addEventListener("click", () => {

    popup.classList.remove("show");

});


// Click outside popup to close

popup.addEventListener("click", (event) => {

    if (event.target === popup) {

        popup.classList.remove("show");

    }

});
