const slidesContainer = document.getElementById('slides-container');
const totalSlides = 18;
const answers = [-1, -1, 1, -1, 2, -1, 4, -1, 3, -1, 3, -1, 2, -1, 1, -1, 4, -1]
const redLightImagePath = 'assets/red_light.png';
const greenLightImagePath = 'assets/green_light.png';

for (let i = 1; i <= totalSlides; i++) {
    const slide = document.createElement('div');
    slide.classList.add('slide');
    slide.id = `slide${i}`;

    if (answers[i - 1] !== -1) {
        const lightGroup = document.createElement('div')
        lightGroup.classList.add('light-group');

        const greenLight = document.createElement('img');
        greenLight.classList.add('light')
        greenLight.src = greenLightImagePath;
        const redLight = document.createElement('img');
        redLight.classList.add('light')
        redLight.src = redLightImagePath;

        const buttonGroup = document.createElement('div');

        buttonGroup.classList.add('button-group');

        for (let j = 1; j <= 4; j++) {
            const button = document.createElement('button');
            button.classList.add('round-button');
            if (answers[i - 1] === j) {
                button.addEventListener('mousedown', function() {
                    greenLight.classList.add('light-on');
                });
                button.addEventListener('mouseup', function() {
                    greenLight.classList.remove('light-on');
                });
                button.addEventListener('mouseleave', function() {
                    greenLight.classList.remove('light-on');
                });

                button.addEventListener('touchstart', function() {
                    greenLight.classList.add('light-on');
                });
                button.addEventListener('touchend', function() {
                    greenLight.classList.remove('light-on');
                });
                button.addEventListener('touchcancel', function() {
                    greenLight.classList.remove('light-on');
                });
            } else {
                button.addEventListener('mousedown', function() {
                    redLight.classList.add('light-on');
                });
                button.addEventListener('mouseup', function() {
                    redLight.classList.remove('light-on');
                });
                button.addEventListener('mouseleave', function() {
                    redLight.classList.remove('light-on');
                });

                button.addEventListener('touchstart', function() {
                    redLight.classList.add('light-on');
                });
                button.addEventListener('touchend', function() {
                    redLight.classList.remove('light-on');
                });
                button.addEventListener('touchcancel', function() {
                    redLight.classList.remove('light-on');
                });
            }
            buttonGroup.appendChild(button);
        }

        lightGroup.appendChild(redLight);
        lightGroup.appendChild(greenLight);
        slide.appendChild(lightGroup);
        slide.appendChild(buttonGroup);
    }
    slidesContainer.appendChild(slide);
}

let currentSlide = 0;
function showSlide(index) {
    const slides = document.querySelector('.slides');

    const totalSlides = document.querySelectorAll('.slide').length;
    if (index >= totalSlides) {
        currentSlide = totalSlides - 1;
    } else if (index < 0) {
        currentSlide = 0;
    } else {
        currentSlide = index;

    }
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;

}
function nextSlide() {
    showSlide(currentSlide + 1);

}
function prevSlide() {
    showSlide(currentSlide - 1);

}
