let promoting = false

const asyncPromote = (x, y, color) => {
    promoting = true
    return new Promise(resolve => {
        const wrapper = document.querySelector('div.popup-box');
        const popup = document.createElement('div');
        // popup.classList.add('w3-modal');
        popup.classList.add('promote');
        popup.style.left = `${x.toString()}px`
        popup.style.top = `${y.toString()}px`
        wrapper.appendChild(popup);
        
        const qBtn = document.createElement('button');
        const rBtn = document.createElement('button');
        const bBtn = document.createElement('button');
        const nBtn = document.createElement('button');
        const cancelBtn = document.createElement('button');
        // var outsideClick = false

        qBtn.innerHTML = WHITE_QUEEN;
        rBtn.innerHTML = WHITE_ROOK;
        bBtn.innerHTML = WHITE_BISHOP;
        nBtn.innerHTML = WHITE_KNIGHT;    
        if (color === 'b') {
            qBtn.innerHTML = BLACK_QUEEN;
            rBtn.innerHTML = BLACK_ROOK;
            bBtn.innerHTML = BLACK_BISHOP;
            nBtn.innerHTML = BLACK_KNIGHT;    
        }
        cancelBtn.innerHTML = 'Cancel';

        popup.appendChild(qBtn);
        popup.appendChild(rBtn);
        popup.appendChild(bBtn);
        popup.appendChild(nBtn);
        popup.appendChild(cancelBtn);

        const onClick = pass => {
            console.log('internal onclick')
            // if (outsideClick) {
            //     console.log('outside')
            //     outsideClick = false
            // } else {
                resolve(pass);
                // window.removeEventListener('click')
                popup.remove();
            // }
        };

        qBtn.addEventListener('click', onClick.bind(null, 'q'));
        rBtn.addEventListener('click', onClick.bind(null, 'r'));
        bBtn.addEventListener('click', onClick.bind(null, 'b'));
        nBtn.addEventListener('click', onClick.bind(null, 'n'));
        cancelBtn.addEventListener('click', onClick.bind(null, false));
        // window.addEventListener('click', window.onClick.bind(console.log('bind')))
    })
};
  
const promote = async (event, color='w') => {
    if (!promoting) {
        const value = await asyncPromote(event.clientX, event.clientY, color)
        promoting = false
        showChoice(value)
    }
}
