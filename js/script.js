const body = document.querySelector('body')
const buttons = document.querySelectorAll('.button')
const btnarr = Array.from(buttons)

// Heading color
const heading1 = document.querySelector('.heading1')
const heading2 = document.querySelector('.heading2')
const para1 = document.querySelector('.para1')
const para2 = document.querySelector('.para2')

btnarr.map(items=>{
  items.addEventListener('click', function(e){
    if(e.target.id=='red'){
      body.style.background = 'red'
        // Text color
        heading1.style.color='#ffff'
        heading2.style.color='#ffff'
        para1.style.color='#ffff'
        para2.style.color='#ffff'
    }
    if(e.target.id=='green'){
      body.style.background = 'green'
              // Text color
        heading1.style.color='#ffff'
        heading2.style.color='#ffff'
        para1.style.color='#ffff'
        para2.style.color='#ffff'
    }
    if(e.target.id=='purple'){
      body.style.background = 'purple'
              // Text color
        heading1.style.color='#ffff'
        heading2.style.color='#ffff'
        para1.style.color='#ffff'
        para2.style.color='#ffff'
    }
    if(e.target.id=='blue'){
      body.style.background = 'blue'
              // Text color
        heading1.style.color='#ffff'
        heading2.style.color='#ffff'
        para1.style.color='#ffff'
        para2.style.color='#ffff'
    }
    if(e.target.id=='yellow'){
      body.style.background = 'yellow'
              // Text color
        heading1.style.color='#333'
        heading2.style.color='#333'
        para1.style.color='#333'
        para2.style.color='#333'
    }
  })
})



