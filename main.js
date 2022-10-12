const i18Obj = {
    'en': {
        'skills': 'Skills',
        'portfolio': 'Portfolio',
        'video': 'Video',
        'price': 'Price',
        'contacts': 'Contacts',
        'hero-title': 'Alexa Rise',
        'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
        'hire': 'Hire me',
        'skill-title-1': 'Digital photography',
        'skill-text-1': 'High-quality photos in the studio and on the nature',
        'skill-title-2': 'Video shooting',
        'skill-text-2': 'Capture your moments so that they always stay with you',
        'skill-title-3': 'Rotouch',
        'skill-text-3': 'I strive to make photography surpass reality',
        'skill-title-4': 'Audio',
        'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
        'winter': 'Winter',
        'spring': 'Spring',
        'summer': 'Summer',
        'autumn': 'Autumn',
        'price-description-1-span-1': 'One location',
        'price-description-1-span-2': '120 photos in color',
        'price-description-1-span-3': '12 photos in retouch',
        'price-description-1-span-4': 'Readiness 2-3 weeks',
        'price-description-1-span-5': 'Make up, visage',
        'price-description-2-span-1': 'One or two locations',
        'price-description-2-span-2': '200 photos in color',
        'price-description-2-span-3': '20 photos in retouch',
        'price-description-2-span-4': 'Readiness 1-2 weeks',
        'price-description-2-span-5': 'Make up, visage',
        'price-description-3-span-1': 'Three locations or more',
        'price-description-3-span-2': '300 photos in color',
        'price-description-3-span-3': '50 photos in retouch',
        'price-description-3-span-4': 'Readiness 1 week',
        'price-description-3-span-5': 'Make up, visage, hairstyle',
        'order': 'Order shooting',
        'contact-me': 'Contact me',
        'send-message': 'Send message'
    },
    'ru': {
        'skills': 'Навыки',
        'portfolio': 'Портфолио',
        'video': 'Видео',
        'price': 'Цены',
        'contacts': 'Контакты',
        'hero-title': 'Алекса Райс',
        'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
        'hire': 'Пригласить',
        'skill-title-1': 'Фотография',
        'skill-text-1': 'Высококачественные фото в студии и на природе',
        'skill-title-2': 'Видеосъемка',
        'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
        'skill-title-3': 'Ретушь',
        'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
        'skill-title-4': 'Звук',
        'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
        'winter': 'Зима',
        'spring': 'Весна',
        'summer': 'Лето',
        'autumn': 'Осень',
        'price-description-1-span-1': 'Одна локация',
        'price-description-1-span-2': '120 цветных фото',
        'price-description-1-span-3': '12 отретушированных фото',
        'price-description-1-span-4': 'Готовность через 2-3 недели',
        'price-description-1-span-5': 'Макияж, визаж',
        'price-description-2-span-1': 'Одна-две локации',
        'price-description-2-span-2': '200 цветных фото',
        'price-description-2-span-3': '20 отретушированных фото',
        'price-description-2-span-4': 'Готовность через 1-2 недели',
        'price-description-2-span-5': 'Макияж, визаж',
        'price-description-3-span-1': 'Три локации и больше',
        'price-description-3-span-2': '300 цветных фото',
        'price-description-3-span-3': '50 отретушированных фото',
        'price-description-3-span-4': 'Готовность через 1 неделю',
        'price-description-3-span-5': 'Макияж, визаж, прическа',
        'order': 'Заказать съемку',
        'contact-me': 'Свяжитесь со мной',
        'send-message': 'Отправить'
    }
}

// burger-menu

const burger = document.querySelector('.burger')
const menu = document.querySelector('.header__nav')
const menuClose = document.querySelector('.header__nav-close')

burger.addEventListener('click', () => {
    menu.classList.toggle('open')
})
menuClose.addEventListener('click', () => {
    menu.classList.toggle('open')
})

function closeMenu(event) {
    if (event.target.classList.contains('header__link')) {
        menu.classList.remove('open')
    }
}

