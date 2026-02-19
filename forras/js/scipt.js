const plastic = document.getElementById("plastic");
const paper = document.getElementById("paper");
const bio = document.getElementById("bio");

function kategoria1() {
    plastic.style = "display: block;"
    paper.style = "display: none;"
    bio.style = "display: none;"
}

function kategoria2() {
    plastic.style = "display: none;"
    paper.style = "display: block;"
    bio.style = "display: none;"
}

function kategoria3() {
    plastic.style = "display: none;"
    paper.style = "display: none;"
    bio.style = "display: block;"
}

function osszes() {
    plastic.style = "display: block;"
    paper.style = "display: block;"
    bio.style = "display: block;"
}