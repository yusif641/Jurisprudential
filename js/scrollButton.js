const contactsScrollButtons = document.querySelectorAll(".scroll-contacts");
const contactPages = document.querySelector(".contacts");

contactsScrollButtons.forEach((el) => el.addEventListener("click", e => {
    e.preventDefault();
    
    contactPages.scrollIntoView({
        block: 'start',
        inline: 'start',
        behavior: 'smooth'
    })
}));