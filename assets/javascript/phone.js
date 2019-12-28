const ps = document.querySelectorAll('.fader')
const hamburger = document.getElementById("ham")
const navl =  document.querySelectorAll('.navL')

const appearopts = {
    threshold: 1,
    rootMargin:"0px",
}
const appearOnScroll = new IntersectionObserver(function(e,observer){
    e.forEach(entry=>{
        
        if(!entry.isIntersecting){
            return;
        }else{
            console.log(e);
            
            entry.target.classList.add("appear")
            appearOnScroll.unobserve(entry.target)
        }
    })
},appearopts)

ps.forEach(p=>{
    appearOnScroll.observe(p)
})

function showNav(){
    navl.forEach(l=>{
        l.classList.toggle('show')
    })
}