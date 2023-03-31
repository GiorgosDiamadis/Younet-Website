
function qs(selector, all = false) {
    return all ? document.querySelectorAll(selector) : document.querySelector(selector);
}

var ssections = qs('.section', true);
var timeline = qs('.timeline');
var line = qs('.line');
line.style.bottom = `calc(100% - 20px)`;
var targetY = window.innerHeight * .8;

var maxBottom = document.querySelector(".section:last-child").offsetTop

function scrollHandler(e) {

    const timelineRect = timeline.getBoundingClientRect();

    const dist = targetY - timelineRect.top;


    if (dist < maxBottom) {
        line.style.bottom = `calc(100% - ${dist}px)`;
    } else {
        line.style.bottom = `calc(100% - ${maxBottom}px)`;

    }

    ssections.forEach(item => {
        const rect = item.getBoundingClientRect();

        if (rect.top + item.offsetHeight / 5 < targetY) {
            item.classList.add('show-me');
        } else {
            item.classList.remove('show-me');

        }
    });
}

scrollHandler();
line.style.display = 'block';
window.addEventListener('scroll', scrollHandler);