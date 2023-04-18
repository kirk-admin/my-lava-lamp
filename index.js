const app = {
  data() {
    return {
      circle1: { x: 400, y: 200, xSpeed: 0.2, ySpeed: 0.34 },
      circle2: { x: 600, y: 400, xSpeed: -0.5, ySpeed: 0.5 },
      circle3: { x: 800, y: 600, xSpeed: 0.3, ySpeed: 0.6 },
      circle4: { x: 1000, y: 500, xSpeed: -0.1, ySpeed: 0.6 },
      circle5: { x: 900, y: 300, xSpeed: -0.2, ySpeed: 0.3 },
      circle6: { x: 1200, y: 800, xSpeed: -0.6, ySpeed: 0.44 },
      circle7: { x: -200, y: 800, xSpeed: -0.8, ySpeed: 0.22 },
      circle8: { x: 150, y: 900, xSpeed: -0.1, ySpeed: 0.1 },
      circle9: { x: -200, y: 700, xSpeed: -0.4, ySpeed: 0.8 },
      circle10: { x: 300, y: 700, xSpeed: 0.7, ySpeed: 0.88 },
      bounds: {
        minX: -150,
        minY: -150,
        maxX: window.innerWidth + 100,
        maxY: window.innerHeight + 100,
      },
    };
  },
  mounted() {
    setInterval(() => {
      this.updateCirclePosition(this.circle1);
      this.updateCirclePosition(this.circle2);
      this.updateCirclePosition(this.circle3);
      this.updateCirclePosition(this.circle4);
      this.updateCirclePosition(this.circle5);
      this.updateCirclePosition(this.circle6);
      this.updateCirclePosition(this.circle7);
      this.updateCirclePosition(this.circle8);
      this.updateCirclePosition(this.circle9);
      this.updateCirclePosition(this.circle10);
    }, 10);
  },
  methods: {
    updateCirclePosition(circle) {
      circle.x += circle.xSpeed;
      circle.y += circle.ySpeed;
      if (circle.x < this.bounds.minX) {
        circle.x = this.bounds.minX + Math.random() * 10;
        circle.xSpeed = Math.abs(circle.xSpeed);
      } else if (circle.x > this.bounds.maxX) {
        circle.x = this.bounds.maxX - Math.random() * 10;
        circle.xSpeed = -Math.abs(circle.xSpeed);
      }
      if (circle.y < this.bounds.minY) {
        circle.y = this.bounds.minY + Math.random() * 10;
        circle.ySpeed = Math.abs(circle.ySpeed);
      } else if (circle.y > this.bounds.maxY) {
        circle.y = this.bounds.maxY - Math.random() * 10;
        circle.ySpeed = -Math.abs(circle.ySpeed);
      }
    },
  },
};

Vue.createApp(app).mount("#app");

document.getElementById("fullscreenButton").addEventListener("click", () => {
  toggleFullscreen();
});

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    openFullscreen(document.documentElement);
  } else {
    closeFullscreen();
  }
}

function openFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    // Chrome, Safari and Opera
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    // IE/Edge
    element.msRequestFullscreen();
  } else if (element.mozRequestFullScreen) {
    // Firefox
    element.mozRequestFullScreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    // Chrome, Safari and Opera
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    // IE/Edge
    document.msExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    // Firefox
    document.mozCancelFullScreen();
  }
}

var fps = document.getElementById("fps");
var startTime = Date.now();
var frame = 0;

function tick() {
  var time = Date.now();
  frame++;
  if (time - startTime > 1000) {
    fps.innerHTML = (frame / ((time - startTime) / 1000)).toFixed(1);
    startTime = time;
    frame = 0;
  }
  window.requestAnimationFrame(tick);
}
tick();
