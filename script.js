const one =  document.querySelector('.one')
const two =  document.querySelector('.two')
const three =  document.querySelector('.three')
const emptySun = document.querySelector('.emptySun')

one.addEventListener('mouseover',()=>{
    two.classList.add('minus')
    three.classList.add('minus')
    one.addEventListener('mouseout',()=>{
        two.classList.remove('minus')
        three.classList.remove('minus')
    })
})
two.addEventListener('click',()=>{
    one.classList.add('minus')
})

two.addEventListener('mouseover',()=>{
    one.classList.add('minus')
    three.classList.add('minus')
    two.addEventListener('mouseout',()=>{
        one.classList.remove('minus')
        three.classList.remove('minus')
    })
})
two.addEventListener('click',()=>{
    one.classList.add('minus')
})

three.addEventListener('mouseover',()=>{
    one.classList.add('minus')
    two.classList.add('minus')
    three.addEventListener('mouseout',()=>{
        one.classList.remove('minus')
        two.classList.remove('minus')
    })
})

// dark mode functionality
const filledSun = document.querySelector('.sun')
emptySun.addEventListener('click',()=>{
   document.body.classList.toggle('dark')
   emptySun.classList.toggle('black')
})

// hidden section functionality
const seeMoreBtn = document.querySelector('.see-more-btn')
const hiddenDivs = document.querySelectorAll('.hidden')

seeMoreBtn.addEventListener('click', () => {
    hiddenDivs.forEach((div) => { 
            div.style.display = "flex"; 
    })

    seeMoreBtn.style.display = 'none'; 
});

//accordian section 

const accordians = document.querySelectorAll('.accordian')

accordians.forEach(accordian => {
    const icon = accordian.querySelector('.icon');
    const answer = accordian.querySelector('.accordian-answer');

    accordian.addEventListener('click', () => {
        if (icon.classList.contains('active')) {
            icon.classList.remove('active');
            answer.style.maxHeight = null;
        } else {
            icon.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});


/* hamburger code starts from here */

const open =  document.querySelector('.open')
const screenHamburger = document.querySelector
('.tab-ph-hamburger')
open.addEventListener('click',()=>{
screenHamburger.classList.toggle('active')
})



// Function to handle dropdown toggle and close logic
function setupDropdown(toggleSelector, menuSelector) {
    const toggleButton = document.querySelector(toggleSelector);
    const dropdownMenu = document.querySelector(menuSelector);


    // Toggle the dropdown when clicking the button
    toggleButton.addEventListener('click', (e) => {
        dropdownMenu.classList.toggle('active');
        e.stopPropagation(); // Prevent click from bubbling up to the document
    });

    // Close the dropdown when clicking anywhere outside
    document.addEventListener('click', (e) => {
        if (!dropdownMenu.contains(e.target) && !toggleButton.contains(e.target)) {
            dropdownMenu.classList.remove('active');
        }
    });
}

// Reuse the function for multiple dropdowns or menus
setupDropdown('.cntct', '.contact-dropdown');
setupDropdown('.cntct-screen', '.contact-dropdown-screen');


/* image issue fixed */
const images = [
    'assests/Hero/1.jpg',
    'assests/Hero/2.jpg',
    'assests/Hero/3.jpg',
    'assests/Hero/4.jpg',
    'assests/Hero/5.jpg',
    'assests/Hero/6.jpg',
];

images.forEach((src) => {
    const img = new Image();
    img.src = src;
});

