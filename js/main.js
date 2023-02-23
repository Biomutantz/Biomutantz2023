// code for team page access

const mainPage = document.querySelector(".main__container");
const teamPageAccess = document.querySelector(".team__page");
const teamButton = document.querySelector(".team__button");
const footer = document.querySelector(".footer");
const credit = document.querySelector(".credit");
const contact = document.querySelector(".contact");
const modalPage = document.querySelector(".modal__page");
// teamButton.addEventListener("click", (e)=> {
//     e.preventDefault();
//     mainPage.classList.add("hide");
//     footer.classList.add("hide");
//     contact.classList.add("hide");
//     credit.classList.add("hide");
//     teamPageAccess.classList.remove("hide");
// })

// tech button 1

const tech1 = document.querySelector(".techd");
const tech_page1 = document.querySelector(".tech_page1");
const closeBtn = document.querySelector(".c");

tech1.addEventListener("click", ()=> {
    mainPage.classList.add("hide");
    footer.classList.add("hide");
    contact.classList.add("hide");
    credit.classList.add("hide");
    tech_page1.classList.remove("hide");
})

closeBtn.addEventListener("click", ()=> {
    tech_page1.classList.add("hide");
    mainPage.classList.remove("hide");
    footer.classList.remove("hide");
    contact.classList.remove("hide");
    credit.classList.remove("hide");
})

