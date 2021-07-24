let promotion = ''

const promote = async (event, color='w') => {
    setPromoteButtons(
        document.getElementById("queen"),
        document.getElementById("rook"),
        document.getElementById("bishop"),
        document.getElementById("knight"),
        document.getElementById("cancel"),
        color
    )
    document.getElementById('modal').style.display='block'
    console.log('after')
}

const finishPromote = value => {
    console.log('finish')
    document.getElementById('modal').style.display='none'
    promotion=value
    console.log(promotion)
    showChoice(value)
}
