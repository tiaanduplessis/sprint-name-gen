import getSprintName from 'sprint-namer'

document.addEventListener('DOMContentLoaded', function() {
    const btnElem = document.querySelector('.js-generate-btn')
    const textElem = document.querySelector('.js-sprint-name')

    if (btnElem && textElem) {
        btnElem.addEventListener('click', function() {
            textElem.textContent = getSprintName()
        })

        textElem.textContent = getSprintName()
    }
})