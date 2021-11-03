const joke = document.getElementById("joke")
const btn = document.getElementById("jokeBtn")

btn.addEventListener("click",generatejoke)

generatejoke()

async function generatejoke() {

    const config = {
        headers : {
            Accept : "application/json",
        },
    }
    
    const res = await fetch('https://icanhazdadjoke.com', config)

    const data = await res.json()

    joke.innerHTML = data.joke

}

