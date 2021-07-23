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
const color = 'w'

const asyncPromote = () => {
    return new Promise(resolve => {
        const wrapper = document.querySelector('div.popup-box');
        const popup = document.createElement('div');
        popup.classList.add('promote');
        wrapper.appendChild(popup);
        
        const qBtn = document.createElement('button');
        const rBtn = document.createElement('button');
        const bBtn = document.createElement('button');
        const nBtn = document.createElement('button');
        const cancelBtn = document.createElement('button');

        qBtn.textContent = WHITE_QUEEN;
        rBtn.textContent = WHITE_ROOK;
        bBtn.textContent = WHITE_BISHOP;
        nBtn.textContent = WHITE_KNIGHT;    
        if (color === 'b') {
            qBtn.textContent = BLACK_QUEEN;
            rBtn.textContent = BLACK_ROOK;
            bBtn.textContent = BLACK_BISHOP;
            nBtn.textContent = BLACK_KNIGHT;    
        }
        cancelBtn.textContent = 'Cancel';

        popup.appendChild(qBtn);
        popup.appendChild(rBtn);
        popup.appendChild(bBtn);
        popup.appendChild(nBtn);
        popup.appendChild(cancelBtn);

        const onClick = pass => {
        resolve(pass);
        popup.remove();
        };

        qBtn.addEventListener('click', onClick.bind(null, 'q'));
        rBtn.addEventListener('click', onClick.bind(null, 'r'));
        bBtn.addEventListener('click', onClick.bind(null, 'b'));
        nBtn.addEventListener('click', onClick.bind(null, 'n'));
        cancelBtn.addEventListener('click', onClick.bind(null, false));
    })
};
  
const promote = async (event) => {
    console.log(event)
    const value = await asyncPromote()
    document.getElementById("choice").innerHTML = value ? value : 'canceled';
}
