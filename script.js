let currentIndex = 0;

    function showSlide(index) {
        const slider = document.querySelector('.slider');
        const slides = document.querySelectorAll('.slide');

        if (index >= slides.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slides.length - 1;
        } else {
            currentIndex = index;
        }

        const offset = -currentIndex * 100;
        slider.style.transform = `translateX(${offset}%)`;
    }

    function changeSlide(n) {
        showSlide(currentIndex + n);
    }

    // Automatic sliding every 3 seconds
    setInterval(() => {
        changeSlide(1);
    }, 3000);