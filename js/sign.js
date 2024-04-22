// this is making label small and fit in inputs 
const input = document.querySelectorAll('.container .input-text');

console.log(input)

input.forEach((e) => {
    e.addEventListener('focus', () => {
        e.previousElementSibling.classList.add('make-small');
        e.previousElementSibling.classList.remove('label');
    });

    e.addEventListener('blur', () => {
        if (e.value == '') {
            e.previousElementSibling.classList.remove('make-small');
            e.previousElementSibling.classList.add('label')
        } else {}
    })
});


// password show and hide 

const show = document.querySelector('#pass');
const hide = document.querySelector('#text');
const passInput = document.querySelector('#password');


hide.addEventListener('click', () => {
    hide.style.display = 'none';
    show.style.display = 'block';
    passInput.setAttribute('type', 'text');
})

show.addEventListener('click', () => {
    hide.style.display = 'block';
    show.style.display = 'none';
    passInput.setAttribute('type', 'password');
})