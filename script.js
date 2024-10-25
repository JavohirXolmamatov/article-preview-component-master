const icon = document.querySelector('.icon');
const icon2 = document.querySelector('.icon2');
const hide = document.querySelector('.hide')

icon.addEventListener('click', (e) => {
    hide.classList.toggle('hidden')  
    // icon2.classList.toggle('hidden') 
})
icon2.addEventListener('click', (e) => {
    hide.classList.toggle('hidden')  
    // icon2.classList.toggle('hidden') 
})

