var nao = document.getElementById("nao")
nao.addEventListener("mouseover", function () {
    var randomX = Math.floor(Math.random() * 500)
    var randomY = Math.floor(Math.random() * 500);
    nao.style.position = "absolute"
    nao.style.top = randomY + "px"
    nao.style.left = randomX + "px"
})

var sim = document.getElementById("sim")
sim.addEventListener("click", function () {
    window.location.href = "https://open.spotify.com/playlist/2wR8ml40HfjyYwUhBHoze9?si=83afd1b0bc334100"
})