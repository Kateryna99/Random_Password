const button = document.querySelector('.random-password__button')
const input = document.querySelector('.random-password__input')
const copyIcon = document.querySelector('.random-password__icon')
const alertMessage = document.querySelector('.message')
const alertText  = document.querySelector('.message__text')


function createPassword(passwordLength) {
    let chars = '0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let password = ''

    for (let i =0;  i < passwordLength;i++){
        const randomChar = 1 + Math.floor((Math.random()*chars.length))
        password+=chars.substring(randomChar,randomChar+1)
    }
    input.value = password

}

function saveData() {
    copyIcon.addEventListener('click',()=>{
        if(input.value)
            copyPassword()
    })
}

function copyPassword() {
    input.select()
    input.setSelectionRange(0, 20)
    navigator.clipboard.writeText(input.value)
        .then(()=>{
            alertMessage.classList.add('message--active')
            alertText.innerHTML = `${input.value} copied!`

            setTimeout(()=>{
                alertMessage.classList.remove('message--active')
            },2000)
        })
}

function startAction() {
    button.addEventListener('click',()=>{
        createPassword(12)
    })
}
startAction()
saveData()