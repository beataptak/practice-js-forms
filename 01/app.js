document.addEventListener('DOMContentLoaded', init)

function init(){
    console.log('DOM')

    const formE1 = document.querySelector('form')
    console.log(formE1)
    if(formE1) {
        formE1.addEventListener('submit', function(e) {
        e.preventDefault()
    const firstName = e.target.elements.firstName.value
    const lastName = e.target.elements.lastName.value

console.log(firstName, lastName)

if(firstName !== '' && lastName !== ''){
const liElement = document.createElement('li')
liElement.classList.add('users-list__person')
liElement.innerText = firstName + ' ' + lastName

e.target.nextElementSibling.appendChild(liElement)}
else {
    alert('Wprowadź dane')
}

})
}
}
