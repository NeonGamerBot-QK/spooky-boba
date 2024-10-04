if (!sessionStorage.getItem("allowed_approval"))
  window.location.href = "./beforeuenterthescary.html";

(() => {
  let last_click = null;
  const bgMusic = new Audio("./assets/audios/music.mp3", {
    loop: true,
    volume: 0.2,
  });
  bgMusic.volume = 0.05;
  bgMusic.loop = true;
  document.addEventListener("click", () => {
    if (bgMusic.paused) bgMusic.play({ volume: 0.2 });
    if (last_click && last_click + 1000 > Date.now()) return;
    last_click = Date.now();
    if (Math.random() * 3 > 2.8) {
      Array.from(document.querySelectorAll("img")).forEach((e) => {
        e.style.animation = "spin .5s linear infinite";
      });
      alert("Boo");
      setTimeout(() => {
        Array.from(document.querySelectorAll("img")).forEach((e) => {
          e.style.animation = null;
        });
        new Audio("./assets/audios/fnaf.mp3").play();
      }, 500);
    }
  });
  document.addEventListener("keydown", (e) => {
    if (last_click && last_click + 1000 > Date.now()) return;
    last_click = Date.now();
    if (e.shiftKey && e.key === " ") {
      if (Math.random() * 3 < 0.8) {
        if (document.querySelector("img").style.filter == "invert(100%)") {
          Array.from(document.querySelectorAll("img")).forEach((e) => {
            e.style.filter = null;
          });
        } else {
          Array.from(document.querySelectorAll("img")).forEach((e) => {
            e.style.filter = "invert(100%)";
          });
        }
      }
    }
  });

  const UUIDGeneratorBrowser = () =>
    ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16),
    );
  let d = UUIDGeneratorBrowser();
  document[d] = {
    allowed: true,
    d,
  };
  setInterval(() => {
    const old_d = d.toString();
    d = UUIDGeneratorBrowser();
    document[d] = Object(document[old_d]);
    document[d].d = d;
    delete document[old_d];
  }, 500);
  document.querySelector(".img-fire").addEventListener("click", () => {
    document.getElementById("main").classList.toggle("fire");
  });
})();
