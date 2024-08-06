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

document.addEventListener('DOMContentLoaded', function() {
    const nextone = document.querySelector('#nextone');
    const previous = document.querySelector('#previous');
    const cards = document.querySelector('.card-content');
  
    if (nextone && previous && cards) {
      nextone.addEventListener('click', function() {
        const scrollAmount = window.innerWidth / 2 > 600 ? window.innerWidth / 2 : window.innerWidth - 100;
        cards.scrollLeft += scrollAmount;
        console.log("Next button clicked, scrolling right by", scrollAmount);
      });
  
      previous.addEventListener('click', function() {
        const scrollAmount = window.innerWidth / 2 > 600 ? window.innerWidth / 2 : window.innerWidth - 100;
        cards.scrollLeft -= scrollAmount;
        console.log("Previous button clicked, scrolling left by", scrollAmount);
      });
    } else {
      console.error('Buttons or card content not found');
    }
  });