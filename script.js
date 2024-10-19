const one =  document.querySelector('.one')
const two =  document.querySelector('.two')
const three =  document.querySelector('.three')
const emptySun = document.querySelector('.emptySun')
const filledSun = document.querySelector('.sun')

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

const contactAction = document.querySelector('.cntct')
const contactDropdown = document.querySelector('.contact-dropdown')

contactAction.addEventListener('click',()=>{
contactDropdown.classList.toggle('active')
})

