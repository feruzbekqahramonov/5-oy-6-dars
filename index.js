const modal = document.getElementById("modal");
const btn = document.getElementById("btn");
const span = document.getElementsByClassName("close")[0];
const header = document.getElementById('header');

btn.onclick = function() {
  modal.style.display = "block";
  header.style.display = "none";
}

span.onclick = function() {
  modal.style.display = "none";
  header.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    header.style.display = "block";
  }
}