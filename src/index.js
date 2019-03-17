import anime from 'animejs';
import "./main.scss";
export { heroAnimation, typewriter };

const heroAnimation = anime.timeline({
  easing: 'easeOutSine',
  autoplay: true,
})
.add({
  targets: document.querySelectorAll('.hero__animblock'),
  translateY: function (e, i) {    
    var offset = (1+i)*-40;
    console.log(e);
    return [offset + '%', '0%'];
  },
  duration: 3000
})
.add({
  targets: document.querySelectorAll('.hero__animline'),
  strokeDashoffset: [anime.setDashoffset, 0],
  duration: 600
}, 2800)
.add({
  targets: document.querySelectorAll('.hero__animtag'),
  opacity: [0, 1],
  duration: 400
}, 3000);

const typewriter = (selector, speed) => {
  const e = document.querySelector(selector);
  let promise = new Promise((resolve) => {
    const txt = e.innerText;
    let i = 0;
    e.innerText = "";
    e.style.opacity = 1;

    const writeText = () => {
      if (i < txt.length) {
        e.innerHTML += txt.charAt(i);
        i++;
        setTimeout(writeText, speed);
      }
      else {
        resolve();
      }
    }   

    writeText();
  });

  return promise;

}