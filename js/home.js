// adding click event for home navbar 

const bar = document.getElementById('bar');
const cross = document.getElementById('cross');
const nav = document.querySelector('.nav');

bar.addEventListener('click', () => {
    bar.style.display = 'none';
    cross.style.display = 'block';
    nav.style.left = '20%';
    document.body.classList.add('stop-scroll');
});

cross.addEventListener('click', () => {
    bar.style.display = 'block';
    cross.style.display = 'none';
    nav.style.left = '100%';
    document.body.classList.remove('stop-scroll');
})

// drop down arrow of foooter 
const arrow = document.querySelectorAll('.arrow');

arrow.forEach(e => {
    e.addEventListener('click', () => {
        var footerList = e.parentElement.nextElementSibling;

        if (e.classList.contains('temp')) {
            e.classList.remove('temp');
            footerList.style.display = 'none';
            e.style.transform = 'rotate(0deg)';
        } else {
            e.classList.add('temp');
            footerList.style.display = 'block';
            e.style.transform = 'rotate(180deg)';
        }



    })
});


// Menu page menu-nav changing to fixed

const menuNav = document.querySelector('.menu-nav');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > menuNav.offsetTop) {
        menuNav.classList.add('sticky');
    } else {
        menuNav.classList.remove('sticky');
    }

})


// Js for Store search

const search = document.querySelector('#search');
const searchBtn = document.querySelector('#search-icon');
const heading = document.querySelector('.store-search h2');


searchBtn.addEventListener('click', () => {

    heading.textContent = `Can't find any Starbucks store in ${search.value[0].toUpperCase() + search.value.slice(1)}`;
})