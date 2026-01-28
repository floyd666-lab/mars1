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
    audio.play().then(() => {
      btn.textContent = "⏸ Музыка играет";
      btn.classList.add("playing");
    });
  } else {
    audio.pause();
    btn.textContent = "🎵 Включить музыку";
    btn.classList.remove("playing");
  }
  });
});
