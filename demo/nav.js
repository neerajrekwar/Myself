const buttonThree = document.querySelectorAll('.button-three');

 buttonThree.forEach('click', () => {
    const isOpened = buttonThree.getAttribute('aria-expanded');
    if (isOpened === 'false') {
        buttonThree.setAttribute('aria-expanded', 'true');
    } else {
        buttonThree.setAttribute('aria-expanded', 'false');
    }
 }) 