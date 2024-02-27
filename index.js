/** @format */

const notificationTop = document.querySelector('.notification--top')
const notificationBottom = document.querySelector('.notification--bottom')
const notificationCloseTop = document.querySelector('.notification__close--top')
const notificationCloseBottom = document.querySelector('.notification__close--bottom')

function closeNotification(notificationElement) {
    notificationElement.style.display = 'none'
}

notificationCloseTop.addEventListener('click', () =>
    closeNotification(notificationTop)
)
notificationCloseBottom.addEventListener('click', () =>
    closeNotification(notificationBottom)
)

