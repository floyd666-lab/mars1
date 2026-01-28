document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("musicBtn");
  const audio = document.getElementById("bgMusic");

  if (!btn || !audio) {
    console.error("Music elements not found");
    return;
  }

  btn.addEventListener("click", () => {
    if (audio.paused) {
      audio.volume = 0.8;
      audio.play()
        .then(() => {
          btn.textContent = "Остановить музыку";
        })
        .catch(err => {
          console.error("Audio play blocked:", err);
        });
    } else {
      audio.pause();
      btn.textContent = "Включить музыку";
    }
  });
});
