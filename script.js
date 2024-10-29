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

accordians.forEach(accordian=>{
    const icon = accordian.querySelector('.icon')
    const answer = accordian.querySelector('.accordian-answer')

    accordian.addEventListener('click',()=>{
        icon.classList.toggle('active')
        answer.classList.toggle('active')
    })
})

/* dropdown of contact in nav section */

const contactAction = document.querySelector('.cntct');
const contactDropdown = document.querySelector('.contact-dropdown');

// Toggle the dropdown when clicking the button
contactAction.addEventListener('click', (e) => {
    contactDropdown.classList.toggle('active'); 
    e.stopPropagation(); // Prevents the click from bubbling up
});

// Close the dropdown when clicking anywhere outside of it
document.addEventListener('click', (e) => {
    if (!contactDropdown.contains(e.target) && !contactAction.contains(e.target)) {
        contactDropdown.classList.remove('active'); // Remove 'active' class to hide the dropdown
    }
});


/* hamburger code starts from here */

const open =  document.querySelector('.open')
const screenHamburger = document.querySelector
('.tab-ph-hamburger')
open.addEventListener('click',()=>{
screenHamburger.classList.toggle('active')
})

/* contact screen */

const contactScreenBtn = document.querySelector('.cntct-screen')
const contactSection = document.querySelector('.contact-dropdown-screen')
contactScreenBtn.addEventListener('click',()=>{
    contactSection.classList.toggle('active')
})