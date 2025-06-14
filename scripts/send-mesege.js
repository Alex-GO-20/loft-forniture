const TOKEN = "7551296283:AAGlKz7Da6WhQXjE8BVekF_-w8WcM5wm1Tg"
const CHAT_ID = "-1002699406269"
const submitBtn = document.querySelector("#service-button")
const usernameInput = document.querySelector("#username")
const phoneInput =document.querySelector("#phone")

let username;
let phone;

usernameInput.addEventListener("input", () => {
    username = usernameInput.value;
})

phoneInput.addEventListener("input", () => {
    phone = phoneInput.value;
})


const sendMessage =() => {
fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        chat_id: CHAT_ID,
        text: `Имя: ${username}; Телефон: ${phone}`,
    })
})
}

submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    sendMessage()
     usernameInput.value = ""
     phoneInput.value = ""
})

