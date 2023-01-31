window.onload(getJoke())

function toggleNav() {
    if (document.getElementById("navbar").style.top == "100px") {
        document.getElementById("navbar").style.top = "-200px";
    }
    else {
        document.getElementById("navbar").style.top = "100px";
    }
}

function enterAction(id) {
    document.getElementById("info"+id).style.width = "80%";
    document.getElementById("info"+id).style.left = "10%";
    document.getElementById("info"+id).style['border-color'] = "black";
}

function leaveAction(id) {
    document.getElementById("info"+id).style.width = "0%";
    document.getElementById("info"+id).style.left = "50%";
    document.getElementById("info"+id).style['border-color'] = "rgba(0, 0, 0, 0)";
}

async function getJoke() {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json()
    let quote = data.value
    quote = quote.replaceAll("Chuck Norris", "Skelly")
    quote = quote.replaceAll("\'", "\'s")
    document.getElementById("quote").innerHTML = quote
}