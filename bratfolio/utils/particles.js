/* 
    Particles.js by Vincent Garreau
    https://github.com/VincentGarreau/particles.js/
*/
var config = {
  "particles": {
    "number": {
      "value": 150,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      }
    },
    "opacity": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.5,
        "sync": false
      }
    },
    "size": {
      "value": 4,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 10,
        "size_min": 0.3,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 4,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 600
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 200,
        "line_linked": {
          "opacity": 0.5
        }
      },
      "push": {
        "particles_nb": 5
      }
    }
  },
  "retina_detect": true
}

function particles(mode) {
  switch(mode) {
    case 'desktop': {
      console.log('desk');
      pJS.particles.number.value = 150;
      pJS.fn.particlesRefresh();
      break;
    }
    case 'mobile': {
      console.log('mobile');
      pJS.particles.number.value = 50;
      pJS.fn.particlesRefresh();
      break;
    }
    default: {
      console.log('No mode specified. Please choose: desktop/mobile')
    }
  }
}

var desktop;

function checkOnResize() {
  if (window.innerWidth > 1000) {
    if (!desktop) {
      particles('desktop');
      desktop = true;
    }
  } else {
    if (desktop) {
      particles('mobile');
      desktop = false;
    }
  }
}

if (window.innerWidth > 1000) {
  particlesJS('particles-js', config);
  pJS('particles-js', config);
  desktop = true;
} else {
  config.particles.number.value = 50;
  particlesJS('particles-js', config);
  pJS('particles-js', config);
  desktop = false;
}

window.addEventListener('resize', function () {
  checkOnResize();
}, true);