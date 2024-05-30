const form = document.querySelector("#form")
const nameInput = document.querySelector("name")
const emailInput = document.querySelector("email")
const phonenoInput = document.querySelector("phoneno")

console.log(form, nameInput,emailInput, phonenoInput)
form.addEventListener("submit", (event) => {
    event.preventDefault()
})

//checks if the name section is empty
if(nameInput.value ===""){
    alert("Please, fill in your name.");
    return;
}
//checks if the email section is empty
if(emailInput.value ===""){
    alert("Please, fill in your email.");
    return;
}
//checks if the phone number section is empty
if(phonenoInput.value ===""){
    alert("Please, fill in your phone number.");
    return;
}

// if every field are correctly filled, the form will be sent.
form.submit

// function that validates the email
function isEmailValid(email){
    //creates one regex so it can validate emails
    const emailRegex = new RegExp(
         /^[a-zA-Z0-9._-]+@/^[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );
    if(emailRegex.test(email)) {
        return true
    }
    return false
}