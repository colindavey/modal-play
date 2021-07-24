// const WHITE_KING = '\u2654'
const WHITE_QUEEN = '\u2655'
const WHITE_ROOK = '\u2656'
const WHITE_BISHOP = '\u2657'
const WHITE_KNIGHT = '\u2658'
// const WHITE_PAWN = '\u2659'

// const BLACK_KING = '\u265A'
const BLACK_QUEEN = '\u265B'
const BLACK_ROOK = '\u265C'
const BLACK_BISHOP = '\u265D'
const BLACK_KNIGHT = '\u265E'
// const BLACK_PAWN = '\u265F'

const showChoice = value => {
    console.log('show', value)
    document.getElementById("choice").innerHTML = value ? value : 'canceled'
}

const setPromoteButtons = (qBtn, rBtn, bBtn, nBtn, cancelBtn, color) => {
    if (color === 'w') {
        qBtn.innerHTML = WHITE_QUEEN;
        rBtn.innerHTML = WHITE_ROOK;
        bBtn.innerHTML = WHITE_BISHOP;
        nBtn.innerHTML = WHITE_KNIGHT;    
    } else {
        qBtn.innerHTML = BLACK_QUEEN;
        rBtn.innerHTML = BLACK_ROOK;
        bBtn.innerHTML = BLACK_BISHOP;
        nBtn.innerHTML = BLACK_KNIGHT;    
    }
    cancelBtn.innerHTML = 'Cancel';
}