menu.addEventListener('click', closeMenu)



// opacity

const heroOpacity = document.querySelector('.hero')
const mainOpacity = document.querySelector('main')
const footerOpacity = document.querySelector('.footer')
const headerLogoOpacity = document.querySelector('.header__logo')

const elemOpacity = [heroOpacity, mainOpacity, footerOpacity, headerLogoOpacity]

function addOpacity() {
    elemOpacity.forEach((elem) => elem.classList.add('bg-opacity'))
}
burger.addEventListener('click', addOpacity)

function deleteOpacity() {
    elemOpacity.forEach((elem) => elem.classList.remove('bg-opacity'))
}
menuClose.addEventListener('click', deleteOpacity)


function removeOpacityMenu(event) {
    if (event.target.classList.contains('header__link')) {
        elemOpacity.forEach((elem) => elem.classList.remove('bg-opacity'))
    }
}
menu.addEventListener('click', removeOpacityMenu)


// portfolio

const portfolioBtn = document.querySelectorAll('.portfolio__button')
const portfolioImg = document.querySelectorAll('.portfolio__images')

portfolioBtn.forEach(changeImage)

function changeImage(button) {
    button.addEventListener('click', () => {

        let buttonAttribute = button.getAttribute('data-season')
        let currentImage = document.querySelector(buttonAttribute)

        if (!button.classList.contains('active')) {
            portfolioBtn.forEach((button) => {
                button.classList.remove('active')
            })

            portfolioImg.forEach((button) => {
                button.classList.remove('active')
            })

            button.classList.add('active')
            currentImage.classList.add('active')
        }
    })
}

document.querySelector('.portfolio__button:nth-child(4)').click()


// change theme
// section
const skills = document.querySelector('.skills')
const portfolio = document.querySelector('.portfolio')
const video = document.querySelector('.video')
const price = document.querySelector('.price')
const changeLogo = document.querySelector('.header__theme-img')

const changeThemeElements = [skills, portfolio, video, price]

function changeTheme() {
    changeThemeElements.forEach((element) => element.classList.toggle('light-theme'))
}

changeLogo.addEventListener('click', changeTheme)



changeLogo.addEventListener('click', (event) => {
    if(event.target.classList.toggle('light-theme-logo')) {
        changeLogo.src = "../portfolio/assets/svg/black-theme.svg"
    } else {
        changeLogo.src = "../portfolio/assets/svg/theme.svg"
        
    }
})


// buttons
const btns = document.querySelectorAll('.portfolio__button')

function changeColorButtons() {
    btns.forEach((btn) => btn.classList.toggle('portfolio__button-light-theme'))
}

changeLogo.addEventListener('click', changeColorButtons)



// titles

const titles = document.querySelectorAll('.title')

function changeColotTitles() {
    titles.forEach((title) => title.classList.toggle('title__light-theme'))
}

changeLogo.addEventListener('click', changeColotTitles)



// light theme adaptive menu

const closeLineLight = document.querySelectorAll('.header__nav-close-line')
function changeColorCloseLine() {
    closeLineLight.forEach((line) => line.classList.toggle('header__nav-close-light'))
}

changeLogo.addEventListener('click', changeColorCloseLine)



function changeColorMenu() {
    menu.classList.toggle('header__nav-light-theme')
}

changeLogo.addEventListener('click', changeColorMenu)


// translate

const langRu = document.querySelector('.lang-ru')
const langEn = document.querySelector('.lang-en')


function getTranslate(lang) {
    const elements = document.querySelectorAll('[data-i18]')
    elements.forEach((elem) => {
        elem.textContent = i18Obj[lang][elem.dataset.i18]
    })
}

langRu.addEventListener('click', () => {
    getTranslate('ru')
    langRu.classList.add('active')
    langEn.classList.remove('active')

})

langEn.addEventListener('click', () => {
    getTranslate('en')
    langEn.classList.add('active')
    langRu.classList.remove('active')
})

document.querySelector('.lang__link:nth-child(1)').click()
