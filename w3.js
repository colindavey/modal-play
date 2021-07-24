var promotion = ''

const promote = async (event, color='w') => {
    setButtons(color)
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

const setButtons = color => {
    if (color === 'w') {
        document.getElementById("queen").innerHTML = WHITE_QUEEN;
        document.getElementById("rook").innerHTML = WHITE_ROOK;
        document.getElementById("bishop").innerHTML = WHITE_BISHOP;
        document.getElementById("knight").innerHTML = WHITE_KNIGHT;
    } else {
        document.getElementById("queen").innerHTML = BLACK_QUEEN;
        document.getElementById("rook").innerHTML = BLACK_ROOK;
        document.getElementById("bishop").innerHTML = BLACK_BISHOP;
        document.getElementById("knight").innerHTML = BLACK_KNIGHT;
    }
    document.getElementById("cancel").innerHTML = 'Cancel';
}
