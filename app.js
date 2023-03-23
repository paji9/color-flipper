const colors = ['green', 'red', 'rgba(133, 122, 200)', '#F15025'];

const btn = document.getElementById('btn'),
      color = document.querySelector('.color');

btn.addEventListener('click', function() {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(random() * colors.length);
}