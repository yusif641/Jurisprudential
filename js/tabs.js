const tabsTitle = document.querySelectorAll('.services__tab');
const tabsContent = document.querySelectorAll('.services__tab-content');

tabsTitle.forEach((element, index) => {
    element.addEventListener('click', (e) => {
        tabsTitle.forEach(title => title.classList.remove('active-title'))
        element.classList.add('active-title')

        tabsContent.forEach(tab => tab.classList.remove('active-tab'))
        tabsContent[index].classList.add('active-tab')
    })
})