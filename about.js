let customItems = document.querySelectorAll('.custom-count');

customItems.forEach(function(item) {
    let startNumber = 0;

    function counterUp() {
        startNumber += 5;
        item.innerHTML = startNumber;

        if (startNumber == item.dataset.number) {
            clearInterval(stop);
        }
    }

    let stop = setInterval(counterUp, 50);
});

$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});

// construction

