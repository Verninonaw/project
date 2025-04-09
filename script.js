const name = document.querySelector('.name')
const number = document.querySelector('.number')
const btn = document.querySelector('.btn')

btn.addEventListener('click', (event) => {
    event.preventDefault()
    if (name.value && number.value) {
        alert('Заявка оставлена! Мы свяжемся с вами в ближайшее время')
        name.value = ''
        number.value = ''
    }
    else {
        alert('Заполните все поля')
    }
})