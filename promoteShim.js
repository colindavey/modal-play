/*
// Borrowed and modified from https://codepen.io/bjkim/pen/JjXKjvr
// import styles from './async.css'
*/

const promoteShim = async (event, color='w') => {
    const value = await promote(document.querySelector('div.popup-box'), event.clientX, event.clientY, color)
    // const value = await promote(event.clientX, event.clientY, color)
    showChoice(value)
}
const showChoice = value => {
    document.getElementById("choice").innerHTML = value ? value : 'canceled'
}
