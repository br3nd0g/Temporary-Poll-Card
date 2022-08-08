pollCard = document.getElementById("pollCard");

function closeContainer() {
  pollCard.classList.add("disappear");
  setTimeout(() => {
    pollCard.style.display = "none";
  }, 1800);
}
