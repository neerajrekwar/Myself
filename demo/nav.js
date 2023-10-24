 const buttonThree = document.querySelector('.button-three');

 buttonThree.addEventListener('click', () => {
    const isOpened = buttonThree.getAttribute('aria-expanded');
    if (isOpened === 'false') {
        buttonThree.setAttribute('aria-expanded', 'ture');
    } else {
        buttonThree.setAttribute('aria-expanded', 'false');
    };
 });