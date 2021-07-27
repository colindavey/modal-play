const promoteShim = async (event, color='w') => {
    const value = await promoteModal(document.querySelector('div.popup-box'), event.clientX, event.clientY, color)
    document.getElementById("choice").innerHTML = value ? value : 'canceled'
}
