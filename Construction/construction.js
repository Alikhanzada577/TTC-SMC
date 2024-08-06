
$(".hover").mouseleave(function () {
    $(this).removeClass("hover");
  });
  
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