let randomNumber = Math.floor(Math.random() * 10) + 1;
let score = 0;
let chances = 3;
const music = document.getElementById("bg-music");

// agar musik bisa diputar setelah user interaksi (syarat browser modern)
window.addEventListener("click", () => {
  if (music.paused) music.play();
}, { once: true });

function checkGuess() {
  const guess = document.getElementById("guess").value;
  const result = document.getElementById("result");

  if (!guess) {
    result.textContent = "⚠️ Masukkan angka dulu!";
    result.style.color = "orange";
    return;
  }

  if (guess == randomNumber) {
    result.textContent = "🎉 Benar! Angkanya " + randomNumber;
    result.style.color = "green";
    score++;
    document.getElementById("score").textContent = "Skor: " + score;
    randomNumber = Math.floor(Math.random() * 10) + 1;
    chances = 3;
    document.getElementById("chances").textContent = "Kesempatan: " + chances;
  } else {
    chances--;
    if (chances > 0) {
      result.textContent = "❌ Salah! Coba lagi.";
      result.style.color = "red";
    } else {
      result.textContent = "💀 Kalah! Jawabannya " + randomNumber;
      result.style.color = "purple";
      randomNumber = Math.floor(Math.random() * 10) + 1;
      chances = 3;
    }
    document.getElementById("chances").textContent = "Kesempatan: " + chances;
  }
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 10) + 1;
  chances = 3;
  document.getElementById("result").textContent = "";
  document.getElementById("guess").value = "";
  document.getElementById("chances").textContent = "Kesempatan: " + chances;
}

function toggleSound() {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}