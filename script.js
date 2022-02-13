let value1 = document.getElementById('value1')
let value2 = document.getElementById('value2')
let value3 = document.getElementById('value3')
let inpSpeed = document.getElementById('inpSpeed');
let values = ['😄', '😃', '😅', '😛', '🤪', '😍', '😎', '🥸', '🥲']

function randomvalue()
{
    return values[parseInt(Math.random()*8)]
}
let animationid;
function updateAnimation(newSpeed)
{
    if (animationid) clearInterval(animationid);
    animationid = setInterval(() => {
      value1.innerText = randomvalue();
      value2.innerText = randomvalue();
      value3.innerText = randomvalue();
    }, 1000/newSpeed);
}


inpSpeed.onchange = function (ev) {
    document.documentElement.style.setProperty('--speed', ev.target.value);
    updateAnimation(ev.target.value)
}