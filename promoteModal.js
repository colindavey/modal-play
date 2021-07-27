// Borrowed and modified from https://codepen.io/bjkim/pen/JjXKjvr
// import styles from './promoteModal.css'

const promoteModal = (wrapper, x, y, color) => {
    return new Promise(resolve => {
        // setting wrapper = document body allows items to be pressed
        // const wrapper = document.body
        const wrapper = document.querySelector('div.popup-box');
        wrapper.classList.add('modal');

        const popup = document.createElement('div');
        popup.classList.add('promote');
        popup.style.left = `${x.toString()}px`
        popup.style.top = `${y.toString()}px`
        wrapper.appendChild(popup);
        
        const qBtn = document.createElement('button');
        const rBtn = document.createElement('button');
        const bBtn = document.createElement('button');
        const nBtn = document.createElement('button');
        const cancelBtn = document.createElement('button');

        popup.appendChild(qBtn);
        popup.appendChild(rBtn);
        popup.appendChild(bBtn);
        popup.appendChild(nBtn);
        popup.appendChild(cancelBtn);

        setPromoteButtons(qBtn, rBtn, bBtn, nBtn, cancelBtn, color)

        const onClick = pass => {
            resolve(pass);
            popup.remove();
            wrapper.classList.remove('modal');
        };

        qBtn.addEventListener('click', onClick.bind(null, 'q'));
        rBtn.addEventListener('click', onClick.bind(null, 'r'));
        bBtn.addEventListener('click', onClick.bind(null, 'b'));
        nBtn.addEventListener('click', onClick.bind(null, 'n'));
        cancelBtn.addEventListener('click', onClick.bind(null, false));
    })
};

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
